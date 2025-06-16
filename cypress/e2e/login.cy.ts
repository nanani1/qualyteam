import { LoginModel } from '../models/login.model'
import { faker } from '@faker-js/faker'

const $page = new LoginModel()

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('Mensagem de erro ao não informar username', () => {
    // Dado que estou na página de login
    // E não informo o nome de usuário
    $page.fillPassword('SuperSecretPassword!')
    
    // Quando clico no botão de login
    $page.clickLoginButton()
    
    // Então devo ver a mensagem de erro de usuário inválido
    $page.assertMessage('Your username is invalid!')
  })

  it('Mensagem de erro ao não informar senha', () => {
    // Dado que estou na página de login
    // E informo apenas o nome de usuário
    $page.fillUsername('practice')
    
    // Quando clico no botão de login
    $page.clickLoginButton()
    
    // Então devo ver a mensagem de erro de usuário inválido
    $page.assertMessage('Your username is invalid!')
  })

  it('Login com sucesso', () => {
    // Dado que estou na página de login
    // E informo credenciais válidas
    $page.fillUsername('tomsmith')
    $page.fillPassword('SuperSecretPassword!')
    
    // Quando clico no botão de login
    $page.clickLoginButton()
    
    // Então devo ver a mensagem de login bem-sucedido
    $page.assertMessage('You logged into a secure area!')
    // E devo ser redirecionado para a área segura
    cy.url().should('include', 'secure')
  })

  it('should show error message with invalid credentials', () => {
    // Dado que estou na página de login
    // E informo credenciais inválidas geradas aleatoriamente
    $page.fillUsername(faker.internet.username())
    $page.fillPassword(faker.internet.password())
    
    // Quando clico no botão de login
    $page.clickLoginButton()
    
    // Então devo ver a mensagem de erro de usuário inválido
    $page.assertMessage('Your username is invalid!')
  })

  it('should prevent unauthorized access to secure area', () => {
    // Dado que não estou logado
    // Quando tento acessar a área segura diretamente
    cy.visit('https://the-internet.herokuapp.com/secure')
    
    // Então devo ser redirecionado para a página de login
    $page.assertUrlContains('login')
    // E devo ver a mensagem de acesso não autorizado
    $page.assertMessage('You must login to view the secure area!')
  })
}) 
