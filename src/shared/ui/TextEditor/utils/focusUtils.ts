const handleFocus = (
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsFocused(true);
};

const handleBlur = (
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsFocused(false);
};

export { handleBlur, handleFocus };
