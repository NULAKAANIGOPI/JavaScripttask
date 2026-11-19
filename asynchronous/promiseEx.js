// let myprom = new Promise((resolve, reject) => {
//     let age = 22;

//     if (age >= 18) {
//         resolve("Eligible for voting");
//     } else {
//         reject("Not eligible for voting");
//     }
// });
// myprom
// .then((res) => {
//     console.log(res);
//     return "Please carry your voter ID";
// })
// .then((x) => {
//     console.log("Thank you!");
// })
// .catch((reason) => {
//     console.log(reason);
// });

// Promise with addition and multiplication
let myprom = new Promise((resolve, reject) => {
    let n = 8;

    if (n % 2 === 0) {
        resolve(n);
    } else {
        reject("Number is odd");
    }
});
myprom
    .then((res) => {
        res = res + 12;
        console.log(res);
        return res;
    })
    .then((x) => {
        x = x * 3;
        console.log(x);
        return x;
    })
    .then((y) => {
        y = y - 10;
        console.log(y);
    })
    .catch((reason) => {
        console.log(reason);
    });


