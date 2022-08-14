import {Body, Controller, Delete, Get, HttpStatus, Patch, Post, Query} from '@nestjs/common';
import { Param } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import {ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import {Ingredient} from "./ingredients.model";

@ApiTags('Ingredients')
@Controller("ingredients")
export class IngredientsController {
  constructor(private ingredientsService: IngredientsService) {}

  @Get('find')
  @ApiOperation({ summary: "поиск ингредиентов по названию (like)" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Ingredient] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  findByName(@Query('search') search: string) {
    console.log("findByName " + search);
    return this.ingredientsService.findByName(search);
  }

  @Get(':ingredientId')
  @ApiOperation({ summary: "получение ингредиента по id" })
  @ApiParam({ name: "ingredientId", required: true, description: "Ingredient identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Ingredient })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  findById(@Param('ingredientId') ingredientId: number) {
    return this.ingredientsService.findById(ingredientId);
  }

  @Post()
  @ApiOperation({ summary: "добавления ингредиента" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Ingredient })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.create(createIngredientDto);
  }

  @Patch(':ingredientId')
  @ApiOperation({ summary: "редактирование игредиента" })
  @ApiParam({ name: "ingredientId", required: true, description: "Ingredient identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Ingredient })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  update(@Param('ingredientId') ingredientId: number, @Body() updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientsService.update(ingredientId, updateIngredientDto);
  }

  @Delete(':ingredientId')
  @ApiOperation({ summary: "удаление игредиента по ID" })
  @ApiParam({ name: "ingredientId", required: true, description: "Ingredient identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Ingredient })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  remove(@Param('ingredientId') ingredientId: number) {
    return this.ingredientsService.remove(ingredientId);
  }
}
