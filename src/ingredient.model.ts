export class Ingredient {
    ingredientId: number;

    name: string;

    inciName: string;

    functionality: string;

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