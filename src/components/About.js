import { FaUtensils, FaBolt, FaSmile, FaUsers } from "react-icons/fa";

const AboutUs = () => {
	return (
		<div className="bg-white text-gray-800 py-12 px-6 sm:px-10 max-w-6xl mx-auto">
			<h1 className="text-4xl sm:text-5xl font-extrabold text-center text-orange-600 mb-4">
				About Us
			</h1>
			<p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
				Delivering happiness at your doorstep. Here's who we are and why we do
				what we do.
			</p>

			<div className="grid gap-8 sm:grid-cols-2">
				<div className="bg-orange-50 p-6 rounded-xl shadow-md">
					<h2 className="text-2xl font-bold text-orange-500 mb-2">
						Our Mission
					</h2>
					<p className="text-gray-700 text-lg">
						To make food delivery reliable, fast, and delightful for everyone.
						Whether you're craving a quick snack or a feast, we’ve got your
						back.
					</p>
				</div>
				<div className="bg-gray-50 p-6 rounded-xl shadow-md">
					<h2 className="text-2xl font-bold text-orange-500 mb-2">
						What We Do
					</h2>
					<p className="text-gray-700 text-lg">
						We partner with top-rated restaurants to bring thousands of dishes
						to your table. Real-time tracking, live menus, secure payments —
						everything you need.
					</p>
				</div>
			</div>

			<div className="mt-16">
				<h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
					What Drives Us
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition">
						<FaBolt className="text-orange-500 text-3xl mb-3" />
						<h3 className="text-lg font-semibold mb-1">Speed & Reliability</h3>
						<p className="text-sm text-gray-600">
							We ensure your food arrives hot, fresh, and on time, every time.
						</p>
					</div>
					<div className="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition">
						<FaUtensils className="text-orange-500 text-3xl mb-3" />
						<h3 className="text-lg font-semibold mb-1">Variety & Choice</h3>
						<p className="text-sm text-gray-600">
							From street food to gourmet, we have something for every craving.
						</p>
					</div>
					<div className="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition">
						<FaUsers className="text-orange-500 text-3xl mb-3" />
						<h3 className="text-lg font-semibold mb-1">Community First</h3>
						<p className="text-sm text-gray-600">
							We support local kitchens, empower delivery partners, and serve
							customers.
						</p>
					</div>
					<div className="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition">
						<FaSmile className="text-orange-500 text-3xl mb-3" />
						<h3 className="text-lg font-semibold mb-1">Customer Happiness</h3>
						<p className="text-sm text-gray-600">
							We go the extra mile to make sure you smile after every order.
						</p>
					</div>
				</div>
			</div>

			<div className="mt-16 bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-xl shadow-lg text-center">
				<h2 className="text-2xl font-semibold mb-2">Join Our Journey</h2>
				<p className="text-lg max-w-2xl mx-auto">
					We're more than just a food delivery app — we're a movement to connect
					people, flavors, and cultures through great food. Thank you for being
					part of our story.
				</p>
			</div>
		</div>
	);
};

export default AboutUs;

// import UserClass from "./UserClass";
// import User from "./User";
// import React from "react";
// import UserContext from "../utils/UserContext";

// class About extends React.Component {
// 	constructor() {
// 		super();
// 		// console.log("parenr constructor");
// 	}

// 	async componentDidMount() {
// 		// console.log("Parent component did mount ?");
// 		// const data = await fetch("https://api.github.com/users/vaishnaviphadake");
// 		// const json = await data.json();
// 		// console.log(json);
// 	}

// 	render() {
// 		// console.log("Parent render");
// 		// <UserContext.Consumer>{(data) => console.log(data)}</UserContext.Consumer>;
// 		return (
// 			<div>
// 				<h1>Hello This is About mw</h1>
// 				<UserClass
// 					location={"Pune, Maharashtra"}
// 					contact={"huhjjahsjh"}
// 				/>
// 				{/* <UserClass
// 					location={"Kolhapur, Maharashtra"}
// 					contact={"kolapur@gmail.com"}
// 				/>*/}
// 				<User
// 					name={"Elon Musk"}
// 					contact={"vgvhsahjjahsjh"}
// 				/>
// 				<UserContext.Consumer>
// 					{({ loggedUser }) => <h2>{loggedUser}</h2>}
// 				</UserContext.Consumer>
// 				;
// 			</div>
// 		);
// 	}
// }

// export default About;
