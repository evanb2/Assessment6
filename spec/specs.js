describe("Pizza", function() {
  describe("priceCalc()", function() {
    it("returns the pizza price: base values in each category", function() {
        var testPizza = Object.create(Pizza);
        testPizza.topping = 0;
        testPizza.pizzaSize = 0;
        testPizza.delivery = 0;
        expect(testPizza.priceCalc()).to.eql(6);
    });
  });

  describe("priceCalc()", function() {
    it("returns the pizza price: topping = Pepperoni, size = Personal Pan, delivery = Take out", function() {
        var testPizza = Object.create(Pizza);
        testPizza.topping = 1;
        testPizza.pizzaSize = 0;
        testPizza.delivery = 0;
        expect(testPizza.priceCalc()).to.eql(7);
    });
  });

  describe("priceCalc()", function() {
    it("returns the pizza price: topping = Sausage, size = Personal Pan, delivery = Take out", function() {
        var testPizza = Object.create(Pizza);
        testPizza.topping = 2;
        testPizza.pizzaSize = 0;
        testPizza.delivery = 0;
        expect(testPizza.priceCalc()).to.eql(8);
    });
  });

  describe("priceCalc()", function() {
    it("returns the pizza price: topping = Sausage, size = 12, delivery = Take out", function() {
        var testPizza = Object.create(Pizza);
        testPizza.topping = 2;
        testPizza.pizzaSize = 1;
        testPizza.delivery = 0;
        expect(testPizza.priceCalc()).to.eql(10);
    });
  });

  describe("priceCalc()", function() {
    it("returns the pizza price: topping = Sausage, size = 16, delivery = Take out", function() {
        var testPizza = Object.create(Pizza);
        testPizza.topping = 2;
        testPizza.pizzaSize = 2;
        testPizza.delivery = 0;
        expect(testPizza.priceCalc()).to.eql(12);
    });
  });

  describe("priceCalc()", function() {
    it("returns the pizza price: topping = Sausage, size = 16, delivery = Delivery", function() {
        var testPizza = Object.create(Pizza);
        testPizza.topping = 2;
        testPizza.pizzaSize = 2;
        testPizza.delivery = 1;
        expect(testPizza.priceCalc()).to.eql(15);
    });
  });

  describe("priceCalc()", function() {
    it("returns the pizza price: topping = Sausage, size = 16, delivery = Ship", function() {
        var testPizza = Object.create(Pizza);
        testPizza.topping = 2;
        testPizza.pizzaSize = 2;
        testPizza.delivery = 5;
        expect(testPizza.priceCalc()).to.eql(27);
    });
  });
});


//Formula = 6 + (this.topping(0 1 2) * 1) + (this.size(0 1 2 ) * 2) + (this.delivery(0 1 5) * 3)
