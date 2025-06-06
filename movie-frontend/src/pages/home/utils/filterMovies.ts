import type { Movie } from "@/pages/home/types/movieType";
import { GetIndexKey } from "@/pages/home/utils/getIndexKey";

interface FilterParams {
  movieName: string;
  directorName: string;
  startYear: string;
  endYear: string;
  type: string;
  country: string;
  genre: string;
  status: string;
  indexChar: string;
}

export function shouldIncludeMovie(
  movie: Movie,
  filters: FilterParams
): boolean {
  const {
    movieName,
    directorName,
    startYear,
    endYear,
    type,
    country,
    genre,
    status,
    indexChar,
  } = filters;

  const matchesName = !!movie.movieName
    ?.toLowerCase()
    .includes(movieName.toLowerCase());

  const matchesDirector = directorName
    ? !!movie.director?.toLowerCase().includes(directorName.toLowerCase())
    : true;

  const matchesYear =
    (!startYear || Number(movie.year) >= Number(startYear)) &&
    (!endYear || Number(movie.year) <= Number(endYear));

  const matchesType = !type || type.split(",").includes(movie.type ?? "");

  const matchesCountry =
    !country || country.split(",").some((c) => movie.country?.includes(c));

  const matchesGenre =
    !genre || genre.split(",").some((g) => movie.genre?.includes(g));

  const matchesStatus =
    !status || status.split(",").includes(movie.status ?? "");

  const matchesIndex =
    !indexChar ||
    (!!movie.movieName && GetIndexKey(movie.movieName[0]) === indexChar) ||
    (!!movie.movieEngName && GetIndexKey(movie.movieEngName[0]) === indexChar);

  return (
    matchesName &&
    matchesDirector &&
    matchesYear &&
    matchesType &&
    matchesCountry &&
    matchesGenre &&
    matchesStatus &&
    matchesIndex
  );
}
