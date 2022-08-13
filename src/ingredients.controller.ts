import {Body, Controller, Delete, Get, Patch, Post, Query} from '@nestjs/common';
import { Param } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { ApiTags } from "@nestjs/swagger";
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@ApiTags('Ingredients')
@Controller("ingredients")
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  // поиск ингредиентов по названию (like)
  @Get('find')
  findByName(@Query('search') search: string) {
    return this.ingredientsService.findByName(search);
  }

  // получение ингредиента по id
  @Get(':ingredientId')
  findById(@Param('ingredientId') ingredientId: number) {
    return this.ingredientsService.findById(ingredientId);
  }

  // добавления ингредиента
  @Post()
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.create(createIngredientDto);
  }

  // редактирование игредиента
  @Patch(':ingredientId')
  update(@Param('ingredientId') ingredientId: number, @Body() updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientsService.update(ingredientId, updateIngredientDto);
  }

  // удаление игредиента по ID
  @Delete(':ingredientId')
  remove(@Param('ingredientId') ingredientId: number) {
    return this.ingredientsService.remove(ingredientId);
  }
}
