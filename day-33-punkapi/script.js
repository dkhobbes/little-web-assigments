console.log("hi");

console.log('look at this', btoa('hello'));
console.log(atob('aGVsbG8='));

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function() {
  page += 1;
  requestData();

  previousButton.classList.remove('hidden');
});

var previousButton = document.querySelector('.previous-button');
previousButton.addEventListener('click', function() {


  page -= 1;

  if (page === 1) {
    previousButton.classList.add('hidden');
  }


  requestData();
});


var page = 1;

function requestData () {

var promise = $.ajax({
  url:'https://punkapi.com/api/v1/beers?page=' + page,
  headers: {
    "Authorization": "Basic " + btoa('6a856ff113074b919ac60d98074beaac:')

},
});

promise.done(function(data) {
  console.log('this data', data);

  var beerStuffList= document.querySelector('.beer-stuff');
  var templateScript = document.querySelector('.beer-template');
  var templateHtml = templateScript.innerHTML;

  var html = '';
  for (var i = 0; i < data.length; i++) {
    var beer = data[i];
console.log(beer);
    var output = Mustache.render(templateHtml, beer);
    html += output;
  }
  beerStuffList.innerHTML = html;
});
}

requestData();
