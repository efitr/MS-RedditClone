////////////////////////////////////////////////////////////
/////////////// NPM Dependencies
// Templating engine Handlebars made using express

const exphbs = require('express-handlebars');

// Middleware made to simplify boilerplate code
const express = require('express');

var app = express();

// Dependencies inialized through express
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

////////////////////////////////////////////////////////////
/////////////// Controller Area

const controller_post = require('./controllers/posts.js')(app);

////////////////////////////////////////////////////////////
/////////////// Port in which this will reproduce

const port = 3000;

app.listen(port, function(){
  console.log('Server started on port' +port);
});
