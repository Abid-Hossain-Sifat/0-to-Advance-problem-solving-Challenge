// Problem 1: Check leap year. 
const year = 2024;


if ((year % 4 === 0) || (year % 400 === 0 && year % 100 !== 0)){
    console.log ("Yes, its a leap year")
} else {
    console.log ("No, its not a leap year")
}


// Problem 2: Count Digits 

const numbers = "1234565"
let count = 0;
for (let number of numbers){
    count = count + 1;
}
console.log (count)


// Problem 3: palindrome Number 

const nums = 1991;

let string =nums.toString();
let rev = string.split('').reverse().join('');

if (nums == rev){
    console.log ("its a Palindrome Number")
} else {
    console.log ("its not a Palindrome Number")
}


// problem 4: Facttorial number 


let num = 5;

let fact = 1;

for (let i = 1; i <= num; i++){
    fact = fact* i;
}
console.log (fact)


// problem 5: find smalled number from a array


let numbersss = [23, 43, 12, 87, 45, 56, 63];
let min = numbersss[0];
for (let numberss of numbersss){
    if (numberss < min)
        min = numberss;
}
console.log (min)



// Brain check 


let a = 7;
let b = true;

if (a <= 1){
    b = false;
} else {
    for (i = 2; i < Math.sqrt(a); i++){
        if (a % i === 0){
            b = false;
            break;
        }
    }
}

if (b){
    console.log ("Prime Number")
} else {
    console.log ("Not prime Number")
}
