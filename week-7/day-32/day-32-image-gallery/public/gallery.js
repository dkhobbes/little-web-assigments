var promise =$.ajax({
  url:'/api/pics'
});

var apiPics;
var thumbnailList = document.querySelector('.picture-thumbnail');
var display = document.querySelector('.display');

promise.done(function(data) {
  apiPics = data;

  for (var i = 0; i < data.pictures.length; i++) {
    var pic = data.pictures[i];
    var imgLi = document.createElement('img');
    imgLi.src = pic.thumbnail;
    imgLi.setAttribute('data-index',i)
    thumbnailList.appendChild(imgLi);
  }
});

thumbnailList.addEventListener('click', function(evt) {
console.log(evt.target);
var attr = evt.target.getAttribute('data-index');

// var currentlySelected = document.querySelector('.selected');
//   if (currentlySelected != null) {
//     currentlySelected.classList.remove('selected');
//   }
//     evt.target.classList.add('selected');

var thumbImage = apiPics.pictures[attr];

display.innerHTML = '';

var fullSizeImg = document.createElement('img');
fullSizeImg.src = thumbImage.fullSize;

display.appendChild(fullSizeImg);


var description = document.createElement('p');
description.textContent = thumbImage.description;

display.appendChild(description);


});
