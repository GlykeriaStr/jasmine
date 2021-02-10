
'use strict';

describe('Airport', function() {
  var airport, plane, weather;

  beforeEach(function() {
     airport = new Airport(weather);
     plane = jasmine.createSpyObj('plane', ['land']);
     weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

describe('under normal conditions',function(){
      beforeEach(function(){
        weather.isStormy.and.returnValue(false);
      });
  it('lets a plane land', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toContain(plane);
  });

  it('lets a plane takeoff', function(){
    airport.clearForTakeoff();
    expect(airport.planes()).not.toContain(plane);
  });
});
});

describe('under stormy conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });

  });


// describe("airport", function() {
//   var airport, plane, planes;
//
//   // let plane: plane;
//
//   beforeEach(function() {
//     airport = new Airport(planes);
//   });
//
//
//   it("can land a plane", function() {
//     airport.land(plane)
//     expect(airport.planes).toContain(plane);
//   });
//
//   it("can take off", function() {
//     airport.land(plane)
//     airport.takeoff(plane)
//     expect(airport.planes.length).toBe(0);
//   });
//
//
//   // it("a land method", function() {
//   //   spyOn(airport, 'land');
//   //   airport.land(plane);
//   //
//   //   expect(airport.land).toHaveBeenCalledWith(plane);
//   // });
// });
