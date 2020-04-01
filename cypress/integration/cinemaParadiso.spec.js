describe("visit cinemaParadiso", function() {
  it("visit the site local", function() {
    cy.visit("http://localhost:3000/");
    cy.get("#basic-nav-dropdown").click();
    cy.get("#rated-button").click();
    cy.contains("Fiche").click();
  });
});
