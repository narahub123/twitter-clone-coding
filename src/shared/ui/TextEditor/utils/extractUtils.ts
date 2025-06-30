const extractLines = (target: HTMLDivElement): string[] => {
  const lines = Array.from(target.children).map(
    (child) => child.textContent || ""
  );

  return lines;
};

export { extractLines };
