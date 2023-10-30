export default class basePage{
    static visitHomePage(){
      cy.visit(Cypress.env('host'))
    }
    static setDesktopViewPort() {
        cy.viewport(1280, 1500)
      }
}