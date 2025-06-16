interface IDisplay {
  // 접근성
  isColorContrastEnabled: boolean;
  isMotionReduced: boolean;
  isImageDescriptionAdded: boolean;

  // 표시
  fontSize: FontSizeType;
  colorTheme: ColorThemeType;
  bgTheme: BgThemeType;

  // 언어
  language: LanguageType;

  // 데이터 사용량
  isDataSaverEnabled: boolean;
  isAutoplayEnabled: boolean;
}

type LanguageType = "en_US" | "ja_JP" | "ko_KR" | "zh_CN" | "zh_TW";

type FontSizeType = "xs" | "s" | "b" | "l" | "xl";

type BgThemeType = "light" | "dark" | "darkest";
type ColorThemeType =
  | "cornflowerblue"
  | "red"
  | "green"
  | "purple"
  | "orange"
  | "yellow";

export type {
  IDisplay,
  FontSizeType,
  BgThemeType,
  ColorThemeType,
  LanguageType,
};
