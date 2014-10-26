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

  it("works for four sorted integers", function() {
    var result = counter.count([1, 2, 3, 4]);
    expect(result).toEqual(0);
  });

  it("works for four integers with one inversion", function() {
    var result = counter.count([1, 3, 2, 4]);
    expect(result).toEqual(1);

    var result2 = counter.count([2, 1, 3, 4]);
    expect(result2).toEqual(1);

    var result3 = counter.count([1, 2, 4, 3]);
    expect(result3).toEqual(1);
  });

})
