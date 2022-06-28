import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/views/LandingPage";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import FeaturesPage from "../components/views/FeaturesPage";
import NotFoundPage from "../components/views/NotfoundPage";

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
