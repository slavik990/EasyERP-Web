 $(document).ready(function(){
	 var time = 200;
	 $(".next").click(function(){
		 $(".gallery .active").stop().animate({right:"+=1200",opacity:0},time, function(){
			 $(this).removeClass("active");
		 });
		 var next = $(".gallery .active").next();
		 if (!next.length){
			 next = $(".gallery div").eq(0);
		 }
		 next.addClass("active").css({right:-1500,opacity:0}).animate({right:"+=1550",opacity:1},time);
		 next = $(".gallery .active").next();
		 if (next.length==0){
			 $(".next").removeClass("active");
		 }
		 $(".prev").addClass("active")
	});
	 $(".prev").click(function(){
		 $(".gallery .active").stop().animate({right:"-=700",opacity:0},time, function(){
			 $(this).removeClass("active");
		 });
		 var next = $(".gallery .active").prev();
		 if (!next.length){
			 next = $(".gallery div").eq($(".gallery div").length-1);
		 }
		 next.addClass("active").css({right:1000,opacity:0}).animate({right:"20",opacity:1},time);
		 next = $(".gallery .active").prev();
		 console.log(next);
		 if (next.length==0){
			 $(".prev").removeClass("active");
		 }
		 $(".prev").addClass("active")
	});
});
