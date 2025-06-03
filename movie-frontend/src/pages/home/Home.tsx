import { useState } from "react";
import * as styles from "@pages/home/Home.css";
import SearchForm from "./components/SearchFrome";
import MovieTable from "./components/MovieTable";

const movies = [
  {
    movieName: "주마등",
    movieEngName: "Life Flashed Before...",
    code: "20255368",
    year: "2024",
    country: "한국",
    type: "단편",
    genre: "드라마",
    status: "기타",
    director: "송원재",
    producer: "",
  },
  {
    movieName: "점.",
    movieEngName: "The Point.",
    code: "20255367",
    year: "2024",
    country: "한국",
    type: "장편",
    genre: "다큐멘터리",
    status: "기타",
    director: "",
    producer: "",
  },
  // ... 더미 데이터
];

const sortMovies = (movies, sortKey) => {
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

const Home = () => {
  const [movieName, setMovieName] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [openStartDate, setOpenStartDate] = useState("");
  const [openEndDate, setOpenEndDate] = useState("");
  const [sortKey, setSortKey] = useState("최신업데이트순");

  const handleSearch = () => {
    console.log("검색 조건:", {
      movieName,
      directorName,
      startYear,
      endYear,
      openStartDate,
      openEndDate,
    });
  };

  const handleReset = () => {
    setMovieName("");
    setDirectorName("");
    setStartYear("");
    setEndYear("");
    setOpenStartDate("");
    setOpenEndDate("");
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesName = movie.movieName.includes(movieName);
    const matchesDirector = movie.director.includes(directorName);
    const matchesYear =
      (!startYear || Number(movie.year) >= Number(startYear)) &&
      (!endYear || Number(movie.year) <= Number(endYear));
    // 날짜 필터는 생략 가능 (더미 데이터에 날짜 없음)
    return matchesName && matchesDirector && matchesYear;
  });

  const sortedMovies = sortMovies(filteredMovies, sortKey);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>영화 정보</h1>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          KOBIS에서는 영화정보를 체계적으로 관리하고 전국 영화상영관의
          발권정보를 집계하기 위해 영화표준식별코드(FIMS)를 생성 및 배포하고
          있습니다.
        </li>
        <li className={styles.listItem}>
          영화정보 수정이 필요하실 경우 해당 영화 상세페이지에서 [수정요청]
          버튼을 클릭해 주세요.
        </li>
      </ul>

      <SearchForm
        movieName={movieName}
        setMovieName={setMovieName}
        directorName={directorName}
        setDirectorName={setDirectorName}
        startYear={startYear}
        setStartYear={setStartYear}
        endYear={endYear}
        setEndYear={setEndYear}
        openStartDate={openStartDate}
        setOpenStartDate={setOpenStartDate}
        openEndDate={openEndDate}
        setOpenEndDate={setOpenEndDate}
        onSearch={handleSearch}
        onReset={handleReset}
      />

      <div style={{ marginTop: "20px" }}>
        <select onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
          <option value="최신업데이트순">최신업데이트순</option>
          <option value="제작연도순">제작연도순</option>
          <option value="영화명순">영화명순</option>
        </select>

        <MovieTable movies={sortedMovies} sortKey={sortKey} />
      </div>
    </div>
  );
};

export default Home;
