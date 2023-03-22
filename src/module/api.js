/* eslint-disable no-unused-vars */
/* eslint import/no-cycle: 0 */

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appsEndPoint = '/apps/';
const likesEndPoint = '/likes/';
const id = 'FUkzcDvsXW9NAR';

export default class INTERACTIONS {
  static createAppId = async () => {
    try {
      const response = await fetch(baseUrl + appsEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.text();
      return data;
    } catch (error) {
      return error;
    }
  };

  static getLikes = async () => {
    try {
      const response = await fetch(
        baseUrl + appsEndPoint + id + likesEndPoint,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };
}