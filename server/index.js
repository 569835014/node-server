import Koa from 'koa'
import R from 'ramda'
console.info(process.env.NODE_ENV)
import config from './config'
import {resolve} from 'path'
const r = path => resolve(__dirname, path)
const MIDDLEWARES = ['database','router','common']
class Server{
    constructor(){
        this.app=new Koa();
        console.info(this.app)
         this.useMiddleWares(this.app)(MIDDLEWARES)
    }
    useMiddleWares(app) {
        return R.map(R.compose(
            R.map(i => i(app)),
            require,
            i => `${r('./middlewares')}/${i}`
        ))
    }
    start(){
        this.app.use((ctx,next) => {
            ctx.status = 200 // koa defaults to 404 when it sees that status is unset
            ctx.req.session = ctx.session
        })
        this.app.listen(config.app.port, config.app.host)
        console.log('Server listening on' + config.app.host + ':' + config.app.port)
    }
}
const app = new Server()
app.start()