//database handles and information handling
var getWord = {
	"[verb]": function (db, func){
		var data = db.query("SELECT idverb FROM verb ORDER BY RAND() LIMIT 1", function (err, rows){
				if(err){
					console.log("There was an error accessing the verb database");
					console.log(err);
					func("verb db error");
				}
				else{
					console.log("making database call");
					func(rows[0].idverb);
				}
			});
		return data;
	},
	"[noun]": function (db, func){
		var data = db.query("SELECT idnoun FROM noun ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the noun database");
							console.log(err);
							func("noun db error");
						}
						else{
						console.log("making database call");
						console.log(rows[0] + "db check");
						func(rows[0].idnoun);
						}
					});
		return data;

	},
	"[adjective]": function (db, func){
		var data = db.query("SELECT idadjective FROM adjective ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the adjective database");
							console.log(err);
							func("adj db error");
						}
						else{
						console.log("making database call");
						func(rows[0].idadjective);
						}
					});
		return data;

	},
	"[adverb]": function (db, func){
		var data =	db.query("SELECT idadverb FROM adverb ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the adverb database");
							console.log(err);
							func("adverb db error");
						}
						else{
						console.log("making database call");
						func(rows[0].idadverb);
						}
					});
		return data;

	},
	"[pronoun]": function (db, func){
		var data =	db.query("SELECT idpronoun FROM pronoun ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the pronoun database");
							console.log(err);
							func("pronoun db error");
						}
						else{
						console.log("making database call");
						func(rows[0].idpronoun);
						}
					});
		return data;

	},
	"[interjection]": function (db, func){
		var data =	db.query("SELECT idinterjection FROM interjection ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the interjection database");
							console.log(err);
							func("intr db error");
						}
						else{
						console.log("making database call");
						func(rows[0].idinterjection);
						}
					});
		return data;

	},
	"[conjunction]": function(db, func){
		var data =	db.query("SELECT idconjunction FROM conjunction ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the conjunction database");
							console.log(err);
							func("conj db error");
						}
						else{
						console.log("making database call");
						func(rows[0].idconjunction);
						}
					});
		return data;

	},
	"[preposition]": function(db, func){
		var data =	db.query("SELECT idpreposition FROM preposition ORDER BY RAND() LIMIT 1", function (err, rows){
						if(err){
							console.log("There was an error accessing the preposition database");
							console.log(err);
							func("prep db error");
						}
						else{
							console.log("making database call");
							func(rows[0].idpreposition);
						}
					});
		return data;

	}
};

var inWord = {
	'insert' : function (db, word, func){
		db.query("INSERT INTO " + word.entryType + "(id" + word.entryType + ") " + "VALUES (" + "'" + word.dbEntry + "' )", function (err, rows){
			if(err){
				console.log("There was an error inserting into db" + err);
				func(true);
			}
			else{
				console.log("Inserting into database");
				func(false);
			}
		});

	}
};

module.exports.insertWord = function(db, word, func){
	inWord['insert'](db, word, func);
};

module.exports.recurseWords = function getWords(db, wordList, outList, func){
	"use strict";
	var type = wordList.shift();
	console.log(type + "first recurse" + wordList.length);
	if(!(getWord.hasOwnProperty(type))){
		outList.push(type[0]);
		if(wordList.length === 0){
			func(outList);
			return;
		}
		console.log("got here");
		getWords(db, wordList, outList, func);
	}
	else{
		getWord[type](db, function (rows){
			console.log("database call is over");
			outList.push(rows);
			if(wordList.length === 0){
				func(outList);
			}
			else{
				getWords(db, wordList, outList, func);
			}
		});
	}
};
