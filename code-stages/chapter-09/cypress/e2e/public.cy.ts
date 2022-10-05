import { testData } from '../../src/testing/test-data';

const organization = testData.organizations[0];

const job = testData.jobs[0];

describe('public application flow', () => {
  it('should display the organization public page', () => {
    cy.visit(
      `http://localhost:3000/organizations/${organization.id}`
    );

    cy.findByRole('heading', {
      name: organization.name,
    }).should('exist');

    cy.findByRole('heading', {
      name: organization.email,
    }).should('exist');

    cy.findByRole('heading', {
      name: organization.phone,
    }).should('exist');

    cy.findByText(
      new RegExp(organization.info, 'i')
    ).should('exist');
  });

  it('should navigate to and display the public job details page', () => {
    cy.findByTestId('jobs-list').should('exist');

    cy.findByRole('row', {
      name: new RegExp(
        `${job.position} ${job.department} ${job.location} View`,
        'i'
      ),
    }).within(() => {
      cy.findByRole('link', {
        name: /view/i,
      }).click();
    });

    cy.url().should(
      'equal',
      `http://localhost:3000/organizations/${organization.id}/jobs/${job.id}`
    );

    cy.findByRole('heading', {
      name: job.position,
    }).should('exist');

    cy.findByText(new RegExp(job.info, 'i')).should(
      'exist'
    );
  });
});
