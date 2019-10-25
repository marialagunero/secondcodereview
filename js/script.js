$(document).ready(function() {
  $("form#Survey").submit(function() {
    event.preventDefault();
    var animal = parseInt($("#input1").val());
    var color = parseInt($("#input2").val());
    var drink = parseInt($("#input3").val());
    var hobby = parseInt($("#input4").val());
    var flavor = parseInt($("#input5").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });
});
