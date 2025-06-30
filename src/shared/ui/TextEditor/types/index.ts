type InlineType = "hashtag" | "mention" | "url";

type SegmentType = InlineType | "text";

interface IInlineEntity {
  type: InlineType;
  text: string;
}

interface ISegment {
  type: SegmentType;
  text: string;
}

export type { InlineType, IInlineEntity, SegmentType, ISegment };
