import { calculator } from "./calculator";

test("calculator add", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(2, 3, 5)).toBe(10);
    expect(calculator.add(-1, 0.9)).toBe(0);
    expect(calculator.add(13)).toBe(13);
    expect(calculator.add(1.1, 3, 1.1)).toBe(5);
}); 

test("calculator substract", () => {
    expect(calculator.substract(2, 3)).toBe(-1);
    expect(calculator.substract(2, 3, 9)).toBe(-10);
    expect(calculator.substract(-1, 0.9)).toBe(-2);
    expect(calculator.substract(13)).toBe(13);
    expect(calculator.substract(1.1, 3, 1.1)).toBe(-3);
    expect(calculator.substract(-1)).toBe(-1);
}); 

test("calculator divide", () => {
    expect(calculator.divide(6.1, 1.5)).toBe(3);
    expect(calculator.divide(9, 3, 3)).toBe(1);
    expect(calculator.divide(-4, 2)).toBe(-2);
    expect(calculator.divide(-10, -2)).toBe(5);
    expect(calculator.divide(1.1, 3, 1.1)).toBe(0);
    expect(calculator.divide(-1)).toBe(-1);
    expect(calculator.divide(0, 1, 2, 3, 4, 5)).toBe(0);
    expect(calculator.divide(1, 0)).toBe(Infinity);
    expect(calculator.divide(10, 3)).toBe(3);
}); 

test("calculator multiply", () => {
    expect(calculator.multiply(5, 5)).toBe(25);
    expect(calculator.multiply(2, 0)).toBe(0);
    expect(calculator.multiply(-1, 0.9)).toBe(-1);
    expect(calculator.multiply(13)).toBe(13);
    expect(calculator.multiply(1.1, 3, 1.1)).toBe(3);
    expect(calculator.multiply(0, 1)).toBe(0);
}); 