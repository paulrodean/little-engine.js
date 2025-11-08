import { describe, expect, it } from "vitest";
import * as littleEngine from "../little-engine";
import AppBuilder from "../lib/app-builder.js";


describe( "little-engine", () => {

  it( "should export an object", () => {
    expect( littleEngine ).toBeDefined();
    expect( littleEngine ).toBeTypeOf( "object" );
  } );

  it("should export the app-builder", () =>{
    expect(littleEngine.appBuilder).toBeDefined();
    expect(littleEngine.appBuilder).toBeTypeOf("object");
    expect(littleEngine.appBuilder).toBeInstanceOf(AppBuilder);
  });
} );
