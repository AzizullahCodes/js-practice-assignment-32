// js-practice-assignment-32
// _________________________________________________________________________
// ques no 1
//  Question:
// Create a JavaScript variable named userName and assign it any string you
// like (for example: "ali raza").
// Convert this string:
// to uppercase
// to lowercase
// Capitalize only the first letter, and keep the rest lowercase.
// Display all three results using console.log().
// __________________________
// ans 
/*let userName = 'ali raza';
    userName = userName.toUpperCase();
    console.log(userName);
    userName = userName.toLowerCase();
    console.log(userName);
    let first = userName.charAt();
    console.log(first);
       first = first.toUpperCase();
       console.log(first);
       other1 = userName.slice(1,3);
       console.log(other1);
       let firstName = first + other1;
       console.log(firstName);
       let otherchar = userName.charAt(4);
       console.log(otherchar);
       let otherOther = userName.slice(5);
       console.log(otherOther);
         otherchar = otherchar.toUpperCase();
       let lastName = otherchar + otherOther;
       console.log(lastName);
       let fullName = firstName + ' ' + lastName;
       console.log(fullName);*/
    //    ___________________________________________________________________________________
    // ques no 2
    // Given the string:
// let sentence = "JavaScript is fun to learn";
// Extract the word "fun" using substring() or slice().
// ✅ Expected Output:
// fun
// ___________________________
// ans 
// let sentence = 'JavaScript is fun to learn';
// console.log(index);
// let Output = sentence.slice(14,17);
// console.log(Output);
// __________________________________________________________________________________
// ques no 3
//  Extract Domain Name
// Question:
// Given the email address:
// let email = "user@example.com";
// Extract only the domain name (the part after "@").
// ✅ Expected Output:
// example.com
// _________________________
// ans 
// let email = "user@example.com";
//  let domain = email.slice(5);
//  console.log(domain);
// _______________________________________________________________________________________
// ques no 4
//  You have a string variable:
// let sentence = "Learning JavaScript is fun!";
// 2️⃣ Find and display in the console the character at:
// index 0
// index 5
// index 10
// the last index
// Use charAt() or bracket [] notation.
// _____________________
// ans 
// let sentence = "Learning JavaScript is fun!";
// let firstChar = sentence.charAt(0);
// console.log(firstChar);
// let secondChar = sentence.charAt(5);
// console.log(secondChar);
// let thirdChar = sentence.charAt(10);
// console.log(thirdChar);
// ___________________________________________________________________________________
// ques no 5
// find character by bracket notation [];
// ________________
// ans 
// let word = 'love';
// let secondChar = word[1];
// console.log(secondChar);
// _________________________________________________________________________________
// ques no 6
// Replace Character in a String
// Question:
// Write a JavaScript program that:
// Takes a string: "JavaScript is cool"
// Replaces all occurrences of the letter "o" with the letter "0" 
// (zero, not capital O).
// Prints the new string in the console.
// ___________________________
// ans 
// let string = 'JavaScript is cool';
//     string = string.replaceAll('o',0);
//     console.log(string);
// _____________________________________________________________________________________
// ques no 7
// Replace Word in a String
// Question:
// Write a JavaScript program that:
// Takes this string: "I love frontend development"
// Replaces the word "frontend" with "backend"
// Prints the updated string in the console.
// ✅ Expected Output:
// I love backend development
// __________________________
// ans 
// let string = "I love frontend development";
//     string = string.replace('frontend','backend');
//     console.log(string);
// _______________________________________________________________________________________
// ques no 8
// write aJavaScript program that does the following:
// Create a variable number and store the value 7.8654.
// Round this number using:
// Math.round()
// Math.floor()
// Math.ceil()
// Number.toFixed(2)
// Number.toPrecision(3)
// Print all the results to the console with clear labels.
// ____________________
// ans 
// let number = 7.8654;
// .round
    // number = Math.round(number);
    // console.log(number);
    // .floor
    // number = Math.floor(number);
    // console.log(number);
    // .ceil
    // number = Math.ceil(number);
    // console.log(number);
// .toFixed
// number = number.toFixed(2);
// console.log(number);
// number = number.toPrecision(3);
// console.log(number);
// _________________________________________________________________________________
// ques no 9
// 
// Write a JavaScript program that does the following:
// 1️⃣ Create a variable named value and store 9876.54321 in it.
// 2️⃣ Use .toPrecision() to format this number with:
// 2 significant digits
// 4 significant digits
// 6 significant digits
// 3️⃣ Print each result to the console with a clear label.
// 4️⃣ Also, print the original value for comparison.
// ✅ Expected 
// Original value: 9876.54321
// toPrecision(2): 9.9e+3
// toPrecision(4): 9877
// toPrecision(6): 9876.54
// ___________________________
// ans 
// let value = 9876.54321;
    // value = value.toPrecision(2);
    // console.log(value);
//    value = value.toPrecision(4);
//    console.log(value);
// value = value.toPrecision(6);
// console.log(value);
// _______________________________________________________________________________________
// ques no 10
// 
// Write a JavaScript program that:
// Generates a random integer between 1 and 50 (inclusive).
// Generates a second random integer between 100 and 200 (inclusive).
// Outputs both random numbers.
// Outputs their sum.
// ✅ Expected Output Example
// Your program should print something like this in the console 
// (values will be different each time because they’re random):

// First random number (1 to 50): 27
// Second random number (100 to 200): 145
// Sum of both numbers: 172
// _______________
// ans 
// let random = Math.random()*50;
//     random = random + 1;
//     random = Math.floor(random);
// console.log(random);
// let random2 = Math.random()*200;
//     random2 = random2 + 100;
//     random2 = Math.floor(random2);
//     console.log(random2);
//     let sum = random + random2;
//     console.log(sum);
// ___________________________________________________________________________________
// ques no 11
// converting string to number
// _____________
// ans 
// let number = '23.7865';
// console.log(number);
// console.log(typeof number);
//     number = + number;
//     console.log(number);
//     console.log(typeof number);
//    number = parseInt(number);
//    console.log(number);
//    console.log(typeof number);
//  number = parseFloat(number);
//  console.log(number);
//  console.log(typeof number);
// number = Number(number);
// console.log(number);
// console.log(typeof number);
// _________________________________________________________________________________________
// ques no 12
// converting number to string
// ___________
// ans 
// let number = 34.3452;
// console.log(number);
// console.log(typeof number);
//  number = number.toString();
//  console.log(number);
//  console.log(typeof number);
//    number = String(number);
//    console.log(number);
//    console.log(typeof number);
// number = number + '';
// console.log(number);
// console.log(typeof number);