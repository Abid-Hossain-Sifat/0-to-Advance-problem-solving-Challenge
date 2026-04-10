// Problem 1: Check the number (7) is Even or Odd 

const num = 7;

if (num / 2 == 0){
    console.log ("The Number is Even")
} else {
    console.log ("The Number is Odd")
}


// Problem 2: Find the Largest Number 

const a = 10;
const b = 25;
const c = 15;

if ((a > b) && (a > c)){
    console.log ("The largest number is a:", a)
} else if ((b > c) && (b > a)){
    console.log ("The largest number is b:", b)
} else {
    console.log ("The largest number is c:", c)
}



// Problem 3: Sum of Digits (1234) 

let nums = "1234"
let total = 0;
for (let num of nums){
    console.log (num);
    total = total + Number(num);
    console.log (total)
    
}


// Problem 4: Temperature check 

let temperature = 28;

if (temperature >= 30){
    console.log ("Hot");
} else if ((temperature >=  20) && (temperature <= 29)){
    console.log ("Warm")
} else {
    console.log ("Cool")
}


Problem 5: