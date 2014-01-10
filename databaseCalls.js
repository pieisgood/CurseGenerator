//database handles and information handling
var getWord = {
	"[verb]": function (db, func){
		var data = db.query("SELECT word FROM verb ORDER BY RAND() LIMIT 1", function (err, rows){
				if(err){
					console.log("There was an error accessing the verb database");
					func("verb db error");
				}
				else{
				console.log("making database call");
				func(rows);
				}
			});
		return data;
	},
	"[noun]": function (db, func){
		var data = db.query("SELECT word FROM noun ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the noun database");
							func("noun db error");
						}
						else{
						console.log("making database call");
						func(rows);
						}
					});
		return data;

	},
	"[adjective]": function (db, func){
		var data = db.query("SELECT word FROM adjective ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the adjective database");
							func("adj db error");
						}
						else{
						console.log("making database call");
						func(rows);
						}
					});
		return data;

	},
	"[adverb]": function (db, func){
		var data =	db.query("SELECT word FROM adverb ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the adverb database");
							func("adverb db error");
						}
						else{
						console.log("making database call");
						func(rows);
						}
					});
		return data;

	},
	"[pronoun]": function (db, func){
		var data =	db.query("SELECT word FROM pronoun ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the pronoun database");
							func("pronoun db error");
						}
						else{
						console.log("making database call");
						func(rows);
						}
					});
		return data;

	},
	"[interjection]": function (db, func){
		var data =	db.query("SELECT word FROM interjection ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the interjection database");
							func("intr db error");
						}
						else{
						console.log("making database call");
						func(rows);
						}
					});
		return data;

	},
	"[conjunction]": function(db, func){
		var data =	db.query("SELECT word FROM conjunction ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the conjunction database");
							func("conj db error");
						}
						else{
						console.log("making database call");
						func(rows);
						}
					});
		return data;

	},
	"[preposition]": function(db, func){
		var data =	db.query("SELECT word FROM preposition ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the preposition database");
							func("prep db error");
						}
						else{
						console.log("making database call");

						func(rows);
						}
					});
		return data;

	}
};

module.exports.getWords = function(db, queryList, func){
	"use strict";
	var list = [];
	console.log("inside getWordsFunction");
	var countDown = 0;

	for(var i = 0; i < queryList.length; i++){
		list[i] = "";
	}

	for(var j = 0; j < queryList.length; j++){
		console.log(queryList[j] + j);
		if(getWord[queryList[j][0]] !== undefined){
			getWord[queryList[j][0]](db, function (rows){
				countDown++;
				list[countDown - 1] = list[countDown - 1] + rows + " ";
				if(countDown === queryList.length){
					func(list);
				}
			});
		}
		else{
			list[j] = queryList[j][0];
			countDown++;
		}
	}

	console.log(list);

	//func(list);
};
