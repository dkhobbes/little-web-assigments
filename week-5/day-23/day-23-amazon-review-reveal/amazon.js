var clickMe = document.querySelector('.read-style');

  var readThis = document.querySelector('.main-text');
  var  container = document.querySelector('.container');
  var  readMore = document.querySelector('.read-more');
  var  readLess = document.querySelector('.read-less');
  var  readStyle = document.querySelector('.');

  var height = constrainedHeight.clientHeight;

  var heightNormal = containerHeight.clientHeight;

  container.style.maxHeight = constrainedHeight.clientHeight + "px";

  if (container.className === "container"){
    container.style.maxHeight = heightNormal + "px";
  }
  else if(container.className === "container show-container"){
    container.style.maxHeight = height + "px";
  };

  container.classList.toggle("show-container");

  setTimeout(function(){
    readMore.classList.toggle("read-more");
  }, 500);

  setTimeout(function(){
    readLess.classList.toggle("read-more");
  }, 500);

})

});
