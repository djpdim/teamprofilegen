// function to Capitalize the first letter of the employees name.
function capName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

class Employee {
    constructor(name, id, email) {
        this.name = capName(name)
        this.id = id
        this.email = email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee
