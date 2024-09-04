import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDefaultValueToBalance1725458604316 implements MigrationInterface {
    name = 'AddDefaultValueToBalance1725458604316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operation" ALTER COLUMN "fromAmount" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "operation" ALTER COLUMN "toAmount" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "current_balance" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "current_balance" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "operation" ALTER COLUMN "toAmount" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "operation" ALTER COLUMN "fromAmount" DROP DEFAULT`);
    }

}
