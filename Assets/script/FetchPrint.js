
function protocol(string, printlocation, jsonData){
	try{
		switch (string) {
		    case "list":
					$(printlocation).append(toStyledArray(jsonData));
	        return true;
	        break;
		    case "text":
					$(printlocation).append(toArray(jsonData));
	        return true;
	        break;
        default:
	        console.log("data not applicable");
	        return false;
	        break;
		}
	}
	catch(e){
		console.log(e);
	}
}

function toArray(obj) {
  var result = [];
  for (var prop in obj) {
    var value = obj[prop];
    if (typeof value === 'object') {
      result.push(toArray(value));
    } else {
      result.push(value);
    }
  }
  return result;
}

function toStyledArray(obj) {
  var result = [];
  for (var prop in obj) {
    var value = obj[prop];
    if (typeof value === 'object') {
      result.push("<ul><li>"+toArray(value)+"</li></ul>");
    } else {
      result.push("<li>" + value + "</li>" );
    }
  }
  return result;
}

function FetchPrint(type,serviceurl,printlocation,routine){
	try{
		//alert(from+where+protocol);
		$.ajax({
			url: serviceurl,
			dataType: type,
			success: function (response) {
				protocol(routine, printlocation, response);
			},
			error: function(response, exception){
				throw new Error("Error from: "+response+". Errordescription: " + exception);
			}
		});
	}

	catch(e){
		console.log(e);
	}
}