import { selectDisplayLanguage } from "@entities";
import { languages, useAppSelector } from "@shared";

type ContentType = (typeof languages)["ko_KR"];

// 객체 T의 중첩된 키 경로들을 튜플 형태로 추출
type NestedKeys<T> = T extends object
  ? { [K in keyof T]: [K, ...NestedKeys<T[K]>] | [K] }[keyof T]
  : [];

type KeywordsTypes = [...NestedKeys<ContentType>];

const useLanguageContent = (keywords: KeywordsTypes) => {
  // 현재 디스플레이 언어 설정
  const curLanguage = useAppSelector(selectDisplayLanguage);

  // 사용할 언어 파일
  const lang = languages[curLanguage];

  // 언어 설정 가져오기
  const localizedTexts = keywords.reduce(
    (section: any, componentName: string) => {
      if (section && componentName in section) {
        return section[componentName];
      }

      return undefined;
    },
    lang
  );

  return localizedTexts;
};

export default useLanguageContent;
