import { getAge } from "../../src/plugins";

describe("plugins/get-age.plugin.ts", () => {
  test("getAge() should return the age of a person", () => {
    //birthdate: Is when I say all date
    const birthdate = "2003-01-07";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  test("getAge() should return current age", () => {
    const birthdate = "2003-01-07";
    const age = getAge(birthdate);
    const calculateAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculateAge);
  });

  test("getAge should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);
    const birthdate = "2003-01-07";
    const age = getAge(birthdate);

    expect(age).toBe(0);
    //I check spy was call
    expect(spy).toHaveBeenCalledWith();
  });
});
