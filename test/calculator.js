import { assert } from 'chai';

// Since we are using ES modules, and the calculator is a CommonJS module,
// we need to import it dynamically.
let calculator;

describe('Calculator', function() {
    // Dynamically import the CommonJS module before the tests run.
    before(async function() {
        calculator = await import('../app/calculator.cjs');
    });

    // Test suite for add function
    describe('add()', function() {
        it('should return 7 when the values 5 and 2 are passed', function() {
            assert.equal(calculator.add(5, 2), 7);
        });

        it('should fail when the expected result is 8 for the values 5 and 2', function() {
            assert.notEqual(calculator.add(5, 2), 8);
        });
    });

    // Test suite for sub function
    describe('sub()', function() {
        it('should return 3 when the values 5 and 2 are passed', function() {
            assert.equal(calculator.sub(5, 2), 3);
        });

        it('should fail when the expected result is 5 for the values 5 and 2', function() {
            assert.notEqual(calculator.sub(5, 2), 5);
        });
    });

    // Test suite for mul function
    describe('mul()', function() {
        it('should return 10 when the values 5 and 2 are passed', function() {
            assert.equal(calculator.mul(5, 2), 10);
        });

        it('should fail when the expected result is 12 for the values 5 and 2', function() {
            assert.notEqual(calculator.mul(5, 2), 12);
        });
    });

    // Test suite for div function
    describe('div()', function() {
        it('should return 5 when 10 and 2 are passed', function() {
            assert.equal(calculator.div(10, 2), 5);
        });

        it('should fail when the expected result is 2 for the values 10 and 2', function() {
            assert.notEqual(calculator.div(10, 2), 2);
        });
    });
});
