// console.log("helllo world");
// let userName = "Za'idia";
// console.log(userName);
// ----------/////////////////-------------------
// Formula for an area is 'pi*r(suare)'
// let radius = 5;
// const pi = 3.14;
// let area;
// area = pi * radius * radius;
// console.log(area);
// ----------------------//////////////---------------------
// Data types
// let numb = 0xfabcde; /* '0x', is the representation of the hexadecimal umber system */
// let numb1 = 1.5e12; /* 'e', is representation of exponentional. 1.5 into 10 power 12 */
// let numb2 = 100_000_000_000; /* to easily count the number of 0's in the value, you can put underscore */
// let numb3 =
//   123123128857938475689389689n; /* 'n', is te representation of 'BigInt' that is another data type for big ingigers. */
// console.log(numb3 + 1n);
// ---------------///////////---------------

// let userName = 'Mian\tHassan "Farooq"'; /* '\t', this is used for 'tab' */
// let userName1 =
//   'Mian\nHassan "Farooq"'; /* '\n', this is used for 'enter', on next line*/
// console.log(userName1);
// -----------------/////////////////-----------------------

// let x = 8;

// // x = !x;
// x += "";
// console.log(x, typeof x);
// ----------------------------////////////////--------------------

// let x = 4 ** 2;
// console.log(x);
// let y = "8";
// let c = 8;

// let z = y === c;
// console.log(z);
// ------------------////////////////////--------------------

// let x, y, z;
// x = 150;
// y = 150;
// z = 150;

// if (x > y && x > z) {
//   console.log(
//     `Value of x, ${x} is bigger number than the rest 2 numbers ${y} and ${z}.`
//   );
// } else if (y > x && y > z) {
//   console.log(
//     `Value of y, ${y} is bigger number than the rest 2 numbers ${x} and ${z}.`
//   );
// } else if (z > x && z > y) {
//   console.log(
//     `Value of z, ${z} is bigger than the rest 2 numbers ${y} and ${x}`
//   );
// } else {
//   console.log(`All values ${x}, ${y}, ${z} are equal.`);
// }

// console.log("Program finished");
// ----------------////////////////////------------------------

// let numb = 2;
// let result;

// // if (numb % 2 === 0) result = "Even";
// // else result = "Odd";

// // Ternary operator ' ?: '
// /* This will use as alternative to single if/else case. */
// result = numb % 2 === 0 ? "True1" : "False0";

// console.log(result);

// -------------------////////////------------------------

// Switch statement below
// sunday 8am, monday,tuesday,wednesday,thursday,friday 6am, saturday 9am

// let day = "";

// switch (day) {
//   case "Sunday":
//     console.log("8am");
//     break;
//   case "Monday":
//     console.log("6am");
//     break;
//   case "Tuesday":
//     console.log("6am");
//     break;
//   case "Wednesday":
//     console.log("6am");
//     break;
//   case "Thursday":
//     console.log("6am");
//     break;
//   case "Friday":
//     console.log("6am");
//     break;
//   case "Saturday":
//     console.log("9am");
//     break;

//   default:
//     console.log("do nothing");
// }

// console.log("end is now");
// -------------------////////////////////--------------------

// do-while loop

// let i = 5;

// do {
//   console.log(`Hi ${i}`);
//   i--;
// } while (i >= 1);
// ----------////////////////---------------

// for-loop

// for (let i = 1; i <= 5; i++) {
//   console.log(`Helo ${i}`);
// }
// console.log("Done for-loop");

// ------/////////-------------------
// nested for loop

// let months = 12;
// let sunday = 4;
// for (let i = 1; i <= months; i++) {
//   console.log(`Month is ${i}`);
//   for (let j = 1; j <= 4; j++) {
//     console.log(`Sunday No-${j}`);
//   }
// }

// console.log("Current year is ends here.");
// -///////-------------------
// let divByThree = 0;
// let notDivByThree = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 6 === 0) {
//     divByThree++;
//   } else {
//     notDivByThree++;
//   }
// }
// console.log(
//   `Numbers divisible by 3 in the range from 1 to 100 are ${divByThree}`
// );
// console.log(
//   `Numbers not divisible by 3 in the range from 1 to 100 are ${notDivByThree}`
// );

// ------------/////////////////////--------------------

// while-loop
// let num = 3456327;
// while (num > 0) {
//   console.log(num % 10);
//   num = parseInt(num / 10);
// }
// --------------/////////------------------

