type InlineType = "hashtag" | "mention" | "url";

type SegmentType = InlineType | "text";

interface IInlineEntity {
  type: InlineType;
  text: string;
  index: number;
}

interface ISegment {
  type: SegmentType;
  text: string;
}

interface ICaretPosition {
  caretPos: number;
  row: number;
  col: number;
}

interface IInlineRect {
  top?: number;
  left?: number;
  height?: number;
}

export type {
  InlineType,
  IInlineEntity,
  SegmentType,
  ISegment,
  ICaretPosition,
  IInlineRect,
};
