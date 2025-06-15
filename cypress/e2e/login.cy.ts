import { LoginModel } from '../models/login.model'

const $page = new LoginModel()

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('Mensagem de erro ao não informar username', () => {
    $page.senha('SuperSecretPassword!')
    $page.botaoLogin()
    $page.mensagem('Your username is invalid!')
  })

  it('Mensagem de erro ao não informar senha', () => {
    $page.nomeUsuario('practice')
    $page.botaoLogin()
    $page.mensagem('Your username is invalid!')
  })

  it('Login com sucesso', () => {
    $page.nomeUsuario('tomsmith')
    $page.senha('SuperSecretPassword!')
    $page.botaoLogin()
    $page.mensagem('You logged into a secure area!')
    cy.url().should('include', 'secure')
  })

  it('Mensagem de erro ao informar username incorretos', () => {
    $page.nomeUsuario('teste')
    $page.senha('SuperSecretPassword!')
    $page.botaoLogin()
    $page.mensagem('Your username is invalid!')
  })

}) 
