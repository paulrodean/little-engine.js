import { describe, expect, it } from "vitest";
import AppBuilder from "../lib/app-builder.js";
import App from "../lib/app.js";


describe( "app-builder", () => {

  it( "should create the app class", () => {
    const appBuilder = new AppBuilder()
    const app = appBuilder.getApp();
    expect( app ).toBeTypeOf( "object" );
    expect( app ).toBeInstanceOf( App );
  } );
} );
