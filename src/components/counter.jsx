import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
