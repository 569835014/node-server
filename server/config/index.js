import fs from 'fs'
import {resolve} from 'path'
let config=JSON.parse(fs.readFileSync(`${resolve(__dirname,'./production.config.json')}`,'utf-8'))
export default config