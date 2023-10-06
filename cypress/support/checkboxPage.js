class CheckboxPage {
    visitCheckboxPage() {
     

        //navigate to the Checkbox view

        cy.visit('https://demoqa.com/') 
        cy.get(".category-cards > :nth-child(2)").click();
        cy.get(":nth-child(1) > .group-header > .header-wrapper").click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click();
    }
  
    publicCheckbox() {

        //get the public checkbox element
        cy.get('.rct-option-expand-all').click();
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(1) > .rct-text > label > .rct-title').click();
    }

    resultText() {

        //get the success Text
       return cy.get('#result')
    }

  }
  
  export default new CheckboxPage();
  