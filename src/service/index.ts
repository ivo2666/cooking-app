import axios from "axios";
import { Ingredient, Recipe } from "../data-types";

type CallApiFunc = <T>(
  resource: "ingredients" | "recipes",
  query: string
) => Promise<T[]>;

const callAPI: CallApiFunc = async (resource, query) => {
  try {
    const response = await axios({
      method: "get",
      url: `api/${resource}?${query}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data.results || response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const service = {
  findIngredients: async (query: string) => {
    return callAPI<Ingredient>("ingredients", query);
  },
  findRecipes: async (ingredients: string[]) => {
    return callAPI<Recipe>(
      "recipes",
      ingredients.join(",+")
    );
  },
};

export default service;
