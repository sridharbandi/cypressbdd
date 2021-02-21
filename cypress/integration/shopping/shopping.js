import { When, Then, And } from 'cypress-cucumber-preprocessor/steps'

import ProductsPage from '../pom/pages/products.page'
import ProductPage from '../pom/pages/product.page'
import CartPage from '../pom/pages/cart.page'
import PersonalInfoPage from '../pom/pages/personalinfo.page'
import ReviewPage from '../pom/pages/review.page'
import ConfirmationPage from '../pom/pages/confirmation.page'


When('I add fleece jacket to the cart', () => {
    ProductsPage.selectFleeceJacket()
    ProductPage.clickAddtoCart()
    ProductPage.btnRemove.should('be.visible')
})

And('I checkout the product', () => {
    ProductPage.chooseCart()
    CartPage.checkOut()
})

Then('I see the cart price should match with product price', () => {
    cy.get('@price').then(productprice => {
        cy.get('@cartprice').then(cartprice => {
            expect(productprice).to.contain(cartprice)
        })
    })
})

When('I submit personal information', () => {
    PersonalInfoPage.submitPersonalInfo()
})

And('I confirmed the product', () => {
    ReviewPage.clickFinish()
})

Then('I should see order confirmation', () => {
    ConfirmationPage.lblConfirmTitle.should('contain', 'THANK YOU FOR YOUR ORDER')
})

When('I logout from order confirmation', () => {
    ConfirmationPage.logOut()
})

