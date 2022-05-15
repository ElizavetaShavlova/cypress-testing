import supportPage from "../../page-objects/support-page";

describe('Tests for "Support" form', () => {
    it('Open the support page and fill the form', () => {
        supportPage.open();
        supportPage.nameInput.type("name1");
        supportPage.emailInput.type("testemail@test.info");
        supportPage.subjectInput.type("Hardware & Integration issue 1");
        supportPage.getInTouchDropdown.select('Technical Team');
        supportPage.getInTouchDropdownValue.check([
                "Hardware Issue",
                "Integration Issue"
            ])
        supportPage.datapicker.click();
        supportPage.datapickerFirstValue.click();
        supportPage.submitButton.click();
        supportPage.successFormSubmissionMsg.should("contain.text", "Thanks for contacting us! We will be in touch with you shortly.");
    });
});