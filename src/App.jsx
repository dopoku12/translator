import { useEffect } from "react";
import M from "materialize-css";
import { Routes, Route } from 'react-router-dom';
// import Form from "./Form";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Words from "./pages/Words";
import AboutMe from './pages/AboutMe';
function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div >
      <Nav />
      <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Words" element={<Words />} />
        </Routes>

        <AboutMe />
        <footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
