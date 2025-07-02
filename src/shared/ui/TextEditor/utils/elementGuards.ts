// 현재 요소가 inline segment인지 확인하는 함수
const isInlineSegment = (element: HTMLElement) => {
  return element.className.includes("inline");
};

export { isInlineSegment };
