"use strict";(self.webpackChunkp14_dropdown_lib_alternance=self.webpackChunkp14_dropdown_lib_alternance||[]).push([[178],{"./src/stories/DropDown.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PlayGround:()=>PlayGround,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DropDown_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DropDown=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/DropDown/DropDown.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(DropDown.Z,options),DropDown.Z&&DropDown.Z.locals&&DropDown.Z.locals;var index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_require__("./node_modules/@fortawesome/fontawesome-free/css/all.css");var DropDown_DropDown_DropDown=function(param){var options=param.options,id=param.id,SelectedValue=param.SelectedValue,dropDownOpenId=param.dropDownOpenId,size=param.size,forceCloseDropdown=param.forceCloseDropdown,_useState=_sliced_to_array((0,react.useState)(""),2),dropdownValue=_useState[0],setDropDownValue=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState1[0],setIsOpen=_useState1[1];(0,react.useEffect)(function(){forceCloseDropdown!==id&&setIsOpen(!1)},[forceCloseDropdown]);var toggle=function(){setIsOpen(function(prevState){var newState=!prevState;return!0===newState&&dropDownOpenId(id),newState})},handlerSelectDropDown=function(event){var valueChoose=event.currentTarget.textContent;valueChoose&&(SelectedValue({id:id,value:valueChoose}),setDropDownValue(valueChoose),toggle())};return react.createElement("div",{className:"dropDown__container ".concat(size||"")},react.createElement("div",{className:"dropDown__container__input ".concat(isOpen?"borderBottomNone":""),onClick:toggle},react.createElement("div",{className:"dropDown__container__input--value",id:id},react.createElement("p",null,dropdownValue),react.createElement(index_es.G,{icon:isOpen?free_solid_svg_icons.ptq:free_solid_svg_icons.mTx}))),react.createElement("div",{className:"dropDown__container__options ".concat(isOpen?"supperposition":"displayNone")},react.createElement("ul",{className:"dropDown__container__options--list"},options.map(function(param){var id=param.id,name=param.name;return react.createElement("li",{onClick:handlerSelectDropDown,key:id},name)}))))};try{DropDown_DropDown_DropDown.displayName="DropDown",DropDown_DropDown_DropDown.__docgenInfo={description:"",displayName:"DropDown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"stateData[] | departmentData[]"}},SelectedValue:{defaultValue:null,description:"",name:"SelectedValue",required:!0,type:{name:"(value: { id: string; value: string; }) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},dropDownOpenId:{defaultValue:null,description:"",name:"dropDownOpenId",required:!0,type:{name:"(id: string) => void"}},forceCloseDropdown:{defaultValue:null,description:"",name:"forceCloseDropdown",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropDown/DropDown.tsx#DropDown"]={docgenInfo:DropDown_DropDown_DropDown.__docgenInfo,name:"DropDown",path:"src/components/DropDown/DropDown.tsx#DropDown"})}catch(__react_docgen_typescript_loader_error){}let DropDown_stories={title:"Component/DropDown",component:DropDown_DropDown_DropDown,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{description:"blablabla",type:"select",options:["small","medium","large"]},description:"Set the size of the DropDown component (small, medium, or large)."},options:{description:"Set data in dropdown."},SelectedValue:{description:"Return the selected value to the parent"},id:{description:"id of the component"}}};var PlayGround={args:{options:[{id:1,name:"Première valeur"},{id:2,name:"Deuxième valeur"},{id:3,name:"Troisième valeur"},{id:4,name:"Quatrième valeur"},{id:5,name:"Cinquième valeur"},{id:6,name:"Sixième valeur"},{id:7,name:"Septième valeur"},{id:8,name:"Huitième valeur"},{id:9,name:"Neuvième valeur"}],SelectedValue:function(value){return value},size:"medium",id:"1",dropDownOpenId:function(id){return id},forceCloseDropdown:""}};PlayGround.parameters={...PlayGround.parameters,docs:{...PlayGround.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: optionsForDropDown,\n    SelectedValue: (value: {\n      id: string;\n      value: string;\n    }) => {\n      return value;\n    },\n    size: 'medium',\n    id: '1',\n    dropDownOpenId: (id: string) => id,\n    forceCloseDropdown: ''\n  }\n}",...PlayGround.parameters?.docs?.source}}};let __namedExportsOrder=["PlayGround"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/DropDown/DropDown.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.displayNone {
  display: none;
}

.dropDown__container {
  width: 103%;
  position: relative;
  margin-bottom: 1rem;
}

.borderBottomNone {
  border-bottom: none;
}
.supperposition {
  z-index: 1;
}
.large {
  width: 20rem;
}
.medium {
  width: 15rem;
}
.small {
  width: 10rem;
}

.dropDown__container__input {
  border: 1px solid rgb(118, 118, 118);
  height: 1.63rem;
  padding: 1px 0.5rem 1px 0.5rem;
  border-radius: 2px;
  cursor: pointer;
}

.dropDown__container__input--value {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.dropDown__container__options {
  background-color: white;
  position: absolute;
  border: 1px solid rgb(113, 113, 113);
  width: 99.4%;
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;
  max-height: 250px;
}

.dropDown__container__options--list {
  padding: 0;
  margin: 0;
}

.dropDown__container__options--list > li {
  transition-duration: 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  border-top: 1px solid black;
  padding: 7px 0px 7px 0px;
  cursor: pointer;
}

.dropDown__container__options--list > li:hover {
  transition-duration: 0.6s;
  background-color: #87ceeb;
}

.dropDown__container__options--list > li:first-child {
  border: none;
}
`,"",{version:3,sources:["webpack://./src/components/DropDown/DropDown.css"],names:[],mappings:"AAAA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,oCAAoC;EACpC,YAAY;EACZ,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,2BAA2B;EAC3B,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd",sourcesContent:[".displayNone {\n  display: none;\n}\n\n.dropDown__container {\n  width: 103%;\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.borderBottomNone {\n  border-bottom: none;\n}\n.supperposition {\n  z-index: 1;\n}\n.large {\n  width: 20rem;\n}\n.medium {\n  width: 15rem;\n}\n.small {\n  width: 10rem;\n}\n\n.dropDown__container__input {\n  border: 1px solid rgb(118, 118, 118);\n  height: 1.63rem;\n  padding: 1px 0.5rem 1px 0.5rem;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.dropDown__container__input--value {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.dropDown__container__options {\n  background-color: white;\n  position: absolute;\n  border: 1px solid rgb(113, 113, 113);\n  width: 99.4%;\n  border-radius: 0px 0px 5px 5px;\n  overflow-y: auto;\n  max-height: 250px;\n}\n\n.dropDown__container__options--list {\n  padding: 0;\n  margin: 0;\n}\n\n.dropDown__container__options--list > li {\n  transition-duration: 0.6s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  border-top: 1px solid black;\n  padding: 7px 0px 7px 0px;\n  cursor: pointer;\n}\n\n.dropDown__container__options--list > li:hover {\n  transition-duration: 0.6s;\n  background-color: #87ceeb;\n}\n\n.dropDown__container__options--list > li:first-child {\n  border: none;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=stories-DropDown-stories.71298b34.iframe.bundle.js.map