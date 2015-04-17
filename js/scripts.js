var Pizza = {
    priceCalc: function() {
      return (6 + (this.topping * 1) + (this.pizzaSize * 2) + (this.delivery * 3)) * this.addPizza
    }
};


$(document).ready(function(event) {
  $("form#pizza-cost").submit(function(event) {
    event.preventDefault();

    var topping = parseInt($("#topping").val());
    var pizzaSize = parseInt($("#size").val());
    var delivery = parseInt($("#delivery").val());
    var addPizza = parseInt($("#addPizza").val());

    var newPizza = Object.create(Pizza);

    newPizza.topping = topping;
    newPizza.pizzaSize = pizzaSize;
    newPizza.delivery = delivery;
    newPizza.addPizza = addPizza;

    var pizzaPrice = newPizza.priceCalc();

    $(".result").text("$ " + pizzaPrice + ".00");
  });
});
