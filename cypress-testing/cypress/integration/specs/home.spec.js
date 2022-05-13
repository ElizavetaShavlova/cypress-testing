describe ('Home tests', () => {
    it ("open the home page and verify the url and the title", () => {
        // open the home page
        cy.visit('https://practice.automationbro.com/')
        // assert the url
        cy.url().should("include", "automationbro");
        // assert the title
        cy.title().should("eq", "Practice E-Commerce Site – Automation Bro")
    })
});