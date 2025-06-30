import { REGEXP } from "@shared/constants";
import type { IInlineEntity, InlineType } from "@shared/ui/TextEditor";

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

export { extractLines, extractInlines };
