import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

//we can write test or it its one and same ==> try to use only one and not the combination
// test("should load contact component", () => {
// 	render(<Contact />);

// const heading = screen.getAByRole("heading");

// expect(heading).toBeInTheDocument();
// });

describe("elements inside Contact Component", () => {
	// beforeAll(() => {
	// 	console.log("Before All...");
	// });
	// beforeEach(() => {
	// 	console.log("Before Each...");
	// });
	// afterAll(() => {
	// 	console.log("After All...");
	// });
	// afterEach(() => {
	// 	console.log("After Each...");
	// });

	test("should load button in Contact component", () => {
		render(<Contact />);

		// const button = screen.getByRole("button");
		const button = screen.getByText("Send Message");

		expect(button).toBeInTheDocument();
	});

	test("should load input field in Contact component", () => {
		render(<Contact />);

		const inputName = screen.getByPlaceholderText("Enter your email");

		expect(inputName).toBeInTheDocument();
	});

	it("should load two input field in Contact component", () => {
		render(<Contact />);

		const inputBoxes = screen.getAllByRole("textbox");
		// console.log(inputBoxes);

		expect(inputBoxes.length).toBe(3);
		inputBoxes.forEach((input) => {
			expect(input).toBeInTheDocument();
		});
	});
});
