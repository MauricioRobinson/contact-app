describe('Testing status codes', () => {
  //Testing Users API Endpoints
  it('Should validate with successfull status code at /users', () => {
    cy.request('users').its('status').should('eq', 200);
  });

  it('Should validate with status code failed (404)', () => {
    cy.request({
      url: 'users/6a961ffb-35ef-46c1-9202-3f99bbf3bda3',
      failOnStatusCode: false,
    })
      .its('status')
      .should('eq', 404);
  });

  it('Should validate with status code bad request (400)', () => {
    cy.request({
      url: 'users/1',
      failOnStatusCode: false,
    })
      .its('status')
      .should('eq', 400);
  });

  //Testing Users API Endpoints
  it('Should validate with status code (200) at /contacts', () => {
    cy.request('contacts').its('status').should('eq', 200);
  });

  it('Should validate with status code (404) not found', () => {
    cy.request({
      url: '/contacts/cb643546-2520-44a0-9ace-827f308b99c1',
      failOnStatusCode: false,
    })
      .its('status')
      .should('eq', 404);
  });

  it('Should validate with status code (400) bad request', () => {
    cy.request({
      url: '/contacts/1',
      failOnStatusCode: false,
    })
      .its('status')
      .should('eq', 400);
  });
});
