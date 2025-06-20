import { MODAL_OVERLAY_OPACITY } from "@shared";

const clampOpacity = (opacity: number) => {
  if (typeof opacity !== "number") return MODAL_OVERLAY_OPACITY;
  return opacity > 1 ? 1 : opacity < 0 ? 0 : opacity;
};

export { clampOpacity };
