import Login from "../paginas/Login";
import Produtos from "../paginas/Produtos";



describe('Testes de Visualização de Produtos', () => {
  beforeEach(() => {
    Login.login('standard_user', 'secret_sauce');
  });

  it('Deve exibir a lista de produtos corretamente', () => {
    Produtos.validateProductList();
  });


  it('Deve ordenar os produtos por preço do mais barato para o mais caro', () => {
    Produtos.selecionarOrdenacao('Price (low to high)');
    cy.get('.inventory_item_price').first().should('contain', '$7.99');
  });

  it('Deve ordenar os produtos por preço do mais caro para o mais barato', () => {
    Produtos.selecionarOrdenacao('Price (high to low)');
    cy.get('.inventory_item_price').first().should('contain', '$49.99');
  });
});
