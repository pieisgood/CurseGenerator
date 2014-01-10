var express = require('express');
var app = express();
var hbs = require('hbs');
var parser = require('./curseParser');
var words = require('./databaseCalls');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'gokulee'
});

connection.connect();

//var checkLogin = function (usr, pw){
//
//};

//view engine
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('public'));
app.use(express.bodyParser());

app.get('/', function (request, response){
	response.render('index', {title: "Curse Generator", curse: "Enter curse format here"});
});

app.get('/admin', function (request, response){
	response.render('admin', {title: "Admin login"});
});

app.get('/login', function (request, response){
	var user = request.query.user;
	var password = request.query.password;
	if(checkLogin(user, password)){
		response.render('adminInterface', {title: "Welcome Admin"});
	}
	else{
		response.render('wrong', {title: "Sorry try again"});
	}
});

app.post('/generate', function (request, response){
	console.log(request.body);
	var newCurse = request.body;
	var wordList = parser.parseText(newCurse.text);
	words.getWords(connection, wordList, function (newList){
		console.log(newList);
		response.send(parser.combineText(newList));
	});
});

app.listen(3000);