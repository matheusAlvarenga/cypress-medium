/// <reference types="Cypress" />

const accessToken = Cypress.env('gitlab_access_token')

Cypress.Commands.add('api_createProject', ({ name, description }) => {
  cy.request({
    url: `api/v4/projects?private_token=${accessToken}`,
    method: 'POST',
    body: {
      name,
      description,
      initialize_with_readme: true
    }
  })
})

Cypress.Commands.add('api_createIssue', ({ name, description, project }) => {
  cy.api_createProject(project).then(response => {
    cy.request({
      url: `api/v4/projects/${response.body.id}/issues?private_token=${accessToken}`,
      method: 'POST',
      body: {
        title: name,
        description,
        initialize_with_readme: true
      }
    })
  })
})

Cypress.Commands.add('api_createLabel', (projectId, label) => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/${projectId}/labels?private_token=${accessToken}`,
    body: {
      name: label.name,
      color: label.color
    }
  })
})
