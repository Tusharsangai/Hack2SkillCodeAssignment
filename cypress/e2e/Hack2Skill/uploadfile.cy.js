describe('Validating the upload files', () => {
    
    it('validate the file upload', () => {
        const filename = "C:/Users/LENOVO/Documents/Masai SDET/Hack2Skill Assignement/cypress/fixtures/example.json"
        cy.visit("http://the-internet.herokuapp.com/upload") 
        cy.get("#file-upload").selectFile(filename)
        cy.get("#file-submit").click()  
 
 
     });
});