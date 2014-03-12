 $(document).ready(function(){
	 var block = false;
	 var time = 600;
	 function nextEl(next){
		 if (block)return;
		 block = true;
		 $(".gallery .active").stop().animate({right:"+=1200",opacity:0},time, function(){
			 $(this).removeClass("active");
			 block = false;
		 });
		 next.addClass("active").css({right:-1500,opacity:0}).animate({right:"+=1550",opacity:1},time);
		 next = next.next();
		 if (next.length==0){
			 $(".next").removeClass("active");
		 }
		 $(".prev").addClass("active");
		 $(".navigation .active").removeClass("active").next().addClass("active");
	 }
	 function prevEl(next){
		 if (block)return;
		 block = true;
		 $(".gallery .active").stop().animate({right:"-=700",opacity:0},time, function(){
			 $(this).removeClass("active");
			 block = false;
		 });
		 next.addClass("active").css({right:1000,opacity:0}).animate({right:"20",opacity:1},time);
		 next = next.prev();
		 if (next.length==0){
			 $(".prev").removeClass("active");
		 }
		 $(".next").addClass("active");
		 $(".navigation .active").removeClass("active").prev().addClass("active");

	 }
	 $(".next").click(function(){

		 var next = $(".gallery .active").next();
		 if (!next.length){
			 next = $(".gallery div").eq(0);
		 }
		 nextEl(next);
	});
	 $(".prev").click(function(){
		 var next = $(".gallery .active").prev();
		 if (!next.length){
			 next = $(".gallery div").eq($(".gallery div").length-1);
		 }
		 prevEl(next);
	});
	 $(".navigation a").click(function(){
		 if (block)return;
		 var cur =$(".navigation .active");
		 var next = $(".gallery div").eq($(".navigation a").index($(this)));

		 if ($(".navigation a").index(cur)<$(".navigation a").index($(this))){
			 if (!next.length){
				 next = $(".gallery div").eq(0);
			 }
			 nextEl(next);
		 }else{
			 if (!next.length){
				 next = $(".gallery div").eq($(".gallery div").length-1);
			 }
			 prevEl(next);
		 }
		 $(".navigation .active").removeClass("active");
		 $(this).addClass("active");
	 });
});
