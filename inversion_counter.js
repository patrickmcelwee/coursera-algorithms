var InversionCounter = function() {};

InversionCounter.prototype.count = function(array) {
  var self = this;
  var n = array.length;

  if (n <= 1) {
    return 0;
  }

  return self.count(array.slice(0,     ((n/2) - 1))) +
         self.count(array.slice( (n/2), n-1 ));

};

module.exports = InversionCounter;
