const Favorite = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;

        if(!id || !name || !origin || !status || !image || !species || !gender )
        return res.status(401).send('Faltan datos')

            const [favorite, created] = await Favorite.findOrCreate({
                where:  { id },
                default: {name, origin, status, image, species, gender},
            });
            if(!created) return res.status(409).json({error: "El personaje ya esta agregado"});

            const allFavorites = await Favorite.findAll();

            return res.status(200).json(allFavorites)

    } catch (error) {
        return res.status(500).json({error: error.massage})
    }
};

module.exports = postFav;

