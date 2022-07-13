import colorMode from "../../Assets/Images/colorMode.png";
import dayMode from "../../Assets/Images/dayMode.png";
import nightMode from "../../Assets/Images/nightMode.png";
import { IThemeConfig } from "../../Theme/themeConfig";
import dark from "../../Theme/themes/dark";
import girly from "../../Theme/themes/girly";
import light from "../../Theme/themes/light";

export const THEME_ARRAY: IThemeConfig[] = [
  {
    themeName: "girly",
    themeColor: "#59ab64",
    themeIcon: colorMode,
    themeValue: girly
  },
  {
    themeName: "light",
    themeColor: "#f5f5f5",
    themeIcon: dayMode,
    themeValue: light
  },
  {
    themeName: "dark",
    themeColor: "#4B4453",
    themeIcon: nightMode,
    themeValue: dark
  }
];

export const DEFAULT_THEME = dark;
export const LOCAL_STORAGE_THEME_KEY = "joshi-themes";

export enum LANGUAGE_NAMES {
  HINDI = "Hindi",
  ENGLISH = "English",
  GERMAN = "German"
}
export enum LANGUAGE_NAMES_KEY {
  HINDI = "hn",
  ENGLISH = "en",
  GERMAN = "de"
}
export const DEFAULT_LANGUAGE = LANGUAGE_NAMES_KEY.ENGLISH;
