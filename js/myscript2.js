//pohimet logjike
//ose eshte ||
//and eshte &&


var var1 = true;
var var2 = false;
var var3 = "2";
var var4 = 3;
var var5 = 3;

console.log(var1 && var2);
console.log(var1 || var2);
console.log(var1 && var1 || var2);
console.log(var1 && !var1 || var2 && !var2);

console.log(var4===var3); //false
console.log(var4==var5); //true

//if statement

if(var4 > var5){
  document.write(var4 + " eshte me e madhe se " + var5);
}
else if (var4 == var5) {
  document.write('Numrat jane te barabarte');
}
else {
        document.write(var5 + ' eshte me e madhe se '+ var4);
        }
//funksion qe krahason 2 numra cfaredo




function krahaso(a,b) {

  if(a > b)
  return a;
  else if (a == b){
    document.write('jane te barabarta');
  return a;
  }

else {
//alert(b);
return b;
}
  }

  var nr  = krahaso(7,6);
  var nr2 = krahaso(nr,8);



//funksion qe merr si parameter pike nga 0-100 dhe e konverton ne note


function vleresim(piket){

  if(piket >= 0 && piket <=40 ){
    return '4';
  }else if (piket >=41 && piket <=50) {
    return '5';
  }else if(piket >=51 && piket <=60){
    return '6';
  }else if(piket >= 61 && piket<=70){
    return '7'
  }else if(piket >= 71 && piket<=80){
      return '8';
    }else if(piket >= 81 && piket<=90){
      return '9';
    }else if(piket >= 91 && piket<=100){
      return '10';
    }else {
      return "Ju lutem vendosni vlera nga 0-100!";
    }
}

var nota = vleresim(3);
console.log(nota);

//funksion qe merr si parameter nje gjuhe, dhe kthen pershendetjen ne ate gjuhe

function pershendetje(lang){


if(lang == 'en'){
  alert("Hello")
}else if(lang == 'sq'){
 alert("Ckemi!")
}else if (lang == 'it') {
  alert("Ciao")
} else  {
  alert ('Zgjidh nje nga gjuhet : sq, it, en')
}

}

//var prsh = pershendetje('it')
var prsh2 = pershendetje('sq');

var data = new Date();
var dita = data.getDay();
console.log(dita)



switch (dita) {
  case 1:

    console.log('Sot eshte e Hene');
      document.write('<br> Sot eshte e Hene')
    break;

    case 2:
    console.log('Sot eshte e Marte');
      document.write(' <br> Sot eshte e Marte')
    break;

    case 3:
    console.log('Sot eshte e Merkure ');
      document.write(' <br> Sot eshte e E Merkure')
    break;
    case 4:
    console.log('Sot eshte e Enjte');
      document.write('<br> Sot eshte e Enjte')
    break;
    case 5:
    console.log('Sot eshte e Premte');
      document.write(' <br> Sot eshte e Premte')
    break;
    case 6:
    console.log('Sot eshte e Shtune');
      document.write('<br> Sot eshte e Shtune')
    break;
    case 7:
    document.write('Sot eshte e Diel')
    console.log(' <br> Sot eshte e Diel');
    break;
  default:
  console.log(' Inputi gabim');

}


var fruta = ['Molle', 'Dardhe', 'Bostan', 'Kivi', 'Rrush'];

document.write('<br>Fruti i trete eshte ' + fruta[2]);
document.write('<br>Fruti i fundit eshte ' + fruta[fruta.length - 1]);
fruta.push('Pjeper', 'Molle');
fruta.unshift('Banane', 'Domate')
console.log(fruta.indexOf("Dardha"));
fruta.reverse()
console.log();

var colors = ['Red', 'Green', 'Blue'];
 var heq = colors.slice(1 , -1 );
colors.pop();
console.log(colors);

//nga array ne string

document.write('<br>')
document.write(colors.join('-'))

console.log(colors.toString());

var animals= ['dog', 'cat', 'elephant']
var newArr = fruta.concat(colors, animals)
console.log(newArr)




//funksion qe gjen elementin me te madh ne array , printoje dhe hiqe




function heqElementinMeTeMadh(arr){

  arr = arr.sort();
  document.write('<br>')
  document.write(arr[arr.length - 1]);
  arr.pop()
  document.write('<br> Array perfundimtar eshte: ')
  document.write(arr)
}

heqElementinMeTeMadh(fruta);



//ciklet : ushtrim
//afisho numrat nga 1-10
/*

var i = 0;
while( i <= 10){
document.write('<br>')
  document.write(i);
  i++
}

document.write("<br> kemi arritur ne fund te ciklit");
*/

//numrat nga 10-1
/*
var j = 10;
while(j >= 1){
  document.write('<br>')
  document.write(j)
  j--
}
*/
//nxjerrim ne console elementet e nje Array

var k = 0;
while (k < animals.length){

  console.log(animals[k])
  k++
}

document.getElementById('demo1').innerHTML = 123;


//numrat nga 0 ne 5
/*
var text = '' ;
for(var m = 0; m <= 5; m++){

  text += m + ' ';
}
document.getElementById('demo1').innerHTML = text;
*/


//funksion qe merr si parameter 2 numra dhe kthen shumen e numrave midis


function mbledh(a,b){
var sum = 0;

if(a > b ){
  //alert('Numri i pare duhet te jete me i vogel!')
}
else {
  for(var i = a; i<=b ; i++){
 sum += i

  }
  return sum
}

}

console.log(mbledh(3,8));
console.log(mbledh(9,8));






var person = {

  firstname : "John",
  lastname : "Doe",
  age : "32",
  getName : function () {
    return this.firstname + " " + this.lastname
  }
};

person.num = 123;


var aaaa = new Object();
aaaa.age = 12;
aaaa.name = 'aaaa';
document.write('<hr>');

document.write(aaaa.name);

console.log(aaaa)

console.log(person['age']);
console.log(person);

console.log(person.getName);
console.log(person.getName());
console.log(console.log)

document.write('<hr>');
document.write(person.num)


var lali = person;

lali.age = 33;
delete(person.age);

var arr = [0 , 8, 9, 10];
var ar = [];

var i = 0;

while(i < colors.length){

document.write('lali ');
  i++
}
