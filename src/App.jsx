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
    <>
      <Nav />
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Words" element={<Words />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>

        <footer>
        </footer>
      </div>
    </>
  );
}

export default App;
