import { ApiProperty } from "@nestjs/swagger";
import {Column, DataType, Model, Table} from "sequelize-typescript";

interface IngredientCreationAttrs {
  name: string;
}

@Table({tableName: 'ingredients'})
export class Ingredient extends Model<Ingredient, IngredientCreationAttrs> {
  @ApiProperty({description: "Уникальный идентификатор", nullable: false, example: 1})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({description: "Название ингредиента", nullable: false, example: "Aqua"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string;

  @ApiProperty({description: "Название ингредиента в INCI (International Nomenclature of Cosmetic Ingredients)", nullable: true, example: "Water"})
  @Column({type: DataType.STRING, unique: true, allowNull: true})
  inciName: string;

  @ApiProperty({description: "Функция ингредиента", nullable: true, example: "Растворитель"})
  @Column({type: DataType.STRING, allowNull: true})
  functionality: string;

  @ApiProperty({description: "Описание ингредиента", nullable: true, example: "Основной компонент практически всей косметики (исключения безводная косметика). " +
      "Обеспечивает необходимую структуру. В косметике используется в основном деминерализованная вода прощедшая очистку методом обратного осмоса. " +
      "Так же к воде применяются жесткие требования по микробиологической чистоте."})
  @Column({type: DataType.STRING, allowNull: true})
  description: string;
}