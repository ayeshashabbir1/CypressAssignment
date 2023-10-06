import WebtablesPage from '../support/webtablesPage';
import data from '../fixtures/testData.json';

describe('Third Test', () => {
  beforeEach(() => {
    WebtablesPage.visitWebtablesPage();
    WebtablesPage.clickAddButton();
  });

  it('should enter details, submit, and verify the table', () => {
    const { firstName, lastName, age, salary, department } = data;

    WebtablesPage.enterFirstName();
    WebtablesPage.enterLastName();
    WebtablesPage.enterEmail();
    WebtablesPage.enterAge();
    WebtablesPage.enterSalary();
    WebtablesPage.enterDepartment();

    WebtablesPage.clickSubmitButton();

    // Verify details in the table using assertions
    WebtablesPage.assertFirstName();
    WebtablesPage.assertLastName();
    WebtablesPage.assertAge();
    WebtablesPage.assertSalary();
    WebtablesPage.assertDepartment();
  });
});
