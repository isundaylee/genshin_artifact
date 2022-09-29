"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[607],{8715:function(e,l,t){t.r(l),t.d(l,{default:function(){return Ue}});var o=t(10311),a=t(35267),n=(t(45177),t(77049)),r=(t(7739),t(31838)),c=(t(87228),t(28785)),i=(t(9638),t(75915),t(14282)),d=(t(50580),t(19651)),u=(t(71683),t(8350)),s=(t(12573),t(33948),t(74916),t(59720)),f=t(30207),m=t(26946),p=t(8156),V=t(56736),g=t(33391),v=t(11810),h=t(88051),k=t(33996),C=t(11183),A=t(86232),E=t(45930);const y="monaDSL";E.languages.register({id:y}),E.languages.setMonarchTokensProvider(y,{tokenizer:{root:[[/prop|dmg/,"keyword"],[/\d+(\.\d+)?/,"number"],[/transformative|electro_charged|swirl_cryo|swirl_pyro|swirl_hydro|swirl_electro|overload|shatter|superconduct|super_conduct|expect|expectation|critical|crit|non_critical|non_crit|recharge|em|atk|def|hp|crit0/,"prop"],[/print|min|max|type/,"global"]]}}),E.editor.defineTheme("myTheme",{base:"vs-dark",inherit:!0,rules:[{token:"keyword",foreground:"FFA500"},{token:"number",foreground:"7A9EC2"},{token:"prop",foreground:"9E7BB0"},{token:"global",foreground:"A5C261"}],colors:{"editor.foreground":"#CCCCCC"}});var N=(0,o.defineComponent)({__name:"MonaMonacoEditor",setup(e,{expose:l}){let t=null;function a(){const e=t.getValue();return e}l({getValue:a});const n=(0,o.ref)(null);return(0,o.onMounted)((()=>{n.value&&(t=E.editor.create(n.value,{value:"dmg a = Amber.transformative\noverload = a.overload\ne = a.electro_charged\nresult = overload * 10 + e * 8\nprint(result)",language:y,theme:"myTheme"}))})),(e,l)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{ref_key:"root",ref:n,class:"root"},null,512))}}),B=t(83744);const x=(0,B.Z)(N,[["__scopeId","data-v-60fe8385"]]);var F=x,U=t(80377),w=t(15024),b=t(93366),Q=t(38939),M=t(54831),S=t(68279),K=t(38755);const D={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512",width:"1.2em",height:"1.2em"},G=(0,o.createElementVNode)("path",{fill:"currentColor",d:"M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM99.5 144.8C77.15 176.1 64 214.5 64 256c0 106 85.1 192 192 192c41.5 0 79.9-13.1 111.2-35.5L99.5 144.8zM448 256c0-106.9-86-192-192-192c-41.5 0-79.9 13.15-111.2 35.5l267.7 267.7C434.9 335.9 448 297.5 448 256z"},null,-1),R=[G];function q(e,l){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",D,R)}var z={name:"fa6-solid-ban",render:q};const T={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 384 512",width:"1.2em",height:"1.2em"},Y=(0,o.createElementVNode)("path",{fill:"currentColor",d:"M361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87a48.019 48.019 0 0 1 48.51.91L361 215z"},null,-1),O=[Y];function L(e,l){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",T,O)}var H={name:"fa6-solid-play",render:L},Z=t(75955),I=t(86315);const j=e=>((0,o.pushScopeId)("data-v-56788dfe"),e=e(),(0,o.popScopeId)(),e),P={class:"config-character"},J=["src"],X={class:"select-character"},W=j((()=>(0,o.createElementVNode)("p",{class:"common-title"},"角色",-1))),_={style:{display:"flex",gap:"12px"}},$={class:"config-character-skill"},ee=j((()=>(0,o.createElementVNode)("h3",{class:"common-title2"},"技能",-1))),le={class:"skill-div"},te={class:"config-character-constellation"},oe=j((()=>(0,o.createElementVNode)("h3",{class:"common-title2"},"命之座",-1))),ae={key:0,class:"character-extra-config"},ne={class:"config-weapon"},re={class:"select-weapon"},ce=j((()=>(0,o.createElementVNode)("p",{class:"common-title"},"武器",-1))),ie={style:{display:"flex",gap:"12px","margin-bottom":"8px"}},de={class:"config-weapon-refine"},ue=j((()=>(0,o.createElementVNode)("h3",{class:"common-title2"},"精炼",-1))),se={key:0,class:"weapon-extra-config"},fe={class:"config-buff"},me=j((()=>(0,o.createElementVNode)("p",{class:"common-title"},"BUFF",-1))),pe={class:"buff-tool",style:{"margin-bottom":"12px"}},Ve={key:0,class:"buffs"},ge={key:1},ve={class:"config-artifact"},he=j((()=>(0,o.createElementVNode)("p",{class:"common-title"},"圣遗物",-1))),ke={class:"artifacts"},Ce={class:"editor-container"},Ae={class:"bottom"},Ee={class:"tool-bar"},ye=(0,o.createTextVNode)("运行"),Ne={class:"output mona-scroll-hidden"},Be={class:"output-row"};var xe=(0,o.defineComponent)({__name:"MonaPlaygroundPage",setup(e){const{characterName:l,characterLevel:t,characterConfig:E,characterSkill1:y,characterSkill2:N,characterSkill3:B,characterConstellation:x,characterWeaponType:D,characterInterface:G,characterSplash:R,characterAscend:q,characterConfigConfig:T,characterNeedConfig:Y}=(0,w.A)(),{weaponName:O,weaponLevel:L,weaponRefine:j,weaponConfig:xe,weaponNeedConfig:Fe,weaponConfigConfig:Ue,weaponAscend:we,weaponInterface:be}=(0,b.t)(D),{buffs:Qe,buffsInterface:Me,addBuff:Se,deleteBuff:Ke,toggleBuff:De}=(0,Q.q)(),Ge=(0,o.ref)(!1);function Re(e){Ge.value=!1,Se(e)}function qe(){Ge.value=!0}const{artifactIds:ze,artifactSingleConfig:Te,artifactConfigForCalculator:Ye,artifactWasmFormat:Oe,artifactNeedConfig4:Le,artifactConfig4Configs:He,artifactItems:Ze,removeArtifact:Ie,toggleArtifact:je,setArtifact:Pe}=(0,M.a)(),Je=(0,o.ref)(!1),Xe=(0,o.ref)("flower");function We(e){const l=(0,S.VO)(Xe.value);ze.value[l]=e,Je.value=!1}function _e(e){const l=Z.m7[e];Je.value=!0,Xe.value=l}const $e=(0,o.ref)([]),el=(0,o.ref)(null),ll=(0,o.computed)((()=>({character:G.value,weapon:be.value,buffs:Me.value,artifact_config:Ye.value,enemy:null})));function tl(e){$e.value.push(e)}function ol(){$e.value=[]}async function al(){if(el.value){const e=ll.value,l=Oe.value,t=el.value.getValue().trim(),o=await(0,I.n)(),a=o.DSLInterface.run(t,e,l);if(a.is_error){tl("[error]");for(const e of a.error_msg.split("\n"))tl(e)}else{tl("[success]");for(const e of a.output.split("\n"))tl(e)}}}return(e,w)=>{const b=u.d0,Q=d.d6,M=i.os,S=n.mi,G=c.GT,q=r.Dv,Z=n.MO,I=a.dq;return(0,o.openBlock)(),(0,o.createBlock)(I,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(b,{modelValue:Ge.value,"onUpdate:modelValue":w[0]||(w[0]=e=>Ge.value=e),title:"选择BUFF",width:(0,o.unref)(U.B)?"60%":"90%"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)((0,o.unref)(h.Z),{onSelect:Re})])),_:1},8,["modelValue","width"]),(0,o.createVNode)(b,{title:"选择圣遗物",width:(0,o.unref)(U.B)?"80%":"90%",modelValue:Je.value,"onUpdate:modelValue":w[1]||(w[1]=e=>Je.value=e)},{default:(0,o.withCtx)((()=>[(0,o.createVNode)((0,o.unref)(A.Z),{position:Xe.value,onSelect:We},null,8,["position"])])),_:1},8,["width","modelValue"]),(0,o.createVNode)(q,{sm:24,md:6,class:"left mona-scroll-hidden",style:(0,o.normalizeStyle)((0,o.unref)(U.B)?{paddingRight:"16px"}:{})},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",P,[(0,o.createElementVNode)("img",{src:(0,o.unref)(R),class:"character-splash",alt:"角色"},null,8,J),(0,o.createElementVNode)("div",X,[W,(0,o.createElementVNode)("div",_,[(0,o.createVNode)((0,o.unref)(f.Z),{modelValue:(0,o.unref)(l),"onUpdate:modelValue":w[2]||(w[2]=e=>(0,o.isRef)(l)?l.value=e:null),style:{flex:"1"}},null,8,["modelValue"]),(0,o.createVNode)((0,o.unref)(p.Z),{modelValue:(0,o.unref)(t),"onUpdate:modelValue":w[3]||(w[3]=e=>(0,o.isRef)(t)?t.value=e:null),style:{flex:"1"}},null,8,["modelValue"])]),(0,o.createElementVNode)("div",$,[ee,(0,o.createElementVNode)("div",le,[(0,o.createVNode)(Q,{"controls-position":"right",modelValue:(0,o.unref)(y),"onUpdate:modelValue":w[4]||(w[4]=e=>(0,o.isRef)(y)?y.value=e:null),min:1,max:15,style:{flex:"1",display:"block",width:"unset"}},null,8,["modelValue"]),(0,o.createVNode)(Q,{"controls-position":"right",modelValue:(0,o.unref)(N),"onUpdate:modelValue":w[5]||(w[5]=e=>(0,o.isRef)(N)?N.value=e:null),min:1,max:15,style:{flex:"1",display:"block",width:"unset"}},null,8,["modelValue"]),(0,o.createVNode)(Q,{"controls-position":"right",modelValue:(0,o.unref)(B),"onUpdate:modelValue":w[6]||(w[6]=e=>(0,o.isRef)(B)?B.value=e:null),min:1,max:15,style:{flex:"1",display:"block",width:"unset"}},null,8,["modelValue"])])]),(0,o.createElementVNode)("div",te,[oe,(0,o.createVNode)(Q,{"controls-position":"right",modelValue:(0,o.unref)(x),"onUpdate:modelValue":w[7]||(w[7]=e=>(0,o.isRef)(x)?x.value=e:null),min:0,max:6},null,8,["modelValue"])]),(0,o.unref)(Y)?((0,o.openBlock)(),(0,o.createElementBlock)("div",ae,[(0,o.createVNode)((0,o.unref)(s.Z),{modelValue:(0,o.unref)(E),"onUpdate:modelValue":w[8]||(w[8]=e=>(0,o.isRef)(E)?E.value=e:null),"item-name":(0,o.unref)(l),configs:(0,o.unref)(T)},null,8,["modelValue","item-name","configs"])])):(0,o.createCommentVNode)("",!0)])]),(0,o.createVNode)(M),(0,o.createElementVNode)("div",ne,[(0,o.createElementVNode)("div",re,[ce,(0,o.createElementVNode)("div",ie,[(0,o.createVNode)((0,o.unref)(m.Z),{type:(0,o.unref)(D),modelValue:(0,o.unref)(O),"onUpdate:modelValue":w[9]||(w[9]=e=>(0,o.isRef)(O)?O.value=e:null),style:{flex:"1"}},null,8,["type","modelValue"]),(0,o.createVNode)((0,o.unref)(V.Z),{modelValue:(0,o.unref)(L),"onUpdate:modelValue":w[10]||(w[10]=e=>(0,o.isRef)(L)?L.value=e:null),style:{flex:"1"}},null,8,["modelValue"])]),(0,o.createVNode)((0,o.unref)(g.Z),{"weapon-name":(0,o.unref)(O)},null,8,["weapon-name"]),(0,o.createElementVNode)("div",de,[ue,(0,o.createVNode)(Q,{"controls-position":"right",modelValue:(0,o.unref)(j),"onUpdate:modelValue":w[11]||(w[11]=e=>(0,o.isRef)(j)?j.value=e:null),min:1,max:5},null,8,["modelValue"])]),(0,o.unref)(Fe)?((0,o.openBlock)(),(0,o.createElementBlock)("div",se,[(0,o.createVNode)((0,o.unref)(s.Z),{modelValue:(0,o.unref)(xe),"onUpdate:modelValue":w[12]||(w[12]=e=>(0,o.isRef)(xe)?xe.value=e:null),"item-name":(0,o.unref)(O),configs:(0,o.unref)(Ue)},null,8,["modelValue","item-name","configs"])])):(0,o.createCommentVNode)("",!0)])]),(0,o.createVNode)(M),(0,o.createElementVNode)("div",fe,[me,(0,o.createElementVNode)("div",pe,[(0,o.createVNode)(S,{icon:(0,o.unref)(K.Z),onClick:qe,title:"添加BUFF",circle:"",text:""},null,8,["icon"])]),(0,o.unref)(Qe).length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",Ve,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(Qe),(e=>((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(v.Z),{key:e.id,buff:e,buffConfig:e.config,"onUpdate:buffConfig":l=>e.config=l,onDelete:l=>(0,o.unref)(Ke)(e.id),onToggle:l=>(0,o.unref)(De)(e.id)},null,8,["buff","buffConfig","onUpdate:buffConfig","onDelete","onToggle"])))),128))])):((0,o.openBlock)(),(0,o.createElementBlock)("div",ge,[(0,o.createVNode)(G,{description:"无BUFF"})]))]),(0,o.createVNode)(M),(0,o.createElementVNode)("div",ve,[he,(0,o.createElementVNode)("div",ke,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(ze),((e,l)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:l,class:"artifact-item-or-button"},[(0,o.unref)(Ze)[l]?((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(k.Z),{key:0,item:(0,o.unref)(Ze)[l],selectable:"",buttons:!0,"delete-button":!0,onDelete:e=>(0,o.unref)(Ie)(l),onToggle:l=>(0,o.unref)(je)(e),onClick:e=>_e(l),class:"artifact-display"},null,8,["item","onDelete","onToggle","onClick"])):((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(C.Z),{key:1,onClick:e=>_e(l),class:"add-button"},null,8,["onClick"]))])))),128))])])])),_:1},8,["style"]),(0,o.createVNode)(q,{sm:24,md:18,class:"right mona-scroll-hidden"},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",Ce,[(0,o.createVNode)(F,{ref_key:"editor",ref:el},null,512)]),(0,o.createElementVNode)("div",Ae,[(0,o.createElementVNode)("div",Ee,[(0,o.createVNode)(Z,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(S,{icon:(0,o.unref)(H),onClick:al,size:"small",text:"",title:"运行",type:"primary"},{default:(0,o.withCtx)((()=>[ye])),_:1},8,["icon"]),(0,o.createVNode)(S,{icon:(0,o.unref)(z),onClick:ol,text:"",title:"清除输出",size:"small"},null,8,["icon"])])),_:1})]),(0,o.createElementVNode)("div",Ne,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)($e.value,(e=>((0,o.openBlock)(),(0,o.createElementBlock)("p",Be,(0,o.toDisplayString)(e),1)))),256))])])])),_:1})])),_:1})}}});const Fe=(0,B.Z)(xe,[["__scopeId","data-v-56788dfe"]]);var Ue=Fe},69223:function(e){e.exports="data:image/png;base64,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"}}]);