// src/pages/home/components/SearchForm.tsx
import * as styles from "@pages/home/components/SearchFrom.css";

interface SearchFormProps {
  movieName: string;
  setMovieName: (value: string) => void;
  directorName: string;
  setDirectorName: (value: string) => void;
  startYear: string;
  setStartYear: (value: string) => void;
  endYear: string;
  setEndYear: (value: string) => void;
  openStartDate: string;
  setOpenStartDate: (value: string) => void;
  openEndDate: string;
  setOpenEndDate: (value: string) => void;
  onSearch: () => void;
  onReset: () => void;
}

const SearchForm = ({
  movieName,
  setMovieName,
  directorName,
  setDirectorName,
  startYear,
  setStartYear,
  endYear,
  setEndYear,
  openStartDate,
  setOpenStartDate,
  openEndDate,
  setOpenEndDate,
  onSearch,
  onReset,
}: SearchFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.row}>
        {/* ① 영화명 + 제작연도 */}
        <div className={styles.col}>
          <div className={styles.group}>
            <label>영화명</label>
            <input
              type="text"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
            />
          </div>
          <div className={styles.group}>
            <label>제작연도</label>
            <div className={styles.yearRange}>
              <select
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              >
                <option value="">--전체--</option>
                {Array.from({ length: 101 }, (_, i) => 1925 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <span className={styles.tilde}>~</span>
              <select
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
              >
                <option value="">--전체--</option>
                {Array.from({ length: 101 }, (_, i) => 1925 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ② 감독명 + 개봉일자 */}
        <div className={styles.col}>
          <div className={styles.group}>
            <label>감독명</label>
            <input
              type="text"
              value={directorName}
              onChange={(e) => setDirectorName(e.target.value)}
            />
          </div>
          <div className={styles.group}>
            <label>개봉일자</label>
            <div className={styles.datePair}>
              <input
                type="date"
                value={openStartDate}
                onChange={(e) => setOpenStartDate(e.target.value)}
              />
              <span className={styles.tilde}>~</span>
              <input
                type="date"
                value={openEndDate}
                onChange={(e) => setOpenEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* ③ 버튼 2개 */}
        <div className={styles.btnWrap}>
          <button type="submit" className={styles.searchBtn}>
            조회
          </button>
          <button type="button" className={styles.resetBtn} onClick={onReset}>
            초기화
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
