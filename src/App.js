import React from "react";
import './app.css'
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="app">
      <h2>{cash} руб.</h2>
      <div className="block">
        <div className="block-btn">
          <button onClick={() => addCash(Number(prompt()))}>+</button>
          <button onClick={() => getCash(Number(prompt()))}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
