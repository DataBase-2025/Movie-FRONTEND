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
