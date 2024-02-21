import { Fragment } from 'react'
import { mount } from 'cypress/react18'
import { SvgSprites } from '@r7/ui-base-components'
import React from 'react'

/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      mount: typeof mount
      addDarkMode(): void
    }
  }
}

Cypress.Commands.add('addDarkMode', () => {
  document?.documentElement.classList.add('dark')
})

Cypress.Commands.add('mount', (component, options) => {
  return mount(
    <Fragment>
      {component}
      <SvgSprites />
    </Fragment>,
    options,
  )
})
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
