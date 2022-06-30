import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  private find() {
    return 'hello World'
  }
}
