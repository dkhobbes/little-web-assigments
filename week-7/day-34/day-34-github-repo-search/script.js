(function(){

  var inputer =document.querySelector('.word-input');
  var displayUL = document.querySelector('.display-list');
  var display =document.querySelector('.link-template');
  var previousClick = document.querySelector('.previous');
  var nextClick = document.querySelector('.next');
  var counter = document.querySelector('.counter');
  var page = 0;


previousClick.addEventListener('click', function() {
  page -= 1;
  console.log('page is now', page);
  localStorage.setItem('page-number', page);
  requestData();
  counter.innerHTML = page;
});

nextClick.addEventListener('click', function() {
  page += 1;
  console.log('page is now', page);
  localStorage.setItem('page-number', page);
  requestData();
  counter.innerHTML = page;
});

  counter.innerHTML = page;
  console.log('page', page, 'stored value', storedValue);

  var storedValue = storedValue.getItem('page-number');
    if (storedValue !== null ) {
      page = Number(storedValue);
    }

  function requestData() {
    var promise = $.ajax({
      url:'https://api.github.com/search/repositories?q=' + inputer.value * 25
    });

    promise.done(function(data){
    console.log('this data', data);

    var templateHtml = display.innerHTML;


    var html = '';
    for (var i= 0; i < data.items.length; i++) {
      var item = data.items[i];
      console.log(item);
      var output = Mustache.render(templateHtml, item);
      html += output;
    }
      displayUL.innerHTML = html;

    });
  }


  inputer.addEventListener('keyup', function(evt) {
    console.log(evt.keyCode);

    if (evt.keyCode === 13) {
      console.log('do something');
      requestData()
    }
  });

})();
