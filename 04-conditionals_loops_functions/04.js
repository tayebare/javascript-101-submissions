/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:

/* Kelvin to Celcius*/
let degK = null;
function KtoC (degK){
    let degC = degK - 273.15;
    return degC;
}

/*Celcius to Kelvin*/
let CtoK = function(degC){
    degK = degC + 273.15;
    return degK;
}

/*Fahrenheit to Kelvin*/
let FtoK = function(degF){
degK = (5/9)*(degF - 32) + 273.15;
return degK;
}

/*Kelvin to Fahrenheit*/
let KtoF = function(degK){
    degF = (9/5) * (degK - 273.15) + 32;
    return degF;
}

/*Pythagoras*/
let pythagoras = function (x, y){
    let hypotenuse = Math.sqrt(x**2 + y**2);
    return hypotenuse;
}

/*Inches to cm*/
let inchesLength = null;
let inchToCm = function(inchesLength){
let cmLength = inchesLength * 2.54;
return cmLength;
}

/*cm to inches*/
let CmToInch = function(cmLength){
    inchesLength = cmLength / 2.54;
    return inchesLength;
}

/*miles to km*/
let miles = null;
let MToKm = function(miles){
    let km = miles * 1.6;
    return km;
}

/*km to miles*/
let KmToM = function(km){
    miles = km/1.6;
    return miles;
}










// Do not modify anything below this line

console.log(KtoC(272));
console.log(CtoK(0));
console.log(FtoK(30));
console.log(KtoF(100));

console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log(MToKm(100));
console.log(KmToM(25));

console.log(inchToCm(10));
console.log(CmToInch(425));