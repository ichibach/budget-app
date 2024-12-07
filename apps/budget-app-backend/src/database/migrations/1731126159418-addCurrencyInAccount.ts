import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCurrencyInAccount1731126159418 implements MigrationInterface {
    name = 'AddCurrencyInAccount1731126159418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" RENAME COLUMN "currency" TO "currencyCode"`);
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "currencyCode"`);
        await queryRunner.query(`ALTER TABLE "account" ADD "currencyCode" character varying`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_d403be676c5ead53ff6fc9470a1" FOREIGN KEY ("currencyCode") REFERENCES "currency"("code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_d403be676c5ead53ff6fc9470a1"`);
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "currencyCode"`);
        await queryRunner.query(`ALTER TABLE "account" ADD "currencyCode" character(3) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "account" RENAME COLUMN "currencyCode" TO "currency"`);
    }

}
