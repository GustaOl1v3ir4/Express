const database = require("../database");


class User{
    constructor() {
        this.model = database.db.define("users", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true, //o banco gera id automaticamente
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            password: {
                type: database.db.Sequelize.STRING,
            },
        })
    }
}

module.exports = new User().model; 


//model seria o repository no outro codigo(de pessoas)