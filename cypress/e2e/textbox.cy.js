import TextBoxPage from '../support/textboxPage'

import data from '../fixtures/testData.json'



describe('Textbox Test', () => {
    beforeEach(() => {
       TextBoxPage.visitTextBoxPage();
    });
  
    it('should enter details and assert', () => {
      cy.fixture('testData.json').then((data) => {
        const { fullName, email, currentAddress, permanentAddress } = data;
  
       TextBoxPage.enterFullName()
       TextBoxPage.enterEmail()
       TextBoxPage.enterCurrentAddress()
       TextBoxPage.enterPermanentAddress()
  
       TextBoxPage.clickSubmit();
  
        // Assertions for entered details
        cy.contains(`Name:${fullName}`).should('be.visible'); // assertion to contain Name:Test Name
        cy.contains(`Email:${email}`).should('be.visible');
        cy.contains(`Current Address :${currentAddress}`).should('be.visible');
        cy.contains(`Permananet Address :${permanentAddress}`).should('be.visible');
      });
    });
  });
  