module.exports = {
    getHouses: (req,res) => {
        const db = req.app.get('db')
        db.grab_houses().then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    },

    addHouse: (req,res) => {
        console.log('sure')
        console.log(req.body)
        const db = req.app.get('db')
        let {name, address, city, state, zip, img, mortgage, rent} = req.body
        db.create_house({name: name, address: address, city: city, state: state, zip: zip, img: img, mortgage: mortgage, rent: rent})
            .then(response => {
            res.status(200).send(response)
            console.log(response)
        }).catch(err => console.log(err))
    },

    deleteHouse: (req,res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_house({id}).then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    }
    
}