$(document).ready(function(){

$("#facebook").mouseenter(function(){
$(this).effect("bounce", 900);
});

$("#instagram").mouseenter(function(){
$(this).effect("bounce", 900);
});

$("#soundcloud").mouseenter(function(){
$(this).effect("bounce", 900);
});

$("#spotify").mouseenter(function(){
$(this).effect("bounce", 900);
});
});

	var follower = $("#alienPic")


	$(window).on("mousemove",function(e){
		$(follower).position()
		var newX = e.pageX;
		var newY = e.pageY;

	$("#alienPic").css("left",newX-50);
	$("#alienPic").css("top",newY-50);

	});