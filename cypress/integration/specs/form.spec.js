describe('Tests for "Support" form', () => {
    it('Open the support page and fill the form', () => {
        cy.visit('https://practice.automationbro.com/support-form/');
        cy.get('#evf-680-field_lVizlNhYus-1').type("name1");
        cy.get('#evf-680-field_XYnMdkQDKM-3').type("testemail@test.info");
        cy.get('#evf-680-field_xJivsqAS2c-2').type("Hardware & Integration issue 1");
        cy.get('#evf-680-field_82kaAPhrnW-6')
            .select('Technical Team');
        cy.get('#evf-680-field_sOAJfxP1Lf-7 input')
            .check([
                "Hardware Issue",
                "Integration Issue"
            ])
        cy.get('#evf-680-field_s1KysSbUW6-8').click();
        cy.get('.dayContainer span:nth-child(1)').click();
        cy.get('#evf-submit-680').click();
        cy.get('[role="alert"]').should("contain.text", "Thanks for contacting us! We will be in touch with you shortly.");
    });
});