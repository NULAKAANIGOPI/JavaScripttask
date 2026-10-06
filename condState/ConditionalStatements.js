
//1. ==============If====================== 

//1.positive
let n = 10;
if(n===10){
    console.log("Positive Number");  
}

//2.voting Eligibility
let age = 19;
if (age > 18){
    console.log("Eligible for voting");
}

//Divisinle by 5
let n3 = 25;
if(n3 % 5 == 0){
    console.log("Divisible by 5");    
}

//4.student pass
let n4 = 83;
if(n4 >= 35){
    console.log("Student is Passed");
}

//5.Triangle Validity
let a1 = 45;
let a2 = 90;
let a3 = 45;
if((a1+a2+a3)===180){
   console.log("Triangle Form with 180 degree");   
}

//6.Employee bonus
let sal = 40000;
let exp = 5;
if(sal >= 30000 && exp >= 5){
    console.log("Eligible for bonus");
}

// 2. =================IF-ELSE STATEMENTS================== 

//7.Even or odd
let n7 = 87;
if(n7 % 2 == 0){
    console.log("Even Number");    
}
else{
    console.log("Odd Number");  
}

//8.Positive or negative
let n8 = 44;
if (n8 >= 0){
    console.log("Positive");
}
else{
    console.log("Negative");   
}

//9 Driving Eligibility
let age9 = 30;
if (age9 >= 18){
    console.log("Eligibile for Driving");    
}else{
    console.log("Not Eligible for Driving");    
}


//10 Greatest of two numbers
let g1 = 24;
let g2 = 67;
if(g1 > g2){
    console.log("Greatest :"+ g1);    
}
else{
    console.log("Greatest :"+ g2);    
}

// 11. Login Validation
let uname = "Admin"
let password = "admin@1234"
if (uname === "Admin" && password === "admin@1234"){
    console.log("Login Successful");    
}
else{
    console.log("Enter valid password");    
}

// 12. Loan Eligibility
let sal12 = 70000;
let age12 = 33;
if (sal12 >= 30000 && age12 >= 21) {
    console.log("Eligible for Loan");
} else {
    console.log("Not Eligible for Loan");
}



// 3.====================== IF-ELSE-IF =======================

// 13. Grade Calculator
let marks = 74;
if (marks >= 90) {
    console.log("Grade A");
}
 else if (marks >= 75) {
    console.log("Grade B");
}
 else if (marks >= 60) {
    console.log("Grade C");
} 
else if (marks >= 40) {
    console.log("Grade D");
}
 else {
    console.log("Fail");
}


// 14. Positive / Negative / Zero
let pnz = 5;
if (pnz > 0) {
    console.log("Positive");
} else if (pnz < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}



// 15. Largest of Three Numbers
let aa = 23;
let bb = 41;
let cc = 8;

if (aa >= bb && aa >= cc) {
    console.log(aa + " is Largest");
} 
else if (bb >= aa && bb >= cc) {
    console.log(bb + " is Largest");
} 
else {
    console.log(cc + " is Largest");
}


// 16. Electricity Bill
let units = 167;
let bill;

if (units <= 100) {
    bill = units * 2;
  console.log("Electricity Bill below 100 units: " + bill);
} 
else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 3);
    console.log("Electricity Bill below 200 units: " + bill);
} 
else if (units <= 300) {
    bill = (100 * 2) +(100 * 3) +((units - 200) * 5);
    console.log("Electricity Bill below 300 units: " + bill);
} 
else {
    bill = (100 * 2) +(100 * 3) +(100 * 5) +((units - 300) * 7);
    console.log("Electricity above 300 units: " + bill);
}



// 17. Income Tax
let ict = 200000;
let tax;

if (ict <= 250000) {
    tax = 0;
} else if (ict <= 500000) {
    tax = ict * 0.05;
} else if (ict <= 1000000) {
    tax = ict * 0.20;
} else {
    tax = ict * 0.30;
}
console.log("Tax = ₹" + tax);




// 18. ATM Withdrawal
let balance = 10000;
let amount = 3000;

if (amount <= 0) {
    console.log("Invalid Amount");
} else if (amount % 100 != 0) {
    console.log("Amount must be in multiples of 100");
} else if (amount > balance) {
    console.log("Insufficient Balance");
} else {
    balance = balance - amount;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance = ₹" + balance);
}