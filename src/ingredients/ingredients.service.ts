import { Injectable } from '@nestjs/common';
import { ingredients } from './entities/ingredients';
import {Ingredient} from "./ingredients.model";
import {CreateIngredientDto} from "./dto/create-ingredient.dto";
import {UpdateIngredientDto} from "./dto/update-ingredient.dto";

@Injectable()
export class IngredientsService {
  private _ingredients: Ingredient[] = ingredients;

  findByName(searchName: string) {
    return this._ingredients.filter(ingredient => ingredient.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1);
  }

  findById(ingredientId: number) {
    return this._ingredients.filter(ingredient => ingredient.id == ingredientId)[0];
  }

  create(dto: CreateIngredientDto) {
    const id = 10;
    const ingredient = new Ingredient(dto.name, dto.inciName, dto.functionality, dto.description, id);
    this._ingredients.push(ingredient);
    return ingredient;
  }

  update(ingredientId: number, dto: UpdateIngredientDto) {
    const index = this._ingredients.findIndex(ingredient => ingredient.id == ingredientId)

    if (index === -1) {
      return;
    }

    this._ingredients[index] = new Ingredient(dto.name, dto.inciName, dto.functionality, dto.description, ingredientId);
    return this._ingredients[index];
  }

  remove(ingredientId: number) {
    this._ingredients = this._ingredients.filter(ingredient => ingredient.id != ingredientId)
  }

}
