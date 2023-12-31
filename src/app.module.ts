import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}