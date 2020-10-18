/// <reference types="cypress" />

describe('<Register />', () => {
    it('<Register /> - Validation, alerts, register and logout', () => {
        cy.visit('/register')

        cy.get('[data-cy=submit]').click()

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'All fields are required')

        cy.get('[data-cy=alert]')
            .should('have.class', 'alert-error')

        cy.get('[data-cy=name-input]').type('rpxic')
        cy.get('[data-cy=email-input]').type('rpxic@mail.com')
        cy.get('[data-cy=password-input]').type('123')
        cy.get('[data-cy=confirm-input]').type('123')

        cy.get('[data-cy=submit]').click()

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'The password must be at least six characters')

        cy.get('[data-cy=password-input]').clear().type('123456')
        cy.get('[data-cy=confirm-input]').clear().type('123455')

        cy.get('[data-cy=submit]').click()

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Passwords not equal')
        
        cy.get('[data-cy=password-input]').clear().type('123456')
        cy.get('[data-cy=confirm-input]').clear().type('123456')

        cy.get('[data-cy=submit]').click()

        cy.wait(5000)

        cy.url().should('eq', 'http://localhost:3000/projects')

        cy.get('[data-cy=select]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Select project')

        cy.get('[data-cy=logout]').click()
    })
})