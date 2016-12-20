"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var Person = function () {
    function Person() {
      _classCallCheck(this, Person);
    }

    _createClass(Person, [{
      key: "sayName",
      // defining the thing

      value: function sayName() {
        console.log("My name is", this.firstName);
      }
    }]);

    return Person;
  }();

  var bob = new Person(); // Creating a new instance of the thing
  bob.firstName = "Bob";
  bob.lastName = "Smith";
  console.log('bob', bob);
  bob.sayName();

  var mary = new Person(); // Creating a new instance of the thing
  mary.firstName = 'Mary';
  mary.lastName = "Poppins";
  mary.sayName();
  // var numbers1 = [1, 2, 3];
  // var numbers2 = [4, 5, 6, 7];
  //
  // console.log('first', numbers1.length, 'second', numbers2.length);
  //

})();
//# sourceMappingURL=script.js.map
