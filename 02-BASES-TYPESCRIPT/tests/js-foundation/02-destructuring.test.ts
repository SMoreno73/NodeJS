import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring.ts", () => {
  test("characters should contain Flash,Superman", () => {
    //This toContain is case sensitive
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("first character should be Flash, and second Superman", () => {
    const [flash, superman] = characters;
    //I hope this variable is a specific word o thing
    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
