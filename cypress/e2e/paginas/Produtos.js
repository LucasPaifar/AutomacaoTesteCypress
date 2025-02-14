class ProductsPage {
  // Verifica se a lista de produtos foi carregada corretamente
  validateProductList() {
      cy.get('.inventory_item').should('have.length.greaterThan', 0);
  }

  // Adiciona o primeiro produto da lista ao carrinho
  addFirstProductToCart() {
      cy.get('.inventory_item button').first().click();
  }
}

export default new ProductsPage();
