/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { homePage } = require("../support/pages/home.page.js");

describe('Cypress Intercept', () => {

  beforeEach(() => {
    cy.login(email, senha)
  })

  it('deve fazer o login com sucesso', () => {
  })

})