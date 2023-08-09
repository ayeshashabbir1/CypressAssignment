import testData from '../fixtures/example.json'

describe('template spec', () => {
it('Registration Form.', () => {


cy.visit('https://mytestingthoughts.com/Sample/home.html') 
cy.get('input[name="first_name"]').type(testData.firstName) 
cy.get('input[name="last_name"]').type(testData.lastName)
cy.get('#inlineRadioFemale').click()
cy.get('#exampleFormControlSelect2').select(testData.hobbies) 
cy.get('[name="department"]').select(testData.department)
cy.get('input[name="user_name"]').type(testData.department)
cy.get('input[name="user_password"]').type(testData.userPassword) 
cy.get('input[name="confirm_password"]').type(testData.confirmPassword) 
cy.get('input[name="email"]').type(testData.email) 
cy.get('input[name="contact_no"]').type(testData.contactNo) 
cy.get('#exampleFormControlTextarea1').type(testData.additionalInfo)
cy.contains('SUBMIT').click()
cy.get('#success_message').should('have.text', testData.successMessage) 
cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").should("have.length", "5")
cy.get('#mytable').find("tbody").find('tr').should("have.length", "2")
})

})



