"use strict";(self.webpackChunk_wintercms_wn_backend_module=self.webpackChunk_wintercms_wn_backend_module||[]).push([[429],{449:function(e,t,i){var n=i(171);(e=>{class t extends e.Singleton{construct(){this.widget=null}listens(){return{"backend.widget.initialized":"onWidgetInitialized"}}onWidgetInitialized(e,t){e===document.getElementById("CodeEditor-formEditorPreview-_editor_preview")&&(this.widget=t,this.enablePreferences())}enablePreferences(){(0,n.M)("change");Object.entries({show_gutter:"showGutter",highlight_active_line:"highlightActiveLine",use_hard_tabs:"!useSoftTabs",display_indent_guides:"displayIndentGuides",show_invisibles:"showInvisibles",show_print_margin:"showPrintMargin",show_minimap:"showMinimap",enable_folding:"codeFolding",bracket_colors:"bracketColors",show_colors:"showColors"}).forEach((e=>{let[t,i]=e;this.element(t).addEventListener("change",(e=>{this.widget.setConfig(i.replace(/^!/,""),/^!/.test(i)?!e.target.checked:e.target.checked)}))})),this.element("theme").addEventListener("$change",(e=>{this.widget.loadTheme(e.target.value)})),this.element("font_size").addEventListener("$change",(e=>{this.widget.setConfig("fontSize",e.target.value)})),this.element("tab_size").addEventListener("$change",(e=>{this.widget.setConfig("tabSize",e.target.value)})),this.element("word_wrap").addEventListener("$change",(e=>{const{value:t}=e.target;switch(t){case"off":this.widget.setConfig("wordWrap",!1);break;case"fluid":this.widget.setConfig("wordWrap","fluid");break;default:this.widget.setConfig("wordWrap",parseInt(t,10))}})),document.querySelectorAll("[data-switch-lang]").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const i=e.dataset.switchLang,n=document.querySelector(`[data-lang-snippet="${i}"]`);n&&(this.widget.setValue(n.textContent.trim()),this.widget.setLanguage(i))}))})),this.widget.events.once("create",(()=>{const e=new MouseEvent("click");document.querySelector('[data-switch-lang="css"]').dispatchEvent(e)}))}element(e){return document.getElementById(`Form-field-Preference-editor_${e}`)}}e.addPlugin("backend.preferences",t)})(window.Snowboard)}},function(e){e.O(0,[810],(function(){return t=449,e(e.s=t);var t}));e.O()}]);