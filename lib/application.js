import Config from "./config.js";

export default class Application {
  constructor(config= {}, plugins = []) {
    this._config = new Config(config);
    this._plugins = plugins;
  }

  getConfig(){
    return this._config.toObject()
  }


  getPlugins(){
    return this._plugins;
  }
}
