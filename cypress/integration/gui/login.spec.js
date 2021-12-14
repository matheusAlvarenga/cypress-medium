/// <reference types="Cypress" />

describe('Login Block', () => {
  it('should login successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('exist')
  });
});