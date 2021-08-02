
var seatsArr = [];
var seatPerRow = 3;
var rows = 3;
var currentRow = 1;

while (rows-1) {
  rows--
  var seats = seatPerRow
  var currentSeat = 1
  var busy = Boolean(Math.round);
  // var busy = Boolean(Math.round(Math.random()));
  while(currentSeat <= seats){
    let seat = {
      place: currentSeat,
      row: rows,
      busy: false
      // busy: busy
    }
    currentSeat++
    seatsArr.push(seat)
  }
}
console.log(seatsArr);
// module.exports = {
//   seatsArr
// }
var seatsWrap = document.createElement('div');
seatsWrap.classList.add('seats')

for (var index in seatsArr) {
  var seat = document.createElement('div');
  seat.className = 'seat';
  seat.addEventListener('click', function () {
    this.classList.toggle('is-selected')
  });
  seat.innerHTML =seatsArr[index].place + ';' + seatsArr[index].row;
  seatsWrap.appendChild(seat);
}
document.body.appendChild(seatsWrap)

// var seatsJson = {
//     accounting: []
// };
// for(var i in seatsArr) {
//     var item = seatsArr[i];
//     seatsJson.accounting.push({
//         "place" : item.place,
//         "row"  : item.row,
//         "busy"       : item.busy
//     });
// }
// console.log(seatsJson, 'rrr');
//
// // const product_id_list = ['pid1234', 'pid1235']
// // const bodyFormData = new FormData();
// seatsArr.forEach((item) => {
//     seatDB.append('seatsArr[]', item);
// });
// axios.post('/seats', bodyFormData)
//
//
// axios.post('/seats', seatsJson)
//   .then(function (responce) {
//     responce.data.forEach(function(item) {
//       let li = document.createElement('LI')
//       li.innerText = item.name
//       list.appendChild(li)
//     })
//   })
//
// // const product_id_list = ['pid1234', 'pid1235']
//
// const bodyFormData = new FormData();
//
// seatsArr.forEach((item) => {
//     bodyFormData.append('seatsArr[]', item);
// });
//
// axios.post('/seats', bodyFormData)
