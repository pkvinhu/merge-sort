function mergeSort(arr) {
  if (arr.length <= 1) {
  	return arr;
  }
  const middle = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  while (left.length && right.length) {
  	let results;
  	if(left[0] < right[0]) {
  		results.push(left.shift());
  	}
  	else {
  		results.push(right.shift());
  	}
  }
  if(left.length) {
  	results = results.concat(left);
  }
  if(right.length) {
  	results = results.concat(right);
  }
  return results;
}




module.export = mergeSort;