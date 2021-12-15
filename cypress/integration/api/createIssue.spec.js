/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Issue Block', () => {
  it('should create an issue with success', (done) => {
    const issue = {
      name: `issue-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
      project: {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
      }
    }

    cy.api_createIssue(issue).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.title).to.equal(issue.name)
      expect(response.body.description).to.equal(issue.description)

      done()
    })
  });
});