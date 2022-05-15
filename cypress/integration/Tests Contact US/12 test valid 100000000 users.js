import {testData} from './testData';

describe('12 test valid 100000000 users', () => {
    before(() => {
        cy.visit('/');
    });

    it('Checking the Number of users field, enter a valid value of 100000000.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.validTestData.users_100000000)
                cy.log("Проверка поля'Number of users', вводим допустимое значение 100000000.")
        cy.get('#mat-input-4').type(testData.validTestData.work_email)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)
        cy.get('.outline-form > .mat-focus-indicator').should('not.have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' активна")                
    })

    it('The form is filled with valid data and submitted.', () => {
        
        cy.get('.outline-form > .mat-focus-indicator').click()
                cy.log("Форма заполнена валидными данными и отправлена.")  
        cy.get('.mat-snack-bar-container').contains("Thank you for contacting us, we'll get back to you as soon as possible")
                cy.log('Проверка сообщения об успешной отправке.')      
               
    })
})