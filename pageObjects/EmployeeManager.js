module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
    elements: {
        //MISC
        pageHeader: 'span[class="titleText"]',
        footer: '.footer',
        //Buttons
        saveButton: 'button[id="saveBtn"]',
        cancelButton: 'button[name="cancel"]',
        disabledSaveButton: {
            selector: '(//button[@name="save"])[@disabled]',
            locateStrategy: 'xpath',
        },
        disabledCancelButton: {
            selector: '(//button[@name="cancel"])[@disabled]',
            locateStrategy: 'xpath',
        },
        //Infocard
        Infocard: 'div[class=infoCard]',
        noEmployee: 'p[id="noEmployee"]',
        employeeID: 'span[name=employeeID]',
        employeeName: 'p[id=employeeTitle]',
        NAME: {
            selector: '(//span[@class="placeholderText"])[1]',
            locateStrategy: 'xpath',
        },
        nameInputField: 'input[name=nameEntry]',
        PHONENUMBER: {
            selector: '(//span[@class="placeholderText"])[2]',
            locateStrategy: 'xpath',
        },
        phoneNumberInputField: 'input[name=phoneEntry]',
        TITLE: {
            selector: '(//span[@class="placeholderText"])[3]',
            locateStrategy: 'xpath',
        },
        titleInputField: 'input[name=titleEntry]',
        nameError: {
            selector: '//span[contains(.,"The name field must be between 1 and 30 characters long.")]',
            locateStrategy: 'xpath',
        },
        phoneError: {
            selector: '//span[contains(.,"The phone number must be 10 digits long.")]',
            locateStrategy: 'xpath',
        },
        titleError: {
            selector: '//span[contains(.,"The title field must be between 1 and 30 characters long.")]',
            locateStrategy: 'xpath',
        },
        //SelectableSidebarEmployees
        emp1: 'li[name=employee1]',
        emp2: 'li[name=employee2]',
        emp3: 'li[name=employee3]',
        emp4: 'li[name=employee4]',
        emp5: 'li[name=employee5]',
        emp6: 'li[name=employee6]',
        emp7: 'li[name=employee7]',
        emp8: 'li[name=employee8]',
        emp9: 'li[name=employee9]',
        emp10: 'li[name=employee10]',
        emp11: 'li[name=employee11]',
        add: 'li[name="addEmployee"]'

    }
}