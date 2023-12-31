"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[683],{3683:function(e,t,n){n.r(t),n.d(t,{CompletionAdapter:function(){return ht},DefinitionAdapter:function(){return Et},DiagnosticsAdapter:function(){return gt},DocumentColorAdapter:function(){return jt},DocumentFormattingEditProvider:function(){return Dt},DocumentHighlightAdapter:function(){return Ct},DocumentLinkAdapter:function(){return Rt},DocumentRangeFormattingEditProvider:function(){return Pt},DocumentSymbolAdapter:function(){return St},FoldingRangeAdapter:function(){return Lt},HoverAdapter:function(){return kt},ReferenceAdapter:function(){return xt},RenameAdapter:function(){return It},SelectionRangeAdapter:function(){return Ot},WorkerManager:function(){return se},fromPosition:function(){return ft},fromRange:function(){return pt},setupMode:function(){return rn},toRange:function(){return mt},toTextEdit:function(){return _t}});var r,i,o=n(3891),a=Object.defineProperty,s=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,u=Object.prototype.hasOwnProperty,d=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of c(t))u.call(e,i)||i===n||a(e,i,{get:()=>t[i],enumerable:!(r=s(t,i))||r.enumerable});return e},g={};
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/d(g,r=o,"default"),i&&d(i,r,"default");var l,h,f,p,m,v,_,k,b,w,C,y,E,A,x,I,S,T,R,D,P,M,j,L,F,O,N,W,U,V,H,K,z,q,X,B,$,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=g.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(h=l||(l={})).MIN_VALUE=-2147483648,h.MAX_VALUE=2147483647,(p=f||(f={})).MIN_VALUE=0,p.MAX_VALUE=2147483647,(v=m||(m={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=f.MAX_VALUE),t===Number.MAX_VALUE&&(t=f.MAX_VALUE),{line:e,character:t}},v.is=function(e){var t=e;return st.objectLiteral(t)&&st.uinteger(t.line)&&st.uinteger(t.character)},(k=_||(_={})).create=function(e,t,n,r){if(st.uinteger(e)&&st.uinteger(t)&&st.uinteger(n)&&st.uinteger(r))return{start:m.create(e,t),end:m.create(n,r)};if(m.is(e)&&m.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},k.is=function(e){var t=e;return st.objectLiteral(t)&&m.is(t.start)&&m.is(t.end)},(w=b||(b={})).create=function(e,t){return{uri:e,range:t}},w.is=function(e){var t=e;return st.defined(t)&&_.is(t.range)&&(st.string(t.uri)||st.undefined(t.uri))},(y=C||(C={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},y.is=function(e){var t=e;return st.defined(t)&&_.is(t.targetRange)&&st.string(t.targetUri)&&(_.is(t.targetSelectionRange)||st.undefined(t.targetSelectionRange))&&(_.is(t.originSelectionRange)||st.undefined(t.originSelectionRange))},(A=E||(E={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},A.is=function(e){var t=e;return st.numberRange(t.red,0,1)&&st.numberRange(t.green,0,1)&&st.numberRange(t.blue,0,1)&&st.numberRange(t.alpha,0,1)},(I=x||(x={})).create=function(e,t){return{range:e,color:t}},I.is=function(e){var t=e;return _.is(t.range)&&E.is(t.color)},(T=S||(S={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},T.is=function(e){var t=e;return st.string(t.label)&&(st.undefined(t.textEdit)||q.is(t))&&(st.undefined(t.additionalTextEdits)||st.typedArray(t.additionalTextEdits,q.is))},(D=R||(R={})).Comment="comment",D.Imports="imports",D.Region="region",(M=P||(P={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return st.defined(n)&&(o.startCharacter=n),st.defined(r)&&(o.endCharacter=r),st.defined(i)&&(o.kind=i),o},M.is=function(e){var t=e;return st.uinteger(t.startLine)&&st.uinteger(t.startLine)&&(st.undefined(t.startCharacter)||st.uinteger(t.startCharacter))&&(st.undefined(t.endCharacter)||st.uinteger(t.endCharacter))&&(st.undefined(t.kind)||st.string(t.kind))},(L=j||(j={})).create=function(e,t){return{location:e,message:t}},L.is=function(e){var t=e;return st.defined(t)&&b.is(t.location)&&st.string(t.message)},(O=F||(F={})).Error=1,O.Warning=2,O.Information=3,O.Hint=4,(W=N||(N={})).Unnecessary=1,W.Deprecated=2,(U||(U={})).is=function(e){var t=e;return null!=t&&st.string(t.href)},(H=V||(V={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return st.defined(n)&&(a.severity=n),st.defined(r)&&(a.code=r),st.defined(i)&&(a.source=i),st.defined(o)&&(a.relatedInformation=o),a},H.is=function(e){var t,n=e;return st.defined(n)&&_.is(n.range)&&st.string(n.message)&&(st.number(n.severity)||st.undefined(n.severity))&&(st.integer(n.code)||st.string(n.code)||st.undefined(n.code))&&(st.undefined(n.codeDescription)||st.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(st.string(n.source)||st.undefined(n.source))&&(st.undefined(n.relatedInformation)||st.typedArray(n.relatedInformation,j.is))},(z=K||(K={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return st.defined(n)&&n.length>0&&(i.arguments=n),i},z.is=function(e){var t=e;return st.defined(t)&&st.string(t.title)&&st.string(t.command)},(X=q||(q={})).replace=function(e,t){return{range:e,newText:t}},X.insert=function(e,t){return{range:{start:e,end:e},newText:t}},X.del=function(e){return{range:e,newText:""}},X.is=function(e){var t=e;return st.objectLiteral(t)&&st.string(t.newText)&&_.is(t.range)},($=B||(B={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},$.is=function(e){var t=e;return void 0!==t&&st.objectLiteral(t)&&st.string(t.label)&&(st.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(st.string(t.description)||void 0===t.description)},(Q||(Q={})).is=function(e){return"string"==typeof e},(J=G||(G={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},J.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},J.del=function(e,t){return{range:e,newText:"",annotationId:t}},J.is=function(e){var t=e;return q.is(t)&&(B.is(t.annotationId)||Q.is(t.annotationId))},(Z=Y||(Y={})).create=function(e,t){return{textDocument:e,edits:t}},Z.is=function(e){var t=e;return st.defined(t)&&le.is(t.textDocument)&&Array.isArray(t.edits)},(te=ee||(ee={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},te.is=function(e){var t=e;return t&&"create"===t.kind&&st.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||st.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||st.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||Q.is(t.annotationId))},(re=ne||(ne={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},re.is=function(e){var t=e;return t&&"rename"===t.kind&&st.string(t.oldUri)&&st.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||st.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||st.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||Q.is(t.annotationId))},(oe=ie||(ie={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},oe.is=function(e){var t=e;return t&&"delete"===t.kind&&st.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||st.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||st.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||Q.is(t.annotationId))},(ae||(ae={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return st.string(e.kind)?ee.is(e)||ne.is(e)||ie.is(e):Y.is(e)})))};var ce,ue,de,ge,le,he,fe,pe,me,ve,_e,ke,be,we,Ce,ye,Ee,Ae,xe,Ie,Se,Te,Re,De,Pe,Me,je,Le,Fe,Oe,Ne,We,Ue,Ve,He,Ke,ze,qe,Xe,Be,$e,Qe,Ge,Je,Ye,Ze,et,tt,nt,rt,it,ot=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=q.insert(e,t):Q.is(n)?(i=n,r=G.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=G.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=q.replace(e,t):Q.is(n)?(i=n,r=G.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=G.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=q.del(e):Q.is(t)?(r=t,n=G.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=G.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),at=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(Q.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new at(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(Y.is(e)){var n=new ot(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new ot(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(le.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new ot(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new ot(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new at,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(B.is(t)||Q.is(t)?r=t:n=t,void 0===r?i=ee.create(e,n):(o=Q.is(r)?r:this._changeAnnotations.manage(r),i=ee.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(B.is(n)||Q.is(n)?i=n:r=n,void 0===i?o=ne.create(e,t,r):(a=Q.is(i)?i:this._changeAnnotations.manage(i),o=ne.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(B.is(t)||Q.is(t)?r=t:n=t,void 0===r?i=ie.create(e,n):(o=Q.is(r)?r:this._changeAnnotations.manage(r),i=ie.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();(ue=ce||(ce={})).create=function(e){return{uri:e}},ue.is=function(e){var t=e;return st.defined(t)&&st.string(t.uri)},(ge=de||(de={})).create=function(e,t){return{uri:e,version:t}},ge.is=function(e){var t=e;return st.defined(t)&&st.string(t.uri)&&st.integer(t.version)},(he=le||(le={})).create=function(e,t){return{uri:e,version:t}},he.is=function(e){var t=e;return st.defined(t)&&st.string(t.uri)&&(null===t.version||st.integer(t.version))},(pe=fe||(fe={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},pe.is=function(e){var t=e;return st.defined(t)&&st.string(t.uri)&&st.string(t.languageId)&&st.integer(t.version)&&st.string(t.text)},(ve=me||(me={})).PlainText="plaintext",ve.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(me||(me={})),(_e||(_e={})).is=function(e){var t=e;return st.objectLiteral(e)&&me.is(t.kind)&&st.string(t.value)},(be=ke||(ke={})).Text=1,be.Method=2,be.Function=3,be.Constructor=4,be.Field=5,be.Variable=6,be.Class=7,be.Interface=8,be.Module=9,be.Property=10,be.Unit=11,be.Value=12,be.Enum=13,be.Keyword=14,be.Snippet=15,be.Color=16,be.File=17,be.Reference=18,be.Folder=19,be.EnumMember=20,be.Constant=21,be.Struct=22,be.Event=23,be.Operator=24,be.TypeParameter=25,(Ce=we||(we={})).PlainText=1,Ce.Snippet=2,(ye||(ye={})).Deprecated=1,(Ae=Ee||(Ee={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},Ae.is=function(e){var t=e;return t&&st.string(t.newText)&&_.is(t.insert)&&_.is(t.replace)},(Ie=xe||(xe={})).asIs=1,Ie.adjustIndentation=2,(Se||(Se={})).create=function(e){return{label:e}},(Te||(Te={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(De=Re||(Re={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},De.is=function(e){var t=e;return st.string(t)||st.objectLiteral(t)&&st.string(t.language)&&st.string(t.value)},(Pe||(Pe={})).is=function(e){var t=e;return!!t&&st.objectLiteral(t)&&(_e.is(t.contents)||Re.is(t.contents)||st.typedArray(t.contents,Re.is))&&(void 0===e.range||_.is(e.range))},(Me||(Me={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(je||(je={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return st.defined(t)&&(i.documentation=t),st.defined(n)?i.parameters=n:i.parameters=[],i},(Fe=Le||(Le={})).Text=1,Fe.Read=2,Fe.Write=3,(Oe||(Oe={})).create=function(e,t){var n={range:e};return st.number(t)&&(n.kind=t),n},(We=Ne||(Ne={})).File=1,We.Module=2,We.Namespace=3,We.Package=4,We.Class=5,We.Method=6,We.Property=7,We.Field=8,We.Constructor=9,We.Enum=10,We.Interface=11,We.Function=12,We.Variable=13,We.Constant=14,We.String=15,We.Number=16,We.Boolean=17,We.Array=18,We.Object=19,We.Key=20,We.Null=21,We.EnumMember=22,We.Struct=23,We.Event=24,We.Operator=25,We.TypeParameter=26,(Ue||(Ue={})).Deprecated=1,(Ve||(Ve={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Ke=He||(He={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Ke.is=function(e){var t=e;return t&&st.string(t.name)&&st.number(t.kind)&&_.is(t.range)&&_.is(t.selectionRange)&&(void 0===t.detail||st.string(t.detail))&&(void 0===t.deprecated||st.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(qe=ze||(ze={})).Empty="",qe.QuickFix="quickfix",qe.Refactor="refactor",qe.RefactorExtract="refactor.extract",qe.RefactorInline="refactor.inline",qe.RefactorRewrite="refactor.rewrite",qe.Source="source",qe.SourceOrganizeImports="source.organizeImports",qe.SourceFixAll="source.fixAll",(Be=Xe||(Xe={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},Be.is=function(e){var t=e;return st.defined(t)&&st.typedArray(t.diagnostics,V.is)&&(void 0===t.only||st.typedArray(t.only,st.string))},(Qe=$e||($e={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):K.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},Qe.is=function(e){var t=e;return t&&st.string(t.title)&&(void 0===t.diagnostics||st.typedArray(t.diagnostics,V.is))&&(void 0===t.kind||st.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||K.is(t.command))&&(void 0===t.isPreferred||st.boolean(t.isPreferred))&&(void 0===t.edit||ae.is(t.edit))},(Je=Ge||(Ge={})).create=function(e,t){var n={range:e};return st.defined(t)&&(n.data=t),n},Je.is=function(e){var t=e;return st.defined(t)&&_.is(t.range)&&(st.undefined(t.command)||K.is(t.command))},(Ze=Ye||(Ye={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},Ze.is=function(e){var t=e;return st.defined(t)&&st.uinteger(t.tabSize)&&st.boolean(t.insertSpaces)},(tt=et||(et={})).create=function(e,t,n){return{range:e,target:t,data:n}},tt.is=function(e){var t=e;return st.defined(t)&&_.is(t.range)&&(st.undefined(t.target)||st.string(t.target))},(rt=nt||(nt={})).create=function(e,t){return{range:e,parent:t}},rt.is=function(e){var t=e;return void 0!==t&&_.is(t.range)&&(void 0===t.parent||rt.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,c=0;a<i.length&&s<o.length;){var u=n(i[a],o[s]);e[c++]=u<=0?i[a++]:o[s++]}for(;a<i.length;)e[c++]=i[a++];for(;s<o.length;)e[c++]=o[s++];return e}e.create=function(e,t,n,r){return new dt(e,t,n,r)},e.is=function(e){var t=e;return!!(st.defined(t)&&st.string(t.uri)&&(st.undefined(t.languageId)||st.string(t.languageId))&&st.uinteger(t.lineCount)&&st.func(t.getText)&&st.func(t.positionAt)&&st.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],c=e.offsetAt(s.range.start),u=e.offsetAt(s.range.end);if(!(u<=o))throw new Error("Overlapping edit");r=r.substring(0,c)+s.newText+r.substring(u,r.length),o=c}return r}}(it||(it={}));var st,ct,ut,dt=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return m.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return m.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();ct=st||(st={}),ut=Object.prototype.toString,ct.defined=function(e){return void 0!==e},ct.undefined=function(e){return void 0===e},ct.boolean=function(e){return!0===e||!1===e},ct.string=function(e){return"[object String]"===ut.call(e)},ct.number=function(e){return"[object Number]"===ut.call(e)},ct.numberRange=function(e,t,n){return"[object Number]"===ut.call(e)&&t<=e&&e<=n},ct.integer=function(e){return"[object Number]"===ut.call(e)&&-2147483648<=e&&e<=2147483647},ct.uinteger=function(e){return"[object Number]"===ut.call(e)&&0<=e&&e<=2147483647},ct.func=function(e){return"[object Function]"===ut.call(e)},ct.objectLiteral=function(e){return null!==e&&"object"==typeof e},ct.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var gt=class{constructor(e,t,n){this._languageId=e,this._worker=t;const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{g.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(g.editor.onDidCreateModel(r)),this._disposables.push(g.editor.onWillDisposeModel(i)),this._disposables.push(g.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{g.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{g.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),g.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:lt(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=g.editor.getModel(e);i&&i.getLanguageId()===t&&g.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function lt(e){switch(e){case F.Error:return g.MarkerSeverity.Error;case F.Warning:return g.MarkerSeverity.Warning;case F.Information:return g.MarkerSeverity.Info;case F.Hint:return g.MarkerSeverity.Hint;default:return g.MarkerSeverity.Info}}var ht=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),ft(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new g.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:vt(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:mt(e.textEdit.insert),replace:mt(e.textEdit.replace)}:t.range=mt(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(_t)),e.insertTextFormat===we.Snippet&&(t.insertTextRules=g.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function ft(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function pt(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function mt(e){if(e)return new g.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function vt(e){const t=g.languages.CompletionItemKind;switch(e){case ke.Text:return t.Text;case ke.Method:return t.Method;case ke.Function:return t.Function;case ke.Constructor:return t.Constructor;case ke.Field:return t.Field;case ke.Variable:return t.Variable;case ke.Class:return t.Class;case ke.Interface:return t.Interface;case ke.Module:return t.Module;case ke.Property:return t.Property;case ke.Unit:return t.Unit;case ke.Value:return t.Value;case ke.Enum:return t.Enum;case ke.Keyword:return t.Keyword;case ke.Snippet:return t.Snippet;case ke.Color:return t.Color;case ke.File:return t.File;case ke.Reference:return t.Reference}return t.Property}function _t(e){if(e)return{range:mt(e.range),text:e.newText}}var kt=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),ft(t)))).then((e=>{if(e)return{range:mt(e.range),contents:wt(e.contents)}}))}};function bt(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function wt(e){if(e)return Array.isArray(e)?e.map(bt):[bt(e)]}var Ct=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),ft(t)))).then((e=>{if(e)return e.map((e=>({range:mt(e.range),kind:yt(e.kind)})))}))}};function yt(e){switch(e){case Le.Read:return g.languages.DocumentHighlightKind.Read;case Le.Write:return g.languages.DocumentHighlightKind.Write;case Le.Text:return g.languages.DocumentHighlightKind.Text}return g.languages.DocumentHighlightKind.Text}var Et=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),ft(t)))).then((e=>{if(e)return[At(e)]}))}};function At(e){return{uri:g.Uri.parse(e.uri),range:mt(e.range)}}var xt=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),ft(t)))).then((e=>{if(e)return e.map(At)}))}},It=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),ft(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=g.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:mt(i.range),text:i.newText}})}return{edits:t}}(e)))}};var St=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:Tt(e.kind),range:mt(e.location.range),selectionRange:mt(e.location.range),tags:[]})))}))}};function Tt(e){let t=g.languages.SymbolKind;switch(e){case Ne.File:return t.Array;case Ne.Module:return t.Module;case Ne.Namespace:return t.Namespace;case Ne.Package:return t.Package;case Ne.Class:return t.Class;case Ne.Method:return t.Method;case Ne.Property:return t.Property;case Ne.Field:return t.Field;case Ne.Constructor:return t.Constructor;case Ne.Enum:return t.Enum;case Ne.Interface:return t.Interface;case Ne.Function:return t.Function;case Ne.Variable:return t.Variable;case Ne.Constant:return t.Constant;case Ne.String:return t.String;case Ne.Number:return t.Number;case Ne.Boolean:return t.Boolean;case Ne.Array:return t.Array}return t.Function}var Rt=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:mt(e.range),url:e.target})))}}))}},Dt=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,Mt(t)).then((e=>{if(e&&0!==e.length)return e.map(_t)}))))}},Pt=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),pt(t),Mt(n)).then((e=>{if(e&&0!==e.length)return e.map(_t)}))))}};function Mt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var jt=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:mt(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,pt(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=_t(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(_t)),t}))}))}},Lt=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case R.Comment:return g.languages.FoldingRangeKind.Comment;case R.Imports:return g.languages.FoldingRangeKind.Imports;case R.Region:return g.languages.FoldingRangeKind.Region}return}(e.kind)),t}))}))}};var Ft,Ot=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(ft)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:mt(e.range)}),e=e.parent;return t}))}))}};function Nt(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function Wt(e){return 10===e||13===e||8232===e||8233===e}function Ut(e){return e>=48&&e<=57}(Ft||(Ft={})).DEFAULT={allowTrailingComma:!1};var Vt=function(e,t){void 0===t&&(t=!1);var n=e.length,r=0,i="",o=0,a=16,s=0,c=0,u=0,d=0,g=0;function l(t,n){for(var i=0,o=0;i<t||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}r++,i++}return i<t&&(o=-1),o}function h(){if(i="",g=0,o=r,c=s,d=u,r>=n)return o=n,a=17;var t=e.charCodeAt(r);if(Nt(t)){do{r++,i+=String.fromCharCode(t),t=e.charCodeAt(r)}while(Nt(t));return a=15}if(Wt(t))return r++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,i+="\n"),s++,u=r,a=14;switch(t){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=function(){for(var t="",i=r;;){if(r>=n){t+=e.substring(i,r),g=2;break}var o=e.charCodeAt(r);if(34===o){t+=e.substring(i,r),r++;break}if(92!==o){if(o>=0&&o<=31){if(Wt(o)){t+=e.substring(i,r),g=2;break}g=6}r++}else{if(t+=e.substring(i,r),++r>=n){g=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=l(4,!0);a>=0?t+=String.fromCharCode(a):g=4;break;default:g=5}i=r}}return t}(),a=10;case 47:var h=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!Wt(e.charCodeAt(r));)r++;return i=e.substring(h,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;for(var p=n-1,m=!1;r<p;){var v=e.charCodeAt(r);if(42===v&&47===e.charCodeAt(r+1)){r+=2,m=!0;break}r++,Wt(v)&&(13===v&&10===e.charCodeAt(r)&&r++,s++,u=r)}return m||(r++,g=1),i=e.substring(h,r),a=13}return i+=String.fromCharCode(t),r++,a=16;case 45:if(i+=String.fromCharCode(t),++r===n||!Ut(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&Ut(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&Ut(e.charCodeAt(r))))return g=3,e.substring(t,r);for(r++;r<e.length&&Ut(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&Ut(e.charCodeAt(r))){for(r++;r<e.length&&Ut(e.charCodeAt(r));)r++;n=r}else g=3;return e.substring(t,n)}(),a=11;default:for(;r<n&&f(t);)r++,t=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),r++,a=16}}function f(e){if(Nt(e)||Wt(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,i="",o=0,a=16,g=0},getPosition:function(){return r},scan:t?function(){var e;do{e=h()}while(e>=12&&e<=15);return e}:h,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return c},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return g}}};function Ht(e){return{getInitialState:()=>new tn(null,null,!1,null),tokenize:(t,n)=>function(e,t,n,r=0){let i=0,o=!1;switch(n.scanError){case 2:t='"'+t,i=1;break;case 1:t="/*"+t,i=2}const a=Vt(t);let s=n.lastWasColon,c=n.parents;const u={tokens:[],endState:n.clone()};for(;;){let d=r+a.getPosition(),g="";const l=a.scan();if(17===l)break;if(d===r+a.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(a.getPosition(),3));switch(o&&(d-=i),o=i>0,l){case 1:c=en.push(c,0),g=Kt,s=!1;break;case 2:c=en.pop(c),g=Kt,s=!1;break;case 3:c=en.push(c,1),g=zt,s=!1;break;case 4:c=en.pop(c),g=zt,s=!1;break;case 6:g=qt,s=!0;break;case 5:g=Xt,s=!1;break;case 8:case 9:g=Bt,s=!1;break;case 7:g=$t,s=!1;break;case 10:const e=c?c.type:0;g=s||1===e?Qt:Jt,s=!1;break;case 11:g=Gt,s=!1}if(e)switch(l){case 12:g=Zt;break;case 13:g=Yt}u.endState=new tn(n.getStateData(),a.getTokenError(),s,c),u.tokens.push({startIndex:d,scopes:g})}return u}(e,t,n)}}var Kt="delimiter.bracket.json",zt="delimiter.array.json",qt="delimiter.colon.json",Xt="delimiter.comma.json",Bt="keyword.json",$t="keyword.json",Qt="string.value.json",Gt="number.json",Jt="string.key.json",Yt="comment.block.json",Zt="comment.line.json",en=class{constructor(e,t){this.parent=e,this.type=t}static pop(e){return e?e.parent:null}static push(e,t){return new en(e,t)}static equals(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;for(;e&&t;){if(e===t)return!0;if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0}},tn=class{_state;scanError;lastWasColon;parents;constructor(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}clone(){return new tn(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this||!!(e&&e instanceof tn)&&(this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&en.equals(this.parents,e.parents))}getStateData(){return this._state}setStateData(e){this._state=e}};var nn=class extends gt{constructor(e,t,n){super(e,t,n.onDidChange),this._disposables.push(g.editor.onWillDisposeModel((e=>{this._resetSchema(e.uri)}))),this._disposables.push(g.editor.onDidChangeModelLanguage((e=>{this._resetSchema(e.model.uri)})))}_resetSchema(e){this._worker().then((t=>{t.resetSchema(e.toString())}))}};function rn(e){const t=[],n=[],r=new se(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);function o(){const{languageId:t,modeConfiguration:r}=e;an(n),r.documentFormattingEdits&&n.push(g.languages.registerDocumentFormattingEditProvider(t,new Dt(i))),r.documentRangeFormattingEdits&&n.push(g.languages.registerDocumentRangeFormattingEditProvider(t,new Pt(i))),r.completionItems&&n.push(g.languages.registerCompletionItemProvider(t,new ht(i,[" ",":",'"']))),r.hovers&&n.push(g.languages.registerHoverProvider(t,new kt(i))),r.documentSymbols&&n.push(g.languages.registerDocumentSymbolProvider(t,new St(i))),r.tokens&&n.push(g.languages.setTokensProvider(t,Ht(!0))),r.colors&&n.push(g.languages.registerColorProvider(t,new jt(i))),r.foldingRanges&&n.push(g.languages.registerFoldingRangeProvider(t,new Lt(i))),r.diagnostics&&n.push(new nn(t,i,e)),r.selectionRanges&&n.push(g.languages.registerSelectionRangeProvider(t,new Ot(i)))}o(),t.push(g.languages.setLanguageConfiguration(e.languageId,sn));let a=e.modeConfiguration;return e.onDidChange((e=>{e.modeConfiguration!==a&&(a=e.modeConfiguration,o())})),t.push(on(n)),on(t)}function on(e){return{dispose:()=>an(e)}}function an(e){for(;e.length;)e.pop().dispose()}var sn={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);