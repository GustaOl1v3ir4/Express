const ServicePerson = require("../services/person")

class ApiPerson {

    async FindAll(_,res) {
        try {
            const result = await ServicePerson.FindAll()

            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

     async FindById(req,res) {
        try{
            console.log('findById', req.session)
            const { id } = req.params
            const result = await ServicePerson.FindById(id)
        
            res.status(200).send({ result })
        } catch (e) {
        res.status(500).send({ msg: e.message })
        }
     }

     async Create(req,res) {
        try{
            const { name, address, userId  } = req.body
            await ServicePerson.Create(name, address, userId)
        
            res.status(201).send()
        } catch (e) {
        res.status(500).send({ msg: e.message })
        }
     }
    
     async Update(req,res) {
        try{
            const { id } = req.params
            const { name, address } = req.body
            const result = await ServicePerson.Update(id, name, address)

           

            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message})
        }
    }
    async Delete(req,res) {
       try{
            const { id } = req.params
            await ServicePerson.Update(id)

            res.status(204).send()
        } catch (e) {
            res.status(500).send({ msg: e.message})
        }
    }
}

module.exports = new ApiPerson();



