import { style, globalStyle } from "@vanilla-extract/css";

export const tableHeader = style({
  display: "flex",
  justifyContent: "space-between",
  margin: "2rem 0 0.5rem 0",
});

export const sortWrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "0.5rem",
});

export const selectOption = style({ padding: "5px" });

export const totalCountBold = style({ fontWeight: "700" });

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "left",
  fontSize: "14px",
  backgroundColor: "#fff",
  borderTop: "2px solid #5076db",
});

// th 스타일
globalStyle(`${table} th`, {
  borderBottom: "2px solid #444",
  padding: "10px",
  background: "#eee",
});

// td 스타일
globalStyle(`${table} td`, {
  borderBottom: "1px solid #ccc",
  padding: "10px",
  color: "#666",
});

export const clickableCell = style({
  textDecoration: "underline",
  cursor: "pointer",
});

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
  gap: "0.5rem",
});

export const active = style({
  fontWeight: "bold",
  color: "#4e73df",
});
