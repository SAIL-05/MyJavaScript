// console.log(200); 

// let myAge = 34; ** variable with value of number
// let myName = "Michael"; ** variable with value of string

// myAge = 65; **number

// console.log(myAge);
// console.log(myName);

// console.log(myName,"is", myAge);


// <-- Arrays -->
// const myArray = [
//     "Amaka", "James", 356, true,
//     {name:"John"},[2, 4,6]
// ];
// console.log(myArray);



// <-- Coditions with Alerts and Prompts -->

// if else condition:

// if (45 > 67){
// console.log("45 is greater than 67");
// } 
// else{
//     console.log("67 is greater than 45");
// }



// Exercise : ***
// odd number or even number

// let number = parseInt(prompt("Enter a number here"));
// if(number % 2 === 0){
//     alert(`${number} is an even number`);
// } else {
//     alert(`${number} is an odd number`);
// }


// *** the prompt is used to input data
// *** the alert is used to display message.
// alert(`${number} is an even number`)
// *** everything written inside a prompt("") is a string, even if it is numbers that are written into the prompt.
// *** the parseInt is used to convert a string "" into a Number.
// parseInt(prompt("Enter a number here"))
// *** the back-tick `` is used to write multiple strings and values.
// *** the dollar sign with braces ${} is used to hold a variable which will be added into a statement.
// statement (`${variable} string`)


// let userNumber = parseInt(prompt("Enter a number"));

// if (userNumber > 0) {
//     alert (`${userNumber} is a positive number`);
// } else if (userNumber === 0) {
//     alert (`${userNumber} is invalid`);
// } else if (isNaN(userNumber)) {
//     alert ("This is not a number");
// } else {
//     alert(`${userNumber} is a negative number`);
// }

// *** the isNaN (is Not a Number) will return the message if the value inputed isn't a number.


// Exercise : ***
// the greater of two numbers

// let num1 = parseInt(prompt("Enter your first number"));
// let num2 = parseInt(prompt("Enter your second number"));

// if (num1 > num2){
//     alert (`${num1} is greater than ${num2}`);
// } else if (num2 > num1){
//     alert (`${num2} is greater than ${num1}`);
// } else if (num1 === num2){
//     alert ("The two numbers are equal");
// } else if (isNaN(num1)||isNaN(num2)){
//     alert ("Only numbers are Valid");
// }


// Exercise : ***
// Score report

// let score = parseInt(prompt("Enter your score"));

// if (score > 100 ){
//     alert (`This score is invalid`);
// } else if (score < 0 ){
//     alert (`This score is invalid`);
// } else if (isNaN(score)){
//     alert (`Only number scores are Valid`);
// } else if (score <= 39 ){
//     alert (`Your score is ${score}. Your grade is " F "`);
// } else if (score <= 44 ){
//     alert (`Your score is ${score}. Your grade is " E "`);
// } else if (score <= 49 ){
//     alert (`Your score is ${score}. Your grade is " D "`);
// } else if (score <= 59 ){
//     alert (`Your score is ${score}. Your grade is " C "`);
// } else if (score <= 69 ){
//     alert (`Your score is ${score}. Your grade is " B "`);
// } else if (score >= 70 ){
//     alert (`Your score is ${score}. Your grade is " A "`);
// } else {
//     alert (`Field can not be empty`);
// }



//Exercise:
// Body Mass Index Calculator : weight / height * height

// let bW = parseFloat(prompt("enter your weight"));
// let bH = parseFloat(prompt("enter your height"));
// let bMI = (bW / (bH * bH));

// if (isNaN(bW)||isNaN(bH)){
//     alert (`wrong input value`);
// } else if (bW < 0 && bH > 0){
//     alert (`body weight can not be a negative number`);
// } else if (bW == 0){
//     alert (`invalid body weight`);
// } else if (bH < 0 && bW > 0){
//     alert (`body height can not be a negative number`);
// } else if (bH == 0){
//     alert (`invalid body height`);
// } else {
//     alert (`Your body weight is ${bW}, Your body height is ${bH}, Your BMI is ${bMI}`);
// }



// <-- Arrays[]

// let NameBox = ["ife", "seun", "david", "ayo", "charles"];

// console.log (NameBox)
// console.log (NameBox.length)

// console.log(NameBox.push('zion'));
// console.log(NameBox); 
// // the push adds a value to the end.

// console.log(NameBox.pop());
// console.log(NameBox);
// // the pop removes a value from the end

// console.log(NameBox.unshift("drake"));
// console.log(NameBox);
// // the unshift adds a value to the beginning. 
// // you have to specify the value or item to be added into the list.

// console.log(NameBox.shift());
// console.log(NameBox)
// // the shift removes a value from the beginning

// console.log(NameBox.splice(2,0,'joseph'));
// console.log(NameBox);
// // the splice(2,0, 'joseph') adds a value of joseph between seun(1st index) and david(2nd index) in the list, 
// // starting from the 2nd index but deleting nothing from the list.

