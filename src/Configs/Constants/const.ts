import { IThemeConfig } from "../../Theme/themeConfig";
import dark from "../../Theme/themes/dark";
import girly from "../../Theme/themes/girly";
import light from "../../Theme/themes/light";

export const THEME_ARRAY: IThemeConfig[] = [
  {
    themeName: "green",
    themeColor: "#59ab64",
    themeValue: girly,
  },
  {
    themeName: "light",
    themeColor: "#f5f5f5",
    themeValue: light,
  },
  {
    themeName: "dark",
    themeColor: "#4B4453",
    themeValue: dark,
  },
];

export const DEFAULT_THEME = girly;
export const LOCAL_STORAGE_THEME_KEY = "joshi-themes";
