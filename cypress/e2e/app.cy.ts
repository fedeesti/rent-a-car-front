/// <reference types="cypress" />

const URL_APP = 'http://localhost:5173';

describe('Rent a car', () => {
  beforeEach(() => {
    cy.visit(URL_APP);
  });
  it('should display the home page with its title', () => {
    cy.get('header > h1').contains('Hello, World!');
    cy.get('h1').contains('Hello, World!');
  });
});
