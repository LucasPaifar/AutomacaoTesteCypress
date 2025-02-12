class LoginPage {
    visit() {
      cy.visit('/');
      cy.get('.login_logo').should('be.visible');
    }
  
    fillUsername(username) {
      cy.get('[data-test="username"]').type(username);
    }
  
    fillPassword(password) {
      cy.get('[data-test="password"]').type(password);
    }
  
    submit() {
      cy.get('[data-test="login-button"]').click();
    }
  
    login(username, password) {
      this.visit();
      this.fillUsername(username);
      this.fillPassword(password);
      this.submit();
    }
  
    checkErrorMessage() {
      cy.get('[data-test="error"]').should('be.visible');
    }
  }
  
  export default new LoginPage();