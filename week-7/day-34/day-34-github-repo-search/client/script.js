(() => {

  var inputer =document.querySelector('.word-input');
  var displayUL = document.querySelector('.display-list');
  var display =document.querySelector('.link-template');
  var previousClick = document.querySelector('.previous');
  var nextClick = document.querySelector('.next');
  var counter = document.querySelector('.counter');
  var buttonCount = document.querySelector('.button-count');
  var page = 1;

  var totalCount;

  function requestData() {
    var searchInput = inputer.value + "&page=" + page;

    var promise = $.ajax({
      url: "https://api.github.com/search/repositories?q=" + searchInput
    });

    promise.done((data) => {

    displayUL.innerHTML = '';

    for (var i= 0; i < data.items.length; i++) {
      var item = data.items[i];
      var templateHtml = display.innerHTML;
      var output = Mustache.render(templateHtml, item);
      displayUL.innerHTML= displayUL.innerHTML + output;
    }

      totalCount =data.total_count;
      counter.innerText = page;
      buttonCount.style.display = "block"
    });
  }

  inputer.addEventListener('keyup',(evt) => {

    page = 1;

    if (evt.keyCode === 13) {
      requestData();
      console.log(page);
      previousClick.classList.add("grey");
    }

  });

  nextClick.addEventListener('click', () => {
    // page -= 1;
    // requestData();
    // counter.innerHTML = page;
    if (page < (totalCount / 30)){
      previousClick.classList.remove("grey");
      page++;
      requestData();
    }
    else if (page >= (totalCount / 30)){
      nextClick.classList.add("grey")
    }
  });

  previousClick.addEventListener('click', () => {
    // page += 1;
    // requestData();
    // counter.innerHTML = page;
    if (page > 1){
     nextClick.classList.remove("grey");
     page--;
     requestData();
   }

 });

})();
