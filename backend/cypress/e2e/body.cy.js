describe('Testing the body', () => {
  it('Should validate the body data of /users', () => {
    cy.request('/users/6a961ffb-35ef-46c1-9202-3f99bbf3bda2')
      .its('body')
      .its('firstName')
      .should('be.equal', 'Mauro');

    cy.request('/users/6a961ffb-35ef-46c1-9202-3f99bbf3bda2').then(
      (response) => {
        expect(response.status).to.be.equal(200);
        expect(response.headers['content-type']).to.be.equal(
          'application/json; charset=utf-8'
        );
        expect(response.body.firstName).to.be.equal('Mauro');
        expect(response.body.lastName).to.be.equal('Rob');
        expect(response.body.email).to.be.equal('mauroRob@mail.com');
        expect(response.body.country).to.be.equal('Canada');
        expect(response.body.age).to.be.equal(25);
      }
    );
  });
});
