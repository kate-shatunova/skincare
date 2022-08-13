import {ApiProperty} from "@nestjs/swagger";

export class Ingredient {
    @ApiProperty({ description: "Ingredient identifier", nullable: false })
    ingredientId: number;

    @ApiProperty({ description: "Ingredient name", nullable: true })
    name: string;

    @ApiProperty({ description: "Ingredient INCI name", nullable: true })
    inciName: string;

    @ApiProperty({ description: "Ingredient functionality", nullable: true })
    functionality: string;

    @ApiProperty({ description: "Ingredient description", nullable: true })
    description: string;

    constructor (name: string,
                 inciName: string,
                 functionality: string,
                 description: string,
                 ingredientId?: number) {
        this.ingredientId = ingredientId
        this.name = name;
        this.inciName = inciName;
        this.functionality = functionality;
        this.description = description;
    }
}