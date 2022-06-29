import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { config } from 'dotenv';

config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL],
      queue: process.env.GATEWAY,
      queueOptions: {
        durable: true,
      },
    },
  })

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  const port = 3000;
  await app.startAllMicroservices();
  await app.listen(3000);

  Logger.log(
    `**GATEWAY** Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}
bootstrap();
