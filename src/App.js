import React, { Suspense, useEffect, useState, useContext } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import ResInfo from "./components/ResInfo";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";

import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Instamart from "./components/Instamart";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Instamart = lazy(() => {
	return import("./components/Instamart");
});

const AppLayout = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		//make some APi call
		const data = {
			name: "Vaishnavi ",
		};
		setUser(data.name);
	}, []);

	return (
		<div>
			<Provider store={appStore}>
				<UserContext.Provider value={{ loggedUser: user, setUser }}>
					<div>
						<Header />
						<Outlet />
					</div>
				</UserContext.Provider>
			</Provider>
		</div>
	);
};

const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/instamart",
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Instamart />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/restaurant/:resId",
				element: <ResInfo />,
			},
		],
		errorElement: <Error />,
	},
]);
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRoutes} />);
