describe('Navigation', () => {
  it('should navigate to the homepage', () => {
    // Start from the index page
    cy.visit('/');

    // The new page should contain an h1 with 'Welcome to'
    cy.get('h1').contains('Welcome to');
  });
});

export {};