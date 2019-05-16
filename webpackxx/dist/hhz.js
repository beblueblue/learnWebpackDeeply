(function (modules){
    // 缓存
    const installModules = {}
    function __hhz_require__(moduleId){
        // 是否缓存
        if(installModules[moduleId]){
            return installModules[moduleId].exports
        }
        let module = installModules[moduleId] = {
            exports: {}
        }
        modules[moduleId].call(module.exports, module, module.exports, __hhz_require__)
        return module.exports
    }
    // 执行入口
    return __hhz_require__("./src/index.js");
})("./src/index.js": function(module, exports, __hhzpack_require__){
            eval('const sayHi = __hhzpack_require__("./src\a.js");

sayHi('hhz');')
        }
        ,"./src\a.js": function(module, exports, __hhzpack_require__){
            eval('const sayAge = __hhzpack_require__("./src\common\util.js");
module.exports = (name) => {
    console.log('hello world! ' + name);
    sayAge(18);
}')
        }
        ,"./src\common\util.js": function(module, exports, __hhzpack_require__){
            eval('module.exports = (age) => {
    console.log(`我的年龄是${age}岁`)
}')
        }
        ,)