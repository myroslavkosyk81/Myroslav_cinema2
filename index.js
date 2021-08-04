const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
}
mongoose.connect('mongodb://localhost:27017/test', mongoOptions);
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
var sassMiddleware = require('node-sass-middleware');
var path = require('path');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'css'),
    dest: path.join(__dirname, 'public', 'css'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

app.use(express.static('public'));

require('./routes/routes.js')(app);
// require('./seats.js')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
