const convertToPx = (value: number, unit: string): number => {
  return unit === "rem" ? value * 16 : value; // rem을 px로 변환
};

export default convertToPx;
