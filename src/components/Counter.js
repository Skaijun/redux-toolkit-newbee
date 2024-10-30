import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter.js";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.counter.showCounter);
  const counter = useSelector((state) => state.counter.counter);

  const handleIncrement = () => dispatch(counterActions.increment());
  const handleDecrement = () => dispatch(counterActions.decrement());
  const handleIncreaseByTen = () => dispatch(counterActions.increase(10));
  const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>{counter}</div>}
      <div className="counter-action-btns">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncreaseByTen}>Incease by 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
