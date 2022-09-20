// structure of test:
// ARRANGE: setup initial app state
  // visit a web page
  // query for an element
// ACT: take an action
  // interact with that element
// ASSERT: make an assertion
  // make an assertion about page content

describe('My First Test', () => {
  it('Visits Bus Page', () => {
    // following function uses baseUrl in cypress.config.js
    cy.visit('/')

    // great for debugging
    // cy.pause()

      // alternatively::: cy.visit(Cypress.config('baseUrl'))
      // or ::: cy.visit(Cypress.config().baseUrl
      cy.contains('Blog').click()

      cy.url()
        .should('include', '#')
  })
})

describe('Header Text', () => {
  it('Checks if header text exists', () => {
    cy.visit('index.html');
    cy.get('.logo-heading').contains('Fun Bus');
  })
})