import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import LoginPage from '../pom/pages/login.page'
import ProductsPage from '../pom/pages/products.page'


Given('I was on Sauce demo site', () => {
    LoginPage.openUrl()
})

When('I logged in with {string} {string}', (username, password) => {
    LoginPage.login(username, password)
})

Then('I should be landed in products page', () => {
    ProductsPage.getUrl().should('contain', '/inventory.html')
})

Then('I should see the login page', () => {
    LoginPage.txtUsername.should('be.visible')
})
