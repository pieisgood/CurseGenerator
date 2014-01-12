//here will be the code to parse what is left of the text that is sent for a request
// "[verb] + the + [adjective] + [noun]"
module.exports.parseText = function(toParse){
	'use strict';
	var parsedList = [];
	var outList = [];
	toParse = toParse.replace(/ /g, "");
	toParse = toParse.split("+");
	for(var i = 0; i < toParse.length; i++){
		parsedList.push(toParse[i].split(" "));
	}

	for(var i = 0; i < parsedList.length; i++){
			if(parsedList[i] !== " "){
				outList.push(parsedList[i]);
			}
	}

	return outList;
};

module.exports.combineText = function(textList){
	'use strict';
	//need to create a series of functions to handle db calls
	var outText = "";
	for(var i = 0; i < textList.length; i++){
		outText = outText + textList[i] + " ";
	}
	return outText;
};