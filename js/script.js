 $(document).ready(function(){
	 $(".next").click(function(){
		 $(".gallery .active").animate({right:"+=1200",opacity:0},500, function(){
			 $(this).removeClass("active");
		 });
		 var next = $(".gallery .active").next();
		 if (!next.length){
			 next = $(".gallery div").eq(0);
		 }
		 next.addClass("active").css({right:-1500,opacity:0}).animate({right:"+=1550",opacity:1},500);
		 next = $(".gallery .active").next();
		 if (!next.length){
			 $(".next").removeClass("active");
		 }
		 $(".prev").addClass("active")
	});
	 $(".prev").click(function(){
		 $(".gallery .active").animate({right:"-=700",opacity:0},500, function(){
			 $(this).removeClass("active");
		 });
		 var next = $(".gallery .active").prev();
		 if (!next.length){
			 next = $(".gallery div").eq(0);
		 }
		 next.addClass("active").css({right:2500,opacity:0}).animate({right:"20",opacity:1},500);
		 next = $(".gallery .active").next();
		 if (!next.length){
			 $(".prev").removeClass("active");
		 }
		 $(".prev").addClass("active")
	});
});
