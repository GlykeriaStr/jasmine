'use strict';

describe('Plane',function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
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
