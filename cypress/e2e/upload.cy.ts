import {readFileSync} from 'fs'

describe('Upload Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/upload')
  })

  it('sFazer upload através do botão ‘choose file’', () => {
    // Usar una ruta relativa desde la raíz del proyecto
    cy.get('#file-upload').selectFile('cypress/upload/file1.pdf')
    
    // Verificar que el archivo fue seleccionado
    cy.get('#file-upload').should('have.value', 'C:\\fakepath\\file1.pdf')
    
    // Hacer click en el botón de upload
    cy.get('#file-submit').click()
    
    // Verificar que el upload fue exitoso
    cy.get('h3').should('contain', 'File Uploaded!')
  })

  it('Fazer upload através da área de upload marcada', () => {

   // Hacer click en el botón de upload
    cy.get('#drag-drop-upload').click()
    
  })

  it('Fazer upload de uma sequência de arquivos', () => {
    
  })
})