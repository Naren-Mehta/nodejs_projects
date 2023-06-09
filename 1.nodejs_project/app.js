// const http = require('http');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Controllers
const errorController = require('./controllers/error');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname, 'public')));
app.use(errorController.getError);




app.listen(3001);