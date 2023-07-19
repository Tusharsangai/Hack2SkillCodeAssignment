describe('example to-do app', () => {
  
    it('Broken Images1', () => {
        cy.visit('https://the-internet.herokuapp.com/broken_images')
        cy.get('img[src="asdf.jpg"]')
        .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.be.gt(0))
    })
  
    it('Broken Images2', () => {
        cy.visit('https://the-internet.herokuapp.com/broken_images')
        cy.get('img[src="hjkl.jpg"]')
        .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.be.gt(0))
    })
  
    it('Broken Images3', () => {
        cy.visit('https://the-internet.herokuapp.com/broken_images')
        cy.get('img[src="img/avatar-blank.jpg"]')
        .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.be.gt(0))
    })

  })