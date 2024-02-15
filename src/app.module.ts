import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LogertMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChammelsModule } from './chammels/chammels.module';
import { DmsModule } from './dms/dms.module';

/*
const getEnv = () => {
  return
}
*/

@Module({
  imports: [ConfigModule.forRoot({isGlobal : true/*, load: [getEnv] */}), UsersModule, WorkspacesModule, ChammelsModule, DmsModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LogertMiddleware).forRoutes('*');
  }
}
