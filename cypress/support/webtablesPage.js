import data from '../fixtures/testData.json'

class WebtablesPage {

    visitWebtablesPage() {

      // Navigates to the Webtables page using UI navigation
      cy.visit('https://demoqa.com/') 
      cy.get(".category-cards > :nth-child(2)").click();
      cy.get(":nth-child(1) > .group-header > .header-wrapper").click();
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
    }
  
    clickAddButton() {

      // Clicks the Add button to open the pop-up
      cy.contains('Add').click();
    }
  
    enterFirstName() {
      // Enters the First Name in the pop-up
      cy.get('#firstName').type(data.Test3.firstName);
    }
  
    enterLastName() {
      // Enters the Last Name in the pop-up
      cy.get('#lastName').type(data.Test3.lastName);
    }

    enterEmail(){

        // Enters an Email in the pop-up
        cy.get('#userEmail').type(data.Test3.email);
    }
  
    enterAge() {

      // Enters the Age in the pop-up
      cy.get('#age').type(data.Test3.age);
    }
  
    enterSalary() {

      // Enters the Salary in the pop-up
      cy.get('#salary').type(data.Test3.salary);
    }
  
    enterDepartment() {

      // Enters the Department in the pop-up
      cy.get('#department').type(data.Test3.department);
    }
  
    clickSubmitButton() {

      // Clicks the Submit button in the pop-up
      cy.contains('Submit').click();
    }
  
    // Assertions for verifying the details in the table
    assertFirstName() {
        cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('contain', data.Test3.firstName);
      
    }
  
    assertLastName() {
        cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('contain', data.Test3.lastName);
    }
  
   
    assertAge() {
        cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').should('contain', data.Test3.age);
    }

    assertEmail() {

        cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').should('contain', data.Test3.email);

    }
  
    assertSalary() {
        cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should('contain', data.Test3.salary);
    }
  
    assertDepartment(department) {
        cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('contain', data.Test3.department);
    }
  }
  
  export default new WebtablesPage();
  