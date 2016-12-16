(function(){

  var inputer =document.querySelector('.word-input');
  var display =document.querySelector('.link-template');

  function requestData() {
    var promise = $.ajax({
      url:'https://api.github.com/search/repositories?q=' + inputer.value
    });

    promise.done(function(data){
    console.log('this data', data);
    // for (var i= 0; i < data.length; i++) {
    //   var item = data[i];
    // }
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
