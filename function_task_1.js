/*
1
Write a function named tellFortune that:
takes 4 arguments: partner's name,
number of children, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(x, y, z, n) {
  console.log(
    "You will be a " +
      x +
      " in " +
      y +
      ", and married to " +
      z +
      " wiht " +
      n +
      " kids."
  );
}
var job = prompt("Enter a job :");
var location = prompt("Enter a location :");
var partnername = prompt("Enter a partnername:");
var numberofchildren = prompt("Enter a numberofchildren:");
tellFortune(job, location, partnername, numberofchildren);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(x) {
  var n = x * 7;
  console.log("Your doggie is " + n + " years old in dog years!");
}
var agedog = prompt("Enter age dog");
calculateDogAge(agedog);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(x, y) {
  var z = 100 - x;
  console.log(z * 365 * y);
}
var age = prompt("Enter your age:");
var amountperday = prompt("Enter amount per day:");

calculateSupply(age, amountperday);
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(x) {
  console.log("Hello " + x);
}
var name = prompt("Enter name:");
greet(name);

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

function double(x) {
  return 2 * x;
}

function double() {
  return 2 * 7;
}

function double(x) {
  return 2 * x;
}
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(x) {
  var n = x * x * x;
  console.log(n);
}
var num = prompt("Enter number:");
cube(num);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(x, y) {
  var m = x * y;
  console.log(m);
}
var n1 = prompt("Enter number:");
var n2 = prompt("Enter number:");
multiply(n1, n2);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function anIGetADrivingLicense(a) {
  if (a >= 20) {
    console.log("yes you can");
  } else {
    var x = 20 - a;
    console.log("please come back after " + x + " years to get one");
  }
}
var age = prompt("Enter your age:");
anIGetADrivingLicense(age);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(a, b) {
  if (a.length === b.length) {
    console.log("True");
  } else {
    console.log("false");
  }
}
var x = prompt("Enter a argument:");
var z = prompt("Enter a argument:");
sameLength(x, z);

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(a, b) {
  var y;
  if (a > b) {
    y = a;
  } else {
    y = b;
  }
  console.log(y);
}
var n1 = Number(prompt("Enter number:"));
var n2 = Number(prompt("Enter number:"));
largerNubmer(n1, n2);

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(a, b, c) {
  var y;
  if (a < b && a < c) {
    y = a;
  } else if (b < a && b < c) {
    y = b;
  } else {
    y = c;
  }
  console.log(y);
}
var n1 = Number(prompt("Enter number:"));
var n2 = Number(prompt("Enter number:"));
var n3 = Number(prompt("Enter number:"));
smallerNubmer(n1, n2, n3);

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(s1, s2, s3, s4, s5) {
  var l1 = s1.length;
  var l2 = s2.length;
  var l3 = s3.length;
  var l4 = s4.length;
  var l5 = s5.length;
  var a;
  if (l1 <= l2 && l1 <= l3 && l1 <= l4 && l1 <= l5) {
    a = s1;
  } else if (l2 <= l1 && l2 <= l3 && l2 <= l4 && l2 <= l5) {
    a = s2;
  } else if (l3 <= l1 && l3 <= l2 && l3 <= l4 && l3 <= l5) {
    a = s3;
  } else if (l4 <= l1 && l4 <= l2 && l4 <= l3 && l4 <= l5) {
    a = s4;
  } else {
    a = s5;
  }
  console.log(a);
}
var x1 = prompt("Enter argument:");
var x2 = prompt("Enter argument:");
var x3 = prompt("Enter argument:");
var x4 = prompt("Enter argument:");
var x5 = prompt("Enter argument:");
shorterString(x1, x2, x3, x4, x5);

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(s1, s2, s3, s4, s5) {
  var l1 = s1.length;
  var l2 = s2.length;
  var l3 = s3.length;
  var l4 = s4.length;
  var l5 = s5.length;
  var a;
  if (l1 >= l2 && l1 >= l3 && l1 >= l4 && l1 >= l5) {
    a = s1;
  } else if (l2 >= l1 && l2 >= l3 && l2 >= l4 && l2 >= l5) {
    a = s2;
  } else if (l3 >= l1 && l3 >= l2 && l3 >= l4 && l3 >= l5) {
    a = s3;
  } else if (l4 >= l1 && l4 >= l2 && l4 >= l3 && l4 >= l5) {
    a = s4;
  } else {
    a = s5;
  }
  console.log(a);
}
var x1 = prompt("Enter argument:");
var x2 = prompt("Enter argument:");
var x3 = prompt("Enter argument:");
var x4 = prompt("Enter argument:");
var x5 = prompt("Enter argument:");
longerString(x1, x2, x3, x4, x5);

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(a) {
  if (a % 2 == 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}
var num = prompt("Enter number");
isEven(num);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(a) {
  if (a % 2 != 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}
var num = prompt("Enter number");
isOdd(num);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(a) {
  var x;
  if (a > 0) {
    x = a;
  } else {
    x = a * -1;
  }
  console.log(x);
}
var num = prompt("Enter number");
positive(num);

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function Fullname(x, y) {
  console.log(x + " " + y);
}
var n1 = prompt("Enter first name:");
var n2 = prompt("Enter last name:");
Fullname(n1, n2);

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(n1, n2, n3, n4, n5) {
  var sum = 0;
  var avg;
  sum = n1 + n2 + n3 + n4 + n5;
  avg = sum / 5;
  console.log(avg);
}
var x1 = Number(prompt("Enter mark:"));
var x2 = Number(prompt("Enter mark:"));
var x3 = Number(prompt("Enter mark:"));
var x4 = Number(prompt("Enter mark:"));
var x5 = Number(prompt("Enter mark:"));
average(x1, x2, x3, x4, x5);

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber() {
  console.log(Math.random());
}
randomNumber();

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(x, y) {
  console.log(Math.random(x, y));
}
var n1 = Number(prompt("Enter number:"));
var n2 = Number(prompt("Enter number:"));
randomBetweenNumbers(n1, n2);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(x) {
  if (x >= 95 && x <= 100) {
    console.log("A");
  } else if (x >= 85 && x <= 94) {
    console.log("B");
  } else if (x >= 70 && x <= 84) {
    console.log("C");
  } else if (x >= 50 && x <= 96) {
    console.log("D");
  } else if (x >= 0 && x <= 49) {
    console.log("F");
  }
}
var n1 = Number(prompt("Enter Mark:"));
scoreInUniversty(n1);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

var x = 0;
function counter() {
  x++;
  console.log(x);
}
counter();

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter() {
  x = 0;
  console.log(x);
}
resetCounter();
