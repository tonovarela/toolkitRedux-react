import { useState } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,incrementByAmount} from "./store/slices/counter";

function App() {	
	const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
	return (
		<div className="App">
			<div className="card">
        <h1>{counter}</h1>
				<button onClick={() =>{ dispatch(increment()) }}>+1</button>
        <button onClick={() =>{ dispatch(incrementByAmount(5)) }}>+5</button>
        <button onClick={() =>{ dispatch(decrement()) }}>-1</button>
			</div>
		</div>
	);
}

export default App;
