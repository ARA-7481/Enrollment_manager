"use strict";(self.webpackChunkccwebapp=self.webpackChunkccwebapp||[]).push([[81],{3267:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(7294),n=s(6706),r=s(9250),i=s(4996);const c=function(e){return(0,n.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,isLoading:e.auth.isLoading}}))((function(t){var s=localStorage.getItem("access");if(!t.isAuthenticated){if(!s)return console.log("no token"),a.createElement(r.Fg,{to:"/auth/admin-signin"});i.Z.get("/api/success/").then((function(s){return a.createElement(e,t)})).catch((function(e){return console.log("fail"),a.createElement(r.Fg,{to:"/auth/admin-signin"})}))}return a.createElement(e,t)}))}},7081:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(7294),n=s(5697),r=s.n(n),i=s(6706),c=s(3267),u=s(1295),l=s(1555);function o(e){return(0,a.useEffect)((function(){e.setsidebarState("dashboard"),e.setsubsidebarState(null)}),[]),a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement("div",{style:{display:"flex"}},a.createElement("h1",null,"Dashboard")),a.createElement("div",null)))}o.propTypes={sidebarState:r().string,setsidebarState:r().func.isRequired,subsidebarState:r().string,setsubsidebarState:r().func.isRequired};const d=(0,c.Z)((0,i.$j)((function(e){return{sidebarState:e.main.sidebarState,subsidebarState:e.main.subsidebarState}}),{setsidebarState:u.Mt,setsubsidebarState:u.aj})(o))},1555:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(4184),n=s.n(a),r=s(7294),i=s(6792),c=s(5893);const u=r.forwardRef(((e,t)=>{const[{className:s,...a},{as:r="div",bsPrefix:u,spans:l}]=function({as:e,bsPrefix:t,className:s,...a}){t=(0,i.vE)(t,"col");const r=(0,i.pi)(),c=(0,i.zG)(),u=[],l=[];return r.forEach((e=>{const s=a[e];let n,r,i;delete a[e],"object"==typeof s&&null!=s?({span:n,offset:r,order:i}=s):n=s;const o=e!==c?`-${e}`:"";n&&u.push(!0===n?`${t}${o}`:`${t}${o}-${n}`),null!=i&&l.push(`order${o}-${i}`),null!=r&&l.push(`offset${o}-${r}`)})),[{...a,className:n()(s,...u,...l)},{as:e,bsPrefix:t,spans:u}]}(e);return(0,c.jsx)(r,{...a,ref:t,className:n()(s,!l.length&&u)})}));u.displayName="Col";const l=u}}]);