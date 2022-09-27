/*
 For example, if the first argument is
  [{ first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }],
   and the second argument is { last: "Capulet" }, 
   then you must return the third object from the 
   array (the first argument), because it contains 
   the name and its value, that was passed on as the 
   second argument.
 */

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);
