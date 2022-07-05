import { useCallback, useContext } from "react";
import Box from "./box";
import {
  LOCAL_STORAGE_THEME_KEY,
  THEME_ARRAY,
} from "../../Configs/Constants/const";
import { IThemeConfig } from "../../Theme/themeConfig";
import { PlaceThemeContext } from "../../Theme/themeContext";
import { setToLS } from "../../Utils/localStorage";

export default function ThemePicker() {
  const themeContext = useContext(PlaceThemeContext);

  const themeSlection = useCallback(
    (type: string) => {
      const selectedTheme: IThemeConfig = THEME_ARRAY.filter(
        (theme) => theme.themeName === type
      )[0];
      themeContext.setNewTheme(selectedTheme.themeValue);
      setToLS(LOCAL_STORAGE_THEME_KEY, selectedTheme.themeValue);
    },
    [themeContext]
  );

  return (
    <div>
      {THEME_ARRAY.map((theme: IThemeConfig, index: number) => (
        <Box
          type={theme.themeName}
          boxColor={theme.themeColor}
          onBoxClick={themeSlection}
          key={index}
        ></Box>
      ))}
    </div>
  );
}
