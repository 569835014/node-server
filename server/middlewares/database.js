import Sequelize from 'sequelize'
import config from'../config'
import {resolve} from 'path'
const models=resolve(__dirname,'../database/model')
import fs from 'fs'

let sequelize;
export const database=app=>{
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
            Model.Single=new Model(sequelize)
            ModelArray[file]=Model.Single
        })
    for(let key in ModelArray){
        ModelArray[key].relation()
    }
    sequelize.sync()
    //执行各个表的关联关系

    // var Article = sequelize.define('Article', {
    //     title: Sequelize.STRING,
    //     body: Sequelize.TEXT
    // });
    // sequelize.sync();
}