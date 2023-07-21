import ConditionalRenderer from "components/ConditionalRenderer"

describe("ConditionalRenderer test", () => {
  it("should not render content if show is false", () => {
    cy.mount(<ConditionalRenderer show={false}><span>Hi Dad</span></ConditionalRenderer>)

    cy.get('span').should('not.exist')
  })

  it("shows book tooltip", () => {
    cy.mount(<ConditionalRenderer show={true}><span>Hi Dad</span></ConditionalRenderer>)

    cy.get('span').should('exist')
  })
})