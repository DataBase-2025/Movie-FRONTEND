import { MOVIE_TABLE_HEADERS } from "@pages/home/constant/movie";
import * as styles from "./MovieTable.css";

interface Movie {
  movieName: string;
  movieEngName: string;
  code: string;
  year: string;
  country: string;
  type: string;
  genre: string;
  status: string;
  director: string;
  producer: string;
}

interface MovieTableProps {
  movies: Movie[];
  sortKey: string; // "최신업데이트순" | "제작연도순" | "영화명순"
}

const sortMovies = (movies: Movie[], sortKey: string): Movie[] => {
  const sorted = [...movies];
  switch (sortKey) {
    case "최신업데이트순":
      return sorted.sort((a, b) => Number(b.code) - Number(a.code));
    case "제작연도순":
      return sorted.sort((a, b) => Number(b.year) - Number(a.year));
    case "영화명순":
      return sorted.sort((a, b) => a.movieName.localeCompare(b.movieName));
    default:
      return movies;
  }
};

const MovieTable = ({ movies, sortKey }: MovieTableProps) => {
  const sortedMovies = sortMovies(movies, sortKey);

  return (
    <div>
      <div className={styles.totalCount}>
        총 {sortedMovies.length.toLocaleString()}건
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {MOVIE_TABLE_HEADERS.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map((m, idx) => (
            <tr key={idx}>
              <td>{m.movieName}</td>
              <td>{m.movieEngName}</td>
              <td>{m.code}</td>
              <td>{m.year}</td>
              <td>{m.country}</td>
              <td>{m.type}</td>
              <td>{m.genre}</td>
              <td>{m.status}</td>
              <td>{m.director}</td>
              <td>{m.producer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
