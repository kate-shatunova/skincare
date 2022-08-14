import {ApiProperty} from "@nestjs/swagger";

export class UpdateIngredientDto {
  @ApiProperty({description: "Название ингредиента", nullable: false, example: "Aqua"})
  name?: string;

  @ApiProperty({description: "Название ингредиента в INCI (International Nomenclature of Cosmetic Ingredients)", nullable: true, example: "Water"})
  inciName?: string;

  @ApiProperty({description: "Функция ингредиента", nullable: true, example: "Растворитель"})
  functionality?: string;

  @ApiProperty({description: "Описание ингредиента", nullable: true, example: "Основной компонент практически всей косметики (исключения безводная косметика). " +
      "Обеспечивает необходимую структуру. В косметике используется в основном деминерализованная вода прощедшая очистку методом обратного осмоса. " +
      "Так же к воде применяются жесткие требования по микробиологической чистоте."})
  description?: string;
}