#!/usr/bin/env node
// 用node解释器解析此文件

const path = require('path')
const fs = require('fs')
// 第一步：读取config配置内容
// 默认配置
const defaultConfig = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    }
}

// 拿到最终的配置
const config = {...defaultConfig, ...require(path.resolve('./hhz.config.js'))}

class hhzPack{
    constructor(config) {
        // 存储一下配置
        this.config = config
        this.entry = config.entry
        // 工作 根目录
        this.root = process.cwd()
        // 存储所有代码
        this.modules = {}
    }
    // 能够解析文件内容中的require('xx.js')这种格式
    parse(code, parent){
        let deps = []
        let r = /require\((.*)\)/g
        // require('xx')替换为__hhzpack_require__
        code = code.replace(r, function(match, arg){
            // 依赖路径
            const retPath = path.join(parent, arg.replace(/'|"/g, ''))
            deps.push(retPath)
            return `__hhzpack_require__("./${retPath}")`
        })
        return { code, deps }
    }
    // 传入entry，是因为可以有多个依赖，需要递归调用
    creatModule(modulePath, name){
        // 处理循环依赖
        // if(this.modules[modulePath]) {
        //     // 出现了循环依赖
        // }
        const fileContent = fs.readFileSync(modulePath, 'utf-8')
        // 替换后的代码的依赖数组
        const { code, deps } = this.parse(fileContent, path.dirname(name))
        this.modules[name] = `function(module, exports, __hhzpack_require__){
            eval(\'${code}\')
        }
        `
        console.log (code)
        console.log (deps)
        // 循环获取所有依赖数组的内容
        deps.forEach(dep => {
            this.creatModule(path.join(this.root, dep), './'+dep)
        })
        // console.log(code)
        // console.log(name)
    }
    generateModuleStr(){
        let fnTemp = ''
        Object.keys(this.modules).forEach(name => {
            fnTemp += `"${name}": ${this.modules[name]},`
        })
        return fnTemp
    }
    generateFile() {
        let template = fs.readFileSync(path.resolve(__dirname, './template.js'), 'utf-8')
        this.template = template.replace('__entry__', this.entry)
                            .replace('__module_content__', this.generateModuleStr())
        // 写入内存
        // app.get('xxx.js', res => {
        //     res.send(this.template)
        // })
        fs.writeFileSync('./dist/'+this.config.output.filename, this.template)
        console.log('写入文件完毕')
    }
    start() {
        console.log('开始解析文件的依赖')
        const entryPath = path.resolve(this.root, this.entry)
        this.creatModule(entryPath, this.entry)
        console.log(this.creatModule)
        // 生成文件
        this.generateFile()
    }
}

const hhz = new hhzPack(config)
hhz.start()