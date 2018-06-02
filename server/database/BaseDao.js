class BaseDao {
    constructor(database,model,params){
        this.model=model;
        this.dao=this.create(params)
        this.database=database
    }
    async create(params){
        return await this.model.handle('create',params)
    }
    async bulkCreate(params){
        return await this.model.handle('bulkCreate',params)
    }
    async save(){
        return await this.dao.save()
    }
    async update(params){
        return await this.dao.update(params)
    }
    async destroy(params){
        return await this.dao.destroy(params)
    }
    async reload(params){
        return await this.dao.reload(params)
    }
    async increment(params){
        return await this.dao.increment(params)
    }
    async decrement(params){
        return await this.dao.decrement(params)
    }
}