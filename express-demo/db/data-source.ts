import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../models/user"
import { UserActive } from "../models/userActive"
import { Question } from "../models/question"
import "reflect-metadata"

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "anyaaven",
  password: "",
  database: "typeorm_demo",
  synchronize: true, // <--Indicates if database schema should be auto created on every application launch.
  logging: true, // <----SET TO TRUE IF NEEDED
  entities: [User, UserActive, Question],
  subscribers: [],
  migrations: [],
})
