class CheckoutPage {
  // Inicia o processo de checkout clicando no botão correspondente
  proceedToCheckout() {
      cy.get('[data-test="checkout"]').click();
  }

  // Preenche as informações obrigatórias no checkout
  fillCheckoutInfo(firstName, lastName, zip) {
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(zip);
      cy.get('[data-test="continue"]').click();
  }

  // Finaliza a compra clicando no botão de finalização
  finishPurchase() {
      cy.get('[data-test="finish"]').click();
  }

  // Verifica se a mensagem de sucesso da compra foi exibida
  validateSuccessMessage() {
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
  }
}

export default new CheckoutPage();
