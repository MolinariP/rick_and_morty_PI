const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

async function getCharById(req, res) {
    let { id } = req.params;
    try {
        let response = await axios.get(`${URL}/${id}`);
        let {
            name,
            gender,
            species,
            origin,
            image,
            status
        } = response.data;

        if(name) {
            let char = {
                id,
                name,
                gender,
                species,
                origin: origin.name,
                image,
                status
            }
            return res.send(char);
        } else return res.status(404).send({message:'Not Found'})

    } catch (err) {
        res.status(500).send({message:err.message});
    };
};

module.exports = getCharById;