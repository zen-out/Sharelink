import React, { useState, useEffect } from "react";
import { createStore, combineReducers } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { CounterSlice } from "../redux/reducers/CounterSlice";
export default function PomodoroPage() {
  const [count, setCount] = useState(0);

  const counter = useSelector(
    (state) => state.counterStore.count
  );
  const dispatch = useDispatch();
  console.log(counter);
  useEffect(() => {
    setCount(counter);
  }, [counter]);
  function addCount() {
    dispatch(CounterSlice.actions.increment());
  }
  function subtractCount() {
    dispatch(CounterSlice.actions.decrement());
  }
  return (
    <div>
      <h1>Pomodoro Page</h1>
      <button onClick={addCount}>Add</button>
      <h1>{count}</h1>
      <button onClick={subtractCount}>Subtract</button>
    </div>
  );
}
