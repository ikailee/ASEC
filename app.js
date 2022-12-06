const express = require('express');
const swapiRouter = require('./routes/swapi');
const app = express();
const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/', swapiRouter);

app.listen(port, () => { console.log('Server started on port ' + port); });