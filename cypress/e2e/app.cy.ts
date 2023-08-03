/// <reference types="cypress" />

const URL_APP = 'http://localhost:5173';

describe('Rent a car', () => {
  beforeEach(() => {
    cy.visit(URL_APP);
  });

  describe('Home Page', () => {
    it('should display the home page with its title', () => {
      cy.get('h1').contains('HomePage');
    });
  });

  describe('Navbar', () => {
    it('should show a navbar', () => {
      cy.get('[data-cy="navbar-container"]').should('exist');
      cy.get('[data-cy="navbar-logo"]').should('be.visible');
      cy.get('[data-cy="navbar-title"]').contains('Rent a car');
      cy.get('[data-cy="open-menu-mobile"]').should('not.be.visible');
      cy.get('[data-cy="menu-container"]').should('be.visible');
      cy.get('[data-cy="nav-link-home"]').should('be.visible').and('contain', 'Home');
      cy.get('[data-cy="nav-link-cars"]').should('be.visible').and('contain', 'Cars');
      cy.get('[data-cy="nav-link-clients"]').should('be.visible').and('contain', 'Clients');
      cy.get('[data-cy="nav-link-reservations"]')
        .should('be.visible')
        .and('contain', 'Reservations');
    });
  });
});
