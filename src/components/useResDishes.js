import React, { useEffect, useState } from "react";
import { resInfoLink } from "../utils/constants";
const useResDishes = (resId) => {
	// const [resDishesList, setResDishesList] = useState(null);
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		if (resId) fetchMenu();
	}, [resId]);

	// useEffect(() => {
	// 	console.log("Restaurant menu received:", categories);
	// }, [categories]);

	const fetchMenu = async () => {
		try {
			const data = await fetch(resInfoLink + resId);
			const res = await data.json();
			// setResDishesList(
			// 	res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||
			// 		res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel ||
			// 		res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.categories[0]?.itemCards
			// );
			// console.log("Fetched dishes:", resDishesList);
			console.log(res?.data?.cards);
			const categories =
				res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
					(c) =>
						c?.card?.card?.["@type"] ===
						"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
				);
			console.log(categories);
			setCategories(categories);
		} catch (error) {
			console.error("Failed to fetch restaurant dishes:", error);
		}
	};

	return categories;
};

export default useResDishes;
