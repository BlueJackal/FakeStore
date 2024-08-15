describe('Home Page Tests', () => {
    it('should load the homepage and display the correct title', () => {
        cy.visit('/');
        cy.title().should('include', 'FakeStore');
        cy.contains('Welcome to FakeStore!').should('be.visible');
    });

    it('should display the product carousel with at least one product', () => {
        cy.visit('/');
        cy.get('.carousel').should('be.visible');
        cy.get('.carousel-item').should('have.length.greaterThan', 0);
    });

    it('should display the second intro section', () => {
        cy.visit('/');
        cy.contains('Check out our current sales!').should('be.visible');
    });

    it('should display random products and open a modal on click', () => {
        cy.visit('/');
        cy.get('.card').should('have.length.greaterThan', 0); 

        cy.get('.card').first().click();
        cy.get('.modal').should('be.visible');

        cy.get('.modal').find('button').contains('Close').click();
        cy.get('.modal').should('not.exist');
    });
});