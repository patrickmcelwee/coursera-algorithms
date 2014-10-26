var InversionCounter = require('./inversion_counter.js');

describe("InversionCountery", function() {
  var counter = new InversionCounter();

  it("works for one integer", function() {
    var result = counter.count([1]);
    expect(result).toEqual(0);
  });

  it("works for two sorted integers", function() {
    var result = counter.count([1, 2]);
    expect(result).toEqual(0);
  });

  it("works for two unsorted integers", function() {
    var result = counter.count([2, 1]);
    expect(result).toEqual(1);
  });

})
