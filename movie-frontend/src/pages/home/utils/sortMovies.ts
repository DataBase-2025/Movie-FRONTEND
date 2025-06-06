import type { Movie } from "@pages/home/types/movieType";
import { SORTKEY } from "@pages/home/constant/sortKey";

export const SortMovies = (movies: Movie[], sortKey: keyof typeof SORTKEY) => {
  const sorted = [...movies];
  switch (sortKey) {
    case "latest":
      return sorted.sort((a, b) => Number(b.code) - Number(a.code));
    case "year":
      return sorted.sort((a, b) => Number(b.year) - Number(a.year));
    case "name":
      return sorted.sort((a, b) => a.movieName.localeCompare(b.movieName));
    default:
      return movies;
  }
};
