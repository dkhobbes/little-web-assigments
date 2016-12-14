
var promise = $.ajax({
  url:'/api/x-men'
});

var apiData;
var mutantList = document.querySelector('.mutant-list');

promise.done(function(data) {
  apiData = data;
// console.log('the data', data);


// console.log(mutantList);
for ( var i = 0; i < data.xmen.length; i++) {
  var mutant = data.xmen[i];
  // console.log('mutant', mutant);

  var li = document.createElement('li');
  li.textContent = mutant.character;
  li.setAttribute('data-index', i);

  mutantList.appendChild(li);

  }
});

var templateTag = document.querySelector('#character-template');
var templateHtml = templateTag.innerHTML;
console.log(templateHtml);

mutantList.addEventListener('click', function(evt) {
console.log(evt.target);
var attr = evt.target.getAttribute('data-index');
console.log(attr);

var currentlySelected = document.querySelector('.selected');
if (currentlySelected != null) {
  currentlySelected.classList.remove('selected');

}
evt.target.classList.add('selected');


var mutant = apiData.xmen[attr];
console.log('the mutant', mutant);

var display = document.querySelector('.display');
var output = Mustache.render(templateHtml, mutant);

console.log(output);
display.innerHTML = output;


// display.innerHTML = '';
//
// var h2 = document.createElement('h2');
// h2.textContent = mutant.realName;
//
// display.appendChild(h2);
//
// var img = document.createElement('img');
// img.src = mutant.imageUrl;
//
// display.appendChild(img);
//
// var descriptionTitle = document.createElement('h3');
// descriptionTitle.textContent = 'Description';
// display.appendChild(descriptionTitle);
//
// var description = document.createElement('p');
// description.textContent = mutant.description;
// display.appendChild(description);
//
// var powersTitle = document.createElement('h3');
// powersTitle.textContent = 'Powers';
// display.appendChild(powersTitle);
//
// var powers = document.createElement('ul');
// display.appendChild(powers);

for (var i = 0; i < mutant.powers.length; i++) {
  var powerlist = mutant.powers[i];

  var powerlistItem = document.createElement('li');

  powerlistItem.textContent = mutant.powers[i];

  // powers.appendChild(powerlistItem);
}

});
