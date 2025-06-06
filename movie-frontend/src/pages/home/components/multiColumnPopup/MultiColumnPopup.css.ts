import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const popup = style({
  backgroundColor: "#fff",
  borderRadius: "6px",
  width: "80vw",
  maxWidth: "900px",
  padding: "0 20px 20px 20px",
  boxSizing: "border-box",
  position: "relative",
  overflowY: "auto",
  maxHeight: "80vh",
});

export const header = style({
  position: "sticky",
  top: 0,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 0",

  background: "white",
  borderBottom: "1px solid #999",
  zIndex: 1,
});

export const title = style({
  fontSize: "18px",
  fontWeight: 700,
  color: "#5076db",
});

export const closeBtn = style({
  background: "transparent",
  border: "none",
  width: "22px",
  height: "22px",
  cursor: "pointer",
  color: "#333",
});

export const submitHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 0",

  borderBottom: "1px solid #999",
});

export const allCheck = style({
  margin: "12px 0",
  display: "block",
  color: "#333",
  fontWeight: 500,
});

export const table = style({
  width: "100%",
  tableLayout: "fixed",
  borderCollapse: "collapse",
  fontSize: "14px",
  borderTop: "1px solid #000",
  borderBottom: "0.5px solid #373737",
});

export const th = style({
  height: "30px",
  padding: "5px",
  border: "0.5px solid #373737",
  fontWeight: 600,
  textAlign: "center",
  color: "#333",
  background: "#f4f4f4",
  textWrap: "nowrap",
  lineHeight: "2",
});

export const selectTh = style({ width: "62px" });

export const td = style({
  height: "30px",
  padding: "5px",
  border: "0.5px solid #000",

  lineHeight: "2",
  textAlign: "center",
  textWrap: "nowrap",
  background: "white",
});

export const tdCheckbox = style({
  background: "#f4f4f4",
});

export const checkbox = style({
  cursor: "pointer",
});

export const footer = style({
  marginTop: "16px",
  textAlign: "right",
});

export const confirmBtn = style({
  backgroundColor: "#1a73e8",
  color: "white",
  border: "none",
  padding: "8px 16px",
  cursor: "pointer",
});
