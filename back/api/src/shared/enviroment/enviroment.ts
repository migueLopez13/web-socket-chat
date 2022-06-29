import { config } from 'dotenv';
config();

export const ENVIRONMENT = {
  RMQ_URL: 'amqp://localhost:5672',

  GATEWAY_PORT: Number(process.env.GATEWAY_PORT),
  MESSAGES_PORT: Number(process.env.MESSAGES_PORT),


  MYSQL_PORT: Number(process.env.MYSQL_INNER_PORT),
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,

  MYSQL_HOST: process.env.MYSQL_HOST,
};