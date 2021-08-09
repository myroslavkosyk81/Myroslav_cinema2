const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
}
mongoose.connect('mongodb://localhost:27017/newone', mongoOptions);
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
// require('./routes/json.js');
// require('./seats.js')(app);





// var seatsArr = [];
// var seatPerRow = 2;
// var rows = 4;
// var currentRow = 1;
//
// while (rows-1) {
//   rows--
//   var seats = seatPerRow
//   var currentSeat = 1
//   var busy = Boolean(Math.round);
//   // var busy = Boolean(Math.round(Math.random()));
//   while(currentSeat <= seats){
//     let seat = {
//       place: currentSeat,
//       row: rows,
//       busy: false
//       // busy: busy
//     }
//     currentSeat++
//     seatsArr.push(seat)
//   }
// }
// console.log(seatsArr);
// const fs = require('fs');
// var alphabet = seatsArr;
// const jsonContent = JSON.stringify(alphabet);
// fs.writeFile("./alphabet.json", jsonContent, 'utf8', function (err) {
//     if (err) {
//         return console.log(err);
//     }
//
//     console.log("The file was saved!");
// });

var seatsArr = require('./alphabet.json');
console.log(seatsArr);
module.exports = seatsArr;

var seatsFunc = require('./js/seats.js');


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
