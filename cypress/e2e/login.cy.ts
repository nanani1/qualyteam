import { LoginModel } from '../models/login.model'
import { faker } from '@faker-js/faker'

const $page = new LoginModel()

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('Mensagem de erro ao não informar username', () => {
    $page.fillPassword('SuperSecretPassword!')
    $page.clickLoginButton()
    $page.assertMessage('Your username is invalid!')
  })

  it('Mensagem de erro ao não informar senha', () => {
    $page.fillUsername('practice')
    $page.clickLoginButton()
    $page.assertMessage('Your username is invalid!')
  })

  it('Login com sucesso', () => {
    $page.fillUsername('tomsmith')
    $page.fillPassword('SuperSecretPassword!')
    $page.clickLoginButton()
    $page.assertMessage('You logged into a secure area!')
    cy.url().should('include', 'secure')
  })

  it('should show error message with invalid credentials', () => {
    $page.fillUsername(faker.internet.username())
    $page.fillPassword(faker.internet.password())
    $page.clickLoginButton()
    $page.assertMessage('Your username is invalid!')
  })

  it('should prevent unauthorized access to secure area', () => {
    cy.visit('https://the-internet.herokuapp.com/secure')
    $page.assertUrlContains('login')
    $page.assertMessage('You must login to view the secure area!')
  })
}) 
