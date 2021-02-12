'use strict';

class Weather {
  constructor() {
    this._CHANCE_OF_STORMY = 0.8;
  }

  isStormy() {
    return (Math.random() > this._CHANCE_OF_STORMY);
  }
}
