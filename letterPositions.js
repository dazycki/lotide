// FUNCTION IMPLEMENTATION FOR LETTER POSITIONS
const letterPositions = function (sentence) { //Takes in a string
  const myArray = sentence.split(""); //Makes an array of letters based on string
  const results = {}; //Intialize object to store letter position count
  for (const [index, value] of myArray.entries()) { //Loops through object
    if (value !== " ") { //Skips spaces
      if (results[value]) {
        results[value].push(index); //Pushes letter position to array within object
      } else {
        results[value] = [index]; //Starts new array within object
      }
    }
  }
  return results; //Returns object with arrays as properties
};

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = letterPositions;