const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI || 'mongodb://localhost/desarrollomern';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database connected');
});