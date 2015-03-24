$(window).ready(function(){
	$(".dropdown-menu li").click(function(e){

		var s = $(e.target).attr("data-nav");
	 	 $(".Modules__Wrapper .Module").hide("fast");
		 $("."+s).show("fast");
	});
	$(".ShowAll").click(function(e){
		$(".Modules__Wrapper .Module").show("fast");
	});
	$(".HideAll").click(function(e){
		$(".Modules__Wrapper .Module").hide("fast");
	});
});
