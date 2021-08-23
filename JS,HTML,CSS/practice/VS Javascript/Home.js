console.log('hello');
//  alert('hello this is cyp');

// Variables
var b = ' printed variable';
console.log(b);

// variables as numbers
var someNumber = 45;
//console.log(someNumber);

//changing html code with javascript
document.getElementById('someText').innerHTML = 'Hey there';
document.getElementById('someText2').innerHTML = 'hey there';
document.getElementById('someText3').innerHTML = 'hey there';
document.getElementById('someText4').innerHTML = 'Hey there';
document.getElementById('someText5').innerHTML = 'hey there';
document.getElementById('someText6').innerHTML = 'hey there';

// asking client a question and holding it in a variable
//var color = prompt('What is your favorite color?');
//document.getElementById('colorText').innerHTML = color;
//console.log(color);

// numbers in Javascript
var num1 = 5;

num1++; //increment
console.log(num1);

num1--; //decrement
console.log(num1);

var num2 = 5.6; // floating number
console.log(num2);

num2 = num2 + 10;
console.log(num2); //changing variable value

console.log(5*10); //multiply
console.log(50/10); //divide

var num3 = 5;
console.log(num3 % 5); //remainder
console.log(num3 % 2);
console.log(num3 % 3);

//Functions

//without argument
function fun() { 
    console.log('this is a function');
}
//function call
fun();

//with argument pt.1
function multiply(num1, num2){
    console.log(num1 * num2);
}
//function calls
multiply(num1, num3);
multiply(num1,num2);

//functions with prompt
function greeting(){
    var name =prompt('what is your name?');
    var result = 'Hello ' + name; //string concatenation
    console.log(result);

}

//greeting();

//function with argument pt.2
function add(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

add(5,7); //this is numbers
add('hello ', 'cyp'); //also works with strings 
add('10','10'); //numbers as strings

function inputName(name){ //this function is the same as greeting but w. an argument
    console.log('hello ' + name );
}
//var yourName = prompt('What is your name');
//inputName(yourName);

//while loops
//finds all factors of 388

/*var num = 388;
while(num >= 1){
    console.log(num);
    num = num / 2;
}
*/

//for loop
/*for (let num = 0; num <= 200; num++){
    console.log(num);
}*/

//Data Types
var yourAge = 20 //number
let yourName = 'Cyp' //string
let name = {first: 'Cyp', last: 'dz'}; //object
let truth = false; //boolean
let grocceries = ['apple', 'banana','orange']; //array
let random; //undefined
let nothing = null; //null value
let splitFruit = 'apple,banana,pear,peach';


//Strings in Javascript (common methods)
let fruit = 'orange';
let moreFruits = 'banana\napple';  // \n allows you to skip a line
/*
console.log(moreFruits + '\n' +  fruit);

console.log(fruit.length); //counts length of string, does not start from zero.
console.log(fruit.indexOf('o')); //checks where in string input is starts, -1 = absent
console.log(fruit.indexOf('q'));
console.log(fruit.slice(2,4)); // .slice returns string characters from first input to second
console.log(fruit.slice(0,6));
//console.log(fruit.replace('ora','123')); //replaces string letters that contain first argument with second argument 
console.log(fruit.toUpperCase()); 
console.log(fruit.toLowerCase());
console.log(fruit.charAt(1)); //gives character at inputted index
console.log(fruit[1]);
console.log(fruit.split('n')); // splits a string at location where input character is found
console.log(splitFruit.split(',')); //split by comma in this case
*/

//ARRAYS
let fruits = ['banana','apples','berries','pears' ];
let fruits2 = new Array('banana','apples','berries','pears');

//alert(fruits[1]); //alerts of apples
console.log(fruits2); //prints out all array contents
console.log(fruits2[0]); //access value at index 0 (banana)

fruits2[0] = 'pineapple';
console.log(fruits2[0]); //changing value/string of index 0

for(let i = 0; i < fruits2.length; i++){ //prints each index of fruits2
    console.log(fruits2[i]);
}

//Array common methods
console.log('to string', fruits.toString());  //toString converts array to string
console.log(fruits.join(' - ')); //joins each array index with a input character
console.log(fruits.join(' :) '));
//console.log(fruits.pop());
console.log(fruits, fruits.pop(), fruits); //.pop removes last element of an array and returns it
console.log(fruits.push('mango'),fruits); //.push appends input to list 
console.log(fruits[4]);
fruits[4] = 'blue berry'; //another way to append
console.log(fruits[4]);
fruits.shift(); //this removes first element of list
console.log(fruits);
fruits.unshift('kiwi'); //add first element to array
console.log(fruits);

let vegetables = ['tomato', 'aspargus', 'broccoli', 'carrot'];
let healthyFood = fruits.concat(vegetables); //combines two arrays
console.log(healthyFood);
console.log(healthyFood.slice(1,4));
console.log(healthyFood.reverse()); //this reverses the array
console.log(healthyFood.sort()); //sorts array alphabetically

let someNums = [1,5,2,27,20,67,15,4]; 
console.log(someNums.sort(function(a,b) {return a-b})); // sorts numbers in ascending order
console.log(someNums.sort(function(a,b) {return b-a})); //sorts numbers in descending order

//adding to an empty array with loop
let emptyArray = new Array();
let k = 10;
for(let i = 0; i < 10; i++){
    emptyArray[i] = k; //could also use emptyArray.push(k);
    k = k+10;
}
console.log(emptyArray);

//Objects in Javascipt

let student = {
     first: 'Cyprien', 
    last: 'Dzialo', 
    age: 20,
    height: 180,
    
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    },

    changeName: function(first, last){
        student.first = first;
        student.last = last;

        return student.first + ' ' + student.last;
    },
    

    
}

//console.log(student);
//console.log(student.first);
//console.log(student.last);

student.first = 'cyp'; //changes value
//console.log(student.first);
student.age ++; //increments age
console.log(student.age);
console.log(student.studentInfo());
 console.log(student.changeName('Johnnnnnn', 'Cennnnna'));

//Conditionals, control flows (if else)
// && AND
// || OR

/*
let age = prompt('What is your age?');
if (( age >= 18) && (age <= 35)){
    status = 'target demo'
    console.log(status);
}

else{
    status = 'not my audience'
    console.log(status);
}
*/

//var meal = prompt('lunch or dinner?');

 let meal = 'lunch'

if(meal == 'lunch'){
    console.log('no icecream for now');
}

if(meal == 'dinner'){
    console.log('Go get some icecream friend');
}

//Switch statements
//differentiate b/w weekday vs. weekend
//day 0 --> Sunday
//day 6 --> Saturday
//day 4 --> thursday -->weekday

/*
let day = prompt('What day is it (0-6)?');


switch (day){
    case '0':
        text = 'Sunday/weekend';
        break;
    
        case '5':
        text = 'Friday/Weekend';
        break;

    case '6':
        text = 'Saturday/Weekend';
        break;
         
     default: 
        text = 'weekday';
}

console.log(text);
*/



















