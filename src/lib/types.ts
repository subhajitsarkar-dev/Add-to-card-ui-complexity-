export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
};

export type PaginatedProductData = {
  page: number;
  limit: number;
  totalPages: number;
  previousPage: boolean;
  nextPage: boolean;
  totalItems: number;
  currentPageItems: number;
  data: Product[];
};

export type ProductsApiResponse = {
  statusCode: number;
  data: PaginatedProductData;
  message: string;
  success: boolean;
};
