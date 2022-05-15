import homePage from "../../page-objects/home-page";

describe ('Home tests', () => {
    it ("open the home page and verify the url and the title", () => {
        homePage.open();
        // assert the url and title
        cy.url().should("include", "automationbro");
        cy.title().should("eq", "Practice E-Commerce Site – Automation Bro")
    })
    it ('click the Get Started button and assert the url', () => {
        //click the 'Get Started' button and asser changed url
        homePage.getStartedButton.click();
        cy.url().should("include", "get-started");
    });
    it ('get the text of the heading and assert the value', () => {
        //get the text and assert class name
        homePage.headingText
            .should($heading => {
                expect($heading.text()).to.eq("Think different. Make different.");})
            .and("have.class", "elementor-size-default");
    });
    it ('verify of the text of the 1-st menu link item', () => {
        homePage.mainMenu.find("li").first().should("have.text", "Home");
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
        homePage.menuItemListElements.should("have.length", 6);
        homePage.menuItemListElements.each((item, index, list) => {
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
        homePage.menuItemListElements.each((item, index, list) => {
            expect(Cypress.$(item).text()).to.eq(menuLinksText[index]);
        })
    });

});