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

$('.showOne').click(function(){
  $('.targetDiv').hide();
  $('#div'+$(this).attr('target')).show();
});

$(document).ready(function(){
	$('#div1').hide();
  $('#div3').hide();
})
