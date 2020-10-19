/// <reference types="cypress" />

describe('Managing projects', () => {
    it('<Projects /> - Auth', () => {
        cy.visit('/')

        cy.get('[data-cy=email-input]').type('rpxic@mail.com')
        cy.get('[data-cy=password-input]').type('123456')

        cy.get('[data-cy=submit-login]').click()

        cy.url().should('eq', 'http://localhost:3000/projects')
        cy.get('[data-cy=button-new-project]').click()

        cy.get('[data-cy=button-new-project]').click()
        cy.get('[data-cy=submit-new-project]').click()
    
        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Name is required')
    
        cy.get('[data-cy=alert]')
            .should('have.class', 'msg error')

        cy.get('[data-cy=name-input-new-project]').type('project test')
        cy.get('[data-cy=submit-new-project]').click()

        cy.get('[data-cy=projects-list] li:nth-child(1) button').click()
        cy.get('[data-cy=submit-todo]').click()

        cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Name is required')

        cy.get('[data-cy=alert]')
            .should('have.class', 'msg error')

        cy.get('[data-cy=input-todo]').type('testing with cypress')
        cy.get('[data-cy=submit-todo]').click()

        cy.get('[data-cy=input-todo]').type('project with next')
        cy.get('[data-cy=submit-todo]').click()

        cy.get('[data-cy=todo]:nth-child(1) [data-cy=todo-incompleted]').click()
        cy.get('[data-cy=todo]:nth-child(1) [data-cy=todo-completed]').should('have.class', 'completed')

        cy.get('[data-cy=todo]:nth-child(1) [data-cy=todo-completed]').click()
        cy.get('[data-cy=todo]:nth-child(1) [data-cy=todo-incompleted]').should('have.class', 'incompleted')

        cy.get('[data-cy=todo]:nth-child(1) [data-cy="btn-edit').click()

        cy.get('[data-cy=input-todo]').clear().type('(updated)testing with cypress')
        cy.get('[data-cy=submit-todo]').click()

        cy.get('[data-cy=todo]:nth-child(1) [data-cy=btn-delete]').click()
        cy.get('[data-cy=todo]:nth-child(1)').invoke('text').should('not.equal', '(updated)testing with cypress')
    })
})