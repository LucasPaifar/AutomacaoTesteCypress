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

  it('Usuário bloqueado não deve conseguir acessar', () => {
    Login.login('locked_out_user', 'secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('Deve permitir que o usuário saia do sistema', () => {
    Login.login('standard_user', 'secret_sauce');
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });
});