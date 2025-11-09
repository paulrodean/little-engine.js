import { describe, expect, it } from "vitest";
import * as littleEngine from "../little-engine";
import AppBuilder from "../lib/app-builder.js";


describe( "little-engine", () => {
  it( "should export the app-builder", () => {
    expect( littleEngine.appBuilder ).toBeDefined();
    expect( littleEngine.appBuilder ).toBeInstanceOf( AppBuilder );
  } );
} );
