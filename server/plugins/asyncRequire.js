export default url=>{
    return new Promise((resolve, reject)=>{
        try {
            let module=require(url);
            if(module.default)  resolve(module)
            else resolve(module)
        }catch (e) {
            reject(e)
        }
    })
}