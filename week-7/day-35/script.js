var gifList = document.querySelector('#gif-list');
var nextButton = document.querySelector('.next');
var previousButton = document.querySelector('.previous');
var counter = document.querySelector('.counter');
var page = 0;
var displayPage = page + 1;

nextButton.addEventListener('click', function() {
  page += 1;
  console.log('page is now', displayPage);

  localStorage.setItem('page-number', page);

  loadData();
  counter.innerHTML = displayPage;

});

previousButton.addEventListener('click', function() {
  console.log('page is now at the beginning', displayPage);

  if (page === 0) {
    return;
  }

  page -=1;
  localStorage.setItem('page-number', page);

  loadData();
  counter.innerHTML = displayPage;

});


counter.innerHTML = displayPage;

console.log('page', page, 'storedValue', storedValue);

var storedValue = storedValue.getItem('page-number');
  if (storedValue !== null) {
    page = Number(storedValue);
  }

function loadData(){

  $.ajax({
    url:
    'http://api.giphy.com/v1/gifs/search?q=megatron&api_key=dc6zaTOxFJmzC&offset=' + page * 25
  })
  .done(function(apiResult) {
    console.log(apiResult);
    gifList.innerHTML ='';

    for (var i = 0; i < apiResult.data.length; i++) {
      var obj = apiResult.data[i];

      var li = document.createElement('li');
      var img = document.createElement('img');
      img.src = obj.images.downsized.url;
      li.appendChild(img);

      gifList.appendChild(li);
    }

  });

}
loadData();
