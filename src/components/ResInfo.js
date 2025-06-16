import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useEffect } from "react";
// import useResMenu from "./useResMenu";
// import useResDishes from "./useResDishes";
import ResCategory from "./ResCategory";
import { resInfoLink } from "../utils/constants";
import { cdnLink } from "../utils/constants";

const ResInfo = () => {
	const { resId } = useParams();
	// const resMenu = useResMenu(resId);
	// const resCategories = useResDishes(resId);
	const [expandedIndex, setExpandedIndex] = useState(null);
	const [resCategories, setCategories] = useState(null);
	const [resMenu, setResMenu] = useState(null);

	useEffect(() => {
		if (resId) fetchMenu();
	}, [resId]);

	const fetchMenu = async () => {
		const data = await fetch(resInfoLink + resId);

		const res = await data.json();
		setResMenu(res?.data?.cards[2]?.card.card?.info);
		console.log(res);

		const categories =
			res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
				(c) =>
					c?.card?.card?.["@type"] ===
					"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
			);
		setCategories(categories);
	};

	if (!resMenu) return <Shimmer />;

	const name = resMenu?.name || "Restaurant";
	const cuisines = resMenu?.cuisines?.join(", ") || "";
	const costForTwo = resMenu?.costForTwoMessage || "";
	const imageId = resMenu?.cloudinaryImageId;

	const handleAccordionToggle = (index) => {
		setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
			<h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 shadow-sm">
				{name}
			</h1>

			<div className="flex justify-center mb-6">
				<img
					src={cdnLink + imageId}
					alt={name}
					className="rounded-lg shadow-md object-cover w-full max-w-md h-auto sm:h-[200px]"
				/>
			</div>

			<div className="text-center text-gray-600 mb-10">
				<h4 className="text-base sm:text-lg">{cuisines}</h4>
				<p className="text-sm text-gray-500 mt-1 ">{costForTwo}</p>
			</div>

			<h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 text-center mb-6 shadow-sm">
				Menu
			</h2>

			<div className="space-y-4">
				{resCategories?.length > 0 ? (
					resCategories.map((cat, index) => (
						<ResCategory
							key={index}
							category={cat}
							isExpanded={expandedIndex === index}
							onToggle={() => handleAccordionToggle(index)}
						/>
					))
				) : (
					<p className="text-center text-gray-500">No menu available.</p>
				)}
			</div>
		</div>
	);
};

export default ResInfo;
