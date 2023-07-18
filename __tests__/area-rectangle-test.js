'use strict';

test('area of rectangle with width 3 and height 4 to equal 12', () => {
  const ShapeMath = require('../src/index.js');
  expect(ShapeMath.area_rectangle(3, 4)).toBe(12);
})

// test('area of rectangle with width 3 and height 4 to equal 12', () => {
//   const ShapeMath = require('../index.js');
//   expect(ShapeMath.area_rectangle(3, 3)).toBe(10);
// })

// test('area of rectangle with width 3 and height 4 to equal 12', () => {
//   const ShapeMath = require('../index.js');
//   expect(ShapeMath.area_rectangle(4, 4)).toBe(13);
// })