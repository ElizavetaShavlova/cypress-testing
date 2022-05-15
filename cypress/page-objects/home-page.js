class homePage {
    get getStartedButton() {
        return cy.get("#get-started");
    };
    get headingText() {
        return cy.get("h1.elementor-heading-title");
    };
    open () {
        cy.visit('https://practice.automationbro.com/');
    };
    get mainMenu() {
        return cy.get("#primary-menu");
    };
    get menuItemListElements() {
        return cy.get("#primary-menu [id*=menu-item]");
    };
}
export default new homePage();