import { useState } from "react";
import { MOVIE_TABLE_HEADERS } from "@pages/home/constant/movie";
import * as styles from "@pages/home/components/MovieTable.css";
import type { Movie } from "@pages/home/types/movieType";
import MoviePopup from "@pages/home/components/MoviePopup";

interface MovieTableProps {
  movies: Movie[];
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
      return sorted;
  }
};

const MovieTable = ({ movies }: MovieTableProps) => {
  const [sortKey, setSortKey] = useState("최신업데이트순");
  const sortedMovies = sortMovies(movies, sortKey);

  const [popup, setPopup] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handlePopUp = (m: Movie) => {
    setSelectedMovie(m);
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
    setSelectedMovie(null);
  };
  return (
    <div>
      <section className={styles.tableHeader}>
        <div>
          <span>총 </span>
          <span className={styles.totalCountBold}>
            {sortedMovies.length.toLocaleString()}
          </span>
          <span>건</span>
        </div>
        <div className={styles.sortWrapper}>
          <select
            className={styles.selectOption}
            onChange={(e) => setSortKey(e.target.value)}
            value={sortKey}
          >
            <option value="최신업데이트순">최신업데이트순</option>
            <option value="제작연도순">제작연도순</option>
            <option value="영화명순">영화명순</option>
          </select>
        </div>
      </section>

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
              <td
                className={styles.clickableCell}
                onClick={() => handlePopUp(m)}
              >
                {m.movieName}
              </td>
              <td
                className={styles.clickableCell}
                onClick={() => handlePopUp(m)}
              >
                {m.movieEngName}
              </td>
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
      {popup && selectedMovie && (
        <MoviePopup movie={selectedMovie} onClose={closePopup} />
      )}
    </div>
  );
};

export default MovieTable;
