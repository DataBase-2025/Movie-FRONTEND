import React from "react";

interface PageNumbersProps {
  total_Page: number;
  page: number;
  handlePageChange: (newPage: number) => void;
}

const PageNumbers: React.FC<PageNumbersProps> = ({
  total_Page,
  page,
  handlePageChange,
}) => {
  const pages = [];

  // 시작 페이지와 끝 페이지 계산
  let start = Math.max(1, page - 4);
  let end = Math.min(total_Page, page + 5);

  // 항상 10개가 안 된다면 보정
  if (end - start + 1 < 10) {
    if (start === 1) {
      end = Math.min(10, total_Page);
    } else if (end === total_Page) {
      start = Math.max(1, total_Page - 9);
    }
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        style={{
          backgroundColor: "#eee",
          border: "0.5px solid black",
          cursor: page === 1 ? "not-allowed" : "pointer",
        }}
      >
        ◀
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => handlePageChange(p)}
          style={{
            width: "50px",
            fontWeight: p === page ? "bold" : "normal",
            backgroundColor: p === page ? "#ccc" : "transparent",
            border: "0.5px solid black",
            padding: "6px 12px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === total_Page}
        style={{
          backgroundColor: "#eee",
          border: "0.5px solid black",
          cursor: page === total_Page ? "not-allowed" : "pointer",
        }}
      >
        ▶
      </button>
    </div>
  );
};

export default PageNumbers;
