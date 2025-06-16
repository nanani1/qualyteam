import {readFileSync} from 'fs'

describe('Upload Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/upload')
  })

  it('Fazer upload através do botão choose file', () => {
    // Dado que estou na página de upload
    // E tenho um arquivo para enviar
    cy.get('#file-upload').selectFile('cypress/upload/file1.pdf')
    
    // Quando o arquivo é selecionado
    cy.get('#file-upload').should('have.value', 'C:\\fakepath\\file1.pdf')
    
    // E clico no botão de upload
    cy.get('#file-submit').click()
    
    // Então devo ver a mensagem de upload bem-sucedido
    cy.get('h3').should('contain', 'File Uploaded!')
  })

  it('Fazer upload através da área de upload marcada', () => {
    // Dado que estou na página de upload
    // Quando clico na área de upload marcada
    cy.get('#drag-drop-upload').click()
    
    // Então devo ver a área de upload destacada
  })

  it('Fazer upload através da área de upload marcada', () => {
    // Dado que estou na página de upload
    // Quando arrasto um arquivo para a área de upload
    cy.get('#drag-drop-upload').click()
    
    // Então devo ver o arquivo listado na área de upload
  })
})