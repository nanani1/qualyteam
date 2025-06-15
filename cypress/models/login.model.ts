export class LoginModel {
   fillUsername(username: string) {
    return cy.get('#username').type(username)
   }

   fillPassword(password: string) {
    return cy.get('#password').type(password)
   }

   clickLoginButton() {
    return cy.get('.radius').click()
   }

   assertMessage(message: string) {
    return cy.get('#flash').should('contain', message)
   }

   assertUrlContains(path: string) {
    return cy.url().should('include', path)
   }
}
