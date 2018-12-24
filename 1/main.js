//ПЕРЕМЕННЫЕ

var leftBorderWidth = 1;
// переменная(var) имяПеременной(leftBorderWidth) присвоение(=) значени(1);
let second = 2;
// различие между var & let то что var уже существует до того, независимо когда ее объявили
// let будет ограничеваться скобками {}
const pi = 3.14;


// ТИПЫ ДАННЫХ

var number = 5;     //Числовые
// Infinity & NaN это числовые типы 
var number = (4/0); //Infinity
var number = ("string" * 5); //NaN

var string = "Text";    //строка
var sym = Symbol();     //символы
var boolean = true;     //true or false

null;       //когда объект не существует
undefined;      // когда у объекта нету значений


//ОБЪЕТКЫ

var obj = {};

let persone = {
    name: "John",
    age: 25,
    isMarried: false    
};

console.log(persone.name);
console.log(persone["name"]);

//МАССИВ 
let arr = ['plum.jpg', 'orange.jpg', 'apple.png'];
// нумерация начинается с 0;
console.log(arr[2]);



// alert ВЫЗОВ МОДАЛЬРНОГО ОКНА
 alert("Hello World!");

 // confirm отвечать ДА или НЕТ, ответ будет в виде булеона 
let someAnswer = confirm("Are you okey?");
consoloe.log(someAnswer);       // покажет значие TRUE or FALSE 

// prompt ответить в виде ТЕКСТА. независимо что написать текст или цифры тип данных будет строчное
let name = prompt("What is your name?", "your name");



//increment увеличить на 1 
//decrement уменшает на 1

let incr = 10,
    decr = 10;

//incr++;     // +1   11
//decr--;     // -1   9

consloe.log(incr++);    //  1 делает возврощает изначальную форму, то есть 10, потом уже плюсют 
console.log(++incr);    // сразу плюсует и выдает эту форму    
//аналогично  и с декриментом, просто минусует 


// РАВЕНСТО 
var oneVar = 10;        // присвоили  число/ 
console.log("2" == 2);      //сравнивет ЗНАЧЕНИЯ, будет true
consloe.log("2" === 2);     //сравнение по ТИПАМ ДАННЫХ, будет false 


let isChecked = true,
    isClose = true;
    isFalse = false;
    isSecondFalse = false;

console.log(isChecked && isClose);      //&& - and, будет true
consloe.lgo(isChecked && isFalse);      //&& - and, будет false
console.log(isChecked || isFalse);      //|| - or, будет true
console.log(isFalse || isSecondFalse);  //|| - or, будет flase

// знаечение не !
console.log(isFalse || !isSecondFalse); // так как есть ! то будет true


//ЮЗАЙ НОВЫЙ СТАНДАРТ 

'use strict' //-- использование нового стандарта в JS



