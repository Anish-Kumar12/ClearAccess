import { DataSource } from "typeorm";
import { User } from "../Entities/user";
import { Request } from "../Entities/request";
import { Software } from "../Entities/software";
import dotenv from 'dotenv';
dotenv.config();


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",       
  password: process.env.DbPassword,  
  database: "UserAcess",   
  synchronize: true,          
  logging: false,
  entities: [User, Request, Software],
  migrations: [],
  subscribers: [],
});

