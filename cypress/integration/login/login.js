import { When } from "cypress-cucumber-preprocessor/steps"

import ConfirmationPage from '../pom/pages/confirmation.page'

When('I logout', ()=>{
    ConfirmationPage.logOut()
})