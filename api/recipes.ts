import axios from "axios";


export default async function handler(request, response) {
  try {
  //  const API = process.env.REACT_APP_API_URL;
  //  const API_KEY = process.env.REACT_APP_API_KEY;
  // const {query} = request;
  // const res: any = await axios({
  //   method: "get",
  //   url: `${API}/recipes/findByIngredients?ingredients=${query}&apiKey=${API_KEY}`,
  //   headers: { "Content-Type": "application/json" },
  // });

  // const { data } = await res.json();
  // return response.status(200).json(data);
  console.log("test")
 } catch (error) {
  console.log(error)
 }
}
