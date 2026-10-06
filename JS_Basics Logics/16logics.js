

//Average of 3 Numbers
function averageThree(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let n3 = parseInt(document.getElementById("n3").value)
    let avg = (n1+n2+n3)/3;
    document.getElementById("avgResult").innerHTML = "Average : " + avg ;
}


//Sum of First N Natural Numbers
function sumNatural(){
    let n = parseInt(document.getElementById("n").value);
    let sum = n*(n + 1) / 2 ;
    document.getElementById("sumResult").innerHTML = "sum : " + sum;
}


//Average of N Natural NUmbers
function averageNatural() {
    let num = parseInt(document.getElementById("num").value);
    let sum = num*(num+1)/2;
    let avg = sum/num;
    document.getElementById("avgresult").innerHTML = "Average  :" + avg ;
}


//Profit Percentage
function profitPercentage(){
 let cp = parseInt(document.getElementById("cp").value);
 let sp = parseInt(document.getElementById("sp").value);
 let profit = sp - cp;
 document.getElementById("profit").value = profit;
 let pp = (profit / cp) * 100;
 document.getElementById("profitResult").innerHTML = "Profit Percentage :" + pp ;
}

//Simple Interest
function simpleInterest(){
    let principal = parseInt(document.getElementById("principal").value);
    let rate = parseInt(document.getElementById("rate").value);
    let time = parseInt(document.getElementById("time").value);
    let SI = (principal*rate*time)/100;
    document.getElementById("interestResult").innerHTML = "SimpleInterest :"+ SI ;
}

//Missing Angle
function missingAngle(){
    let angle1 = parseInt(document.getElementById("angle1").value);
    let angle2 = parseInt(document.getElementById("angle2").value);
    let missing = 180 - angle1 - angle2 ;
    document.getElementById("angleResult").innerHTML = "MissingAngle : " + missing ;
}


//Last Digit of a Number
function lastDigit(){
    let lastDigitInput = parseInt(document.getElementById("lastDigitInput").value);
    let lastDigit = lastDigitInput % 10;
    document.getElementById("lastDigitResult").innerHTML = "LastDigit : " + lastDigit ;
}


//Remove Last Digit
function removeLastDigit(){
    let rld = parseInt(document.getElementById("rld").value);
    let result = rld / 10;
    document.getElementById("removeDigitResult").innerHTML = "LastRemoveDigit : " + result ;
}

//First Digit of 3-Digit Number
function firstDigitThree(){
   let fdt = parseInt(document.getElementById("fdt").value);
   let res = parseInt(fdt / 100) ;
   document.getElementById("threeDigitResult").innerHTML = "First Digit of ThreeDigit : "+ res;
}  


//First Digit of 5-Digit Number
function firstDigitFive(){
   let fdf = parseInt(document.getElementById("fdf").value);
   let res = parseInt(fdf / 10000 );
   document.getElementById("fiveDigitResult").innerHTML = "First Digit of ThreeDigit : "+ res;
}  

//F = (C × 9/5) + 32
//Celsius → Fahrenheit
function celsiusToFahrenheit(){
    let celsius = parseInt(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheitResult").innerHTML = "fahrenheit : "+ fahrenheit;
}

//C = (F × 9/5) + 32
//Fahrenheit  → Celsius
function fahrenheitToCelsius(){
    let fahrenheit = parseInt(document.getElementById("celsius").value);
    let celsius = (fahrenheit - 32) * 9/5;
    document.getElementById("celsiusResult").innerHTML = "celsius : "+ celsius;
}


//Gross Salary
function grossSalary(){
    let bs = parseInt(document.getElementById("bs").value);
    let hra = parseInt(document.getElementById("hra").value);
    let da = parseInt(document.getElementById("da").value);
    let gs = bs + hra + da ;
    document.getElementById("salaryResult").innerHTML = "Gross salary : " + gs;
}


//Swap Using Third Variable
function swapWithThird(){
    let sa = parseInt(document.getElementById("sa").value);
    let sb = parseInt(document.getElementById("sb").value);
    let temp = sa;
    sa = sb;
    sb = temp;
    document.getElementById("str").innerHTML = "Swap Using Third : " + "A=" + sa + " , " + "B=" + sb ;
}

//Swap Without Using Third Variable
function swapWithoutThird(){
    let sa = parseInt(document.getElementById("sa").value);
    let sb = parseInt(document.getElementById("sb").value);
    sa = sa + sb;
    sb = sa - sb;
    sa = sa - sb;
    document.getElementById("swr").innerHTML = "Swap WithoutUsing Third : " + "A=" + sa + " , " + "B=" + sb ;
}