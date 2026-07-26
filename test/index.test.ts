import { describe, expect, it } from "vitest";

import { binarySearchBy } from "../src/index.js";

describe("binarySearchBy", () => {
  const values = [{ id: 1 }, { id: 4 }, { id: 8 }];
  it("searches by a selected key", () => {
    expect(binarySearchBy(values, 4, (value) => value.id)).toBe(1);
    expect(binarySearchBy(values, 6, (value) => value.id)).toBe(-1);
  });
  it("supports custom key ordering", () => {
    expect(
      binarySearchBy(
        ["ccc", "bb", "a"],
        2,
        (value) => value.length,
        (a, b) => b - a,
      ),
    ).toBe(1);
  });
});
