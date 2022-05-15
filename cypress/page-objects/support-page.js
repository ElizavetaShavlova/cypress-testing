class supportPage {
    open() {
        cy.visit('https://practice.automationbro.com/support-form/');
    }
    get nameInput() {
        return cy.get('#evf-680-field_lVizlNhYus-1');
    };
    get emailInput() {
        return cy.get('#evf-680-field_XYnMdkQDKM-3');
    };
    get subjectInput() {
        return cy.get('#evf-680-field_xJivsqAS2c-2');
    };
    get getInTouchDropdown () {
        return cy.get('#evf-680-field_82kaAPhrnW-6');
    };
    get getInTouchDropdownValue(){
        return cy.get('#evf-680-field_sOAJfxP1Lf-7 input');
    };
    get datapicker(){
        return cy.get('#evf-680-field_s1KysSbUW6-8');
    };
    get datapickerFirstValue(){
        return cy.get('.dayContainer span:nth-child(1)');
    };
    get submitButton(){
        return cy.get('#evf-submit-680');
    };
    get successFormSubmissionMsg() {
        return cy.get('[role="alert"]');
    };

}

export default new supportPage();
