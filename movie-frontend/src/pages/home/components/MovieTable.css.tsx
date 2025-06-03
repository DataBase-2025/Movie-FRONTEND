import { style } from "@vanilla-extract/css";

export const sortWrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "0.5rem",
});

export const sortSelect = style({
  padding: "0.5rem",
  border: "1px solid #ccc",
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "left",
  fontSize: "14px",
  backgroundColor: "#fff",
  th: {
    borderBottom: "2px solid #444",
    padding: "10px",
  },
  td: {
    borderBottom: "1px solid #ccc",
    padding: "10px",
  },
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
