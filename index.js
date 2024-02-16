// 1----------
// let a=[];
// let b=[];

// console.log(a==b);
// yeh alag-alag objects hain memory mein to output false
//jab bhi humlog do array comapare karenge t uski memory location compare hoti hai

// 2------------
// let a=[1,2];
// let b=[1,2];

// console.log(a===b);

// 3------------
// let a=[];
// let b=a;

// console.log(a==b);
// console.log(a===b);

// 4------------
// let a=[20];
// let b=[20];

// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);

//5-------------
// let z=[1,2,3,4,5];
// let a={name:"bishnu"};
// console.log(...z);

//6--------------
// console.log( typeof NaN);
// NaN ek special tyke ka number hota hai javascript mai

//7------------
// let data= 10- -10;
// console.log(data);

//8-----------
// const set=new Set([1,1,2,3,4])
// console.log(set);

//9--------
// let data={name: "Bishnu"}
// delete data.name          //output blank obj
// console.log(delete data.name); //output true

//10-----------
// const data={name:"bishnu"};
// console.log(delete data );
// data ko hum direct delete nahi kar sakte delete opretar ka use kar k  agr iske under property hai usko delete kar sakte hai

//11-----------
// const data=["peter","anil","bishnu"];
// const [y]=data;
// console.log(y);
// ye phele element ayenge ans

//12---------
// const data=["peter","anil","bishnu"];
// const [,z]=data;
// console.log(z);

//14---------------
// const data = { name: "bishnu", age: 20, skill: "js" };
// console.log(name);
//how to get name without . operaotr
// const {name}=data;
// console.log(name);

//15---------------
// let data={name:"bishnu",age:20,skill:"Js"}
// let info={city:"dlk",mail:"bishnu@gmail.com"}
// merge 2 object
// data={...data,...info}
// console.log(data);

//16---------------
// let data={name:"bishnu",age:20,skill:"Js"}
// let info={city:"dlk"};
// data ={data,...info}
// console.log(data);
// data internal obj ban jayega output mai

//17---------------
// let data={name:"bishnu",age:20,skill:"Js"}
// let info={city:"dlk",skill:"Node"}
// data ={...data,...info};
// console.log(data);
//key key same rahega but value next wale ki hogi

//18---------------
// const name="Bishnu";
// console.log(name());
//name is not a function

//19---------------
// const result =false || {} || null;
// console.log(result);
// jab bhi humlog or(||) operator ka use karte wo sabse phle true value leti hai
// if({}){
//   console.log("true");
// }else{
//   console.log("false");
// }

//20---------------
// const result =null || false || '';
// console.log(result);
// in case agr koi bhi value positive nahi milti hai to last value ko le leti hai

//21---------------
// const result =[] || 0 || true;
// console.log(result);

//22---------------
// console.log(Promise.resolve(5));

//23---------------
// console.log("❤️" === "❤️");
// ye pe 2 unique code comapre ho rhe hai na ki image

//24---------------
// JSON.parse(); ka matlab
// ans => parses JSON to a javascript value

//25---------------
// let name = "Das";
// function getNanme() {
//   console.log(name);
//   let name = "Bishnu";
// }
// getNanme();

//26---------------
// let name = "Bishnu";
// function getNanme() {
//   console.log(name);
// }
// getNanme();

//27---------------
// console.log(`${(x=>y)('I love you')} to program`);

//28---------------
// function sumVlaues(x,y,z){
//   return x+y+z;
// }
// console.log(sumVlaues(...[1,2,3]));

//29---------------
// const name ="code step by step"
// console.log(!typeof name==='object');
// console.log(!typeof name==='string');

//30---------------
// const name="nehaa";
// const age=20;
// console.log(isNaN(name));
// console.log(isNaN(age));

//31---------------
// let person={name:"neha"};
// Object.seal(person) seal laga dene se koi bhi key value add nahi kar sakte hai lekin jo hai use modify kar sakte hai
// console.log(person);

//32---------------
// let data =[2,9,0,10]
// remove first element
// data.shift()
// console.log(data);

//33---------------
// let data =[2,9,0,10]
// last elemnt delete
// data.pop();
// console.log(data);

//34---------------
// even of odd check
// if(9%2==0){
//   console.log("even");
// }else{
//   console.log("odd");
// }

//35---------------
// let data={
//   name:'bishnu'
// }
// console.log(delete data.name);
// delete data.name
// console.log(data)

//36---------------
// let data="true";
//convert data to boolean false value
// console.log(!typeof data);
// console.log(!data);

//37---------------
// let data="true";
//convert data to boolean true value
// console.log(!!data);

