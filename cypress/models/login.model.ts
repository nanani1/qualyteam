export class LoginModel {
   nomeUsuario(username: string) {
    return cy.get('#username').type(username)
   }

   senha(password: string) {
    return cy.get('#password').type(password)
   }

   botaoLogin() {
    return cy.get('.radius').click()
   }

   mensagem(texto: string) {
    return cy.get('#flash').should('contain', texto)
   }

   url(url: string) {
    return cy.url().should('include', url)
   }
}
