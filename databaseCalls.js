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

module.exports.recurseWords = function(db, wordList, outList, func){
	"use strict";
	var type = wordList.shift();

	while(getWord[type] === undefined){
		outList.push(type);
		type = wordList.shift();
		if(wordList.length === 0){
			func(outList);
			return;
		}
	}

	getWord[type](db, function (rows){
		outList.push(rows);
		if(wordList.length === 0){
			func(outList);
		}
		else{
			getWords(db, wordList, outList, func);
		}
	});
};

function getWords(db, wordList, outList, func){
	"use strict";
	var type = wordList.shift();

	while(getWord[type] === undefined){
		outList.push(type);
		type = wordList.shift();
		if(wordList.length === 0){
			func(outList);
			return;
		}
	}

	getWord[type](db, function (rows){
		outList.push(rows);
		if(wordList.length === 0){
			func(outList);
		}
		else{
			getWords(db, wordList, outList, func);
		}
	});
};
