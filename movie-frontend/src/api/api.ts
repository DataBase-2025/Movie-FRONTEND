import { END_URL } from "@constant/url";
import { get } from "@api/instance";

//import type { ProductDetailResponseTypes } from "@pages/productDetail/types/response";

//import type { ProductDetailResponseTypes } from "@pages/productDetail/types/response";
import type { MovieResponseTypes } from "@pages/home/types/movieType";

// export const getProductDetail = (productId: number) =>
//   get<ProductDetailResponseTypes>(END_URL.GET_PRODUCTS_DETAIL(productId));

export const getMovies = () => {
  get<MovieResponseTypes>(END_URL.GET_MOVIES);
};
