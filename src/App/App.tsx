import "./app.scss";
import { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import FeaturesPage from "../Components/Views/FeaturesPage";
import Create from "../Components/Views/FeaturesPage/CRUDExample/create";
import Edit from "../Components/Views/FeaturesPage/CRUDExample/edit";
import LandingPage from "../Components/Views/LandingPage";
import NotFoundPage from "../Components/Views/NotfoundPage";
import { ROUTES } from "../Configs/Constants/const";
import GlobalStyle from "../Theme/global";
import { IPlaceThemeProvider, PlaceThemeContext } from "../Theme/themeContext";
import ThemeReducer from "../Theme/themeReducer";
import { useTheme } from "../Theme/useTheme";
function App() {
  const { theme, themeLoaded } = useTheme();
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, []);
  const themeContextProviderValue: IPlaceThemeProvider = {
    currentTheme,
    setNewTheme
  };

  useEffect(() => {
    if (theme) {
      setNewTheme(theme);
      return;
    }
  }, [theme]);

  return (
    <PlaceThemeContext.Provider value={themeContextProviderValue}>
      {themeLoaded && (
        <ThemeProvider theme={currentTheme.updatedTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <div className="App">
              <Header />
              <div className="content-section">
                <Routes>
                  <Route path={ROUTES.HOME} element={<LandingPage />} />
                  <Route path={ROUTES.FEATURES} element={<FeaturesPage />} />
                  <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
                  <Route path="/edit/:id" element={<Edit />} />
                  <Route path="/create" element={<Create />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </PlaceThemeContext.Provider>
  );
}

export default App;
