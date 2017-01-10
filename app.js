var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
var Sequelize = require ('sequelize');
var models = require ('./models');
// console.log(models.TodoItem);
// var exhbs = require ('handlebars', exhbs({defaultLayout: 'main'}))

var models = require('./models');
models.TodoItem.bulkCreate(
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
	res.send('Todolist');
	//grab all todos
});

app.post('/todos/', function (req, res) {
res.send("add a todo!");

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