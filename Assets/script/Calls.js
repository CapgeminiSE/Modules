/* Testservices */
var testService = "http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139";
var testService2 = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139";

/* Calls for FetchPrint */
/* FetchPrint([how is the data formatted?: json/xml],[url of service],[Where to write result: class/id],[how to write the result: list/text]);*/
FetchPrint("json",testService2,".FetchPrintJSON","list");
FetchPrint("json",testService2,".FetchPrintJSONText","text");
