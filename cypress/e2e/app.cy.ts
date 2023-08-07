/// <reference types="cypress" />

const URL_APP = 'http://localhost:5173';

const route = {
  home: '/',
  cars: '/cars',
  clients: '/client',
  reservation: '/reservation',
};

describe('Rent a car', () => {
  beforeEach(() => {
    cy.visit(URL_APP);
  });

  // cy.get('[data-cy=""]')
  describe('UI layout', () => {
    describe('Navbar', () => {
      it('should show a navbar', () => {
        cy.get('[data-cy="navbar-container"]').should('exist');
        cy.get('[data-cy="navbar-logo"]').should('be.visible');
        cy.get('[data-cy="navbar-title"]').should('contain', 'Rent a car').and('be.visible');
        cy.get('[data-cy="open-menu-mobile"]').should('not.be.visible');
      });
    });

    describe('Aside', () => {
      it('should show an aside', () => {
        cy.get('[data-cy="aside-container"]').should('be.visible');

        cy.get('[data-cy="aside-overview-container"]').should('be.visible');
        cy.get('[data-cy="aside-overview-link"]')
          .should('have.attr', 'href')
          .and('include', route.home);
        cy.get('[data-cy="aside-overview-name"]').should('contain', 'Overview').and('be.visible');

        cy.get('[data-cy="aside-car-container"]').should('be.visible');
        cy.get('[data-cy="aside-car-name"]').should('contain', 'Cars');
        cy.get('[data-cy="dropdown-car-container"]').should('not.exist');

        cy.get('[data-cy="aside-client-container"]').should('be.visible');
        cy.get('[data-cy="aside-client-name"]').should('contain', 'Client').and('be.visible');
        cy.get('[data-cy="dropdown-client-container"]').should('not.exist');

        cy.get('[data-cy="aside-reservation-container"]').should('be.visible');
        cy.get('[data-cy="aside-reservation-name"]')
          .should('contain', 'Reservations')
          .and('be.visible');
        cy.get('[data-cy="dropdown-reservation-container"]').should('not.exist');
      });

      it('should open a side cars and show a list', () => {
        cy.get('[data-cy="aside-car-name"]').should('contain', 'Cars');
        cy.get('[data-cy="dropdown-car-container"]').should('not.exist');

        cy.get('[data-cy="aside-car-button"]').click();

        cy.get('[data-cy="dropdown-car-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="car-dropdown-list"]').should('contain', 'List').and('be.visible');

        cy.get('[data-cy="car-dropdown-add"]').should('contain', 'Add').and('be.visible');

        cy.get('[data-cy="aside-car-button"]').click();
      });

      it('should open a side clients and show a list', () => {
        cy.get('[data-cy="aside-client-name"]').should('contain', 'Client');
        cy.get('[data-cy="dropdown-client-container"]').should('not.exist');

        cy.get('[data-cy="aside-client-btn"]').click();

        cy.get('[data-cy="dropdown-client-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="dropdown-client-list"]').should('contain', 'List').and('be.visible');

        cy.get('[data-cy="dropdown-client-add"]').should('contain', 'Add').and('be.visible');

        cy.get('[data-cy="aside-client-btn"]').click();
      });

      it('should open a side reservations and show a list', () => {
        cy.get('[data-cy="aside-reservation-name"]').should('contain', 'Reservation');
        cy.get('[data-cy="dropdown-reservation-container"]').should('not.exist');

        cy.get('[data-cy="aside-reservation-btn"]').click();

        cy.get('[data-cy="dropdown-reservation-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="dropdown-reservation-list"]').should('contain', 'List').and('be.visible');

        cy.get('[data-cy="dropdown-reservation-add"]').should('contain', 'Add').and('be.visible');

        cy.get('[data-cy="aside-reservation-btn"]').click();
      });
    });

    describe('Footer', () => {
      it('should show a footer', () => {
        cy.get('[data-cy="footer-container"]').should('be.visible');
        cy.get('[data-cy="footer-copy-reserved"]')
          .should('contain', 'All rights reserved')
          .and('be.visible');
        cy.get('[data-cy="footer-home-link"]')
          .should('have.attr', 'href')
          .and('include', route.home);
        cy.get('[data-cy="footer-icon-links"]').should('be.visible');
      });
    });

    describe('Home Page', () => {
      it('should show title and car rental details', () => {
        cy.get('[data-cy="home-title"]').should('be.visible').and('contain', 'Overview');
        cy.get('[data-cy="overview-details"]').should('be.visible');
        cy.get('[data-cy="overview-car-details"]').should('contain', 'Cars').and('be.visible');
        cy.get('[data-cy="overview-client-details"]')
          .should('contain', 'Clients')
          .and('be.visible');
        cy.get('[data-cy="overview-reservation-details"]')
          .should('contain', 'Reservations')
          .and('be.visible');
      });
    });
  });

  describe('Cars management', () => {
    describe('Car Table', () => {
      it('should show the page table header', () => {
        cy.get('[data-cy="aside-car-button"]').click();
        cy.get('[data-cy="car-dropdown-list"]').click();

        cy.url().should('include', '/car');

        cy.get('[data-cy="header-list-container"]').should('be.visible');
        cy.get('[data-cy="header-list-search"]').should('be.visible');
        cy.get('[data-cy="header-list-search-label"]').contains('Search');
        cy.get('[data-cy="header-list-search-input"]')
          .invoke('attr', 'placeholder')
          .should('contain', 'Search');
        cy.get('[data-cy="header-list-add-car-btn"]')
          .should('be.visible')
          .and('contain', 'Add car');
        cy.get('[data-cy="header-list-add-car-link"]')
          .invoke('attr', 'href')
          .should('contain', '/car/create');
      });

      it('should show a cars table ', () => {
        cy.get('[data-cy="aside-car-button"]').click();
        cy.get('[data-cy="car-dropdown-list"]').click();

        cy.url().should('include', '/car');

        const CARS_TABLE_HEAD_NAME = ['Brand', 'Model', 'Year', 'KMS', 'Price per day', 'Actions'];

        cy.get('[data-cy="header-list-container"]').should('be.visible');
        cy.get('[data-cy="cars-table-container"]').should('be.visible');

        cy.get('[data-cy="cars-table-header"]').should('be.visible');
        cy.get('[data-cy="cars-table-header-row"]')
          .find('th')
          .each((row, index) => {
            cy.wrap(row).should('contain.text', CARS_TABLE_HEAD_NAME[index]);
          });

        cy.get('[data-cy="cars-table-body"]').should('be.visible');
      });
    });
  });
});
