!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=function(){var isLocal=!1;try{["file:","local","localhost","lakito.de",":5757",":8888",":8080"].forEach(function(item){String(window.location).indexOf(item)>-1&&(isLocal=!0)})}catch(e){}return isLocal}},function(module,exports,__webpack_require__){module.exports=__webpack_require__(2)},function(module,exports,__webpack_require__){"use strict";var _littleLoader2=_interopRequireDefault(__webpack_require__(3)),_isLocal2=_interopRequireDefault(__webpack_require__(0));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}window.c9Config={primaryJS:"../../../_shared/js/primary.js",primaryName:"main",secondaryJS:"main.js",secondarySCSS:"styles.scss",template:"index.hbs",bannerWidth:970,bannerHeight:250,adHoster:"dcs",fallback:"fallback.jpg",cta_y_de:"315px",cta_y_en:"311px",dir:"/Users/sebastianfiedler/Desktop/Development/workspace/KolleRebbe/Lufthansa/Lufthansa/Haltungskampagne/source/ads_IN/doors_970x250/banner/",dirName:"doors_970x250",subDir:"banner",distDir:"/Users/sebastianfiedler/Desktop/Development/workspace/KolleRebbe/Lufthansa/Lufthansa/Haltungskampagne/_dist/doors_970x250",id:"doors_970x250",isFireplace:!1},window.loadSecondaryJS=function(){var callback=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,asset=((0,_isLocal2.default)()||!c9Config.assetPath||""==c9Config.assetPath?"":c9Config.assetPath)+"doors_970x250.js";(0,_littleLoader2.default)(asset,function(err){if(err)return!1;setTimeout(function(){"function"==typeof callback?callback.call():window.start()},10)})}},function(module,exports,__webpack_require__){"use strict";(function(module){var __WEBPACK_AMD_DEFINE_RESULT__,pendingScripts,scriptCounter,_addScript,_lload,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};pendingScripts={},scriptCounter=0,_addScript=function(script){var firstScript=document.getElementsByTagName("script")[0];firstScript.parentNode.insertBefore(script,firstScript)},_lload=function(src,callback,context){var setup;callback&&"function"!=typeof callback&&(context=callback.context||context,setup=callback.setup,callback=callback.callback);var err,_cleanup,script=document.createElement("script"),done=!1,_finish=function(){done||(done=!0,_cleanup(),callback&&callback.call(context,err))},_error=function(){err=new Error(src||"EMPTY"),_finish()};if(!script.readyState||"async"in script)_cleanup=function(){script.onload=script.onerror=null},script.onerror=_error,script.onload=_finish,script.async=!0,script.charset="utf-8",setup&&setup.call(context,script),script.src=src,_addScript(script);else{var id=scriptCounter++,isReady={loaded:!0,complete:!0},inserted=!1;_cleanup=function(){script.onreadystatechange=script.onerror=null,pendingScripts[id]=void 0},script.onreadystatechange=function(){var firstState=script.readyState;if(!err){if(!inserted&&isReady[firstState]&&(inserted=!0,_addScript(script)),"loaded"===firstState&&(script.children,"loading"===script.readyState))return _error();"complete"===script.readyState&&_finish()}},script.onerror=_error,pendingScripts[id]=script,setup&&setup.call(context,script),script.src=src}},"object"===_typeof(exports)&&"object"===_typeof(module)?module.exports=_lload:void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _lload}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}).call(exports,__webpack_require__(4)(module))},function(module,exports,__webpack_require__){"use strict";module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children||(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,get:function(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,get:function(){return module.i}}),module.webpackPolyfill=1),module}}]);