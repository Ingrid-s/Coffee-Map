$(document).ready(loading);

var $filterCoffee = $("#filterCoff");

function loading(){
$(".ficha-cafeteria").append(coffee.map(print));
$filterCoffee.keyup(filter)
}

function print(coffee) { /*función para pintar en HTML*/

      var name=coffee.name;
      var image=coffee.photo;
      var rating=coffee.rating;
      var price=coffee.priceRating;
      var adress=coffee.vicinity;
      var $coffeeImage=$('<img />');
      var $nameCoffeeShop=$('<h6 />');

        var $newCard =$("<div />");
        $newCard.addClass("row card-panel hoverable ficha-cafeteria");
        $newCard.attr('data-toggle', 'modal');/*cuadro de dialogo del modal*/
        $newCard.attr('data-target','#modal');/*creación del modal*/
        $newCard.attr('data-nombre', name);
        $coffeeImage.addClass('img-responsive photo');
        $coffeeImage.attr('src', image);/*atributo fuente de la imagen*/
        $coffeeImage.attr('alt',name); /*atributo alt de la imagen, texto alterno en caso de que no se visualice*/
        $newCard.text(name);/*agregando texto con el nombre de la caferería*/
        $newCard.append($nameCoffeeShop);
        $newCard.append($coffeeImage); /*agregando texto con el nombre de la caferería*/

        return $newCard; /*retorno de la función que crea la tarjeta con los datos de cada cafetería*/
  }
$("#coffee-modal").on("show.bs.modal", function (event) {
  var div =$(event.relatedTarget); /*la propiedad .relatedTarget detecta el elemento asociado al movimiento del mouse*/
  var coffee = coffee.find(function(coffee){
    return coffee.name === div.coffee("name")
  })
  var modal =$(this);
  modal.find(".name").text(coffe.name);
  modal.find("img-responsive photo").atrr("src", coffee.photo);
  modal.find("vicinity").text(coffee.vicinity);
  modal.find("raiting").text(coffe.raiting);
  modal.find("priceRaiting").text(coffee.priceRating);
  modal.find("type").text(coffee.type);
  modal.find("grain").text(coffee.grain);
})

function filter(){
    var search = $filterCoffee.val().toLowerCase();
    $('.ficha-cafeteria').empty();
    if($filterCoffee.val().trim().length > 0) {
      $('.ficha-cafeteria').append(coffee.filter(function(coffee) {
        var nameAgreement = coffee.name.toLowerCase().indexOf(search) >= 0
        var typeAgreement = coffee.type.join(',').toLowerCase().indexOf(search) >= 0
        var raitingAgreement = coffee.raiting.toLowerCase().indexOf(search) >= 0
        var priceRaitingAgreement = cofee.priceRating.toLowerCase().indexOf(search) >= 0
        var grainAgreement = coffee.grain.toLowerCase().indexOf(search) >= 0
        var vicinityAgreement=coffee.vicinity.toLowerCase().indexOf(search)

        return nameAgreement || typeAgreement  || raitingAgreement || priceRaitingAgreement || grainAgreements || vicinityAgreement
      }).map(print))
      $('.ficha-cafeteria:empty').html('<h5>Sorry! not found, please search again by (raiting, $ or name )</h5>');
  }
  else {
    $('.ficha-cafeteria').append(coffee.map(print));
  }
}


/*pruebas console.log(coffee[1].name);
console.log(coffee[1].rating);
     console.log(coffee);*/
