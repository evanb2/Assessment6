var Pizza = {
    priceCalc: function() {
      return 6 + (this.topping * 1)
               + (this.size * 2)
               + (this.delivery * 3)
    }
};


$(document).ready(function(event) {
  $("form#pizza-cost").submit(function(event) {
    event.preventDefault();

    var topping = perseInt($("#topping").val());
    var size = parseInt($("#size").val());
    var delivery = parseInt($("#delivery").val());

    var newPizza = Object.create(Pizza);

    newPizza.topping = topping;
    newPizza.size = size;
    newPizza.delivery = delivery;

    var pizzaPrice = newPizza.priceCalc();

    $(".result").text("$ " + pizzaPrice + ".00");
  });
});
