//Array Methods

//=========== Methods that modify the original array============
let arr = [10, 20, 30, 40, 50];

// push() [add element at the end]
arr.push(60);
console.log(arr); // [10, 20, 30, 40, 50, 60]

// pop() [remove element at the end]
arr.pop();
console.log(arr); // [10, 20, 30, 40, 50]

// unshift() [add element at the beginning]
arr.unshift(5);
console.log(arr); // [5, 10, 20, 30, 40, 50]

// shift() [remove element at the beginning]
arr.shift();
console.log(arr); // [10, 20, 30, 40, 50]

// splice() [add, remove, or replace elements]
arr.splice(2, 1);
console.log(arr); // [10, 20, 40, 50]

// sort() [sort elements in place]
arr.sort((a, b) => a - b);
console.log(arr); // [10, 20, 40, 50]

// reverse() [reverse the array in place]
arr.reverse();
console.log(arr); // [50, 40, 20, 10]

// fill() [fill elements with a value]
arr.fill(3);
console.log(arr); // [3, 3, 3, 3]

// copyWithin() [copy elements within the same array]
arr = [10, 20, 30, 40, 50];
arr.copyWithin(0, 2, 4);
console.log(arr); // [30, 40, 30, 40, 50]

// ==========Methods that return a new array=============
let array = [10, 20, 30, 40, 50];

// slice() [copy a portion of an array]
console.log(array.slice(1, 3));
// [20, 30]

// concat() [combine arrays]
console.log(array.concat([60, 70]));
// [10, 20, 30, 40, 50, 60, 70]

// map() [transform every element]
console.log(array.map(n => n * 2));
// [20, 40, 60, 80, 100]

// filter() [select elements based on a condition]
console.log(array.filter(n => n > 25));
// [20, 30, 40, 50]

// flat() [flatten nested arrays]
let array2 = [1, 2, [3, 4], [5, 6]];
console.log(array2.flat());
// [1, 2, 3, 4, 5, 6]

// flatMap() [map elements and flatten one level]
let array3 = [1, 2, 3];
console.log(array3.flatMap(n => [n, n * 2]));
// [1, 2, 2, 4, 3, 6]

// toSorted() [return a sorted copy; original unchanged]
let array4 = [30, 10, 20];
console.log(array4.toSorted((a, b) => a - b));
// [10, 20, 30]

// toReversed() [return a reversed copy]
let array5 = [10, 20, 30];
console.log(array5.toReversed());
// [30, 20, 10]

// toSpliced() [return a modified copy]
let array6 = [10, 20, 30, 40];
console.log(array6.toSpliced(1, 2));
// [10, 40]

// with() [return a copy with one index replaced]
let array7 = [10, 20, 30];
console.log(array7.with(1, 99));
// [10, 99, 30]

// ==========Searching and checking methods===========
let array1 = [10, 20, 30, 40, 50];

// indexOf() [find the first index of a value]
console.log(array1.indexOf(30)); // 2

// lastIndexOf() [find the last index of a value]
let array8 = [10, 20, 10, 30];
console.log(array8.lastIndexOf(10)); // 2

// includes() [check whether a value exists]
console.log(array1.includes(30)); // true

// find() [return the first matching element]
console.log(array1.find(n => n > 25)); // 30

// findIndex() [return the index of the first match]
console.log(array1.findIndex(n => n > 25)); // 2

// findLast() [return the last matching element]
console.log(array1.findLast(n => n < 40)); // 30

// findLastIndex() [return the index of the last match]
console.log(array1.findLastIndex(n => n < 40)); // 2

// some() [check whether at least one element matches]
console.log(array1.some(n => n > 40)); // true

// every() [check whether all elements match]
console.log(array1.every(n => n > 5)); // true

//=========Iterating methods===========
let arrIm = [10, 20, 30, 40, 50];

// forEach() [execute a function for each element]
arrIm.forEach(n => console.log(n));
// 10
// 20
// 30
// 40
// 50

