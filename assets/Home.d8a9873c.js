import{_ as g}from"./iconmonstr-magnifier-1-240.04f9bbcd.js";import{u as v}from"./Article.979dd6f7.js";import{r as x,q as k,o as i,c as _,k as d,l as u,a as e,F as b,d as H,u as h,m as C,f as S,t as o,p as A,h as I}from"./index.0a0d1aee.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import"./iconmonstr-user-5-240.bf901f19.js";const p=c=>(A("data-v-f85b0b19"),c=c(),I(),c),w={class:"container"},y={class:"item"},D={class:"userDetail"},T=["src"],B={class:"userName"},V={class:"time"},E=p(()=>e("hr",null,null,-1)),F=p(()=>e("hr",null,null,-1)),L={class:"footer"},$={class:"department"},q={class:"message"},M=p(()=>e("img",{src:g,alt:"\u641C\u5C0B"},null,-1)),P={__name:"Home",setup(c){const l=x(""),s=v();let r=0;s.switch=!1,s.getArticleData(r);function f(){const m=l.value.scrollHeight,a=l.value.scrollTop||document.documentElement.scrollTop,n=l.value.clientHeight;m-a-n<50&&(r+=10,s.getArticleData(r))}return k(()=>{s.article=[]}),(m,a)=>{const n=C("router-link");return i(),_("div",w,[d(n,{to:"/home_index/post",class:"post"},{default:u(()=>[S("\u767C \u554F")]),_:1}),e("ul",{ref_key:"intent",ref:l,class:"content",onScroll:a[0]||(a[0]=t=>f())},[(i(!0),_(b,null,H(h(s).article,t=>(i(),_("li",y,[d(n,{to:"/home_index/seeArticle",onClick:j=>h(s).browseArticles(t)},{default:u(()=>[e("h3",null,"\u6A19\u984C\uFF1A"+o(t.title),1),e("div",D,[e("img",{src:t.profilePicture,alt:"img",class:"userImg"},null,8,T),e("span",B,o(t.author),1),e("span",V,o(t.created_at),1)]),E,e("p",null,o(t.content),1),F,e("div",L,[e("div",$,"\u90E8\u9580\uFF1A"+o(t.department),1),e("div",q,"\u7559\u8A00\u6578\uFF1A"+o(t.messageNum),1)])]),_:2},1032,["onClick"])]))),256))],544),d(n,{to:"/home_index/articleSearch",class:"search"},{default:u(()=>[M]),_:1})])}}},Q=N(P,[["__scopeId","data-v-f85b0b19"]]);export{Q as default};