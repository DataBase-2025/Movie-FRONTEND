import { useEffect, useState } from "react";
import * as styles from "@pages/home/Home.css";
import SearchForm from "@pages/home/components/searchForm/SearchFrome";
import MovieTable from "@pages/home/components/movieTable/MovieTable";
import { indexingMovies } from "@pages/home/utils/indexingMovies";
import type { Movie } from "./types/movieType";
import { getMovies } from "@api/api";
import PageNumbers from "./components/pageNumbers/PageNumbers";

const Home = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [nation, setNation] = useState("");
  const [page, setPage] = useState(1);
  const [total_page, setTotalPage] = useState(100);

  const [type, setType] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [openStartDate, setOpenStartDate] = useState("");
  const [openEndDate, setOpenEndDate] = useState("");
  const [indexChar, setIndexChar] = useState("");
  const [rating, setRating] = useState("");
  const [screenType, setScreenType] = useState("");
  const [repCountry, setRepCountry] = useState("");
  const [movieDivisions, setMovieDivisions] = useState<string[]>([]);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data);
        setFilteredMovies(response.data);
        setTotalPage(response.pagination?.total_pages || 1);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (indexChar !== "") {
      handleSearch();
    }
  }, [indexChar]);

  const handleSearch = async () => {
    const params: any = {};
    if (title) params.title = title;
    if (director) params.director = director;
    if (nation) params.nation = nation;
    if (page) params.page = page;
    if (startYear) params.open_start_year = startYear;
    if (endYear) params.open_end_year = endYear;

    try {
      const response = await getMovies(params);
      setFilteredMovies(response.data);
    } catch (error) {
      console.error("Failed to fetch filtered movies:", error);
    }
  };

  const handleIndexing = (index: string) => {
    const result = indexingMovies(filteredMovies, index);
    setFilteredMovies(result);
  };

  const handleReset = async () => {
    // 서버 전체 데이터 다시 받아오기
    setTitle("");
    setDirector("");
    setNation("");
    setStartYear("");
    setEndYear("");
    setOpenStartDate("");
    setOpenEndDate("");
    setType("");
    setGenre("");
    setStatus("");
    setIndexChar("");
    setRating("");
    setScreenType("");
    setRepCountry("");
    setMovieDivisions([]);
    try {
      const response = await getMovies();
      setMovies(response.data);
      setFilteredMovies(response.data);
    } catch (error) {
      console.error("Failed to fetch all movies on reset:", error);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    handleSearch();
  };

  return (
    <div className={styles.container}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 className={styles.title}>영화 정보</h1>
          <img
            src="/img/navImg.png"
            alt="nav-image"
            style={{ width: "260px" }}
          />
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listTextBold}>
              KOBIS에서는 영화정보를 체계적으로 관리하고 전국 영화상영관의
              발권정보를 집계하기 위해 영화정보통합관리 영화표준식별코드(FIMS)를
              생성 및 배포(부여)하고 있습니다.
            </span>
          </li>
          <li className={styles.listItem}>
            홍보마케팅사, 유관기관, 영화관계자(사) 등 여러 창구를 통해
            영화정보를 수집ㆍ관리하고 있으며, 제공되는 정보는 데이터관리 기준에
            따라 상호 차이가 있을 수 있습니다.
          </li>
          <li className={styles.listItem}>
            <span className={styles.listTextBold}>
              영화정보 신규등록은 KOBIS 홈페이지의 [정보수정요청] 게시판을
              이용해 주시기 바랍니다. <br />( 정보수정요청 바로가기)
            </span>
          </li>
          <li className={styles.listItem}>
            영화정보 수정이 필요하실 경우 해당 영화정보 상세페이지에서
            <span className={styles.listTextBold}> [수정요청] </span> 버튼을
            클릭하여 정보수정을 요청하실 수 있습니다.
          </li>
        </ul>
      </div>
      <div className={styles.excel}>
        <button className={styles.excelBtn}>엑셀</button>
      </div>
      <SearchForm
        title={title}
        setTitle={setTitle}
        director={director}
        setDirector={setDirector}
        startYear={startYear}
        setStartYear={setStartYear}
        endYear={endYear}
        setEndYear={setEndYear}
        openStartDate={openStartDate}
        setOpenStartDate={setOpenStartDate}
        openEndDate={openEndDate}
        setOpenEndDate={setOpenEndDate}
        type={type}
        setType={setType}
        nation={nation}
        setNation={setNation}
        genre={genre}
        setGenre={setGenre}
        onSearch={handleSearch}
        onReset={handleReset}
        status={status}
        setStatus={setStatus}
        indexChar={indexChar}
        setIndexChar={setIndexChar}
        rating={rating}
        screenType={screenType}
        repCountry={repCountry}
        movieDivisions={movieDivisions}
        setRating={setRating}
        setScreenType={setScreenType}
        setRepCountry={setRepCountry}
        setMovieDivisions={setMovieDivisions}
        handleIndexing={handleIndexing}
      />

      <MovieTable movies={filteredMovies} />
      <PageNumbers
        total_Page={total_page}
        page={page}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
