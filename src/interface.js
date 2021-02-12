$(document).ready(function() {
  var airport = new Airport();
  $('#airport').text(airport.name());
  var plane = new Plane();

  $('#plane-land').click(function() {
    if(airport.ShowWeather() === 'stormy'){
      alert("Too stormy to land");
    }else{
      plane.land(airport);
      $('#planes').text(airport.planes().length);
    }
  })

  $('#plane-takeoff').click(function() {
    if(airport.ShowWeather() === 'stormy'){
      alert("Too stormy to take off");
    }else{
      plane.takeoff(airport);
      $('#planes').text(airport.planes().length);
    }
  })
});
