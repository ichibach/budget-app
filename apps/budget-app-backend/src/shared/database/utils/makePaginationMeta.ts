import type {
  CollectionPagination,
  PaginationMeta,
} from '../attributes/collection.attributes';

export function makePaginationMeta<T>(
  rows: [T[], number],
  pagination: CollectionPagination,
): PaginationMeta<T> {
  const [data, count] = rows;
  const meta = { ...pagination, count };

  return { data, meta };
}
