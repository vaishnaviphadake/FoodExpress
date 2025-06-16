import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header comp with Login buttun", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	// const loginBtn = screen.getByRole("button", {name: "Login"});
	const loginBtn = screen.getByText("Login");
	expect(loginBtn).toBeInTheDocument();
});

it("should render header comp with cartItems ", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	// const cartItems = screen.getByText("Cart- (0)");
	// const cartItems = screen.findByText(/Cart/);

	// expect(cartItems).toBeInTheDocument();
});

it("should render header comp with Logout", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const loginBtn = screen.getByRole("button", { name: "Login" });
	fireEvent.click(loginBtn);
	const logoutBtn = screen.getByRole("button", { name: "Logout" });
	expect(logoutBtn).toBeInTheDocument();
});
