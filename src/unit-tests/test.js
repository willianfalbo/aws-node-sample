/*************Test******************/
var test = require('unit.js');
var str = 'Error from Forma Turismo!';

test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hello')) {
  console.log('Passed');
}
/***********************************/
