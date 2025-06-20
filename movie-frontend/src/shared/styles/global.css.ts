import { globalStyle } from "@vanilla-extract/css";
import "@styles/reset.css";

globalStyle("html", {
  fontSize: "80.5%",
  scrollPaddingTop: "7rem",
});

globalStyle("body", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontFamily: `'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
});

globalStyle("#root", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

globalStyle("main", {
  flexGrow: 1,
});
