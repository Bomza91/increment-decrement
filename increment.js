function IncrementDecrement() {

	let total = 0; 
	let incrementSize = 1;

	function increment() {
		total += incrementSize;
	}

	function decrement() {
		if (total > 0) {
			total -= incrementSize;
		}
	}

	function  getTotal() {
		return total;
	}

	function setIncrementSize(val) {
		incrementSize = val;
	}

	return {
		increment,
		decrement,
		getTotal,
		setIncrementSize
	}



}