import { useCallback, useContext } from "react";
import Box from "./box";
import { themeArray } from "../../Configs/Constants/const";
import { IThemeConfig } from "../../Theme/themeConfig";
import { PlaceThemeContext } from "../../Theme/themeContext";
export default function ThemePicker() {
  const themeContext = useContext(PlaceThemeContext);

  const themeSlection = useCallback((type: string) => {
    const selectedTheme: IThemeConfig = themeArray.filter(
      (theme) => theme.themeName === type
    )[0];
    themeContext.setNewTheme(selectedTheme.themeValue);
  }, []);

  return (
    <div>
      {themeArray.map((theme: IThemeConfig, index: number) => (
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
