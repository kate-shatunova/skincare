import { ApiProperty } from "@nestjs/swagger";
import {Column, DataType, Model, Table} from "sequelize-typescript";

interface IngredientCreationAttrs {
  name: string;
}

@Table({tableName: 'ingredients'})
export class Ingredient extends Model<Ingredient, IngredientCreationAttrs> {
  @ApiProperty({description: "Ingredient identifier", nullable: false})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({description: "Ingredient name", nullable: true})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string;

  @ApiProperty({description: "Ingredient INCI name", nullable: true})
  @Column({type: DataType.STRING, unique: true, allowNull: true})
  inciName: string;

  @ApiProperty({description: "Ingredient functionality", nullable: true})
  @Column({type: DataType.STRING, allowNull: true})
  functionality: string;

  @ApiProperty({description: "Ingredient description", nullable: true})
  @Column({type: DataType.STRING, allowNull: true})
  description: string;
}