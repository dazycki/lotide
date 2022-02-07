// FUNCTION IMPLEMENTATION ASSERT EQUAL
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION FIND KEY BY VALUE
const findKeyByValue = function (object, value) {
  let objKeys = Object.keys(object);
  for (const key of objKeys) {
    if (object[key] === value) {
      return key;
    }
  }
}

//TEST CASES
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const spicyLevel = {
  chili: "mild",
  habenero: "medium",
  reaper: "hot"
};

assertEqual(findKeyByValue(spicyLevel, "mild"), "chili");
assertEqual(findKeyByValue(spicyLevel, "medium"), "habenero");