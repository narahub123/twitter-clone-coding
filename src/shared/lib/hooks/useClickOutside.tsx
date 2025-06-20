import { useEffect, type RefObject } from "react";

const useClickOutside = (
  containerRef: RefObject<HTMLElement | null>,
  onClickOutside: () => void
) => {
  const handleClickOutside = (e: MouseEvent) => {
    if (!containerRef.current) return;

    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      onClickOutside();
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};

export default useClickOutside;
