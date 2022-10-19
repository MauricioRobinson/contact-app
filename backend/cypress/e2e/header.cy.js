describe('Testing headers', () => {
  it('Header and Content-Type validator of users', () => {
    cy.request('users')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('Header and Content-Type validator of contacts', () => {
    cy.request('contacts')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });
});
