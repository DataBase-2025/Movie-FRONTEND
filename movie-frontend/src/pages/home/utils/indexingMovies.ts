import type { Movie } from "@/pages/home/types/movieType";
import { GetIndexKey } from "@/pages/home/utils/getIndexKey";

export function indexingMovies(movies: Movie[], indexChar: string): Movie[] {
  return movies.filter((movie) => {
    return (
      !indexChar ||
      (!!movie.title && GetIndexKey(movie.title[0]) === indexChar) ||
      (!!movie.english_title &&
        GetIndexKey(movie.english_title[0]) === indexChar)
    );
  });
}
