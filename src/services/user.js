const user = require("../model/users")

class ServiceUser {
    FindAll() {
        return user.FindAll() 
    }

    FindByIndex(index) {
        return user.FindByIndex(index)
    }

    Create(nome) {
        user.Create(nome)
    }

    Update(index, nome) {
        user.Update(index, nome)
    }

    Delete(index) {
        user.Delete(index)
    }
}

module.exports = new ServiceUser;