import Login from "../paginas/Login";

describe('Testes de Login', () => {
  it('Deve fazer login com sucesso', () => {
    Login.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('Deve exibir erro ao tentar login com credenciais inválidas', () => {
    Login.login('wrong_user', 'wrong_password');
    Login.checkErrorMessage();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });
});