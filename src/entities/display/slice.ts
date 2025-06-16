import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  BgThemeType,
  ColorThemeType,
  FontSizeType,
  IDisplay,
  LanguageType,
} from "./types";

const initialState: IDisplay = {
  isColorContrastEnabled: false,
  isMotionReduced: false,
  isImageDescriptionAdded: false,

  fontSize: "b",
  colorTheme: "cornflowerblue",
  bgTheme: "light",

  language: "ko_KR",

  isDataSaverEnabled: false,
  isAutoplayEnabled: true,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplayLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.language = action.payload;
    },
    setFontSize: (state, action: PayloadAction<FontSizeType>) => {
      state.fontSize = action.payload;
    },
    setColorTheme: (state, action: PayloadAction<ColorThemeType>) => {
      state.colorTheme = action.payload;
    },
    setBgTheme: (state, action: PayloadAction<BgThemeType>) => {
      state.bgTheme = action.payload;
    },
  },
});

export default displaySlice.reducer;

export const { setDisplayLanguage, setBgTheme, setColorTheme, setFontSize } =
  displaySlice.actions;
