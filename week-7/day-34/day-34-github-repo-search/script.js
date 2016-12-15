(function(){

  function requestData() {}
  var promise = $.ajax({
    url:'https://api.github.com/search'
  });

promise.done(function(data){
  console.log('this data', data);

});

}
requestData();
})();
