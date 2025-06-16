import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

export const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	// const onlineStatus = useOnlineStatus();
	const { loggedUser } = useContext(UserContext);
	const [menuOpen, setMenuOpen] = useState(false);
	const cartItems = useSelector((store) => store.cart.items);

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
				<Link
					to="/"
					className="flex items-center gap-3"
				>
					<img
						className="w-10 h-10 object-contain"
						src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
						alt="App Logo"
					/>
					<span className="text-xl font-bold text-orange-600 tracking-wide hidden sm:block">
						Food<span className="text-gray-800">Express</span>
					</span>
				</Link>

				<button
					className="sm:hidden text-gray-700"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				<nav
					className={`${
						menuOpen ? "block" : "hidden"
					} sm:flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4 sm:mt-0 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent px-4 sm:px-0 py-4 sm:py-0 shadow sm:shadow-none`}
				>
					<ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 font-medium">
						{/* <li>{onlineStatus ? "🟢" : "🔴"}</li> */}

						<li>
							<Link
								to="/"
								className="hover:text-orange-600 transition"
								onClick={() => setMenuOpen(false)}
							>
								Home
							</Link>
						</li>

						<li>
							<Link
								to="/contact"
								className="hover:text-orange-600 transition"
								onClick={() => setMenuOpen(false)}
							>
								Contact Us
							</Link>
						</li>

						<li>
							<Link
								to="/about"
								className="hover:text-orange-600 transition"
								onClick={() => setMenuOpen(false)}
							>
								About Us
							</Link>
						</li>

						<li>
							<Link
								to="/cart"
								className="hover:text-orange-600 transition"
								onClick={() => setMenuOpen(false)}
							>
								Cart ({cartItems.length})
							</Link>
						</li>

						<li>
							<button
								className="text-white bg-orange-600 hover:bg-orange-700 px-4 py-1.5 rounded-lg transition"
								onClick={() => {
									setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
									setMenuOpen(false);
								}}
							>
								{btnName}
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
