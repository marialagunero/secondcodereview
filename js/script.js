$(document).ready(function() {

  $("form#Survey").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    $(".outputName").text(name);

    var animal = $("input:radio[name=animal]:checked").val();
    $(".outputAnimal").text(animal);

    var color = $("input:radio[name=color]:checked").val();
    $(".outputColor").text(color);

    var drink = $("input:radio[name=drink]:checked").val();
    $(".outputDrink").text(drink);

    var hobby = $("input:radio[name=hobby]:checked").val();
    $(".outputHobby").text(hobby);

    var flavor = $("input:radio[name=flavor]:checked").val();
    $(".outputFlavor").text(flavor);



    $(".results").show();
  });

});


$("#heightchart").submit(function(event) {
  var userHeight = parseInt($("#height").val());
  event.preventDefault();
  $(".hidden").hide();

  if (userHeight >= 6){
    $("#YouSure").show();

  } else if
  (userHeight <= 5 && userHeight>=4){

    $("#Yikes, #EzMode").show();
  } else (userHeight <= 3)
    $("#EzMode").show();
  });
});
