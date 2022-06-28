describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('passes', () => {
    cy.get('#email').type('sangavi12@gmail.com')
   cy.get('#psw').type('kastoori@')
   cy.get('#btn1').click()
   cy.get('#mail').should('contain.text','success')
   
  })
})