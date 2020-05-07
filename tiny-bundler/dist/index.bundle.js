(function () {
  var moduleList = [
    /* template-module-list */
  ];
  var moduleDepIdList = [
    /* template-module-dep-id-list */
  ];

  function require(id, parentId) {
    var currentModuleId = parentId !== undefined ? moduleDepIdList[parentId][id] : id;
    var module = { exports: {} };
    var moduleFunc = moduleList[currentModuleId];
    moduleFunc((id) => require(id, currentModuleId), module, module.exports);
    return module.exports;
  }

  require(0);
})();