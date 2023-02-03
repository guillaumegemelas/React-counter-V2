const Counter = ({ counter, setCounter }) => {
  return (
    <div className="buttons">
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
    </div>
  );
};

export default Counter;
