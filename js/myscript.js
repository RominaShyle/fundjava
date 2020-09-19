// console.log('2');


var nr1 = 12;
var nr2 = 33
var text= "Ky eshte nje tekst";
console.log(nr1, nr2);
console.log(text);
var sum = nr1 + nr2;
console.log(sum);
var sub = nr1 - nr2;
var mult = nr1 * nr2;
var div = nr2 / nr1;
var yes = false;
yes = true;

//inkrementim

nr2 = nr2 + 2; // ekuivalente me nr2 += 2

// shuma e dy numrave cfaredo

function myFxn(a, b){
return a+b;
}

var shuma = myFxn(3,4);

console.log(shuma);

//funksion qe ben alert nje mesazh

function mesazh(greeting){
//alert(greeting);
}

var greet = 'hello';
var abc = mesazh(greet);


//funksion pa parametra qe pershendet

function mesazh(greet){
//alert('ckemi');
}

var ab = mesazh("hello");


//function qe konverton inches ne cm
//1 inch = 2.54 cm


function inchToCm(inches){
var cm = 2.54 * inches;
return cm;
}

console.log(inchToCm(6));
console.log(inchToCm(8));


//function qe afishon shumen e tre numrave ne dokument

function afisho (a,b,c){

return a + b + c;
}

var afishim = afisho(7,8,13);
document.write(afishim);

//pohimet logjike

//dekrementim


//konkatenim string + numer
//
//alert("Nr2 eshte i barabarte me"+ ' ' + nr2);


document.write("Nr2 eshte i barabarte me"+ ' ' + nr2);
