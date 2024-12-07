import { Injectable } from "@nestjs/common";
import { BaseRepositoryFactory } from "../../shared/database/repository/base-repository.factory";
import { Account } from "./entities/account.entity";


@Injectable()
export class AccountRepository extends BaseRepositoryFactory(Account) {}
