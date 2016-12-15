var express = require('express'); <!-- pull express as a library -->
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

var data = [];

app.get('/api/data', function(req,res) {
  console.log('get happened');
  res.send(data);
});

  app.post('/api/data', function(req,res) {
    console.log('post happened', req.body);
    data.push(req.body.word);
    res.send('kudos buddy');
  });

app.listen(5020, function() { <!-- choose a port -->
  console.log('listening on port 5020');
});
