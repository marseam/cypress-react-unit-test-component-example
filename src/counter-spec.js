import React from "react";
import Counter from "./Counter";
import { mount } from '@cypress/react'

describe('Counter', () => {
    
    it('should reduce count on decrement click ', () => {
    // mount adds the component to show on a blank document
    mount(<Counter/>)
    
    cy.get('[data-cy=decrement]')
    .click()

    cy.get('[data-cy=count]')
    .contains("-1")

    cy.get('[data-cy=decrement]')
    .click()

    cy.get('[data-cy=count]')
    .contains("-2")
})

it('should increase count on increment click', () => {
    mount(<Counter/>)
    
    cy.get('[data-cy=increment]')
    .click()

    cy.get('[data-cy=count]')
    .contains("1")

    cy.get('[data-cy=increment]')
    .click()

    cy.get('[data-cy=count]')
    .contains("2")
})

it('should reset count con reset click', () => {
    mount(<Counter/>)
    
    cy.get('[data-cy=increment]')
    .click()

    cy.get('[data-cy=count]')
    .contains("1")

    cy.get('[data-cy=reset]')
    .click()

    cy.get('[data-cy=count]')
    .contains("0")
})
})
