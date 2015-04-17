describe("Pizza", function() {
  describe("priceCalc()", function() {
    it("returns the pizza price, base values in each category", function() {
        var testPizza = Object.create(Pizza);
        testPizza.topping = "Cheese";
        testPizza.size = "Personal Pan";
        testPizza.delivery = "Take out";
        expect(testPizza.priceCalc()).to.eql(6);
    });
  });
});


//Formula = 6 + (this.topping(0 1 2) * 1) + (this.size(0 1 2 ) * 2) + (this.delivery(0 1 5) * 3)
