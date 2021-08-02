const controllers = require('../controllers/controllers.js');
module.exports = function(app){

  app.get('/', controllers.mainPage);
  app.get('/all', controllers.readSeats);
  app.post('/seats', controllers.seatsPage);
  // app.get('/data', controllers.readSeats);




}
