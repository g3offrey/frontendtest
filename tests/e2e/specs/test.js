// https://docs.cypress.io/api/introduction/api.html

describe("Chessboard", () => {
  it("should highlight the clicked square", () => {
    cy.visit("/");

    cy.getByTestId("square-a4").click();

    cy.getByTestId("square-a5").should("not.have.class", "square-selected");
    cy.getByTestId("square-a4").should("have.class", "square-selected");
  });

  it("should list the clicked square on the sidebar with the last one highlighted", () => {
    cy.visit("/");

    cy.getByTestId("square-a4").click();
    cy.getByTestId("square-b2").click();

    cy.getByTestId("selection-0").should("contain", "a4");
    cy.getByTestId("selection-0").should("not.have.class", "active");
    cy.getByTestId("selection-1").should("contain", "b2");
    cy.getByTestId("selection-1").should("have.class", "active");
  });

  it("should be able to highlight previous selections", () => {
    cy.visit("/");
    cy.getByTestId("square-a4").click();
    cy.getByTestId("square-b2").click();

    cy.getByTestId("previous-selection").click();

    cy.getByTestId("selection-0").should("have.class", "active");
    cy.getByTestId("square-a4").should("have.class", "square-selected");
    cy.getByTestId("selection-1").should("not.have.class", "active");
    cy.getByTestId("square-b2").should("not.have.class", "square-selected");
  });

  it("should be able to highlight next selections", () => {
    cy.visit("/");
    cy.getByTestId("square-a4").click();
    cy.getByTestId("square-b2").click();

    cy.getByTestId("previous-selection").click();
    cy.getByTestId("next-selection").click();

    cy.getByTestId("selection-0").should("not.have.class", "active");
    cy.getByTestId("square-a4").should("not.have.class", "square-selected");
    cy.getByTestId("selection-1").should("have.class", "active");
    cy.getByTestId("square-b2").should("have.class", "square-selected");
  });
});
