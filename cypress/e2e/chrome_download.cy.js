const path = 'chrome';

before(() => {
    cy.visit(path);
});

describe('Download Chrome', () => {
    it("Download Chrome from the hero's Homepage (conversion page)", function () {
        cy.DownloadChrome();
    });
});