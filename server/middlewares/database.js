import Sequelize from 'sequelize'
import asyncRequire from '../plugins/asyncRequire'
import config from'../config'
import {resolve} from 'path'
const models=resolve(__dirname,'../database/model')
const services=resolve(__dirname,'../service/imp')
import fs from 'fs'

let sequelize;
export const database=async app=>{
     sequelize=new Sequelize(config.db.database, config.db.username, null ,{
        host: config.db.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });
     let ModelArray={}
    fs.readdirSync(models)
        .filter(file=>~file.search(/^[^\.].*js$/))
        .forEach((file)=>{
            let Model=require(resolve(models,file)).default
            Model.Single=new Model(sequelize);
            ModelArray[Model.Single.config.name]=Model.Single
        })
    for(let key in ModelArray){
         let model= ModelArray[key]
         try {
             let Service=await asyncRequire(resolve(__dirname,`${services}/${key}Service.js`))
             Service.Single=new Service(model,model.database)
         }catch (e) {

         }
        model.relation()
    }
    sequelize.sync()
    //执行各个表的关联关系

    // var Article = sequelize.define('Article', {
    //     title: Sequelize.STRING,
    //     body: Sequelize.TEXT
    // });
    // sequelize.sync();
}