import { END_URL } from "@constant/url";
import { get } from "@api/instance";
import type { MovieResponseTypes } from "@pages/home/types/movieType";

export interface MovieParams {
  director?: string;
  title?: string;
  nation?: string;
  genre?: string;
}

export const getMovies = (params?: MovieParams) =>
  get<MovieResponseTypes>(END_URL.GET_MOVIES, { params });
