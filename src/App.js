import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";

import logo from "./img/calc.png";

function App() {
  const [counter, setCounter] = useState(0);
  // const [addcounter, setAddCounter] = useState(1);
  //on va vouloir stocker dans un seul state une liste de nombres, donc faire un
  //tableau de nombres

  const [tab, setTab] = useState([0]);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p>React counter V2</p>
      </header>
      <main>
        <section>
          <button
            className="addcounter"
            onClick={() => {
              const newTab = [...tab];

              newTab.push(0);
              setTab(newTab);
              console.log(newTab);
            }}
          >
            Add counter
          </button>
        </section>

        <section className="sectionOne">
          <div className="component">
            <Counter counter={counter} setCounter={setCounter} />
          </div>
        </section>
      </main>
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
