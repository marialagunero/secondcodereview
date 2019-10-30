$(document).ready(function() {

  $("form#Survey").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    $(".outputName").text(name);

    // var animal = $("input:radio[name=animal]:checked").val();
    // $(".outputAnimal").text(animal);
    //
    // var color = $("input:radio[name=color]:checked").val();
    // $(".outputColor").text(color);
    //
    // var drink = $("input:radio[name=drink]:checked").val();
    // $(".outputDrink").text(drink);
    //
    // var hobby = $("input:radio[name=hobby]:checked").val();
    // $(".outputHobby").text(hobby);
    //
    // var flavor = $("input:radio[name=flavor]:checked").val();
    // $(".outputFlavor").text(flavor);

    var animal = $("#animal").val();
    var color = $("#color)").val();
    var drink = $("#drink").val();
    var hobby = $("#hobby").val();
    var flavor =$("#flavor").val();

    if (animal === "dog") {
      $("#ruby").show();
      return
    }
    if (color === "blue") {
      $("#javascript").show();
      return
    }
    if (drink === "beer") {
      $("#python").show();
      return
    };




    // $(".results").show();
  });

});
