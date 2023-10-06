import data from '../fixtures/testData.json'

class TextBoxPage {
    visitTextBoxPage() {
        
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    }
  
    enterFullName() {
      cy.get('#userName').type(data.fullName);
    }
  
    enterEmail() {
      cy.get('#userEmail').type(data.email);
    }
  
    enterCurrentAddress() {
      cy.get('#currentAddress').type(data.currentAddress);
    }
  
    enterPermanentAddress() {
      cy.get('#permanentAddress').type(data.permanentAddress);
    }
  
    clickSubmit() {
      cy.get('#submit').click();
    }
  }
  
  export default new TextBoxPage();
  