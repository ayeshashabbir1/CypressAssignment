import BooksPage from '../support/booksPage';
import data from '../fixtures/testData.json';

describe('Fourth Test', () => {
  beforeEach(() => {
    BooksPage.visitBooksPage();
  });

  it('should search for a book, click it, and verify book details', () => {
    
    BooksPage.enterBookName();
    BooksPage.clickSearchedBook();

    // Verify book details using assertions
    BooksPage.assertISBN();
    BooksPage.assertTitle();
    BooksPage.assertSubtitle();
    BooksPage.assertAuthor();
    BooksPage.assertPublisher();
    BooksPage.assertTotalPage();
  });
});