// map() [create a new array from each element]
console.log(arrIm.map(n => n + 5));
// [15, 25, 35, 45, 55]

// filter() [return elements that pass a test]
console.log(arrIm.filter(n => n >= 30));
// [30, 40, 50]

// reduce() [combine elements into one value]
console.log(arrIm.reduce((sum, n) => sum + n, 0));
// 150

// entries() [return index-value pairs]
console.log([...arrIm.entries()]);
// [[0, 10], [1, 20], [2, 30], [3, 40], [4, 50]]

// keys() [return array indexes]
console.log([...arrIm.keys()]);
// [0, 1, 2, 3, 4]

// values() [return array values]
console.log([...arrIm.values()]);
// [10, 20, 30, 40, 50]

// reduceRight() [reduce from right to left]
let arr2 = ["a" , "b", "c"];
console.log(arr2.reduceRight((a, b) => a + b));
// "cba"

//==========Other useful array methods==========

// join() [convert array elements into a string]
let arr3 = [10, 20, 30];
console.log(arr3.join("-"));
// "10-20-30"

// at() [get an element using a positive or negative index]
console.log(arr3.at(-1));
// 30

// toString() [convert array to a string]
console.log(arr3.toString());
// "10,20,30"

// flat() [flatten nested arrays]
console.log(arr3.flat(2));
// [10, 20, 30]

// Array.isArray() [check whether a value is an array]
console.log(Array.isArray([10, 20])); // true
console.log(Array.isArray("hello")); // false

// Array.from() [create an array from an iterable]
console.log(Array.from("hello"));
// ["h", "e", "l", "l", "o"]

// Array.of() [create an array from the given arguments]
console.log(Array.of(10, 20, 30));
// [10, 20, 30]

// Array.from() [with map function]
console.log(Array.from([1, 2, 3], n => n * 2));
// [2, 4, 6]

// with() [replace an element without mutating the original]
let nums = [10, 20, 30];
console.log(nums.with(0, 99)); // [99, 20, 30]
console.log(nums);             // [10, 20, 30]


//===========================================
//       STRINGS
//===========================================

let str = "Hello JavaScript";

// length [get the number of UTF-16 code units]
console.log(str.length); // 16

// charAt() [get the character at an index]
console.log(str.charAt(0)); // "H"

// at() [get a character using positive or negative index]
console.log(str.at(-1)); // "t"

// charCodeAt() [get the UTF-16 code unit]
console.log("ABC".charCodeAt(0)); // 65

// codePointAt() [get a Unicode code point]
console.log("A".codePointAt(0)); // 65

// toUpperCase() [convert to uppercase]
console.log(str.toUpperCase());
// "HELLO JAVASCRIPT"

// toLowerCase() [convert to lowercase]
console.log(str.toLowerCase());
// "hello javascript"

// toString() [return the string representation]
console.log(str.toString());
// "Hello JavaScript"

// valueOf() [return the primitive string value]
console.log(str.valueOf());
// "Hello JavaScript"


//=========Searching string methods===========
let stri = "Hello JavaScript JavaScript";

// indexOf() [find the first occurrence]
console.log(stri.indexOf("JavaScript")); // 6

// lastIndexOf() [find the last occurrence]
console.log(stri.lastIndexOf("JavaScript")); // 17

// includes() [check whether a substring exists]
console.log(stri.includes("Java")); // true

// startsWith() [check the beginning]
console.log(stri.startsWith("Hello")); // true

// endsWith() [check the ending]
console.log(stri.endsWith("JavaScript")); // true

// search() [find a match using a regular expression]
console.log(stri.search(/JavaScript/)); // 6

// match() [find matches using a regular expression]
console.log("cat bat rat".match(/at/g));
// ["at", "at", "at"]

// matchAll() [get an iterator of all regex matches]
console.log(
  [..."cat bat".matchAll(/at/g)].map(m => m[0])
);
// ["at", "at"]


