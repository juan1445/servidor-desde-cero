// hacia donde va la persistencia ( logica de negocio )

// este ya no es necesario porque ya estamos conectando a la base de datos y no a los mocks
//const plantsMocks = require('../utils/mocks/plantsMocks');


const MongoLib = require('../lib/mongo');




class PlantsServices {
    constructor(){
        this.collection = 'plants';
        this.mongoDB = new MongoLib();
    }

    //tags es para filtrar
    async getPlants( { tags } ){
        const query = tags && {$in: {tags}}
        const plants = await this.mongoDB.getAll(this.collection, query);
        // si no las encuentra envieme un array vacio
        return plants || [];
    }

}

module.exports = PlantsServices;