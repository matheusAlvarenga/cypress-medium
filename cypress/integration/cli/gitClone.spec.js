/// <reference types="Cypress" />

const faker = require('faker')

describe('Git Clone Block', () => {
  const project= {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
    }
  
  beforeEach(() => {
    cy.api_createProject(project)
  })

  it('should clone a project with success', () => {
    cy.cloneViaSSH(project)

    cy.readFile(`temp/${project.name}/README.md`)
      .should('contain', `# ${project.name}`)
      .and('contain', project.description)
  });
});