//38---------------
// difference between map and forEach function
// map function humsa kuch na kuch return karega but forEach fucntion kuch return nahi karega

//39---------------
// let data=["anil","peter","bruce"]
// delete data[1];
// console.log(data);
// jab bhi humlog koi value ko delete karte hai na  to blank space ban jata hai null and undefined upne thora space lete hai

//40---------------
// let data=["anil","peter","bruce"]
// delete data[1];
// console.log(data.length);

//41---------------
// let a=[1,2,3];
// let b=[4,5,6];
//merge 2 array
// let c=[...a,...b]
// console.log(c)

//42---------------
// let a=[1,2,3,4];
// let b=[4,5,6];

// let c=[...a,...b]
//ye dono value ko rakhega
// console.log(c)

//43---------------
// let a=3 ** 3; //3*3*3
// console.log(a);

//44---------------
// let a=2;
// setTimeout(()=>{
//   console.log(a);
// },0)
// a=100;

//45---------------
// let a=2
// let A=30;
// console.log(A);

//46---------------
// let A10="like";
// let 10A="like";// error
// console.log(A10);
//JS  rule hai jo variable start karoge wo phle numeric nhi hone chaiye

//47---------------
// let a="Like"
// let b=`Like`
// console.log(a===b);

//48---------------
// let a=1;
// let c=2
// console.log(--c ===a);
// console.log(c)

//49---------------
// let a=1;
// let b=1;
// let c=2;
// console.log(a === b === --c );

//50---------------
// console.log(3*3); 9
// console.log(3**3); 27
// console.log(3***3); error

//51---------------
// console.log(a);
// var a;
//humlog variable ko bad mai delclre kar sakte hai phle use kar sakte hai

//52---------------
// console.log(b);
// not defined

//53---------------
// console.log([[[[]]]]);

//54---------------
// how to find OS name?
// => navigator.platform

//55---------------
// let for=100;
// for nahi chalega yeh ek reserved keyword hota hai

//56---------------
// function fruits() {
//   console.log(name);
//   console.log(price);
//   var name = "apple";
//   let price = 20;
// }
// fruits();
//yeh pe hosting ka concept chalta hai hosting k under kiya hota hai jab bhi humlog ek varibale declere karte hai wo bolta hai phle variable ko use kalo bad mai delcre kardo but let ko app phle declre kar bad app delcre nhi kar sakte

//57---------------
// for(var i=0;i<3;i++){
//   setTimeout(()=>
//     console.log(i),1);
// }
// qki var jo hai wo global scope ban jata hai

//58---------------
// for(let i=0;i<3;i++){
//   setTimeout(()=>
//     console.log(i),1);
// }
// qki let bloke scope hai yeh i alg alg 3 bar gya

//59---------------
// console.log(+true);
// console.log(typeof +true);
// kisi bhi variable k samne +lagane k bad 1 ban jayega

//60---------------
// console.log(!"anil");
// console.log(typeof ("anil"));

//61---------------
// let data="size";
// const bird={
//   size:"small"
// }
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);data direct ahi chhalega

//62---------------
// let c={name:"bishnu"};
// let d=c
// c.name="shibu";
// console.log(d.name);
// console.log(c.name);
// uski data na copy ho k uski memmory location copy hoti hai

//63---------------
// var x;
// var x=10;
// console.log(x);

//64---------------
// var x;
// let x=10;
// console.log(x);

//65---------------
// let a=3;
// let b =new Number(3); b ka type object ban jayega
// console.log(a==b);
// console.log(a===b);

//66---------------
// let name;
// nmae={};
// console.log(nmae);
// console.log(name);

//67---------------
// function woof(){
//   console.log("woof!");
// }
// woof.name="apple";
// woof()

//68---------------
// function sum(a,b){
//   return a+b;
// }
// console.log(sum(1, "2"));

//69---------------
// let number =0;
// console.log(number++); post decrement
// console.log(++number);
// console.log(number);

//70---------------
// function getAge(...args){
// console.log( args); // q ki js array kabhi data type nahi hota array ka data type bhi object hota hai
// }
// getAge(21)

//71---------------
// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }
// getAge();
// follow karna hoga

//72---------------
// let sum=eval('10*10+5')
// console.log(sum);
// eval kiya karta hai string k under jitne value hota hai usnko ek expression mai convert kar k multiplication kar deta hai .

//73---------------
// How long is cool_secret accessible ? broser k under sesion storage wo kab tak rukega
// sessionStorage.setItem('cool_secret',123)
// jab app tab ban karoge tab ye fir manually band kar de askte ho

//74---------------
// const obj={1:"a",2:"b",3:"c"}
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));
//aap varible ko number define nhi kar sakte but ek object ka key ko number difene kar sakte hai