// console.log(NameBox.splice(3,1,'isaac'));
// console.log(NameBox);
// // the splice(3,1,'isaac') adds a value of isaac between david(3rd index) and ayo(4th index) in the list, 
// // starting from the 3rd index(david) but also deletes one value from the list which is david, counting from the third index.

// console.log(NameBox.splice(3,2,));
// console.log(NameBox);
// // the splice(3,2) removes two values from the center, but adds no item or value to the list. 
// // starting from the third index and counting out two items from the third index.

// console.log(NameBox.includes('seun'));
// console.log(NameBox.includes('david'));
// // the includes is a boolean which checks if the value is in the array list.
// // it works like a search command.
// // if the value is there, it returns true.
// // if the value isn't there, it returns false.

// console.log(NameBox);
// console.log(NameBox.slice(0,2));
// // the slice calls out the value from the list.
// // the slice of (0,2) means it starts from the index of 0 - "ife" , and stops before it gets to the index of 2 - "david".

// console.log(NameBox.join());
// console.log(NameBox.join('-'));
// console.log(NameBox.join(' / '));
// console.log(NameBox.join(' : '));
// // the join brings all the values together.
// // the values assigned to the join is placed between the values or items of the array to be joined.




// let myName = "Michael John";
// console.log(myName);
// console.log(myName.replace("John","Moses"));
// // the replace is used to change a value from the list with another.

// console.log(myName.startsWith('John'));
// // returns false
// console.log(myName.endsWith('John'));
// // returns true




// // <-- Objects {}
// let studentData = {name : 'ife' , score : '100'};

// console.log(studentData['score']);
// console.log(studentData.score);

// console.log(studentData['name']);
// console.log(studentData.name);

// console.log (studentData.name = 'Ope');
// // this changes the value for student data name to Ope from ife.

// console.log(studentData.score = '150');
// // this changes the value for score to 150 from 100.

// console.log(studentData);
// // student data now carries the new values.


// // <-- Objects inside an Array [{}]
// let scoreboard = [1,2,3,4,{name :'ife', age :'50'}];
// console.log(scoreboard);
// console.log(scoreboard[4].name);
// console.log(scoreboard[4]['name']);
// console.log(scoreboard[4]['age']);
// console.log(scoreboard[4].age);
// console.log(scoreboard);
// console.log (scoreboard[2]);
// console.log(scoreboard.length);

// // Number Methods
// let num = 42.678;
// let strNun = "89.56";

// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed());
// console.log(num.toFixed(2));
// console.log(num.toFixed(1));
// console.log(parseInt(strNun));
// console.log(parseFloat(strNun));
// console.log(isNaN('tretr'));
// console.log(isNaN('12345'));


// // Math mMethod
// console.log(Math.PI);
// console.log(Math.round(41.173));
// // the round approximates the figure to its nearest whole number.
// console.log(Math.floor(41.173));
// // the floor approximates the figure down to a whole number and returns 41.
// console.log(Math.ceil(41.1));
// // the ceil approximates the figure up to a whole number and returns 42.
// console.log(Math.max(12,6,7));
// // this returns 12
// console.log(Math.min(12,6,7));
// // this returns 6
// console.log(Math.pow(2,20));
// // this returns the value of 2 raised to the power of 20
// console.log(Math.sqrt(144));
// //  this returns the square-root of 144 which is 12

// console.log(Math.random());
// // returns random figures betweem 0 and 1


// <-- FUNCTIONS

// function myDet(name) {
//     console.log(name);
// }
// myDet("Samuel");
// myDet("Esther");


// function SumOftwoNumbers(num1 , num2) {
//     let result = num1 + num2;
//     console.log(result);
// } 
// SumOftwoNumbers(30 , 40);


// let SumOfThreeNumbers = function(num1 , num2 , num3) {
//     let result = num1 + num2 + num3;
//     console.log(result);
// } 
// SumOfThreeNumbers (30 , 40 , 25)


// function TakeUserNumber() {
//     let number = prompt('Enter your number');
//     if(number > 6){
//         console.log(`Number you inputed is ${number} and it is greater than 6`);
//     } else if(number == 6) {
//         console.log(`Number you inputed is ${number}`);
//     } else {
//         console.log(`Number you inputed is ${number} and is lesser than 6`);
//     }
// } TakeUserNumber();
   
// <----- Declaration FUNCTIONS

// function UserName(){
//     let nAme = prompt("Enter Your Name");
//     let check = (nAme.length);
//     console.log(`your name is ${check} characters long`);
// } UserName();

// <----- Expression FUNCTIONS
// let UserName = function(){
//     let nAme = prompt("Enter Your Name");
//     let check = (nAme.length);
//     console.log(`your name is ${check} characters long`);
// }; UserName();


// function maximum( num1,  num2, num3, num4){
//     console.log(Math.max(num1, num2, num3, num4));
// } ; maximum(20, 30, 76,15);


// function maximum(){
//     let numOne = prompt("Enter first number");
//     let numTwo = prompt("Enter second number");
//     let numThree = prompt("Enter third number");
//     let numFour = prompt("Enter fourth number");
//     console.log(`You inputed ${numOne},${numTwo},${numThree},${numFour}`)
//     console.log('Your maximum input is '+ Math.max(numOne , numTwo , numThree , numFour));
// }; maximum();


