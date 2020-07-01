describe("Test Increment Decrement", function() {

	it("it should be able to increment", function(){

		const incDecrement = IncrementDecrement();

		incDecrement.increment();
		incDecrement.increment();
		incDecrement.increment();
		incDecrement.increment();
		incDecrement.increment();

		assert.equal(5, incDecrement.getTotal());



	});

	it("it should be able to decrement", function(){
		const incDecrement = IncrementDecrement();

		incDecrement.increment();
		incDecrement.increment();
		incDecrement.increment();
		incDecrement.decrement();
		incDecrement.decrement();

		assert.equal(1, incDecrement.getTotal());
	})
	;
	it("it should be able to set increment size", function(){
		const incDecrement = IncrementDecrement();

		incDecrement.setIncrementSize(3)
		incDecrement.increment();
		incDecrement.increment();
		incDecrement.increment();

		assert.equal(9, incDecrement.getTotal());
	});

	it("it should be able to get less than 0", function(){
		const incDecrement = IncrementDecrement();

		incDecrement.decrement();
		incDecrement.decrement();
		incDecrement.decrement();

		assert.equal(0, incDecrement.getTotal());
	});


});