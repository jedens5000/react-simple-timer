import React, { useState, useEffect } from "react";

function Home() {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [counter4, setCounter4] = useState(0);

	useEffect(() => {
		setTimeout(() => setCounter1(counter1 + 1), 1000);
	}, [counter1]);

	useEffect(() => {
		setInterval(() => setCounter2(counter2 + 1), 10000);
	}, [counter2]);

	useEffect(() => {
		setInterval(() => setCounter3(counter3 + 1), 100000);
	}, [counter3]);

	useEffect(() => {
		setInterval(() => setCounter4(counter4 + 1), 1000000);
	}, [counter4]);

	return (
		<div className="home">
			<div className="timer">{counter4 % 10}</div>
			<div className="timer">{counter3 % 10}</div>
			<div className="timer">{counter2 % 10}</div>
			<div className="timer">{counter1 % 10}</div>
		</div>
	);
}

export default Home;

////////////////////////////////////////////////
//////////////First attempt from class//////////
// const [time, setTime] = useState(0);
// const [timerOn, setTimerOn] = useState(false);
// console.log(time);
// useEffect(() => {
// 	let interval = null;
// 	if (timerOn) {
// 		interval = setInterval(() => {
// 			setTime((prevTime) => prevTime + 1);
// 		}, 1000);
// 	} else {
// 		clearInterval(interval);
// 	}
// 	return (
// 		<div className="Home">
// 			<span>{(0 + Math.floor((time / 60000) % 60)).slice(-2)}</span>
// 			<span>{(0 + Math.floor((time / 1000) % 60)).slice(-2)}</span>
// 			<div>{time}</div>
// 			<div>
// 				<h1>TEST</h1>
// 				<button onClick={() => setTimerOn(true)}>Start</button>
// 				<button onClick={() => setTimerOn(false)}>Stop</button>
// 				<button onClick={() => setTime(0)}>Reset</button>
// 			</div>
// 		</div>
// 	);
// });
////////////////////////////////////////////////
//////////////This is a manual counter//////////
// import  { useState } from ";

// const Home = () => {
// 	const [count, setCount] = useState(0);

// 	const increase = () => {
// 		setCount(count + 1);
// 	};
// 	const decrease = () => {
// 		setCount(count - 1);
// 	};
// 	const reset = () => {
// 		setCount(0);
// 	};

// 	return (
// 		<div>
// 			<span>
// 				<h1>{count}</h1>
// 			</span>
// 			<button onClick={increase}>Increase</button>
// 			<button onClick={decrease}>Decrease</button>
// 			<div>
// 				<button onClick={reset}>Reset</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Home;
