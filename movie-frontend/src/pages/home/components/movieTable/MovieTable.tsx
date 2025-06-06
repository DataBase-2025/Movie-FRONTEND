import { useMemo, useState } from "react";
import { MOVIE_TABLE_HEADERS } from "@pages/home/constant/movie";
import { SORTKEY } from "@pages/home/constant/sortKey";
import * as styles from "@pages/home/components/movieTable/MovieTable.css";
import type { Movie } from "@pages/home/types/movieType";
import MoviePopup from "@pages/home/components/moviePopup/MoviePopup";
import { SortMovies } from "@pages/home/utils/sortMovies";

interface MovieTableProps {
  movies: Movie[];
}

const MovieTable = ({ movies }: MovieTableProps) => {
  const [sortKey, setSortKey] = useState<keyof typeof SORTKEY>("latest");
  const sortedMovies = useMemo(() => {
    return SortMovies(movies, sortKey);
  }, [movies, sortKey]);
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
            onChange={(e) => setSortKey(e.target.value as keyof typeof SORTKEY)}
            value={sortKey}
          >
            {Object.entries(SORTKEY).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
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
