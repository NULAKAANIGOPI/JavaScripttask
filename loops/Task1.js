
// ================= FOR LOOP =================

// 1. Print 1 to N
function forOne() {
    let n = parseInt(document.getElementById("for1").value);
    let result = "";

    for (let i = 1; i <= n; i++) {
        result = result + i + " ";
    }

    document.getElementById("for1Result").value = result;
}


// 2. Print N to 1
function forTwo() {
    let n = parseInt(document.getElementById("for2").value);
    let result = "";

    for (let i = n; i >= 1; i--) {
        result = result + i + " ";
    }

    document.getElementById("for2Result").value = result;
}


// 3. Even Numbers
function forThree() {
    let n = parseInt(document.getElementById("for3").value);
    let result = "";

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            result = result + i + " ";
        }
    }

    document.getElementById("for3Result").value = result;
}


// 4. Odd Numbers
function forFour() {
    let n = parseInt(document.getElementById("for4").value);
    let result = "";

    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            result = result + i + " ";
        }
    }

    document.getElementById("for4Result").value = result;
}


// 5. Sum 1 to N
function forFive() {
    let n = parseInt(document.getElementById("for5").value);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    document.getElementById("for5Result").value = "Sum = " + sum;
}


// 6. Factorial
function forSix() {
    let n = parseInt(document.getElementById("for6").value);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    document.getElementById("for6Result").value = "Factorial = " + fact;
}


// 7. Multiplication Table
function forSeven() {
    let n = parseInt(document.getElementById("for7").value);
    let result = "";

    for (let i = 1; i <= 10; i++) {
       result = result + n + " x " + i + " = " + (n * i) ;
    }
    document.getElementById("for7Result").value = result;
}


// 8. Count Numbers Divisible by 5
function forEight() {
    let n = parseInt(document.getElementById("for8").value);
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            count++;
        }
    }
    document.getElementById("for8Result").value ="Count = " + count;
}


// 9. Sum of Even Numbers
function forNine() {
    let n = parseInt(document.getElementById("for9").value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    document.getElementById("for9Result").value =
        "Even Sum = " + sum;
}


// 10. Sum of Odd Numbers
function forTen() {
    let n = parseInt(document.getElementById("for10").value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    document.getElementById("for10Result").value =
        "Odd Sum = " + sum;
}


// ================= WHILE LOOP =================

// 11. Reverse Number
function whileEleven() {
    let n = parseInt(document.getElementById("while11").value);
    let reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }
    document.getElementById("while11Result").value =
        "Reverse = " + reverse;
}


// 12. Sum of Digits
function whileTwelve() {
    let n = parseInt(document.getElementById("while12").value);
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = parseInt(n / 10);
    }

    document.getElementById("while12Result").value =
        "Sum = " + sum;
}


// 13. Count Digits
function whileThirteen() {
    let n = parseInt(document.getElementById("while13").value);
    let count = 0;

    if (n == 0) {
        count = 1;
    }

    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }

    document.getElementById("while13Result").value =
        "Digits = " + count;
}


// 14. Product of Digits
function whileFourteen() {
    let n = parseInt(document.getElementById("while14").value);
    let product = 1;

    while (n > 0) {
        let digit = n % 10;
        product = product * digit;
        n = parseInt(n / 10);
    }

    document.getElementById("while14Result").value =
        "Product = " + product;
}


// 15. Palindrome
function whileFifteen() {
    let n = parseInt(document.getElementById("while15").value);

    let original = n;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }

    if (original == reverse) {
        document.getElementById("while15Result").value =
            "Palindrome";
    } else {
        document.getElementById("while15Result").value =
            "Not Palindrome";
    }
}


// 16. First Digit
function whileSixteen() {
    let n = parseInt(document.getElementById("while16").value);

    while (n >= 10) {
        n = parseInt(n / 10);
    }

    document.getElementById("while16Result").value =
        "First Digit = " + n;
}


// 17. Largest Digit
function whileSeventeen() {
    let n = parseInt(document.getElementById("while17").value);

    let largest = 0;

    while (n > 0) {
        let digit = n % 10;

        if (digit > largest) {
            largest = digit;
        }

        n = parseInt(n / 10);
    }

    document.getElementById("while17Result").value =
        "Largest Digit = " + largest;
}


