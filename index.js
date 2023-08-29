// This is for practices
console.log('Hellow World');

let yourname = 'Hiruni';
console.log(yourname);

//when declare many names we use this best practice , We dont declare all in the same line

let number1 = 10;
let number2 = 20;
let number3 = 15;

//constant

const index=20;
console.log(index);

//primitives
let name2='hiru';
let number4=20;
let isApproved=false;
let firstName=undefined;
let selectedColor=null;

//objects

let person={
    name:'Hiruni',
    age:50
};

//dot notation
person.name='Prarthana';
console.log(person,name);

//bracket notation
person['name']='Mary';
console.log(person,name);

console.log(person);

let selectedColors=['red','blue'];
console.log(selectedColors);

selectedColors[2]='green';
console.log(selectedColors);

console.log(selectedColors.length);

//function declaration
function greet(){
    console.log('hellow world');
}

greet();

function greet2(name){
    console.log('hellow '+ name);
}

greet2('John ');
greet2('Anu');

//calculate a value
function sqaure(number1){
    return number1*number1;
}

let number = sqaure(2);
console.log(number);