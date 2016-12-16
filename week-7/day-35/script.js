alert('hello');

var gifList = document.querySelector('#gif-list')

$.ajax({
  url:
  'http://api.giphy.com/v1/gifs/search?q=megatron&api_key=dc6zaTOxFJmzC&offset=0'
})
.done(function(apiResult) {
  console.log(apiResult);

  for (var i = 0; i < apiResult.data.length; i++) {
    var obj = apiResult.data[i];
    console.log(obj);

    var li = document.createElement('li');
    var img = document.createElement('img');
    li.appendChild(img);

    gifList.appendChild(li);
  }

});
