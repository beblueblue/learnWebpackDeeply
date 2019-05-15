#!/usr/bin/env node
// 用node解释器解析此文件

const path = require('path')
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
        
    }
    start() {
        console.log('开始解析文件的依赖')

    }
}

const hhz = new hhzPack(config)
hhz.start()