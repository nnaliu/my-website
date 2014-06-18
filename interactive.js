$(document).ready(function() {
	$("button").on("click", function(){
		alert("Anna says thank you!");
	});
});

$(document).ready(function(){
	$('.float_logo').hide();
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 130) {
	    $('.float_logo').fadeIn();
	} else {
	    $('.float_logo').fadeOut();
	}
});