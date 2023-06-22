const {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
} = require('./prac');

const mockfn = jest.fn();

test('get full name is prudhvi raj', () => {
  expect(prac.getFullName('prudhvi', 'raj')).toBe('prudhvi raj');
});
