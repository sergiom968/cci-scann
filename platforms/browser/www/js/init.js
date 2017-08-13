(function($){
	$(function(){
    	$('.dropdown-button').dropdown({
			constrainWidth: false, // Does not change width of dropdown to that of the activator
			hover: true, // Activate on hover
			belowOrigin: true, // Displays dropdown below the button
			gutter: 1
		});
		$(".button-collapse").sideNav();
		$('#emojis-box').tabs({
			swipeable: true
		});
	}); // end of document ready
})(jQuery); // end of jQuery name space