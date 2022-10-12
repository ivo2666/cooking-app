import axios from "axios";
import { Ingredient, Recipe } from "../data-types";

const API = process.env.REACT_APP_API_URL;

const callAPI = async <T>(path: string):Promise<T[]> => {
  try {
    const response = await axios({
      method: "get",
      url: API,
      headers: {
        'Content-type': 'application/json',
        "X-JSON-Path": path,
      },
    });
    return response.data.record
  } catch (error) {
    console.log(error);
    return []
  }
}

const service = {
  findIngredients: async (string: string) => {
    return callAPI<Ingredient>(`$.ingredients[?(/^.*${string}.*$/i.test(@.name))]`)
  },
  findRecipes: async (arr: string[]) => {
    return callAPI<Recipe>(`$.recipes[?(/^(?=.*${arr.join(")(?=.*")}).*$/i.test(@.ingredients))]`)
  },
};

export default service;
