import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService : ConfigService) {}
  getHello(): string {
    return this.configService.get('SECRET');
  //  return process.env.SECRET;
  }
  postHello(): string {
    return 'Bye World!';
  }
}