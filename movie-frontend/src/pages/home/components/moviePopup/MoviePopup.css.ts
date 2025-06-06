import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
});

export const popup = style({
  width: "800px",
  maxHeight: "90vh",
  backgroundColor: "#fff",
  borderRadius: "8px",
  overflowY: "auto",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  position: "relative",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",

  fontSize: "18px",
  fontWeight: 600,
});

export const closeBtn = style({
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
});

export const tabMenu = style({
  display: "flex",
  padding: "0 24px",
});

export const tab = style({
  flex: 1,
  padding: "12px 0",
  textAlign: "center",
  cursor: "pointer",
  color: "#333",
  backgroundColor: "#f7f7f7",
  border: "1px solid #d9d9d9",
});

export const activeTab = style([
  tab,
  {
    backgroundColor: "#fff",
    fontWeight: 700,
  },
]);

export const content = style({
  display: "flex",
  flexDirection: "column",
  padding: "24px",
});

export const placeholderImg = style({
  width: "190px",
  height: "280px",
  background: "#d9d9d9",
});

export const section = style({
  display: "flex",
  gap: "20px",
  marginBottom: "24px",
});

export const details = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const detail = style({
  display: "flex",
  gap: "10px",
  lineHeight: "25px",
  color: "#555",
});

export const detailTitle = style({
  fontWeight: "700",
});

export const statisticalImg = style({ width: "100%" });
