const express = require('express');

const PlantsService = require('../services/plantService');

function plantsApi(app){
    const router = express.Router();
    app.use('/api/plants', router);

    // tengo que crear un objeto de la clase plantsercice
    const plantsService = new PlantsService();
    
    // el next es para capturar error
    router.get('/', async (req, res, next) => {
        const { tags } = req.query;
        try{
            // promise para resolver si si se da o si no
            const plants = await plantsService.getPlants({ tags })

            res.status(200).json({
                data: plants,
                message: 'plants listed'
            })
        }catch(err){
            next(err);
        }
    })
}

module.exports = plantsApi;