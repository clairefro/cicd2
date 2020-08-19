import { sum } from "../utils/sum";

describe("correctly sums numbers", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds 1 + (-2) to equal -1", () => {
    expect(sum(1, -2)).toBe(-1);
  });
});
