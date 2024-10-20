/// <reference types="cypress" />

export const homePage = {
    openMenu(menu) {
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },

    buscarProdutos() {
        cy.get('[data-testid="search-products"]').click()
    },

    abrirFiltroCategorias() {
        cy.get('[data-testid="Category"]').click()
    },

    categorias() {
        return cy.get('[data-testid^="search-category-"]')
    }
}