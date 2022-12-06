$(document).ready(function() {
    $('.homeWorldBtn').click(function(){
      var number = $(this).data("bs-btn"); 
      var url = $("#homeWorld-" + number).val();
      $.ajax({
        type: 'get',
        url: url
      }).done(function(response){
        $("#homeName").text('').text(response.name);
        $("#homeRotationPeriod").text('').text(response.rotation_period);
        $("#homeOrbitalPeriod").text('').text(response.orbital_period);
        $("#homeDiameter").text('').text(response.diameter);
        $("#homeClimate").text('').text(response.climate);
        $("#homeGravity").text('').text(response.gravity);
        $("#homeTerrain").text('').text(response.terrain);
        $("#homeSurfaceWater").text('').text(response.surface_water);
        $("#homePopulation").text('').text(response.population);
      })
    });
});