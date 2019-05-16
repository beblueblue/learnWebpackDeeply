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
    return __hhz_require__("__entry__");
})(__module_content__)