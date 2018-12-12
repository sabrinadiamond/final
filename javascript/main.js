$(document).ready(function(){

$("#holyman").hover(function(){
    $("#alienPic").show();

	

});

	var follower = $("#alienPic")


	$(window).on("mousemove",function(e){
		$(follower).position()
		// console.log(e)
		var newX = e.pageX;
		var newY = e.pageY;

	$("#alienPic").css("left",newX-20);
	$("#alienPic").css("top",newY - 5);

	});
	