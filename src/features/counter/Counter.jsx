import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount} from "./counterSlice";
// import { incrementAsync } from "./counterSlice";

const Counter = () => {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className="styles.row">
        <button
          className="styles.button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="styles.value">{count}</span>
        <button
          className="styles.button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="styles.button"
          aria-label="AddAmount value"
          onClick={() => dispatch(incrementAsync(5))}
        >
          AddAmount
        </button>
      </div>
      {/* <div className="styles.row"> */}
        <input
        className="style.textbook"
        aria-label="set increment amount"
        value={incrementAmount}
        onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
        className="style.button"
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
         Add Amount
        </button>
        <button
        className="style.button"
        onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
         Add Async
        </button>
      <div/>
    </div>

  );
};

export default Counter;
