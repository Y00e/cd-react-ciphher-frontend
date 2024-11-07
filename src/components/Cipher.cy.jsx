import React from 'react'
import Cipher from './Cipher'

describe('<Cipher />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cipher />)
  })
  it('encrypt text correctly', () => {
    cy.mount(<Cipher />)

    cy.get('.textInput').type('hello')
    cy.get('.btn1').click()
    cy.get('.outputText').should('contain', 'Result: ')
    cy.get('.outputText').should('contain', 'Result: khoor')

  })


  it('decrypts text correctly', () => {
    cy.mount(<Cipher />)
  
    cy.get('.textInput').type('khoor')
    cy.get('.btn2').click()
    cy.get('.outputText').should('contain', 'Result: ')
    cy.get('.outputText').should('contain', 'Result: hello')
    
  })
  

})