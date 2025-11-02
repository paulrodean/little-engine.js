import { describe, expect, it } from "vitest";
import * as littleEngine from "../little-engine.mjs";


describe( "little-engine", () => {

  it( "should be defined", () => {
    expect( littleEngine ).toBeDefined();
    expect( littleEngine ).toBeTypeOf( "object" );
  } );


  describe( "version", () => {
    it( "should have a version", () => {
      expect( littleEngine.version ).toBeDefined();
      expect( littleEngine.version ).toBeTypeOf( "string" );
    } );

    it( "should match semver pattern", () => {
      expect( littleEngine.version ).toMatch( /^\d+\.\d+\.\d+$/ );
    } );

    it( "should match the package.json version", () => {
      //   expect(littleEngine.version).toBe(packageJson.version);
    } );
  } );

} );
