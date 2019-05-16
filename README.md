# learnWebpackDeeply
learn how the webpack work, deeply

# 探索webpack原理
0. 读取webpack.config.js
1. 解析文件依赖
2. 替换require 为__webpack_require__
3. 本地使用{}存储所有的文件，然后通过使用__webpack_require__获取文件的内容，执行函数

# webpack分析
webpack具体做了哪些事情
    1. 文件依赖解析
    2. 文件内容替换
        1. loader文件替换
        2. require('xx.css')
        3. require('xx.less')
        4. require('xx.png')
    3. tapable
    4. compile有很多钩子 每个钩子可以做些额外的事情，就是plugin
<!-- 
@todo
加上loader
加上plugin机制 -->

# 规范
配置文件为hhz.config.js