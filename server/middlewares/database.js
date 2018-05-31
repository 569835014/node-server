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
    fs.readdirSync(models)
        .filter(file=>~file.search(/^[^\.].*js$/))
        .forEach((file)=>{
            let Model=require(resolve(models,file)).default
            new Model(sequelize)
        })
    sequelize.sync()
    // var Article = sequelize.define('Article', {
    //     title: Sequelize.STRING,
    //     body: Sequelize.TEXT
    // });
    // sequelize.sync();
}