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
}

export type { IInputContext };
