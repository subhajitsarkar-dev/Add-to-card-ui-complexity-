import axios from "axios";
import type { ProductsApiResponse } from "../lib/types";

export const allProduct = async (): Promise<
  ProductsApiResponse | undefined
> => {
  const options = {
    method: "GET",
    url: "https://api.freeapi.app/api/v1/public/randomproducts",
    params: {
      page: "1",
      limit: "10",
      inc: "category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid",
      query: "mens-watches",
    },
    headers: { accept: "application/json" },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