// function subTwoNumbers (num1 , num2){
//     let result = num1 - num2;
//     console.log(result);
// } subTwoNumbers(40 , 25);

// <----- ARROW FUNCTIONS

// const greetMe = () => {
// }; greetMe();


// let CheckEvenNumber = () => {
//     let userNumber = prompt('Enter any number');
//     if ((userNumber % 2) === 0){
//         console.log(`${userNumber} is an Even number`);
//     } else if(isNaN(userNumber)) {
//         console.log(`invalid input`);
//     } else {
//         console.log(`${userNumber} is an odd number`);
//     }
// };
// CheckEvenNumber()



// let Divide = () => {
//     let numOne = prompt('Enter first number');
//     let numTwo = prompt('Enter second number');
//     let total = numOne / numTwo
//     console.log(total);
// };
// Divide();


// let Divide = () => {
//     let numOne = prompt('Enter first number');
//     let numTwo = prompt('Enter second number');
//     if (numOne > numTwo){
//         console.log(numOne / numTwo);
//     } else if (numTwo > numOne){
//         console.log(numTwo / numOne);
//     }
// }; Divide();


// let CheckEvenNumber = () => {
//     let userNumber = prompt('Enter any number');
//     if ((userNumber % 2) === 0){
//         console.log(`${userNumber} is an Even number`);
//     } else if(isNaN(userNumber)) {
//         console.log(`invalid input`);
//     } else {
//         console.log(`${userNumber} is an odd number`);
//     }
// };
// CheckEvenNumber()



// let CheckHighestNumber = (numOne,numTwo,numThree,numFour) => {
//     numOne = prompt('Enter first number');
//     numTwo = prompt('Enter first number');
//     numThree = prompt('Enter first number');
//     numFour = prompt('Enter first number');
//     console.log(`You inputed ${numOne},${numTwo},${numThree},${numFour}`);
//     console.log('Your maximum input is '+ Math.max(numOne , numTwo , numThree , numFour));
// };
// CheckHighestNumber();


// let Rvrse = () => {
//     let usEr = prompt('Enter your name to be reversed');
//     console.log(usEr.split("").reverse("").join(""));
// }; Rvrse();



// let LongestWord = () => {
//     let Sentence = "My name is Michael John";
//     let EachWord = (Sentence.split(" "));
//     console.log(EachWord);

//     console.log(Math.max(EachWord.split(" ")[0].length , EachWord.split(" ")[1].length));
// }; LongestWord();










// <--- LOOPS ---->

// *** the FOR loops
// every loop has three parts: initializer , conditioner , increment/decrement

// function greetMe(){

// };
// greetMe();
// for(initializer , conditioner , increment/decrement){

// };


// function greetMe(){

// };
// greetMe();
// for( let i = 0; i < 15; i++){
// console.log(`this is the value of i`, i);
// };
// console.log(`we are running loops`);
// // this will continue to run from zero till it gets to 14, 


// for(let startIndex = 1; startIndex < 20 ; startIndex++){
//     if(startIndex % 2 === 0){
//         console.log(startIndex, ` is an even number`);
//     } else{
//         console.log(startIndex, ` is an odd number`);
//     }
// }

// for(let startIndex = 1; startIndex < 50 ; startIndex +=3){
//     if(startIndex % 2 === 0){
//         console.log(startIndex, ` is an even number`);
//     } else{
//         console.log(startIndex, ` is an odd number`);
//     }
// }


// for( let val = 5; val <= 20; val +=1.5 ){
//     console.log(`this is the value of val`, val);
// }

// let Score = [10, 18, 30, 42, 50, 60, 70, 75, 80, 90];
//     for(let i = 0; i < 10; i++){
//         console.log(`scores index of` ,i ,'is', Score[i]);
//     };


for(let i = 1; i <= 50; i+=5){
    console.log(i);
}











// // self-check ***


// (function (){
//     console.log("welcome");
// })();

// // ------>

// (function (firstName){
//     console.log("welcome " + firstName);
// })("Lawrence");

// // ------>

// (function Names( FirstName , LastName){
//     console.log("welcome " + FirstName + LastName);
// })("David", "Joseph");


// (function (lastName , firstName){
//     console.log(`welcome, ${lastName} ${firstName}`);
// })("Samuel", "Lawrence");

// // ------>

// let test = (function(){
//     let greet = "hello"
//     console.log(greet);
// })();

// // ------>

// (function(){
//     let firstName = "Lawrence";
//     // return firstName;
//     console.log(firstName);
// })();

// // ------>

// let print = (function(){
//     let midname = "Isaac";
//     return midname;
// })();
// console.log(print + " - this is the value of midname returned to 'print'");

// // ------>

// let result = (function (){
//     let firstName = "Lawrence";
//     return firstName;
// })();
// console.log(result + " - this is the value of firstName returned to 'result'");

// // ------>

// let test2 = (num) => num + 5;
// console.log(test2(14));
