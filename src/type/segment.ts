import { SegmentType } from "@/lib/segments";

export interface SegmentDefaultProperties {
  isRoot?: boolean;
}

export interface SegmentContentProperties {
  isHiddenFromNav?: boolean;
  isHiddenFromSearch?: boolean;
}

export interface SegmentProductProperties {
  opaccIds?: string[];
}

export type SegmentProperties = SegmentDefaultProperties &
  (SegmentContentProperties | SegmentProductProperties);

export interface SegmentBase<Type extends SegmentType, Properties = {}> {
  id: string;
  title: string;
  slug: string[];
  children: string[];
  type: Type;
  properties: SegmentDefaultProperties & Properties;
}

export type SegmentDefault = SegmentBase<
  Exclude<SegmentType, "PRODUCT" | "CONTENT">,
  {}
>;
export type SegmentContent = SegmentBase<"CONTENT", SegmentContentProperties>;
export type SegmentProduct = SegmentBase<"PRODUCT", SegmentProductProperties>;

export type Segment = SegmentDefault | SegmentContent | SegmentProduct;
