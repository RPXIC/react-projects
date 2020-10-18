/// <reference types="cypress" />

describe(' <Forms />', () => {
    it('<Login /> - test landing page', () => {
        cy.visit('/')

        cy.get('[data-cy=title]')
            .invoke('text')
            .should('equal', 'Login')

        cy.get('[data-cy=login-form]').should('exist')
        cy.get('[data-cy=email-input]').should('exist')
        cy.get('[data-cy=password-input]').should('exist')
        cy.get('[data-cy=submit-login]')
            .should('exist')
            .should('have.value', 'Login')
            .should('have.class', 'btn-primary')
            .and('have.class', 'btn')
            .and('have.class', 'btn-block')

        cy.get('[data-cy=register]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('eq', 'A')

        cy.get('[data-cy=register]')
            .should('have.attr', 'href')
            .should('eq', '/register')

        cy.visit('/register')
    })

    it('<Register /> - test register page', ()=> {
        cy.get('[data-cy=title]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('eq', 'H1')
        
        cy.get('[data-cy=title]')
            .invoke('text')
            .should('equal', 'Register')

        cy.get('[data-cy=register-form]').should('exist')
        cy.get('[data-cy=name-input]').should('exist')
        cy.get('[data-cy=email-input]').should('exist')
        cy.get('[data-cy=password-input]')
            .should('exist')
            .should('have.prop', 'type')
            .should('equal', 'password')
        cy.get('[data-cy=confirm-input]').should('exist')
            .should('exist')
            .should('have.prop', 'type')
            .should('equal', 'password')

        cy.get('[data-cy=submit]')
            .should('exist')
            .should('have.value', 'Register')
            .should('have.class', 'btn-primary')
            .and('have.class', 'btn')
            .and('have.class', 'btn-block')

        cy.get('[data-cy=login]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('eq', 'A')

        cy.get('[data-cy=login]')
            .should('have.attr', 'href')
            .should('eq', '/')
    })

})