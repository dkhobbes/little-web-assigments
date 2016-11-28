// console.log('hello from David');

// console.log('document', window.document);

// console.log('count of body children', document.body.children);

// console.log('second child', document.body.children[1]);

var theList = document.getElementById('cool-list');
// console.log('the list', theList);

var coolParagraph = document.getElementById('cool-paragraph');
// console.log('the p', coolParagraph);

var h1 = document.getElementById('header-stuff');
h1.textContent = 'New Header';

var ul = document.querySelector('.cool-list');
// console.log(ul);

var allUls = document.querySelectorAll('ul');
// console.log(allUls);

var lis = document.querySelectorAll('li');
lis.textContent = 'new list items';

for (var i = 0; i < lis.length; i++) {
  var theLi =lis[i]
  theLi.textContent = 'new list items';
}

var coolList = document.querySelector('#cool-list');

for (var i = 0; i < coolList.children.length; i++) {
    var theCoolOne = coolList.children[i];
    theCoolOne.textContent = 'cooler than you';
}

var section = document.querySelector('#put-thing-here');

var str = '<p>Sub paragraph "If I can do this I am awesome"</p><ul>';

var animals = ['dog', 'cat', 'fish', 'mouse'];

for (var i = 0; i < animals.length; i++) {
  str += '<li>' + animals[i] + '</li>';
}

str += '</ul>';

section.innerHTML = str;
console.log(section);
