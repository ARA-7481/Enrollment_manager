"use strict";(self.webpackChunkccwebapp=self.webpackChunkccwebapp||[]).push([[993],{8240:(e,t,n)=>{n.d(t,{kZ:()=>y});var r=n(400),o=n(2163),i=n(2057),a=n(2556),s=n(6333),f=n(4063),c=n(7252),d=n(611),u=n(138);function p(e,t,n){void 0===n&&(n=!1);var p,l,v=(0,a.Re)(t),h=(0,a.Re)(t)&&function(e){var t=e.getBoundingClientRect(),n=(0,u.NM)(t.width)/e.offsetWidth||1,r=(0,u.NM)(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),m=(0,c.Z)(t),g=(0,r.Z)(e,h,n),Z={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(v||!v&&!n)&&(("body"!==(0,s.Z)(t)||(0,d.Z)(m))&&(Z=(p=t)!==(0,i.Z)(p)&&(0,a.Re)(p)?{scrollLeft:(l=p).scrollLeft,scrollTop:l.scrollTop}:(0,o.Z)(p)),(0,a.Re)(t)?((b=(0,r.Z)(t,!0)).x+=t.clientLeft,b.y+=t.clientTop):m&&(b.x=(0,f.Z)(m))),{x:g.left+Z.scrollLeft-b.x,y:g.top+Z.scrollTop-b.y,width:g.width,height:g.height}}var l=n(583),v=n(3624),h=n(3779),m=n(7701);function g(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var Z={placement:"bottom",modifiers:[],strategy:"absolute"};function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function y(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Z:o;return function(e,t,n){void 0===n&&(n=i);var o,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Z,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],d=!1,u={state:f,setOptions:function(n){var o="function"==typeof n?n(f.options):n;y(),f.options=Object.assign({},i,f.options,o),f.scrollParents={reference:(0,a.kK)(e)?(0,v.Z)(e):e.contextElement?(0,v.Z)(e.contextElement):[],popper:(0,v.Z)(t)};var s,d,p=function(e){var t=g(e);return m.xs.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(r,f.options.modifiers),d=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(d).map((function(e){return d[e]}))));return f.orderedModifiers=p.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r});c.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!d){var e=f.elements,t=e.reference,n=e.popper;if(b(t,n)){f.rects={reference:p(t,(0,h.Z)(n),"fixed"===f.options.strategy),popper:(0,l.Z)(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){y(),d=!0}};if(!b(e,t))return u;function y(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!d&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}},4985:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2556);function o(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,r.Zq)(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},400:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2556),o=n(138),i=n(2057),a=n(7977);function s(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var s=e.getBoundingClientRect(),f=1,c=1;t&&(0,r.Re)(e)&&(f=e.offsetWidth>0&&(0,o.NM)(s.width)/e.offsetWidth||1,c=e.offsetHeight>0&&(0,o.NM)(s.height)/e.offsetHeight||1);var d=((0,r.kK)(e)?(0,i.Z)(e):window).visualViewport,u=!(0,a.Z)()&&n,p=(s.left+(u&&d?d.offsetLeft:0))/f,l=(s.top+(u&&d?d.offsetTop:0))/c,v=s.width/f,h=s.height/c;return{width:v,height:h,top:l,right:p+v,bottom:l+h,left:p,x:p,y:l}}},3062:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2057);function o(e){return(0,r.Z)(e).getComputedStyle(e)}},7252:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2556);function o(e){return(((0,r.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}},583:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(400);function o(e){var t=(0,r.Z)(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}},6333:(e,t,n)=>{function r(e){return e?(e.nodeName||"").toLowerCase():null}n.d(t,{Z:()=>r})},3779:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(2057),o=n(6333),i=n(3062),a=n(2556);function s(e){return["table","td","th"].indexOf((0,o.Z)(e))>=0}var f=n(5923),c=n(5918);function d(e){return(0,a.Re)(e)&&"fixed"!==(0,i.Z)(e).position?e.offsetParent:null}function u(e){for(var t=(0,r.Z)(e),n=d(e);n&&s(n)&&"static"===(0,i.Z)(n).position;)n=d(n);return n&&("html"===(0,o.Z)(n)||"body"===(0,o.Z)(n)&&"static"===(0,i.Z)(n).position)?t:n||function(e){var t=/firefox/i.test((0,c.Z)());if(/Trident/i.test((0,c.Z)())&&(0,a.Re)(e)&&"fixed"===(0,i.Z)(e).position)return null;var n=(0,f.Z)(e);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&["html","body"].indexOf((0,o.Z)(n))<0;){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}},5923:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(6333),o=n(7252),i=n(2556);function a(e){return"html"===(0,r.Z)(e)?e:e.assignedSlot||e.parentNode||((0,i.Zq)(e)?e.host:null)||(0,o.Z)(e)}},2057:(e,t,n)=>{function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}n.d(t,{Z:()=>r})},2163:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2057);function o(e){var t=(0,r.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}},4063:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(400),o=n(7252),i=n(2163);function a(e){return(0,r.Z)((0,o.Z)(e)).left+(0,i.Z)(e).scrollLeft}},2556:(e,t,n)=>{n.d(t,{Re:()=>i,Zq:()=>a,kK:()=>o});var r=n(2057);function o(e){return e instanceof(0,r.Z)(e).Element||e instanceof Element}function i(e){return e instanceof(0,r.Z)(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof(0,r.Z)(e).ShadowRoot||e instanceof ShadowRoot)}},7977:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(5918);function o(){return!/^((?!chrome|android).)*safari/i.test((0,r.Z)())}},611:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(3062);function o(e){var t=(0,r.Z)(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},3624:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(5923),o=n(611),i=n(6333),a=n(2556);function s(e){return["html","body","#document"].indexOf((0,i.Z)(e))>=0?e.ownerDocument.body:(0,a.Re)(e)&&(0,o.Z)(e)?e:s((0,r.Z)(e))}var f=n(2057);function c(e,t){var n;void 0===t&&(t=[]);var i=s(e),a=i===(null==(n=e.ownerDocument)?void 0:n.body),d=(0,f.Z)(i),u=a?[d].concat(d.visualViewport||[],(0,o.Z)(i)?i:[]):i,p=t.concat(u);return a?p:p.concat(c((0,r.Z)(u)))}},7701:(e,t,n)=>{n.d(t,{BL:()=>c,Ct:()=>m,F2:()=>i,I:()=>o,Pj:()=>p,YP:()=>v,bw:()=>h,d7:()=>s,k5:()=>l,mv:()=>f,t$:()=>a,ut:()=>d,we:()=>r,xs:()=>g,zV:()=>u});var r="top",o="bottom",i="right",a="left",s="auto",f=[r,o,i,a],c="start",d="end",u="clippingParents",p="viewport",l="popper",v="reference",h=f.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+d])}),[]),m=[].concat(f,[s]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+d])}),[]),g=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},6896:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(6206),o=n(583),i=n(4985),a=n(3779),s=n(1516),f=n(7516),c=n(3293),d=n(3706),u=n(7701);const p={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,p=e.options,l=n.elements.arrow,v=n.modifiersData.popperOffsets,h=(0,r.Z)(n.placement),m=(0,s.Z)(h),g=[u.t$,u.F2].indexOf(h)>=0?"height":"width";if(l&&v){var Z=function(e,t){return e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,(0,c.Z)("number"!=typeof e?e:(0,d.Z)(e,u.mv))}(p.padding,n),b=(0,o.Z)(l),y="y"===m?u.we:u.t$,w="y"===m?u.I:u.F2,x=n.rects.reference[g]+n.rects.reference[m]-v[m]-n.rects.popper[g],O=v[m]-n.rects.reference[m],k=(0,a.Z)(l),j=k?"y"===m?k.clientHeight||0:k.clientWidth||0:0,D=x/2-O/2,E=Z[y],R=j-b[g]-Z[w],F=j/2-b[g]/2+D,L=(0,f.u)(E,F,R),P=m;n.modifiersData[i]=((t={})[P]=L,t.centerOffset=L-F,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&(0,i.Z)(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},6531:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7701),o=n(3779),i=n(2057),a=n(7252),s=n(3062),f=n(6206),c=n(4943),d=n(138),u={top:"auto",right:"auto",bottom:"auto",left:"auto"};function p(e){var t,n=e.popper,f=e.popperRect,c=e.placement,p=e.variation,l=e.offsets,v=e.position,h=e.gpuAcceleration,m=e.adaptive,g=e.roundOffsets,Z=e.isFixed,b=l.x,y=void 0===b?0:b,w=l.y,x=void 0===w?0:w,O="function"==typeof g?g({x:y,y:x}):{x:y,y:x};y=O.x,x=O.y;var k=l.hasOwnProperty("x"),j=l.hasOwnProperty("y"),D=r.t$,E=r.we,R=window;if(m){var F=(0,o.Z)(n),L="clientHeight",P="clientWidth";F===(0,i.Z)(n)&&(F=(0,a.Z)(n),"static"!==(0,s.Z)(F).position&&"absolute"===v&&(L="scrollHeight",P="scrollWidth")),(c===r.we||(c===r.t$||c===r.F2)&&p===r.ut)&&(E=r.I,x-=(Z&&F===R&&R.visualViewport?R.visualViewport.height:F[L])-f.height,x*=h?1:-1),c!==r.t$&&(c!==r.we&&c!==r.I||p!==r.ut)||(D=r.F2,y-=(Z&&F===R&&R.visualViewport?R.visualViewport.width:F[P])-f.width,y*=h?1:-1)}var A,M=Object.assign({position:v},m&&u),B=!0===g?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:(0,d.NM)(n*o)/o||0,y:(0,d.NM)(r*o)/o||0}}({x:y,y:x},(0,i.Z)(n)):{x:y,y:x};return y=B.x,x=B.y,h?Object.assign({},M,((A={})[E]=j?"0":"",A[D]=k?"0":"",A.transform=(R.devicePixelRatio||1)<=1?"translate("+y+"px, "+x+"px)":"translate3d("+y+"px, "+x+"px, 0)",A)):Object.assign({},M,((t={})[E]=j?x+"px":"",t[D]=k?y+"px":"",t.transform="",t))}const l={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,d=void 0===s||s,u={placement:(0,f.Z)(t.placement),variation:(0,c.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,p(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:d})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,p(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:d})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}},2372:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2057),o={passive:!0};const i={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,a=i.scroll,s=void 0===a||a,f=i.resize,c=void 0===f||f,d=(0,r.Z)(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach((function(e){e.addEventListener("scroll",n.update,o)})),c&&d.addEventListener("resize",n.update,o),function(){s&&u.forEach((function(e){e.removeEventListener("scroll",n.update,o)})),c&&d.removeEventListener("resize",n.update,o)}},data:{}}},5228:(e,t,n)=>{n.d(t,{Z:()=>u});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(e){return e.replace(/left|right|bottom|top/g,(function(e){return r[e]}))}var i=n(6206),a={start:"end",end:"start"};function s(e){return e.replace(/start|end/g,(function(e){return a[e]}))}var f=n(9966),c=n(4943),d=n(7701);const u={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,u=void 0===a||a,p=n.altAxis,l=void 0===p||p,v=n.fallbackPlacements,h=n.padding,m=n.boundary,g=n.rootBoundary,Z=n.altBoundary,b=n.flipVariations,y=void 0===b||b,w=n.allowedAutoPlacements,x=t.options.placement,O=(0,i.Z)(x),k=v||(O!==x&&y?function(e){if((0,i.Z)(e)===d.d7)return[];var t=o(e);return[s(e),t,s(t)]}(x):[o(x)]),j=[x].concat(k).reduce((function(e,n){return e.concat((0,i.Z)(n)===d.d7?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,u=n.flipVariations,p=n.allowedAutoPlacements,l=void 0===p?d.Ct:p,v=(0,c.Z)(r),h=v?u?d.bw:d.bw.filter((function(e){return(0,c.Z)(e)===v})):d.mv,m=h.filter((function(e){return l.indexOf(e)>=0}));0===m.length&&(m=h);var g=m.reduce((function(t,n){return t[n]=(0,f.Z)(e,{placement:n,boundary:o,rootBoundary:a,padding:s})[(0,i.Z)(n)],t}),{});return Object.keys(g).sort((function(e,t){return g[e]-g[t]}))}(t,{placement:n,boundary:m,rootBoundary:g,padding:h,flipVariations:y,allowedAutoPlacements:w}):n)}),[]),D=t.rects.reference,E=t.rects.popper,R=new Map,F=!0,L=j[0],P=0;P<j.length;P++){var A=j[P],M=(0,i.Z)(A),B=(0,c.Z)(A)===d.BL,N=[d.we,d.I].indexOf(M)>=0,V=N?"width":"height",W=(0,f.Z)(t,{placement:A,boundary:m,rootBoundary:g,altBoundary:Z,padding:h}),I=N?B?d.F2:d.t$:B?d.I:d.we;D[V]>E[V]&&(I=o(I));var $=o(I),C=[];if(u&&C.push(W[M]<=0),l&&C.push(W[I]<=0,W[$]<=0),C.every((function(e){return e}))){L=A,F=!1;break}R.set(A,C)}if(F)for(var H=function(e){var t=j.find((function(t){var n=R.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},T=y?3:1;T>0&&"break"!==H(T);T--);t.placement!==L&&(t.modifiersData[r]._skip=!0,t.placement=L,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},9892:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7701),o=n(9966);function i(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function a(e){return[r.we,r.F2,r.I,r.t$].some((function(t){return e[t]>=0}))}const s={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,s=t.rects.popper,f=t.modifiersData.preventOverflow,c=(0,o.Z)(t,{elementContext:"reference"}),d=(0,o.Z)(t,{altBoundary:!0}),u=i(c,r),p=i(d,s,f),l=a(u),v=a(p);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}}},2122:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(6206),o=n(7701);const i={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,a=n.offset,s=void 0===a?[0,0]:a,f=o.Ct.reduce((function(e,n){return e[n]=function(e,t,n){var i=(0,r.Z)(e),a=[o.t$,o.we].indexOf(i)>=0?-1:1,s="function"==typeof n?n(Object.assign({},t,{placement:e})):n,f=s[0],c=s[1];return f=f||0,c=(c||0)*a,[o.t$,o.F2].indexOf(i)>=0?{x:c,y:f}:{x:f,y:c}}(n,t.rects,s),e}),{}),c=f[t.placement],d=c.x,u=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=d,t.modifiersData.popperOffsets.y+=u),t.modifiersData[i]=f}}},7421:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2581);const o={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=(0,r.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}},3920:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7701),o=n(6206),i=n(1516),a=n(7516),s=n(583),f=n(3779),c=n(9966),d=n(4943),u=n(3607),p=n(138);const l={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,l=e.name,v=n.mainAxis,h=void 0===v||v,m=n.altAxis,g=void 0!==m&&m,Z=n.boundary,b=n.rootBoundary,y=n.altBoundary,w=n.padding,x=n.tether,O=void 0===x||x,k=n.tetherOffset,j=void 0===k?0:k,D=(0,c.Z)(t,{boundary:Z,rootBoundary:b,padding:w,altBoundary:y}),E=(0,o.Z)(t.placement),R=(0,d.Z)(t.placement),F=!R,L=(0,i.Z)(E),P="x"===L?"y":"x",A=t.modifiersData.popperOffsets,M=t.rects.reference,B=t.rects.popper,N="function"==typeof j?j(Object.assign({},t.rects,{placement:t.placement})):j,V="number"==typeof N?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),W=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(A){if(h){var $,C="y"===L?r.we:r.t$,H="y"===L?r.I:r.F2,T="y"===L?"height":"width",q=A[L],S=q+D[C],K=q-D[H],z=O?-B[T]/2:0,U=R===r.BL?M[T]:B[T],Y=R===r.BL?-B[T]:-M[T],_=t.elements.arrow,X=O&&_?(0,s.Z)(_):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,u.Z)(),J=G[C],Q=G[H],ee=(0,a.u)(0,M[T],X[T]),te=F?M[T]/2-z-ee-J-V.mainAxis:U-ee-J-V.mainAxis,ne=F?-M[T]/2+z+ee+Q+V.mainAxis:Y+ee+Q+V.mainAxis,re=t.elements.arrow&&(0,f.Z)(t.elements.arrow),oe=re?"y"===L?re.clientTop||0:re.clientLeft||0:0,ie=null!=($=null==W?void 0:W[L])?$:0,ae=q+te-ie-oe,se=q+ne-ie,fe=(0,a.u)(O?(0,p.VV)(S,ae):S,q,O?(0,p.Fp)(K,se):K);A[L]=fe,I[L]=fe-q}if(g){var ce,de="x"===L?r.we:r.t$,ue="x"===L?r.I:r.F2,pe=A[P],le="y"===P?"height":"width",ve=pe+D[de],he=pe-D[ue],me=-1!==[r.we,r.t$].indexOf(E),ge=null!=(ce=null==W?void 0:W[P])?ce:0,Ze=me?ve:pe-M[le]-B[le]-ge+V.altAxis,be=me?pe+M[le]+B[le]-ge-V.altAxis:he,ye=O&&me?(0,a.q)(Ze,pe,be):(0,a.u)(O?Ze:ve,pe,O?be:he);A[P]=ye,I[P]=ye-pe}t.modifiersData[l]=I}},requiresIfExists:["offset"]}},2581:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(6206),o=n(4943),i=n(1516),a=n(7701);function s(e){var t,n=e.reference,s=e.element,f=e.placement,c=f?(0,r.Z)(f):null,d=f?(0,o.Z)(f):null,u=n.x+n.width/2-s.width/2,p=n.y+n.height/2-s.height/2;switch(c){case a.we:t={x:u,y:n.y-s.height};break;case a.I:t={x:u,y:n.y+n.height};break;case a.F2:t={x:n.x+n.width,y:p};break;case a.t$:t={x:n.x-s.width,y:p};break;default:t={x:n.x,y:n.y}}var l=c?(0,i.Z)(c):null;if(null!=l){var v="y"===l?"height":"width";switch(d){case a.BL:t[l]=t[l]-(n[v]/2-s[v]/2);break;case a.ut:t[l]=t[l]+(n[v]/2-s[v]/2)}}return t}},9966:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(7701),o=n(2057),i=n(7252),a=n(4063),s=n(7977),f=n(3062),c=n(2163),d=n(138),u=n(3624),p=n(3779),l=n(2556),v=n(400),h=n(5923),m=n(4985),g=n(6333);function Z(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function b(e,t,n){return t===r.Pj?Z(function(e,t){var n=(0,o.Z)(e),r=(0,i.Z)(e),f=n.visualViewport,c=r.clientWidth,d=r.clientHeight,u=0,p=0;if(f){c=f.width,d=f.height;var l=(0,s.Z)();(l||!l&&"fixed"===t)&&(u=f.offsetLeft,p=f.offsetTop)}return{width:c,height:d,x:u+(0,a.Z)(e),y:p}}(e,n)):(0,l.kK)(t)?function(e,t){var n=(0,v.Z)(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):Z(function(e){var t,n=(0,i.Z)(e),r=(0,c.Z)(e),o=null==(t=e.ownerDocument)?void 0:t.body,s=(0,d.Fp)(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),u=(0,d.Fp)(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),p=-r.scrollLeft+(0,a.Z)(e),l=-r.scrollTop;return"rtl"===(0,f.Z)(o||n).direction&&(p+=(0,d.Fp)(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:u,x:p,y:l}}((0,i.Z)(e)))}var y=n(2581),w=n(3293),x=n(3706);function O(e,t){void 0===t&&(t={});var n=t,o=n.placement,a=void 0===o?e.placement:o,s=n.strategy,c=void 0===s?e.strategy:s,O=n.boundary,k=void 0===O?r.zV:O,j=n.rootBoundary,D=void 0===j?r.Pj:j,E=n.elementContext,R=void 0===E?r.k5:E,F=n.altBoundary,L=void 0!==F&&F,P=n.padding,A=void 0===P?0:P,M=(0,w.Z)("number"!=typeof A?A:(0,x.Z)(A,r.mv)),B=R===r.k5?r.YP:r.k5,N=e.rects.popper,V=e.elements[L?B:R],W=function(e,t,n,r){var o="clippingParents"===t?function(e){var t=(0,u.Z)((0,h.Z)(e)),n=["absolute","fixed"].indexOf((0,f.Z)(e).position)>=0&&(0,l.Re)(e)?(0,p.Z)(e):e;return(0,l.kK)(n)?t.filter((function(e){return(0,l.kK)(e)&&(0,m.Z)(e,n)&&"body"!==(0,g.Z)(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=b(e,n,r);return t.top=(0,d.Fp)(o.top,t.top),t.right=(0,d.VV)(o.right,t.right),t.bottom=(0,d.VV)(o.bottom,t.bottom),t.left=(0,d.Fp)(o.left,t.left),t}),b(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}((0,l.kK)(V)?V:V.contextElement||(0,i.Z)(e.elements.popper),k,D,c),I=(0,v.Z)(e.elements.reference),$=(0,y.Z)({reference:I,element:N,strategy:"absolute",placement:a}),C=Z(Object.assign({},N,$)),H=R===r.k5?C:I,T={top:W.top-H.top+M.top,bottom:H.bottom-W.bottom+M.bottom,left:W.left-H.left+M.left,right:H.right-W.right+M.right},q=e.modifiersData.offset;if(R===r.k5&&q){var S=q[a];Object.keys(T).forEach((function(e){var t=[r.F2,r.I].indexOf(e)>=0?1:-1,n=[r.we,r.I].indexOf(e)>=0?"y":"x";T[e]+=S[n]*t}))}return T}},3706:(e,t,n)=>{function r(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}n.d(t,{Z:()=>r})},6206:(e,t,n)=>{function r(e){return e.split("-")[0]}n.d(t,{Z:()=>r})},3607:(e,t,n)=>{function r(){return{top:0,right:0,bottom:0,left:0}}n.d(t,{Z:()=>r})},1516:(e,t,n)=>{function r(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}n.d(t,{Z:()=>r})},4943:(e,t,n)=>{function r(e){return e.split("-")[1]}n.d(t,{Z:()=>r})},138:(e,t,n)=>{n.d(t,{Fp:()=>r,NM:()=>i,VV:()=>o});var r=Math.max,o=Math.min,i=Math.round},3293:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(3607);function o(e){return Object.assign({},(0,r.Z)(),e)}},5918:(e,t,n)=>{function r(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}n.d(t,{Z:()=>r})},7516:(e,t,n)=>{n.d(t,{q:()=>i,u:()=>o});var r=n(138);function o(e,t,n){return(0,r.Fp)(e,(0,r.VV)(t,n))}function i(e,t,n){var r=o(e,t,n);return r>n?n:r}},861:(e,t,n)=>{n.d(t,{FT:()=>a,ZP:()=>f});var r=n(7294),o=n(5893);const i=["as","disabled"];function a({tagName:e,disabled:t,href:n,target:r,rel:o,role:i,onClick:a,tabIndex:s=0,type:f}){e||(e=null!=n||null!=r||null!=o?"a":"button");const c={tagName:e};if("button"===e)return[{type:f||"button",disabled:t},c];const d=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==a||a(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},c]}const s=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);const[f,{tagName:c}]=a(Object.assign({tagName:n,disabled:r},s));return(0,o.jsx)(c,Object.assign({},s,f,{ref:t}))}));s.displayName="Button";const f=s},5005:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(4184),o=n.n(r),i=n(7294),a=n(861),s=n(6792),f=n(5893);const c=i.forwardRef((({as:e,bsPrefix:t,variant:n="primary",size:r,active:i=!1,disabled:c=!1,className:d,...u},p)=>{const l=(0,s.vE)(t,"btn"),[v,{tagName:h}]=(0,a.FT)({tagName:e,disabled:c,...u}),m=h;return(0,f.jsx)(m,{...v,...u,ref:p,disabled:c,className:o()(d,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,u.href&&c&&"disabled")})}));c.displayName="Button";const d=c},2473:e=>{e.exports=function(){}}}]);