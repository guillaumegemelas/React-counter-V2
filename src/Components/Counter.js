const Counter = ({ counter, setCounter }) => {
  return (
    <div className="buttons">
      <section className="one">
        <div className="firstbutton">
          <button
            className="min"
            onClick={() => {
              setCounter(counter - 1);
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
              setCounter(counter + 1);
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
              setCounter(0);
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
