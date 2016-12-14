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

    var imgLi = document.createElement('img');
    imgLi.src = pic.thumbnail;
    thumbnailList.appendChild(imgLi);
  }
});

thumbnailList.addEventListener('click', function(evt) {
console.log(evt.target);
var attr = evt.target.getAttribute('data-index');
console.log(attr);

var currentlySelected = document.querySelector('.selected');
  if (currentlySelected != null) {
    currentlySelected.classList.remove('selected');
  }
    evt.target.classList.add('selected');

var thumbImage = apiData.pictures[attr];
console.log('the mutant', mutant);

var display = document.querySelector('.display');
display.innerHTML = '';

// starting from here

var fullSizeImg = document.createElement('img');
fullSizeImg.src = thumbImage.fullSize;

fullSizeImg.appendChild(img);


var description = document.createElement('p');
description.textContent = thumbImage.description;

display.appendChild(description);

// check to see if it works from here

});
