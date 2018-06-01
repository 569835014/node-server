import Sequelize from 'sequelize'
class ModelBase {
    constructor(database){
        this.database=database;
        this.Sequelize=Sequelize
    }
    static Single
    static created(database,Model){
        if(!this.Single){
            this.Single=new Model(database)
        }
        return  this.Single
    }
    define(database){
        this.model=database.define(this.config.name,this.config.model,this.config.scope)
    }
}
export default ModelBase