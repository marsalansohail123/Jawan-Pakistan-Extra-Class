// alert("Hello World");
// console.log("Hello World");
// document.write("Hello World");

// var a = 5;
// var b = "ali";
// var c = a+b;
// alert(c);

// var a = 5;
// var b = "5";
// var c = a+b;
// alert(c);

// var a = 5;
// var b = "6";
// var c = a*b;
// alert(c);

// var a = "5";
// var b = "ali";
// var c = a+b;
// alert(c);

// var a = 6;
// var b = 3;
// var c = a%b;
// alert(c);

// var a = (2+4)*6/(2-5);
// alert(a);

// var a = 5;
// var b = a++;
// alert(b);

// a++;
// a=a+1;
// a+=1;

// a++
// ++a

// a--
// --a

// var a = 3;
// var b = a++ + ++a - ++a + a - a-- + --a;
//         3 + 5 - 6 + 6 - 6 + 4
// alert(b);

// var x = Number(prompt("Enter your value","Your value is:"));
// var y = 5;
// var z = x+y;
// alert(z)

// var a = 5;
// if(a > 2){
//     alert("True");
// }
// else{
//     alert("False");
// }

// var x = 10;
// if(x === 10){
//     alert("Correct");
// }
// else if(x == 10){
//     alert("Very Correct");
// }
// else{
//     alert("May be Correct");
// }

// var age = +prompt("Enter Age");
// var gender = prompt("Enter Gender");
// var city = prompt("Enter City Name");
// if(age > 18 || gender == "male" && city == "karachi"){
//     alert("He is allowed to ride");
// }
// else{
//     alert("He is not allowed");
// }

// var perc = prompt("Enter your Percentage");
// if(perc >= 80 && perc <= 100){
//     alert("A+");
// }
// else if(perc >= 70 && perc < 80){
//     alert("A")
// }
// else if(perc >= 60 && perc < 70){
//     alert("B")
// }
// else if(perc >= 50 && perc < 60){
//     alert("C")
// }
// else if(perc >= 33 && perc < 50){
//     alert("D")
// }
// else if(perc >= 0 && perc < 33){
//     alert("Fail")
// }
// else{
//     alert("Please write correct percentage");
// }

// Array

// var arr = [];
// var arr1 = new Array("ali","ahmed");

// var name1 = "ali"
// var name2 = "ahmed"
// var name3 = "rayyan";
// var name4 = "irfan";
// var name5 = "ghous";
// var name6 = "asif";

// var arr = ["ali","ahmed","rayyan","irfan","ghous","asif"];

// var arr1 = ["mughal",11,true,"ali12",12.5]

// Loop
// For loop
// While loop
// Dowhile Loop

// var x;
// for(x=10;x>=1;x=x-2){
//     document.write(x + "<br>");
// }

// var cityToCheck = prompt("Enter City name");
// var cleanestCities = ["karachi", "quetta", "lahore", "sukkur"];
// var matchFound = false;
// for (var i = 0; i <= 3; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     // break;
//   }
// }
// if (matchFound === false) {
//   alert("It's not on the list");
// }

// var arr = ["a", "b", "c", "d", "e", "f"];
// var nestedArr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);
// for (var i = 0; i < arr.length; i++) {
// console.log(arr[i]);
//   for (var j = 0; j < nestedArr.length; j++) {
//     console.log(arr[i] + nestedArr[j]);
//   }
// }

// var inp = prompt("Enter your name");
// inp = inp.toLowerCase();
// console.log(inp);
// if (inp == "arsalan") {
//   alert("Enter");
// }

// var userCity = prompt("enter city name");

// var firstLetter = userCity.charAt(0).toUpperCase();
// var otherLetters = userCity.slice(1).toLowerCase();
// var result = firstLetter + otherLetters;

// console.log(result);

// var para =
//   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, repudiandae!";
// var flag = false;

// for (var i = 0; i < para.length; i++) {
//   //   console.log(para[i]);
//   if (para.slice(i, i + 2) === "  ") {
//     console.log("There is a blank spaces");
//     flag = true;
//     break;
//   }
// }
// console.log(flag);
// if (flag == false) {
//   console.log("no black spaces found");
// }

// var para =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, repellat.";

// var firstChar = para.indexOf("sit");

// if (firstChar != -1) {
//   para = para.slice(0, firstChar) + "replace wordd " + para.slice(22);
// } else {
//   alert("word not found");
// }

// console.log(para);

// var para =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, repellat.";

// para = para.replace("sit", "replace word ");

// console.log(para);

// var num = 2.1;

// var roundNum = Math.round(num);
// var ceilNum = Math.ceil(num);
// var ceilNum = Math.floor(num);

// console.log(ceilNum);

// var randomNum = (Math.random() * 6) + 1;
// var dice = randomNum.toFixed(2);
// console.log(dice);

//  Date

var today = new Date();
// var str = today.toString()
// str = str.slice(0, 16)

// var arr = ["Sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

// var day= today.getTime(); // 0 is sunday 6 is saturday
// day = arr[day]

// console.log(day)

// var setYear = today.setFullYear(2006)
// var setDay = today.setDate(2)

// console.log( today)


// function greet(){
//     alert("How are you ?")
// }

// greet();

// function greet(h){
//     alert(h);
// }
// greet("Hello! How are you ?");

// function add(a,b){
//     var c = a+b;
//     alert(c);
// }
// add(5,6);

// function add(x,y){
//  var z = x - y;
//  return z;
// }

// var a = add(8,3);
// alert(a);

// var a = 5;
// var b = 7;
// function kuchBhi(){
//     var x = 9;
//     var y = 3;
//     alert(a);
//     alert(x);
// }

// kuchBhi();
// alert(b);
// alert(y);

// calculator

// function calculator( operation, num1, num2) {
//     // console.log(num1, num2, operation);
//     if(operation == "+"){
//         console.log(num1 + num2)
//     }else if(operation == "-"){
//         console.log(num1 - num2)
//     }else if(operation == "*"){
//         console.log(num1 * num2)
//     }else if(operation == "/"){
//         console.log(num1 / num2)
//     }else{
//         alert("enter right operation")
//     }
// }

// var unum1 = +prompt("enter first val", "+")
// var userOperation = prompt("enter operation")
// var unum2 = +prompt("enter second val")
// console.log( typeof(userOperation))
// calculator(userOperation ,unum1, unum2);

// function calcArea(width, height){
//     console.log(width * height)
// }

// var inpWidth = prompt("width")
// var inpHeight = prompt("height")

// calcArea(inpWidth, inpHeight)

// function counting(start, end){
    // console.log(start, end)
//     var result = ""
//     for (var i = start; i <= end; i++){
//         result += i + " "
//     }
//     return result;
// }

// var finalResult = counting(1, 15)
// console.log(finalResult)