import { describe, expect, it } from "vitest";
import AppBuilder from "../../lib/app-builder.js";
import Application from "../../lib/application.js";


describe( "app-builder", () => {

  it( "should create the app class", () => {
    const appBuilder = new AppBuilder()
    expect( appBuilder.getApp() ).toBeInstanceOf( Application );
  } )

  describe( "config", () => {
    it( "should be able to pass initial config to the app", () => {
      const configObject = {}
      const appBuilder = new AppBuilder();

      expect(appBuilder.setup( configObject )).toBe( appBuilder );

      const app = appBuilder.getApp();
      expect( app.getConfig() ).toEqual( configObject );
    } );
  } )

  describe( "plugins", () => {
    it( "should be able to add plugins to the app", () => {
      const plugin = {};

      const appBuilder = new AppBuilder();
      expect(appBuilder.addPlugin(plugin)).toBe( appBuilder );

      const app = appBuilder.getApp();
      expect(app.getPlugins()).toEqual([plugin]);
    } )
  } )
} )
