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
  $('#goeshere').replaceWith('<div id="goeshere"><section id="projects"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title"><a href="https://auto-pilot.herokuapp.com/#/trips" target="_blank">Auto Pilot</a></h3></div><div class="panel-body"><div class="row"><div class="col-md-2"><img src="https://maps.gstatic.com/mapfiles/maps-220.png" class="img-rounded pull-left"></div><div class="col-md-10"><h5>A transportation application that allows users to plot their trips in Washington, DC</h5><li>In this group project, my role was the Back-end and AngularJS developer. I set up Auto Pilot\'s API (rendered as JSON) to store data from the Google Places API which is then shown in an embedded Google Map.</li><li>Additionally, I built the framework for the front-end of the application using AngularJS.</li><li>Technologies Used: Google Places and Maps APIs | AngularJS | Ruby on Rails | Bootstrap | HTML | CSS</li></div></div></div></div><hr><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Ice and Fire</h3></div><div class="panel-body"><div class="row"><div class="col-md-2"><img src="http://www.quickhouse.ca/wp-content/uploads/edd/2015/04/STARK-SIGIL.jpg" class="img-rounded pull-left"></div><div class="col-md-8">Great Googly Moogly</div></div></div></div><hr><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">March Sadness</h3></div><div class="panel-body"><div class="row"><div class="col-md-2"><img src="http://a2.espncdn.com/combiner/i?img=i/espnradio/logos/the_dan_lebatard_show_1x1.jpg" class="img-rounded pull-left"></div><div class="col-md-8"><h5>What famous people in sports look like</h5><li>Technologies Used: JavaScript, jQuery, HTML, CSS</li></div></div></div></div></section></div>'
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
