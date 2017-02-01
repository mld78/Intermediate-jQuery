console.log('Connected')

//do this:

var foods = ['burgers', 'fries', 'pasta', 'shrimp', 'sushi']

for (var i = 0; i < foods.length; i++) {
  $('#foods').append('<li>' + foods[i] + '</li>')
}

//or this:

$('#drinks').append("<li> Sprite</li> <li> Coke </li> <li>Diet Coke</li>")

// $('#foods').html("<li> Pizza</li> <li> Pasta</li> <li>French Fries</li>")



$('#addFood').on('click', function(){
  if ($('#foodInput').val() != ''){
  var newFood = $('#foodInput').val()
  $('#foods').append('<li>' + newFood + '</li>')
  $('#foodInput').val('')
}
})

$('#addDrink').on('click', function(){
  if ($('#drinkInput').val() != ''){
  var newFood = $('#drinkInput').val()
  $('#drinks').append('<li>' + newFood + '</li>')
  $('#drinkInput').val('')
}
})

$("#drinkInput").keypress(function(){
    $("#foodInput").css("background-color", "pink");
});
