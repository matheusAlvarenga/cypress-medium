/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Project Block', () => {
  beforeEach(() => cy.login())

  it('should create a project successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.api_createProject(project).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.name).to.equal(project.name)
      expect(response.body.description).to.equal(project.description)
    })
  });
});