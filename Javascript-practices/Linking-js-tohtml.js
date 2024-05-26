//Javascripts Basic concepts
////////////
// Data Types
// -----------------

// 1. Primitive Data Types
// 2. Abstract Data Types
// 3. Misc Data Types


// 1. Primitive Data Types in that there a three types?
// 1.String ex:("sai") ('sai') (`sai`)
// 2.Numbers ex:(0 to 9)
// 3.Boolean ex:(True or False)


// 2. Abstract Data Types
//  1. Arrays
//  2. Functions
//  3. Object

// 3. Misc Data Types
// 1. Null
// 2. Undefined 


// Displaying The Data / Value
// ****Primitive Data Types
// ---------------------------
// 1.string methods
// console.log("sai");
// console.log('narendra');
// console.log(`ashok`)
// console.log(`{
//     sai is a good boy
//     he studys well 
//     and he got good marks in phy
// }`)

//  2.Numbers 
// console.log(1234)

// 3.Boolean 
// console.log(true);


///////Identifiers
/*
    1. Start with either a - z, A - Z, _, $
    2. Only _, $ can used in Declaring of Identifiers
    3. No Spaces are Allowed
    4. Can be even 0 - 9 from the Second Character 
    5. Can be a Combination of Lowercase & Uppercase Characters

    eg., fullname, FULLNAME, fullName, _selfExecution, $simplifyConcept, my_Book
*/

/////////keywords
//  const,let,class,var,Function,typeof


////////////////
// Declaring the Variables
// syntax: keyword identifierName; (or) keyword identifierName = itsValue;
/**
 * var, let and const * 
 */


// Declaring the Variables using Keyword 'let',const
// let fullName=`narendra sai`;

// let subject="maths";

// let marks=50;

// let _name= true;

// let my_Book = 'poems';

// let $simplifyConcept= `narendra is a good boy`;

// let salary_Credited = 23578.88;

// const num=10.5;
// const fullName=`narendra sai`
// const lastName=`Garlapati`

///////////
///// 1.concateing mean to join the words 
//// 2.And to find the data type of a variable we use the keyword is typeof
// let fullName=`narendra sai`;
// let dob=2001
// console.log("my name is "+ fullName);
// let salary_Credited = 1000;
// console.log(`my salary is credited per 1 day is `+ salary_Credited +' '+ `Rupess`);
// console.log(`my salary is creadited per 1 day is ${salary_Credited} rupess`);
// console.log(`my fullname is ${fullName} garlapati`);
// console.log(`fullname `+fullName+`, typeof fullname:`+ typeof fullName);
// console.log(`my dataofbirth `+dob+ `,typeof bod:`+ typeof dob);
// console.log(fullName+` `+lastName)


////////////
// Basic Operators
// opertors= `+,-,*,/,**`
// Math Operators
// using '+' operator
// const age= 2024;
// const now= age+2001;
// console.log(`my age of present days is ${now}`);

// using '-' operator
// const current_age=2024;
// const now_age=current_age-2005;
// console.log(`my age at present day is:${now_age} years old!`);

//////////////// const ddd
// Assignment Operators: +=, -=, *=, /=
// let x=10/5;
// x= x/10
// console.log(x)

// let num=20+5;
// num+=5;
// console.log(num)

// // Incrementing & Decrementing Operators: ++, --
// let num=10;
// let x=num++;
// console.log(x)

// let x=12;
// let y=++x;
// console.log(y)

// let y=8;
// let x=--y;
// console.log(x)

////////////////
// Comparison Operators: ==, !=, ===, !==, <, >, <=, >=
// comparsion operators are use from to compare the values
//  for example

// const age=20;
// const age1=20;
// console.log(age==age1);

// const age=21;
// const age1=20;
// console.log(age>=age1);

////////////////
// Operator Precedence
// multiplication(*) and division hava a higher precedence then add and sub 

// const now=2024;
// const age_sai=now-2001
// const age_vahana=now-2005
// console.log(age_sai)
// console.log(age_vahana)
// console.log(now-2001>now-2005);

// let x,y;
// x=y=5*5-5
// console.log(x,y)

