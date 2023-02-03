import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";
import Reset from "./Components/Reset";

import logo from "./img/calc.png";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p>React counter V2</p>
      </header>

      <section className="sectionOne">
        <div className="component">
          <Counter counter={counter} setCounter={setCounter} />
          <Reset setCounter={setCounter} />
        </div>
      </section>

      <footer>
        <p>
          Made with <span> React </span> at <span> Le Reacteur </span> by{" "}
          <span> Guillaume</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
