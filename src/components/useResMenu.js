import React, { useEffect, useState } from "react";
import { resInfoLink } from "../utils/constants";
const useResMenu = (resId) => {
	const [resMenu, setResMenu] = useState(null);

	useEffect(() => {
		if (resId) fetchMenu();
	}, [resId]);

	const fetchMenu = async () => {
		const data = await fetch(resInfoLink + resId);

		const res = await data.json();
		setResMenu(res?.data?.cards[2]?.card.card?.info);
		// console.log(res);
	};
	return resMenu;
};

export default useResMenu;
