var fs = require('fs');
var chalk = require('node');

function callback(err, data) {

  var lines = data.split('\n');

  for (var i = 2; i < lines.length; i++) {

  }
};
  fs.readFile('players_r_ruthba01_batting_standard.csv', 'utf-8', callback);
