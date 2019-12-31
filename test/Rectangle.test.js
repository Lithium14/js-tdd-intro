const assert = require('assert');
const Rectangle = require('../Rectangle');


describe('Rectangle', () => {

    it('true', () => {
        const rectangle = new Rectangle(5, 5);
        assert.strictEqual(rectangle.isSquare(), true);
    });

    it('false', () => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(rectangle.isSquare(), false);
    });

    it('it is ok for the area', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getArea(), 91);
    });

    it('it is ok for the perimeter', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getPerimeter(), 40);
    });
})


