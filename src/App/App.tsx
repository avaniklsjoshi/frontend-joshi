import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import FeaturesPage from "../Components/Views/FeaturesPage";
import LandingPage from "../Components/Views/LandingPage";
import NotFoundPage from "../Components/Views/NotfoundPage";

function App() {
  return (
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
  );
}

export default App;
