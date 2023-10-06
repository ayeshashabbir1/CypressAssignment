import CheckboxPage from '../support/checkboxPage'

describe('Second Test', () => {
  beforeEach(() => {
   
   CheckboxPage.visitCheckboxPage();

  });

  it('should select Public checkbox and assert the message', () => {
    
   
    CheckboxPage.publicCheckbox();

    CheckboxPage.resultText().should('contain', 'You have selected :public');

  });
});
