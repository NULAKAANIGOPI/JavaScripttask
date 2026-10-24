

//=====================Copying one array into another array=====================
let Fruits = ["Apple" , "Banana" , "Chikko" , "DragonFruit"];
console.log(`=======Before Copying=======`);
console.log(Fruits);
console.log(`=======After Copying=======`);
//Spread operator
//let Num    = [10,20, 30 , ...Fruits];
//Slice Method
//let Num = [10 , 20 , 30 , Fruits.slice()];
//using Array.from(first Array)
let Num = [10, 20 , 30 , Array.from(Fruits)];
console.log(Num);


//=====================Merge two arrays=====================
let Vehicle1 = ["Bus" , "Car" , "Van"];
let Vehicle2 = ["Bike" , "Auto" , "Lorry"]
console.log(`Before Merge`);
console.log(Vehicle1);
console.log(Vehicle2);
console.log(`After Merge`);
//Using Spread Operator
//let Vehicles = [...Vehicle1 , ...Vehicle2]
//Using concat
// let Vehicles = Vehicle1.concat(Vehicle2);
//using push with spread operator
Vehicle1.push(...Vehicle2);
console.log(Vehicle1);


