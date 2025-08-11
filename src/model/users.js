const database = require("../database");
const person = require("./person");


class User{
    constructor() {
        this.model = database.db.define("users", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true, //o banco gera id automaticamente
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            password: {
                type: database.db.Sequelize.STRING,
            }
        })

        this.model.hasOne(person, { //quer dizer que este usuario tem uma relação com (person)
            foreingKey: 'userId'
        })
        person.belongsTo(this.model, {
            foreingKey: 'userId'
        })
    }
}

module.exports = new User().model; 


//model seria o repository no outro codigo(de pessoas)