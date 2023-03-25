/*eslint-disable */
const jsdom = require('jsdom');
const getCommentMock = require('../__mocks__/commentCount.js');

const { JSDOM } = jsdom;

describe('Testing the comment counter', () => {
  const data = [
    { comment: 'Amazing movie', creation_date: '2023-03-23', username: 'Belete' },
    { comment: 'good in style movie', creation_date: '2023-03-23', username: 'Amanuel' },
    {
      comment: 'wow movie to watch',
      creation_date: '2023-03-23',
      username: 'Amanuel',
    },
    {
      comment: 'wow movie to watch',
      creation_date: '2023-03-23',
      username: 'Amanuel',
    },
  ];
  const dom = new JSDOM('<div class="comments"></div>');
  const { document } = dom.window;

  test('Should return 4', () => {
    const item = getCommentMock(document, data);
    expect(item).toEqual(4);
  });
});