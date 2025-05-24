export interface ImageInfo {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
}
export interface FetchImagesResponse {
  results: ImageInfo[];
  total_pages: number;
}
