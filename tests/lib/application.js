import { describe, expect, it } from "vitest";
import Application from "../../lib/application.js";


describe( "app", () => {
  it("should accept a config object", () => {
    const config = {}
    const app = new Application(config);
    expect(app.getConfig()).toEqual(config);
  })

  it("should return an empty object as default config", () => {
    const app = new Application();
    expect(app.getConfig()).toEqual({});
  });
})
