/*eslint-disable */

const countMovies = require('../__mocks__/itemCounter.js');

describe('This tests the movies counter', () => {
  test('Expected to Return 3', () => {
    expect(countMovies()).toEqual(10);
  });
});