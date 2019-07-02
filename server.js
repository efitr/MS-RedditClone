////////////////////////////////////////////////////////////
/////////////// Environment
const dotenv = require('dotenv').config();

////////////////////////////////////////////////////////////
/////////////// NPM Dependencies

// Templating engine Handlebars made using express
const exphbs = require('express-handlebars');

//This makes sure that every data that comes is of a decided type of file, json in this case
//You will only look at data that is json and nothing else
const bodyParser = require('body-parser');

//////////////////////////////////////////////////////////
/////////////// Middleware made to simplify boilerplate code
const express = require('express');

var app = express();


// Dependencies inialized through express
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Makes JSON be readable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

////////////////////////////////////////////////////////////
/////////////// Controller Area

const controller_post = require('./controllers/posts.js')(app);

////////////////////////////////////////////////////////////
/////////////// Port in which this will reproduce

const port = 3000;

app.listen(port, function(){
  console.log('Server started on port ' +port);
});
