import Login from "../paginas/Login";

describe('Testes de Login', () => {
    // Teste de login bem-sucedido
    it('Deve fazer login com sucesso', () => {
        Login.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html'); // Verifica se a URL mudou para a página de produtos
    });

    // Teste de erro ao tentar logar com credenciais inválidas
    it('Deve exibir erro ao tentar login com credenciais inválidas', () => {
        Login.login('wrong_user', 'wrong_password');
        Login.checkErrorMessage();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    // Teste de usuário bloqueado
    it('Usuário bloqueado não deve conseguir acessar', () => {
        Login.login('locked_out_user', 'secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.');
    });

    // Teste de logout
    it('Deve permitir que o usuário saia do sistema', () => {
        Login.login('standard_user', 'secret_sauce');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/'); // Verifica se voltou para a página de login
    });
});
