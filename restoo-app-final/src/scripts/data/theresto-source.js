import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoSource {
  static async homeResto() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async sendReview(review) {
    const response = await fetch(API_ENDPOINT.SEND_REVIEW, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default TheRestoSource;