//75---------------
// const obj={a:"one",b:"two",a:"repeat"};
// console.log(obj);
// value last wala hog but position pehla wala lega

//76---------------
// for(let i=1;i<5;i++){
//   if(i===3)continue;
//   console.log(i);
// }

//77---------------
// const foo=()=>console.log('first');
// const foo1=()=>setTimeout(()=>console.log('second'));
// const foo2=()=>console.log('third');
// foo()
// foo1()
// foo2()

//78---------------
{/* <div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">click</button>
  </div>
</div> */}


//79---------------
// const person={name:"bishnu"}
// function SayHi(age){
//   return ` ${this.name} is ${age}`
// }
// console.log(SayHi.call(person, 21));
// console.log(SayHi.bind(person, 21));
// console.log(SayHi.bind(person, 21)());
// call function mai call karne ki jarurat nhi hai 
// bind function mai call karne ki jarurat  hai 


//80---------------
// function sayHii(){
//   return (()=>2)();
// }
// console.log(typeof sayHii());

// 81) Given a String,reverse each word in the sentence
// let str="saare jaha se achha hindustaan humaraa";

// let savedstr=str.split(" ").map(function(word){
//     return word.split('').reverse().join("");
    
// });
// console.log(savedstr.join(' '));


// 82) How to check if an object in an array or not ? provide some code.
// function chackArray(elem){
//      console.log(Array.isArray(elem))  // humare pass array nam se ek consrtuctor hai
// }
// chackArray([])
// chackArray({})

// 83) How to empty an array in JavaScript ? do not rest it to a new array, an do not loop through to pop each value
// let arr =[1,2,3,4,5]
// let b=arr.length=0;
// console.log(b);

// 84) How would you check if a number is an integer?
// let  n=3;
// if(n%1==0){
//     console.log("number is integer");
// }
// else{
//     console.log("number is not a integer");
// }

// 85) Make this work :concat the values
// function duplicate(arr){
//     return arr.concat(arr);
// }
// console.log(duplicate([1,2,3,4,5]));

// 86) write a javaScript function that reverse a nunmber

// function reverse(num){
//     return Number(num.toString().split("").reverse().join(''))
// }
// console.log(reverse(123));

//  using while loop
// function reversekaro(num){
//     let rev=0;
//     while(num>0){
//         let rem=num%10;
//         rev=rev*10+rem;
//         num=Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(reversekaro(123));

// 87) Write the program the string is given palindrome or not 
// function stringPalindrom(str){
//     let reversed=str.split("").reverse().join("");
//     if(reversed==str) 
//     return true;
//     else return false
// }
// console.log(stringPalindrom("MADAM"));

// 88) Write a JavaScript function that returns a passed string with letters in alphabeticaly order.
// function stringAlphabeticalOrder(str){
//     return str.split("").sort().join('')
// }
// console.log(stringAlphabeticalOrder("apple"));

// 89) Write a javascript function that accepts a string as a parameter and converyts the first letter
//     of each word of the string in uppercase
//  function capitalizeFirstWord(str){
//     let allwords=str.split(" ").map(function(word){
//         return word.charAt(0).toUpperCase() + word.substring(1)
//     })
//     return allwords.join(" ")
//  }
//  console.log(capitalizeFirstWord("bishnu bhai kaise ho"))


// 90) Write a Javascript function to get the number of occurrences of each letter in specified string
// function findnumberofalphabet(str){
//     let occurences={};
//     str.split('').forEach(function(element){
//        if(occurences.hasOwnProperty(element)==false){
//         occurences[element]=1;
//        }
//        else{
//         occurences[element]++;
//        }
//     });
//     return occurences;
// }
// console.log(findnumberofalphabet("appple"))

// Q91) loop an array and add all members of it
// let arr=[1,2,3,4,5,6,7,8,9,10]
// var sum=0;
// arr.forEach(elem=>{
//     sum=sum+elem;
// })
// console.log(sum);

// Q92) In an array of numbers and strings, only add those members which are not strings.
// let arr=[1,2,"23",4,8] 
// let sum=0;
// arr.forEach(elem=>{
//     if(typeof elem=="number"){
//         sum=sum+elem;
//     }
// })
// console.log(sum);

//  93) Loop an array of bjects and remove all objects which don't have  gender's value male
// let arr=[
// {name:"Bisnu",gender:"male"},
// {name:"Puja",gender:"female"},
// {name:"Aparna",gender:"female"},
// {name:"Shibu",gender:"male"},
// {name:"laboni",gender:"female"}
// ]
//1)    let newarry=arr.filter(Element=>{
//     return Element.gender=="male";  // this code return a new array
// })
// console.log(newarry);