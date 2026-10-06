// 1. WITHOUT INPUT AND WITHOUT RETURN

// LargestDigit
function largestDigit() {
    let num = 58342;
    let largest = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit > largest) {
            largest = digit;
        }
        num =  parseInt(num / 10) ;
    }
    console.log("Largest digit = " + largest);
}
largestDigit();

//Check Prime Number
function primeNumber() {
    let n = 17;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log(n + " is a Prime Number");
    }
    else {
        console.log(n + " is Not a Prime Number");
    }
}
primeNumber();

//Check Palindrome Number
function checkpalin() {
    let n = 121;
    let original = n;
    let reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }
    if (original === reverse) {
        console.log(original + " is a Palindrome Number");
    }
    else {
        console.log(original + " is Not a Palindrome Number");
    }
}
checkpalin();

// 2. WITH INPUT AND WITHOUT RETURN

// SUM OF DIGITS
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }
    console.log("Sum of digits = " + sum);
}
sumOfDigits(12345);

//AVERAGE OF N NATURAL NUMBERS
function averageNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    let average = sum / n;
    console.log("Average = " + average);
}
averageNaturalNumbers(5);

//SUM OF N NATURAL NUMBERS
function sumNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    console.log("Sum of natural numbers = " + sum);
}
sumNaturalNumbers(5);





//3. WITHOUT INPUT AND WITH RETURN

//PROFIT PERCENTAGE
function profitPercentage() {
    let cp = 1000;
    let sp = 1200;
    let profit = sp - cp;
    let profitPercentage = (profit / cp) * 100;
    return profitPercentage;
}
console.log("Profit Percentage = " + profitPercentage() + "%");


// SIMPLE INTEREST
function simpleInterest() {
    let p = 10000;
    let r = 5;
    let t = 2;
    let si = (p * r * t) / 100;
    return si;
}
console.log("Simple Interest = " + simpleInterest());


//MISSING ANGLE OF TRIANGLE
function missingAngle() {
    let angle1 = 60;
    let angle2 = 50;
    let angle3 = 180 - angle1 - angle2;
     return angle3; 
} 
console.log("Missing Angle = " + missingAngle() + "°");

// 4. WITH INPUT AND WITH RETURN

// Add Two Numbers
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
console.log(add(50, 30));


 // Largest of Three Numbers
function largest(a, b, c) {
    if (a > b && a > c) {
        return a + " is largest";
    }
    else if (b > a && b > c) {
        return b + " is largest";
    }
    else {
        return c + " is largest";
    }
}
console.log(largest(10, 20, 30));
console.log(largest(50, 30, 20));

// Even or Odd
function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(15));



