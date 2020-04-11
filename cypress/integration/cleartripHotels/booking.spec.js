/// <reference types="Cypress" />

let list = '';
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

context('Make Booking', () => {
  it('.type() - type into DOM element', () => {
    cy.visit('https://www.cleartrip.com/hotels');

    cy.get('#Tags')
      .type('Jayanagar, Bangalore', { force: true })
      .should('have.value', 'Jayanagar, Bangalore');

    cy.wait(5000);

    cy.get('#Tags').type('{enter}');

    cy.get('#CheckInDate').type('Mon, 24 Jun, 2019', { force: true });
    // .should('have.value', 'Mon, 24 Jun, 2019');

    cy.wait(2000);

    cy.get('#CheckInDate').type('{enter}');

    cy.get('#CheckOutDate').type('Wed, 26 Jun, 2019');
    // .should('have.value', 'Wed, 26 Jun, 2019');

    cy.wait(2000);

    cy.get('#CheckOutDate').type('{enter}');

    cy.get('#SearchForm').submit();

    cy.get('nav.sorters > ul > li > :nth-child(2)')
      .get('.priceSort')
      .first()
      .click({ force: true });

    cy.get('nav.sorters > ul > li > :nth-child(2)')
      .get('.priceSort')
      .first()
      .click({ force: true });

    // cy.get('.clearFix.flex > .right-content-section > .tools > .fRight > .booking > :nth-child(3)').click();
  });

  // it.only('hello', async () => {
  //   await cy.visit(
  //     'https://www.cleartrip.com/hotels/results?city=Bangalore&state=Karnataka&country=IN&area=&poi=Jayanagar&hotelId=&hotelName=&SearchTag=&dest_code=32550&chk_in=23/06/2019&chk_out=24/06/2019&adults1=2&children1=0&num_rooms=1&adults=2&childs=0&lowRate=true&op=true&pahCCRequired=true&all-hotels=true&sd=1561285878624&sort=price&sort_order=desc&view=list'
  //   );

  // cy.get('nav.sorters > ul > li > :nth-child(2)')
  //   .get('.priceSort')
  //   .first()
  //   .click({ force: true });

  // cy.get('nav.sorters > ul > li > :nth-child(2)')
  //   .get('.priceSort')
  //   .first()
  //   .click({ force: true });
  // });
});
