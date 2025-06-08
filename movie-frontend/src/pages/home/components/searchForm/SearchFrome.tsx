import { useState } from "react";
import * as styles from "@pages/home/components/searchForm/SearchFrom.css";
import { KORINDEX, ENGINDEX } from "@pages/home/constant/index";
import {
  GENRE_COLUMNS,
  STATUS_COLUMNS,
  TYPE_COLUMNS,
  COUNTRY_COLUMNS,
  REP_COUNTRY_COLUMNS,
  RATING_COLUMNS,
  SCREEN_TYPE_COLUMNS,
} from "@pages/home/constant/popupOptions";
import MultiColumnPopup from "@pages/home/components/multiColumnPopup/MultiColumnPopup";

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
  type: string;
  setType: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  genre: string;
  setGenre: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  indexChar: string;
  setIndexChar: (value: string) => void;
  rating: string;
  setRating: (value: string) => void;
  screenType: string;
  setScreenType: (value: string) => void;
  repCountry: string;
  setRepCountry: (value: string) => void;
  movieDivisions: string[];
  setMovieDivisions: (value: string[]) => void;
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
  type,
  setType,
  country,
  setCountry,
  genre,
  setGenre,
  status,
  setStatus,
  indexChar,
  setIndexChar,
  rating,
  setRating,
  screenType,
  setScreenType,
  repCountry,
  setRepCountry,
  movieDivisions,
  setMovieDivisions,
}: SearchFormProps) => {
  const [showMore, setShowMore] = useState(false);

  const MOVIE_DIVISION_OPTIONS = ["일반영화", "예술영화", "독립영화"];

  const [popupField, setPopupField] = useState<
    | null
    | "genre"
    | "type"
    | "country"
    | "status"
    | "repCountry"
    | "rating"
    | "screenType"
  >(null);

  const popupMap = {
    genre: {
      columns: GENRE_COLUMNS,
      value: genre,
      setter: setGenre,
    },
    type: {
      columns: TYPE_COLUMNS,
      value: type,
      setter: setType,
    },
    country: {
      columns: COUNTRY_COLUMNS,
      value: country,
      setter: setCountry,
    },
    status: {
      columns: STATUS_COLUMNS,
      value: status,
      setter: setStatus,
    },
    repCountry: {
      columns: REP_COUNTRY_COLUMNS,
      value: repCountry,
      setter: setRepCountry,
    },
    rating: {
      columns: RATING_COLUMNS,
      value: rating,
      setter: setRating,
    },
    screenType: {
      columns: SCREEN_TYPE_COLUMNS,
      value: screenType,
      setter: setScreenType,
    },
  };

  const handlePopupClose = () => setPopupField(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className={styles.searchFormWrapper}>
      <div className={styles.formWrapper}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.group}>
                <span className={styles.groupTitle}>영화명</span>
                <input
                  className={styles.input}
                  type="text"
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                />
              </div>
              <div className={styles.group}>
                <span className={styles.groupTitle}>제작연도</span>
                <div className={styles.yearRange}>
                  <select
                    className={styles.select}
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value)}
                  >
                    <option value="">--전체--</option>
                    {Array.from({ length: 101 }, (_, i) => 1925 + i).map(
                      (year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    )}
                  </select>
                  <span className={styles.tilde}>~</span>
                  <select
                    className={styles.select}
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                  >
                    <option value="">--전체--</option>
                    {Array.from({ length: 101 }, (_, i) => 1925 + i).map(
                      (year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.group}>
                <span className={styles.groupTitle}>감독명</span>
                <input
                  className={styles.input}
                  type="text"
                  value={directorName}
                  onChange={(e) => setDirectorName(e.target.value)}
                />
              </div>
              <div className={styles.group}>
                <span className={styles.groupTitle}>개봉일자</span>
                <div className={styles.datePair}>
                  <input
                    className={styles.dateInput}
                    type="date"
                    value={openStartDate}
                    onChange={(e) => setOpenStartDate(e.target.value)}
                  />
                  <span className={styles.tilde}>~</span>
                  <input
                    className={styles.dateInput}
                    type="date"
                    value={openEndDate}
                    onChange={(e) => setOpenEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.btnWrap}>
              <button type="submit" className={styles.searchBtn}>
                조회
              </button>
              <button
                type="button"
                className={styles.resetBtn}
                onClick={onReset}
              >
                초기화
              </button>
            </div>
          </div>
        </form>

        {showMore && (
          <div className={styles.moreFilterRowShow}>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.group}>
                  <span className={styles.groupTitle}>제작상태</span>
                  <input
                    readOnly
                    className={styles.input}
                    value={status}
                    onClick={() => setPopupField("status")}
                  />
                </div>
                <div className={styles.group}>
                  <span className={styles.groupTitle}>장르별</span>
                  <input
                    readOnly
                    className={styles.input}
                    value={genre}
                    onClick={() => setPopupField("genre")}
                  />
                </div>
                <div className={styles.group}>
                  <span className={styles.groupTitle}>등급별</span>
                  <input
                    className={styles.input}
                    type="text"
                    value={rating}
                    onClick={() => setPopupField("rating")}
                  />
                </div>
                <div className={styles.group}>
                  <span className={styles.groupTitle}>상영타입별</span>
                  <input
                    className={styles.input}
                    type="text"
                    value={screenType}
                    onClick={() => setPopupField("screenType")}
                  />
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.group}>
                  <span className={styles.groupTitle}>유형</span>
                  <input
                    readOnly
                    className={styles.input}
                    value={type}
                    onClick={() => setPopupField("type")}
                  />
                </div>
                <div className={styles.group}>
                  <span className={styles.groupTitle}>국적별</span>
                  <input
                    readOnly
                    className={styles.input}
                    value={country}
                    onClick={() => setPopupField("country")}
                  />
                </div>

                <div className={styles.group}>
                  <span className={styles.groupTitle}>대표국적별</span>
                  <input
                    className={styles.input}
                    type="text"
                    value={repCountry}
                    onClick={() => setPopupField("repCountry")}
                  />
                </div>

                <div className={styles.group}>
                  <span className={styles.groupTitle}>영화구분</span>
                  <div className={styles.checkboxGroup}>
                    {MOVIE_DIVISION_OPTIONS.map((label) => (
                      <label key={label}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          checked={movieDivisions.includes(label)}
                          onChange={() => {
                            if (movieDivisions.includes(label)) {
                              setMovieDivisions(
                                movieDivisions.filter((v) => v !== label)
                              );
                            } else {
                              setMovieDivisions([...movieDivisions, label]);
                            }
                          }}
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.indexWrap}>
              <span className={styles.indexLabel}>영화명 인덱싱</span>
              {[...KORINDEX, ...ENGINDEX].map((char) => (
                <button
                  key={char}
                  className={`${styles.indexButton} ${
                    indexChar === char ? styles.indexActive : ""
                  }`}
                  onClick={() => setIndexChar(char)}
                  type="button"
                >
                  {char}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        className={styles.moreToggleBtn}
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "닫기" : "더보기 🔎"}
      </button>

      {popupField && (
        <MultiColumnPopup
          columns={popupMap[popupField].columns}
          selected={popupMap[popupField].value.split(",").filter((v) => v)}
          setSelected={(values) =>
            popupMap[popupField].setter(values.filter(Boolean).join(","))
          }
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
};

export default SearchForm;
