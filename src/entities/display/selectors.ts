import type { RootState } from "@app";

const selectDisplayLanguage = (state: RootState) => state.display.language;
const selectFontSize = (state: RootState) => state.display.fontSize;
const selectColorTheme = (state: RootState) => state.display.colorTheme;
const selectBgTheme = (state: RootState) => state.display.bgTheme;

export {
  selectDisplayLanguage,
  selectFontSize,
  selectColorTheme,
  selectBgTheme,
};
