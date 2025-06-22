interface IInputContext {
  disabled: boolean;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { IInputContext };
