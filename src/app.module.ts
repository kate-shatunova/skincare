import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {IngredientsController} from "./ingredients.controller";

@Module({
  imports: [],
  controllers: [AppController, IngredientsController],
  providers: [AppService],
})
export class AppModule {}
