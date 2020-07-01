const  incrementBtn = document.querySelector(".increment");
const  decrementBtn = document.querySelector(".decrement");
const  totalElem = document.querySelector(".total");

const incrementDecrement = IncrementDecrement();

incrementBtn.addEventListener("click", function() {
	
	incrementDecrement.increment();
	totalElem.innerHTML = incrementDecrement.getTotal();

});

decrementBtn.addEventListener("click", function() {

	incrementDecrement.decrement();
	totalElem.innerHTML = incrementDecrement.getTotal();

});