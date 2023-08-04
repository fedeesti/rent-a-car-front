/// <reference types="cypress" />

const URL_APP = 'http://localhost:5173';

describe('Rent a car', () => {
  beforeEach(() => {
    cy.visit(URL_APP);
  });

  // cy.get('[data-cy=""]')

  describe('Navbar', () => {
    it('should show a navbar', () => {
      cy.get('[data-cy="navbar-container"]').should('exist');
      cy.get('[data-cy="navbar-logo"]').should('be.visible');
      cy.get('[data-cy="navbar-title"]').should('be.visible').and('contain', 'Rent a car');
      cy.get('[data-cy="open-menu-mobile"]').should('not.be.visible');
    });
  });

  describe('Home Page', () => {
    it('should show title and car rental details', () => {
      cy.get('[data-cy="home-title"]').should('be.visible').and('contain', 'Overview');
      cy.get('[data-cy="overview-details"]').should('be.visible');
      cy.get('[data-cy="overview-car-details"]').should('be.visible').and('contain', 'Cars');
      cy.get('[data-cy="overview-client-details"]').should('be.visible').and('contain', 'Clients');
      cy.get('[data-cy="overview-reservation-details"]')
        .should('be.visible')
        .and('contain', 'Reservations');
    });
  });
});
