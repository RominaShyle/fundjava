$(document).ready(function(){
  


  var a = $('button');
  for(var i =0; i<a.length; i++){
     if(a[i].innerHTML == 'messagess 3') {
       console.log(a[i]);
     }
  }
/*
$('body h1:nth-child(1)').mouseenter(function () {

  $(this).hide();

})
*/

$("#button").click(function(){

  var d = new Date();
  var date = d.getFullYear() +'-'+ (d.getMonth() + 1) +'-'+ d.getDate() + ' ';
  var time = d.getHours() + ':'+ d.getMinutes() + ':' + d.getSeconds();

  $("#button").after(date + time);

$('#epara').fadeOut();
$('#edyta').hide().fadeIn(2000);
$('#etreta').fadeOut("slow");
// document.querySelector("#etreta").fadeOut("slow")
})


$("a[href = '#top']").on('dblclick', function(){
$("html , body").animate(
  {scrollTop:0},
   2000
  );
})




$( "#button" ).one( "click", function() {
  $( this ).css( "width", "+=200" );
});


$('#demo').after('Ky tekst eshte vendosur pas div-it');
$('#demo').before('Ky tekst eshte vendosur para div-it');
$('#demo').append('Ky tekst eshte vendosur i fundit ');
$('#demo').prepend('<p id="shembull">Ky tekst eshte vendosur i pari </p>');

//remove() fshin elementin e selektuar dhe gjithe femijet e tij
//remove(class/id)
//empty() fshin femijet e elementit te selektuar
/*
$('p').on('mouseenter', function(){
  $('p').remove('.para, #shembull');
})
*/
//$('#demo').empty();

//addClass ->shton klase tek elementi i selektuar
//removeClass ->heq nje klase tek elementi i selektuar
//toggleClass

$('#shto-klase').dblclick(function(){
$('#demo').removeClass('text-center');
})


$('#shto-klase').click(function(){
$('#demo').toggleClass('text-center');
$(this).toggleClass('btn-danger')
})


$('#ngjyra').dblclick(function(){
$('#child').toggleClass('highlightt');
});



function myFunction(event) { 
  var x = event.target;
  document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
}





var arr = [1 , 2 , 3 , 4];


for(var i= 0; i< arr.length-1; i++){
console.log(arr[i]);
}









});

