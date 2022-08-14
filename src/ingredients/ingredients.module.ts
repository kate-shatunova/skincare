import { Module } from '@nestjs/common';
import {IngredientsController} from "./ingredients.controller";
import {IngredientsService} from "./ingredients.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Ingredient} from "./ingredients.model";

@Module({
  controllers: [IngredientsController],
  providers: [IngredientsService],
  imports: [
    SequelizeModule.forFeature([Ingredient])
  ]
})
export class IngredientsModule {}
