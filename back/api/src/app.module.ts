import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RMQCONFIG } from './shared/config/rmq.config';
import { MessagesModule } from './modules/messages/messages.module';

@Module({
  imports: [
    ClientsModule.register(RMQCONFIG),
    MessagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
