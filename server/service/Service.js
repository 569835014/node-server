import Sequelize from 'sequelize'
class Service {
    constructor(model,database){
        this.model=model;
        this.Sequelize=Sequelize
        this.database=database
    }
    static Single
    static created(database,model){
        if(!this.Single){
            this.Single=new Service(database,model)
        }
        return  this.Single
    }
    async handle(name,params){
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
    async build(params){
        return await this.model.build(params)
    }
    async bulkCreate(params){
        return await this.handle('bulkCreate',params)
    }
    async delete(params){
        return await this.handle('delete',params)
    }
    async deleteById(params){

        let model= await this.handle('findById',params)
        model.destroy();
    }
    async query(params){
       return await this.model.query(params)
    }
    //合并数据库操作添加到事物中
    async transaction(dataBaseFn){
     return this.model.transaction(dataBaseFn)
    }
}
export default Service