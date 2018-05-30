import { controller, get, post ,required} from '../decorator/router'
const fs = require('fs');

@controller('/app')
export class CommonController{
    @get('/imgCode')
    async imgCode(ctx,next){
        console.info(1111)
        return ctx.body={
            "message":"hello koa"
        };
    }
    @post('/upload')
    async uploadFile(ctx,next){
        console.info(ctx.request.body)
        try{
            let file = ctx.request.body.files.file;
            const reader = fs.createReadStream(file.path);// 创建可读流
            const ext = file.name.split('.').pop();        // 获取上传文件扩展名
            const upStream = fs.createWriteStream(`../web/upload/${Math.random().toString()}.${ext}`);        // 创建可写流
            reader.pipe(upStream);    // 可读流通过管道写入可写流
        }catch (e) {
            console.info(e)
        }

        return ctx.body = '上传成功';
    }
}