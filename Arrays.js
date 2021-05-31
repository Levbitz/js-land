//What is an Array? An array is a special variable, which can hold more than one value at a time.

var myArr = ["Suzan", 25];
//console.log(myArr.length);

//changing character
// myArr[1] = 27;
// console.log(myArr);

//change to string
// console.log(myArr.toString());

const students = [
  ["sam", "coding"],
  ["winnie", "gossiping", ["peter", "steal"]],
];

//console.log(students.length);

// students[1] = ["anna", "god"];
// console.log(students);
// console.log(students.toString());

const musician = ["bobi", "bebe", "chamli", "kenzo", "bafana"];
//add new to end
//musician.push("saha");

// add new to front
//musician.unshift("Maddox");

//remove first
//musician.shift();

//remove last
//musician.pop();

//return in alphatebical
musician.sort();
console.log(musician);
