export default class Config {

  constructor(initialConfig = {}) {
    this._config = initialConfig;
  }

  toObject(){
    return this._config;
  }
}
