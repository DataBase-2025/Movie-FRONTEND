import type { Movie } from "@pages/home/types/movieType";
import { SORTKEY } from "@pages/home/constant/sortKey";

export const SortMovies = (movies: Movie[], sortKey: keyof typeof SORTKEY) => {
  const sorted = [...movies];
  switch (sortKey) {
    case "latest":
      return sorted.sort((a, b) => Number(b.open_year) - Number(a.open_year));
    case "year":
      return sorted.sort((a, b) => Number(a.open_year) - Number(b.open_year));
    case "name":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return movies;
  }
};
