import { useState } from "react";
import { createPortal } from "react-dom";
import * as styles from "@pages/home/components/moviePopup/MoviePopup.css";
import type { Movie } from "@pages/home/types/movieType";

interface MoviePopupProps {
  movie: Movie;
  onClose: () => void;
}

const MoviePopup = ({ movie, onClose }: MoviePopupProps) => {
  const [activeTab, setActiveTab] = useState("기본정보");

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <header className={styles.header}>
          <h2>{movie.director && ` ${movie.director} 감독전`}</h2>
          <button onClick={onClose} className={styles.closeBtn}>
            X
          </button>
        </header>

        <div className={styles.tabMenu}>
          {["기본정보", "통계정보", "상영현황정보"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? styles.activeTab : styles.tab}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          {activeTab === "기본정보" && (
            <>
              <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>영화</h1>
              <section className={styles.section}>
                <div className={styles.placeholderImg}></div>
                <div className={styles.details}>
                  <div className={styles.detail}>
                    <strong className={styles.detailTitle}>영화 이름</strong>
                    <span>{movie.movieName}</span>
                  </div>
                  <div className={styles.detail}>
                    <strong className={styles.detailTitle}>코드</strong>
                    <span>{movie.code ? movie.code : "해당없음"}</span>
                  </div>
                  <div className={styles.detail}>
                    <strong className={styles.detailTitle}>제작국가</strong>
                    <span>{movie.country}</span>
                  </div>
                  <div className={styles.detail}>
                    <strong className={styles.detailTitle}>유형</strong>
                    <span>{movie.type}</span>
                  </div>
                  <div className={styles.detail}>
                    <strong className={styles.detailTitle}>장르</strong>
                    <span>{movie.genre}</span>
                  </div>
                  <div className={styles.detail}>
                    <strong className={styles.detailTitle}>제작상태</strong>
                    <span>{movie.status}</span>
                  </div>
                  <div className={styles.detail}>
                    <strong className={styles.detailTitle}>제작사</strong>
                    <span>{movie.producer ? movie.producer : "해당없음"}</span>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "통계정보" && (
            <>
              <section className={styles.section}>
                <img
                  className={styles.statisticalImg}
                  src="/img/image.png"
                  alt="통계정보"
                />
              </section>
            </>
          )}

          {activeTab === "상영현황정보" && (
            <section className={styles.section}>
              <p>해당 정보는 현재 준비 중입니다.</p>
            </section>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MoviePopup;
