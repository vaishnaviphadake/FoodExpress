import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
	"h1",
	{ id: "heading" },
	"Hello From React"
);

// JSX == JavaScript XML == NOT HTML inside js jst html like syntax

const jsxHeading = (
	<h1
		id="heading"
		className="head"
		tabIndex="5"
	>
		Hello in JSX
	</h1>
);

console.log(heading, jsxHeading);
root.render(heading);
root.render(jsxHeading);
//create one children
// const ele = React.createElement(
// 	"div",
// 	{ id: "parent" },
// 	React.createElement(
// 		"div",
// 		{ id: "child" },
// 		React.createElement("h1", {}, "I am an H1 tag")
// 	)
// );

//create multiple children / siblings
// const ele = React.createElement(
// 	"div",
// 	{ id: "parent" },
// 	React.createElement("div", { id: "child" }, [
// 		React.createElement("h1", {}, "I am first H1 tag"),
// 		React.createElement("h1", {}, "I am second H1 tag"),
// 	])
// );

// const ele2 = React.createElement("div", { id: "parent" }, [
// 	React.createElement("div", { id: "child1" }, [
// 		React.createElement("h1", { key: "h2a" }, "I am first H1 tag"),
// 		React.createElement("h1", { key: "h2b" }, "I am second H1 tag"),
// 	]),
// 	React.createElement("div", { id: "child2" }, [
// 		React.createElement("h1", { key: "h1a" }, "I am first H1 tag"),
// 		React.createElement("h1", { key: "h1b" }, "I am second H1 tag"),
// 	]),
// ]);

// root2.render(heading2);
// root2.render(ele2);
// console.log(ele);
// console.log(heading2);
const Comp2 = () => <h2>This is React functional Component</h2>;

const name = "Vaishnavi Phadake";
//Component Composition
const Comp = () => {
	return (
		<div>
			<h1>
				Hello {name} ! U are {5 + 5}% there
			</h1>
			<h2>This is React functional Component</h2>
			<Comp2 />
			<Comp2></Comp2>
			{Comp2()}
		</div>
	);
};

root.render(<Comp />);
// root.render(<Comp2 />);

console.log(<Comp />);
