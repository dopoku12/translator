import { useEffect } from "react";
// import Form from "./Form";
import Data from "./components/Data";
import Header from "./components/Header";
import M from "materialize-css";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div >
      <Header />
      <main className="container">
        <section>
          <Data />
        </section>

      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
