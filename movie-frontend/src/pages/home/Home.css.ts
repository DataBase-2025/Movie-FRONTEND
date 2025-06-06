// src/pages/home/home.css.ts
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  width: "90%",
  padding: "3rem",
});

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "16px",
});

export const list = style({
  listStyleType: "disc",
  padding: "28px 30px",
  border: "1px solid #d9d9d9",
  background: "#f4f4f4",
});
export const listTextBold = style({
  fontWeight: "700",
});

export const listItem = style({
  marginBottom: "10px",
});

export const excel = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const excelBtn = style({
  display: "inline-block",
  padding: "5px 10px",
  border: "1px solid #d7d7d7",
  borderRadius: "3px",
  background: "#fff",
  fontSize: "12px",
  textAlign: "center",
  width: "42px",
  color: "#555",
  letterSpacing: "-0.05em",
  lineHeight: "1",
});
