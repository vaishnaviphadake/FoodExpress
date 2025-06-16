import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";
import { WithPromoted } from "./ResCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FaSearch, FaStar, FaUndo } from "react-icons/fa";
const Body = () => {
	const [restList, setRestList] = useState([]);
	const [allRestList, setAllRestList] = useState([]);
	const [searchText, setSearchText] = useState("");
	const PromotedResCard = WithPromoted(ResCard);
	const { user, setUser } = useContext(UserContext);
	// const loaderRef = useRef(null);
	// const [nextOffset, setNextOffset] = useState("");
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const res = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);

			const data = await res.json();

			const restList = data?.data?.cards?.find((item) =>
				item?.card?.card?.id?.includes("top_brands_for_you")
			)?.card?.card?.gridElements?.infoWithStyle?.restaurants;

			// console.log(restList);

			setRestList(restList || []);
			setAllRestList(restList || []);
		} catch (error) {
			console.error("Error fetching restaurant data:", error);
		}
	};

	const handleTopRatedFilter = () => {
		const filteredList = allRestList.filter(
			(rest) => rest?.info?.avgRating && parseFloat(rest.info.avgRating) > 4.4
		);
		setRestList(filteredList);
	};

	const handleReset = () => {
		setRestList(allRestList);
		setSearchText("");
	};

	const handleSearch = () => {
		const filtered = allRestList.filter((rest) =>
			rest.info.name.toLowerCase().includes(searchText.toLowerCase())
		);

		setRestList(filtered);
	};

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false)
		return (
			<div>
				<h1>Oops... Looks like you are offline !!!</h1>
				<h4>Please check your internet connection</h4>
			</div>
		);

	return (
		<div className="bg-gray-50 min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
				<div className="flex flex-col gap-4 w-full">
					{/* DESKTOP VIEW: All Inline */}
					<div className="hidden lg:flex items-center gap-4 w-full">
						<div className="relative flex-1">
							<input
								type="text"
								data-testid="searchInput"
								className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 transition"
								placeholder="Search for restaurants..."
								value={searchText}
								onChange={(e) => setSearchText(e.target.value)}
							/>
							<FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
						</div>

						<button
							className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl active:scale-95 transition-all duration-150"
							onClick={handleSearch}
						>
							<FaSearch />
							Search
						</button>

						<button
							data-testid="topRated"
							id="filter-btn"
							onClick={handleTopRatedFilter}
							className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 active:scale-95 transition-all duration-150"
						>
							<FaStar />
							Top Rated
						</button>

						<button
							id="reset-btn"
							onClick={handleReset}
							className="flex items-center justify-center px-4 py-3 border border-black/50  text-black/50 hover:bg-gray-100 text-lg rounded-xl active:scale-95 transition-all duration-150"
							title="Reset Filters"
						>
							<FaUndo />
						</button>
					</div>

					{/* MOBILE & TABLET VIEW */}
					<div className="lg:hidden flex flex-col gap-3 w-full">
						<div className="relative w-full">
							<input
								type="text"
								data-testid="searchInput"
								className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-50 transition"
								placeholder="Search for restaurants..."
								value={searchText}
								onChange={(e) => setSearchText(e.target.value)}
							/>
							<FaSearch
								className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-emerald-500 active:scale-90 transition"
								onClick={() => handleSearch()}
								title="Search"
							/>
						</div>

						<div className="flex justify-end gap-2 w-full">
							<button
								data-testid="topRated"
								id="filter-btn"
								onClick={handleTopRatedFilter}
								className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 active:scale-95 transition-all duration-150 text-sm sm:text-base"
							>
								<FaStar />
								<span>Top Rated</span>
							</button>

							<button
								id="reset-btn"
								onClick={handleReset}
								className="flex items-center justify-center px-3 py-2 sm:py-3   text-black/50 text-sm hover:bg-gray-150 rounded-xl active:scale-95 transition-all duration-150 sm:text-base"
								title="Reset Filters"
							>
								<FaUndo />
							</button>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
					{restList.length === 0 ? (
						<div className="col-span-full flex justify-center items-center min-h-[300px]">
							<Shimmer />
						</div>
					) : (
						restList.map((rest) => (
							<Link
								key={rest.info.id}
								to={`/restaurant/${rest.info.id}`}
							>
								{rest.info.avgRating > 4.4 ? (
									<PromotedResCard data={rest.info} />
								) : (
									<ResCard data={rest.info} />
								)}
							</Link>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default Body;
