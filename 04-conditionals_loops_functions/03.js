function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

/*Exercise 1*/
let i = 0;
while (i < 1000){
    i += 5;
    console.log(i);
}

/*Exercise 2*/
let j = -101;
while (j < 100){
    j++;
    console.log(j);
}

/*Exercise 3*/
let p = 1, q = 0;
while(p <= 4999, q <= 4998){
    p +=2, q += 2;
    console.log(p, q)
}
