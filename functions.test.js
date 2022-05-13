import capitalize from "./capitalize";
import reverseString from "./reverse";
import calculator from "./calculator";
import caeserText from "./caeser";
import analyzeArray from "./analyzeArray";

// Capitalize tests
test("Capitalize string", () => {
  expect(capitalize("walid")).toBe("Walid");
});

// Reverse tests
test("Reverse string", () => {
  expect(reverseString("walid")).toBe("dilaw");
});

// Calculator tests
test("Add numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract numbers", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Multiply numbers", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("Divide numbers", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

//Caeser tests
test("Caeser text", () => {
  expect(caeserText("walid", 5)).toBe("bfqni");
});

//Analyze array tests
test("Check if all array elements are numbers", () => {
  expect(() => analyzeArray([1, 2, 3, "Hi", 5])).toThrow();
});

test("Analyze array average", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
});

test("Analyze array min", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
});

test("Analyze array max", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
});

test("Analyze array length", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
});
