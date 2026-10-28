// 1.Reverse Strings: Reverse each string in the given array and store the reversed strings in a new array.
let arr1 = ["Hero", "Zero", "abc", "Inno"];
let nArr1 = [];
for(let j=arr1.length-1;j>=0;j--){
let str = arr1[j];
let rev = "";
for(let i=str.length-1;i>=0;i--){
     rev = rev+ str.charAt(i);
     nArr1[j] = rev;
}
// console.log(`Reversed String = ${rev}`);
}
console.log("Reversed string :",nArr1);





// 2.Palindrome Strings: Find all palindrome strings in the given array and store them in a new array.
let myarr  =  ["MADAM", "MOM", "DAD","Hero","Inno"];
let newArr = [];
for(let i=0;i<=myarr.length-1;i++){
    let str =myarr[i];
    let rev = "";
    for(let j=myarr.length-1;j>=0;j--){
        rev = rev + str.charAt(j);
    }
    if(rev === str){
        //console.log(str); 
        newArr[i]=rev;      
    }
    
}
console.log("Palindrome strings :",newArr);





// 3.Convert to Uppercase: Convert each string in the given array to uppercase and store the results in a new array.
let arr = ["hero", "abc", "xyz"];
let arr2=[];
for (let j = 0; j <= arr.length - 1; j++) {
    let str = arr[j];
    let up = "";
    for (let i = 0; i <= str.length - 1; i++) {
        let ch = str.charAt(i);
        up = up + String.fromCharCode((ch.charCodeAt(0)) - 32);
    }
    //console.log(up);
    arr2[j]=up;
}
console.log("Lowercase to Uppercase Stored in array:",arr2);


// 4.Count Vowels: Count the vowels in each string of the given array and display the count for each
let arr3 = ["Hero", "Zero", "Abc", "Inno"];
for (let i = 0; i < arr3.length; i++) {
    let count = 0;
    for (let j = 0; j < arr3[i].length; j++) {
        let ch = arr3[i][j].toLowerCase();
        if ( ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ) {
            count++;
        }
    }
    console.log(arr3[i] + " : " + count);
}


// 5.Store Vowel Counts in an Object: Create an object where each string is a key and its vowel count is the value.
let arr4 = ["Hero", "Zero", "Abc", "Inno"];
let obj = {};

for (let i = 0; i < arr4.length; i++) {
    let count = 0;

    for (let j = 0; j < arr4[i].length; j++) {
        let ch = arr4[i][j].toLowerCase();

        if ( ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ) {
            count++;
        }
    }
    obj[arr4[i]] = count;
}
console.log(obj);

// 6.Store Word Lengths in an Object: Create an object where each word in the given string is a key and its length is the value.
let str = "Welcome to Javascript";
let obj2 = {};
let word = "";
let length = 0;

for (let i = 0; i <= str.length; i++) {
    if (i === str.length || str[i] === " ") {
        if (word !== "") {
            obj2[word] = length;
        }

        word = "";
        length = 0;
    } else {
        word = word + str[i];
        length++;
    }
}
console.log(obj2);