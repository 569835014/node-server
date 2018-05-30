import Koa from 'koa2'
import R from 'ramda'
console.info(process.env.NODE_ENV)
const MIDDLEWARES = ['database', 'common', 'router','static']

class Server{
    constructor(){
        this.app=new Koa();
         this.useMiddleWares(this.app)(MIDDLEWARES)
    }
    useMiddleWares(app) {
        return R.map(R.compose(
            R.map(i => i(app)),
            require,
            i => `${r('./middlewares')}/${i}`
        ))
    }
}
