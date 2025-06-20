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
// __________________________________________________________________________________
// ques no 13
// Create a Date object for the current date and time.
// What output to show:
// Log the full date and time to the console.
// ___________________
// ans 
// let current =  new Date();
//    console.log(current);
//    let time = current.toLocaleTimeString();
//    console.log(time);
//    let date = current.toLocaleString();
//    console.log(date);
//    let dt = current.toLocaleDateString();
//    console.log(dt)
// ___________________________________________________________________________________
// ques no 14
// 
// Create a Date object for December 25, 2025.
// What output to show:
// Log only the year, month, and day separately.
// ____________________
// ans 
// let current = new Date();
// let required = new Date('25 december 2025');
// console.log(required);
// let year = required.getFullYear();
// console.log(year);
// let month = required.getMonth() + 1;
// console.log(month);
// let dayName = ['sun','mon','tues','wed','thurs','friday','sat'];
// let day = required.getDay();
// let day_Name = dayName[day];
// console.log(day_Name);
// _________________________________________________________________________________
// ques no 15
// Add 7 days to today’s date using setDate() and show the new date.
// What output to show:
// Log the updated date in a readable format.
// ____________
// ans
// let current = new Date();
// current.setDate(current.getDate() + 7);
// console.log(current);

//    _______ ________________________________________________________________________
// ques no 16
// Get the number of milliseconds since January 1, 1970, using getTime().
// What output to show:
// Log that number.
// ____________________
// ans 
// let currentt = new Date();
// let milliseconds = current.getTime();
// console.log(milliseconds);
// let year = milliseconds / (1000*60*60*24*30*12);
// console.log(year)
// _______________________________________________________________________________________
// ques no 18 
// Create a Date object for now.
// What output to show:
// Log the number of days since January 1, 1970. (Hint: divide getTime()
//  by 1000 × 60 × 60 × 24)
// ___________
// ans 
// let current = new Date();
// let milliseconds = current.getTime();
// console.log(milliseconds);
// let now = milliseconds / (1000 * 60 * 60 * 24);
// console.log(now);
// _________________________________________________________________________________
// ques no 19
// .setDay();
// _____
// ans 
// let d = new Date();
// d.setFullYear(2001);
// console.log(d);
//  d.setMonth(11);
//  console.log(d)
// d.setDate(25);
// console.log(d);
// d.setHours(10);
// console.log(d)
// d.setMinutes(40);
// console.log(d);
// d.setSeconds(43);
// console.log(d);0
// ______________________________________________________________________________________
// ques no 20
// Create a function that displays whether the current time is AM or PM.
// ✅ Output: AM or PM.
// function time(){let current = new Date();
//     let time = current.getHours();
//     console.log(time);
//     if(time < 12){console.log(time+' ' + 'AM')}
//     else{console.log('PM')}
// }
// Time();
// _________________________________________________________________________________________
// ques no 21
// Create a function that takes a date string (like "2025-06-19") and 
// returns the month name ("June").
// ✅ Output: Show the month name.
// function showMonth(){let current = new Date();
//     let required = new Date('19 June 2025');
//     console.log(required);
//     let monthName = ['january','February','March','April','May','June','July','August','September','October','November','December'];
//     let month = required.getMonth();
//     console.log(month);
//     let nameOfMonth = monthName[month];
//     console.log(nameOfMonth)
// }
// showMonth()
// _____________________________________________________________________________________
// ques no 22
// know your age in years
// __________________
// ans 
// let current = new Date();
// let required = new Date('09 09 1992');
// let currentInSeconds = current.getTime();
// console.log(currentInSeconds);
// let requiredInMilliseconds = required.getTime();
//  console.log(requiredInMilliseconds);
//  let neededMilliSeconds = currentInSeconds - requiredInMilliseconds;
//  console.log(neededMilliSeconds);
//  let result = neededMilliSeconds/(1000 * 60 * 60 * 24 * 30 * 12);
//  console.log(result);
// ______________________________________________________________________________________
// ques no 23
// Change Text
// Task:
// Create a paragraph with some text.
// Add a button.
// When you click the button, change the paragraph text to "Hello JavaScript!".
// function changeText(){document.getElementById('para').innerHTML= '<h1> i love javascript</h1>';
   
