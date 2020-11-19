const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`Database Connection Error: ${err.message}`);
});

const app = require('./app');
const server = app.listen(8080, () => {
    console.log(`Express running: http://localhost:${server.address().port}`);
});