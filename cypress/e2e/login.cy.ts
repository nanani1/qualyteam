

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('Mensagem de erro ao não informar username', () => {
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'Your username is invalid!')
  })

  it('Mensagem de erro ao não informar senha', () => {
    cy.get('#username').type('practice')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'Your username is invalid!')
  })

  it('Login com sucesso', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')
    cy.url().should('include', 'secure')
  })

}) 
