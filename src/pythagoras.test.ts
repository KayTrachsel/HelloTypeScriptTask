import { isTriplet } from "./pythagoras";

test("should return true for 3,4,5", () => {
    expect(isTriplet(3, 4, 5)).toBe(true);
});

test("should return false for 2,3,4", () => {
    expect(isTriplet(2, 3, 4)).toBe(false);
});
