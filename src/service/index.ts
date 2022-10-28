import axios from "axios";
import { Ingredient, Recipe } from "../data-types";

const API = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

type CallApiFunc = <T>(
  resource: "food/ingredients" | "recipes",
  searchType: string,
  query: string
) => Promise<T[]>;

const callAPI: CallApiFunc = async (resource, searchType, query) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API}${resource}/${searchType}?${query}&apiKey=${API_KEY}`,
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
    return callAPI<Ingredient>("food/ingredients", "search", `query=${query}`);
  },
  findRecipes: async (ingredients: string[]) => {
    return callAPI<Recipe>(
      "recipes",
      "findByIngredients",
      `ingredients=${ingredients.join(",+")}`
    );
  },
};

export default service;
