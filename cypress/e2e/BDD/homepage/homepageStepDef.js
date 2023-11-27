const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


/**
 * Scenario: Acceder aux cours
 */

When('I click "Start Learning"', function () {
  cy.get(this.data.learningButton).click()
})

Then('I should have access to the courses', () => {
  cy.redirection('#courses')

  // cy.get('[data-test="course-0"]').should('exist')
  // cy.getByData('course-1').should("exist")
  // cy.get('.space-y-4').find('div').each((el, index, $list) => {
  //   cy.log(el)
  //   cy.log(index)
  // })
  cy.get('.space-y-4').find('div').eq(0)
})

