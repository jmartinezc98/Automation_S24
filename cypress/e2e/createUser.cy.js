import '../support/commands'

const { saveUserDataToExcel } = require('../utils/excelUtils');

describe('Creación de Usuario', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.selectUserProfile()
    });


    it('Validación de campos y botones del formulario de creación de usuario', () => {
        cy.get('#register-tab').should('be.visible').click()
        cy.get('#registration-form-fname').should('be.visible').and('have.attr', 'placeholder', 'Ingresa tu nombre')
        cy.get('#registration-form-lname').should('be.visible').and('have.attr', 'placeholder', 'Ingresa tus apellidos')
        // cy.get('#documentType').should('have.attr', 'list')
        cy.get('#registration-form-documentNumber').should('be.visible').and('have.attr', 'placeholder', 'Ingresa tu documento')
        cy.get('#registration-form-email').should('be.visible').and('have.attr', 'placeholder', 'Ingresa tu correo electrónico')
        cy.get('#registration-form-email-confirm').should('be.visible').and('have.attr', 'placeholder', 'Ingresa de nuevo tu correo electrónico')
        cy.get('#registration-form-password').should('be.visible').and('have.attr', 'placeholder', 'Ingresa una contraseña')
        cy.get('#registration-form-password-confirm').should('be.visible').and('have.attr', 'placeholder', 'Ingresa de nuevo tu contraseña')
        cy.get('input[class="custom-control-input"]').should('exist').and('have.attr', 'type', 'checkbox')
        cy.get('button[class="btn btn-block btn-primary"]').should('be.visible').and('contain', 'Crear cuenta')
        cy.get('.privacy-policy a').should('have.attr', 'href', '/privacy-and-policies.html')
    })

    it('Diligenciamiento de la información', () => {
        cy.get('#register-tab').should('be.visible').click()

        cy.fixture('data').then((data) => {
            cy.generateUserData().then((userData) => {
                // Usar los datos generados en la prueba
                cy.get('#registration-form-fname').type(userData.firstName);
                cy.get('#registration-form-lname').type(userData.lastName);
                cy.get('#documentType').select('Pasaporte'); // O el tipo de documento que necesites
                cy.get('#registration-form-documentNumber').type(userData.documentNumber+'0123');
                cy.get('#registration-form-email').type(userData.firstName+'@yopmail.com');
                cy.get('#registration-form-email-confirm').type(userData.firstName+'@yopmail.com');
                cy.get('#registration-form-password').type(data.password);
                cy.get('#registration-form-password-confirm').type(data.password);
                cy.log(JSON.stringify(userData));
            })
        })

        // Guarda los datos en Excel
        // cy.task('saveUserDataToExcel', userData);

        //Completar Registro
        cy.get('button[type="submit"]').contains('Crear cuenta').should('be.visible').click()
        cy.get('div[class="container account-content"]').should('be.visible')
    })
})