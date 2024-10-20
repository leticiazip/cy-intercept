/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { homePage } = require("../support/pages/home.page.js");

describe('Cypress Intercept', () => {

  beforeEach(() => {
    cy.login(email, senha)
  })

  it('Categorias devem ser todas retornadas', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'allCategories.json' }).as('getCategories')
    homePage.buscarProdutos()
    homePage.abrirFiltroCategorias()
    homePage.categorias().should('have.length.greaterThan', 1)
  })

  it('Categorias devem retornar vazias', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'emptyCategories.json' }).as('getEmptyCategories')
    homePage.buscarProdutos()
    homePage.abrirFiltroCategorias()
    homePage.categorias().should('have.length', 1)
  })

  it('Categorias devem retornar erro 500', () => {
    cy.intercept('GET', '**/public/getCategories', { statusCode: 500 }).as('getCategoriesError')
    homePage.buscarProdutos()
    homePage.abrirFiltroCategorias()
    homePage.categorias().should('have.length', 1)
  })

})