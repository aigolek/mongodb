const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB');
	}
	console.log('Connected to MongoDB server');

	// FindOne and update
	// db.collection('Todos')
	// .findOneAndUpdate(
	// {
	// 	text: 'Eat lunch'
	// }, 
	// {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, 
	// {
	// 	returnOriginal: false
	// }
	// ).then((result) => {
	// 	console.log(result);
	// });
	db.collection('Users')
	.findOneAndUpdate(
	{
		name: 'Jane'
	}, 
	{
		$set: {
			name: 'David'
		},
		$inc: {
			age: 1
		}
	}, 
	{
		returnOriginal: false
	}
	).then((result) => {
		console.log(result);
	});
	db.close();
});