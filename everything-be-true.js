/*
Check if the predicate (second argument) is truthy on 
all elements of a collection (first argument).

In other words, you are given an array collection of 
objects. The predicate pre will be an object property 
and you need to return true if its value is truthy. 
Otherwise, return false.

In JavaScript, truthy values are values that translate 
to true when evaluated in a Boolean context.

Remember, you can access object properties through 
either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  let counter = 0;
  for (let c in collection) {
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  return counter === collection.length;
}

console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'isBot'
  ),
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'name'
  ),
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'role'
  )
);
