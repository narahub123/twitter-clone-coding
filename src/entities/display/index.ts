import displaySlice, {
  setDisplayLanguage,
  setBgTheme,
  setColorTheme,
  setFontSize,
} from "./slice";

import {
  selectDisplayLanguage,
  selectFontSize,
  selectColorTheme,
  selectBgTheme,
} from "./selectors";

import type {
  BgThemeType,
  FontSizeType,
  IDisplay,
  LanguageType,
} from "./types";

export {
  //  slices
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
