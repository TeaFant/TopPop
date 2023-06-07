import "./css/app.css";
import { useState, useEffect } from "react";
import { fetchData } from "./apiCall";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchData(setSongs);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Top Pop</h1>
      </header>

      <Main songs={songs} />
      <Footer />
    </div>
  );
}

export default App;
