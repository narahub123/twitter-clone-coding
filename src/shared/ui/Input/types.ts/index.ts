import type { ColorSchemeType } from "@shared/types";

interface IInputContext {
  disabled: boolean;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  field: string;
  label: string;
  value: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  color: ColorSchemeType | "colorTheme";
  placeholder?: string;
}

export type { IInputContext };
