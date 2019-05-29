//twitter button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
//end twitter

//google maps API
var map;
function initMap() {
	var myLatLng = {lat: 39.2981487, lng: -76.6204978};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 10
  });

  var marker = new google.maps.Marker({
  	position: myLatLng,
  	map: map,
  	title: 'Over Here!'
  });
}
//end google maps API

//Facebook share button
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//end facebook share button

$(document).ready(function() {
	//smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });
  //end smooth scrolling

  //Parallax effect
  $('#reach-me').stellar();

  //Tooltips jQuery
  $(function() {
    $('#item1').tooltip();
  });

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //Textarea background color change
  $("#message-box").css("background-color", "#fff");

  //Append info to DOM and hide form
  $("#send-message").on("click", function() {
  	console.log("clicked");
  	$("#message-box").val();
  		var comment = $("#message-box").val();
  			console.log(comment);
  			if(comment === "") {
  				$("#message-box").css("border", "2px solid red");
  			} else {
  					$("#visible-comment").html(comment);
  					$("#message-box").hide();
  					$("#email").val();
  						var email = $("#email").val();
  							console.log(email);
  					$("#email").hide();
  					$("#number").val();
  						var phone = $("#number").val();
  							console.log(phone);
  					$("#number").hide();
  					$("#name").val();
  						var name = $("#name").val();
  							console.log(name);
  					$("#name").hide();
  					$("#char-count").hide();
  					alert("Message sent!");
  			};
  	return false;
  });

  //Message box running character count
  $("#message-box").on("keyup", function() {
  	console.log("keyup initiated");
  	$("#message-box").val().length;
  		var charCount = $("#message-box").val().length;
  			console.log(charCount);
  	$("#char-count").html(charCount);//showing running character count to the user
  	if(charCount > 100) {
  		$("#char-count").css("color", "red");
  	} else {
  		$("#char-count").css("color", "white");
  	};
  });

  //Work section
  for(var i=0; i < works.length; ++i) {
  	$("#portfolio").append("\
  		<div class='col-md-6 col-xs-12'>\
          <div class='work'>\
          	<a href='" + works[i].url + "' class='work-img'>\
            	<img src='" + works[i].pic + "' class='img-responsive'>\
          		<span class='info'> '" + works[i].title + "' </span>\
          	</a>\
          </div>\
        </div>\
    ");
    var images = $("#portfolio img");
    	console.log(images);
		if (i%2 === 0) {
	  	$(images[i]).css("border", "2px solid lightblue");
		} else {
			$(images[i]).css("border", "2px solid lightblue");
		}; //end conditional border color
  }; //end works array loop

  $(".work-img").mouseenter(function(){
  	$(".info", this).show();
	}).mouseleave(function(){
  	$(".info", this).hide();
	});

  }); //Close Document