export interface Ingredient {
  name: string;
  displayName: string;
  categoryId: number;
  id: string;
  category: string;
  isChecked?: boolean;
}

export interface Recipe {
    "id": number,
    "title": string,
    "timeToPrepare": string,
    "portions": number,
    "imageUrl": string,
    "categories": number[],
    "ingredients": string[],
    "preparationMethod": {step:number;text: string}[]
}
