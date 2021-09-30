import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const KafkaTransporter = ClientsModule.register([
  {
    name: 'SERVICE_A',
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'test',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'test-consumer',
      },
    },
  },
]);

@Module({
  imports: [KafkaTransporter],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
