import data from '../fixtures/testData.json'

class BooksPage {
    visitBooksPage() {
      // Navigates to the Books page using UI navigation
      cy.visit('https://demoqa.com/') 
      cy.get('.category-cards > :nth-child(6) > :nth-child(1)').click()
    }
  
    enterBookName() {
      // Enters the book name in the search box
      cy.get('#searchBox').type(data.Test4.BookName);
    }
  
    clickSearchedBook() {
      // Clicks on the searched book by its name
      cy.contains(data.Test4.BookName).click();
    }
  
    // Assertions for verifying book details
    assertISBN() {
        cy.get('#ISBN-wrapper > .col-md-9 > #userName-value').should('contain', data.Test4.ISBN);
    }
  
    assertTitle() {
        cy.get('#title-wrapper > .col-md-9 > #userName-value').should('contain', data.Test4.Title);
    }
  
    assertSubtitle() {
        cy.get('#subtitle-wrapper > .col-md-9 > #userName-value').should('contain', data.Test4.SubTitle);
    }
  
    assertAuthor() {
        cy.get('#author-wrapper > .col-md-9 > #userName-value').should('contain', data.Test4.Author);
    }
  
    assertPublisher() {
        cy.get('#publisher-wrapper > .col-md-9 > #userName-value').should('contain', data.Test4.Publisher);
    }
  
    assertTotalPage(totalPage) {
        cy.get('#pages-wrapper > .col-md-9 > #userName-value').should('contain', data.Test4.TotalPages);
    }
  }
  
  export default new BooksPage();
  