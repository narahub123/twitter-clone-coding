import {
  // slice
  displaySlice,

  // reducers
  setDisplayLanguage,
  setBgTheme,
  setColorTheme,
  setFontSize,

  //selectors
  selectDisplayLanguage,
  selectFontSize,
  selectColorTheme,
  selectBgTheme,
} from "./display";

import type {
  BgThemeType,
  FontSizeType,
  IDisplay,
  LanguageType,
} from "./display";

export {
  // slice
  displaySlice,

  // reducers
  setDisplayLanguage,
  setBgTheme,
  setColorTheme,
  setFontSize,

  // selectors
  selectDisplayLanguage,
  selectFontSize,
  selectColorTheme,
  selectBgTheme,
};

export type { BgThemeType, FontSizeType, IDisplay, LanguageType };