// }
// ______________________________________________________________________________________
// ques no 24
// Show Current Year
// Task:
// Create an empty <p> element with an ID.
// Add a button.
// When you click the button, use JavaScript to insert the current year
// inside the <p>.
// ______________________
// ans 
// function current(){let currenYear = new Date();
//     let year = currenYear.getFullYear();
//     document.getElementById('para').innerHTML = year;
// }
// _________________________________________________________________________________
// ques no 25
// Math Result
// Task:
// Create an empty <div> with an ID.
// Add a button.
// When you click the button, show 10 + 5 = 15 inside the <div>.
// ______________
// ans 
// function result(){let sum = 10 + 5;
//     document.getElementById('div').innerHTML = sum;
// }
// ___________________________________________________________________________________
// ques no 26
// Change Color Text
// Task:
// Create a <h1> with text like “Welcome!”
// Add a button.
// When you click the button, change the <h1> text
//  to “Welcome to JavaScript” and also change its color
//  using inline style.
// ____________
// ans 
//  function changeText()
//  {document.getElementById('h').innerHTML = 'Welcome to javascript';
//     document.getElementById('h').style.color = 'blue';
//  }

// _________________________________________________________________________________________
// ques no 27
// Multiple Changes
// Task
// Create two <p> elements with different IDs.
// Add a button.
// When you click the button:
// Change the first <p> text to "First changed!"
// Change the second <p> text to "Second changed!"
// _____________
// ans 
// function changetext(){document.getElementById('p1').innerHTML ='First changed';
//     document.getElementById('p2').innerHTML = 'second changed';

// }
// __________________________________________________________________________________
// ques no 28 
// Show Your Name
// Task:
// Create an empty <p> with an ID.
// Add a button.
// When you click the button, show your name inside the <p>.
// ____________
// ans 
// function showName(){document.getElementById('pp').innerHTML = 'Azizullah';
//     document.getElementById('pp').style.color = 'red';
// }
// __________________________________________________________________________
// ques no 29
// Double a Number
// Task:
// Create an empty <div> with an ID.
// Add a button.
// When you click the button, display 5 × 2 = 10 in the <div>.

// ____________________
// ans 
// function doubleNumber(){document.getElementById('div').innerHTML = '5 * 2 = 10';}
// ___________________________________________________________________________________________
// ques no 30
// Create a <p> with some text (e.g., “This is visible text.”)
// Add a button.
// When you click the button, make the <p> text empty using innerHTML = "".
// _____________
// ans 
// function emptyText(){document.getElementById('pp').innerHTML = '';}
// ____________________________________________________________________________________
// ques no 31
// Change Two Elements
// Task:
// Create a <h2> and a <p>, each with its own ID.
// Add a button.
// When you click the button:
// Change <h2> text to "Updated Heading!"
// Change <p> text to "Updated Paragraph!"
// ___________________
// ans 
// function changeText(){document.getElementById('hh').innerHTML = 'Updated Heading!';
//     document.getElementById('pp').innerHTML = 'Updated paragraph!';
// }
// ______________________________________________________________________________
// ques no 32
// change text
// ___________
// ans
// function changeText(){document.getElementById('p').innerHTML = 'pakistan';}
// ____________________________________________________________________________________________
// ques no 33
// show date
// ans 
// __________________
// function showDate(){let current = new Date();
//     let x = current.toLocaleDateString();
//     document.getElementById('div').innerHTML = x;
// }
// ____________________________________________________________________________________
// ques no 34
// change background color
// _______________
// ans 
// function changeColor(){document.getElementById('div').style.color = 'green';
//     document.getElementById('div').style.fontSize = '50px';
// }
// _______________________________________________________________________________
// ques no 35
// change greeting
// ___________
// ans 
// function greet(){document.getElementById('p').innerHTML = 'Hello,Aziz';}
// ______________________________________________________________________________________
// ques no 36
// hide and show 
// ___________
// ans 
// function hide(){document.getElementById('p').innerHTML = '';}
// function show(){document.getElementById('p').innerHTML = 'what are you doing!'}
// ______________________________________________________________________________________
// ques no 37
// traffic signal
// ______________
// ans 
// function yel(){document.getElementById('p').innerHTML = 'Start bike';}
// function gre(){document.getElementById('p').innerHTML = 'ride bike';}
// function red(){document.getElementById('p').innerHTML = 'stop';}
// ______________________________________________________________________________________
// ques no 38
// change heading
// ___________________
// ans
// function heading(){document.getElementById('p').innerHTML = '<h1>Aziz</h1>';}
// _____________________________________________________________________________________
// ques no 39
// font size decreaser
// ___________
// ans 
// function size(){document.getElementById('p').style.fontSize = '50px';}
// ________________________________________________________________________________________
// ques no 40
// show random numbers
// ___________________
// ans 
// function random(){let rand = Math.floor((Math.random() * 100)+ 1);
//     console.log(rand);
//     document.getElementById('div').innerHTML = Math.floor((Math.random() * 100)+ 1);
//     document.getElementById('div').style.fontSize = '50px';
//     document.getElementById('div').style.color = 'green';
// }
// ____________________________________________________________________________________
// ques no 41
// calculator
// ______________
// ans
// function calculate(){
//     let sum = 2 + 4;
//     document.getElementById('div').innerHTML = sum;
// }
// ________________________________________________________________________________
// ques no 42
// 
// ____________
// ans 
// function collector(){document.getElementById('inp').value;
//     let b = document.getElementById('inp').value;
    
