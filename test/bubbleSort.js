


function bubbleSort(bubbles){
	let isSorted = true;
	for (let i = 0; i < bubbles.length-1; i++) {
		if (comparison()) break;
	}
	return bubbles;
}

function comparison() {
		for(let j = 0; j < bubbles.length - i -1; j++) {
		if(bubbles[j] > bubbles[j+1]) {
			const current = bubbles[j];
			bubbles[j] = bubbles[j+1];
			bubbles[j+1] = current;
			isSorted = false;
		}
		if (isSorted) return true;
	}

}

function bubbleSort2(bubbles, comparisonFn){
	
	for (let i = 0; i < bubbles.length-1; i++) {
		for(let j = 0; j < bubbles.length - i -1; j++) {
			if(comparisonFn(bubbles[j],bubbles[j+1])) {
				const current = bubbles[j];
				bubbles[j] = bubbles[j+1];
				bubbles[j+1] = current;
			}
		}
	}
	return bubbles;
}
