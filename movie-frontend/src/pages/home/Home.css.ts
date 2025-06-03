// src/pages/home/home.css.ts
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "24px",
  lineHeight: "1.6",
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

export const listItem = style({
  marginBottom: "10px",
});
