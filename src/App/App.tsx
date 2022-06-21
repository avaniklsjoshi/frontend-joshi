import "./App.scss";
import LandingPage from "../components/views/LandingPage";
import Header from "../components/Header/header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
