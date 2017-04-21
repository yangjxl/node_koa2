$(function() {
	
	//导航
	$(".J_menuItem").click(function(){
		$(".J_menuItem").removeClass("active");
		$(this).addClass("active");
	});
	
	$("#side-menu li a").click(function(){
		if($(this).next(".nav.nav-second-level").is(":hidden")){
			$(this).parent().addClass("active");
			$(this).parent().siblings().removeClass("active");
			$(".nav.nav-second-level").slideUp();
			$(this).next(".nav.nav-second-level").slideDown();
		}else{
			$(this).parent().removeClass("active");
			$(this).next(".nav.nav-second-level").slideUp();
		}
	});
	
	$("#side-menu li a.J_menuItem").click(function(){
		$(this).attr("target","iframe0");
	});
	
	$(".navbar-minimalize").click(function(){
		if($(".navbar-default").hasClass("off")){
			$(".navbar-default").removeClass("off");
			$("#page-wrapper.dashbard-1").removeClass("off");
		}else{
			$(".navbar-default").addClass("off");
			$("#page-wrapper.dashbard-1").addClass("off");
		}
	});
	
});