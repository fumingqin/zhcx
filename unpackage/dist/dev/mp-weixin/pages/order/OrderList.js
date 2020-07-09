(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/OrderList"],{

/***/ 283:
/*!****************************************************************!*\
  !*** D:/UAD/zhcx/main.js?{"page":"pages%2Forder%2FOrderList"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _OrderList = _interopRequireDefault(__webpack_require__(/*! ./pages/order/OrderList.vue */ 284));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_OrderList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 284:
/*!*********************************************!*\
  !*** D:/UAD/zhcx/pages/order/OrderList.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderList_vue_vue_type_template_id_d37d120e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderList.vue?vue&type=template&id=d37d120e& */ 285);
/* harmony import */ var _OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderList.vue?vue&type=script&lang=js& */ 287);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderList.vue?vue&type=style&index=0&lang=scss& */ 291);
/* harmony import */ var _Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderList_vue_vue_type_template_id_d37d120e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderList_vue_vue_type_template_id_d37d120e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _OrderList_vue_vue_type_template_id_d37d120e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "UAD/zhcx/pages/order/OrderList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 285:
/*!****************************************************************************!*\
  !*** D:/UAD/zhcx/pages/order/OrderList.vue?vue&type=template&id=d37d120e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_template_id_d37d120e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./OrderList.vue?vue&type=template&id=d37d120e& */ 286);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_template_id_d37d120e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_template_id_d37d120e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_template_id_d37d120e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_template_id_d37d120e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 286:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UAD/zhcx/pages/order/OrderList.vue?vue&type=template&id=d37d120e& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.info, function(item, index) {
    var m0 = _vm.changeTime(item.appointmentTime)
    var m1 = _vm.changeTime(item.time)
    var m2 = _vm.changeTime(item.appointmentTime)
    var m3 = _vm.changeTime(item.time)
    var m4 = _vm.changeTime(item.appointmentTime)
    var m5 = _vm.taxiOrderState(item.state)
    var m6 = _vm.changeTime(item.orderTime)
    var m7 = _vm.taxiOrderState(item.state)
    var m8 = _vm.taxiOrderState(item.state)
    var m9 = _vm.taxiOrderState(item.state)
    var m10 = _vm.taxiOrderState(item.state)
    var m11 = _vm.taxiOrderState(item.state)
    var m12 = _vm.taxiOrderState(item.state)
    var m13 = _vm.taxiOrderState(item.state)
    var m14 = _vm.taxiOrderState(item.state)
    var m15 = _vm.getBCstate(item.or_Type)
    var m16 = _vm.getCtkyOrderStatus(item.state)
    var m17 = _vm.getScheduleNum(item)
    return {
      $orig: _vm.__get_orig(item),
      m0: m0,
      m1: m1,
      m2: m2,
      m3: m3,
      m4: m4,
      m5: m5,
      m6: m6,
      m7: m7,
      m8: m8,
      m9: m9,
      m10: m10,
      m11: m11,
      m12: m12,
      m13: m13,
      m14: m14,
      m15: m15,
      m16: m16,
      m17: m17
    }
  })

  var l1 = _vm.__map(_vm.finishArr, function(item, index) {
    var m18 = _vm.changeTime(item.appointmentTime)
    var m19 = _vm.changeTime(item.time)
    var m20 = _vm.changeTime(item.appointmentTime)
    var m21 = _vm.changeTime(item.time)
    var m22 = _vm.changeTime(item.appointmentTime)
    var m23 = _vm.taxiOrderState(item.state)
    var m24 = _vm.changeTime(item.orderTime)
    var m25 = _vm.taxiOrderState(item.state)
    var m26 = _vm.taxiOrderState(item.state)
    var m27 = _vm.taxiOrderState(item.state)
    var m28 = _vm.taxiOrderState(item.state)
    var m29 = _vm.taxiOrderState(item.state)
    var m30 = _vm.taxiOrderState(item.state)
    var m31 = _vm.taxiOrderState(item.state)
    var m32 = _vm.getBCstate(item.or_Type)
    var m33 = _vm.getCtkyOrderStatus(item.state)
    var m34 = _vm.getScheduleNum(item)
    return {
      $orig: _vm.__get_orig(item),
      m18: m18,
      m19: m19,
      m20: m20,
      m21: m21,
      m22: m22,
      m23: m23,
      m24: m24,
      m25: m25,
      m26: m26,
      m27: m27,
      m28: m28,
      m29: m29,
      m30: m30,
      m31: m31,
      m32: m32,
      m33: m33,
      m34: m34
    }
  })

  var l2 = _vm.__map(_vm.goingArr, function(item, index) {
    var m35 = _vm.changeTime(item.appointmentTime)
    var m36 = _vm.changeTime(item.time)
    var m37 = _vm.changeTime(item.appointmentTime)
    var m38 = _vm.changeTime(item.time)
    var m39 = _vm.changeTime(item.appointmentTime)
    var m40 = _vm.taxiOrderState(item.state)
    var m41 = _vm.changeTime(item.orderTime)
    var m42 = _vm.taxiOrderState(item.state)
    var m43 = _vm.taxiOrderState(item.state)
    var m44 = _vm.taxiOrderState(item.state)
    var m45 = _vm.taxiOrderState(item.state)
    var m46 = _vm.taxiOrderState(item.state)
    var m47 = _vm.taxiOrderState(item.state)
    var m48 = _vm.taxiOrderState(item.state)
    var m49 = _vm.getBCstate(item.or_Type)
    var m50 = _vm.getCtkyOrderStatus(item.state)
    var m51 = _vm.getScheduleNum(item)
    return {
      $orig: _vm.__get_orig(item),
      m35: m35,
      m36: m36,
      m37: m37,
      m38: m38,
      m39: m39,
      m40: m40,
      m41: m41,
      m42: m42,
      m43: m43,
      m44: m44,
      m45: m45,
      m46: m46,
      m47: m47,
      m48: m48,
      m49: m49,
      m50: m50,
      m51: m51
    }
  })

  var l3 = _vm.__map(_vm.unfinishArr, function(item, index) {
    var m52 = _vm.changeTime(item.appointmentTime)
    var m53 = _vm.changeTime(item.time)
    var m54 = _vm.changeTime(item.appointmentTime)
    var m55 = _vm.changeTime(item.time)
    var m56 = _vm.changeTime(item.appointmentTime)
    var m57 = _vm.taxiOrderState(item.state)
    var m58 = _vm.changeTime(item.orderTime)
    var m59 = _vm.taxiOrderState(item.state)
    var m60 = _vm.taxiOrderState(item.state)
    var m61 = _vm.taxiOrderState(item.state)
    var m62 = _vm.taxiOrderState(item.state)
    var m63 = _vm.taxiOrderState(item.state)
    var m64 = _vm.taxiOrderState(item.state)
    var m65 = _vm.getBCstate(item.or_Type)
    var m66 = _vm.getCtkyOrderStatus(item.state)
    var m67 = _vm.getScheduleNum(item)
    return {
      $orig: _vm.__get_orig(item),
      m52: m52,
      m53: m53,
      m54: m54,
      m55: m55,
      m56: m56,
      m57: m57,
      m58: m58,
      m59: m59,
      m60: m60,
      m61: m61,
      m62: m62,
      m63: m63,
      m64: m64,
      m65: m65,
      m66: m66,
      m67: m67
    }
  })

  var l4 = _vm.__map(_vm.cancelArr, function(item, index) {
    var m68 = _vm.changeTime(item.appointmentTime)
    var m69 = _vm.changeTime(item.time)
    var m70 = _vm.changeTime(item.appointmentTime)
    var m71 = _vm.changeTime(item.time)
    var m72 = _vm.changeTime(item.appointmentTime)
    var m73 = _vm.taxiOrderState(item.state)
    var m74 = _vm.changeTime(item.orderTime)
    var m75 = _vm.taxiOrderState(item.state)
    var m76 = _vm.taxiOrderState(item.state)
    var m77 = _vm.taxiOrderState(item.state)
    var m78 = _vm.taxiOrderState(item.state)
    var m79 = _vm.taxiOrderState(item.state)
    var m80 = _vm.taxiOrderState(item.state)
    var m81 = _vm.taxiOrderState(item.state)
    var m82 = _vm.getBCstate(item.or_Type)
    var m83 = _vm.getCtkyOrderStatus(item.state)
    var m84 = _vm.getScheduleNum(item)
    return {
      $orig: _vm.__get_orig(item),
      m68: m68,
      m69: m69,
      m70: m70,
      m71: m71,
      m72: m72,
      m73: m73,
      m74: m74,
      m75: m75,
      m76: m76,
      m77: m77,
      m78: m78,
      m79: m79,
      m80: m80,
      m81: m81,
      m82: m82,
      m83: m83,
      m84: m84
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1,
        l2: l2,
        l3: l3,
        l4: l4
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 287:
/*!**********************************************************************!*\
  !*** D:/UAD/zhcx/pages/order/OrderList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./OrderList.vue?vue&type=script&lang=js& */ 288);
/* harmony import */ var _Software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 288:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UAD/zhcx/pages/order/OrderList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































var _downwindCar = _interopRequireDefault(__webpack_require__(/*! @/common/downwindCar.js */ 55));

var _Czc = _interopRequireDefault(__webpack_require__(/*! ../../common/Czc.js */ 15));
var _Czcprivate = _interopRequireDefault(__webpack_require__(/*! ../../common/Czcprivate.js */ 54));
var _LyfwFmq = _interopRequireDefault(__webpack_require__(/*! @/common/LYFW/LyfwFmq.js */ 17));
var _uqrcode = _interopRequireDefault(__webpack_require__(/*! @/common/uqrcode.js */ 289));
var _bcfw = _interopRequireDefault(__webpack_require__(/*! @/common/BCFW/bcfw.js */ 290));
var _Ctky = _interopRequireDefault(__webpack_require__(/*! @/common/Ctky.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uniSegmentedControl = function uniSegmentedControl() {__webpack_require__.e(/*! require.ensure | components/Order/uni-segmented-control/uni-segmented-control */ "components/Order/uni-segmented-control/uni-segmented-control").then((function () {return resolve(__webpack_require__(/*! @/components/Order/uni-segmented-control/uni-segmented-control.vue */ 1387));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniPopup = function uniPopup() {__webpack_require__.e(/*! require.ensure | components/Order/uni-popup/uni-popup */ "components/Order/uni-popup/uni-popup").then((function () {return resolve(__webpack_require__(/*! @/components/Order/uni-popup/uni-popup.vue */ 1394));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniIcons = function uniIcons() {Promise.all(/*! require.ensure | components/Order/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/Order/uni-icons/uni-icons")]).then((function () {return resolve(__webpack_require__(/*! @/components/Order/uni-icons/uni-icons.vue */ 1401));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniPopup2 = function uniPopup2() {__webpack_require__.e(/*! require.ensure | components/Order/uni-popup/uni-popup2 */ "components/Order/uni-popup/uni-popup2").then((function () {return resolve(__webpack_require__(/*! @/components/Order/uni-popup/uni-popup2.vue */ 1409));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var emptyData = function emptyData() {__webpack_require__.e(/*! require.ensure | components/Order/emptyData/emptyData */ "components/Order/emptyData/emptyData").then((function () {return resolve(__webpack_require__(/*! @/components/Order/emptyData/emptyData.vue */ 1380));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniRate = function uniRate() {__webpack_require__.e(/*! require.ensure | components/Order/StarJudge/uni-rate/uni-rate */ "components/Order/StarJudge/uni-rate/uni-rate").then((function () {return resolve(__webpack_require__(/*! @/components/Order/StarJudge/uni-rate/uni-rate.vue */ 1416));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

{
  components: {
    uniSegmentedControl: uniSegmentedControl,
    uniPopup: uniPopup,
    //加载多方弹框组件
    uniPopup2: uniPopup2,
    uniIcons: uniIcons,
    emptyData: emptyData,
    uniRate: uniRate },

  data: function data() {
    return {
      TaxiCost: 0, //价格
      countdown: 0,
      items: ['全部', '已完成', '进行中', '未支付', '已取消'],
      carSelect: ['全部', '传统客运', '定制巴士', '出租车', '专线车', '顺风车', '包车服务', '旅游服务'],
      selector: '全部',
      selectorIndex: 0, //模块筛选值
      current: 0,
      index: 1,
      exitindex: 0, //订单判断值
      ticketOrderNumber: '', //门票订单编号
      orderIndex: 0, //订单调用数值
      orderIndexData: '', //二维码订单数据
      QRCodeArray: [{
        checkPlace: 'A5',
        seatNum: 'E1',
        lunchTime: '18:00',
        carNum: '闽C12345' }],

      info: [], //请求服务器订单列表
      userInfo: '', //个人信息
      finishArr: [],
      goingArr: [],
      unfinishArr: [],
      cancelArr: [],
      keYunTicketArray: [], //客运订单
      keYunTicket: [], //客运订单
      keYunPaymentData: '', //客运支付
      evaluate: ['干净', '服务态度好', '热情', '开车技术超好', '开车平稳', '亲切', '成熟稳重', '笑容满面', '没有绕路'],
      rSelect: [],
      num: '5',
      driverName: '张师傅', //司机姓名
      totalPrice: 32.5,
      orderType1: '',
      ctkyOrderNum: '', //传统客运订单号（退票需要）
      ky_currentType: '',
      ky_orderStatus: '', //判断是否需要检测当前订单状态

      ctkyOpenID: '',
      csRefundInfo: [], //定制巴士退票
      payType: [{
        typeName: '微信',
        typeColor: '#00C805',
        // iconPath: '../../static/CZC/Wechatpay.png',
        value: 'wxpay',
        checked: true },

      {
        typeName: '支付宝',
        typeColor: '#0EBDFF',
        // iconPath: '../../static/CZC/Alipay.png',
        value: 'alipay',
        checked: false }],


      specialLineInfo: '',

      noDataImage: '', //客运弹框背景图
      textareaValue: "",

      SfcInfo: '' };

  },
  onLoad: function onLoad() {
    var that = this;
    //获取客运弹框图片
    that.getPicture();
    //读取用户ID
    uni.getStorage({
      key: 'userInfo',
      success: function success(data) {
        that.userInfo = data.data;
      },
      fail: function fail() {










        uni.showToast({
          title: '请允许授权给小程序，即将跳转登录！' });

        uni.navigateTo({
          url: '../../../../pages/Home/wxAuthorize' });










      } });


  },
  onShow: function onShow() {
    //客运刷新状态
    if (this.ctkyOrderNum) {
      this.getTicketPaymentInfo_ticketIssue(this.ctkyOrderNum);
    }
    this.getCurrent();
    this.getOpenID();
    this.selectorChange();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    //客运刷新状态
    if (this.ctkyOrderNum) {
      this.getTicketPaymentInfo_ticketIssue(this.ctkyOrderNum);
    }
    this.selectorChange();
  },
  methods: {
    //--------------------------订单模块筛选--------------------------
    selectorChange: function selectorChange(e) {
      var that = this;
      // console.log(e,'订单执行')
      uni.showLoading({
        title: '加载中...' });

      if (e !== undefined) {
        this.selector = this.carSelect[e.target.value]; //赋值
        this.selectorIndex = e.target.value;
      }
      //进行订单数组初始化
      that.info = [];
      that.finishArr = [];
      that.goingArr = [];
      that.unfinishArr = [];
      that.cancelArr = [];
      if (that.selectorIndex == 0) {
        that.getUserInfo(); //加载传统客运订单方法
        setTimeout(function () {
          that.GetBookLogInfoByUserId(); //加载定制巴士订单方法
        }, 200);
        setTimeout(function () {
          that.loadczcData(); //加载出租车订单方法
        }, 400);
        setTimeout(function () {
          that.getOrderList(); //加载出租车-专线车订单方法
        }, 600);
        setTimeout(function () {
          that.getSfcOrderList(); //加载出租车-顺风车订单方法
        }, 800);
        setTimeout(function () {
          that.getArrayInfo(); //加载包车服务方法
        }, 1000);
        setTimeout(function () {
          that.toFinished(); //加载景区订单方法
        }, 1200);
      } else if (that.selectorIndex == 1) {
        that.getUserInfo(); //加载传统客运订单方法
      } else if (that.selectorIndex == 2) {
        that.GetBookLogInfoByUserId(); //加载定制巴士订单方法
      } else if (that.selectorIndex == 3) {
        that.loadczcData(); //加载出租车订单方法
      } else if (that.selectorIndex == 4) {
        that.getOrderList(); //加载出租车-专线车订单方法
      } else if (that.selectorIndex == 5) {
        that.getSfcOrderList(); //加载出租车-顺风车订单方法
      } else if (that.selectorIndex == 6) {
        that.getArrayInfo(); //加载包车服务方法
      } else if (that.selectorIndex == 7) {
        that.toFinished(); //加载景区订单方法
      }
    },
    CallAgain: function CallAgain(value) {//出租车再次呼叫
      var endObj = {
        addressName: value.endAddress,
        district: value.destinationArea,
        lat: value.endLat,
        lng: value.endLon };

      var startObj = {
        addressName: value.startAddress,
        lat: value.startLat,
        lng: value.startLon };

      uni.setStorage({
        key: "StartPoint",
        data: startObj });

      uni.setStorage({
        key: "EndPoint",
        data: endObj });

      uni.navigateTo({
        url: "/pages/Home/ChooseSite?current=2&callagain=1" });

    }, changeTime: function changeTime(value) {//时间格式转换
      var date = new Date(value + "+08:00");
      var year = date.getFullYear();
      var mounth = date.getMonth() + 1;
      if (mounth < 10) {
        mounth = "0" + mounth;
      }
      var day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      var hours = date.getHours();
      if (hours < 10) {
        hours = "0" + hours;
      }
      var minutes = date.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return year + '-' + mounth + '-' + day + " " + hours + ':' + minutes;
    },
    //--------------------------读取公众号openid--------------------------
    getOpenID: function getOpenID() {
      var that = this;
      uni.getStorage({
        key: 'scenicSpotOpenId',
        success: function success(response) {
          // alert('获取id成功');
          that.ctkyOpenID = response.data;
        },
        fail: function fail(_fail) {
          uni.hideLoading();

          // uni.showModal({
          // 	content: '用户未授权',
          // })


        } });

    },
    //-------------------------支付页面-------------------------
    payDetail: function payDetail() {
      //支付详情
      uni.navigateTo({
        url: '../CZC/PriceDetail' });

    },
    closePayment: function closePayment() {
      //关闭
      var that = this;
      that.closeBottomPopup();
    },
    payment: function payment(e) {
      //支付
      var that = this;
      var timeStamp = new Date().getTime();
      uni.requestPayment({
        provider: e.detail.value.chooseType,
        orderInfo: '111',
        timeStamp: timeStamp,
        nonceStr: '',
        package: '',
        paySign: '',
        success: function success(res) {
          // console.log(res);
          uni.navigateTo({
            url: '../CZC/PaymentSuccess' });

        },
        fail: function fail(res) {
          // console.log(res);
          uni.navigateTo({
            url: '../CZC/PaymentFail' });

        } });

    },
    openBottomPopup: function openBottomPopup() {
      this.$nextTick(function () {
        this.$refs['bottomPopup'].open();
      });
    },
    closeBottomPopup: function closeBottomPopup() {
      this.$nextTick(function () {
        this.$refs['bottomPopup'].close();
      });
    },
    back: function back() {
      var that = this;
      uni.switchTab({
        url: '/pages/Home/zy_zhcx' });

    },
    //------------------------------------------------客运开始------------------------------------------------
    //-------------------------客运用户详情-------------------------
    getPicture: function getPicture() {
      var that = this;
      uni.request({
        url: _Ctky.default.KyInterface.Ky_AddPicture.Url,
        method: _Ctky.default.KyInterface.Ky_AddPicture.method,
        header: _Ctky.default.KyInterface.Ky_AddPicture.header,
        data: {
          model: 0 },

        success: function success(res) {
          if (res.data.status == true) {
            that.noDataImage = res.data.data[2].imageUrl;
          } else {
            console.log(res.data.status);
          }
        },
        fail: function fail(res) {
          console.log(res);
        } });

    },
    getUserInfo: function getUserInfo() {
      var that = this;
      //读取用户ID
      uni.getStorage({
        key: 'userInfo',
        success: function success(data) {
          that.userInfo = data.data;
          console.log('用户信息', that.userInfo);
          that.getKeYunOrderInfo();
        },
        fail: function fail(res) {
          // console.log('错误', res);
        } });

    },

    //-------------------------请求客运订单数据-------------------------
    getKeYunOrderInfo: function getKeYunOrderInfo() {
      var that = this;
      uni.request({
        url: _Ctky.default.KyInterface.Ky_getKeYunOrderInfo.Url,
        method: _Ctky.default.KyInterface.Ky_getKeYunOrderInfo.method,
        header: _Ctky.default.KyInterface.Ky_getKeYunOrderInfo.header,
        data: {
          clientID: that.userInfo.userId },

        success: function success(res) {
          uni.stopPullDownRefresh();
          uni.hideLoading();
          console.log('客运订单数据', res.data);
          that.ctkyOrderNum = res.data.orderNumber;
          if (res.data.status == true) {
            for (var i = 0; i < res.data.data.length; i++) {
              that.info.push(res.data.data[i]);
            }
            for (var i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].state == '5') {
                that.finishArr.push(res.data.data[i]);
              } else if (res.data.data[i].state == '4') {
                that.goingArr.push(res.data.data[i]);
              } else if (res.data.data[i].state == '7') {
                that.unfinishArr.push(res.data.data[i]);
              } else if (res.data.data[i].state == '6' || res.data.data[i].state == '9') {
                that.cancelArr.push(res.data.data[i]);
              }
            }

          } else if (res.data.status == false) {
            uni.hideLoading();

          }
        },
        fail: function fail(res) {
          uni.hideLoading();
          //请求数据失败，停止刷新
          uni.stopPullDownRefresh();
          // console.log('错误', res);
        } });

    },
    //-------------------------请求定制巴士订单数据-------------------------
    GetBookLogInfoByUserId: function GetBookLogInfoByUserId() {
      var that = this;
      console.log(that.userInfo.userId);
      uni.request({
        url: _Ctky.default.KyInterface.Cs_GetBookLogInfoByUserId.Url,
        method: _Ctky.default.KyInterface.Cs_GetBookLogInfoByUserId.method,
        header: _Ctky.default.KyInterface.Cs_GetBookLogInfoByUserId.header,
        data: {
          UserAID: that.userInfo.userId },

        success: function success(res) {
          uni.hideLoading();
          uni.stopPullDownRefresh();
          console.log('定制巴士订单数据', res);
          if (res.data.Successed == true) {
            var orderArray = [];
            for (var i = 0; i < res.data.bookLogs.length; i++) {
              var array = {
                carType: res.data.bookLogs[i].Rep_BookLogType,
                bookTime: that.turnDate(res.data.bookLogs[i].BookTime),
                startSiteName: res.data.bookLogs[i].StartSiteName,
                endSiteName: res.data.bookLogs[i].EndSiteName,
                state: res.data.bookLogs[i].Rep_BookLogState,
                setOutTime: that.turnDate(res.data.bookLogs[i].SetoutTime),
                totalPrice: res.data.bookLogs[i].TotalPrice,
                iDNameType: res.data.bookLogs[i].iDNameType,
                ticketNumber: res.data.bookLogs[i].GetTicketCode,
                carryChild: res.data.bookLogs[i].Children,
                fullTicket: res.data.bookLogs[i].Person,
                halfTicket: 0,
                orderNumber: res.data.bookLogs[i].AID,
                CheckInfoList: res.data.bookLogs[i].CheckInfoList,
                driverName: res.data.bookLogs[i].driverName,
                vehicleNumber: res.data.bookLogs[i].vehicleNumber };

              orderArray.push(array);
              that.info.push(array);
              var state = res.data.bookLogs[i].Rep_BookLogState;
              if (state == '已完成') {
                that.finishArr.push(orderArray[i]);
              } else if (state == '支付正常' || state == '改签') {
                that.goingArr.push(orderArray[i]);
              } else if (state == '尚未支付') {
                that.unfinishArr.push(orderArray[i]);
              } else if (state == '作废' || state == '已退票') {
                that.cancelArr.push(orderArray[i]);
              }
            }
          } else if (res.data.Successed == false) {

          }
        },
        fail: function fail(res) {
          uni.hideLoading();
          uni.stopPullDownRefresh();
          console.log(res);
        } });


    },
    //-------------------------------时间转换-------------------------------
    turnDate: function turnDate(date) {
      if (date) {
        var setTime = date.replace('T', ' ');
        return setTime;
      }
    },
    //-------------------------------获取班次信息-------------------------------
    getScheduleNum: function getScheduleNum(param) {
      if (param.carType != '定制巴士') {
        if (param.executeScheduleID) {
          var schedule = param.executeScheduleID.split('|');
          return schedule[1];
        }
      }
    },
    //-------------------------判断订单状态-------------------------
    getCtkyOrderStatus: function getCtkyOrderStatus(param) {
      if (!/(^[1-9]\d*$)/.test(param)) {//如果不是数字
        return param;
      } else {
        if (param == 4) {
          return '进行中';
        } else if (param == 5) {
          return '已完成';
        } else if (param == 6) {
          return '已退票';
        } else if (param == 7) {
          return '未支付';
        } else if (param == 9) {
          return '已撤销';
        } else if (param == 22) {
          return '已改签';
        }
      }
    },
    //-------------------------跳转到详情页-------------------------
    keYunDetail: function keYunDetail(res) {
      console.log(res);
      var orderInfo = {
        carType: res.carType,
        state: res.state,
        totalPrice: res.totalPrice,
        startSiteName: res.startSiteName,
        endSiteName: res.endSiteName,
        fullTicket: res.fullTicket,
        halfTicket: res.halfTicket,
        carryChild: res.carryChild,
        setOutTime: res.setOutTime,
        driverName: res.driverName,
        driverPhone: res.driverPhone,
        vehicleNumber: res.vehicleNumber,
        iDNameType: res.iDNameType,
        ticketNumber: res.ticketNumber,
        insured: res.insured,
        CheckInfoList: res.CheckInfoList };

      uni.navigateTo({
        url: '../../pages_CTKY/pages/CTKY/TraditionSpecial/Order/orderDetail?orderInfo=' + JSON.stringify(orderInfo) });

    },
    // -------------------------客运改签-------------------------
    endorse: function endorse(item) {
      // console.log(item)
      uni.showToast({
        title: '待开放...',
        icon: 'none' });

      // uni.navigateTo({
      // 	url:'../../pages_CTKY/pages/CTKY/TraditionSpecial/Order/selectTickets?orderInfo=' + JSON.stringify(item) + '&isEndores=' + "true"
      // })
    },
    // -------------------------客运查看车辆位置-------------------------
    busLocation: function busLocation(item) {
      var loaction = {
        latitude: item.lat,
        longitude: item.lon };

      uni.navigateTo({
        url: '../../pages_CTKY/pages/CTKY/TraditionSpecial/MapMark/checkBusLocation?busInfo=' + JSON.stringify(loaction) });

    },
    //--------------------------退票之前获取车票支付参数--------------------------
    refund_getTicketPaymentInfo: function refund_getTicketPaymentInfo(orderNumber) {
      var that = this;
      var timer = null;
      that.timer = timer;
      uni.showLoading({
        title: '查询支付状态...' });

      timer = setInterval(function () {
        uni.request({
          url: _Ctky.default.KyInterface.Ky_getTicketPaymentInfo.Url,
          method: _Ctky.default.KyInterface.Ky_getTicketPaymentInfo.method,
          data: {
            orderNumber: orderNumber },

          success: function success(res) {
            console.log(res);
            if (res.data.data == '车票已退票') {
              uni.stopPullDownRefresh();
              uni.hideLoading();
              clearInterval(timer);
              uni.showToast({
                title: '车票已退票',
                icon: 'none' });

            } else {
              clearInterval(timer);
              that.GetBounceChargeByOrderNumber(orderNumber);
            }
          },
          fail: function fail(res) {
            uni.stopPullDownRefresh();
            uni.hideLoading();
            //回调失败，取消定时器
            clearInterval(timer);
          } });

      }, 3000);
    },
    // -------------------------客运退票--查询费率-------------------------
    GetBounceChargeByOrderNumber: function GetBounceChargeByOrderNumber(orderNumber) {
      var that = this;
      uni.request({
        url: _Ctky.default.KyInterface.Ky_GetBounceChargeByOrderNumber.Url,
        method: _Ctky.default.KyInterface.Ky_GetBounceChargeByOrderNumber.method,
        data: {
          orderNumber: orderNumber },

        success: function success(respones) {
          if (respones.data.status == true) {
            uni.hideLoading();
            that.$refs.popup2.close();
            var BounceMoney = respones.data.data.BounceMoney;
            uni.showModal({
              title: '温馨提示',
              // content:'退票将收取手续费，退款金额为' + BounceMoney + '元',
              content: '退票将收取手续费，是否继续退票',
              success: function success(res) {
                if (res.confirm) {
                  that.keYunRefundTicket(orderNumber);
                }
              } });

          } else if (respones.data.status == false) {
            uni.hideLoading();
            that.$refs.popup2.close();
            uni.showToast({
              title: respones.data.msg,
              icon: 'none',
              complete: function complete() {
                setTimeout(function () {
                  uni.startPullDownRefresh();
                }, 1500);
              } });

          }
        },
        fail: function fail(respones) {
          uni.hideLoading();
          console.log('费率', respones);
        } });

    },
    // -------------------------客运退票-------------------------
    keYunRefundTicket: function keYunRefundTicket(orderNumber) {var _this = this;
      uni.showLoading({
        title: '正在退票中...' });

      var that = this;
      uni.request({
        url: _Ctky.default.KyInterface.Ky_RefundTicket.Url,
        method: _Ctky.default.KyInterface.Ky_RefundTicket.method,
        data: {
          orderNumber: orderNumber },

        success: function success(respones) {
          uni.hideLoading();
          // console.log('退票结果', respones)
          if (respones.data.status == true) {
            if (respones.data.msg == '退票成功') {
              uni.showToast({
                title: "退票成功",
                complete: function complete() {
                  setTimeout(function () {
                    uni.startPullDownRefresh();
                  }, 1500);
                } });

            } else {
              uni.showToast({
                title: respones.data.msg });

              uni.startPullDownRefresh();
            }
          } else if (respones.data.status == false) {
            uni.hideLoading();
            if (respones.data.msg) {
              uni.showToast({
                title: respones.data.msg,
                icon: 'none' });

            } else {
              uni.showToast({
                title: '退票失败',
                icon: 'none' });

            }
            _this.$refs.popup2.close();
            uni.startPullDownRefresh();
          }
        },
        fail: function fail(respones) {
          uni.hideLoading();
          console.log(respones);
          uni.showToast({
            title: '服务器异常，请联系客服' });

        } });

    },
    // -------------------------定制巴士退票/退款 先退票再退款-------------------------
    cs_refundStateCheck: function cs_refundStateCheck(item) {
      var that = this;
      that.ky_currentType = '定制巴士退票';
      //退票
      // that.csRefundTicket(item);
      //检测支付状态
      that.Cs_CheckPayState(item);
    },

    //退票
    csRefundTicket: function csRefundTicket(item) {
      var that = this;
      uni.request({
        url: _Ctky.default.KyInterface.Cs_Refund.Url,
        method: _Ctky.default.KyInterface.Cs_Refund.method,
        header: _Ctky.default.KyInterface.Cs_Refund.header,
        data: {
          bookID: item.orderNumber },

        success: function success(respones) {
          console.log('退票结果', respones);
          if (respones.data.Successed == true) {
            uni.hideLoading();
            uni.showToast({
              title: respones.data.BookResult.Message,
              complete: function complete() {
                that.Cs_BouncePay(item);
                that.$refs.popup2.close();
              } });

          } else {
            uni.hideLoading();
            uni.showToast({
              title: respones.data.FaildMessage,
              icon: 'none',
              complete: function complete() {
                this.$refs.popup2.close();
              } });

          }
        },
        fail: function fail(respones) {
          uni.hideLoading();
          uni.showToast({
            title: '服务器异常，请联系客服' });

        } });

    },
    //退款
    Cs_BouncePay: function Cs_BouncePay(item) {
      var that = this;
      var payType = _Ctky.default.KyInterface.payType.payType;
      uni.request({
        url: _Ctky.default.KyInterface.Cs_BouncePay.Url,
        method: _Ctky.default.KyInterface.Cs_BouncePay.method,
        data: {
          orderNumber: item.orderNumber,
          payType: payType,
          price: item.totalPrice },

        success: function success(respones) {
          console.log('退款结果', respones);
          if (respones.data.status == true) {
            uni.showToast({
              title: respones.data.msg,
              complete: function complete() {
                // console.log('退票成功，开始刷新');
                uni.startPullDownRefresh();
              } });

          } else if (respones.data.status == false) {
            uni.showToast({
              title: respones.data.msg,
              icon: 'none',
              complete: function complete() {
                uni.startPullDownRefresh();
              } });

          }
        },
        fail: function fail(respones) {
          uni.hideLoading();
          console.log(respones);
          uni.showToast({
            title: '服务器异常，请联系客服' });

        } });

    },
    // -------------------------定制巴士取消-------------------------
    Cs_cancelStateCheck: function Cs_cancelStateCheck(orderNumber) {
      var that = this;
      that.ky_currentType = '定制巴士取消';
      that.Cs_CheckPayState(orderNumber);
    },
    Cs_cancelTicket: function Cs_cancelTicket(orderNumber) {var _this2 = this;
      var that = this;
      uni.request({
        url: _Ctky.default.KyInterface.Cs_Cancel.Url,
        method: _Ctky.default.KyInterface.Cs_Cancel.method,
        header: _Ctky.default.KyInterface.Cs_Cancel.header,
        data: {
          bookID: orderNumber },

        success: function success(respones) {
          console.log('取消结果', respones);
          if (respones.data.Successed == true) {
            uni.hideLoading();
            uni.showToast({
              title: '取消成功' });

            _this2.$refs.popup3.close();
            uni.startPullDownRefresh();
          } else {
            uni.hideLoading();
            uni.showToast({
              title: '取消失败',
              icon: 'none' });

            _this2.$refs.popup3.close();
            uni.startPullDownRefresh();
          }
        },
        fail: function fail(respones) {
          // alert(respones.data.msg)
          uni.hideLoading();
          console.log(respones);
          uni.showToast({
            title: '服务器异常，请联系客服' });

          _this2.$refs.popup3.close();
        } });

    },
    //--------------------------客运取消之前获取车票支付参数--------------------------
    cancel_getTicketPaymentInfo: function cancel_getTicketPaymentInfo(orderNumber) {
      var that = this;
      var timer = null;
      that.timer = timer;
      uni.showLoading({
        title: '查询支付状态...' });

      timer = setInterval(function () {
        uni.request({
          url: _Ctky.default.KyInterface.Ky_getTicketPaymentInfo.Url,
          method: _Ctky.default.KyInterface.Ky_getTicketPaymentInfo.method,
          data: {
            orderNumber: orderNumber },

          success: function success(res) {
            console.log('取消结果', res);
            if (res.data.data == '订票成功，待支付' || res.data.msg == '订票成功，待支付') {//可以取消
              clearInterval(timer);
              that.keYunCancelTicket(orderNumber);
            } else if (res.data.data == '订票成功' || res.data.msg == '订票成功') {//已付钱，不可取消
              clearInterval(timer);
              uni.hideLoading();
              that.$refs.popup3.close();
              uni.showModal({
                title: '温馨提示',
                content: '您的订单已购票成功，不可取消',
                showCancel: false,
                complete: function complete() {
                  uni.startPullDownRefresh();
                } });

            } else if (res.data.msg == '订票失败' || res.data.data == '订票失败') {//可取消
              clearInterval(timer);
              that.keYunCancelTicket(orderNumber);
            } else {
              clearInterval(timer);
              uni.hideLoading();
              that.$refs.popup3.close();
            }
          },
          fail: function fail(res) {
            uni.stopPullDownRefresh();
            uni.hideLoading();
            //回调失败，取消定时器
            clearInterval(timer);
          } });

      }, 3000);
    },
    // -------------------------客运取消-------------------------
    keYunCancelTicket: function keYunCancelTicket(orderNumber) {var _this3 = this;
      var that = this;
      that.ky_currentType = '传统客运';
      uni.request({
        url: _Ctky.default.KyInterface.Ky_CancelTicket.Url,
        method: _Ctky.default.KyInterface.Ky_CancelTicket.method,
        data: {
          orderNumber: orderNumber },

        success: function success(respones) {
          uni.hideLoading();
          that.$refs.popup3.close();
          // console.log('取消结果', respones)
          if (respones.data.status == true) {
            uni.showToast({
              title: '取消成功',
              complete: function complete() {
                setTimeout(function () {
                  uni.startPullDownRefresh();
                }, 1500);
              } });

          } else {
            uni.showToast({
              title: '取消失败',
              icon: 'none',
              complete: function complete() {
                setTimeout(function () {
                  uni.startPullDownRefresh();
                }, 1500);
              } });

          }
        },
        fail: function fail(respones) {
          // alert(respones.data.msg)
          uni.hideLoading();
          console.log(respones);
          uni.showToast({
            title: '服务器异常，请联系客服' });

          _this3.$refs.popup3.close();
        } });

    },

    // -------------------------客运支付-------------------------
    keYunPay: function keYunPay(item, carType) {
      // var orderInfo = this.info[index];
      var that = this;
      console.log(item.orderNumber, carType, item.totalPrice);
      if (carType == '定制巴士') {
        that.ky_currentType = '定制巴士支付';
        this.Cs_CheckPayState(item.orderNumber, item.totalPrice);
      } else {
        this.ky_currentType = '';
        this.ky_orderStatus = '客运支付订单检索';
        this.getTicketPaymentInfo(item.orderNumber);
      }
    },

    //--------------------------检测订单支付状态--------------------------
    Cs_CheckPayState: function Cs_CheckPayState(orderNumber, totalPrice) {
      var that = this;
      var payType = _Ctky.default.KyInterface.payType.payType;
      console.log('检测订单支付状态', orderNumber, payType);
      var number = '';
      if (that.ky_currentType == '定制巴士退票') {
        number = orderNumber;
      } else {
        number = orderNumber.orderNumber;
      }
      uni.request({
        url: _Ctky.default.KyInterface.Cs_CheckPayState.Url,
        method: _Ctky.default.KyInterface.Cs_CheckPayState.method,
        data: {
          orderNumber: number,
          payType: payType },

        success: function success(res) {
          console.log('支付状态', res);
          console.log('ky_currentType', that.ky_currentType);
          if (that.ky_currentType == '定制巴士取消') {
            if (res.data.msg == '支付成功') {
              uni.showToast({
                title: '订单已支付',
                icon: 'none' });

            } else {
              that.Cs_cancelTicket(orderNumber);
            }
          }
          if (res.data.msg == '不存在该订单，请输入正确订单号') {
            if (that.ky_currentType == '定制巴士退票') {
              // that.csRefundTicket(orderNumber);
            } else if (that.ky_currentType == '定制巴士支付') {
              that.getSpecialBusPaymentInfo(orderNumber, totalPrice);
            }
          } else if (res.data.msg == '获取二维码尚未支付') {

          } else if (res.data.msg == '支付成功') {
            uni.showToast({
              title: '订单已支付',
              icon: 'none' });

          } else if (res.data.msg == '支付关闭') {
            uni.showToast({
              title: '支付关闭',
              icon: 'none' });

          } else if (res.data.msg == '检测到超时') {
            uni.showToast({
              title: '支付超时',
              icon: 'none' });

          } else if (res.data.msg == '已办理退款') {
            uni.showToast({
              title: '已办理退款',
              icon: 'none' });

          }
        },
        fail: function fail(res) {
          console.log(res);
        } });

    },
    //--------------------------定制巴士支付成功后请求--------------------------
    Cs_paySuccess: function Cs_paySuccess(bookID) {
      var that = this;
      uni.request({
        url: _Ctky.default.KyInterface.Cs_Confirm.Url,
        method: _Ctky.default.KyInterface.Cs_Confirm.method,
        header: _Ctky.default.KyInterface.Cs_Confirm.header,
        data: {
          bookID: bookID },

        success: function success(res) {
          console.log('支付成功后调接口', res);
          uni.startPullDownRefresh();
        },
        fail: function fail(res) {
          console.log('支付失败后调接口', res);
        } });

    },
    //--------------------------获取定制巴士支付参数--------------------------
    getSpecialBusPaymentInfo: function getSpecialBusPaymentInfo(orderNumber, totalPrice) {
      var that = this;
      uni.showLoading({
        title: '加载中...' });

      var payType = _Ctky.default.KyInterface.payType.payType;
      var timer = null;
      that.timer = timer;
      timer = setInterval(function () {
        uni.request({
          url: _Ctky.default.KyInterface.commonPayment.Url,
          method: _Ctky.default.KyInterface.commonPayment.method,
          data: {
            //订单编号
            orderNumber: orderNumber,
            payType: payType,
            openId: that.ctkyOpenID,
            billDescript: '定制巴士订单服务费',
            goodsName: '定制巴士服务',
            price: totalPrice
            // price:0.1,
          },
          success: function success(res) {
            uni.hideLoading();
            if (res.data.status == true) {
              that.paymentData = res.data.data;
              clearInterval(timer);
              uni.showModal({
                content: '请尽快支付',
                success: function success(res) {
                  if (res.confirm) {
                    that.Cs_payment();
                  }
                } });

            } else if (res.data.status == false) {
              uni.hideLoading();
              clearInterval(timer);
              uni.showToast({
                title: res.data.msg,
                icon: 'none' });

            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            console.log('失败');
            //回调失败，取消定时器
            clearInterval(timer);
          } });

      }, 3000);
    },
    //--------------------------获取车票支付参数--------------------------
    getTicketPaymentInfo: function getTicketPaymentInfo(orderNumber) {
      // console.log('支付参数', orderNumber);
      var that = this;
      var timer = null;
      that.timer = timer;
      uni.showLoading({
        title: '正在检测订单...' });

      timer = setInterval(function () {
        uni.request({
          url: _Ctky.default.KyInterface.Ky_getTicketPaymentInfo.Url,
          method: _Ctky.default.KyInterface.Ky_getTicketPaymentInfo.method,
          // header: $KyInterface.KyInterface.Ky_getTicketPaymentInfo.header,
          data: {
            orderNumber: orderNumber },

          success: function success(res) {
            console.log('支付参数返回数据', res);
            if (res.data.status == true) {
              uni.hideLoading();
              var info = JSON.parse(res.data.msg);
              if (info.oldState == '结束') {
                clearInterval(timer);
                uni.showToast({
                  title: '订单已支付',
                  icon: 'none',
                  complete: function complete() {
                    setTimeout(function () {
                      uni.startPullDownRefresh();
                    }, 1500);
                  } });

              } else {
                clearInterval(timer);
                //未支付，客运支付
                that.keYunPaymentData = JSON.parse(res.data.msg);
                that.keYunPayment();
              }
            } else if (res.data.status == false) {
              uni.hideLoading();
              clearInterval(timer);
              var info = JSON.parse(res.data.msg);
              if (info.oldState == '结束') {
                uni.showToast({
                  title: '订单已超时',
                  icon: 'none' });

              } else {
                uni.showModal({
                  content: info.oldState,
                  showCancel: false });

              }
            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            //回调失败，取消定时器
            clearInterval(timer);
          } });

      }, 3000);
    },
    //--------------------------调起支付--------------------------
    keYunPayment: function keYunPayment() {
      // console.log('点击了支付');
      var that = this;
      if (that.isPayEnable == 0) {
        uni.showToast({
          title: '正在获取支付,请稍等...',
          icon: 'none' });

      } else {



















































































        uni.hideLoading();
        uni.requestPayment({
          provider: 'wxpay',
          timeStamp: that.keYunPaymentData.jsapi.TimeStamp,
          nonceStr: that.keYunPaymentData.jsapi.NonceStr,
          package: that.keYunPaymentData.jsapi.Package,
          signType: that.keYunPaymentData.jsapi.SignType,
          paySign: that.keYunPaymentData.jsapi.PaySign,
          success: function success(res) {
            console.log(res);
            uni.showToast({
              title: '支付成功',
              icon: 'none' });

            uni.showLoading({
              title: '加载中...' });

            that.getTicketPaymentInfo_ticketIssue(that.orderNum);
          },
          fail: function fail(res) {
            console.log(res);
            if (res.errMsg == "requestPayment:fail cancel") {
              setTimeout(function () {
                that.showToast("支付失败，请重新支付");
              }, 1000);
            } else {
              that.showToast("支付失败");
            }
          } });


      }
    },
    //--------------------------调起定制巴士支付--------------------------
    Cs_payment: function Cs_payment() {
      var that = this;
















































































      uni.hideLoading();
      uni.requestPayment({
        // provider: 'wxpay',
        timeStamp: that.paymentData.timeStamp,
        nonceStr: that.paymentData.nonceStr,
        package: that.paymentData.package,
        signType: that.paymentData.signType,
        paySign: that.paymentData.paySign,
        success: function success(res) {
          console.log(res);
          uni.showToast({
            title: '支付成功',
            icon: 'none' });

          uni.showLoading({
            title: '加载中...' });

          // that.getTicketPaymentInfo_ticketIssue(that.orderNum);
          that.Cs_paySuccess(that.orderNum);
        },
        fail: function fail(res) {
          console.log(res);
          if (res.errMsg == "requestPayment:fail canceled") {
            setTimeout(function () {
              that.showToast("支付失败，请重新支付");
            }, 1000);
          } else {
            that.showToast("支付失败");
          }
        } });


    },
    showToast: function showToast(msg) {var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
      uni.showToast({
        title: msg,
        icon: icon });

    },
    //--------------------------客运成功之后重新获取车票支付参数--------------------------
    getTicketPaymentInfo_ticketIssue: function getTicketPaymentInfo_ticketIssue(orderNumber) {
      var that = this;
      var timer = null;
      that.timer = timer;
      uni.showLoading({
        title: '加载中...' });

      timer = setInterval(function () {
        uni.request({
          url: _Ctky.default.KyInterface.Ky_getTicketPaymentInfo.Url,
          method: _Ctky.default.KyInterface.Ky_getTicketPaymentInfo.method,
          // header:$KyInterface.KyInterface.Ky_getTicketPaymentInfo.header,
          data: {
            orderNumber: orderNumber },

          success: function success(res) {
            // console.log('支付参数返回数据', res);
            uni.stopPullDownRefresh();
            if (res.data.data == '订票成功') {
              uni.hideLoading();
              clearInterval(timer);
              uni.showToast({
                title: '出票成功',
                icon: 'none' });

              uni.redirectTo({
                url: './CTKYPaySuccess' });

            }
          },
          fail: function fail(res) {
            uni.stopPullDownRefresh();
            uni.hideLoading();
            //回调失败，取消定时器
            clearInterval(timer);
          } });

      }, 3000);
    },
    //-------------------------客运二维码弹框-------------------------
    QRCodeTap: function QRCodeTap() {
      this.$refs.popup.open();
    },
    //-------------------------客运投诉-------------------------
    KyComplain: function KyComplain(item) {
      console.log(item);
      if (item.carType == '普通班车') {
        uni.navigateTo({
          url: '../../pages_GRZX/pages/GRZX/gz_complaintsPage?or_entrance=1&or_class=普通班车&or_name=' + item.driverName + '&or_nameId=0' + '&or_phoneNumber' + item.driverPhone });

      } else if (item.carType == '定制班车') {
        uni.navigateTo({
          url: '../../pages_GRZX/pages/GRZX/gz_complaintsPage?or_entrance=1&or_class=定制班车&or_name=' + item.driverName + '&or_nameId=0' + '&or_phoneNumber' + item.driverPhone });

      } else if (item.carType == '定制巴士') {
        uni.navigateTo({
          url: '../../pages_GRZX/pages/GRZX/gz_complaintsPage?or_entrance=1&or_class=定制巴士&or_name=' + item.driverName + '&or_nameId=0' + '&or_phoneNumber' + item.driverPhone });

      }
    },
    onchange: function onchange(e) {
      this.num = e.value;
    },
    tapInfo: function tapInfo(e) {
      if (this.rSelect.indexOf(e) == -1) {
        this.rSelect.push(e); //选中添加到数组里
      } else {
        this.rSelect.splice(this.rSelect.indexOf(e), 1); //取消
      }
    },
    //------------------------------------------------客运结束------------------------------------------------
    onClickItem: function onClickItem(e) {//tab点击事件
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },

    //-------------------------出租车开始-------------------------
    loadczcData: function loadczcData() {var _this4 = this;
      var that = this;
      uni.getStorage({
        key: 'userInfo',
        success: function success(res1) {
          _this4.userInfo = res1.data;
          uni.request({
            url: 'http://36.250.234.10:60039/api/taxi/GetAllExpressOrder_Passenger',
            data: {
              userId: that.userInfo.userId },

            method: 'POST',
            success: function success(res) {
              console.log('出租车', res);
              uni.hideLoading();
              uni.stopPullDownRefresh();
              if (res.data.status) {
                for (var i = 0; i < res.data.data.length; i++) {
                  that.info.push(res.data.data[i]);
                  if (res.data.data[i].state == "0" || res.data.data[i].state == "1" || res.data.data[i].state == "2" ||
                  res.data.data[i].state == "3" || res.data.data[i].state == "4") {
                    that.goingArr.push(res.data.data[i]);
                  } else if (res.data.data[i].state == "5" || res.data.data[i].state == "9") {
                    that.unfinishArr.push(res.data.data[i]);
                  } else if (res.data.data[i].state == "7" || res.data.data[i].state == "8") {
                    that.cancelArr.push(res.data.data[i]);
                  } else if (res.data.data[i].state == 6) {
                    that.finishArr.push(res.data.data[i]);
                  }
                }
              } else {
              }
            } });

        },
        fail: function fail() {
          uni.hideLoading();
          //请求数据失败，停止刷新
          uni.stopPullDownRefresh();
          uni.showToast({
            title: '暂无订单数据，请先登录后查看订单',
            icon: 'none',
            success: function success() {
              uni.redirectTo({
                url: '../GRZX/userLogin?urlData=1' });

            } });

        } });

    },
    taxiOrderState: function taxiOrderState(param) {
      if (param == 0 || param == 1 || param == 2 || param == 3 || param == 4) {
        return '进行中';
      } else if (param == 5 || param == 9) {
        return '未支付';
      } else if (param == 7 || param == 8) {
        return '已取消';
      } else if (param == 6) {
        return '已完成';
      }
    },
    //-------------------------出租车订单取消-------------------------
    czcGotoPay: function czcGotoPay(value) {
      uni.navigateTo({
        url: "../../pages_CZC/pages/CZC/TaxiPayment?orderNumber=" + value });

    },
    cancleOrder: function cancleOrder(item) {
      //取消订单
      var that = this;
      //关闭所有的定时器
      uni.showModal({
        title: "取消订单",
        content: "您是否取消订单",
        success: function success(res) {
          if (res.confirm) {
            getApp().globalData.closeUpload();
            uni.request({
              url: _Czc.default.Interface.CancelExpressOrderByOrderNum_Passenger.value,
              method: _Czc.default.Interface.CancelExpressOrderByOrderNum_Passenger.method,
              data: {
                OrderNumber: item.orderNumber,
                userId: that.userInfo.userId },

              success: function success(res) {
                var data = res.data.data;
                if (res.data.status) {
                  uni.showToast({
                    title: '取消成功',
                    icon: 'none',
                    success: function success() {} });

                  setTimeout(function () {
                    uni.startPullDownRefresh();
                  }, 1500);
                } else {
                  uni.showToast({
                    title: res.data.msg,
                    icon: 'none' });

                }
              },
              fail: function fail(res) {
                uni.showToast({
                  title: '网络连接失败',
                  icon: 'none' });

                // console.log(res);
              } });

          }

        } });

    },
    //-------------------------出租车专线代码开始-------------------------
    getOrderList: function getOrderList() {//获取出租车专线订单
      var that = this;
      uni.request({
        url: _Czcprivate.default.Interface.QuerySpecialLineOrderByUserID_Passenger.value,
        method: _Czcprivate.default.Interface.QuerySpecialLineOrderByUserID_Passenger.method,
        data: {
          UserID: that.userInfo.userId },

        success: function success(res) {
          console.log('专线车', res);
          uni.hideLoading();
          uni.stopPullDownRefresh();
          if (res.data.status) {
            for (var i = 0; i < res.data.data.length; i++) {
              var data = res.data.data[i];
              var orderType = '';
              if (data.State == 0 || data.State == 1 || data.State == 2 || data.State == 3 || data.State == 4) {
                orderType = '进行中';
              } else if (data.State == 5 || data.State == 9) {
                orderType = '未支付';
              } else if (data.State == 7 || data.State == 8) {
                orderType = '已取消';
              } else if (data.State == 6) {
                orderType = '已完成';
              }
              var obj = {
                title: '出租车-专线',
                titleIndex: '1',
                SpecialorderState: data.State,
                time: data.OrderTime,
                orderType: orderType,
                appointmentTime: data.AppointmentTime,
                money: data.EstimatePrice,
                startAddress: data.StartAddress,
                endAddress: data.EndAddress,
                orderNumber: data.OrderNumber,
                driverName: data.DriverName,
                appointment: true };

              that.info.push(obj);
              if (orderType == '已完成') {
                that.finishArr.push(obj);
              } else if (orderType == '等待司机接单' || orderType == '进行中' || orderType == '待上车') {
                that.goingArr.push(obj);
              } else if (orderType == '未支付') {
                that.unfinishArr.push(obj);
              } else if (orderType == '已取消') {
                that.cancelArr.push(obj);
              }
            }
          }
        },
        fail: function fail() {
          uni.stopPullDownRefresh();
          uni.hideLoading();
        } });

    },
    CancelSpecialLineOrder: function CancelSpecialLineOrder(OrderNumber) {//取消出租车专线订单
      var that = this;
      uni.showModal({
        content: "您确定要取消订单吗",
        success: function success(res) {
          if (res.confirm) {
            uni.request({
              url: _Czcprivate.default.Interface.CancelSpecialLineOrder_Passenger.value,
              method: _Czcprivate.default.Interface.CancelSpecialLineOrder_Passenger.method,
              data: {
                OrderNumber: OrderNumber,
                UserID: that.userInfo.userId },

              success: function success(res) {
                if (res.data.status) {
                  uni.showToast({
                    title: res.data.msg,
                    icon: "none" });

                  uni.startPullDownRefresh();
                }
              },
              fail: function fail() {
                uni.showToast({
                  title: "网络连接失败",
                  icon: "none" });

              } });

          }
        } });

    },
    SpecialLineOrderDetail: function SpecialLineOrderDetail(item) {//专线车详情
      if (item.orderType == '进行中') {
        uni.navigateTo({
          url: '../../pages_CZC/pages/CZC/WaitTakeOrder?orderNumber=' + item.orderNumber });

      } else {
        uni.navigateTo({
          url: '/pages/order/SpecialLineDetail?orderNumber=' + item.orderNumber });

      }
    },
    DeleteSpecialLineOrder: function DeleteSpecialLineOrder(OrderNumber) {//专线车删除订单
      var that = this;
      uni.showModal({
        content: "您确定要删除订单吗",
        success: function success(res) {
          if (res.confirm) {
            uni.request({
              url: _Czcprivate.default.Interface.DeleteSpecialLineOrder_Passenger.value,
              method: _Czcprivate.default.Interface.DeleteSpecialLineOrder_Passenger.method,
              data: {
                OrderNumber: OrderNumber,
                UserID: that.userInfo.userId },

              success: function success(res) {
                // console.log(res)
                if (res.data.status) {

                  uni.showToast({
                    title: res.data.msg,
                    icon: "none" });

                  uni.startPullDownRefresh();
                }
              } });

          }
        } });

    },
    GotoPay: function GotoPay(value) {
      uni.navigateTo({
        url: "../../pages_CZC/pages/CZC/PrivateTaxiPayment?orderNumber=" + value });

    },
    CheckPayState: function CheckPayState(orderNumber) {//检测支付状态
      var that = this;
      var payPlatform = 3; //支付类型如：支付宝=2,App=3,公众号=4,小程序=5等




      payPlatform = 5;

      uni.request({
        url: _Czcprivate.default.Interface.CheckPayState.value,
        method: _Czcprivate.default.Interface.CheckPayState.method,
        data: {
          payType: payPlatform,
          orderNumber: orderNumber },

        success: function success(res) {
          console.log(res);
          if (res.data.status) {
            that.CancelSpecialLineOrder1(orderNumber);
          } else {
            uni.showToast({
              title: '取消失败',
              icon: 'none' });

          }
        },
        fail: function fail() {
          uni.hideLoading();
          uni.showToast({
            title: '网络连接失败',
            icon: 'none' });

        } });

    },
    BouncePay: function BouncePay(orderNumber, money) {
      var that = this;
      var payPlatform = 3; //支付类型如：支付宝=2,App=3,公众号=4,小程序=5等




      payPlatform = 5;

      uni.request({
        url: _Czcprivate.default.Interface.BouncePay.value,
        method: _Czcprivate.default.Interface.BouncePay.method,
        data: {
          payType: payPlatform,
          orderNumber: orderNumber,
          // price:that.FactPayPrice
          price: money },

        success: function success(res) {
          console.log(res);
          if (res.data.status) {
            that.CheckPayState(orderNumber);
          } else {
            uni.hideLoading();
            uni.showToast({
              title: '取消失败',
              icon: 'none' });

          }
        },
        fail: function fail(res) {
          uni.hideLoading();
          uni.showToast({
            title: '网络连接失败',
            icon: 'none' });

        } });

    },
    CancelSpecialLineOrder1: function CancelSpecialLineOrder1(orderNumber) {
      //取消订单
      var that = this;
      console.log(that.userInfo.userId);
      uni.request({
        url: _Czcprivate.default.Interface.CancelSpecialLineOrder_Passenger.value,
        method: _Czcprivate.default.Interface.CancelSpecialLineOrder_Passenger.method,
        data: {
          OrderNumber: orderNumber,
          UserId: that.userInfo.userId },

        success: function success(res) {
          uni.hideLoading();
          var data = res.data.data;
          if (res.data.status) {
            uni.showToast({
              title: '取消成功',
              icon: 'none' });

            uni.startPullDownRefresh();
          } else {
            uni.showToast({
              title: res.data.msg,
              icon: 'none' });

          }
        },
        fail: function fail(res) {
          uni.hideLoading();
          uni.showToast({
            title: '网络连接失败',
            icon: 'none' });

        } });


    },
    ConfirmCancel: function ConfirmCancel(value) {
      var that = this;
      uni.showModal({
        title: "取消订单",
        content: "您是否取消订单",
        success: function success(res) {
          if (res.confirm) {
            uni.showLoading({
              mask: true });

            if (value.SpecialorderState == 0 || value.SpecialorderState == 1 || value.SpecialorderState == 2) {
              that.BouncePay(value.orderNumber, value.money);
            } else {
              that.CancelSpecialLineOrder1(value.orderNumber);
              uni.hideLoading();
            }
          }
        },
        fail: function fail(res) {
          uni.showToast({
            title: '网络连接失败',
            icon: 'none' });

        } });

    },

    //-------------------------出租车专线代码结束-------------------------


    //-------------------------顺风车代码开始-------------------------
    getSfcOrderList: function getSfcOrderList() {//获取顺风车订单
      var that = this;
      uni.request({
        url: _downwindCar.default.Interface.QueryHitchhikerOrderByUserID_Passenger.value,
        method: 'POST',
        data: {
          UserID: that.userInfo.userId },

        success: function success(res) {
          console.log('顺风车', res);
          uni.hideLoading();
          uni.stopPullDownRefresh();
          if (res.data.status) {
            for (var i = 0; i < res.data.data.length; i++) {
              var data = res.data.data[i];
              var orderType = '';
              if (data.State == 0 || data.State == 1 || data.State == 2 || data.State == 3 || data.State == 4) {
                orderType = '进行中';
              } else if (data.State == 5 || data.State == 9) {
                orderType = '未支付';
              } else if (data.State == 7 || data.State == 8) {
                orderType = '已取消';
              } else if (data.State == 6) {
                orderType = '已完成';
              }
              var obj = {
                title: '出租车-顺风车',
                titleIndex: '1',
                SpecialorderState: data.State,
                time: data.OrderTime,
                orderType: orderType,
                appointmentTime: data.AppointmentTime,
                money: data.EstimatePrice,
                startAddress: data.StartAddress,
                endAddress: data.EndAddress,
                orderNumber: data.OrderNumber,
                driverName: data.DriverName,
                appointment: true };

              that.info.push(obj);
              if (orderType == '已完成') {
                that.finishArr.push(obj);
              } else if (orderType == '等待司机接单' || orderType == '进行中' || orderType == '待上车') {
                that.goingArr.push(obj);
              } else if (orderType == '未支付') {
                that.unfinishArr.push(obj);
              } else if (orderType == '已取消') {
                that.cancelArr.push(obj);
              }
            }
          }
        },
        fail: function fail() {
          uni.stopPullDownRefresh();
          uni.hideLoading();
        } });

    },
    CancelSfcOrder: function CancelSfcOrder(OrderNumber) {//取消顺风车订单
      var that = this;
      uni.showModal({
        content: "您确定要取消订单吗",
        success: function success(res) {
          if (res.confirm) {
            uni.request({
              url: _downwindCar.default.Interface.CancelHitchhikerOrder_Passenger.value,
              method: 'POST',
              data: {
                OrderNumber: OrderNumber,
                UserID: that.userInfo.userId },

              success: function success(res) {
                if (res.data.status) {
                  uni.showToast({
                    title: res.data.msg,
                    icon: "none" });

                  uni.startPullDownRefresh();
                }
              },
              fail: function fail() {
                uni.showToast({
                  title: "网络连接失败",
                  icon: "none" });

              } });

          }
        } });

    },
    SfcOrderDetail: function SfcOrderDetail(item) {//顺风车详情
      if (item.orderType == '进行中') {
        uni.navigateTo({
          url: '../../pages_CZC/pages/CZC/DownWindCarOrder?orderNumber=' + item.orderNumber });

      } else {
        uni.navigateTo({
          url: '/pages/order/DownWindCarDetail?orderNumber=' + item.orderNumber });

      }
    },
    DeleteSfcOrder: function DeleteSfcOrder(OrderNumber) {//顺风车删除订单
      var that = this;
      uni.showModal({
        content: "您确定要删除订单吗",
        success: function success(res) {
          if (res.confirm) {
            uni.request({
              url: _downwindCar.default.Interface.DeleteHitchhikerOrder_Passenger.value,
              method: 'POST',
              data: {
                OrderNumber: OrderNumber,
                UserID: that.userInfo.userId },

              success: function success(res) {
                // console.log(res)
                if (res.data.status) {

                  uni.showToast({
                    title: res.data.msg,
                    icon: "none" });

                  uni.startPullDownRefresh();
                }
              } });

          }
        } });

    },
    GotoSfcPay: function GotoSfcPay(value) {
      uni.navigateTo({
        url: "../../pages_CZC/pages/CZC/DownWindCarPay?orderNumber=" + value });

    },
    CheckSfcPayState: function CheckSfcPayState(orderNumber) {//检测支付状态
      var that = this;
      var payPlatform = 3; //支付类型如：支付宝=2,App=3,公众号=4,小程序=5等




      payPlatform = 5;

      uni.request({
        url: _Czcprivate.default.Interface.CheckPayState.value,
        method: _Czcprivate.default.Interface.CheckPayState.method,
        data: {
          payType: payPlatform,
          orderNumber: orderNumber },

        success: function success(res) {
          console.log(res);
          if (res.data.status) {
            that.CancelSfcOrder1(orderNumber);
          } else {
            uni.hideLoading();
            uni.showToast({
              title: '取消失败',
              icon: 'none' });

          }
        },
        fail: function fail() {
          uni.hideLoading();
          uni.showToast({
            title: '网络连接失败',
            icon: 'none' });

        } });

    },
    SfcBouncePay: function SfcBouncePay(orderNumber, money) {
      var that = this;
      var payPlatform = 3; //支付类型如：支付宝=2,App=3,公众号=4,小程序=5等




      payPlatform = 5;

      uni.request({
        url: _Czcprivate.default.Interface.BouncePay.value,
        method: _Czcprivate.default.Interface.BouncePay.method,
        data: {
          payType: payPlatform,
          orderNumber: orderNumber,
          // price:that.FactPayPrice
          price: money },

        success: function success(res) {
          console.log(res);
          if (res.data.status) {
            that.CheckSfcPayState(orderNumber);
          } else {
            uni.showToast({
              title: '取消失败',
              icon: 'none' });

          }
        },
        fail: function fail(res) {
          uni.hideLoading();
          uni.showToast({
            title: '网络连接失败',
            icon: 'none' });

        } });

    },
    CancelSfcOrder1: function CancelSfcOrder1(orderNumber) {
      //取消订单
      var that = this;
      uni.request({
        url: _downwindCar.default.Interface.CancelHitchhikerOrder_Passenger.value,
        method: 'POST',
        data: {
          OrderNumber: orderNumber,
          UserId: that.userInfo.userId },

        success: function success(res) {
          uni.hideLoading();
          var data = res.data.data;
          if (res.data.status) {
            uni.showToast({
              title: '取消成功',
              icon: 'none' });

            uni.startPullDownRefresh();
          } else {
            uni.showToast({
              title: res.data.msg,
              icon: 'none' });

          }
        },
        fail: function fail(res) {
          uni.hideLoading();
          uni.showToast({
            title: '网络连接失败',
            icon: 'none' });

        } });


    },
    SfcConfirmCancel: function SfcConfirmCancel(value) {
      var that = this;
      uni.showModal({
        title: "取消订单",
        content: "您是否取消订单",
        success: function success(res) {
          if (res.confirm) {
            uni.showLoading({
              mask: true });

            if (value.SpecialorderState == 0 || value.SpecialorderState == 1 || value.SpecialorderState == 2) {
              that.SfcBouncePay(value.orderNumber, value.money);

            } else {
              that.CancelSfcOrder1(value.orderNumber);
              uni.hideLoading();
            }
          }
        },
        fail: function fail(res) {
          uni.showToast({
            title: '网络连接失败',
            icon: 'none' });

        } });

    },
    //-------------------------顺风车专线代码结束-------------------------

    //-------------------------景区门票代码开始-------------------------
    //-------------------------请求订单列表-------------------------
    toFinished: function toFinished() {
      var that = this;
      uni.request({
        url: _LyfwFmq.default.Interface.spt_RequestTicketsList.value,
        method: _LyfwFmq.default.Interface.spt_RequestTicketsList.method,
        data: {
          userId: this.userInfo.userId },

        header: {
          'content-type': 'application/json' },

        success: function success(res) {
          console.log('景区门票', res);
          uni.hideLoading();
          uni.stopPullDownRefresh();
          if (res.data.status == true) {
            for (var i = 0; i < res.data.data.length; i++) {
              that.info.push(res.data.data[i]);
            }
            for (var i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].orderType == '已完成' || res.data.data[i].orderType == '已使用') {
                that.finishArr.push(res.data.data[i]);
              } else if (res.data.data[i].orderType == '进行中' || res.data.data[i].orderType == '待使用') {
                that.goingArr.push(res.data.data[i]);
              } else if (res.data.data[i].orderType == '未支付' || res.data.data[i].orderType == '待支付') {
                that.unfinishArr.push(res.data.data[i]);
              } else if (res.data.data[i].orderType == '已取消' || res.data.data[i].orderType == '已退票' || res.data.data[i].orderType == '支付超时' || res.data.data[i].orderType == '已失效') {
                that.cancelArr.push(res.data.data[i]);
              }
            }
            //执行旅游产品列表接口
            that.tp_orderListData();
          } else {
            that.tp_orderListData();
          }
        },
        fail: function fail() {
          uni.hideLoading();
          uni.stopPullDownRefresh();
        } });

    },

    //-------------------------请求旅游产品订单列表-------------------------
    tp_orderListData: function tp_orderListData() {
      var that = this;
      uni.request({
        url: _LyfwFmq.default.Interface.lyky_RequestTicketsList.value,
        method: _LyfwFmq.default.Interface.lyky_RequestTicketsList.method,
        data: {
          userId: this.userInfo.userId },


        header: {
          'content-type': 'application/json' },

        success: function success(res) {
          console.log('旅游产品', res);
          uni.hideLoading();
          uni.stopPullDownRefresh();
          if (res.data.status == true) {
            for (var i = 0; i < res.data.data.length; i++) {
              that.info.push(res.data.data[i]);
            }

            for (var i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].orderType == '已使用') {
                that.finishArr.push(res.data.data[i]);
              } else if (res.data.data[i].orderType == '待使用' || res.data.data[i].orderType == '待选车') {
                that.goingArr.push(res.data.data[i]);
              } else if (res.data.data[i].orderType == '待支付') {
                that.unfinishArr.push(res.data.data[i]);
              } else if (res.data.data[i].orderType == '已取消' || res.data.data[i].orderType == '已退票' || res.data.data[i].orderType == '支付超时' || res.data.data[i].orderType == '已失效') {
                that.cancelArr.push(res.data.data[i]);
              }
            }
          }
        },
        fail: function fail() {
          uni.hideLoading();
          uni.stopPullDownRefresh();
        } });

    },
    //-------------------------景区门票-打开二维码弹框-------------------------
    open5: function open5(e) {
      uni.showLoading({
        title: '生成中...' });

      this.orderIndexData = e;
      this.make(e);
    },
    //-------------------------景区门票-关闭二维码弹框-------------------------
    close5: function close5() {
      this.$refs.popup5.close();
    },
    //-------------------------景区门票-打开退票弹框-------------------------
    open2: function open2(e, exitindex) {
      // console.log(e)
      // console.log(exitindex)
      var that = this;
      if (exitindex == 'cs2tui') {
        // console.log(e)
        that.csRefundInfo = e;
        that.exitindex = exitindex;
        that.$refs.popup2.open();
      } else {
        that.ticketOrderNumber = e;
        that.exitindex = exitindex;
        that.$refs.popup2.open();
      }

      // console.log(this.ticketOrderNumber)
      // console.log(this.exitindex)

    },
    //-------------------------景区门票-关闭退票弹框-------------------------
    close2: function close2() {
      this.$refs.popup2.close();
    },
    //-------------------------景区门票-打开取消弹框-------------------------
    open3: function open3(e, exitindex) {
      this.ticketOrderNumber = e;
      this.exitindex = exitindex;
      this.$refs.popup3.open();
    },
    //-------------------------景区门票-关闭取消弹框-------------------------
    close3: function close3() {
      this.$refs.popup3.close();
    },
    //-------------------------景区门票-打开删除弹框-------------------------
    open4: function open4(e, exitindex) {
      this.ticketOrderNumber = e;
      this.exitindex = exitindex;
      this.$refs.popup4.open();
    },
    //-------------------------景区门票-关闭删除弹框-------------------------
    close4: function close4() {
      this.$refs.popup4.close();
    },

    //-------------------------旅游产品-选车班车-------------------------
    chooseShuttle: function chooseShuttle(e) {
      // console.log(e)
      uni.showLoading({
        title: '正在加载班次...' });

      uni.setStorage({
        key: 'chooseShuttleData',
        data: e,
        success: function success(res) {
          // console.log(res)
          if (e.startStation == '') {
            uni.navigateTo({
              url: '../../pages_LYFW/pages/LYFW/tourismProducts/tp_chooseShuttle?originIndex=0' });

            uni.hideLoading();
          } else if (e.backstartStation == '') {
            uni.navigateTo({
              url: '../../pages_LYFW/pages/LYFW/tourismProducts/tp_chooseShuttle2?originIndex=1' });

            uni.hideLoading();
          }
        },
        fail: function fail() {
          uni.showToast({
            title: '网络异常',
            icon: 'none' });

        } });


    },
    //-------------------------景区门票-详情跳转-------------------------
    details: function details(e, index) {
      if (index == '3') {
        uni.navigateTo({
          url: '../../pages_LYFW/pages/LYFW/scenicSpotTickets/orderDetails?orderNumber=' + e });


      } else if (index == '5') {
        uni.navigateTo({
          url: '../../pages_LYFW/pages/LYFW/tourismProducts/tp_orderDetails?orderNumber=' + e });

      }
    },
    //-------------------------景区门票-去支付跳转-------------------------
    topay: function topay(e, index) {
      if (index == '3') {
        uni.navigateTo({
          url: '../../pages_LYFW/pages/LYFW/scenicSpotTickets/selectivePayment?orderNumber=' + e });


      } else if (index == '5') {
        uni.navigateTo({
          url: '../../pages_LYFW/pages/LYFW/tourismProducts/tp_selectivePayment?orderNumber=' + e });

      }

    },
    //-------------------------景区门票-再次购买-------------------------
    repurchase: function repurchase(e, index) {
      if (index == '3') {
        uni.navigateTo({
          url: '../../pages_LYFW/pages/LYFW/scenicSpotTickets/ticketsDetails?ticketId=' + e });


      } else if (index == '5') {
        uni.navigateTo({
          url: '../../pages_LYFW/pages/LYFW/tourismProducts/tp_ticketsDetails?ticketId=' + e });

      }
    },
    //-------------------------景区门票-退票-------------------------
    refund: function refund() {var _this5 = this;
      uni.showLoading({
        title: '请求退票中...' });

      var that = this;
      if (this.exitindex == '2') {
        //请求费率
        // this.GetBounceChargeByOrderNumber(that.ticketOrderNumber)
        // that.ky_currentType = '客运退票';
        //先查询订单状态-->执行费率查询-->执行退票
        that.refund_getTicketPaymentInfo(that.ticketOrderNumber);
      } else if (this.exitindex == 'cs2tui') {
        //先检测订单支付状态再执行退票操作
        this.cs_refundStateCheck(that.csRefundInfo);
      } else if (that.exitindex == '3') {
        console.log('景区门票');
        console.log(this.exitindex);
        uni.request({
          url: _LyfwFmq.default.Interface.spt_BounceTickets.value,
          method: _LyfwFmq.default.Interface.spt_BounceTickets.method,
          data: {
            orderNumber: that.ticketOrderNumber },

          header: {
            'content-type': 'application/json' },

          success: function success(e) {
            console.log(e);
            if (e.data.status == false) {
              uni.hideLoading();
              uni.showToast({
                title: '退票失败，服务器异常，请联系客服！',
                icon: 'none' });

            } else if (e.data.status == true) {
              uni.hideLoading();
              uni.showToast({
                title: '退票成功' });

              _this5.close2();
              _this5.toFinished();
            }

          },
          fail: function fail() {
            uni.showToast({
              title: '退票失败，网络异常',
              icon: 'none' });

            uni.hideLoading();
          } });

      } else if (this.exitindex == '5') {
        console.log('旅游产品');
        uni.request({
          url: _LyfwFmq.default.Interface.lyky_BounceTickets.value,
          method: _LyfwFmq.default.Interface.lyky_BounceTickets.method,
          data: {
            orderNumber: that.ticketOrderNumber },

          header: {
            'content-type': 'application/json' },

          success: function success(e) {
            console.log(e);
            if (e.data.status == false) {
              uni.hideLoading();
              uni.showToast({
                title: '退票失败，服务器异常，请联系客服！',
                icon: 'none' });

            } else if (e.data.status == true) {
              uni.hideLoading();
              uni.showToast({
                title: '退票成功' });

              _this5.close2();
              _this5.toFinished();
            }

          },
          fail: function fail() {
            uni.showToast({
              title: '退票失败，网络异常',
              icon: 'none' });

            uni.hideLoading();
          } });

      }


    },

    //-------------------------景区门票-取消-------------------------
    cancel: function cancel() {var _this6 = this;
      if (this.exitindex == '3') {
        uni.request({
          url: _LyfwFmq.default.Interface.spt_CancelTickets.value,
          method: _LyfwFmq.default.Interface.spt_CancelTickets.method,
          data: {
            orderNumber: this.ticketOrderNumber },

          header: {
            'content-type': 'application/json' },

          success: function success(e) {
            // console.log(e)
            if (e.data.msg == '订单取消成功') {
              uni.showToast({
                title: '订单取消成功',
                icon: 'none' });

              _this6.close3();
              _this6.toFinished();
            } else if (e.data.msg == '订单取消失败') {
              uni.showToast({
                title: '订单取消失败',
                icon: 'none' });

              _this6.close3();
              _this6.toFinished();
            }
          },
          fail: function fail() {
            uni.showToast({
              title: '取消失败！请检查网络状态',
              icon: 'none',
              duration: 1500 });

          } });

      } else if (this.exitindex == '4') {
        console.log(this.ticketOrderNumber);
        uni.request({
          url: _bcfw.default.Interface.spt_CancelTickets.value,
          method: _bcfw.default.Interface.spt_CancelTickets.method,
          data: {
            or_number: this.ticketOrderNumber },

          header: {
            'content-type': 'application/json' },

          success: function success(e) {
            console.log(e);
            if (e.data.status == true) {
              uni.showToast({
                title: '订单取消成功',
                icon: 'none' });

              _this6.close3();
              _this6.toFinished();
            } else if (e.data.status == false) {
              uni.showToast({
                title: '订单取消失败',
                icon: 'none' });

              _this6.close3();
              _this6.toFinished();
            }
          },
          fail: function fail() {
            uni.showToast({
              title: '取消失败！请检查网络状态',
              icon: 'none',
              duration: 1500 });

          } });

      } else if (this.exitindex == '2') {//客运取消
        // this.keYunCancelTicket(this.ticketOrderNumber);
        //客运取消之前先检测当前车票状态
        this.cancel_getTicketPaymentInfo(this.ticketOrderNumber);
      } else if (this.exitindex == 'cs2') {//定制巴士取消
        this.Cs_cancelStateCheck(this.ticketOrderNumber);
      } else if (this.exitindex == '5') {
        uni.request({
          url: _LyfwFmq.default.Interface.lyky_CancelTickets.value,
          method: _LyfwFmq.default.Interface.lyky_CancelTickets.method,
          data: {
            orderNumber: this.ticketOrderNumber },

          header: {
            'content-type': 'application/json' },

          success: function success(e) {
            // console.log(e)
            if (e.data.msg == '订单取消成功') {
              uni.showToast({
                title: '订单取消成功',
                icon: 'none' });

              _this6.close3();
              _this6.toFinished();
            } else if (e.data.msg == '订单取消失败') {
              uni.showToast({
                title: '订单取消失败',
                icon: 'none' });

              _this6.close3();
              _this6.toFinished();
            }
          },
          fail: function fail() {
            uni.showToast({
              title: '取消失败！请检查网络状态',
              icon: 'none',
              duration: 1500 });

          } });

      }
    },

    //-------------------------景区门票-删除-------------------------
    del: function del() {var _this7 = this;
      if (this.exitindex == '3') {
        uni.request({
          url: _LyfwFmq.default.Interface.spt_DeleteTickets.value,
          method: _LyfwFmq.default.Interface.spt_DeleteTickets.method,
          data: {
            orderNumber: this.ticketOrderNumber },

          header: {
            'content-type': 'application/json' },

          success: function success(e) {
            // console.log(e)
            uni.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 1500 });

            _this7.close4();
            _this7.toFinished();
          },
          fail: function fail() {
            uni.showToast({
              title: '删除失败！订单已删除',
              icon: 'none',
              duration: 1500 });

          } });

      } else if (this.exitindex == '4') {
        uni.request({
          url: _bcfw.default.Interface.spt_DeleteTickets.value,
          method: _bcfw.default.Interface.spt_DeleteTickets.method,
          data: {
            or_number: this.ticketOrderNumber },

          header: {
            'content-type': 'application/json' },

          success: function success(e) {
            // console.log(e)
            uni.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 1500 });

            _this7.close4();
            _this7.toFinished();
          },
          fail: function fail() {
            uni.showToast({
              title: '删除失败！订单已删除',
              icon: 'none',
              duration: 1500 });

          } });

      } else if (this.exitindex == '5') {
        uni.request({
          url: _LyfwFmq.default.Interface.lyky_DeleteTickets.value,
          method: _LyfwFmq.default.Interface.lyky_DeleteTickets.method,
          data: {
            orderNumber: this.ticketOrderNumber },

          header: {
            'content-type': 'application/json' },

          success: function success(e) {
            // console.log(e)
            uni.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 1500 });

            _this7.close4();
            _this7.toFinished();
          },
          fail: function fail() {
            uni.showToast({
              title: '删除失败！订单已删除',
              icon: 'none',
              duration: 1500 });

          } });

      }

    },

    //-------------------------生成二维码-------------------------
    make: function make(e) {
      console.log(e);
      _uqrcode.default.make({
        canvasId: 'qrcode2',
        componentInstance: this,
        text: e.orderTicketNumber,
        size: 160,
        margin: 10,
        backgroundColor: '#ffffff',
        foregroundColor: '#000000',
        correctLevel: _uqrcode.default.defaults.correctLevel });

      uni.hideLoading();
      this.$refs.popup5.open();
    },
    //-------------------------景区门票代码结束-------------------------

    detail: function detail(item) {
      if (item == 1) {
        uni.navigateTo({
          url: '/pages/order/OrderDetail' });

      }
    },

    going: function going(item) {
      // console.log(item)
      var state = this.taxiOrderState(item.state);
      // console.log(state)
      if (item.vehicleType == '出租车') {
        if (item.state == '0' || item.state == '1' || item.state == '2' || item.state == '3' || item.state == '4') {
          uni.navigateTo({
            url: '../../pages_CZC/pages/CZC/CallAndDrive?orderNumber=' + item.orderNumber });

        } else {
          uni.navigateTo({
            url: '/pages/order/OrderDetail?orderNumber=' + item.orderNumber });

        }
      }
    },
    czcComplaint: function czcComplaint(item) {
      console.log(item);
      if (item.title == '出租车-专线') {
        uni.navigateTo({
          url: 'complaint?tsTitle=专线车&tsData=' + item.driverName + '&orderNumber=' + item.orderNumber });

      }
      if (item.title == '出租车-顺风车') {
        uni.navigateTo({
          url: 'complaint?tsTitle=顺风车&tsData=' + item.driverName + '&orderNumber=' + item.orderNumber });

      }
      if (item.vehicleType == '出租车') {
        uni.navigateTo({
          url: 'complaint?tsTitle=出租车&tsData=' + item.driverName + '&orderNumber=' + item.orderNumber });

      }
    },

    //------------------------------------------------跳转投诉--------------------------------------------
    czcComplaint2: function czcComplaint2(item) {
      console.log(item);
      if (item.or_class == '包车-定制') {
        uni.navigateTo({
          url: '../../pages_GRZX/pages/GRZX/gz_complaintsPage?or_entrance=1&or_class=包车-定制&or_name=' + item.cm_driverName + '&or_nameId=' + item.or_number });

      }
      if (item.or_class == '包车-专线') {
        uni.navigateTo({
          url: '../../pages_GRZX/pages/GRZX/gz_complaintsPage?or_entrance=1&or_class=包车-专线&or_name=' + item.cm_driverName + '&or_nameId=' + item.or_number });

      }
    },
    //-------------------包车订单添加-------------------------
    getArrayInfo: function getArrayInfo() {
      var that = this;
      uni.request({
        url: _bcfw.default.Interface.spt_RequestTicketsList.value,
        method: _bcfw.default.Interface.spt_RequestTicketsList.method,
        data: {
          userId: this.userInfo.userId },


        header: {
          'content-type': 'application/json' },

        success: function success(res) {
          console.log('包车服务', res);
          uni.hideLoading();
          uni.stopPullDownRefresh();
          if (res.data.msg == '订单查询完成') {
            for (var i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].or_Type == '6' || res.data.data[i].or_Type == '9' || res.data.data[i].or_Type ==
              '12') {} else {
                that.info.push(res.data.data[i]);
              }

            }
            if (res.data.data !== '') {
              for (var i = 0; i < res.data.data.length; i++) {
                if (res.data.data[i].or_Type == '13') {
                  that.finishArr.push(res.data.data[i]);
                } else if (res.data.data[i].or_Type == '0' || res.data.data[i].or_Type == '1' || res.data.data[i].or_type ==
                '2' || res.data.data[i].or_type ==
                '3' || res.data.data[i].or_Type == '4' || res.data.data[i].or_Type == '10' || res.data.data[i].or_Type ==
                '11') {
                  that.goingArr.push(res.data.data[i]);
                } else if (res.data.data[i].or_Type == '5') {
                  that.unfinishArr.push(res.data.data[i]);
                } else if (res.data.data[i].or_Type == '8' || res.data.data[i].or_Type == '7') {
                  that.cancelArr.push(res.data.data[i]);
                }
              }
            }
          }
        },
        fail: function fail() {
          uni.hideLoading();
          uni.stopPullDownRefresh();
        } });

    },
    //-------------------------拨打电话-------------------------
    tel: function tel(e) {
      uni.makePhoneCall({
        phoneNumber: e });

    },
    //-------------------------包车-详情跳转-------------------------
    details2: function details2(e) {
      uni.navigateTo({
        url: '../../pages_BCFW/pages/BCFW/bf_charterMap?or_number=' + JSON.stringify(e) });

    },
    //-------------------------包车-去支付-------------------------
    topay2: function topay2(e) {
      uni.navigateTo({
        url: '../../pages_BCFW/pages/BCFW/charteredBusPayment?or_number=' + JSON.stringify(e) + '&&state=1' });

    },
    //-------------------------包车-去支付-------------------------
    topay3: function topay3(e) {
      uni.navigateTo({
        url: '../../pages_BCFW/pages/BCFW/balacePayment?or_number=' + JSON.stringify(e) });

    },
    //-------------------------判断订单状态-------------------------
    getBCstate: function getBCstate(param) {
      if (param == '1') {
        return '已接单';
      } else if (param == '0') {
        return '等待接单';
      } else if (param == '2') {
        return '已出发';
      } else if (param == '3') {
        return '司机已到出发地';
      } else if (param == '4') {
        return '进行中';
      } else if (param == '5') {
        return '待支付';
      } else if (param == '10') {
        return '到达目的地';
      } else if (param == '8' || param == '7') {
        return '已取消';
      } else if (param == '13') {
        return '已完成';
      } else if (param == '11') {
        return '待补款';
      }
    },
    getCurrent: function getCurrent() {
      var that = this;
      uni.getStorage({
        key: 'currentNum',
        success: function success(res) {
          that.current = res.data;
          console.log(that.current, "that.current");
          uni.removeStorageSync('currentNum');
        },
        fail: function fail() {
          that.current = 0;
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 291:
/*!*******************************************************************************!*\
  !*** D:/UAD/zhcx/pages/order/OrderList.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Software_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Software/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./OrderList.vue?vue&type=style&index=0&lang=scss& */ 292);
/* harmony import */ var _Software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Software_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Software_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Software_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Software_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Software_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Software_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_OrderList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 292:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/UAD/zhcx/pages/order/OrderList.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[283,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/OrderList.js.map