var InversionCounter = function() {};

InversionCounter.prototype.count = function(array) {
  var self = this;
  var n = array.length;

  var firstHalfResults = self.countAndSort(array.slice(0,((n/2) - 1)));
  var secondHalfResults = self.countAndSort(array.slice( (n/2), n-1 ));

  var mergeResults = self.mergeAndCount(firstHalfResults[1],
                                        secondHalfResults[1]);

  var accumulator = (firstHalfResults[0] + secondHalfResults[0] + mergeResults[0]);

  return accumulator
};

InversionCounter.prototype.countAndSort = function(array) {
  var n = array.length;

  if (n <= 1) {
    return [0, [n]];
  }

  var firstHalfResults = self.countAndSort(array.slice(0,((n/2) - 1)));
  var secondHalfResults = self.countAndSort(array.slice( (n/2), n-1 ));
  var mergeResults = self.mergeAndCount(firstHalfResults[1],
                                        secondHalfResults[1]);

  var accumulator = (firstHalfResults[0] + secondHalfResults[0] + mergeResults[0]);

  return [accumulator, mergeResults[1]];
};

InversionCounter.prototype.mergeAndCount = function(sortedArray1, sortedArray2) {
  return [0, [sortedArray1 + sortedArray2]];
};

module.exports = InversionCounter;
