/// <reference types="cypress" />

describe('<Login />', () => {
    it('<Login /> - Validation, alerts and login', () => {
        cy.visit('/')

        cy.get('[data-cy=submit-login]').click()

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'All fields are required')
        cy.get('[data-cy=alert]')
            .should('have.class', 'alert-error')

        cy.get('[data-cy=email-input]').type('noexist@mail.com')
        cy.get('[data-cy=password-input]').type('123')

        cy.get('[data-cy=submit-login]').click()

        cy.url().should('eq', 'http://localhost:3000/')

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'User no exist')
        cy.get('[data-cy=alert]')
            .should('have.class', 'alert-error')

        cy.get('[data-cy=email-input]').clear().type('rpxic@mail.com')
        cy.get('[data-cy=password-input]').clear().type('123')

        cy.get('[data-cy=submit-login]').click()

        cy.url().should('eq', 'http://localhost:3000/')

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Incorrect password')
        cy.get('[data-cy=alert]')
            .should('have.class', 'alert-error')

        cy.get('[data-cy=password-input]').clear().type('123456')

        cy.get('[data-cy=submit-login]').click()

        cy.wait(1000)

        cy.get('[data-cy=select]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Select project')

        cy.get('[data-cy=logout]').click()

        cy.url().should('eq', 'http://localhost:3000/')
    })
})