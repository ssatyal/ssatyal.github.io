//changes background color behind photo
var aboutHeader = $('#aboutHeader');
var featured = $('#featured');
var contact = $('#contact');
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

aboutHeader.on('click',function(){
  $('#goeshere').replaceWith("<div id='goeshere'><section id='aboutMe'><p>Bacon ipsum dolor amet strip steak cow biltong bresaola,landjaeger filet mignon sirloin turducken picanha pork belly chicken prosciutto. Cow ground round pork loin bacon. Shank shoulder cupim pastrami pork swine kielbasa strip steak beef ribs rump hamburger corned beef salami meatloaf pancetta. Drumstick tongue bacon pancetta boudin jerky shank ribeye. Ham fatback swine meatloaf hamburger, pork ground round ball tip drumstick. Tail ribeye filet mignon sirloin. Boudin kielbasa rump ribeye chicken salami flank pork bacon picanhatri-tip.</p></section></div>");
});

featured.on('click', function(){
  event.preventDefault();
  $('#goeshere').replaceWith(
    '<div id="goeshere"><section id="projects"><a href="#">PlaceHolder 1</a><a href="#">PlaceHolder 2</a><a href="#">PlaceHolder 3</a></section></div>'
  );
});

contact.on('click',function(){
  $('#goeshere').replaceWith('<div id="goeshere"><section id="contactinfo"><p><span>satyal89@gmail.com</span></p></section></div>');
});

$('h3').hover(function(){
  $(this).css("color", newColor);
  })
  .mouseout(function(){
    $(this).css("color", "black");
  });
