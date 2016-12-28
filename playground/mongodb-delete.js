const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB');
	}
	console.log('Connected to MongoDB server');
	//deleteMany
	// db.collection('Todos').deleteMany({
	// 	text: 'Eat lunch'
	// },(err, result) => {
	// 	if(err){
	// 		return console.log('Unable to delete')
	// 	}
	// 	console.log(result);
	// });
	//deleteOne
	// db.collection('Todos').deleteOne({
	// 	text: 'Eat lunch'
	// },(err, result) => {
	// 	if(err){
	// 		return console.log('Unable to delete')
	// 	}
	// 	console.log(result);
	// });
	//find one and delete
	// db.collection('Todos').findOneAndDelete({
	// 	text: 'Eat lunch'
	// }).then((result) => {
	// 	if(err){
	// 		return console.log('Unable to delete')
	// 	}
	// 	console.log(result);
	// });
	db.collection('Users').deleteMany({text: 'Aigul'});
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('586402eaaacd4a072ac7fac9')
	}).then((result) => {
		if(err){
			return console.log('Unable to delete')
		}
		console.log(result);
	});
	db.close();
});