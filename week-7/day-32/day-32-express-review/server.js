var express = require('express');
var app = express();

app.use(express.static('public'))
app.get('/web/path', function(req, res) {
  res.send('<h1>hi there buddy</h1>');
});

app.get('/web/path/somethingelse', function(req, res) {
  res.send('something else');
});

app.get('/api/class', function(req,res) {
  var theClass = {
    name: 'Front-end Engineering',
    cohort: 'October 2016',
    students: ['Miguel', 'Chad', 'Kyle', 'Chelsey', 'David', 'Taylor']
  };
  res.send(theClass);
});

app.listen(5012, function() {
  console.log('listening on port 5012');
});
