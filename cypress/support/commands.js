

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  it('verifica o título da aplicação', function () {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('input[id= "firstName"]')
      .type('Júlia')

    cy.get('input[id= "lastName"]')
      .type('Cardozo')

    cy.get('input[id= "email"]')
      .type('ccardozojulia@gmail.com')

    cy.get('textarea[id= "open-text-area"]')
      .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem quis risus rutrum mollis. Nam varius, dolor vitae suscipit venenatis, quam sem eleifend lectus, vitae varius tortor nunc vitae nunc. Vestibulum volutpat mi lectus. In hac habitasse platea dictumst. Donec eget placerat orci. Vivamus lacinia sapien et metus elementum volutpat. Pellentesque in metus odio. Mauris leo tortor, posuere at fringilla et, ornare a mauris.', { delay: 0 })

    cy.get('button[class= "button"')
      .click()

    cy.get('.success')
      .should('be.visible')
  })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
