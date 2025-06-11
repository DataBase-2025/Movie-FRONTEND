import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@api/api";
import type { MovieParams } from "@api/api";
import { QUERY_KEYS } from "@/constant/queryKey";

export const useGetMovies = (params?: MovieParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_MOVIES, params],
    queryFn: () => getMovies(params),
  });
};
