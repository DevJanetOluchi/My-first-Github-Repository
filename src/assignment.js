// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, 
 * 
 //* @param {Array} arrayOfNumbers the array of numbers to sum
 //* @returns number the sum of the numbers
 */
const updateBlock =(value) =>{
};

const numbers = [
    1, 5, 10, 20, 30, 40, 50, 60,
];

//function sumOfNumbers(arrayOfNumbers) {
  //  return arrayOfNumbers.length;
//}
const sum = [10, 20, 30].reduce(add, 0); // with initial value to avoid when the array is empty

function add(accumulator, a) {
  return accumulator + a;
}

console.log(sum); 
// assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, 
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * //@returns number the count of even numbers
 */
//function countEvenNumbers(arrayOfNumbers) {
    //return arrayOfNumbers.length;
//}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter(number => {
  return number % 2 === 0;
});

console.log(even);
// assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

