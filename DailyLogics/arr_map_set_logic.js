//Iterate map with for loop and for of loop
let myMap = new Map()
myMap.set ("Name" , "Gopi");
myMap.set ("Course"  , "Java");
myMap.set ("Fees" , 40000);
let keys = myMap.keys();
let values = myMap.values();
let entries = myMap.entries();
console.log(entries);
let key2 = Array.from(myMap.keys());
let values2 = Array.from(myMap.values());
let entries2 = Array.from(myMap.entries());
//for loop
for(let i = 0 ; i< entries2.length; i++){
    console.log(key2[i],values2[i]);    
}
//for of loop
for(let [keys,values] of myMap){
    console.log(keys,values);   
}

//check whether keys() and Values() works with Map & Set or Not?
//===========Map()============
let myMap2 = new Map();
myMap2.set("Name", "Gopi");
myMap2.set("Course", "Java");
myMap2.set("Fees", 40000);
let Keys = myMap2.keys();
console.log(Keys);
let Values = myMap2.values();
console.log(Values);
//===========Set()=========
let mySet = new Set(["Gopi" , "Java" , "45000"]);
console.log(mySet.keys());
console.log(mySet.values());







//Remove duplicates from array without inbuilt methods or set()
let arr = [10, 20, 10, 30, 20, 40];
let result = [];
for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
            found = true;
            break;
        }
    }
    if (found === false) {
        result[result.length] = arr[i];
    }
}
console.log(result);
