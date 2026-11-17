function calculateAreaDeclaration(width, height) {
  return width * height;
}
const calculateAreaExpression = function (width, height) {
  return width * height;
};
const calculateAreaArrow = (width, height) => width * height;
console.log('Function Declaration:', calculateAreaDeclaration(5, 10));
console.log('Function Expression:', calculateAreaExpression(5, 10));
console.log('Arrow Function:', calculateAreaArrow(5, 10));