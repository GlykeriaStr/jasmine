<<<<<<< HEAD
'use strict';

class Airport {

  constructor(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = []
  };

  planes() {
    return this._hangar;
  };

  clearForLanding(plane) {
    this._hangar.push(plane);
  };

  clearForTakeoff() {
    if (this._weather.isStormy()) {
      throw new Error('cannot takeoff during storm');
    }
    this._hangar.pop();
  };


};
=======
>>>>>>> parent of 3a1d9fb... clear for landing and created spy objects
// class Airport {
//   constructor(planes) {
//     this.planes = [];
//   }
//
//   land(plane) {
//     this.planes.push(plane);
//   }
//
//   takeoff(plane) {
//     this.planes.pop(plane);
//   }
// }
