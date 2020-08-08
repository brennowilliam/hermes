import { Hermes } from "../index";

describe("Hermes Class constructor", () => {
  it("should throw an error when a queryKey property isn't provided", () => {
    expect(() => new Hermes()).toThrowError(
      new Error("queryKey must be provided and it must be a string")
    );
  });

  // it("should be an instance of the Hermes Class", () => {
  //   const hermes = new Hermes({ queryKey: "test" });
  //   expect(hermes).toBeInstanceOf(Hermes);
  // });

  // it("should have a queryKey property defined", () => {
  //   const hermes = new Hermes({ queryKey: "test" });
  //   expect(hermes.queryKey).toBe("test");
  // });

  // it("should create a unique query id when creating a new instance", () => {
  //   const hermes = new Hermes({ queryKey: "test" });
  //   expect(typeof hermes.getQueryUniqueId()).toBe("string");
  // });

  // it("should take a retry property with a number as a value", () => {
  //   const hermes = new Hermes({ queryKey: "test", retry: 3 });
  //   expect(hermes).toHaveProperty("retry");
  //   expect(typeof hermes.retry).toBe("number");
  //   expect(hermes.retry).toEqual(3);
  // });

  // it("should throw an error if the value for the retry prop is less than 1", () => {
  //   expect(() => new Hermes({ queryKey: "test", retry: -1 })).toThrowError(
  //     new Error('retry value must be a number greater than 1')
  //   );
  // });

  // it.skip("should take a timeout property with a number in milliseconds", () => {
  //   const hermes = new Hermes({ queryKey: "test", timeout: 1000 });
  //   expect(hermes).toHaveProperty("timeout");
  //   expect(typeof hermes.retry).toBe("number");
  //   expect(hermes.retry).toEqual(1000);
  // });
});

describe("Hermes GET method", () => {
  let hermes;
  beforeEach(() => {
    hermes = new Hermes({ queryKey: "test" });
  });

  it("should expose a get function", () => {
    expect(hermes).toHaveProperty("get");
    expect(typeof hermes.get).toBe("function");
  });
});
