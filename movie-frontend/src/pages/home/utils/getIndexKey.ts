import { KORINDEX } from "@pages/home/constant/index";

export const GetIndexKey = (char: string): string => {
  const code = char.charCodeAt(0) - 44032;
  if (code >= 0 && code <= 11171) {
    return KORINDEX[Math.floor(code / 588)];
  }
  return char.toUpperCase();
};