// JS-Objects
// let y = "age";
// let animalRecord = {
//   002: {
//     aniName: "Sheep",
//     age: 10,
//     gender: "male",
//   },
//   003: {
//     aniName: "Cow",
//     age: 12,
//     gender: "female",
//   },
//   004: {
//     aniName: "Hen",
//     age: 6,
//     gender: "male",
//   },
//   brown: {
//     code: 112,
//     blues: {
//       color: "color is blue",
//     },
//   },
// };
// let x;
// // x = animalRecord[3][y];
// let {
//   2: first,
//   brown: { code, blues },
// } = animalRecord;
// x = blues.color;

// console.log(first.aniName);
// ----------------/////////////////-----------------

// For-in loop (use to apply something in objects)
// let alien = {
//   name: "Zaryab",
//   tech: "JavaScript",
//   laptop: {
//     cpu: "i7",
//     ram: 8,
//     brand: "HP",
//   },
// };

// for (let key in alien) {
//   console.log(key, alien[key]);
//   if (key === "laptop") {
//     console.log(`${key} is found here.`);
//     for (let keys in alien.laptop) {
//       console.log(keys, alien.laptop[keys]);
//     }
//   }
// }
// ----------------//////////////////-------------------------------

// Function
// function fun1(arr) {
//   let x = Math.floor(Math.random() * 5);
//   return arr[x];
// }
// console.log(fun1([1, 4, 6, 8, 3]));
// -----////////////////////-----------------------

// Function Expression and local/grobal vaiables scope
// let x, y;
// let add = function (num1, num2) {
//   x = 2;
//   y = 2;
//   return num1 + num2 + x + y;
// };

// let result = add(1, 4);
// console.log(result, typeof add);
// ------///////////////////-----------------

// Arrow-Function

// let sum = (num1, num2) => {
//   if (num1 < 0 || num2 < 0) {
//     return `Can't able to add the negative number`;
//   } else {
//     return num1 + num2;
//   }
// };

// console.log(sum(2, 0));
// -----------------////////-------------------

// Functions/methods in objects

// let laptop = {
//   cpu: "i9",
//   ram: 16,
//   brand: "HP",

//   greet: function () {
//     console.log("hello from fun");
//   },
// };
// laptop.greet();
// ------------------///////////--------------------

// let laptop1 = {
//   cpu: "i7",
//   ram: 8,
//   maker: "Hp",

//   getConfig: function () {
//     console.log(
//       `Config of the current pc is ${this.cpu}, ${this.ram}, ${this.maker}`
//     );
//   },
// };
// let laptop2 = {
//   cpu: "i9",
//   ram: 16,
//   maker: "Dell",

//   getConfig: function () {
//     console.log(
//       `Config of the current pc is ${this.cpu}, ${this.ram}, ${this.maker}`
//     );
//   },
// };

// laptop1.getConfig();
// laptop2.getConfig();
// -------------////////---------------

// let user = { uName: "Zia" };
// let admin = { uName: "John" };

// let sayhi = function () {
//   console.log(`This is ${this.uName}`);
// };

// user.f = sayhi;
// admin.f = sayhi;

// user.f();
// admin.f();

// admin["f"]();
// ---------------------//////---------------------

// Using of 'this' keyword
// let laptop1 = {
//   cpu: "i9",
//   ram: 1336,
//   hardDrive: "256gb",

//   compare: function (laptop2) {
//     if (this.ram > laptop2.ram) {
//       return this.ram;
//     } else {
//       return laptop2.ram;
//     }
//   },
// };

// let laptop2 = {
//   cpu: "i7",
//   ram: 28,
//   hardDrive: "128gb",
// };

// console.log(laptop1, laptop2);
// console.log(laptop1.compare(laptop2));
// --------------///////////////----------------

// function Car(color, model, price, km) {
//   this.color = color;
//   this.model = model;
//   this.price = price;
//   this.km = km;

//   this.driven = function () {
//     console.log(`Car is driven ${this.km}`);
//   };
// }

// let honda = new Car("Red", 1995, "$21000", 34000);
// let suzuki = new Car("Orange", 2001, "$4000", 23400);

// console.log(honda);
// honda.driven();
// console.log(suzuki);
// suzuki.driven();

// console.log(this);

// function sum() {
//   let add = 2 + 2;
//   console.log("Sum of 2 numbers is: " + add);
//   console.log(this);
// }