// 18. Smallest Digit
function whileEighteen() {
    let n = parseInt(document.getElementById("while18").value);

    let smallest = 9;

    while (n > 0) {
        let digit = n % 10;

        if (digit < smallest) {
            smallest = digit;
        }

        n = parseInt(n / 10);
    }

    document.getElementById("while18Result").value =
        "Smallest Digit = " + smallest;
}


// 19. Digital Root
function whileNineteen() {
    let n = parseInt(document.getElementById("while19").value);

    while (n >= 10) {

        let sum = 0;

        while (n > 0) {
            let digit = n % 10;
            sum = sum + digit;
            n = parseInt(n / 10);
        }

        n = sum;
    }

    document.getElementById("while19Result").value =
        "Digital Root = " + n;
}


// 20. Count Even and Odd Digits
function whileTwenty() {
    let n = parseInt(document.getElementById("while20").value);

    let even = 0;
    let odd = 0;

    while (n > 0) {

        let digit = n % 10;

        if (digit % 2 == 0) {
            even++;
        } else {
            odd++;
        }

        n = parseInt(n / 10);
    }

    document.getElementById("while20Result").value =
        "Even = " + even + " | Odd = " + odd;
}


// ================= DO WHILE LOOP =================

// 21. Print 1 to N
function doTwentyOne() {
    let n = parseInt(document.getElementById("do21").value);

    let i = 1;
    let result = "";

    do {
        result = result + i + " ";
        i++;
    } while (i <= n);

    document.getElementById("do21Result").value = result;
}


// 22. Print N to 1
function doTwentyTwo() {
    let n = parseInt(document.getElementById("do22").value);

    let result = "";

    do {
        result = result + n + " ";
        n--;
    } while (n >= 1);

    document.getElementById("do22Result").value = result;
}


// 23. Even Numbers
function doTwentyThree() {
    let n = parseInt(document.getElementById("do23").value);

    let i = 1;
    let result = "";

    do {
        if (i % 2 == 0) {
            result = result + i + " ";
        }

        i++;
    } while (i <= n);

    document.getElementById("do23Result").value = result;
}


// 24. Odd Numbers
function doTwentyFour() {
    let n = parseInt(document.getElementById("do24").value);

    let i = 1;
    let result = "";

    do {
        if (i % 2 != 0) {
            result = result + i + " ";
        }

        i++;
    } while (i <= n);

    document.getElementById("do24Result").value = result;
}


// 25. Sum 1 to N
function doTwentyFive() {
    let n = parseInt(document.getElementById("do25").value);

    let i = 1;
    let sum = 0;

    do {
        sum = sum + i;
        i++;
    } while (i <= n);

    document.getElementById("do25Result").value =
        "Sum = " + sum;
}


// 26. Factorial
function doTwentySix() {
    let n = parseInt(document.getElementById("do26").value);

    let i = 1;
    let fact = 1;

    do {
        fact = fact * i;
        i++;
    } while (i <= n);

    document.getElementById("do26Result").value =
        "Factorial = " + fact;
}


// 27. Multiplication Table
function doTwentySeven() {
    let n = parseInt(document.getElementById("do27").value);

    let i = 1;
    let result = "";

    do {
        result = result +
            n + " x " + i + " = " + (n * i) + " | ";

        i++;
    } while (i <= 10);

    document.getElementById("do27Result").value = result;
}


// 28. Reverse Number
function doTwentyEight() {
    let n = parseInt(document.getElementById("do28").value);

    let reverse = 0;

    do {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);

    } while (n > 0);

    document.getElementById("do28Result").value ="Reverse = " + reverse;
}


// 29. Sum of Digits
function doTwentyNine() {
    let n = parseInt(document.getElementById("do29").value);

    let sum = 0;

    do {
        let digit = n % 10;

        sum = sum + digit;

        n = parseInt(n / 10);

    } while (n > 0);

    document.getElementById("do29Result").value ="Sum = " + sum;
}


// 30. Palindrome
function doThirty() {
    let n = parseInt(document.getElementById("do30").value);

    let original = n;
    let reverse = 0;

    do {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);

    } while (n > 0);

    if (original == reverse) {
        document.getElementById("do30Result").value ="Palindrome";
    } else {
        document.getElementById("do30Result").value ="Not Palindrome";
    }
}

