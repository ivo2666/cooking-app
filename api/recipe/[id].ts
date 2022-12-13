import axios, {AxiosResponse} from "axios";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const API = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default async function handler(request:VercelRequest, response:VercelResponse) {
  const id = request.query.id;
  const res: AxiosResponse = await axios({
    method: "get",
    url: `${API}/recipes/${id}/summary?&apiKey=${API_KEY}`,
    headers: { "Content-Type": "application/json" },
  });
  const { data } = res;
  return response.status(200).json(data);
}
