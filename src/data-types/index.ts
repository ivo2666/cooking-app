export interface Ingredient {
  name: string;
  id: string;
  image: string;
  isChecked?: boolean;
}

export interface Recipe {
    "id": number,
    "title": string,
    "image": string,
    summary?: string,
    usedIngredients: unknown[],
    missedIngredients: unknown[],
    unusedIngredients: unknown[],
    [index:string]: unknown; 
}
