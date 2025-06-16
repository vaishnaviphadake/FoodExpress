import React, { useState } from "react";

class User extends React.Component {
	constructor(props) {
		super(props);
		// console.log(this.props);
		console.log("Child constructor");

		this.state = {
			// count: 0,
			// count2: 0,

			userInfo: {
				name: "Dummy",
				location: "Dummy",
			},
		};
	}

	async componentDidMount() {
		// console.log("Child component did mount ?");
		const res = await fetch("https://api.github.com/users/vaishnaviphadake");
		const data = await res.json();
		console.log(data);
		this.setState({ userInfo: data });

		//we need to clear this interval before unmounting bcoz this will keep going continously even if we change the component infact it createsnew one plus previus one whenever we visit the comp again
		// this.timer = setInterval(() => {
		// 	console.log("Interval called");
		// }, 1000);
	}

	componentDidUpdate() {
		console.log("called after component update");
	}

	componentWillUnmount() {
		console.log(
			"called juust before the component is about to Unmount ==> component hv been unmounted till now"
		);
		// clearInterval(this.timer);
	}
	render() {
		// const { location, contact } = this.props;
		const { name, id, type } = this.state.userInfo;
		// console.log("Child render");

		const decrement = () => {
			this.setState({
				count2: this.state.count2 - 1,
			});
		};
		return (
			<div className="user-card">
				<p>This is Class componenet</p>
				<h2>Name : Vaishnavi Phadake</h2>
				{/* <h3>Location: {this.props.location}</h3>
				<h4>Contact : {contact}</h4> */}
				<h4>{name}</h4>
				<h4>
					{id},{type}
				</h4>

				{/* <button
					onClick={() => {
						//never update stae variables directly
						this.setState({
							count: this.state.count + 1,
						});
					}}
				>
					Increment
				</button>
				<h1>{this.state.count}</h1>
				<button onClick={decrement}>Decrement</button>
				<h1>{this.state.count2}</h1> */}
				<h4>{this.state.userInfo.name}</h4>
			</div>
		);
	}
}

export default User;
/**Mounting phase
 * first a class constructor runs => creates an instance
 * then class render method runs with whatever the defalt state values are there
 * Updating
 * then component is mounted and api call is made
 * the setState method is called and state is changed with the real api data
 *
 *and then again the component renders with updated api data

  and after the state data update componentDidUpdate is called
 */
