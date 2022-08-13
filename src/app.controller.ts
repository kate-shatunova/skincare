import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ingredients } from './ingredients';
import { Param } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("application")
  getApplication(): string {
    return this.appService.getApplication();
  }

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
