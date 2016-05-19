'use strict';

function double_to_one(collection) {
  var result = [];

  collection.forEach(function (element) {
    for (var i = 0; i < element.length; i++) {
      var isExist = isEqual(element[i], result);

      if (isExist) {
        result.push(element[i]);
      }
    }
  });

  return result;
}

function isEqual(eArray, result) {
  var isExist = true;
  result.forEach(function (element) {
    if (eArray === element) {
      isExist = false;
    }
  });

  return isExist;
}

module.exports = double_to_one;
