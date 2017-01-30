var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

app.get('/api/latLngLocation', function(req,res){
  request('http://api.brewerydb.com/v2/search/geo/point?key=f4b03113073283a320e1c5d0630a4d0d&lat=35.772096&lng=-78.638614', function (error, response, body) {
    console.log('status code', response.statusCode);
      if (!error && response.statusCode == 200) {
          res.send(body);
      }
  });
});

app.get('/api/zipCodeLocations', function(req,res) {
  request('http://api.brewerydb.com/v2/locations?key=f4b03113073283a320e1c5d0630a4d0d&postalCode=75001', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/texas', function(req,res) {
  request('http://api.brewerydb.com/v2/locations?key=f4b03113073283a320e1c5d0630a4d0d&region=texas', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theibu', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&ibu=50,100', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theabv', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&abv=6,8', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.listen(5000, function() {
  console.log('listening on port 5000.');
});
