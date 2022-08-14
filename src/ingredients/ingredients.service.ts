import {Injectable} from '@nestjs/common';
import {Ingredient} from "./ingredients.model";
import {CreateIngredientDto} from "./dto/create-ingredient.dto";
import {UpdateIngredientDto} from "./dto/update-ingredient.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Op} from "sequelize";

@Injectable()
export class IngredientsService {
  constructor(@InjectModel(Ingredient) private ingredientRepository: typeof Ingredient) {
  }

  async findByName(searchName: string) {
    return await this.ingredientRepository.findAll({
      where: {
        name: {[Op.like]: `%${searchName}%`}
      }
    });
  }

  async findById(ingredientId: number) {
    return await this.ingredientRepository.findOne({where: {id: ingredientId}});
  }

  async create(dto: CreateIngredientDto) {
    return await this.ingredientRepository.create(dto);
  }

  async update(ingredientId: number, dto: UpdateIngredientDto) {
    return await this.ingredientRepository.update({
      name: dto.name,
      inciName: dto.inciName,
      functionality: dto.functionality,
      description: dto.description
    }, {where: {id: ingredientId}});
  }

  async remove(ingredientId: number) {
    return await this.ingredientRepository.destroy({where: {id: ingredientId}});
  }

}
