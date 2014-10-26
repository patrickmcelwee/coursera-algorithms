var InversionCounter = function() {};

InversionCounter.prototype.count = function(array) {
  var self = this;

  results = self.countAndSort(array);
  return results[0];
};

InversionCounter.prototype.countAndSort = function(array) {
  var self = this;
  var n = array.length;

  if (n <= 1) {
    return [0, array];
  }

  var firstHalfResults = self.countAndSort(array.slice(0,((n/2))));
  var secondHalfResults = self.countAndSort(array.slice( (n/2) , n));
  var mergeResults = self.mergeAndCount(firstHalfResults[1],
                                        secondHalfResults[1]);

  var accumulator = (firstHalfResults[0] + secondHalfResults[0] + mergeResults[0]);

  return [accumulator, mergeResults[1]];
};

InversionCounter.prototype.mergeAndCount = function(sortedArray1, sortedArray2) {
  console.log(sortedArray1);
  console.log(sortedArray2);
  var merged = [];
  if (sortedArray1[0] < sortedArray2[0]) {
    merged << sortedArray1[0];

    merged
    return([0, merged + sortedArray2])
  } else {
    merged << sortedArray2[0];

    merged << sortedArray1[0];
    return([1, merged])
  };
};

module.exports = InversionCounter;
