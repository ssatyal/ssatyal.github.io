//changes background color behind photo
$('.changeColor').click(function() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
      $('div.imgbg').css("backgroundColor", color);
  });
