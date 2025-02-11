class CartPage {
    openCart() {
      cy.get('.shopping_cart_link').click();
    }
  
    removeFirstItem() {
      cy.get('.cart_item button').first().click();
    }
  }
  
  export default new CartPage();