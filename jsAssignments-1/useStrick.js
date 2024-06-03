 ////###"useStrick"
        //1.What is a useStrick?
        //Ans)In JavaScript use strict is a statement that enables strict mode.When you include use strict at the beginning of a script or a function it enforces better coding practices and catches common errors. It helps to avoid accidental mistakes and encourages writing cleaner more reliable code.

//// 18. Practical Question:

    //1.Write a script that demonstrates the effect of using `"use strict"`. Show what happens when you try to use an undeclared variable with and without `"use strict"`.

//// Without "use strict"

// Assigning value to an withOutVar
// withOutVar = 10;

// Accessing the withOutVar
// console.log(withOutVar);
//Without strict mode: JavaScript allows the code to execute without raising any errors.


// With "use strict"
// 'use strict';
// Assigning value to an num
//  num= 5;

//  Accessing the num (Error will be caught)  with "use strict", JavaScript throws an error when trying to assign a value to or access an num
// console.log(num);



// 20. Using All Loop Types:
//     - Create a program that uses a `for` loop to iterate from 1 to 20, a `while` loop inside it to print numbers until 10, and a `nested loop` to create a pattern like:

// Using all loop types
// Using for loop to iterate from 1 to 20
// console.log("Using for loop to iterate from 1 to 20:");
// for(let i=1;i<=20;i=i+1){
//     // console.log(i);
//     // Using while loop to iterate from 1 to 10
// console.log("Using while loop to iterate from 1 to 10:");
// let j=1;
// while(j<=10){
//     console.log(j);
//     j++;
// }
// }

// // Using nested for loops to print the pattern
// console.log("nested for loops to print the pattern");
// Outer loop for rows
// for (let i = 1; i <= 10; i++) { 
//     // empty string for the pattern to store the pattern
//     let pattern = '';
//     // Inner loop for columns
//     for (let j = 1; j <= i; j++) { 
//          // Add the current row number to the pattern
//         pattern += i;
//     }
//     // Print the pattern for the current row
//     console.log(pattern); 
// }

// #### Topic 2: Object Properties
// 4. Modifying Object Properties:
//  Change the `age` property of the `student` object to a new value. Print the updated object.

//object properties of student
let student={
    name:`ashok`,
    age:22,
    grade:`A`
};
// printing current age
console.log(student.age)
//new value og age
student.age=23;
console.log(student.age)
//Print the updated object
console.log(student)