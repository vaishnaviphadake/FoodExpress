// import React, { useState } from "react";
// import { cdnLink } from "../utils/constants";
// import { addItem } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";

// const ResCategory = ({ category, isExpanded, onToggle }) => {
// 	const { title, itemCards } = category?.card?.card;
// 	const dispatch = useDispatch();

// 	const addItemToCart = (item) => {
// 		dispatch(addItem(item));
// 	};
// 	return (
// 		<div className="w-9/12 mx-auto my-4 bg-gray-50 shadow-md rounded-md p-4">
// 			<div
// 				className="flex justify-between items-center cursor-pointer"
// 				onClick={onToggle}
// 			>
// 				<span className="font-semibold text-xl">
// 					{title} ({itemCards?.length})
// 				</span>
// 				<span className="text-xl font-bold">{isExpanded ? "▲" : "▼"}</span>
// 			</div>

// 			{isExpanded && (
// 				<div className="mt-4 space-y-6">
// 					{itemCards.map((item) => {
// 						const info = item?.card?.info;
// 						return (
// 							<div
// 								key={info?.id}
// 								className="flex justify-between items-start border-b border-gray-200 pb-4"
// 							>
// 								{/* Left - Info */}
// 								<div className="w-3/4 pr-4">
// 									<h3 className="text-lg font-medium text-gray-900">
// 										{info?.name}
// 									</h3>
// 									<p className="text-sm text-gray-600 mt-1">
// 										{info?.description}
// 									</p>
// 									<p className="text-sm text-gray-800 mt-2 font-semibold">
// 										₹{(info?.price || info?.defaultPrice || 0) / 100}
// 									</p>
// 								</div>

// 								{/* Right - Image + Add button */}
// 								<div className="w-1/4 relative">
// 									{info?.imageId && (
// 										<img
// 											src={cdnLink + info.imageId}
// 											alt={info.name}
// 											className="w-full h-24 object-cover rounded-md shadow-sm"
// 										/>
// 									)}
// 									<button
// 										className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white border border-gray-300 text-sm font-medium px-5 py-1 rounded-md shadow hover:bg-gray-100 transition"
// 										onClick={() => addItemToCart(item)}
// 									>
// 										Add +
// 									</button>
// 								</div>
// 							</div>
// 						);
// 					})}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default ResCategory;

// // // export default ResCategory;
// // import React, { useState } from "react";
// // import { cdnLink } from "../utils/constants";

// // const ResCategory = ({ category }) => {
// // 	const { title, itemCards } = category?.card?.card;
// // 	const [isExpanded, setIsExpanded] = useState(false);

// // 	const toggleAccordion = () => {
// // 		setIsExpanded(!isExpanded);
// // 	};

// // 	return (
// // 		<div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
// // 			<div
// // 				className="flex justify-between items-center cursor-pointer"
// // 				onClick={toggleAccordion}
// // 			>
// // 				<span className="font-semibold text-lg my-2">
// // 					{title} ({itemCards?.length})
// // 				</span>
// // 				<span className="text-xl">{isExpanded ? "🔼" : "🔽"}</span>
// // 			</div>

// // 			{isExpanded && (
// // 				<div className="mt-4 space-y-4">
// // 					{itemCards.map((item) => {
// // 						const info = item?.card?.info;
// // 						return (
// // 							<div
// // 								key={info?.id}
// // 								className="border-b border-gray-300 pb-4"
// // 							>
// // 								<div className="flex justify-between">
// // 									<span className="block font-medium">{info?.name}</span>

// // 									<img
// // 										className="w-20"
// // 										src={cdnLink + info?.imageId}
// // 									/>
// // 								</div>
// // 								<span className="block text-sm text-gray-700">
// // 									₹{(info?.price || 0) / 100}
// // 								</span>
// // 								<p className="text-sm text-gray-600">{info?.description}</p>
// // 							</div>
// // 						);
// // 					})}
// // 				</div>
// // 			)}
// // 		</div>
// // 	);
// // };

// // export default ResCategory;

import React from "react";
import { cdnLink } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ResCategory = ({ category, isExpanded, onToggle }) => {
	const { title, itemCards } = category?.card?.card;
	const dispatch = useDispatch();

	const addItemToCart = (item) => {
		dispatch(addItem(item));
	};

	return (
		<div className="w-full sm:w-11/12 lg:w-9/12 mx-auto my-6 bg-white shadow-lg rounded-lg p-6 border border-gray-100 transition-all duration-300">
			{/* Header */}
			<div
				className="flex justify-between items-center cursor-pointer"
				onClick={onToggle}
			>
				<h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
					{title} ({itemCards?.length})
				</h3>
				<span className="text-xl font-bold text-gray-600">
					{isExpanded ? "▲" : "▼"}
				</span>
			</div>

			{isExpanded && (
				<div className="mt-6 space-y-6">
					{itemCards.map((item) => {
						const info = item?.card?.info;
						return (
							<div
								key={info?.id}
								className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-b border-gray-200 pb-6 gap-4"
							>
								{/* Left - Info */}
								<div className="w-full sm:w-3/4 pr-0 sm:pr-4 text-center sm:text-left">
									<h3 className="text-lg font-semibold text-gray-900">
										{info?.name}
									</h3>
									<p className="text-sm text-gray-600 mt-1">
										{info?.description}
									</p>
									<p className="text-sm text-gray-800 mt-2 font-semibold">
										₹{(info?.price || info?.defaultPrice || 0) / 100}
									</p>
								</div>

								<div className="w-full sm:w-1/4 relative flex flex-col items-center">
									{info?.imageId && (
										<img
											src={cdnLink + info.imageId}
											alt={info.name}
											className="w-32 h-24 object-cover rounded-2xl shadow-md"
										/>
									)}
									<button
										onClick={() => addItemToCart(item)}
										className="mt-2 bg-white border border-gray-300 text-sm font-medium px-4 py-1 rounded-md shadow hover:bg-gray-100 transition inline-flex items-center gap-1"
									>
										Add <span className="text-lg font-bold">+</span>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ResCategory;
