import { Controller, Get } from '@nestjs/common';
import { ingredients } from './ingredients';
import { Param } from '@nestjs/common';

@Controller("ingredients")
export class IngredientsController {

  @Get()
  index() {
    return { ingredients };
  }

  // поиск ингредиентов по названию
  @Get(':name')
  getById(@Param('name') name: string) {
    return ingredients.find(ingredient => ingredient.name.toLowerCase() === name.toLowerCase());
  }
}
