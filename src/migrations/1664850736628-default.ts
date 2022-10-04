import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664850736628 implements MigrationInterface {
    name = 'default1664850736628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ovms" ("id" SERIAL NOT NULL, "numeroOvm" text NOT NULL, CONSTRAINT "PK_4f7f1e8d2126295e874a230f8b2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client_ovm" ("clien_id_1" integer NOT NULL, "clien_id_2" integer NOT NULL, CONSTRAINT "PK_0f4b973ef2873512ee1ed1ea081" PRIMARY KEY ("clien_id_1", "clien_id_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_359324a46b7ba5ec9a1045c78d" ON "client_ovm" ("clien_id_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_f322df128b9fde0b109b90a0e4" ON "client_ovm" ("clien_id_2") `);
        await queryRunner.query(`ALTER TABLE "client_ovm" ADD CONSTRAINT "FK_359324a46b7ba5ec9a1045c78dc" FOREIGN KEY ("clien_id_1") REFERENCES "ovms"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client_ovm" ADD CONSTRAINT "FK_f322df128b9fde0b109b90a0e4c" FOREIGN KEY ("clien_id_2") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_ovm" DROP CONSTRAINT "FK_f322df128b9fde0b109b90a0e4c"`);
        await queryRunner.query(`ALTER TABLE "client_ovm" DROP CONSTRAINT "FK_359324a46b7ba5ec9a1045c78dc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f322df128b9fde0b109b90a0e4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_359324a46b7ba5ec9a1045c78d"`);
        await queryRunner.query(`DROP TABLE "client_ovm"`);
        await queryRunner.query(`DROP TABLE "ovms"`);
    }

}
