import { testData } from '../../src/testing/test-data';

const user = testData.users[0];

const job = testData.jobs[0];

describe('dashboard', () => {
  it('should authenticate into the dashboard', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('http://localhost:3000/dashboard/jobs');

    cy.wait(500);

    cy.url().should(
      'equal',
      'http://localhost:3000/auth/login?redirect=/dashboard/jobs'
    );

    cy.findByRole('textbox', {
      name: /email/i,
    }).type(user.email);

    cy.findByLabelText(/password/i).type(
      user.password.toLowerCase()
    );

    cy.findByRole('button', {
      name: /log in/i,
    }).click();

    cy.findByRole('heading', {
      name: /jobs/i,
    }).should('exist');
  });

  it('should navigate to and visit the job details page', () => {
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

    cy.findByRole('heading', {
      name: job.position,
    }).should('exist');

    cy.findByText(new RegExp(job.info, 'i')).should(
      'exist'
    );
  });

  it('should create a new job', () => {
    cy.go('back');

    cy.findByRole('link', {
      name: /create job/i,
    }).click();

    const jobData = {
      position: 'Software Engineer',
      location: 'London',
      department: 'Engineering',
      info: 'Lorem Ipsum',
    };

    cy.findByRole('textbox', {
      name: /position/i,
    }).type(jobData.position);
    cy.findByRole('textbox', {
      name: /department/i,
    }).type(jobData.department);
    cy.findByRole('textbox', {
      name: /location/i,
    }).type(jobData.location);
    cy.findByRole('textbox', {
      name: /info/i,
    }).type(jobData.info);

    cy.findByRole('button', {
      name: /create/i,
    }).click();

    cy.findByText(/job created!/i).should('exist');
  });

  it('should log out from the dashboard', () => {
    cy.findByRole('button', {
      name: /log out/i,
    }).click();

    cy.wait(500);

    cy.url().should(
      'equal',
      'http://localhost:3000/auth/login'
    );
  });
});
