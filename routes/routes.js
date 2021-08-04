const controllers = require('../controllers/controllers.js');
module.exports = function(app){

  app.get('/', controllers.mainPage);
  app.get('/all', controllers.readSeats);
  app.post('/1', [controllers.seatsPage, controllers.renderPage]);
  // app.get('/data', controllers.readSeats);




}
