
describe('@collab-ui/core', function() {
  it('snapshot of lightbox', function() {
    cy.visit(`${Cypress.env('BASE_URL')}/lightbox`);
    cy.percySnapshot()
  });
});
