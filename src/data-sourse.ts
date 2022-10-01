import { DataSource } from "typeorm";

export const AppDataSourse = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "componentes"
})