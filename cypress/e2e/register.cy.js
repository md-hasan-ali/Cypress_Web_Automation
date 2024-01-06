import registerData from '../fixtures/data.json';
const path = 'chrome';

before(() => {
  cy.visit(path);
});

describe('Register Scenarios', () => {
  it('Do Register of a new user : ', function () {
    cy.typeDataSingUp(registerData.name, registerData.email);
    cy.fillPersonalData(registerData.personalData[0]);
    cy.fillShippingData(registerData.shippingInformation[0]);
    cy.createAccount();
  });
});