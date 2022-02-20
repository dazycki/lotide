// FUNCTION IMPLEMENTATION FOR MIDDLE 
const middle = function (arr) { //Takes in an array
  let newArr = []
  if (arr.length <= 2) { //Returns an empty array for arrays with 1 or 2 elements
    return newArr;
  } else if (arr.length % 2 === 1) {
    newArr.push(arr[Math.floor((arr.length) / 2)]); //Returns 1 value if array has odd number of elements
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[Math.floor((arr.length - 1) / 2)]); 
    newArr.push(arr[Math.floor((arr.length) / 2)]); //Returns 2 values if array has even number of elements
  }
  return newArr;
}

//EXPORT FUNCTION FOR USE IN OTHER FILES
module.exports = middle;