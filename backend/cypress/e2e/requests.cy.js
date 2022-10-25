describe('Testing some requests', () => {
  // it('Should create a new user', () => {
  //   cy.request({
  //     url: '/users',
  //     method: 'POST',
  //     body: {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       email: 'john.doe@mail.com',
  //       password: '1234',
  //       country: 'USA',
  //       age: 60,
  //     },
  //   }).then((response) => {
  //     expect(response.status).to.be.eq(201);
  //     expect(response.body).to.have.property('id');

  //     const id = response.body.id;
  //     cy.wrap(id).as('id');
  //   });
  // });

  it('Should validate that the user has been created', () => {
    cy.request('/users').then((response) => {
      expect(response.body[response.body.length - 1].firstName).to.eq('John');
    });
  });
});
