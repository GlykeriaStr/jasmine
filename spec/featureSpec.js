'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    weather = new Weather();
  });

  describe('under normal weather condintions', function() {

    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can takeoff and confirm they have left', function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('Under stormy conditions', function() {
    it('does not let planes land', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes).not.toContain(plane);
    });

    it('does not let planes take off', function() {
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff(); }).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });
  });
});


  // describe('under stormy conditions', function(){
  //
  //   it('blocks takeoff when weather is stormy', function(){
  //     spyOn(Math,'random').and.returnValue(0)
  //     plane.land(airport)
  //     spyOn(airport._weather,'isStormy').and.returnValue(true);
  //     expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
  //     expect(airport.planes()).toContain(plane);
  //   });
  //
  //   it('blocks landing when weather is stormy', function(){
  //     spyOn(Math,'random').and.returnValue(1);
  //     expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
  //     expect(airport.planes()).toEqual([]);
  //   });
  //
  // })

  // it('prevent landing when weather is stormy', function(){
  //
  //   expect(plane.land(airport)).not.toContain()
  // })
