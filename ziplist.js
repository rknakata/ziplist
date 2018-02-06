/* Write a function called zipList that accepts two lists of equal length and returns the result of alternatingly
taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the function should return
[‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore. Now write a function called zipListTheSimpleWay
that does the same thing using Underscore. */

function zipList(first, second) {
  const retList = [];
  while (first.length > 0 || second.length > 0) {
    if (first.length > 0 && second.length > 0) {
      retList.push(first.shift());
      retList.push(second.shift());
    } else
    if (first.length > 0 && second.length === 0) {
      while (first.length > 0) {
        retList.push(first.shift());
      }
    } else
    if (second.length > 0 && first.length === 0) {
      while (second.length > 0) {
        retList.push(second.shift());
      }
    }
  }
  if (second.length !== 0 && first.length !== 0) {
    return undefined; // should not hit this
  }
  return retList;
}

// const test1 = ['a', 'b', 'c', 'd', 'e'];
const test1 = ['a', 'b', 'c'];
// const test2 = [1, 2, 3];
const test2 = [1, 2, 3, 4, 5, 6];

console.log(zipList(test1, test2));
