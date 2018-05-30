import Sequelize from 'sequelize'
import config from'../config'
export const database=app=>{
    const sequelize=new Sequelize(config.db.database, config.db.username, null ,{
        host: config.db.host,
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });

    // var Article = sequelize.define('Article', {
    //     title: Sequelize.STRING,
    //     body: Sequelize.TEXT
    // });
    // sequelize.sync();
}
