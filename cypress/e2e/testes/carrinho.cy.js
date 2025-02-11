import Login from "../paginas/Login";
import Produtos from "../paginas/Produtos";
import Carrinho from "../paginas/Carrinho";

describe('Testes do Carrinho', () => {
  beforeEach(() => {
    Login.login('standard_user', 'secret_sauce');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    Produtos.addFirstProductToCart();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('Deve remover um produto do carrinho', () => {
    Produtos.addFirstProductToCart();
    Carrinho.openCart();
    Carrinho.removeFirstItem();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});