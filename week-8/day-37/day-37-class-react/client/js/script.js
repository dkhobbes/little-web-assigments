(function() {

  class Person { // defining the thing

    sayName() {
      console.log("My name is", this.firstName);
    }
  }

  var bob = new Person(); // Creating a new instance of the thing
  bob.firstName = "Bob";
  bob.lastName = "Smith";
  console.log('bob', bob);
  bob.sayName();

  var mary = new Person(); // Creating a new instance of the thing
  mary.firstName ='Mary';
  mary.lastName = "Poppins";
  mary.sayName();
  // var numbers1 = [1, 2, 3];
  // var numbers2 = [4, 5, 6, 7];
  //
  // console.log('first', numbers1.length, 'second', numbers2.length);
  //


})();
