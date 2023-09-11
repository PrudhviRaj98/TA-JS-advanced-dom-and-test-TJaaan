function getFullName(firstName, lastName) {
  return firstName + lastName;
}

function isPalindrome(num) {
  let numstr = String(num);
  let reversestr = numstr.split('').reverse().join('');
  if (reversestr == numstr) {
    return true;
  } else {
    return false;
  }
}

function getCircumfrence(rad) {
  let cim = 2 * Math.PI * rad;
  return cim;
}

function getArea(rad) {
  let area = Math.PI * Math.pow(rad, 2);
  return area;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
};
