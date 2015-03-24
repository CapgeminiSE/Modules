/* Testservices */
var testService = "http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139";
var testService2 = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139";

FetchPrint("json",testService2,".FetchPrintJSON","list");

FetchPrint("json",testService2,".FetchPrintJSONText","text");

$(window).ready(function(){
	$(".dropdown-menu li").click(function(e){

		var s = $(e.target).attr("data-nav");
	 	 $(".Modules__Wrapper .Module").hide();
		 $("."+s).show();
	});


	$(".ShowAll").click(function(e){
		$(".Modules__Wrapper .Module").show();
	});
	$(".HideAll").click(function(e){
		$(".Modules__Wrapper .Module").hide();
	});
});
