'use strict';

describe('Plane', function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
<<<<<<< HEAD
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeoff']);
=======
>>>>>>> parent of 3a1d9fb... clear for landing and created spy objects
  });

  it('can land at an airport', function(){
    expect(plane.land).not.toBeUndefined()
  });
<<<<<<< HEAD

  it('lands a plane at an aiport', function() {
    plane.land(airport)
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('a plane takes off from airport', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.clearForTakeoff).toHaveBeenCalledWith();
  });
=======
>>>>>>> parent of 3a1d9fb... clear for landing and created spy objects
});


// describe("Plane", function(){
//   var plane;
//
//   it("working method returns true", function(){
//     plane = new Plane();
//     expect(plane.working()).toBe(true);
//   })
//
// })
