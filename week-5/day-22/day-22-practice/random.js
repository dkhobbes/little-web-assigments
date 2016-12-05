// var messages = [
//   'I do not want to talk to you',
//   'I am doing more important things so cannot talk to you',
//   'I do not like you, and will not answer the phone',
//   'I am eating steak, and will call you back',
//   'I am dead and can not answer the phone'
// ];
//
//
// for (var i = 0; i < 20; i++) {
//   rand = Math.random();
//   rand = rand * 21;
//   rand = Math.floor(rand);
//   // var message = messages [rand];
//   // console.log(rand);
//   }
//   // console.log('---------------------------------');
//
// var diceRoll = Math.random();
// diceRoll = diceRoll * 20;
// diceRoll = Math.ceil(diceRoll);
// // console.log('I rolled a', diceRoll);

var people = ['Chelsey', 'Miguel', 'David', 'Chad', 'Taylor', 'Kyle', 'Kianna'];
var randomPeople = [];

for (var i = 0; i < people.length + randomPeople.length; i++) {
  var randomPersonIndex = Math.random();
  randomPersonIndex = randomPersonIndex * people.length;
  randomPersonIndex = Math.floor(randomPersonIndex);
  var personInAnArray = people.splice(randomPersonIndex, 1);
  randomPeople.push(personInAnArray[0]);
}

console.log(randomPeople);
