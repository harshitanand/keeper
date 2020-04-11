/// <reference types="Cypress" />

// context('Actions', () => {
//   beforeEach(() => {
//     cy.visit('https://www.google.com/');
//   });

//   it('.type() - type into DOM element', () => {
//     cy.get('.gLFyf')
//       .type('sxyprn.com')
//       .should('have.value', 'sxyprn.com');

//     cy.get('form').submit();
//   });

//   // it('.type() - type into DOM element', () => {
//   //   cy.get('.whsOnd')
//   //     .type('email')
//   //     .should('have.value', 'harshitanand.info@gmail.com');
//   // });
// });

context('Mail Login', () => {
  it('.type() - type into DOM element', () => {
    cy.visit(
      'https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
    );

    // cy.get('#gb_70').click();

    cy.get('#Email')
      .type('harshitanand.info@gmail.com')
      .should('have.value', 'harshitanand.info@gmail.com');

    cy.get('form').submit();

    cy.get('#Passwd')
      .type('@@ubuntu@@')
      .should('have.value', '@@ubuntu@@');

    cy.get('form').submit();

    cy.get('#gb_71').click({ force: true });
  });

  // it('.type() - type into DOM element', () => {
  //   cy.get('.whsOnd')
  //     .type('email')
  //     .should('have.value', 'harshitanand.info@gmail.com');
  // });
});
