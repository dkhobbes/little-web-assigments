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
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&ibu=10,19', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theibu10to19', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&ibu=10,19', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theibu20to39', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&ibu=20,39', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theibu40to70', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&ibu=40,70', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theibu71to100', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&ibu=71,100', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theibu101plus', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&ibu=101,300', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theabv', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&abv=2,4', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.send(body);
    }
  })
})

app.get('/api/theabv/:abv', function(req,res) {
  console.log(req.params.abv)
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&abv=' + req.params.abv, function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theabv5to7', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&abv=5,7', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theabv8to10', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&abv=8,10', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theabv11to13', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&abv=11,13', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.get('/api/theabv14plus', function(req,res) {
  request('http://api.brewerydb.com/v2/beers?key=f4b03113073283a320e1c5d0630a4d0d&withBreweries=y&hasLabels=y&p=1&abv=14,80', function (error,response, body) {
    console.log('status code', response.statusCode);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  })
})

app.listen(5000, function() {
  console.log('listening on port 5000.');
});
