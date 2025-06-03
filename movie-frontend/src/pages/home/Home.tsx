import { useState } from "react";
import * as styles from "@pages/home/Home.css";
import SearchForm from "./components/SearchFrome";

const Home = () => {
  const [movieName, setMovieName] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [openStartDate, setOpenStartDate] = useState("");
  const [openEndDate, setOpenEndDate] = useState("");
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

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>영화 정보</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            KOBIS에서는 영화정보를 체계적으로 관리하고 전국 영화상영관의
            발권정보를 집계하기 위해 영화정보통합관리 영화표준식별코드(FIMS)를
            생성 및 배포(부여)하고 있습니다.
          </li>
          <li className={styles.listItem}>
            홍보마케팅사, 유관기관, 영화관계자(사) 등 여러 창구를 통해
            영화정보를 수집ㆍ관리하고 있으며, 제공되는 정보는 데이터관리 기준에
            따라 상호 차이가 있을 수 있습니다.
          </li>
          <li className={styles.listItem}>
            영화정보 신규등록은 KOBIS 홈페이지의 [정보수정요청] 게시판을 이용해
            주시기 바랍니다. ( 정보수정요청 바로가기)
          </li>
          <li className={styles.listItem}>
            영화정보 수정이 필요하실 경우 해당 영화정보 상세페이지에서
            [수정요청] 버튼을 클릭하여 정보수정을 요청하실 수 있습니다.
          </li>
        </ul>
      </div>
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
    </div>
  );
};

export default Home;
