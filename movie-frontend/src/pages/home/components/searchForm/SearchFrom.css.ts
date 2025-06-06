import { style } from "@vanilla-extract/css";

export const searchFormWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const checkboxGroup = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  rowGap: "0.5rem",
  maxWidth: "220px",
});

export const input = style({
  height: "30px",
  padding: "4px 8px",

  boxSizing: "border-box",
});
export const checkbox = style({
  transform: "scale(1.1)",
  marginRight: "4px",
});

export const formWrapper = style({
  width: "100%",
  borderTop: "1px solid #afafaf",
  borderBottom: "1px solid #afafaf",
});

export const formContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  marginTop: "24px",
  padding: "31px 0 36px",
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
  alignItems: "center",
  width: "475px",
});

export const groupTitle = style({
  fontWeight: "700",
  whiteSpace: "nowrap",
  display: "inline-block",
  width: "100px",
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

export const moreFilterRowShow = style({
  display: "flex",
  gap: "2rem",
  flexWrap: "wrap",
  borderTop: "1px dotted #ccc",
  padding: "31px 0 36px 0",
});

export const moreFilterRowHide = style({
  display: "none",
});

export const moreToggleBtn = style({
  width: "80px",
  lineHeight: "24px",
  background: "white",
  border: "1px solid #d7d7d7",
  color: "#353535",
  borderTop: "none",
});

export const indexLabel = style({
  fontWeight: "700",
  whiteSpace: "nowrap",
  marginRight: "0.75rem",
});

export const indexWrap = style({
  marginTop: "1rem",
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  gap: "0.5rem",
});

export const indexButton = style({
  padding: "4px 8px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "13px",

  color: "#353535",
  borderRadius: "50%",
  lineHeight: "1.2",
});

export const indexActive = style({
  backgroundColor: "#4e73df",
  color: "white",
});

export const dateInput = style({
  width: "150px",
  height: "30px",
  padding: "4px 8px",
  boxSizing: "border-box",
});

export const select = style({
  width: "100px",
  height: "30px",
  padding: "4px 8px",
  boxSizing: "border-box",
});
