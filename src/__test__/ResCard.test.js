import ResCard from "../components/ResCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render res component with props data", () => {
	// console.log(MOCK_DATA);
	render(<ResCard data={MOCK_DATA} />);

	const name = screen.getByText("Kwality Walls Ice Cream and More");

	expect(name).toBeInTheDocument();
});
