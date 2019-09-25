// hacia donde va la persistencia ( logica de negocio )
const plantsMocks = require('../utils/mocks/plantsMocks');

class PlantsServices {
    constructor(){

    }

    async getPlants( { tags } ){
        const plants = await Promise.resolve(plantsMocks);
        // si no las encuentra envieme un array vacio
        return plants || [];
    }

}

module.exports = PlantsServices;