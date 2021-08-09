// const controllers = require('../controllers/controllers.js');
module.exports = function(jsonn){

  const fs = require('fs');
  var alphabet = seatsArr;
  const jsonContent = JSON.stringify(alphabet);
  fs.writeFile("./alphabet.json", jsonContent, 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });




}
