const Counter = ({ counter, index, tab, setTab }) => {
  return (
    //les 3 buttons qu'on doit afficher

    <div className="buttons">
      <section className="one">
        {/* premier bouton "-" --------------------------------*/}
        <div className="firstbutton">
          <button
            className="min"
            onClick={() => {
              const newTab = [...tab];
              newTab[index] = newTab[index] - 1;
              setTab(newTab);
            }}
          >
            -
          </button>
        </div>

        {/* deuxième bouton "counter" -------------------------*/}
        <div>
          <button className="coun">
            <span>{counter}</span>
          </button>
        </div>

        {/* troisième bouton "+" -------------------------------*/}
        <div className="thirdbutton">
          <button
            className="add"
            onClick={() => {
              const newTab = [...tab];
              newTab[index] = newTab[index] + 1;
              setTab(newTab);
            }}
          >
            +
          </button>
        </div>
      </section>

      {/* 4è bouton "reset" -----------------------------------*/}
      <section className="two">
        <div className="secondbutt">
          <button
            className="reset"
            onClick={() => {
              const newTab = [...tab];
              newTab[index] = 0;
              setTab(newTab);
            }}
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
