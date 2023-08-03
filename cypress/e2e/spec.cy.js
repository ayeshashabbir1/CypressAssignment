describe('template spec', () => {
it('Registration Form.', () => {


cy.visit('https://mytestingthoughts.com/Sample/home.html') 
cy.get('input[name="first_name"]').type('FirstName') 
cy.get('input[name="last_name"]').type('LastName')
cy.get('#inlineRadioFemale').click()
cy.get('#exampleFormControlSelect2').select('Running') 
cy.get('[name="department"]').select('MCR')
cy.get('input[name="user_name"]').type('UserName')
cy.get('input[name="user_password"]').type('Password1') 
cy.get('input[name="confirm_password"]').type('Password1') 
cy.get('input[name="email"]').type('test@abc.com') 
cy.get('input[name="contact_no"]').type('033876576462') 
cy.get('#exampleFormControlTextarea1').type('this is an automated test')
cy.contains('SUBMIT').click()
cy.get('#success_message').should('have.text', 'Success  Success!.') 
cy.get('#mytable').find("tbody").find('tr').eq(1).find("td").should("have.length", "5")
cy.get('#mytable').find("tbody").find('tr').should("have.length", "2")
})

})



