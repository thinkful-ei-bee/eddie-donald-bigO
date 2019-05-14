'use strict';
// What is the Big O for this

// 1) O(1)
// 2) O(n)

// Even or Odd

// The BigO is constant (O(1)) because we are always
// going go through this single if statement and there
// is nothing else in the algorithm.

// Are you here?

// The BigO is polynomial (O(n^2)) because in our worst
// case scenario we would have to go through the first
// for loop and the nested for loop completely.

// Doubler

// The BigO is linear (O(n)) because we go through the
// entire array once in the for loop

// Naive search

// The BigO is linear (O(n)) because we go through the
// entire array once and the if statement evaluates
// once per array item

// Creating pairs

// The BigO is polynomial (O(n^2)) because the first loop
// would take us through every element of the argument array
// and then take every other element.

// Compute the sequence

// The following algorithm returns an array of fibonacci numbers
// based on the supplied integer num. A num of 5 will return
// five fibonacci numbers from the beginning (1,1,2,3,5).

// The runtime complexity is linear (O(n)) because the time the
// algorithm would take increases by a constant about for
// each increase in n (the integer supplied as num).

// An Efficient Search

// The Big O of the following algorithm is O(log(n)) because
// with each iteration of the while loop the array indices
// that are a part of the loop are halved.

// Random Element

// The Big O of the following algorithm is (O(1)) because
// the function is a simple return statement of one random
// element from a supplied array.

// What Am I?

// The following algorithm looks at whether a given number
// is a prime number. The BigO of the following algorithm is
// linear (O(n)) because for each increase in the given
// argument n there would be a proportionate increase in the
// number of for loops executed.

// Tower of Hanoi

function Hanoi(n, source, destination, temp) {
  if (n === 1) {
    return console.log(`Move disk ${n} from ${source} to ${destination}`);
  }
  Hanoi(n - 1, source, temp, destination);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  Hanoi(n - 1, temp, destination, source);
}

// Hanoi(3, "A", "C", "B");
// Hanoi(4, "A", "C", "B");
// Hanoi(5, "A", "C", "B");
// Hanoi(6, "A", "C", "B");

// Given 5 disks, after 7 recursive calls you will move
// disk 1 from A to C.

// You need 7 moves to do 3, 15 moves to do 4, and 31
// moves to do 5.

// Algorithm runtime is O(2^n).


//Iterative version

//Counting Sheep

function countSheep(num){
  for (let i=0;i<num;i++){
    console.log(`${num -i}:Another sheep jumped over the fence`);
  }
  console.log('All sheep jumped over the fence');
}

// countSheep(3);

//Power Calulator

function powerTo(num,exponent){
  return Math.pow(num,exponent);
}

// powerTo(5,4);

// Reverse String

function reverse(string){
  let newString ='';
  for (let i=string.length-1;i>=0;i--){
    newString +=string[i]; 
  }
  return newString;
}

// reverse('hello');

// nth Triangle Number

function nthTriangle(num){
  let result = 0;
  for (let i =1; i <= num; i++){
    result += i;
  }

  return result;
}

// console.log(nthTriangle(9));

// String Splitter

function splitter(input,str){
  return input.split(str).join('');
}

// console.log(splitter('20/20/2020','/'));

// Fibbonacci

function fib(num){
  let num1 = 0;
  let num2 = 1;
  let result = 1;
  for (let i =1; i<num; i++){
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
  return result;
}

// console.log(fib(7));

// Factorial

function fact(num){
  let result = 1;
  for (let i =1; i<=num;i++){
    result *= i;
  }
  return result;
}

// console.log(fact(5));

// Recursive Big O
//1. Sheep Count - linear O(n)
//2. Power Calculator - linear O(n)
//3. Reverse String - linear O(n)
//4. Triangular Number - linear O(n)
//5. String Splitter - linear O(n)
//6. Factorial - linear O(n)
//7. Fibonacci - O(2^n)
//8. Maze - linear O(n)
//9. All Maze - O(4^n) 
//10. Anagrams - O(n^2)
//11. Organization Chart - O(n^2)
//12. Binary - O(log(n))

// Itterative Big O
//1. Sheep Count - linear O(n)
//2. Power Calculator - constant O(1)
//3. Reverse String - linear O(n)
//4. Triangular Number - linear O(n)
//5. String Splitter - linear O(n)
//6. Factorial - linear O(n)
//7. Fibonacci - linear O(n)