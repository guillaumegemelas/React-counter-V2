const Counter = ({ counter, index, tab, setTab }) => {
  return (
    <div className="buttons">
      <section className="one">
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

        <div>
          <button className="coun">
            <span>{counter}</span>
          </button>
        </div>

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
