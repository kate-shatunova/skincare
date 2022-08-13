import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {IngredientsController} from "./ingredients.controller";
import {IngredientsService} from "./ingredients.service";

@Module({
  imports: [],
  controllers: [AppController, IngredientsController],
  providers: [AppService, IngredientsService],
})
export class AppModule {}
