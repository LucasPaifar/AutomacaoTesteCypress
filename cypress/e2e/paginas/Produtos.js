class ProductsPage {
    validateProductList() {
      cy.get('.inventory_item').should('have.length.greaterThan', 0);
    }
  
    addFirstProductToCart() {
      cy.get('.inventory_item button').first().click();
    }
  }
  
  export default new ProductsPage();