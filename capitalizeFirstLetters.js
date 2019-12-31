
const assert = require('assert');

function capitalizeFirstLetters(input) {
    return input.split(' ').map((letter) => {
        return letter.charAt(0).toUpperCase() + letter.slice(1);
    }).join(' ');
}



assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirst('i am learning TDD'), 'I Am Learning TDD');

assert.strictEqual(capitalizeFirst('z'), 'Z');

assert.strictEqual(capitalizeFirst(''), '');
