import { ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { ENVIRONMENT } from '../enviroment/enviroment';
import { QUEUES } from '../enviroment/queues';

export const RMQCONFIG: ClientsModuleOptions = [
  {
    name: 'MESSAGES_SERVICE',
    transport: Transport.RMQ,
    options: {
      queue: QUEUES.MESSAGES,
      urls: [ENVIRONMENT.RMQ_URL],
      queueOptions: {
        durable: true,
      },
    },
  },
  {
    name: 'GATEWAY_SERVICE',
    transport: Transport.RMQ,
    options: {
      queue: QUEUES.GATEWAY,
      urls: [ENVIRONMENT.RMQ_URL],
      queueOptions: {
        durable: true,
      },
    },
  },
];