var mongoose = require('mongoose');
var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});
var newUser = new User({
	email: 'aigul.ij@gmail.com'
});
newUser.save().then((doc) => {
	console.log(JSON.stringify(doc,undefined, 2));	
}, (e) => {
	console.log(e)
});
module.exports = {User}