import{r as l,o as g,c as y,a as t,f as k,w as T,v as A,b as U,t as p,F as D,d as P,n as W,e as _,p as $,h as q}from"./index.0a0d1aee.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";const N=i=>($("data-v-2eef6bc5"),i=i(),q(),i),z={class:"container"},M={class:"inputClass"},R={class:"addAddress"},j=["onKeydown"],G={class:"search"},J=["onKeydown"],O={class:"delSuccess"},Q={class:"content"},X={class:"text"},Y=["onClick"],Z={class:"popUpsBox"},ee={class:"popUpsContent"},te=N(()=>t("div",{class:"text"},"\u78BA\u5B9A\u8981\u522A\u9664",-1)),se={class:"buttonClass"},oe={__name:"AddEmployee",setup(i){const a=l([]),d=l("");let E=0,m=!1,S=!1;const u=l(""),w=l(""),h=l(""),v=l(""),c=l(""),n=l(""),r=l("");function x(){m||(m=!0,!S&&_.post("/admin/getListWhiteSheet",{num:E}).then(e=>{a.value=a.value.concat(e.data.whiteSheet),E+=10,m=!1,e.data.whiteSheet.length<10&&(S=!0),console.log(a.value)}))}function V(){const e=c.value.scrollHeight,s=c.value.scrollTop||document.documentElement.scrollTop,o=c.value.clientHeight;e-s-o<50&&x()}const B=()=>{c.value.addEventListener("scroll",V)},C=()=>{_.post("/admin/addWhiteSheet",{e_mail:d.value}).then(e=>{console.log(e.data),e.data.message==="emailTypeError"?v.value="Email\u683C\u5F0F\u932F\u8AA4":e.data.message==="whiteSheetExist"?v.value="Email\u5E33\u865F\u5DF2\u5B58\u5728":v.value=e.data.message}),d.value="",setTimeout(H,500)};function H(){window.location.reload()}const b=()=>{console.log(r.value),_.post("admin/queryWhiteSheet",{e_mail:r.value}).then(e=>{a.value=e.data.queryResults})},I=()=>{_.post("admin/delWhiteSheet",{e_mail:u.value.e_mail}).then(e=>{console.log(e),h.value=e.data.message}),a.value.splice(w.value,1),u.value="",setTimeout(()=>{h.value=""},5e3),n.value=!n.value},K=(e,s)=>{n.value=!n.value,u.value=a.value[s],w.value=s},L=(e,s)=>{n.value=!n.value};return x(),(e,s)=>(g(),y("div",z,[t("div",M,[t("div",R,[k("\u54E1\u5DE5\u5E33\u865F\uFF1A "),T(t("input",{type:"text",placeholder:"E-mail","onUpdate:modelValue":s[0]||(s[0]=o=>d.value=o),onKeydown:U(C,["enter"])},null,40,j),[[A,d.value]]),t("button",{onClick:C},"\u6DFB\u52A0")]),t("span",null,p(v.value),1),t("div",G,[k("\u5E33\u865F\u67E5\u8A62\uFF1A "),T(t("input",{type:"text",placeholder:"Search E-mail","onUpdate:modelValue":s[1]||(s[1]=o=>r.value=o),onKeydown:U(b,["enter"])},null,40,J),[[A,r.value]]),t("button",{onClick:b},"\u641C\u5C0B")]),t("div",O,p(h.value),1)]),t("div",{class:"contentClass",ref_key:"scrollDistance",ref:c,onScroll:B},[(g(!0),y(D,null,P(a.value,(o,f)=>(g(),y("div",{class:"contentParent",key:f},[t("div",Q,[t("div",X,p(o.e_mail),1)]),t("button",{onClick:le=>K(o,f)},"\u522A\u9664",8,Y)]))),128)),t("div",{class:W(["userPopUps",{open:n.value}])},[t("div",Z,[t("div",ee,[te,t("div",null,p(u.value.e_mail),1),t("div",se,[t("button",{onClick:s[2]||(s[2]=o=>L(e.item,e.index))},"\u53D6\u6D88"),t("button",{onClick:s[3]||(s[3]=o=>I(e.item,e.index))},"\u78BA\u5B9A")])])])],2)],544)]))}},ce=F(oe,[["__scopeId","data-v-2eef6bc5"]]);export{ce as default};