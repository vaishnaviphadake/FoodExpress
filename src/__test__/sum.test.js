const sum = require("../components/sum");

test("Sum of Two nos", () => {
	const res = sum(4, 8);
	//assertion
	expect(res).toBe(12);
});
