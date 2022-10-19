const { expectCt } = require('helmet');

describe('Testing request errors', () => {
  it('Should validate 404 request status code and not found message', () => {
    cy.request({
      url: '/users/6a961ffb-35ef-46c1-9202-3f99bbf3bda1',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body['error']).to.be.eq('Not Found');
      //This is another way to assert personalized body responses while an error is returned
      expect(response.body).to.have.property('message', 'User not found');
    });
  });
});
