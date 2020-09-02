import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanModule } from './modules/plan';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    autoLoadEntities: true,
  }), PlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
