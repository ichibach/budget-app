export interface PaginationParam {
  skip?: number;
  take?: number;
}

export interface PaginationCollectionMeta extends Required<PaginationParam> {
  count: number;
}

export interface PaginationCollection <T> {
  data: T[];
  meta: PaginationCollectionMeta;
}
