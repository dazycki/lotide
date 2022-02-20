// FUNCTION IMPLEMENTATION COUNT ONLY
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) { //loops through keys within object
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1; //increments counter for property if already there
      } else {
        results[item] = 1; //sets a property with string key if not already there
      }
    }
  }

  return results;
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = countOnly;