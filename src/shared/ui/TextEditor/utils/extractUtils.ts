import { REGEXP } from "@shared/constants";
import type {
  IInlineEntity,
  InlineType,
  ISegment,
} from "@shared/ui/TextEditor";

const extractLines = (target: HTMLDivElement): string[] => {
  const lines = Array.from(target.children).map(
    (child) => child.textContent || ""
  );

  return lines;
};

// inline 추출하기
const extractInlines = (line: string): IInlineEntity[] => {
  // 추출할 inline의 형식
  const inlines: { text: string; type: InlineType; index: number }[] = [];

  // 각 inline 별 형식에 따른 추출
  for (const regExp of [
    REGEXP.HASHTAG_REGEX,
    REGEXP.MENTION_REGEX,
    REGEXP.URL_REGEX,
  ]) {
    let curIndex = 0;

    const type =
      regExp === REGEXP.HASHTAG_REGEX
        ? "hashtag"
        : regExp === REGEXP.MENTION_REGEX
        ? "mention"
        : "url";

    line.match(regExp)?.forEach((inline) => {
      const index = line.indexOf(inline, curIndex);

      inlines.push({
        text: inline,
        type,
        index,
      });

      curIndex = index + inline.length;
    });
  }

  // 추출한 inline들을 index 순으로 정렬
  const sortedInlines = inlines.sort((a, b) => a.index - b.index);

  return sortedInlines;
};

// segment 추출하기
const extractSegments = (line: string) => {
  const segments: ISegment[] = [];
  let curIndex = 0;

  // 라인에 포함된 inline들 추출
  const inlines = extractInlines(line);

  // segment 분류하기
  for (const inline of inlines) {
    // 인라인 텍스트의 위치 찾기
    const index = inline.index;

    // index와 curIndex가 같지 않은 경우 (문자열이 inline이 아닌 경우)
    if (index !== curIndex) {
      // text 타입으로 추가
      segments.push({
        type: "text",
        text: line.slice(curIndex, index),
      });
    }

    // 찾은 문자열을 inline 타입으로 추가
    segments.push(inline);

    // curIndex 업데이트
    curIndex = index + inline.text.length;
  }

  // 인라인 확인 후에도 문자열이 존재하는 경우
  if (curIndex < line.length) {
    segments.push({
      type: "text",
      text: line.slice(curIndex),
    });
  }

  // 라인이 생성되지 않은 경우:
  if (!line) {
    segments.push({
      type: "text",
      text: "",
    });
  }

  return segments;
};

export { extractLines, extractInlines, extractSegments };
