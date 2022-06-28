describe("App Component", () => {
  it("sign up", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#email").type("sangavi1@gmail.com");
    cy.get("#psw").type("995994");
    cy.get("#btn1").click();
    cy.get("#emailerror").should(
      "contains.text",
      "The email address is already in use by another account. (auth/email-already-in-use)"
    );
  });
  it("sign up", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#email").type("sangavi1@gmail.com");
    cy.get("#psw").type("5555");
    cy.get("#btn1").click();
    cy.get("#passerror").should(
      "contains.text",
      "Password should be at least 6 characters (auth/weak-password)"
    );
  });
});