// let x=5*5+5;
// console.log(x)

////////////////
// Taking Decisions: if / else statements

// let x = 30;
// let y = 25;
// if (x == y) console.log("print no")
// else {
//     console.log("no")
// }

// const age=2024;
// const present_age=2001;
// if (age-present_age){
//     console.log(`21`)
// } else{
//     console.log(`present not equal to present age  `)
// }

// const age=2001

// if(age>2024){
//     console.log(`my age is 24`);
// } else{
//     const num=2024-age;
//     console.log(`my age is equal`);
// }

// const birthYear = 2012;

// let century;

// if (century <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

////////////////
// Type Conversion and Coercion

// Conversion string to number
//  to convert the string to number the keyword is Number here "N" must be captail

// const age="23";
// console.log(age, typeof age);
// convert to Number using keywork "Number"
// console.log(Number(age));
// console.log(Number(age)+2);
//convert to string using keywork "String"
// console.log(String(age))

// console.log(Number('Jonas'));
// console.log(typeof NaN)
// nan mean "Not a Number"
// Coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// here code explaining n="1"+1=> here is code is saying that 11 
// let n = "1" + 1;
// n=n-1;
// console.log(n, typeof n);

// let n = "1" + 1;
// n=n+1;
// console.log(n, typeof n);


// prompt key word work to select by user?

// const favNum = Number(prompt(`what is my favNumber?`));
// console.log(favNum)
// console.log(typeof favNum)

// if(favNum == 9) {
//     console.log("print the number 9");
// } else if(favNum == 10){
//     console.log("then print the favNum 10")
// } else if(favNum == 11){
//     console.log("then print a favNum 11")
// } else{
//     console.log("favNum is not in this those are 9,10,11")
// }

////////////////
// Logical Operators && this a and operator,,|| this a or operator
// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if(hasDriversLicense || hasGoodVision) console.log(`sai is a good drive`)
//     else console.log("no")


// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

////////////////
// The Switch Statement

// const day=`sat`;
 
// switch (day){
//     case `monday`:
//         console.log(`I am go to temple on monday!`);
//         break;

//     case `The`:
//         console.log(`tus i am go to offic`);
//         break;

//     case `wed`:
//         break;
//     case `tus` :
//         console.log(`want for fri day`) ;
//         break;
//     case `fir`:
//         console.log(`want for weekoff`)
//         break;
//     case `sat`:
//         console.log(`work full load`)
//         break;

//     case `sun`:
//         console.log(`cool`)

//     default:
//         console.log(`not valid days`)

// }

// if (day==`monday`){
//     console.log(`eee`);
// } else if(day == `thu`){
//     console.log(`hh`)
// }else if(day == `wed`){
//     console.log(`kk`)
// }else if(day == `tue`|| day == `fir`){
//     console.log(`kshdk`)
// }else if(day == `sat`){
//     console.log(`hhh`)
// }else if(day == `sun`){
//     console.log(`hs`)
// }else{
//     console.log("Not a Valid Day");
// }

//////////////
// Statements and Expressions
// 2 + 6
// 1996
// true && false && !false

// if (23 > 10) {
//         const str = '23 is bigger';
//     }
// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);



////////////////
// // The Conditional (Ternary) Operator
// const age = 22;
// age >= 18 ? console.log('I like to drive a car') : console.log('I am not eligible to drive');


//////////
// 'use strict';

////////////////
// Activating Strict Mode
// let hasDriversLicense = true;
// let passTest = false;

// if (!passTest) { 
//     hasDriversLicense = true;
//     console.log(hasDriversLicense);
// }

// if (hasDriversLicense) console.log('I can drive');

// const interface1 = "Audio";
// const private1 = 655;

// console.log(interface1);

//////////
// function

// let age = function my_firstName(a,b){
//     return a*b;
// }
// console.log(age(5,5))

// const name_= function my_name(name){
//     return name;
// }
// console.log(name_(`my name is narendra`));

// Calculate the product of two numbers, and return the result:
// let num =(2,2);
//  function sai(a,b){
//     return a*b;
//  }
//  console.log(sai(num,num))


