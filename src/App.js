import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";

import logo from "./img/calc.png";

function App() {
  // const [counter, setCounter] = useState(0);
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
        <div
          className="addcounter1"
          onClick={() => {
            if (tab.length < 3) {
              const newTab = [...tab];
              newTab.push(0);
              setTab(newTab);
              console.log(newTab);
            }
          }}
        >
          <button className="addcounter">Add counter</button>
        </div>

        <div className="sectionOne">
          <div className="component">
            {tab.map((elem, index) => {
              return (
                <Counter
                  key={index}
                  index={index}
                  counter={elem}
                  tab={tab}
                  setTab={setTab}
                />
              );
            })}
          </div>
        </div>
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
