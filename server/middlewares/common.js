import KoaBody from 'koa-body'
import KoaBodyParser from 'koa-bodyparser'
import KoaCors from 'koa-cors'
import session from 'koa-session'
export const body=app=>{
    app.use(KoaBody())
}
export const bodyParser=app=>{

    app.use(KoaBodyParser())
}
export const cors=app=>{

    app.use(KoaCors({
        origin: function (ctx) {
            if (ctx.url === '/test') {
                return "*"; // 允许来自所有域名请求
            }
            return 'http://localhost:8080';
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))
}

export const addSession=app=>{
    app.keys=['website']
    const CONFIG={
        key:'koa:sess',
        maxAge:86400000,
        overwrite:true,
        signed:true,
        rolling:false
    }
    app.use(session(CONFIG,app))
}