import Login from "../paginas/Login";
import Produtos from "../paginas/Produtos";

describe('Testes de Visualização de Produtos', () => {
    // Configuração antes de cada teste: login no sistema
    beforeEach(() => {
        Login.login('standard_user', 'secret_sauce');
    });

    // Teste para verificar se a lista de produtos é exibida corretamente
    it('Deve exibir a lista de produtos corretamente', () => {
        Produtos.validateProductList();
    });
});
