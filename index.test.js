const { sumNumberFriends } = require("./");

describe("sumNumberFriends", () => {
	test("returns a number", () => {
		expect(sumNumberFriends("1")).toBeNumber();
	});
	test("sums number with matching digit friend", () => {
		expect(sumNumberFriends("112")).toBe(1);
		expect(sumNumberFriends("122")).toBe(2);
	});
	test("doesn't sum lonely numbers", () => {
		expect(sumNumberFriends("1")).toBe(0);
	});
	test("sums circular digit friends", () => {
		expect(sumNumberFriends("11")).toBe(2);
	});
});
