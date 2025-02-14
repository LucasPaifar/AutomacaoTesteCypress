class LoginPage {
  // Acessa a página inicial do site e verifica se o logo está visível
  visit() {
      cy.visit('/');
      cy.get('.login_logo').should('be.visible');
  }

  // Preenche o campo de nome de usuário
  fillUsername(username) {
      cy.get('[data-test="username"]').type(username);
  }

  // Preenche o campo de senha
  fillPassword(password) {
      cy.get('[data-test="password"]').type(password);
  }

  // Clica no botão de login
  submit() {
      cy.get('[data-test="login-button"]').click();
  }

  // Realiza login preenchendo usuário e senha e clicando no botão de login
  login(username, password) {
      this.visit();
      this.fillUsername(username);
      this.fillPassword(password);
      this.submit();
  }

  // Verifica se a mensagem de erro de login é exibida
  checkErrorMessage() {
      cy.get('[data-test="error"]').should('be.visible');
  }
}

export default new LoginPage();
