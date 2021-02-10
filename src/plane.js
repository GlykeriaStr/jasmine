<<<<<<< HEAD
'use strict' ;

class Plane {
  constructor() {
    this._location;
  }
  land(airport) {
    airport.clearForLanding(this)
    this._location = airport;
  };

  takeoff() {
    this._location.clearForTakeoff()
  };
};

=======
>>>>>>> parent of 3a1d9fb... clear for landing and created spy objects
// class Plane {
//   working() {
//     return true;
//   }
// }
