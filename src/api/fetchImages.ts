import { FetchImagesResponse } from "../types/types";

async function fetchImages(query: string, page: number): Promise<FetchImagesResponse> {
  const API_KEY = "YOUR_API_KEY"; // если нужен ключ — добавь сюда
  const perPage = 12; // например, сколько изображений на страницу

  const url = `https://api.example.com/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&client_id=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  const data: FetchImagesResponse = await response.json();
  return data;
}

export default fetchImages;
