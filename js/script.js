
var books = [
  {
    title: "Harry Potter and the chamber of secrets",
    author: "J.K.Rowling",
    alreadyRead : false,
    image : "https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg"

  },
  {title: "Kumbulla pertej murit",
  author: "Ernest Koliqi",
  alreadyRead : true,
  image: "https://arratisje.al/wp-content/uploads/2019/10/ernest-koliqi.jpg"
}
];



/*
for(var i=0; i<books.length; i++){

  var p = document.createElement('p');
  var node = document.createTextNode(books[i].title + ' by '+ books[i].author +  '.');
  p.appendChild(node);
  document.body.appendChild(p);
}
*/


  var bookList = document.createElement('ul');
  for(var i = 0; i< books.length; i++){
    var item = document.createElement('li');
    var bImage = document.createElement('img');
    bImage.src = books[i].image;
    item.appendChild(bImage);
    var node = document.createTextNode(books[i].title + ' by '+ books[i].author +  '.');
    item.appendChild(node);
    if(!books[i].alreadyRead ){
      item.style.color = "red";
    }
    bookList.appendChild(item);
  }
document.body.appendChild(bookList);
