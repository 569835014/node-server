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
    async handle(name,params){
        if(params.scope){
            return await this.model.scope(params.scope)[name](params)
        }
        return await this.model[name](params)
    }
    async findById(params){
        return await this.handle('findById',params)
    }
    async findOne(params){
        return await this.handle('findOne',params)
    }
    async findOrCreate(params){
        return await this.handle('findOne',params)
    }
    async findAndCountAll(params){
        return await this.handle('findAndCountAll',params)
    }
    async findAll(params){
        return await this.handle('findAll',params)
    }
    async count(params){
        return await this.handle('count',params)
    }
    async max(params){
        return await this.handle('max',params)
    }
    async min(params){
        return await this.handle('min',params)
    }
    async sum(params){
        return await this.handle('sum',params)
    }

    async delete(params){
        return await this.handle('delete',params)
    }
    async deleteById(params){
        let model= await this.handle('findById',params)
        model.destroy();
    }

    async query(params){
        this.database.query(params)
    }
    //合并数据库操作添加到事物中
    async transaction(dataBaseFn){
        let transaction=await this.database.transaction()
        try {
            await dataBaseFn();
        }catch (e) {
            return await transaction.rollback()
        }
        return await transaction.commit()
    }
}
export default ModelBase