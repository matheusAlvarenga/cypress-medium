/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Issue Block', () => {
  const issue = {
    name: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(5),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
    }
  }

  beforeEach(() => {
    cy.login()
    cy.gui_createProject(issue.project)
  })

  it('should create an issue with success', () => {
    cy.gui_createIssue(issue)

    cy.get('.qa-title').should('contain', issue.name)
    cy.get('.description p').should('contain', issue.description)
  });
});