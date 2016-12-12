(function () {

  var theList = document.querySelector('.user-list');

  var promise = $.ajax({
    url:'https://api.github.com/search/users?q=cheese'
  });

  promise.done(function(data) {
    console.log('data is back', data);

    for (var i = 0; i < data.items.length; i++) {
      var user = data.items[i];
      console.log('the user', user);

      var li = document.createElement('li');
      li.textContent = user.login;

      theList.appendChild(li);
    }

  });

})();
