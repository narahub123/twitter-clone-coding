import { Constants, type PlacementType } from "@shared";

const clampOpacity = (opacity: number) => {
  if (typeof opacity !== "number") return Constants.MODAL_OVERLAY_OPACITY;
  return opacity > 1 ? 1 : opacity < 0 ? 0 : opacity;
};

const normalizePercentSize = (size: number | string) => {
  if (typeof size === "number") return `${size}%`;
  else return size;
};

const normalizePxSize = (size: number | string) => {
  return typeof size === "number" ? `${size}px` : size;
};

const getPlacementOffset = (
  placement: PlacementType,
  offsetX: number | string,
  offsetY: number | string
) => {
  const [verti, hori] = placement.split("-");

  return {
    [verti]: normalizePxSize(offsetY),
    [hori]: normalizePxSize(offsetX),
  };
};

export {
  clampOpacity,
  normalizePercentSize,
  normalizePxSize,
  getPlacementOffset,
};
