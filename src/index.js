const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan')
const port = 3000
app = express();

app.use(morgan('combined'))

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//Template engine handlebars