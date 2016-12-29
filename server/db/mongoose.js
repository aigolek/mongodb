var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.export = {mongoose};

// process.env.NODE_ENV == 'production';
// process.env.NODE_ENV == 'development';

