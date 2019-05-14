# learnWebpackDeeply
learn how the webpack work, deeply

# 探索webpack原理
0. 读取webpack.config.js
1. 解析文件依赖
2. 替换require 为__webpack_require__
3. 本地使用{}存储所有的文件，然后通过使用__webpack_require__获取文件的内容，执行函数

<!-- 
@todo
加上loader
加上plugin机制 -->