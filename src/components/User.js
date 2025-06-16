// functional component

import { useEffect, useState } from "react";

const User = (props) => {
	const { name, location } = props;
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	const Increment = () => {
		setCount(count + 1);
	};

	const Decrement = () => {
		setCount2(count2 - 1);
	};

	useEffect(() => {
		console.log("useEffect called");
		// const timer = setInterval(() => {
		// 	console.log("interval called");
		// }, 2000);

		return () => {
			console.log("called jst before unmounting the component");
			// clearInterval(timer);
		};
	}, []);

	return (
		<div className="user-card">
			<p style={{ borderTop: "3px solid black" }}>
				This is functional componenet
			</p>
			<h2>Name :{name}</h2>
			<h3>Location: Pune</h3>
			<h4>Contact : {props.contact}</h4>
			{/* <h1>
				<span>{count}</span>
			</h1>
			<h1>{count2}</h1>
			<button onClick={Increment}>Increment </button>
			<button onClick={Decrement}>Decrement </button> */}
		</div>
	);
};

export default User;
