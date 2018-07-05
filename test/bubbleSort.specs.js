const expect = require('chai').expect;
const sinon = require('sinon');
const EventEmitter = require('events').EventEmitter;

describe('bubble sort', ()=> {
	it('it sorts', ()=> {
		expect(bubbleSort([2,1])).to.eql([1,2]);
		expect(bubbleSort([3,7,49,60,2,0,-3])).to.eql([-3,0,2,3,7,49,60]);
		expect(bubbleSort([10,9,8,7,6,5,4,3,2,1])).to.eql([1,2,3,4,5,6,7,8,9,10]);

	});
	it('pushes highest value to the end', ()=> {
		expect(bubbleSort([3,7,49,60,2,0,-3])[6]).to.eql(60);

	});
	it('it sorts as per comparison function provided', ()=> {
		expect(bubbleSort2([2,1], (first, second) => { return first > second; })).to.eql([1,2]);
		expect(bubbleSort2([3,7,49,60,2,0,-3], (first, second) => { return first < second; })).to.eql([60, 49, 7, 3, 2, 0, -3]);
		//expect(bubbleSort2([10,9,8,7,6,5,4,3,2,1])).to.eql([1,2,3,4,5,6,7,8,9,10]);

	});

	it('calls comparison once', () => {
	  const spy = sinon.spy();
	  bubbleSort([1,2,3], spy);
	  expect(spy.callCount).to.equal.(1);
	});
});



module.export = bubbleSort