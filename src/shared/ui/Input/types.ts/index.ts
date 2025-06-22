interface IInputContext {
  disabled: boolean;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  field: string;
}

export type { IInputContext };
