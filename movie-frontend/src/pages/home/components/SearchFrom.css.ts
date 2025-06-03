// src/pages/home/components/SearchForm.css.ts
import { style } from "@vanilla-extract/css";

export const formContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  marginTop: "24px",
  padding: "31px 0 36px",
  borderTop: "1px solid #afafaf",
  borderBottom: "1px solid #afafaf",
});
export const row = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
  flexWrap: "nowrap",
});

export const col = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  minWidth: "250px",
});

export const group = style({
  display: "flex",
  gap: "1rem",
});

export const groupTitle = style({
  fontWeight: "700",
  whiteSpace: "nowrap",
});

export const yearRange = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const datePair = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const tilde = style({
  fontSize: "16px",
  fontWeight: "bold",
});

export const btnWrap = style({
  display: "flex",
  gap: "1rem",
});

export const searchBtn = style({
  width: "70px",
  height: "48px",
  backgroundColor: "#4e73df",
  color: "white",
  border: "none",

  cursor: "pointer",
});

export const resetBtn = style({
  width: "70px",
  height: "48px",
  backgroundColor: "#5a5a5a",
  color: "white",
  border: "none",

  cursor: "pointer",
});
