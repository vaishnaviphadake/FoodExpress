const Shimmer = () => {
	const shimmerCards = Array.from({ length: 15 }); // 15 dummy shimmer cards

	return (
		<div className="shimmer-container">
			{shimmerCards.map((_, index) => (
				<div
					key={index}
					className="shimmer-card"
				>
					<div className="shimmer-img"></div>
					<div className="shimmer-line title"></div>
					<div className="shimmer-line subtitle"></div>
					<div className="shimmer-line rating"></div>
					<div className="shimmer-line time"></div>
				</div>
			))}
		</div>
	);
};

export default Shimmer;
