const expect = require('chai').expect;
const mergeSort = require("../mergeSort.js");

describe('merge sort', () {
	it('exists', () => {
	  expect('mergeSort').to.be.ok;
	});
	it('sorts', () => {
		expect(mergeSort([2,1]).to.eql([1,2]));
	})
});