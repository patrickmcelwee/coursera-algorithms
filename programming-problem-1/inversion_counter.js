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

  var accumulator = firstHalfResults[0] + secondHalfResults[0] + mergeResults[0];

  return [accumulator, mergeResults[1]];
};

InversionCounter.prototype.mergeAndCount = function(sortedArray1, sortedArray2) {
  var n = sortedArray1.length;
  var merged = [];
  var acc = 0;
  var i = 0;
  var j = 0;

  while ((i < n) && (j < n)) {
    if (sortedArray1[i] < sortedArray2[j]) {
      merged.push(sortedArray1[i]);
      i = i + 1;
    } else {
      merged.push(sortedArray2[j]);
      j = j + 1;
      acc = acc + n - i;
    };
  };

  if (i == n) {
    while (j < n) {
      merged.push(sortedArray2[j]);
      j = j + 1;
    }
  } else {
    while (i < n) {
      merged.push(sortedArray1[i]);
      i = i + 1;
    }
  };

  return([acc, merged]);
};

module.exports = InversionCounter;
