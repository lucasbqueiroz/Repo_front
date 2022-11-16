/// <reference types="cypress" />
 
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
//const { homePage} = require('../../support/pages')

Given('I visit VR website', ()=>{
    cy.viewport(1270,880)
    cy.visit('https://www.vr.com.br/')
})

When('I look for where I can use the VR card', ()=>{
    cy.get(':nth-child(3) > .vr-main-navigation__link').click()
    cy.get('.vr-hero__actions > .vr-button--negative').click()
})

Then('I can see the map', ()=>{
    cy.get('#endereco')
})