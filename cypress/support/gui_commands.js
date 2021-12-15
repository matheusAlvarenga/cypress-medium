/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
  cy.visit('users/sign_in')

  cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'))
  cy.get('[data-qa-selector="password_field"]').type(Cypress.env('user_password'))

  cy.get('[data-qa-selector="sign_in_button"').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('.qa-user-avatar').click()
  cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_createProject', ({ name, description }) => {
  cy.visit('projects/new')

  cy.get('#project_name').type(name)
  cy.get('#project_description').type(description)
  
  cy.get('.qa-initialize-with-readme-checkbox').check()

  cy.contains('Create project').click()
})

Cypress.Commands.add('gui_createIssue', ({ name, description, project: {name: projName, description: projDescription} }) => {
  cy.visit(`${Cypress.env('user_name')}/${projName}/issues/new`)

  cy.get('.qa-issuable-form-title').type(name)
  cy.get('.qa-issuable-form-description').type(description)
  
  cy.contains('Submit issue').click()
})