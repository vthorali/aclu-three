$(document).ready(function() {
	$(".employment").click(function(){
		$(".employment_info").fadeToggle("slow");
		$(".employment").css("color", "#d41d41");
		$(this).css("color", "black");

	});
	$(".violence").click(function(){
		$(".violence_info").fadeToggle("slow");

	});
	$(".education").click(function(){
		$(".education_info").fadeToggle("slow");

	});



});