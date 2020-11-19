const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const template = handlebars.create({
    extname: 'hbs',
    defaultLayout: 'default',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
});

const Users = require('./models/Users');
const routesWeb = require('./routes/web');
const routesApi = require('./routes/api');

app.engine('hbs', template.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routesWeb);
app.use('/api/', routesApi);

module.exports = app;