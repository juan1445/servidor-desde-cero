// con toda esta confiuracion lo que hacemos es que prendemos el servidor solo cuando se hacen peticiones

const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/index');

// la url que proporciona mongo atlas para la conección
const MONGO_URI = `mongodb+srv://Juan:Juan1445$@cluster0-j2ivx.mongodb.net/test?retryWrites=true&w=majority`;

class MongoLib{
    constructor(){
        // convertir la URL con metodo propio de mongo
        this.client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true
        });
        // para levantar la base
        this.dbName = "db_plants";
    }


    //conectamos la base de datos
    connect(){
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err =>{
                    if(err){
                        reject(err)
                    }

                    console.log('Conectado con la DB');
                    resolve(this.client.db(this.dbName));
                })
            })
        }

        return MongoLib.connection;
    }

    //metodos
    // query(consultar informacion)
    getAll(collection, query){
        return this.connect().then(db =>{
            return db
            .collection(collection)
            .find(query)
            .toArray();
        });
    }
}


module.exports = MongoLib;