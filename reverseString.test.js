import reverseString from "./reverseString";

test("reverse basic string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse string with numbers", () => {
  expect(reverseString("H1N1")).toBe("1N1H");
});

test("don't reverse numbers", () => {
  expect(reverseString(1234)).toBe(1234);
});
