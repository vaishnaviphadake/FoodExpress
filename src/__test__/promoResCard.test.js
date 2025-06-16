import ResCard from "../components/ResCard";
import { WithPromoted } from "../components/ResCard";
import MOCK_DATA from "../mocks/promotedResCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render res component with props data", () => {
	const PromotedResCard = WithPromoted(ResCard);

	render(<PromotedResCard data={MOCK_DATA} />);

	const name = screen.getByText("Theobroma");
	expect(name).toBeInTheDocument();
});
