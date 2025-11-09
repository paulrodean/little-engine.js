import Application from "./application.js";


export default class AppBuilder {
  constructor() {
    this._config = {};
    this._plugins = [];
  }


  /**
   * Returns a new App instance.
   * @returns {Application}
   */
  getApp() {
    return new Application(this._config, this._plugins);
  }


  /**
   * Sets up the configuration for the app.
   * @param configObject
   */
  setup( configObject ) {
    this._config = configObject;

    return this;
  }


  addPlugin(plugin) {
    this._plugins.push(plugin)

    return this;
  }
}
