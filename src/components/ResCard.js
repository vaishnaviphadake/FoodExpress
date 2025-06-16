import { cdnLink } from "../utils/constants";
import { useState } from "react";

const ResCard = ({ data }) => {
	const {
		name = "Unknown",
		cuisines = [],
		avgRating = "--",
		cloudinaryImageId = "",
		sla = {},
		costForTwo = "",
	} = data;

	const imageUrl = cloudinaryImageId
		? cdnLink + cloudinaryImageId
		: "https://dummyimage.com/200x150/cccccc/000000&text=No+Image";
	// : "https://via.placeholder.com/200x150?text=No+Image";

	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div data-testid="resCard">
			<div className="card">
				<div className="res-card">
					<img
						className="res-logo"
						src={imageUrl}
						alt={name}
					/>
					<h2>{name}</h2>
					{/* <h3>{cuisines.join(", ") || "Various cuisines"}</h3> */}
					<h3
						onClick={() => setIsExpanded(!isExpanded)}
						style={{ cursor: "pointer" }}
					>
						{isExpanded
							? cuisines.join(", ")
							: cuisines.join(", ").slice(0, 30) +
							  (cuisines.join(", ").length > 30 ? "..." : "")}
					</h3>
					<h3>
						{avgRating !== "--" ? `${avgRating} ⭐` : "No rating"}{" "}
						{sla.slaString}
					</h3>
					{/* <h3>
					{sla?.deliveryTime ? `${sla.deliveryTime} min` : "ETA not available"}
				       </h3> */}
					<h3>{costForTwo}</h3>
				</div>
			</div>
		</div>
	);
};

export const WithPromoted = (ResCard) => {
	return (props) => {
		return (
			<div className="relative">
				<label className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded shadow z-10">
					Top Rated
				</label>
				<ResCard {...props} />
			</div>
		);
	};
};

export default ResCard;
