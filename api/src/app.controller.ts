import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('test')
export class AppController {
  constructor(@Inject('SERVICE_A') private client: ClientKafka) {}

  async onModuleInit() {
    // Need to subscribe to topic 
    // so that we can get the response from kafka microservice
    this.client.subscribeToResponseOf('test');
    await this.client.connect();
  }

  @Get(':id')
  getId(@Param('id') id: number) {
    return this.client.send('test', `${id}`);
  }
}
