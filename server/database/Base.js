import Sequelize from 'sequelize'
class ModelBase {
    constructor(database){
        this.database=database;
        this.Sequelize=Sequelize
    }
    define(database){
        this.model=database.define(this.config.name,this.config.model)
    }
}
export default ModelBase