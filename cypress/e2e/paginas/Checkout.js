class CheckoutPage {
    proceedToCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
  
    fillCheckoutInfo(firstName, lastName, zip) {
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(zip);
      cy.get('[data-test="continue"]').click();
    }
  
    finishPurchase() {
      cy.get('[data-test="finish"]').click();
    }
  
    validateSuccessMessage() {
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
    }
  }
  
  export default new CheckoutPage();