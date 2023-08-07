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

    describe('Add Car', () => {
      it('should show a form to add a car', () => {
        cy.get('[data-cy="aside-car-button"]').click();
        cy.get('[data-cy="car-dropdown-add"]').click();

        cy.url().should('include', '/create');

        cy.get('[data-cy="add-car-container"]').should('be.visible');
        cy.get('[data-cy="add-car-title"]').contains('Add a new car');
        cy.get('[data-cy="add-car-form-container"]').should('be.visible');

        cy.get('[data-cy="add-car-brand"] > label').contains('Brand Name');
        cy.get('[data-cy="add-car-brand"] > input')
          .invoke('attr', 'placeholder')
          .should('contain', 'Type brand name');

        cy.get('[data-cy="add-car-model"] > label').contains('Model');
        cy.get('[data-cy="add-car-model"] > input')
          .invoke('attr', 'placeholder')
          .should('contain', 'Type model');

        cy.get('[data-cy="add-car-color"] > label').contains('Color');
        cy.get('[data-cy="add-car-color"] > input')
          .invoke('attr', 'placeholder')
          .should('contain', 'Type color');

        cy.get('[data-cy="add-car-kms"] > label').contains('Kilometres');
        cy.get('[data-cy="add-car-kms"] > input')
          .invoke('attr', 'placeholder')
          .should('contain', '12');

        cy.get('[data-cy="add-car-passengers"] > label').contains('Passengers');
        cy.get('[data-cy="add-car-passengers"] > input')
          .invoke('attr', 'placeholder')
          .should('contain', '4');

        cy.get('[data-cy="add-car-price"] > label').contains('Price');
        cy.get('[data-cy="add-car-price"] > input')
          .invoke('attr', 'placeholder')
          .should('contain', '$2999');

        cy.get('[data-cy="add-car-year"] > label').contains('Year');
        cy.get('[data-cy="add-car-year"] > input')
          .invoke('attr', 'placeholder')
          .should('contain', '1999');

        cy.get('[data-cy="add-car-transmission"] > label').contains('Transmission');

        cy.get('[data-cy="add-car-air-conditioner"] > h3').contains('Air Conditioner');
        cy.get('[data-cy="add-air-conditioner-input-container"]').should('be.visible');
        cy.get('[data-cy="add-air-conditioner-input-true"]')
          .invoke('val')
          .should('contain', 'true');
        cy.get('[data-cy="add-air-conditioner-input-false"]')
          .invoke('val')
          .should('contain', 'false');

        cy.get('[data-cy="add-car-update-logo"] > label').contains('Upload logo');
        cy.get('[data-cy="add-car-update-logo"] > input').should('be.visible');

        cy.get('[data-cy="add-car-btn-submit"]').should('contain', 'Add car').and('be.visible');
      });
    });
  });
});
