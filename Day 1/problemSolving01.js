// Problem 1: Check the number (7) is Even or Odd 

const num = 7;

if (num % 2 == 0){
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


// Problem 5: check the number is Prime or Not. number is (13)


const number = 13;
let isPrime = true;

if (number <= 1){
    isPrime = false;
} else {
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            isPrime = false;
            break;
        }
    }
}

if (isPrime){
    console.log ("The Number is Prime Number")
} else {
    console.log ("The Number is not a Prime Number")
}


// Bonus Problem : find Prime up to 50 

for (let num = 1; num <= 50; num++){
    let isPrime = true;


    if (num <= 1){
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime){
        console.log ("Prime Number is", num)
    }
}