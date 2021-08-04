var Seat = require("../models/model");
module.exports = {

  mainPage: function (req, res, next) {
    res.render('main', { title: 'Cinema'});
    next();
  },

  seatsPage: function (req, res, next) {
    var seatDB = new Seat(req.body)
    seatDB.save()
      .then(function (result) {
        next();
      })
      .catch(err => {
        return res.status(420).json(err)
        // return res.end()
      })
    next();
      // .catch(err => {
      //   return res.status(420).json(err)
      // })

    // res.json(record);
    // res.render('main', { title: 'Cinema'});
  },
  renderPage: function (req, res) {
    const numberOfTickets = 1
    var data = req.body
    Seat.find({}, null, {limit: numberOfTickets, sort: {createdAt: 'desc'}}, function(err, records) {

       res.render('1', { data: data })

    });
  },
  // seatsPage: function (req, res, next) {
  //   var seatDB = new Seat(req.body)
  //   seatDB.save()
  //     .then(function (result) {
  //       next();
  //     })
  //     .catch(err => {
  //       return res.end()
  //     })
  //     // .catch(err => {
  //     //   return res.status(420).json(err)
  //     // })
  //   next();
  //   // res.json(record);
  //   res.render('main', { title: 'Cinema'});
  // },
  readSeats: function(req, res){
    Seat.find({}).sort('date')

    .then(record => {
      return res.json(record)
    })
    .catch(err => {
      return res.json(err)
    })
  }

}
