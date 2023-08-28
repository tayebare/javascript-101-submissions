/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */
let x = 1234;
let y = 23571;
let p = 98768823;
let luckyNumber = 7;
let sumOfAll = x+y+p;
console.log(sumOfAll);
let largestLessOthers = p-(x+y);
console.log(largestLessOthers);
let productOfAll = x*y*p;
console.log(productOfAll);
let division = p/(y-x);
console.log(division);
let xMod7 = x%luckyNumber;
let yMod7 = y%luckyNumber;
let pMod7 = p%luckyNumber;
console.log("The numbers mod 7:", xMod7, yMod7, pMod7);

console.log("Sum of all three:", sumOfAll);
console.log("Largest less the others:", largestLessOthers);
console.log("Product of all three:", productOfAll);
console.log("Largest divided by difference between the other two:", division);
console.log("The numbers modulo 7:", xMod7, yMod7, pMod7);


let result = 0
console.log("Label", result)