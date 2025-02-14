class CartPage {
  // Abre o carrinho de compras
  openCart() {
      cy.get('.shopping_cart_link').click();
  }

  // Remove o primeiro item do carrinho
  removeFirstItem() {
      cy.get('.cart_item button').first().click();
  }
}

export default new CartPage();
