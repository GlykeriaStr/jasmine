
'use strict';

describe('Airport', function() {
  var airport, plane, weather, plane2;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  describe('#name', function() {
    it('has a name', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(airport.name()).toEqual('Heathrow');
    });
  });

  describe('#capacity', function() {
    it('has a default capacity', function() {
      expect(airport.ShowCapacity()).toEqual(20);
    });

    it('sets capacity when created', function() {
      var airport_2 = new Airport(weather, 100);
      expect(airport_2.ShowCapacity()).toEqual(100);
    });
  });

  describe('under normal conditions',function(){

    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });

    it('prevents landing when airport is full', function() {
      var airport_2 = new Airport(weather, 1);
      airport_2.clearForLanding(plane);
      expect(function(){ airport_2.clearForLanding(plane2); }).toThrowError('Airport is in full capacity')
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
});
