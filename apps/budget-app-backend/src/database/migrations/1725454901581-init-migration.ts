import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1725454901581 implements MigrationInterface {
    name = 'InitMigration1725454901581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "icon" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "path" character varying NOT NULL, CONSTRAINT "PK_7860777a14d73877ab2bf5a341c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "scheduled-operation" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "repeat" boolean NOT NULL DEFAULT false, "repeat_expression" character varying(50) NOT NULL, "enable_notification" boolean NOT NULL DEFAULT true, "operationId" integer, "userId" integer, CONSTRAINT "REL_9a5ef9f1f73a9a9f5d2bfa0a4a" UNIQUE ("operationId"), CONSTRAINT "PK_55f76da2b0b76671d799e1850f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."OperationType" AS ENUM('income', 'expense', 'transfer', 'scheduled')`);
        await queryRunner.query(`CREATE TABLE "operation" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "operation_type" "public"."OperationType" NOT NULL, "description" text NOT NULL, "fromAmount" double precision NOT NULL, "toAmount" double precision NOT NULL, "fromAccountId" integer, "toAccountId" integer, "userId" integer, CONSTRAINT "PK_18556ee6e49c005fc108078f3ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."CategoryType" AS ENUM('income', 'expense')`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "type" "public"."CategoryType" NOT NULL, "currency" character(3) NOT NULL, "iconId" integer, "userId" integer, "parentId" integer, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "username" character varying NOT NULL, "hashPassword" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."AccountType" AS ENUM('default', 'saving', 'debt')`);
        await queryRunner.query(`CREATE TABLE "account" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "description" text NOT NULL, "account_type" "public"."AccountType" NOT NULL, "currency" character(3) NOT NULL, "current_balance" double precision NOT NULL, "is_into_general_balance" boolean NOT NULL DEFAULT true, "iconId" integer, "userId" integer, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "scheduled-operation" ADD CONSTRAINT "FK_9a5ef9f1f73a9a9f5d2bfa0a4af" FOREIGN KEY ("operationId") REFERENCES "operation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scheduled-operation" ADD CONSTRAINT "FK_ca34c8cf34a56061c33a6c21ba0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_a713331f8e376dfcb8f41c570f8" FOREIGN KEY ("fromAccountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_58819ef7d750879ee13cfdeb683" FOREIGN KEY ("toAccountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_7df4a22dbf4c663666e21c21123" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_6b1c6bc5c2fbba874342e58ba67" FOREIGN KEY ("iconId") REFERENCES "icon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_32b856438dffdc269fa84434d9f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_d5456fd7e4c4866fec8ada1fa10" FOREIGN KEY ("parentId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_88bd2436c3bd71985e189510174" FOREIGN KEY ("iconId") REFERENCES "icon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_60328bf27019ff5498c4b977421" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_60328bf27019ff5498c4b977421"`);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_88bd2436c3bd71985e189510174"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_d5456fd7e4c4866fec8ada1fa10"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_32b856438dffdc269fa84434d9f"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_6b1c6bc5c2fbba874342e58ba67"`);
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_7df4a22dbf4c663666e21c21123"`);
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_58819ef7d750879ee13cfdeb683"`);
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_a713331f8e376dfcb8f41c570f8"`);
        await queryRunner.query(`ALTER TABLE "scheduled-operation" DROP CONSTRAINT "FK_ca34c8cf34a56061c33a6c21ba0"`);
        await queryRunner.query(`ALTER TABLE "scheduled-operation" DROP CONSTRAINT "FK_9a5ef9f1f73a9a9f5d2bfa0a4af"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TYPE "public"."AccountType"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TYPE "public"."CategoryType"`);
        await queryRunner.query(`DROP TABLE "operation"`);
        await queryRunner.query(`DROP TYPE "public"."OperationType"`);
        await queryRunner.query(`DROP TABLE "scheduled-operation"`);
        await queryRunner.query(`DROP TABLE "icon"`);
    }

}
