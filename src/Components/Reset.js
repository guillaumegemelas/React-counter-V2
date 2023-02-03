const Reset = ({ setCounter }) => {
  return (
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
  );
};

export default Reset;
