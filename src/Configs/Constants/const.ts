import { IThemeConfig } from "../../Theme/themeConfig";
import dark from "../../Theme/themes/dark";
import girly from "../../Theme/themes/girly";
import light from "../../Theme/themes/light";

export const themeArray: IThemeConfig[] = [
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
