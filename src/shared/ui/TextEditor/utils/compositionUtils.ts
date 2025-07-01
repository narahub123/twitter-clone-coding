const handleCompositionStart = (
  setIsComposing: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsComposing(true);
};

const handleCompositionEnd = (
  setIsComposing: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsComposing(false);
};

export { handleCompositionEnd, handleCompositionStart };
