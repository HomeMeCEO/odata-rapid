import { expect } from "chai";
import "mocha";

import { EDM } from "../src/index";

describe("Basic tests", () => {
  it("constructor", () => {
    const model = new EDM();
    expect(model).not.to.be.null;
  });
});
