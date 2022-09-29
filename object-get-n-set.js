/*
Fill in the object constructor with the following 
methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one 
argument and it has to be a string. These methods must 
be the only available means of interacting with the 
object.
*/

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullname = firstAndLast;
  this.getFullName = function () {
    return fullname;
  };
  this.getFirstName = function () {
    return fullname.split(' ')[0];
  };
  this.getLastName = function () {
    return fullname.split(' ')[1];
  };
  this.setFirstName = function (name) {
    return (fullname = name + ' ' + fullname.split(' ')[1]);
  };
  this.setLastName = function (name) {
    return (fullname = fullname.split(' ')[0] + ' ' + name);
  };
  this.setFullName = function (name) {
    fullname = name;
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
