import Login from "../paginas/Login";
import Produtos from "../paginas/Produtos";
import Carrinho from "../paginas/Carrinho";

describe('Testes do Carrinho', () => {
    // Executa antes de cada teste para garantir que o usuário esteja logado
    beforeEach(() => {
        Login.login('standard_user', 'secret_sauce');
    });

    // Verifica se é possível adicionar um produto ao carrinho
    it('Deve adicionar um produto ao carrinho', () => {
        Produtos.addFirstProductToCart();
        cy.get('.shopping_cart_badge').should('contain', '1'); // Verifica se o número no carrinho aumentou
    });

    // Verifica se é possível remover um produto do carrinho
    it('Deve remover um produto do carrinho', () => {
        Produtos.addFirstProductToCart();
        Carrinho.openCart();
        Carrinho.removeFirstItem();
        cy.get('.shopping_cart_badge').should('not.exist'); // Verifica se o número sumiu após a remoção
    });
});
