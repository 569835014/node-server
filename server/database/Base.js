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
    //为实例添加addHook
    on(...arg){
        this.model.addHook.apply(this,arg)
    }
    off(...arg){
        this.model.removeHook.apply(this,arg)
    }
}
export default ModelBase