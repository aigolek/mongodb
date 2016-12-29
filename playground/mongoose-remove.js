const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
	console.log(result);
})

// Todo.findOneAndRemove
// Todo.findOneAndRemove('58649f5e6aecd36ddcab3c98').then((todo) => {

// });
Todo.findByIdAndRemove('58649f5e6aecd36ddcab3c98').then((todo) => {
	console.log(todo)
});


