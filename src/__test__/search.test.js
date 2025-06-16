import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

it("should render Body Comp with pizza cards when searched pizza", async () => {
	await act(async () => {
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		);
	});

	const searchBtn = screen.getByRole("button", { name: "Search" });

	const searchInputs = screen.getAllByTestId("searchInput");
	const searchInput = searchInputs[0];

	// const allCards = screen.getAllByTestId("resCard");
	// expect(allCards.length).toBe(20);

	fireEvent.change(searchInput, { target: { value: "pizza" } });
	fireEvent.click(searchBtn);

	const cards = screen.getAllByTestId("resCard");
	expect(cards.length).toBe(2);

	cards.forEach((card) => {
		const name = card.querySelector(".res-name")?.textContent;
		console.log(name);
	});
});

it("should filter Top Rated Restaurents", async () => {
	await act(async () => {
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		);
	});

	const topRatedBtns = screen.getAllByRole("button", { name: "Top Rated" });
	fireEvent.click(topRatedBtns[0]);

	const cards = screen.getAllByTestId("resCard");
	expect(cards.length).toBe(9);
	// console.log(cards);
});

// import { act } from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import ResInfo from "../components/ResInfo";
// import MOCK_DATA from "../mocks/resInfoPageMock.json";
// import { BrowserRouter } from "react-router-dom";

// global.fetch = jest.fn(() =>
// 	Promise.resolve({
// 		json: () => Promise.resolve(MOCK_DATA),
// 	})
// );

// jest.mock("react-router-dom", () => ({
// 	...jest.requireActual("react-router-dom"),
// 	useParams: () => ({ resId: "123" }),
// }));

// it("should load res Menu page and comp", async () => {
// 	render(
// 		<BrowserRouter>
// 			<ResInfo />
// 		</BrowserRouter>
// 	);

// 	await waitFor(() =>
// 		expect(screen.getByText("Recommended")).toBeInTheDocument()
// 	);

// 	const categoryTitle = screen.getByText("Recommended");
// 	expect(categoryTitle).toBeInTheDocument();

// 	const menuItem = screen.getByText("Veggie Wrap");
// 	expect(menuItem).toBeInTheDocument();
// });
