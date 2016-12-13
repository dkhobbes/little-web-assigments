var promise =$.ajax({
  url:'/api/pics'
});

var apiData;
var thumbnailList = document.querySelector('.picture-thumbnail');

promise.done(function(data) {
  apiData = data;
  console.log('the data', data);

  for (var i = 0; i < data.pictures.length; i++) {
    var pic = data.pictures[i];
    console.log('pic', pic);
  }

});
