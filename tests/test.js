let inputData = {
    nameInput: 'Donquixote Doflamingo',
    phoneInput: '5555555555',
    titleInput: 'Warlord',
    badNameInput: 'Our Market Research Shows That Players Like Really Long Card Names So We Made this Card to Have the Absolute Longest Card Name Ever Elemental',
    badPhoneInput: 'Art rampage 2 (Whenever this creature becomes blocked by a creature, it gets +2/+2 for each creature in the blockers art beyond the first.)',
    badTitleInput: 'Just call it OMRSTPLRLCNSWMTCTHTALCNEE for short.'
}

let EmployeeManager = {}
module.exports = {
    before: browser => {
        EmployeeManager = browser.page.EmployeeManager()
        EmployeeManager.navigate()
    },
    after: browser => {
        browser.end()
    },
    // https://dmutah.atlassian.net/browse/DEM-2, https://dmutah.atlassian.net/browse/DEM-9
    'Initial Page Load and Adding an Employee': browser => {
        EmployeeManager
        .waitForElementPresent('@emp1', 5000)
        //DEM-2
        .verify.containsText('@pageHeader', 'Employee Manager')
        EmployeeManager
        .verify.containsText('@footer', 'Version 1.2')
        EmployeeManager
        .waitForElementPresent('@noEmployee', 200)
        .verify.containsText('@emp1', 'Bernice Ortiz')
        .verify.containsText('@emp2', 'Marnie Barnett')
        .verify.containsText('@emp3', 'Phillip Weaver')
        .verify.containsText('@emp4', 'Teresa Osborne')
        .verify.containsText('@emp5', 'Dollie Berry')
        .verify.containsText('@emp6', 'Harriet Williamson')
        .verify.containsText('@emp7', 'Ruby Estrada')
        .verify.containsText('@emp8', 'Lou White')
        .verify.containsText('@emp9', 'Eve Sparks')
        .verify.containsText('@emp10', 'Lois Brewer')
        .click('@emp1')
        .click('@emp2')
        .click('@emp3')
        .click('@emp4')
        .click('@emp5')
        .click('@emp6')
        .click('@emp7')
        .click('@emp8')
        .click('@emp9')
        .click('@emp10')
        //DEM-9
        .click('@add')
        .click('@emp11')
        .assert.valueContains('@nameInputField', 'New Employee')
        EmployeeManager
        .assert.valueContains('@phoneNumberInputField', '1234567890')
        EmployeeManager
        .assert.valueContains('@titleInputField', 'New Employee')
        EmployeeManager
    },
    //https://dmutah.atlassian.net/browse/DEM-7, https://dmutah.atlassian.net/browse/DEM-8, https://dmutah.atlassian.net/browse/DEM-10
    'Generating Errors, Clearing Errors, Correcting Errors': browser => {
        EmployeeManager
        //DEM-7
        .setValue('@nameInputField', inputData.badNameInput)
        .setValue('@phoneNumberInputField', inputData.badPhoneInput)
        .setValue('@titleInputField', inputData.badTitleInput)
        .click('@saveButton')
        .waitForElementPresent('@nameError', 500)
        .waitForElementPresent('@phoneError', 500)
        .waitForElementPresent('@titleError', 500)
        //DEM-8
        .click('@cancelButton')
        .waitForElementNotPresent('@nameError', 500)
        .waitForElementNotPresent('@phoneError', 500)
        .waitForElementNotPresent('@titleError', 500)
        //DEM-10
        .clearValue('@nameInputField')
        .clearValue('@phoneNumberInputField')
        .clearValue('@titleInputField')
        .setValue('@nameInputField', inputData.badNameInput)
        .setValue('@phoneNumberInputField', inputData.badPhoneInput)
        .setValue('@titleInputField', inputData.badTitleInput)
        .click('@saveButton')
        .waitForElementPresent('@nameError', 500)
        .waitForElementPresent('@phoneError', 500)
        .waitForElementPresent('@titleError', 500)
        .clearValue('@nameInputField')
        .setValue('@nameInputField', inputData.nameInput)
        .clearValue('@phoneNumberInputField')
        .clearValue('@titleInputField')
        .setValue('@phoneNumberInputField', inputData.phoneInput)
        .setValue('@titleInputField', inputData.titleInput)
        .click('@saveButton')
        .waitForElementNotPresent('@nameError', 500)
        .waitForElementNotPresent('@phoneError', 500)
        .waitForElementNotPresent('@titleError', 500)
    },
    //https://dmutah.atlassian.net/browse/DEM-6, https://dmutah.atlassian.net/browse/DEM-4, https://dmutah.atlassian.net/browse/DEM-5
    'Navigating Away, Cancelling and Saving Changes': browser => {
            EmployeeManager
            //DEM-6
            .click('@emp5')
            .verify.valueContains('@nameInputField', 'Dollie Berry')
            .verify.valueContains('@phoneNumberInputField', '4873459812')
            .verify.valueContains('@titleInputField', 'Front-End Developer')
            .setValue('@nameInputField', inputData.badNameInput)
            .setValue('@phoneNumberInputField', inputData.badPhoneInput)
            .setValue('@titleInputField', inputData.badTitleInput)
            .click('@emp6')
            .waitForElementPresent('@disabledSaveButton', 500)
            .waitForElementPresent('@disabledCancelButton', 500)
            .verify.containsText('@employeeID', '6')
            .click('@emp5')
            .verify.valueContains('@nameInputField', 'Dollie Berry')
            .verify.valueContains('@phoneNumberInputField', '4873459812')
            .verify.valueContains('@titleInputField', 'Front-End Developer')
            //DEM-4
            .setValue('@nameInputField', inputData.badNameInput)
            .setValue('@phoneNumberInputField', inputData.badPhoneInput)
            .setValue('@titleInputField', inputData.badTitleInput)
            .click('@cancelButton')
            .verify.valueContains('@nameInputField', 'Dollie Berry')
            .verify.valueContains('@phoneNumberInputField', '4873459812')
            .verify.valueContains('@titleInputField', 'Front-End Developer')
            .waitForElementPresent('@disabledSaveButton', 500)
            .waitForElementPresent('@disabledCancelButton', 500)
            //DEM-5
            .clearValue('@nameInputField')
            .setValue('@nameInputField', inputData.nameInput)
            .clearValue('@phoneNumberInputField')
            .clearValue('@titleInputField')
            .setValue('@phoneNumberInputField', inputData.phoneInput)
            .setValue('@titleInputField', inputData.titleInput)
            .click('@saveButton')
            .waitForElementPresent('@disabledSaveButton', 500)
            .waitForElementPresent('@disabledCancelButton', 500)
            .waitForElementNotPresent('@nameError', 500)
            .waitForElementNotPresent('@phoneError', 500)
            .waitForElementNotPresent('@titleError', 500)
            .verify.containsText('@emp5', inputData.nameInput)
            .click('@emp7')
            .verify.valueContains('@nameInputField', 'Ruby Estrada')
            .verify.valueContains('@phoneNumberInputField', '5740923478')
            .verify.valueContains('@titleInputField', 'Back-End Developer')
            .click('@emp5')
            .verify.valueContains('@nameInputField', inputData.nameInput)
            .verify.valueContains('@phoneNumberInputField', inputData.phoneInput)
            .verify.valueContains('@titleInputField', inputData.titleInput)

    },
}