// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Comando para seleccionar un tipo de documento de forma aleatoria
Cypress.Commands.add('selectUserProfile', () => {
    cy.get('a[aria-label="Inicia sesión en tu cuenta"]').should('exist').click()
    cy.url().should('include', '/Login-Show')
    cy.get('#login-form-email').should('be.visible').and('have.attr', 'placeholder', 'Ingresa tu correo electrónico')
    cy.get('#login-form-password').should('be.visible').and('have.attr', 'placeholder', 'Ingresa tu contraseña')
    cy.get('button[type="submit"]').should('be.visible').and('contain', 'Iniciar sesión')
});

// Importar faker.js
const { faker } = require('@faker-js/faker');

// Agregar un comando personalizado para generar datos
Cypress.Commands.add('generateUserData', () => {
    return new Cypress.Promise((resolve) => {
        const userData = {
            firstName: faker.person.firstName(), // Método actualizado para obtener el nombre
            lastName: faker.person.lastName(),   // Método actualizado para obtener el apellido
            documentNumber: faker.number.int({ min: 100000000, max: 999999999 }).toString(), // Genera un número de 8 dígitos
            email: faker.internet.email(),
            password: faker.internet.password(10)  // Genera una contraseña de 10 caracteres
        };

        resolve(userData);
    });
});

Cypress.Commands.add('loginUser', () => {

    cy.fixture('data').then((data) => {
        cy.get('#login-form-email').should('be.visible').and('have.attr', 'placeholder', 'Ingresa tu correo electrónico')
        cy.get('#login-form-email').type(data.email)
        cy.get('#login-form-password').should('be.visible').and('have.attr', 'placeholder', 'Ingresa tu contraseña')
        cy.get('#login-form-password').type(data.password)
        cy.get('#rememberMe').should('exist').and('have.attr', 'type', 'checkbox')
        cy.get('button').contains('Iniciar sesión').click()

        //Validación incio Sesión
        cy.wait(1000)
        cy.url().should('include', '/Account-Show?registration=false')
        cy.get('div[class="container account-content"]').should('be.visible')
        // cy.get('div.card-body dl').contains('Nombre').siblings('dd').should('contain', data.firstName);    
    })

})

Cypress.Commands.add('homePage', () => {
    cy.get('a[class="logo-home"]').click({ force: true })
    cy.wait(2000)
})