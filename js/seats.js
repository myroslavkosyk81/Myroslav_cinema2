module.exports = function(seats){

// var seatsArr = require('../alphabet.json');
// console.log(seatsArr);
// console.log(require('../index.js'));

// module.exports = {
//   seatsArr
// }
var seatsWrap = document.createElement('div');
seatsWrap.classList.add('seats')

for (var index in seatsArr) {
  var seat = document.createElement('div');
  seat.className = 'seat';
  seat.addEventListener('click', function () {
    // this.classList.add('is-selected')
    // this.classList.remove('seat is-selected')
    this.classList.toggle('is-selected')
  });

  seat.innerHTML =seatsArr[index].place + ';' + seatsArr[index].row;
  seatsWrap.appendChild(seat);
}
document.body.appendChild(seatsWrap)



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

// непотріб
// var seatsJSON = {
//     se: []
// };
// for(var i in seatsArr) {
//
//     var item = seatsArr[i];
//
//     seatsJSON.se.push({
//         "place": item.place,
//         "row": item.row,
//         "busy": item.busy
//     });
// }
// console.log(seatsJSON);
}
