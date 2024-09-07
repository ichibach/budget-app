import type {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from 'typeorm';
import { ILike } from 'typeorm';
import { ConnectionName } from '../const/connection-names.const';
import { CollectionPagination } from '../attributes/collection.attributes';

export class BaseRepository<
  T extends ObjectLiteral & { id?: number },
  R extends Repository<T> = Repository<T>,
> {
  public readonly repositories = new Map<string, R>();

  constructor(repos: R[]) {
    repos.forEach((r) => {
      // console.log(r['@transactional/entity-manager'].connection.name)
      this.repositories.set(r['@transactional/entity-manager'].connection.name, r);
    });
  }

  public async save(d: DeepPartial<T>) {
    return this.repositories.get(ConnectionName.rw).save(d);
  }

  public async insertMany(d: Partial<T[]>) {
    return this.repositories.get(ConnectionName.rw).insert(d);
  }

  public async insertOne(d: Partial<T>) {
    return this.repositories.get(ConnectionName.rw).insert(d);
  }

  public async findOneById(
    id: T[string],
    repo = ConnectionName.ro,
    options?: FindOneOptions<T>,
  ) {
    return this.repositories
      .get(repo)
      .findOneOrFail({ where: { id }, withDeleted: false, ...options });
  }

  public paginate(
    pagination: CollectionPagination,
    repo = ConnectionName.ro,
    where?: FindOptionsWhere<T> | FindOptionsWhere<T>[],
    options?: FindManyOptions<T>,
  ) {
    return this.repositories.get(repo).findAndCount({
      skip: pagination.skip,
      take: pagination.take,
      where: where,
      ...options,
    });
  }

  createSearchFilter(field: string, searchText?: string) {
    if (!searchText) return {};

    return { [field]: ILike(`%${searchText}%`) };
  }

  public async deleteById(id: number) {
    return this.repositories.get(ConnectionName.rw).softDelete(id);
  }

  public async deleteHardById(id: number) {
    return this.repositories.get(ConnectionName.rw).delete(id);
  }

  public async deleteHardByIds(ids: number[]) {
    return this.repositories.get(ConnectionName.rw).delete(ids);
  }

  public async update(where: FindOptionsWhere<T>, d: Partial<T>) {
    return this.repositories.get(ConnectionName.rw).update(where, d);
  }

  public async updateById(id: number, d: Partial<T>) {
    return this.repositories.get(ConnectionName.rw).update(id, d);
  }

  public async removeMany(d: T[]) {
    return this.repositories.get(ConnectionName.rw).softRemove(d);
  }

  public async removeOne(d: T) {
    return this.repositories.get(ConnectionName.rw).softRemove(d);
  }

  public async restoreMany(d: T[]) {
    return this.repositories.get(ConnectionName.rw).recover(d);
  }

  public async findOne(
    where: Partial<T>,
    repo = ConnectionName.ro,
    withDeleted = false,
  ) {
    return this.repositories.get(repo).findOne({
      where,
      withDeleted,
    });
  }

  public async findOneOrFail(
    where: Partial<T>,
    repo = ConnectionName.ro,
    withDeleted = false,
  ) {
    return this.repositories.get(repo).findOneOrFail({
      where,
      withDeleted,
    });
  }
}
