class BaseDao {
    constructor(){

    }
    async findById(params){
        return await this.model.findById(params)
    }
    async findOne(params){
        return await this.model.findOne(params)
    }
    async findOrCreate(params){
        return await this.model.findOrCreate(params)
    }
    async findAndCountAll(params){
        return await this.model.findOrCreate(params)
    }
    async findAll(params){
        return await this.model.findAll(params)
    }
    async count(params){
        return await this.model.count(params)
    }
    async max(params){
        return await this.model.max(params)
    }
    async min(params){
        return await this.model.min(params)
    }
    async sum(params){
        return await this.model.sum(params)
    }
    async create(params){
        return await this.model.create(params)
    }
    async bulkCreate(params){
        return await this.model.bulkCreate(params)
    }
    async delete(params){
        return await this.model.destroy(params)
    }
    async deleteById(params){
        let model=await this.findById(params);
        model.destroy();
    }
    //为实例添加addHook
    on(...arg){
        this.model.addHook.apply(this,arg)
    }
    off(...arg){
        this.model.removeHook.apply(this,arg)
    }
}