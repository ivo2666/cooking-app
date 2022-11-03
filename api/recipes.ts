import axios from "axios";

const API = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default async function handler(request, response) {
  const {query} = request;
  const res: any = await axios({
    method: "get",
    url: `${API}/recipes/findByIngredients?ingredients=${query}&apiKey=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
  });

  const { data } = await res.json();
  return response.status(200).json(data);
}
