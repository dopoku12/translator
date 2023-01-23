import { useEffect } from "react";
// import Form from "./Form";
import Display from "./components/Display";
import Header from "./components/Header";
import M from "materialize-css";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <section>
          <Display />
        </section>

      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
