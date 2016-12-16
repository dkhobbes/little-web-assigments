(function(){

  var inputer =document.querySelector('.word-input');
  var displayUL = document.querySelector('.display-list');
  var display =document.querySelector('.link-template');

  function requestData() {
    var promise = $.ajax({
      url:'https://api.github.com/search/repositories?q=' + inputer.value
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



    // var beerStuffList= document.querySelector('.beer-stuff');
    //   var templateScript = document.querySelector('.beer-template');
    //   var templateHtml = templateScript.innerHTML;
    //
    //   var html = '';
    //   for (var i = 0; i < data.length; i++) {
    //     var beer = data[i];
    // console.log(beer);
    //     var output = Mustache.render(templateHtml, beer);
    //     html += output;
    //   }
    //   beerStuffList.innerHTML = html;


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