// sum();

// const person = {
//   name: "Shahab",
//   age: 44,
//   num: [3, 6, 9, 1],
//   gym: function () {
//     let a = 2 + 2;
//     console.log(`this is the sum of a ${a}`);
//     console.log(this);
//     this.num.forEach(function (n) {
//       console.log(n, this);
//     }, this);
//   },
// };
// person.gym();
// --------------///////------------

// function Car(color, model, type) {
//   this.color = color;
//   this.model = model;
//   this.type = type;
// }

// let honda = new Car("Red", 1990, "Truck");
// let suzuki = new Car("Yellow", 2090, "Loader");
// console.log(honda, suzuki);
// ------/////////////---------------

// let data = [
//   31,
//   "blue",
//   { tale: 22 },
//   (num) => {
//     console.log(`this is ${num}`);
//   },
// ];

// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2].tale);
// data[3](33);
// ----////////-------------------

// Arrays
// let x;
// const arr = [1, 4, 7, 9, 12, 9];
// x = arr.splice(1, 2, 3, 4, 8);
// arr[5] = 232;
// arr.push(33);
// arr.unshift(22);
// console.log(arr, x, arr.length);

// ///////////////----------//--------------

// const onb11 = {
//   name: "blue",
//   age: 33,
//   height: "33-inch",
// };

// for (let key in onb11) {
//   console.log(key, onb11[key]);
// }
// ---------------///////////////---------------------

// For-of loop and For-in loop on an array
// const arr1 = [55, 77, 1, 4, 2, 546, 324, 221, 0, 876, 3];

// // for (let currentVal of arr1) {
// //   console.log(currentVal, arr1);
// // }

// for (let key in arr1) {
//   console.log(key, arr1[key], arr1);
// }
// ------------------///////////-----------------
//
// Destructuring of arrays and objects
// const arr2 = [
//   "Aja ray bhai",
//   4,
//   77,
//   "doit",
//   () => {
//     console.log("jj");
//   },
// ];

// const [a, , b, , obj] = arr2;
// console.log(b);

// const obj1 = {
//   id: 1,
//   age: 22,
//   color: "blue",
//   func: function () {
//     console.log("okko");
//   },
//   arrq: [1, 5, 6, 3],
// };

// let { id, age: ageOfper, func, arrq: blus } = obj1;
// console.log(blus[2]);
// ----------------////////////--------------------

//  Destructuring of an array
// let a = 4;
// let b = 8;

// [a, b] = [b, a];
// console.log(a);

// let bb = "hello my name is hassan farooq";
// let x = bb.split(" ");
// let [hel, blu, , ok, ...rest] = x;
// console.log(rest.toString().replace(",", " "));

// ----------------//////////////-----------------

// Array method ForEach
// const bb = [2, 5, 78, 6, 9, 22, 3, 4];

// let oo = {
//   age: 44,
//   array1: [3, 5, 6],
//   funcs: function () {
//     console.log(this.age);
//   },
// };

// bb.forEach((n, ind, arr) => {
//   console.log(n, ind, arr);
//   console.log();
// });

// oo.funcs();
// ---------------////////------------------

// // filter, map, reduce methods on array
// const array1 = [3, 6, 2, 3, 7, 8, 9, 11, 3];
// console.log(
//   array1
//     .filter((n) => {
//       return n % 2 === 0;
//     })
//     .map((c) => {
//       return c * 3;
//     })
//     .reduce((a, b) => {
//       return a + b;
//     })
// );
// ------///////////--------------------

// Set class
// const bb = new Set("bookkeeper");
// console.log(bb.add("z"));

// const nums = new Set();

// nums.add(33);
// nums.add(12);
// nums.add(12);
// nums.add(3);
// nums.add("al");
// nums.add(3);
// nums.add("al");
// nums.add("bil");

// nums.forEach((n) => {
//   console.log(`Printing of ${n}`);
// });

// console.log(nums, typeof nums);
// -----------------////////////-------------

// Map class
// const student = new Map();

// student.set("Zoha", "Maths");
// student.set("Sara", "Physics");
// student.set("Shadab", "Computer Science");
// student.set("Aizal", "Chemistry");
// student.set("Zoha", "English");
// console.log(student.get("Aizal"));

// for (let [k, v] of student) {
//   console.log(k + " " + ": " + v);
// }
// -------/////////-----------------------

function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
const num = 5;
console.log(fact(num));
