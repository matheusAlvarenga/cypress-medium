/// <reference types="Cypress" />

describe('Logout Block', () => {
  beforeEach(() => cy.login())

  it('should logout successfully', () => {
    cy.logout()

    cy.url().should('equal', `${Cypress.config('baseUrl')}users/sign_in`)
  });
});