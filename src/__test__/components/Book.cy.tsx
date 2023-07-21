import Book from "components/Book"

const validBook = {
  rank: 1,
  amazon_product_url: "https://www.amazon.com",
  book_details: [
    {
      title: "the pain",
      description: "make it stop",
      author: "Akira Himekawa",
      price: "0.00",
      publisher: "VIZ Media",
    }
  ]
} as ListItem

describe("Book test", () => {
  beforeEach(() => {
    cy.mount(<Book book={validBook} />)
  })

  it("should show basic book info such as rank, title and author", () => {
    cy.contains('1. the pain')
    cy.contains('by Akira Himekawa')
  })

  it("shows book tooltip", () => {
    cy.get('[data-cy=book-tooltip]').should('be.hidden')

    cy.get('[data-cy=book] a.peer').first().focus()

    cy.get('[data-cy=book-tooltip]').should('be.visible')
    cy.get('[data-cy=book-tooltip]').contains("make it stop")
  })
})