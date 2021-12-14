/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Project Block', () => {
  beforeEach(() => cy.login())

  it('should create a project successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_createProject(project)

    cy.url().should(`equal`, `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  });
});