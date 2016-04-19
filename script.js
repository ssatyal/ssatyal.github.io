//changes background color behind photo
var newColor = '';

$('.changeColor').click(function() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
$('div.imgbg').css("backgroundColor", color);
  newColor = color;
});

//changes color for the h3 elements based on the random color generated
$('h3').hover(function(){
  $(this).css("color", newColor);
})
.mouseout(function(){
  $(this).css("color", "black");
});

$('.panel-title').hover(function(){
  $(this).css("color", newColor);
  })
.mouseout(function(){
$(this).css("color", "black");
});

//shows sections based on h3 clicked
$('.showOne').click(function(){
  $('.targetDiv').hide();
  $('#div'+$(this).attr('target')).show();
});


//hides About Me and Contact on page load
$(document).ready(function(){
	$('#div1').hide();
  $('#div3').hide();
})
