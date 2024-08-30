const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  calculator.setValues("1", "2", "+");
  expect(calculator.calculate()).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  calculator.setValues("3", "5", "-");
  expect(calculator.calculate()).toBe(2);
});

test('multiplies 4 * 3 to equal 12', () => {
  calculator.setValues("4", "3", "X");
  expect(calculator.calculate()).toBe(12);
});

test('divides 8 / 2 to equal 4', () => {
  calculator.setValues("2", "8", "/");
  expect(calculator.calculate()).toBe(4);
});

