describe ('Home tests', () => {
    it ("open the home page and verify the url and the title", () => {
        // open the home page
        cy.visit('https://practice.automationbro.com/')
        // assert the url
        cy.url().should("include", "automationbro");
        // assert the title
        cy.title().should("eq", "Practice E-Commerce Site – Automation Bro")
    })
    it ('click the Get Started button and assert the url', () => {
        //click the button
        cy.get("#get-started").click();
        // assert the url
        cy.url().should("include", "get-started");
    });
    it ('get the text of the heading and assert the value', () => {
        //get the text and assert class name
        cy.get("h1.elementor-heading-title")
        .should($heading => {
            expect($heading.text()).to.eq("Think different. Make different.");
        })
        .and("have.class", "elementor-size-default");
    });
    it ('verify of the text of the 1-st menu link item', () => {
        cy.get("#primary-menu").find("li").first().should("have.text", "Home");
    });
    it('get the length and verify the label (using wrap) of each link in main menu', () => {
        const menuLinksText = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        cy.get("#primary-menu [id*=menu-item]").should("have.length", 6);
        cy.get("#primary-menu [id*=menu-item]").each((item, index, list) => {
            cy.wrap(item).should("contain.text", menuLinksText[index]);
        })
    });
    it.skip('verify the label (using $) of each link in main menu', () => {
        const menuLinksText = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        cy.get("#primary-menu [id*=menu-item]").each((item, index, list) => {
            expect(Cypress.$(item).text()).to.eq(menuLinksText[index]);
        })
    });

});