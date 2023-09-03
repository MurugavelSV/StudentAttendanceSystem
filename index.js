const express = require('express');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const port = 8000;
const app = express();

app.use(cookieParser());

app.use(express.urlencoded({extended: false}));

app.use(express.static('./assets'));

app.use(expressLayout);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes/index'));

app.listen(port, (err) => {
    if(err){
        console.log(`Error in starting up the server`);
    }else{
        console.log(`Server is up and running at port: ${port}`);
    }
});