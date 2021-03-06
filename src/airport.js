'use strict';

class Airport{
  constructor(weather, capacity = 20) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = []
    this._capacity = capacity
  }

  ShowCapacity(){
    return this._capacity;
  }

  name(){
    var names = ['Heathrow', 'Gatwick', 'JFK'];
    var name = names[Math.floor(Math.random() * 3)];
    return name;
  }

  ShowWeather(){
    if(this._weather.isStormy() === false){
      return 'good';
    }else {
      return 'stormy';
    }
  }

  planes() {
    return this._hangar;
  }

  clearForLanding(plane) {
    if(this._weather.isStormy()) {
      throw new Error('cannot land during storm');
    }
    if(this._hangar.length === this._capacity) {
      throw new Error('Airport is in full capacity');
    }
    this._hangar.push(plane);
  };

  clearForTakeOff(plane) {
    if(this._weather.isStormy()) {
      throw new Error('cannot takeoff during storm');
    };
    this._hangar.pop(plane);
  };

};
