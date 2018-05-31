import BaseModle from '../Base'
class UserModle extends BaseModle{
    constructor(database){
        super(database)
        this.config={
            name:'User',
            model:{
                name: {
                    type: this.Sequelize.STRING,
                    allowNull: false,

                },
                title: {
                    type: this.Sequelize.STRING,
                    allowNull: false,
                }
            }
        }
        this.define(database)
    }
}
export default UserModle