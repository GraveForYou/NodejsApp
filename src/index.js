const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000

const route = require('./routes')


app.use(express.static(path.join(__dirname, 'public')));

// HTTP loger
app.use(morgan('combined'))

// Template engine
var hbs = handlebars.create({
    extname: '.hbs',
    helpers: {
        sayHello: function() { alert("Hello World") },
        getStringifiedJson: function(value) {
            return JSON.stringify(value);
        }
    },
    defaultLayout: 'main',
    // partialsDir: ['views/partials/'],
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//Routes init
route(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})