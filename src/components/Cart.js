import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cdnLink } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();

	// Group items by ID and add quantity
	const groupedItems = cartItems.reduce((acc, item) => {
		const id = item.card.info.id;
		if (!acc[id]) {
			acc[id] = { ...item, quantity: 1 };
		} else {
			acc[id].quantity += 1;
		}
		return acc;
	}, {});

	const groupedItemsArray = Object.values(groupedItems);

	const clearCartItems = () => {
		dispatch(clearCart());
	};

	const handleRemove = (item) => {
		dispatch(removeItem(item));
	};

	const totalAmount = groupedItemsArray.reduce(
		(acc, item) =>
			acc +
			((item.card.info.price ||
				item.card.info.defaultPrice ||
				item.card.info.finalPrice) /
				100) *
				item.quantity,
		0
	);

	// return (
	// 	<div className="p-8 max-w-3xl mx-auto">
	// 		<h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
	// 		<button
	// 			className="mb-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
	// 			onClick={clearCartItems}
	// 		>
	// 			Clear Cart
	// 		</button>

	// 		{groupedItemsArray.length === 0 ? (
	// 			<p className="text-gray-500 text-center">Your cart is empty.</p>
	// 		) : (
	// 			<>
	// 				<div className="space-y-4">
	// 					{groupedItemsArray.map((item) => (
	// 						<div
	// 							key={item.card.info.id}
	// 							className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md"
	// 						>
	// 							{/* Left Side */}
	// 							<div className="flex-1 pr-4">
	// 								<h3 className="text-xl font-semibold">
	// 									{item.card.info.name}
	// 								</h3>
	// 								<p className="text-sm text-gray-600 mb-1">
	// 									{item.card.info.description}
	// 								</p>
	// 								<p className="text-lg text-green-700 font-medium">
	// 									₹
	// 									{((item.card.info.price ||
	// 										item.card.info.defaultPrice ||
	// 										item.card.info.finalPrice) /
	// 										100) *
	// 										item.quantity}{" "}
	// 									<span className="text-sm text-gray-500 ml-2">
	// 										({item.quantity} × ₹
	// 										{(item.card.info.price ||
	// 											item.card.info.defaultPrice ||
	// 											item.card.info.finalPrice) / 100}{" "}
	// 										)
	// 									</span>
	// 								</p>
	// 								{item.card.info.ribbon?.text && (
	// 									<span className="inline-block mt-2 px-3 py-1 text-sm text-white bg-red-500 rounded-full">
	// 										{item.card.info.ribbon.text}
	// 									</span>
	// 								)}
	// 							</div>

	// 							{/* Right Side */}
	// 							<div className="flex flex-col items-center">
	// 								{item.card.info.imageId && (
	// 									<img
	// 										src={cdnLink + item.card.info.imageId}
	// 										alt={item.card.info.name}
	// 										className="w-24 h-24 object-cover rounded-lg mb-2"
	// 									/>
	// 								)}
	// 								<button
	// 									onClick={() => handleRemove(item)}
	// 									className="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-600"
	// 								>
	// 									−
	// 								</button>
	// 							</div>
	// 						</div>
	// 					))}
	// 				</div>

	// 				{/* Total Amount */}
	// 				<div className="text-right mt-6 text-2xl font-semibold">
	// 					Total: ₹{totalAmount.toFixed(2)}
	// 				</div>
	// 			</>
	// 		)}
	// 	</div>
	// );

	return (
		<div className="p-4 sm:p-8 max-w-4xl mx-auto">
			<h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">
				Your Cart
			</h1>

			<div className="flex justify-center mb-6">
				<button
					className="bg-red-500 text-white px-5 py-2 rounded-full shadow hover:bg-red-600 transition"
					onClick={clearCartItems}
				>
					Clear Cart
				</button>
			</div>

			{groupedItemsArray.length === 0 ? (
				<p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
			) : (
				<>
					<div className="space-y-6">
						{groupedItemsArray.map((item) => (
							<div
								key={item.card.info.id}
								className="flex flex-col sm:flex-row items-center sm:items-start bg-white rounded-2xl shadow-md p-4 gap-4"
							>
								{/* Image */}
								{item.card.info.imageId && (
									<img
										src={cdnLink + item.card.info.imageId}
										alt={item.card.info.name}
										className="w-full sm:w-28 h-28 object-cover rounded-lg"
									/>
								)}

								{/* Info */}
								<div className="flex-1 text-center sm:text-left">
									<h3 className="text-xl font-semibold text-gray-800">
										{item.card.info.name}
									</h3>
									<p className="text-sm text-gray-600 mt-1">
										{item.card.info.description}
									</p>
									<p className="text-lg text-green-700 font-medium mt-2">
										₹
										{((item.card.info.price ||
											item.card.info.defaultPrice ||
											item.card.info.finalPrice) /
											100) *
											item.quantity}{" "}
										<span className="text-sm text-gray-500 ml-1">
											({item.quantity} × ₹
											{(item.card.info.price ||
												item.card.info.defaultPrice ||
												item.card.info.finalPrice) / 100}
											)
										</span>
									</p>

									{item.card.info.ribbon?.text && (
										<span className="inline-block mt-2 px-3 py-1 text-sm text-white bg-red-500 rounded-full">
											{item.card.info.ribbon.text}
										</span>
									)}
								</div>

								{/* Remove Button */}
								<div className="flex justify-center sm:justify-end w-full sm:w-auto">
									<button
										onClick={() => handleRemove(item)}
										className="bg-red-400 text-white px-5 py-1 rounded-md hover:bg-red-600 transition"
									>
										−
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Total */}
					<div className="text-right mt-8 text-3xl font-bold text-gray-800">
						Total : ₹{totalAmount.toFixed(2)}
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
