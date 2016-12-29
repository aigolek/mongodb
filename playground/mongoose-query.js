const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "58646abda5b4af8317814a11";

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid')
// }
// Todo.find({
// 	_id: id
// }).then((todos)=> {
// 	console.log('Todos ', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=> {
// 	console.log('Todo ', todo);
// });

// Todo.findById(id).then((todo)=> {
// 	if(!todo){
// 		return console.log('ID not found!')
// 	}
// 	console.log('Todo  by id', todo);
// }).catch((e) => console.log(e));


var id = "58646abca5b4af8317814a09";

if(!ObjectID.isValid(id)){
	console.log('ID not valid')
}
User.find({
	_id: id
}).then((users)=> {
	console.log('users ', users);
});

User.findOne({
	_id: id
}).then((user)=> {
	console.log('user ', user);
});

User.findById(id).then((user)=> {
	if(!user){
		return console.log('ID not found!')
	}
	console.log('user  by id', user);
}).catch((e) => console.log(e));