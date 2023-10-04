"use strict";(self.webpackChunk_wintercms_wn_backend_module=self.webpackChunk_wintercms_wn_backend_module||[]).push([[743],{595:function(e,i,t){var a=t(471);const o={class:"input-group"},d=["name"],n={key:0,class:"aim-modal aim-open"},l={class:"aim-modal--content"},r={class:"aim-modal--header"},c={class:"aim-modal--header-logo-area"},s={class:"aim-modal--header-logo-title"},m={class:"aim-modal--body"},p={class:"aim-modal--sidebar"},b={class:"aim-modal--sidebar-tabs"},u=["onClick"],v={class:"aim-sidebar-preview"},h={class:"aim-icon-item"},f={class:"aim-icon-item-inner"},x={class:"aim-icon-item-name"},g={class:"aim-modal--icon-preview-wrap"},w={class:"aim-modal--icon-search"},k=(e=>((0,a.pushScopeId)("data-v-5314cddb"),e=e(),(0,a.popScopeId)(),e))((()=>(0,a.createElementVNode)("i",{class:"icon-search"},null,-1))),y={class:"aim-modal--icon-preview-inner"},V={class:"aim-modal--icon-preview"},E=["onClick"],N={class:"aim-icon-item-inner"},P={class:"aim-icon-item-name"},z={class:"form-buttons normalized aim-modal--footer"};var O={inheritAttrs:!1,props:["label","propValue","name","fontLibraries"],data(){let e=this.propValue,i=e??"";const t=[{id:"all",title:"All Icons",icon:"fas icon-star-of-life",link:"all"}],a=[],o=[];return this.fontLibraries.forEach((e=>{t.push({id:e.id,title:e.title,icon:e.listicon,link:e}),a.push(e.prefix),o.push(...e.icons)})),-1===o.indexOf(e)&&(i=o[0]??""),{modelValue:e,activeGlyph:i,filterText:"",isVisible:!1,activeTab:t[0],prefixes:a,allGlyphs:o,tabs:t}},computed:{glyphs:{get(){let e=[];if(e="all"!==this.activeTab.id?this.activeTab.link.icons:this.allGlyphs,""!==this.filterText){const i=this.filterText.toLowerCase();e=e.filter((e=>e.includes(i)))}return e}}},methods:{setActiveGlyph(e){this.activeGlyph=e},isActiveGlyph(e){return this.activeGlyph===e},isActiveTab(e){return e===this.activeTab.id},setActiveTab(e){this.activeTab=e},getGlyphName:e=>e.replace(/f.. icon-/g,"").replaceAll("-"," "),insert(){this.modelValue=this.activeGlyph,this.isVisible=!1},togglePicker(){this.isVisible=!this.isVisible},closePicker(){this.isVisible=!1}}},C=t(62),A=t.n(C),T=t(780),j={insert:"head",singleton:!1};A()(T.Z,j),T.Z.locals;const S=(0,t(407).Z)(O,[["render",function(e,i,t,O,C,A){return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createElementVNode)("div",o,[(0,a.createElementVNode)("span",{class:"input-group-addon",onClick:i[0]||(i[0]=function(){return A.togglePicker&&A.togglePicker(...arguments)}),style:{cursor:"pointer"}},[(0,a.createElementVNode)("i",{class:(0,a.normalizeClass)(C.modelValue)},null,2)]),(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",class:"form-control","onUpdate:modelValue":i[1]||(i[1]=e=>C.modelValue=e),name:t.name,onClick:i[2]||(i[2]=function(){return A.togglePicker&&A.togglePicker(...arguments)})},null,8,d),[[a.vModelText,C.modelValue]])]),C.isVisible?((0,a.openBlock)(),(0,a.createElementBlock)("div",n,[(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("span",s,(0,a.toDisplayString)(t.label),1)])]),(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("div",b,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(C.tabs,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:(0,a.normalizeClass)(["aim-modal--sidebar-tab-item",{"aesthetic-active":A.isActiveTab(e.id)}]),"data-library-id":"all",key:e.id,onClick:i=>A.setActiveTab(e)},[(0,a.createElementVNode)("i",{class:(0,a.normalizeClass)(e.icon)},null,2),(0,a.createElementVNode)("span",null,(0,a.toDisplayString)(e.title),1)],10,u)))),128))]),(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("div",h,[(0,a.createElementVNode)("div",f,[(0,a.createElementVNode)("i",{class:(0,a.normalizeClass)(C.activeGlyph)},null,2),(0,a.createElementVNode)("div",x,(0,a.toDisplayString)(A.getGlyphName(C.activeGlyph)),1)])])])]),(0,a.createElementVNode)("div",g,[(0,a.createElementVNode)("div",w,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":i[3]||(i[3]=e=>C.filterText=e),placeholder:"Filter by name..."},null,512),[[a.vModelText,C.filterText]]),k]),(0,a.createElementVNode)("div",y,[(0,a.createElementVNode)("div",V,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(A.glyphs,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{class:(0,a.normalizeClass)(["aim-icon-item",{"aesthetic-selected":A.isActiveGlyph(e)}]),key:e,onClick:i=>A.setActiveGlyph(e)},[(0,a.createElementVNode)("div",N,[(0,a.createElementVNode)("i",{class:(0,a.normalizeClass)(e)},null,2),(0,a.createElementVNode)("div",P,(0,a.toDisplayString)(A.getGlyphName(e)),1)])],10,E)))),128))])])])]),(0,a.createElementVNode)("div",z,[(0,a.createElementVNode)("button",{class:"btn btn-primary aim-insert-icon-button",onClick:i[4]||(i[4]=function(){return A.insert&&A.insert(...arguments)})},"Insert"),(0,a.createElementVNode)("button",{class:"btn btn-secondary no-margin-right",onClick:i[5]||(i[5]=function(){return A.closePicker&&A.closePicker(...arguments)})},"Close")])])])):(0,a.createCommentVNode)("",!0)],64)}],["__scopeId","data-v-5314cddb"]]);var G=S;function B(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function D(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?B(Object(t),!0).forEach((function(i){_(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function _(e,i,t){return(i=function(e){var i=function(e,i){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,i||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"==typeof i?i:String(i)}(i))in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}(e=>{class i extends e.PluginBase{construct(e){this.element=e,this.events={click:()=>this.showPicker()},this.iconPickerApp=null,this.input=e.querySelector("input"),this.attachEvents()}traits(){return["Configurable"]}defaults(){return{eventHandler:null}}attachEvents(){this.element.querySelector(".input-group").addEventListener("click",this.events.click)}destruct(){this.iconPickerApp&&(this.iconPickerApp.unmount(),this.iconPickerApp=null),this.element.querySelector(".input-group").removeEventListener("click",this.events.click),this.element=null}showPicker(){this.snowboard.request(this.input,this.getConfig("eventHandler"),{success:e=>{this.iconPickerApp=(0,a.createApp)(G,D(D({},this.element.dataset),{},{fontLibraries:JSON.parse(e.result)})).mount(this.element),this.iconPickerApp.togglePicker()}})}}e.addPlugin("backend.formwidgets.iconpicker",i),e["backend.ui.widgetHandler"]().register("iconpicker","backend.formwidgets.iconpicker")})(window.Snowboard)},780:function(e,i,t){var a=t(609),o=t.n(a)()((function(e){return e[1]}));o.push([e.id,'.vue3-icon-picker[data-v-5314cddb]{cursor:pointer}.input-group i[data-v-5314cddb]{display:block;min-width:14px}button.select-icon[data-v-5314cddb]{background-color:#70b2dc;border-radius:5px;cursor:pointer;font-size:22px;padding:20px}.icon-picker-wrap ul[data-v-5314cddb]{display:inline-flex;list-style:none;margin:0;padding:0}.icon-picker-wrap ul li[data-v-5314cddb]{border:2px solid #ddd;cursor:pointer;font-size:20px;line-height:1;padding:5px}.icon-picker-wrap ul li i[data-v-5314cddb]{font-size:68px;line-height:1;margin:0}.icon-picker-wrap ul li[data-v-5314cddb]:nth-child(2){border-left:0}.aim-close[data-v-5314cddb]{opacity:0;visibility:hidden}.aim-close[data-v-5314cddb],.aim-open[data-v-5314cddb]{transition:all .4s ease-in-out}.aim-open[data-v-5314cddb]{opacity:1;visibility:visible}.aim-modal[data-v-5314cddb]{align-items:center;background-color:rgba(0,0,0,.2);bottom:0;display:flex;height:100%;left:0;position:fixed;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;z-index:9999}.aim-modal .aim-modal--content[data-v-5314cddb]{background-color:#f1f3f5;border-radius:3px;box-shadow:2px 8px 23px 3px rgba(0,0,0,.2);font-family:Roboto,Arial,Helvetica,Verdana,sans-serif;left:0;margin:auto;overflow:hidden;position:absolute;right:0;width:100%}.aim-modal .aim-modal--header[data-v-5314cddb]{align-items:center;background-color:#fff;box-shadow:0 0 8px rgba(0,0,0,.1);color:#405261;display:flex;font-size:15px;font-weight:600;justify-content:space-between;padding:15px;position:relative;z-index:1}.aim-modal--body[data-v-5314cddb]{box-sizing:border-box;display:flex;font-size:12px;height:700px;line-height:1.5;max-height:85vh;min-height:50px;overflow:auto;padding:0}.aim-modal--sidebar[data-v-5314cddb]{background-color:hsla(0,0%,100%,.3);display:flex;flex-flow:column;flex-shrink:0;width:25%}.aim-modal--sidebar-tabs[data-v-5314cddb]{margin-top:30px}.aim-modal--sidebar-tab-item[data-v-5314cddb]{align-items:center;color:#6d7882;cursor:pointer;display:flex;font-size:14px;padding:15px 0 15px 45px;position:relative;text-align:left;text-transform:capitalize}.aim-modal--sidebar-tab-item i[data-v-5314cddb]{color:#a4afb7;font-size:20px;padding-right:15px}.aim-modal--sidebar-tab-item.aesthetic-active[data-v-5314cddb]{background-color:#fff;box-shadow:0 6px 20px 0 rgba(0,0,0,.1)}.aim-modal--sidebar-tab-item.aesthetic-active[data-v-5314cddb]:after{background-color:#4ea5e0;content:"";height:100%;left:0;position:absolute;top:0;width:5px}.aim-modal--sidebar-tab-item.aesthetic-active i[data-v-5314cddb]{color:#4ea5e0}.aim-modal--icon-preview-wrap[data-v-5314cddb]{display:flex;flex-direction:column;padding:30px 20px 0;width:75%}.aim-modal--icon-preview-inner[data-v-5314cddb]{margin:25px -15px 0;overflow:auto;padding:0 15px 15px}.aim-modal--icon-preview[data-v-5314cddb]{grid-gap:10px;display:grid;grid-template-columns:repeat(4,1fr);margin:10px 0}.aim-modal--icon-search[data-v-5314cddb]{position:relative}.aim-modal--icon-search input[data-v-5314cddb]{background-color:#fff;border:none;padding:8px 15px;width:100%}.aim-modal--icon-search input[data-v-5314cddb]::-moz-placeholder{font-style:italic}.aim-modal--icon-search input[data-v-5314cddb]::placeholder{font-style:italic}.aim-modal--icon-search i[data-v-5314cddb]{position:absolute;right:15px;top:50%;transform:translateY(-50%)}.aim-icon-item[data-v-5314cddb]{background-color:#fff;border-radius:3px;box-shadow:0 1px 12px rgba(0,0,0,.05);cursor:pointer;overflow:hidden;padding:10px;position:relative;transition:all .3s}.aim-icon-item[data-v-5314cddb]:hover{box-shadow:0 1px 14px rgba(0,0,0,.16)}.aim-icon-item.aesthetic-selected[data-v-5314cddb]{box-shadow:0 1px 12px rgba(0,0,0,.05),0 0 0 3px #4ea5e0}.aim-icon-item-inner[data-v-5314cddb]{align-items:center;display:flex;flex-direction:column;padding:1px}.aim-icon-item-inner i[data-v-5314cddb]{color:#95a5a6;font-size:30px;padding:20px}.aim-icon-item-name[data-v-5314cddb]{color:#666;font-size:13px;max-width:100%;overflow:hidden;padding-top:15px;text-align:center;text-overflow:ellipsis;text-transform:capitalize;white-space:nowrap}.aim-modal .aim-modal--footer[data-v-5314cddb]{background-color:#fff;border:none;box-shadow:0 0 8px rgba(0,0,0,.1);display:none;display:flex;justify-content:flex-end;padding:20px;position:relative;text-align:center}.aim-modal .aim-modal--footer .aesthetic-button[data-v-5314cddb]{height:40px;margin-left:5px}.aim-modal .aim-modal--footer .aesthetic-button-success[data-v-5314cddb]{color:#fff;font-size:15px;padding:12px 36px;width:auto}.aim-modal .aim-modal--footer .aesthetic-button-success[data-v-5314cddb]:hover{background-color:#39b54a}.aim-sidebar-preview[data-v-5314cddb]{margin-top:auto}.aim-sidebar-preview .aim-icon-item-inner i[data-v-5314cddb]{font-size:110px;padding-top:10px}.aim-sidebar-preview .aim-icon-item-name[data-v-5314cddb]{color:#666;font-size:16px;padding:0 0 15px}@media (max-width:1439px){.aim-modal .aim-modal--content[data-v-5314cddb]{max-width:990px}}@media (min-width:1440px){.aim-modal .aim-modal--content[data-v-5314cddb]{max-width:1200px}}@media (max-width:479px){.aim-modal--icon-preview-wrap[data-v-5314cddb]{width:100%}}@media (max-width:1024px){.aim-modal--icon-preview[data-v-5314cddb]{grid-template-columns:repeat(3,1fr)}}@media (max-width:767px){.aim-sidebar-preview .aim-icon-item-inner i[data-v-5314cddb]{font-size:70px}.aim-modal--icon-preview[data-v-5314cddb]{grid-template-columns:repeat(2,1fr)}}@media (max-width:479px){.aim-modal--sidebar[data-v-5314cddb]{display:none}}@media (max-width:1439px){.aim-modal--sidebar-tab-item[data-v-5314cddb]{font-size:11px;padding:15px 15px 15px 25px}.aim-modal--sidebar-tab-item i[data-v-5314cddb]{font-size:15px}}@media (max-width:1024px){.aim-modal--sidebar-tab-item i[data-v-5314cddb]{display:none}}',""]),i.Z=o}},function(e){e.O(0,[101],(function(){return i=595,e(e.s=i);var i}));e.O()}]);