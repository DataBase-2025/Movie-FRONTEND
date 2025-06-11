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

  // 최대 5개의 페이지만 보여주기 (앞뒤로 간단한 범위 조정)
  const start = 1;
  const end = total_Page;

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        style={{
          backgroundColor: "ccc",
          border: "0.5px solid black",
        }}
      >
        ◀
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => handlePageChange(p)}
          style={{
            fontWeight: p === page ? "bold" : "normal",
            backgroundColor: p === page ? "#ccc" : "transparent",
            border: "0.5px solid black",
          }}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === total_Page}
      >
        ▶
      </button>
    </div>
  );
};

export default PageNumbers;
