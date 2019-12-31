
const assert = require('assert');



assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirst('i am learning TDD'), 'I Am Learning TDD');

assert.strictEqual(capitalizeFirst('z'), 'Z');

assert.strictEqual(capitalizeFirst(''), '');
