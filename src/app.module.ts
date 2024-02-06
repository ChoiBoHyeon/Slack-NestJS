import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

/*
const getEnv = () => {
  return
}
*/

@Module({
  imports: [ConfigModule.forRoot({isGlobal : true, /* load: [getEnv] */})],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
