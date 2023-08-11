/// <reference types="cypress" />

const URL_APP = 'http://localhost:5173';
const URL_API_BASE = 'http://localhost:3000';

const route = {
  home: '/',
  cars: '/cars',
  clients: '/user',
  reservation: '/reservation',
};

describe('Rent a car', () => {
  beforeEach(() => {
    cy.visit(URL_APP);
  });

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
      describe('With cars', () => {
        beforeEach(() => {
          cy.intercept('GET', `${URL_API_BASE}${route.cars}`, { fixture: 'cars.json' }).as(
            'getCars',
          );
          cy.get('[data-cy="aside-car-button"]').click();
          cy.get('[data-cy="car-dropdown-list"]').click();
        });
        it('should show the page table header', () => {
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
        it('should show a cars table', () => {
          cy.url().should('include', '/car');

          const CARS_TABLE_HEAD_NAME = [
            'Brand',
            'Model',
            'Year',
            'KMS',
            'Price per day',
            'Actions',
          ];

          cy.get('[data-cy="header-list-container"]').should('be.visible');
          cy.get('[data-cy="cars-table-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="car-list-message-without-cars"]').should('not.exist');

          cy.get('[data-cy="cars-table-header"]').should('be.visible');
          cy.get('[data-cy="cars-table-header-row"]')
            .find('th')
            .each((row, index) => {
              cy.wrap(row).should('contain.text', CARS_TABLE_HEAD_NAME[index]);
            });

          cy.get('[data-cy="cars-table-body"]').should('be.visible');
        });
        describe('Modal', () => {
          beforeEach(() => {
            cy.get('[data-cy="row-actions-delete"]').eq(0).click();
          });
          it('when clicking delete should open a modal', () => {
            cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');
            cy.get('[data-cy="modal-btn-close"]').should('be.visible');
            cy.get('[data-cy="modal-img"]').should('be.visible');
            cy.get('[data-cy="modal-information"]')
              .should('be.visible')
              .and('contain', 'Are you sure you want to delete this car?');
            cy.get('[data-cy="modal-btn-confirm"]')
              .should('be.visible')
              .and('contain', "Yes, I'm sure");
            cy.get('[data-cy="modal-btn-cancel"]')
              .should('be.visible')
              .and('contain', 'No, cancel');
          });
          it('when clicking outside the modal, should close it', () => {
            cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

            cy.get('[data-cy="outside-modal-container"]').click('top', { force: true });
            cy.get('[data-cy="modal-container"]').should('not.exist');
          });
          it('when clicking on the modal close should close it', () => {
            cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

            cy.get('[data-cy="modal-btn-close"]').click();
            cy.get('[data-cy="modal-container"]').should('not.exist');
          });
          it('when clicking the button cancel should close it', () => {
            cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

            cy.get('[data-cy="modal-btn-cancel"]').click();
            cy.get('[data-cy="modal-container"]').should('not.exist');
          });
        });
      });
      describe('Without cars', () => {
        beforeEach(() => {
          cy.intercept('GET', `${URL_API_BASE}/cars`, {
            body: [],
          }).as('getCars');
          cy.get('[data-cy="aside-car-button"]').click();
          cy.get('[data-cy="car-dropdown-list"]').click();
        });
        it('should show the page table header', () => {
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
        it('should show a message with no cars available', () => {
          cy.get('[data-cy="cars-table-container"]').should('not.exist');
          cy.get('[data-cy="car-list-message-without-cars"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'There are no cars loaded at this time');
        });
      });
    });

    describe('Add Car', () => {
      beforeEach(() => {
        cy.get('[data-cy="aside-car-button"]').click();
        cy.get('[data-cy="car-dropdown-add"]').click();
      });

      it('should show a form to add a car', () => {
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

        cy.get('[data-cy="add-car-btn-submit"]').should('contain', 'Add Car').and('be.visible');
      });
      it('should create a car successfully', () => {
        const car = {
          brand: 'Chevrolet',
          model: 'Corsa',
          color: 'Gris',
          img: '/src/module/car/assets/images/chevrolet-corsa.jpg',
          kms: '40000',
          passengers: '5',
          price: '8000',
          year: '2010',
          transmission: 'Manual',
          airConditioner: true,
        };
        cy.url().should('include', '/create');

        cy.get('[data-cy="add-car-brand"] > input').type(car.brand);
        cy.get('[data-cy="add-car-model"] > input').type(car.model);
        cy.get('[data-cy="add-car-color"] > input').type(car.color);
        cy.get('[data-cy="add-car-kms"] > input').type(car.kms);
        cy.get('[data-cy="add-car-passengers"] > input').type(car.passengers);
        cy.get('[data-cy="add-car-price"] > input').type(car.price);
        cy.get('[data-cy="add-car-year"] > input').type(car.year);
        cy.get('[data-cy="add-car-transmission"]').find('select').select(car.transmission);
        cy.get('[data-cy="add-air-conditioner-input-true"]').check();
        cy.get('[data-cy="add-car-update-logo"]')
          .find('input')
          .selectFile('cypress/fixtures/chevrolet-corsa.jpg', { force: true });

        cy.intercept('POST', `${URL_API_BASE}${route.cars}`, { fixture: 'car.json' }).as(
          'createCar',
        );
        cy.intercept('GET', `${URL_API_BASE}${route.cars}/1`, { fixture: 'cars.json' }).as(
          'getCar',
        );
        cy.get('[data-cy="add-car-btn-submit"]').click();

        cy.url().should('not.include', '/create');
        cy.url().should('include', '/car');
        cy.get('[data-cy="car-list-container"]').should('be.visible');
      });
    });

    describe('Car Details', () => {
      beforeEach(() => {
        cy.intercept('GET', `${URL_API_BASE}${route.cars}`, { fixture: 'cars.json' }).as('getCars');
        cy.intercept('GET', `${URL_API_BASE}${route.cars}/1`, { fixture: 'car.json' }).as('getCar');
        cy.get('[data-cy="aside-car-button"]').click();
        cy.get('[data-cy="car-dropdown-list"]').click();
        cy.get('[data-cy="cars-table-row-link-view"]').eq(0).click();
      });

      it("should show a car's details on a card", () => {
        cy.url().should('include', '/view');

        cy.get('[data-cy="car-card-container"]').should('be.visible');
        cy.get('[data-cy="car-card-title"]').should('be.visible').and('contain', 'Chevrolet Corsa');
        cy.get('[data-cy="car-card-details-container"]').should('be.visible');
        cy.get('[data-cy="modal-container"]').should('not.exist');

        cy.get('[data-cy="car-card-year-container"]').should('be.visible');
        cy.get('[data-cy="car-card-year-title"]').contains('Year');
        cy.get('[data-cy="car-card-year-description"]').contains('2010');

        cy.get('[data-cy="car-card-color-container"]').should('be.visible');
        cy.get('[data-cy="car-card-color-title"]').contains('Color');
        cy.get('[data-cy="car-card-color-description"]').contains('Gris');

        cy.get('[data-cy="car-card-price-container"]').should('be.visible');
        cy.get('[data-cy="car-card-price-title"]').contains('Price per day');
        cy.get('[data-cy="car-card-price-description"]').contains('8000');

        cy.get('[data-cy="car-card-kms-container"]').should('be.visible');
        cy.get('[data-cy="car-card-kms-title"]').contains('Kilometres');
        cy.get('[data-cy="car-card-kms-description"]').contains('40000');

        cy.get('[data-cy="car-card-passengers-container"]').should('be.visible');
        cy.get('[data-cy="car-card-passengers-title"]').contains('Passengers');
        cy.get('[data-cy="car-card-passengers-description"]').contains('5');

        cy.get('[data-cy="car-card-transmission-container"]').should('be.visible');
        cy.get('[data-cy="car-card-transmission-title"]').contains('Transmision');
        cy.get('[data-cy="car-card-transmission-description"]').contains('manual');

        cy.get('[data-cy="car-card-air-conditioner-container"]').should('be.visible');
        cy.get('[data-cy="car-card-air-conditioner-title"]').contains('Air conditioner');
        cy.get('[data-cy="car-card-air-conditioner-description"]').contains('Yes');

        cy.get('[data-cy="car-card-btn-container"]').should('be.visible');
        cy.get('[data-cy="car-card-btn-update"] > a')
          .should('be.visible')
          .and('contain', 'Update car');
        cy.get('[data-cy="car-card-btn-delete"]').should('be.visible').and('contain', 'Delete');
      });

      describe('Modal', () => {
        beforeEach(() => {
          cy.get('[data-cy="car-card-btn-delete"]').click();
        });
        it('when clicking delete should open a modal', () => {
          cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="modal-btn-close"]').should('be.visible');
          cy.get('[data-cy="modal-img"]').should('be.visible');
          cy.get('[data-cy="modal-information"]')
            .should('be.visible')
            .and('contain', 'Are you sure you want to delete this car?');
          cy.get('[data-cy="modal-btn-confirm"]')
            .should('be.visible')
            .and('contain', "Yes, I'm sure");
          cy.get('[data-cy="modal-btn-cancel"]').should('be.visible').and('contain', 'No, cancel');
        });
        it('when clicking outside the modal, should close it', () => {
          cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

          cy.get('[data-cy="outside-modal-container"]').click('top', { force: true });
          cy.get('[data-cy="modal-container"]').should('not.exist');
        });
        it('when clicking on the modal close should close it', () => {
          cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

          cy.get('[data-cy="modal-btn-close"]').click();
          cy.get('[data-cy="modal-container"]').should('not.exist');
        });
        it('when clicking the button cancel should close it', () => {
          cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

          cy.get('[data-cy="modal-btn-cancel"]').click();
          cy.get('[data-cy="modal-container"]').should('not.exist');
        });
      });
    });

    describe('Edit car', () => {
      beforeEach(() => {
        cy.intercept('GET', `${URL_API_BASE}${route.cars}`, { fixture: 'cars.json' }).as('getCars');
        cy.intercept('GET', `${URL_API_BASE}${route.cars}/1/edit`, { fixture: 'car.json' }).as(
          'getCar',
        );
        cy.get('[data-cy="aside-car-button"]').click();
        cy.get('[data-cy="car-dropdown-list"]').click();
        cy.get('[data-cy="cars-table-row-link-edit"]').eq(0).click();
      });
      it('should show a form to edit a car', () => {
        cy.url().should('include', '/edit');

        cy.get('[data-cy="add-car-container"]').should('be.visible');
        cy.get('[data-cy="edit-car-title"]').contains('Edit a car');
        cy.get('[data-cy="add-car-form-container"]').should('be.visible');

        cy.get('[data-cy="add-car-brand"] > label').contains('Brand Name');
        cy.get('[data-cy="add-car-brand"] > input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="add-car-model"] > label').contains('Model');
        cy.get('[data-cy="add-car-model"] > input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="add-car-color"] > label').contains('Color');
        cy.get('[data-cy="add-car-color"] > input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="add-car-kms"] > label').contains('Kilometres');
        cy.get('[data-cy="add-car-kms"] > input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="add-car-passengers"] > label').contains('Passengers');
        cy.get('[data-cy="add-car-passengers"] > input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="add-car-price"] > label').contains('Price');
        cy.get('[data-cy="add-car-price"] > input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="add-car-year"] > label').contains('Year');
        cy.get('[data-cy="add-car-year"] > input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

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

        cy.get('[data-cy="car-form-btn-update"]').should('contain', 'Update car').and('be.visible');
        cy.get('[data-cy="car-form-btn-delete"]').should('contain', 'Delete').and('be.visible');
      });
      it('should update a car successfully', () => {
        const newData = {
          brand: 'chevrolet',
          model: 'corsa',
          color: 'black',
        };
        cy.url().should('include', '/edit');

        cy.get('[data-cy="add-car-brand"] > input').clear();
        cy.get('[data-cy="add-car-model"] > input').clear();
        cy.get('[data-cy="add-car-color"] > input').clear();

        cy.get('[data-cy="add-car-brand"] > input').type(newData.brand);
        cy.get('[data-cy="add-car-model"] > input').type(newData.model);
        cy.get('[data-cy="add-car-color"] > input').type(newData.color);

        cy.intercept('PATCH', `${URL_API_BASE}${route.cars}/1`, { fixture: 'car.json' }).as(
          'createCar',
        );
        cy.intercept('GET', `${URL_API_BASE}${route.cars}/1`, { fixture: 'cars.json' }).as(
          'getCar',
        );
        cy.get('[data-cy="car-form-btn-update"]').click();

        cy.url().should('not.include', '/edit');
        cy.url().should('include', '/car');
        cy.get('[data-cy="car-list-container"]').should('be.visible');
      });
    });

    describe('Delete car', () => {
      beforeEach(() => {
        cy.intercept('GET', `${URL_API_BASE}${route.cars}`, { fixture: 'cars.json' }).as(
          'getCarsThreeLength',
        );
        cy.get('[data-cy="aside-car-button"]').click();
        cy.get('[data-cy="car-dropdown-list"]').click();
      });
      it('when deleting a car from the table, should delete successfully', () => {
        cy.get('[data-cy="car-row-table"]').should('have.length', 3);
        cy.get('[data-cy="row-actions-delete"]').eq(0).click();

        cy.intercept('DELETE', `${URL_API_BASE}${route.cars}/1`, { fixture: 'car.json' });
        cy.intercept('GET', `${URL_API_BASE}${route.cars}`, { fixture: 'cars-two-length.json' }).as(
          'getCarsTwoLength',
        );
        cy.get('[data-cy="modal-btn-confirm"]').click();

        cy.get('[data-cy="car-row-table"]').should('have.length', 2);
      });
      it('when deleting a car from the Car card, should delete it successfully', () => {
        cy.get('[data-cy="car-row-table"]').should('have.length', 3);

        cy.intercept('GET', `${URL_API_BASE}${route.cars}/1`, { fixture: 'car.json' }).as('getCar');
        cy.get('[data-cy="cars-table-row-link-view"]').eq(0).click();
        cy.get('[data-cy="car-card-btn-delete"]').click();

        cy.intercept('DELETE', `${URL_API_BASE}${route.cars}/1`, { fixture: 'car.json' });
        cy.intercept('GET', `${URL_API_BASE}${route.cars}`, { fixture: 'cars-two-length.json' }).as(
          'getCarsTwoLength',
        );
        cy.get('[data-cy="modal-btn-confirm"]').click();

        cy.get('[data-cy="car-row-table"]').should('have.length', 2);
      });
      it('when deleting a car from the form edit car, should delete it successfully', () => {
        cy.get('[data-cy="car-row-table"]').should('have.length', 3);

        cy.intercept('GET', `${URL_API_BASE}${route.cars}/1/edit`, { fixture: 'car.json' }).as(
          'getCar',
        );
        cy.get('[data-cy="cars-table-row-link-edit"]').eq(0).click();
        cy.get('[data-cy="car-form-btn-delete"]').click();

        cy.intercept('DELETE', `${URL_API_BASE}${route.cars}/1`, { fixture: 'car.json' });
        cy.intercept('GET', `${URL_API_BASE}${route.cars}`, { fixture: 'cars-two-length.json' }).as(
          'getCarsTwoLength',
        );
        cy.get('[data-cy="modal-btn-confirm"]').click();

        cy.get('[data-cy="car-row-table"]').should('have.length', 2);
      });
    });
  });

  describe('Clients management', () => {
    describe.only('Client List page', () => {
      describe('With clients', () => {
        beforeEach(() => {
          cy.intercept('GET', `${URL_API_BASE}${route.clients}`, {
            fixture: './client/three-clients.json',
          });
          cy.get('[data-cy="aside-client-btn"]').click();
          cy.get('[data-cy="dropdown-client-list"]').click();
          cy.url().should('include', '/client');
        });
        it('should show the client list page', () => {
          cy.get('[data-cy="client-list-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="client-list-header-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="list-message-without-clients"]').should('not.exist');
          cy.get('[data-cy="client-table-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="client-thead-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="client-tbody-container"]').should('exist').and('be.visible');
        });
        it('should show the client list header', () => {
          cy.get('[data-cy="client-list-header-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="list-header-search-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="list-header-btn-add"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Add client');
        });
        it('should show a client table', () => {
          cy.get('[data-cy="list-message-without-clients"]').should('not.exist');
          cy.get('[data-cy="client-table-container"]').should('exist').and('be.visible');

          cy.get('[data-cy="client-thead-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="thead-row-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="thead-row-name"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Name');
          cy.get('[data-cy="thead-row-nationality"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Nationality');
          cy.get('[data-cy="thead-row-action"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Action');

          cy.get('[data-cy="client-tbody-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="tbody-row-container"]')
            .should('exist')
            .and('be.visible')
            .and('have.length', 3);
          cy.get('[data-cy="tbody-row-name"]').should('exist').and('be.visible');
          cy.get('[data-cy="tbody-row-email"]').should('exist').and('be.visible');
          cy.get('[data-cy="tbody-row-nationality"]').should('exist').and('be.visible');
          cy.get('[data-cy="tbody-row-actions-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="tbody-row-actions-view"]').should('exist').and('be.visible');
          cy.get('[data-cy="tbody-row-actions-edit"]').should('exist').and('be.visible');
          cy.get('[data-cy="tbody-row-actions-delete"]').should('exist').and('be.visible');
        });
        describe('Modal', () => {
          beforeEach(() => {
            cy.get('[data-cy="tbody-row-actions-delete"]').eq(0).click();
          });
          it('when clicking delete should open a modal', () => {
            cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');
            cy.get('[data-cy="modal-btn-close"]').should('be.visible');
            cy.get('[data-cy="modal-information"]')
              .should('be.visible')
              .and('contain', 'Are you sure you want to delete');
            cy.get('[data-cy="modal-btn-confirm"]')
              .should('be.visible')
              .and('contain', "Yes, I'm sure");
            cy.get('[data-cy="modal-btn-cancel"]')
              .should('be.visible')
              .and('contain', 'No, cancel');
          });
          it('when clicking outside the modal, should close it', () => {
            cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

            cy.get('[data-cy="outside-modal-container"]').click('top', { force: true });
            cy.get('[data-cy="modal-container"]').should('not.exist');
          });
          it('when clicking on the modal close should close it', () => {
            cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

            cy.get('[data-cy="modal-btn-close"]').click();
            cy.get('[data-cy="modal-container"]').should('not.exist');
          });
          it('when clicking the button cancel should close it', () => {
            cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

            cy.get('[data-cy="modal-btn-cancel"]').click();
            cy.get('[data-cy="modal-container"]').should('not.exist');
          });
        });
      });
      describe('Without clients', () => {
        beforeEach(() => {
          cy.intercept('GET', `${URL_API_BASE}${route.clients}`, {
            body: [],
          });
          cy.get('[data-cy="aside-client-btn"]').click();
          cy.get('[data-cy="dropdown-client-list"]').click();
          cy.url().should('include', '/client');
        });
        it('should show the client list page with the message no clients available', () => {});
      });
    });
    describe('Create client', () => {
      beforeEach(() => {
        cy.get('[data-cy="aside-client-btn"]').click();
      });
      it('should show the create client page from the sidebar', () => {
        cy.get('[data-cy="dropdown-client-add"]').click();
        cy.url().should('include', '/create');

        cy.get('[data-cy="create-client-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="create-client-title"]')
          .should('exist')
          .and('be.visible')
          .and('contain', 'Add a new client');
        cy.get('[data-cy="client-form-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="client-form-btn-add"]')
          .should('exist')
          .and('be.visible')
          .and('contain', 'Add Client');
        cy.get('[data-cy="client-form-btn-container"]').should('not.exist');
      });
      it('should show the create client page from the client list page', () => {
        cy.get('[data-cy="dropdown-client-list"]').click();
        cy.get('[data-cy="list-header-btn-add"]').find('a').click();
        cy.url().should('include', '/create');

        cy.get('[data-cy="create-client-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="create-client-title"]')
          .should('exist')
          .and('be.visible')
          .and('contain', 'Add a new client');
        cy.get('[data-cy="client-form-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="client-form-btn-add"]')
          .should('exist')
          .and('be.visible')
          .and('contain', 'Add Client');
        cy.get('[data-cy="client-form-btn-container"]').should('not.exist');
      });
      it('should show the create client form', () => {
        cy.get('[data-cy="dropdown-client-add"]').click();
        cy.url().should('include', '/create');

        cy.get('[data-cy="create-client-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="create-client-title"]')
          .should('exist')
          .and('be.visible')
          .and('contain', 'Add a new client');

        cy.get('[data-cy="client-form-container"]').should('exist').and('be.visible');

        cy.get('[data-cy="client-form-first-name"]').should('exist').and('be.visible');
        cy.get('[data-cy="client-form-first-name"]').find('label').contains('First name');
        cy.get('[data-cy="client-form-first-name"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('contain', 'Type name');

        cy.get('[data-cy="client-form-last-name"]').find('label').contains('Last name');
        cy.get('[data-cy="client-form-last-name"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('contain', 'Type last name');

        cy.get('[data-cy="client-form-nationality"]').find('label').contains('Nationality');

        cy.get('[data-cy="client-form-doc-type"]').find('label').contains('Document Type');

        cy.get('[data-cy="client-form-doc-number"]').find('label').contains('Document Number');
        cy.get('[data-cy="client-form-doc-number"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('contain', 'Type Document Number');

        cy.get('[data-cy="client-form-address"]').find('label').contains('Address');
        cy.get('[data-cy="client-form-address"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('contain', 'Type address');

        cy.get('[data-cy="client-form-phone"]').find('label').contains('Phone');
        cy.get('[data-cy="client-form-phone"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('contain', 'Type phone');

        cy.get('[data-cy="client-form-email"]').find('label').contains('Email');
        cy.get('[data-cy="client-form-email"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('contain', 'example@email.com');

        cy.get('[data-cy="client-form-birthdate"]').find('label').contains('Birthdate');

        cy.get('[data-cy="client-form-btn-add"]')
          .should('exist')
          .and('be.visible')
          .and('contain', 'Add Client');
        cy.get('[data-cy="client-form-btn-container"]').should('not.exist');
      });
    });
    describe('Edit client', () => {
      beforeEach(() => {
        cy.get('[data-cy="aside-client-btn"]').click();
        cy.get('[data-cy="dropdown-client-list"]').click();
        cy.url().should('include', '/client');
        cy.get('[data-cy="tbody-row-actions-edit"]').eq(0).click();
        cy.url().should('include', '/edit');
      });
      it('should show the form to update a client', () => {
        cy.get('[data-cy="edit-client-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="edit-client-title"]')
          .should('exist')
          .and('be.visible')
          .and('contain', 'Edit client');

        cy.get('[data-cy="client-form-container"]').should('exist').and('be.visible');

        cy.get('[data-cy="client-form-first-name"]').should('exist').and('be.visible');
        cy.get('[data-cy="client-form-first-name"]').find('label').contains('First name');
        cy.get('[data-cy="client-form-first-name"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="client-form-last-name"]').find('label').contains('Last name');
        cy.get('[data-cy="client-form-last-name"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="client-form-nationality"]').find('label').contains('Nationality');

        cy.get('[data-cy="client-form-doc-type"]').find('label').contains('Document Type');

        cy.get('[data-cy="client-form-doc-number"]').find('label').contains('Document Number');
        cy.get('[data-cy="client-form-doc-number"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="client-form-address"]').find('label').contains('Address');
        cy.get('[data-cy="client-form-address"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="client-form-phone"]').find('label').contains('Phone');
        cy.get('[data-cy="client-form-phone"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="client-form-email"]').find('label').contains('Email');
        cy.get('[data-cy="client-form-email"]')
          .find('input')
          .invoke('attr', 'placeholder')
          .should('not.be.empty');

        cy.get('[data-cy="client-form-birthdate"]').find('label').contains('Birthdate');

        cy.get('[data-cy="client-form-btn-add"]').should('not.exist');

        cy.get('[data-cy="client-form-btn-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="client-form-btn-update"]')
          .should('exist')
          .and('be.visible')
          .contains('Update client');
        cy.get('[data-cy="client-form-btn-delete"]')
          .should('exist')
          .and('be.visible')
          .contains('Delete');
      });
    });
    describe('View client', () => {
      beforeEach(() => {
        cy.get('[data-cy="aside-client-btn"]').click();
        cy.get('[data-cy="dropdown-client-list"]').click();
        cy.get('[data-cy="tbody-row-actions-view"]').eq(0).click();
        cy.url().should('include', '/view');
      });
      it('should show a client card', () => {
        cy.get('[data-cy="card-client-container"]').should('exist').and('be.visible');

        cy.get('[data-cy="card-client-header-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="card-client-header-title"]')
          .should('exist')
          .and('be.visible')
          .contains('Javier Milei');
        cy.get('[data-cy="card-client-header-link"]')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href', '/client')
          .contains('Go back');

        cy.get('[data-cy="card-client-details-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="card-client-doc-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="card-client-birthdate"]').should('exist').and('be.visible');
        cy.get('[data-cy="card-client-nationality"]').should('exist').and('be.visible');
        cy.get('[data-cy="card-client-phone"]').should('exist').and('be.visible');
        cy.get('[data-cy="card-client-email"]').should('exist').and('be.visible');
        cy.get('[data-cy="card-client-address"]').should('exist').and('be.visible');

        cy.get('[data-cy="card-client-btn-container"]').should('exist').and('be.visible');
        cy.get('[data-cy="card-client-btn-edit"]')
          .should('exist')
          .and('be.visible')
          .contains('Edit client');
        cy.get('[data-cy="card-client-btn-delete"]')
          .should('exist')
          .and('be.visible')
          .contains('Delete');
      });
      describe('Modal', () => {
        beforeEach(() => {
          cy.get('[data-cy="card-client-btn-delete"]').click();
        });
        it('when clicking delete should open a modal', () => {
          cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');
          cy.get('[data-cy="modal-btn-close"]').should('be.visible');
          cy.get('[data-cy="modal-information"]')
            .should('be.visible')
            .and('contain', 'Are you sure you want to delete');
          cy.get('[data-cy="modal-btn-confirm"]')
            .should('be.visible')
            .and('contain', "Yes, I'm sure");
          cy.get('[data-cy="modal-btn-cancel"]').should('be.visible').and('contain', 'No, cancel');
        });
        it('when clicking outside the modal, should close it', () => {
          cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

          cy.get('[data-cy="outside-modal-container"]').click('top', { force: true });
          cy.get('[data-cy="modal-container"]').should('not.exist');
        });
        it('when clicking on the modal close should close it', () => {
          cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

          cy.get('[data-cy="modal-btn-close"]').click();
          cy.get('[data-cy="modal-container"]').should('not.exist');
        });
        it('when clicking the button cancel should close it', () => {
          cy.get('[data-cy="modal-container"]').should('exist').and('be.visible');

          cy.get('[data-cy="modal-btn-cancel"]').click();
          cy.get('[data-cy="modal-container"]').should('not.exist');
        });
      });
    });
  });
});
//  cy.get('[]').should('exist').and('be.visible');
