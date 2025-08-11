const serviceUser = require('../../src/services/user')


describe("Teste de usuário", () => {

    it("should create an user", async () => {
        const user = {
            email: "gustavoco201034@gmail.com",
            password: 123456
        }

        const addUser = await serviceUser.Create(user.email, user.password)
        

        expect(addUser.email).toBe(user.email)
        expect(addUser.password).toBe(user.password)
    })
})