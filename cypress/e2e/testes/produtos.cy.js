import Login from "../paginas/Login";
import Produtos from "../paginas/Produtos";


describe('Testes de Visualização de Produtos', () => {
  beforeEach(() => {
    Login.login('standard_user', 'secret_sauce');
  });

  it('Deve exibir a lista de produtos corretamente', () => {
    Produtos.validateProductList();
  });
  
});