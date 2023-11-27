
Cypress.Commands.add('redirection', (sectionName) => {
    cy.location().should((location) => {
        expect(location.hash).to.eq(sectionName)
    }) 
})


Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-test=${selector}]`)
})
