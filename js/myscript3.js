
// OBJEKTET

var book = {
  author : "J.K.Rowling",
  title : "Harry Potter and the chamber of secrets",
  year : 1998,
  getSummary : function (){
    return  "The second instalment of boy wizard Harry Potter's adventures at Hogwarts School of Witchcraft and Wizardry, based on the novel by JK Rowling. A mysterious elf tells Harry to expect trouble during his second year at Hogwarts, but nothing can prepare him for trees that fight back, flying cars, spiders that talk and deadly warnings written in blood on the walls of the school."
  }
};

document.getElementById('book').innerHTML = book.getSummary()

var doc = document.getElementById('row');
var a = doc.getElementsByClassName('book');

document.querySelector("body").style.backgroundColor = "lightblue";

function ndrysho(){
  document.querySelector('button').style.backgroundColor = "black"
}


document.getElementById("button").addEventListener("dblclick", function(){

  this.innerHTML = "changed!"
})
