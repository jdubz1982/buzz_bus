$(document).ready(function() {
  //function that calls bus json
  $("form#stop_form").on('click', "#select_location",  function(e){
    e.preventDefault();
    stopId = $("#location_lable").val();
    fetchLocations(userRoute);
  })
});

function locationCallBack(response_json){
  var allLocations = parseStops(response_json)
  var routeID = userRoute;
  var locationsByRoute = [];
  for(var i=0; i < allLocations.length; i++){
    if (allLocations[i].routeID === routeID){
      locationsByRoute.push(allLocations[i])
    }
  }
  var data = JSON.stringify(locationsByRoute);
  $.ajax({
    url:"/locations",
    method: "POST",
    data: {data}
  }).done(function(response){
    $("#stop_form").html("");
    $("#stop_form").append(response)
  });
}

function fetchLocations(userRoute){
  debugger
  $.ajax({
    url: "/locations",
    method: "GET"
    data: userRoute,
    success: locationCallBack})
}
// function parseLocation(response) {
//   var allBuses = [];
//   var busNum = response_json.entity.length;
//   for(var i = 0; i < busNum; i++ ) {
//     var label = response_json.entity[i].vehicle.vehicle.label
//     var longitude = response_json.entity[i].vehicle.position.longitude;
//     var latitude = response_json.entity[i].vehicle.position.latitude;
//     var bearing = response_json.entity[i].vehicle.position.bearing;
//     var routeId = response_json.entity[i].vehicle.trip.route_id
//     var newBus = new Bus(label, longitude, latitude, bearing, routeId)
//       allBuses.push(newBus);
//   }
//   return allBuses;
// }

