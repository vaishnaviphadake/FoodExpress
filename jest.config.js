// // jest.config.js
// module.exports = {
// 	testEnvironment: "jsdom",
// 	transform: {
// 		"^.+\\.[jt]sx?$": "babel-jest",
// 	},
// 	moduleFileExtensions: ["js", "jsx"],
// 	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
// 	moduleNameMapper: {
// 		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
// 		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$":
// 			"<rootDir>/__mocks__/fileMock.js",
// 	},
// };
module.exports = {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.[jt]sx?$": "babel-jest",
	},
	moduleFileExtensions: ["js", "jsx"],
	setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
