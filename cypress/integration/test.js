// test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("The homepage", () => {
    it("Has the heading React and Cypress", () => {
      cy.visit("http://localhost:3000"); 
      cy.get("h1").should("contain", "React and Cypress");
    });
  });