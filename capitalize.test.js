import capitalize from "./capitalize";

test("capitalize", () => {
  expect(capitalize("hello, world")).toBe("Hello, world");
});

test("capitalize a capital", () => {
  expect(capitalize("THIS IS A TEST")).toBe("THIS IS A TEST");
});

test("no valid characters", () => {
  expect(capitalize(1234)).toBe(1234);
});

test("mixed characters", () => {
  expect(capitalize("1#fe5")).toBe("1#fe5");
});

test("mixed characters 2", () => {
  expect(capitalize("a114")).toBe("A114");
});
