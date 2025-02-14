import Login from "../paginas/Login";
import Produtos from "../paginas/Produtos";
import Carrinho from "../paginas/Carrinho";
import Checkout from "../paginas/Checkout";

describe('Testes de Checkout', () => {
    // Configuração antes de cada teste: login, adicionar produto e acessar o carrinho
    beforeEach(() => {
        Login.login('standard_user', 'secret_sauce');
        Produtos.addFirstProductToCart();
        Carrinho.openCart();
    });

    // Testa se a finalização de compra ocorre corretamente
    it('Deve finalizar a compra com sucesso', () => {
        Checkout.proceedToCheckout();
        Checkout.fillCheckoutInfo('QA', 'Tester', '12345');
        Checkout.finishPurchase();
        Checkout.validateSuccessMessage(); // Verifica se a mensagem de sucesso aparece
    });
});
