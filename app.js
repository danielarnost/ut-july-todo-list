var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
var Sequelize = require ('sequelize');
var exphbs = require('express-handlebars');

app.engine('handlebars',  exphbs({defaultLayout: 'main'}));
app.set('view engine',  'handlebars');


var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
var models = require ('./models');
// console.log(models.TodoItem);
// var exhbs = require ('handlebars', exhbs({defaultLayout: 'main'}))

var models = require('./models');
models.TodoItem.sync({force:true}).then(function(){
	return models.TodoItem.bulkCreate(
		[{
		task: "Watch Rogue One",
		done: false
		},
		{
		task: "Clean house",
		done: false
		},
		{
		task: "Get a haircut",
		done: false
		}]
);
});

// var TodoItem = Sequelize.define('todoitem', {
// 	task: Sequelize.STRING,
// 	done: Sequelize.BOOLEAN
// });

// 	TodoItem.sync({force:true}).then(function(){
// 		return TodoItem.create({
// 			task: 'Watch Rogue One',
// 			done: false
// 	});
// });


app.get ('/', function (req, res){
	
	//res.render becomes an option because of hanldebars
	//grab all todos
	//SELECT * FROM todoitems;

	models.TodoItem.findAll({}).then(function(data){
		console.log(data);
	// res.send(data);  
//	});** use later*****
res.render('home', {tasks:data});	
});

});
app.post('/todos/', function (req, res) {
	console.log(req.body.newTask);
	models.TodoItem.create({
			task: req.body.newTask,  //hardcoding a new task?
			done: false
	}).then(function(data){
			//add a new to do 
res.redirect('/');
	
	});

});

app.put('/todos/:id', function (req, res) {
res.send('update with id!');
});

app.delete('/todos/:id', function (req, res) {
//update todo with a specific id
res.send('delete with id!');
});




app.listen(PORT, function() {
	console.log('listening on ' + PORT);
});