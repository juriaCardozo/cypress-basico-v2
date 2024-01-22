beforeEach(() => {
  cy.visit('./src/index.html')
});

describe('Central de Atendimento ao Cliente TAT - Lesson 02', function () {
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

    cy.contains('button[class= "button"]', 'Enviar')
      .click()

    cy.get('.success')
      .should('be.visible')
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('input[id= "firstName"]')
      .type('Júlia')

    cy.get('input[id= "lastName"]')
      .type('Cardozo')

    cy.get('input[id= "email"]')
      .type('a*.')

    cy.get('textarea[id= "open-text-area"]')
      .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem quis risus rutrum mollis. Nam varius, dolor vitae suscipit venenatis, quam sem eleifend lectus, vitae varius tortor nunc vitae nunc. Vestibulum volutpat mi lectus. In hac habitasse platea dictumst. Donec eget placerat orci. Vivamus lacinia sapien et metus elementum volutpat. Pellentesque in metus odio. Mauris leo tortor, posuere at fringilla et, ornare a mauris.', { delay: 0 })

    cy.contains('button[class= "button"]', 'Enviar')
      .click()

    cy.get('.error > strong')
      .should('be.visible')
  });

  it('No campo de telefone, valor não-numérico for digitado, seu valor continuará vazio.', () => {
    cy.get('input[id= "phone"]')
      .type('abcdef')
      .should('be.empty')
  });

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('input[id= "firstName"]')
      .type('Júlia')

    cy.get('input[id= "lastName"]')
      .type('Cardozo')

    cy.get('input[id= "email"]')
      .type('ccardozojulia@gmail.com')

    cy.get('input[id="phone-checkbox"')
      .check()

    cy.contains('button[class= "button"]', 'Enviar')
      .click()

    cy.get('.error > strong')
      .should('be.visible')
  });

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('input[id= "firstName"]')
      .type('Júlia')
      .should('have.value', 'Júlia')
      .clear()
      .should('be.empty')

    cy.get('input[id= "lastName"]')
      .type('Cardozo')
      .should('have.value', 'Cardozo')
      .clear()
      .should('be.empty')

    cy.get('input[id= "email"]')
      .type('ccardozojulia@gmail.com')
      .should('have.value', 'ccardozojulia@gmail.com')
      .clear()
      .should('be.empty')

    cy.get('input[id= "phone"]')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('be.empty')
  });

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button[class= "button"]', 'Enviar')
      .click()

    cy.get('.error > strong')
      .should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
  })
})

describe('Central de Atendimento ao Cliente TAT - Lesson 03', function () {
  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('select').select('YouTube').should('have.value', 'youtube')
  });

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('select').select('mentoria').should('have.value', 'mentoria')
  });

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('select').select(1).should('have.value', 'blog')
  });
})

describe('Central de Atendimento ao Cliente TAT - Lesson 04', function () {
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"]').check('feedback').should('be.checked')
  });

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]').each(($radio, index, $radios) => {
      cy.get($radio).check().should('be.checked')
    })
  });
})

describe('Central de Atendimento ao Cliente TAT - Lesson 05', function () {
  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]').check()
    cy.get('input[type="checkbox"]').last().uncheck()
  });
})