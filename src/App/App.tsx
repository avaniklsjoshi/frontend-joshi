import "./App.scss";
import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import FeaturesPage from "../Components/Views/FeaturesPage";
import LandingPage from "../Components/Views/LandingPage";
import NotFoundPage from "../Components/Views/NotfoundPage";
import GlobalStyle from "../Theme/global";
import { IPlaceThemeProvider, PlaceThemeContext } from "../Theme/themeContext";
import ThemeReducer from "../Theme/themeReducer";
import girly from "../Theme/themes/girly";

function App() {
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, []);
  const themeContextProviderValue: IPlaceThemeProvider = {
    currentTheme,
    setNewTheme,
  };
  if (Array.isArray(currentTheme) && !currentTheme.length) {
    setNewTheme(girly);
  }

  return (
    <PlaceThemeContext.Provider value={themeContextProviderValue}>
      <ThemeProvider theme={currentTheme.updatedTheme}>
        <GlobalStyle />
        <div className="App">
          <header className="App-header">
            <Header />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="features" element={<FeaturesPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </header>
        </div>
      </ThemeProvider>
    </PlaceThemeContext.Provider>
  );
}

export default App;
