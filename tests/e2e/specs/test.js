// https://docs.cypress.io/api/introduction/api.html

describe("Login Test", () => {
  it("Visits the login page", () => {
    cy.visit("/login");
    cy.contains("p", "a basic Node.js+GraphQL and Vue3 app with user register, login and logout functionalities.");
  });
});
