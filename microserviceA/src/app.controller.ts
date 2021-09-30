import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('test')
  getHello(@Payload() message) {
    console.log(message.value);
    return message.value;
  }
}
