

let n1 = 3;
switch (n1) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid Day");
}





let color = "red";
switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Color");
}





let op = "*";
let n2 = 10;
let n3 = 5;

switch (op) {
    case "+":
        console.log(`Sum = ${n2 + n3}`);
        break;

    case "-":
        console.log(`Sub = ${n2 - n3}`);
        break;

    case "*":
        console.log(`Mul = ${n2 * n3}`);
        break;

    case "/":
        console.log(`Div = ${n2 / n3}`);
        break;

    default:
        console.log("Invalid Operator");
}




let n4 = 2;

switch (n4) {
    case 1:
        console.log("Case 1 Executed");

    case 2:
        console.log("Case 2 Executed");

    case 3:
        console.log("Case 3 Executed");

    case 4:
        console.log("Case 4 Executed");

    default:
        console.log("Default Block Executed");
}




let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Very Good");
        break;

    case "C":
        console.log("Good");
        break;

    case "D":
        console.log("Pass");
        break;

    case "F":
        console.log("Fail");
        break;

    default:
        console.log("Invalid Grade");
}



// Example 1: Break in for loop
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}


// Example 2: Break when number is 7
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 7) {
        break;
    }
}


// Example 3: Break with while loop
let n = 1;
while (n <= 10) {
    if (n == 6) {
        break;
    }
    console.log(n);
    n++;
}



// Example 1: Skip number 5
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}


// Example 2: Print only odd numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}


// Example 3: Skip multiples of 3
for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}