// =========Extracting and modifying strings============
let strb = "JavaScript";

// slice() [extract a portion of a string]
console.log(strb.slice(0, 4)); // "Java"

// substring() [extract between two indexes]
console.log(strb.substring(4, 10)); // "Script"

// substr() [extract using start and length; deprecated]
console.log(strb.substr(4, 6)); // "Script"

// concat() [combine strings]
console.log("Hello".concat(" ", "World"));
// "Hello World"

// repeat() [repeat a string]
console.log("Hi ".repeat(3));
// "Hi Hi Hi "

// replace() [replace the first matching occurrence]
console.log("hello hello".replace("hello", "hi"));
// "hi hello"

// replaceAll() [replace all matching occurrences]
console.log("hello hello".replaceAll("hello", "hi"));
// "hi hi"

// padStart() [add padding to the beginning]
console.log("5".padStart(3, "0"));
// "005"

// padEnd() [add padding to the end]
console.log("5".padEnd(3, "0"));
// "500"

// trim() [remove whitespace from both ends]
console.log("  hello  ".trim());
// "hello"

// trimStart() [remove whitespace from the beginning]
console.log("  hello  ".trimStart());
// "hello  "

// trimEnd() [remove whitespace from the end]
console.log("  hello  ".trimEnd());
// "  hello"


//===========Splitting and converting strings==========
let stra = "apple,banana,mango";

// split() [convert a string into an array]
console.log(stra.split(","));
// ["apple", "banana", "mango"]

// split() with a limit
console.log(stra.split(",", 2));
// ["apple", "banana"]

// split() into individual characters
console.log("hello".split(""));
// ["h", "e", "l", "l", "o"]

// toLocaleUpperCase() [uppercase using locale-specific rules]
console.log("hello".toLocaleUpperCase());
// "HELLO"

// toLocaleLowerCase() [lowercase using locale-specific rules]
console.log("HELLO".toLocaleLowerCase());
// "hello"

// normalize() [normalize Unicode text]
console.log("\u00F1".normalize("NFD"));
// "n\u0303"

// localeCompare() [compare strings according to locale rules]
console.log("apple".localeCompare("banana"));
// A negative number

// isWellFormed() [check for unpaired UTF-16 surrogates]
console.log("hello".isWellFormed()); // true

// toWellFormed() [replace unpaired surrogates with U+FFFD]
console.log("hello".toWellFormed()); // "hello"


//==========String static methods============
// String() [convert a value to a string]
console.log(String(123)); // "123"
console.log(String(true)); // "true"

// String.fromCharCode() [create a string from UTF-16 code units]
console.log(String.fromCharCode(65, 66, 67));
// "ABC"

// String.fromCodePoint() [create a string from Unicode code points]
console.log(String.fromCodePoint(128512));
// "😀"

// String.raw() [create a string from a template literal's raw parts]
console.log(String.raw`Hello\nWorld`);
// "Hello\nWorld"


//===========Useful string method combination==========
// Convert a sentence into words
let sentence = "JavaScript is awesome";
console.log(sentence.split(" "));
// ["JavaScript", "is", "awesome"]

// Reverse a string
let word = "hello";
console.log(word.split("").reverse().join(""));
// "olleh"

// Capitalize the first letter
let name = "javascript";
console.log(name.charAt(0).toUpperCase() + name.slice(1));
// "Javascript"

// Remove extra whitespace
let input = "   Hello World   ";
console.log(input.trim());
// "Hello World"

// Replace spaces with hyphens
let title = "learn javascript methods";
console.log(title.replaceAll(" ", "-"));
// "learn-javascript-methods"

// Count the occurrences of a character
let text = "banana";
console.log(text.split("a").length - 1);
// 3

// Check whether a string contains only digits
console.log(/^\d+$/.test("12345")); // true
console.log(/^\d+$/.test("123a")); // false