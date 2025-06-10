import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@api/api";

import { QUERY_KEYS } from "@/constant/queryKey";

export const useGetMovies = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_MOVIES],
    queryFn: () => getMovies(),
  });
};

// export const useGetSearchedProductList = (keyword: string) => {
//   return useQuery({
//     queryKey: [QUERY_KEYS.PRODUCTS_SEARCH, keyword],
//     queryFn: () => getSearchedProductList(keyword),
//     enabled: !!keyword,
//   });
// };
