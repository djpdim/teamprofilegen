const Employee = require("./Employee").default.default

// function to convert the mangers phone to a string and have it shown as (347) 999-8989
function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "")
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3]
    }
    return null
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = formatPhoneNumber(officeNumber)
    }
    getRole() {
        return "Manager"
    }
}

export default Manager