//     document.getElementById('receiver').innerHTML = b;
// }
// ______________________________________________________________________________________
// ques no 43
// 
// Create an HTML input field with id="username" and a button. When you click 
// the button, get the value from the input field and show it inside an <h2>
//  element.

// Required Output:
// If you type Ali in the input and click the button, the <h2> should display:
// Hello, Ali
// ___________________
// ans 
// function collector(){let x = document.getElementById('username').value;
//     document.getElementById('hh').innerHTML = 'Hello,' +' ' + x; 
// }
// ______________________________________________________________________________________
// ques no 44
// Create two input fields:
// One with id="num1"
// One with id="num2"
// Add a button. When you click the button, get both values, add them 
// (as numbers), and display the result inside a <p> element.

// Required Output:
// If num1 is 5 and num2 is 7, the <p> should show:
// Result: 12
// __________________
// ans 
// function calculator(){let a = +(document.getElementById('num1').value);
//     let b = +(document.getElementById('num2').value);
//     let sum = a + b;
//     document.getElementById('pp').innerHTML = sum;
// }
// _______________________________________________________________________________________
// ques no 45
// 
// Create an input field with id="colorInput" and a button. When you click the 
// button, get the input value and change the background color of a <div> 
// with id="colorBox" to that value.

// Required Output:
// If you enter red in the input and click the button, the <div> should turn 
// red.
// _____________________
// ans 
// function getValue(){let a = document.getElementById('colorInput').value;
//     document.getElementById('colorBox').style.background = a;
// }
// ____________________________________________________________________________________
// ques no 46
// Create an input field with id="message" and a button. When you click the 
// button, get the value and show an alert with this message:
// You typed: [your input]
// Required Output:
// If you type Welcome!, the alert should say:
// You typed: Welcome!
// _______________
// ans 
// function showAlert(){let a = document.getElementById('message').value;
//     alert('you type : ' + a);
// }
// ____________________________________________________________________________________
// ques no 47
// Create three input fields with id="firstName", id="lastName", and id="age". Add a button. When you click the button, show all the values together inside a <div> in this format:
// Name: [firstName] [lastName], Age: [age]
// Required Output:
// If you enter Ali, Khan, and 25, the <div> should show:
// Name: Ali Khan, Age: 25
// ___________________________
// ans 
// function informCollector(){let a = document.getElementById('firstName').value;
//     let b = document.getElementById('lastName').value;
//     let c = document.getElementById('age').value;

//     document.getElementById('d').innerHTML = 'Name :'+ a +' ' + b + ' ' + c;
// }
// _______________________________________________________________________________________
// ques no 48
// Change Text Color
// Create: A paragraph with some text.
// When: You hover the mouse over it (onmouseover), change its text color to 
// red.
// When: You move the mouse away (onmouseout), change the color back to black.
// _______________
// ans 
// function colorRed(){document.getElementById('pp').style.color = 'red';
//     document.getElementById('pp').style.fontSize = '40px'
// }
// function colorBack(){document.getElementById('pp').style.color = '';
//     document.getElementById('pp').style.fontSize = '';
// }
// ______________________________________________________________________________________
// ques no 49
