// Setup Express App
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = 8080;
// Controllers
var heroCtrl = require('./controllers/heroCtrl');
// Body Parser
app.use(bodyParser.json());
// Hero Endpoints
app.post('/api/heroes', heroCtrl.create);
app.get('/api/heroes', heroCtrl.getHeroes);
app.get('/api/heroes/:heroId', heroCtrl.getHero);
// Power Endpoints

// Hero_Power Endpoints

// Listen
app.listen(PORT, function(){
   console.log('Listening on port ' + PORT);
})
