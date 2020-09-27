!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://rschristian.github.io/preact-hint",e(e.s="mdyV")}({"/hs+":function(t,e,n){"use strict";function r(t,e){v.c.__h&&v.c.__h(h,t,b||e),b=0;var n=h.__H||(h.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return b=1,function(t,e,n){var o=r(d++,2);return o.t=t,o.__c||(o.__c=h,o.__=[n?n(e):a(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}]),o.__}(a,t)}function i(t,e){var n=r(d++,7);return u(n.__H,e)?(n.__H=e,n.__h=t,n.__=t()):n.__}function _(){g.some((function(t){if(t.__P)try{t.__H.__h.forEach(l),t.__H.__h.forEach(c),t.__H.__h=[]}catch(e){return t.__H.__h=[],v.c.__e(e,t.__v),!0}})),g=[]}function l(t){"function"==typeof t.u&&t.u()}function c(t){t.u=t.__()}function u(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function a(t,e){return"function"==typeof e?e(t):e}function s(t){var e,n,_,l,c=(e=null,b=5,i((function(){return{current:e}}),[])),a=o(0),s=a[0],p=a[1];return n=function(){c.current&&p(c.current.getBoundingClientRect().width)},_=[c],l=r(d++,3),!v.c.__s&&u(l.__H,_)&&(l.__=n,l.__H=_,h.__H.__h.push(l)),Object(v.a)("div",{class:"preact-hint preact-hint__fade-in",style:{bottom:t.rootBoundingRect.height-t.targetBoundingRect.top+t.rootBoundingRect.top+2,left:t.targetBoundingRect.left-t.rootBoundingRect.left-s/2+t.targetBoundingRect.width/2}},Object(v.a)("span",{class:"preact-hint__content",ref:c},t.template?t.template(t.content):t.content))}function p(t){var e,n=o(""),r=n[0],_=n[1],l=o(null),c=l[0],u=l[1],a=o(null),p=a[0],f=a[1],d=(e=function(t){u(t),c&&(c.addEventListener("mouseover",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(_(t.target.getAttribute("data-preact-hint")||""),f(t.target.getBoundingClientRect()))})),c.addEventListener("mouseout",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(_(""),f(null))})))},b=8,i((function(){return e}),[c]));return Object(v.a)("div",{ref:d,style:{position:"relative"}},r&&c&&p&&Object(v.a)(s,{content:r,template:t.template,rootBoundingRect:c.getBoundingClientRect(),targetBoundingRect:p}),t.children)}function f(){return Object(v.a)("div",{id:"app"},Object(v.a)("section",{class:"hero"},Object(v.a)("div",{class:"hero-body"},Object(v.a)("div",{class:"container has-text-centered"},Object(v.a)("h2",{class:"is-size-2 has-text-weight-bold"},"preact-hint"),Object(v.a)("h6",{class:"is-size-6"},"Lightweight and extensible tooltip component for Preact"),Object(v.a)("a",{class:"button",href:"https://github.com/rschristian/preact-hint"},"Check it out on GitHub")))),Object(v.a)("div",{class:"section main-content"},Object(v.a)("div",{class:"container"},Object(v.a)("h3",{class:"is-size-3"},"Preact Hint"),Object(v.a)("div",{class:"shields mt-1"},Object(v.a)("a",{href:"https://github.com/rschristian/preact-hint/blob/master/LICENSE"},Object(v.a)("img",{alt:"NPM",src:"https://img.shields.io/npm/l/preact-hint?color=blue"})),Object(v.a)("a",{href:"https://bundlephobia.com/result?p=preact-hint"},Object(v.a)("img",{alt:"npm bundle size",src:"https://img.shields.io/bundlephobia/minzip/preact-hint"})),Object(v.a)("a",{href:"https://npmjs.org/package/preact-hint"},Object(v.a)("img",{alt:"0 Dependencies",src:"https://img.shields.io/david/rschristian/preact-hint?color=blue"})),Object(v.a)("a",{href:"https://npmjs.org/package/preact-hint"},Object(v.a)("img",{alt:"TS Support",src:"https://img.shields.io/npm/types/preact-hint"}))),Object(v.a)("div",{class:"mt-2"},"Preact-Hint is a lightweight and extensible tooltip component for"," ",Object(v.a)("a",{href:"https://preactjs.com"},"Preact"),". It was designed with a focus on size, adaptability, and ease of use."),Object(v.a)(p,null,Object(v.a)("button",{class:"button mt-4","data-preact-hint":"Hello World!"},"Hover Me!")),Object(v.a)("h4",{class:"is-size-4 mt-5 mb-2"},"Installation"),Object(v.a)("pre",null,Object(v.a)("code",null,"yarn add preact-hint")),Object(v.a)("h4",{class:"is-size-4 mt-5 mb-2"},"General Usage"),Object(v.a)("pre",null,Object(v.a)("code",null,"import PreactHint from 'preact-hint';\nimport 'preact-hint/dist/index.css';\n\nexport default function App() {\n    return (\n        <PreactHint>\n            <button data-preact-hint=\"Hello World!\">Hover over me!</button>\n        </PreactHint>\n    );\n}")),Object(v.a)("h4",{class:"is-size-4 mt-5 mb-2"},"BYOT (Bring Your Own Template) Usage"),Object(v.a)("pre",null,Object(v.a)("code",null,"import PreactHint from 'preact-hint';\nimport 'preact-hint/dist/index.css';\n\nexport default function App() {\n    return (\n        <PreactHint\n            template={(content) => {\n                const stringPieces = content.split(',');\n                return (\n                    <Fragment>\n                        <strong>{stringPieces[0]} Contributions</strong> on \n                        {new Date(stringPieces[1]).toLocaleDateString()}\n                    </Fragment>\n                );\n            }}\n        >\n            <button data-preact-hint={['0', '2019-09-14']}>Hover over me!</button>\n        </PreactHint>\n    );\n}")))),Object(v.a)("footer",{class:"footer"},Object(v.a)("div",{class:"container has-text-centered"},Object(v.a)("span",null,"© 2020 Ryan Christian"))))}n.r(e),n.d(e,"default",(function(){return f}));var d,h,m,v=n("hosL"),b=(n("LQXr"),0),g=[],y=v.c.__r,O=v.c.diffed,j=v.c.__c,k=v.c.unmount;v.c.__r=function(t){y&&y(t),d=0;var e=(h=t.__c).__H;e&&(e.__h.forEach(l),e.__h.forEach(c),e.__h=[])},v.c.diffed=function(t){O&&O(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==g.push(e)&&m===v.c.requestAnimationFrame||((m=v.c.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),P&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);P&&(e=requestAnimationFrame(n))})(_))},v.c.__c=function(t,e){e.some((function(t){try{t.__h.forEach(l),t.__h=t.__h.filter((function(t){return!t.__||c(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],v.c.__e(n,t.__v)}})),j&&j(t,e)},v.c.unmount=function(t){k&&k(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(l)}catch(t){v.c.__e(t,e.__v)}};var P="function"==typeof requestAnimationFrame;n("isEG"),n("MV5A")},LQXr:function(){},MV5A:function(){},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l=arguments,c={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:c[i]=e[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);if(null!=n&&(c.children=n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===c[i]&&(c[i]=t.defaultProps[i]);return _(t,c,r,o,null)}function _(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),null!=S.vnode&&S.vnode(i),i}function l(t){return t.children}function c(t,e){this.props=t,this.context=e}function u(t,e){if(null==e)return t.__?u(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?u(t):null}function a(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return a(t)}}function s(t){(!t.__d&&(t.__d=!0)&&x.push(t)&&!p.__r++||A!==S.debounceRendering)&&((A=S.debounceRendering)||E)(p)}function p(){for(var t;p.__r=x.length;)t=x.sort((function(t,e){return t.__v.__b-e.__v.__b})),x=[],t.some((function(t){var e,n,o,i,_,l,c;t.__d&&(l=(_=(e=t).__v).__e,(c=e.__P)&&(n=[],(o=r({},_)).__v=o,i=g(c,_,o,e.__n,void 0!==c.ownerSVGElement,null,n,null==l?u(_):l),y(n,_),i!=l&&a(_)))}))}function f(t,e,n,r,i,c,a,s,p,f){var h,m,v,b,y,O,P,H=r&&r.__k||R,w=H.length;for(p==L&&(p=null!=a?a[0]:w?u(r,0):null),n.__k=[],h=0;h<e.length;h++)if(null!=(b=n.__k[h]=null==(b=e[h])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?_(null,b,null,null,b):Array.isArray(b)?_(l,{children:b},null,null,null):null!=b.__e||null!=b.__c?_(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(v=H[h])||v&&b.key==v.key&&b.type===v.type)H[h]=void 0;else for(m=0;m<w;m++){if((v=H[m])&&b.key==v.key&&b.type===v.type){H[m]=void 0;break}v=null}y=g(t,b,v=v||L,i,c,a,s,p,f),(m=b.ref)&&v.ref!=m&&(P||(P=[]),v.ref&&P.push(v.ref,null,b),P.push(m,b.__c||y,b)),null!=y?(null==O&&(O=y),p=d(t,b,v,H,a,y,p),f||"option"!=n.type?"function"==typeof n.type&&(n.__d=p):t.value=""):p&&v.__e==p&&p.parentNode!=t&&(p=u(v))}if(n.__e=O,null!=a&&"function"!=typeof n.type)for(h=a.length;h--;)null!=a[h]&&o(a[h]);for(h=w;h--;)null!=H[h]&&k(H[h],H[h]);if(P)for(h=0;h<P.length;h++)j(P[h],P[++h],P[++h])}function d(t,e,n,r,o,i,_){var l,c,u;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(o==n||i!=_||null==i.parentNode)t:if(null==_||_.parentNode!==t)t.appendChild(i),l=null;else{for(c=_,u=0;(c=c.nextSibling)&&u<r.length;u+=2)if(c==i)break t;t.insertBefore(i,_),l=_}return void 0!==l?l:i.nextSibling}function h(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||T.test(e)?n:n+"px"}function m(t,e,n,r,o){var i,_;if(o&&"className"==e&&(e="class"),"style"===e)if("string"==typeof n)t.style=n;else{if("string"==typeof r&&(t.style=r=""),r)for(e in r)n&&e in n||h(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||h(t.style,e,n[e])}else"o"===e[0]&&"n"===e[1]?(i=e!==(e=e.replace(/Capture$/,"")),(_=e.toLowerCase())in t&&(e=_),e=e.slice(2),t.l||(t.l={}),t.l[e]=n,n?r||t.addEventListener(e,v,i):t.removeEventListener(e,v,i)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&"href"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function v(t){this.l[t.type](S.event?S.event(t):t)}function b(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&b(o,e,n),e=d(n,o,o,t.__k,null,o.__e,e),"function"==typeof t.type&&(t.__d=e)))}function g(t,e,n,o,i,_,u,a,s){var p,d,h,m,v,g,y,j,k,H,w,x=e.type;if(void 0!==e.constructor)return null;(p=S.__b)&&p(e);try{t:if("function"==typeof x){if(j=e.props,k=(p=x.contextType)&&o[p.__c],H=p?k?k.props.value:p.__:o,n.__c?y=(d=e.__c=n.__c).__=d.__E:("prototype"in x&&x.prototype.render?e.__c=d=new x(j,H):(e.__c=d=new c(j,H),d.constructor=x,d.render=P),k&&k.sub(d),d.props=j,d.state||(d.state={}),d.context=H,d.__n=o,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,x.getDerivedStateFromProps(j,d.__s))),m=d.props,v=d.state,h)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==x.getDerivedStateFromProps&&j!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(j,H),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(j,d.__s,H)||e.__v===n.__v){d.props=j,d.state=d.__s,e.__v!==n.__v&&(d.__d=!1),d.__v=e,e.__e=n.__e,e.__k=n.__k,d.__h.length&&u.push(d),b(e,a,t);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(j,d.__s,H),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(m,v,g)}))}d.context=H,d.props=j,d.state=d.__s,(p=S.__r)&&p(e),d.__d=!1,d.__v=e,d.__P=t,p=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(m,v)),w=null!=p&&p.type==l&&null==p.key?p.props.children:p,f(t,Array.isArray(w)?w:[w],e,n,o,i,_,u,a,s),d.base=e.__e,d.__h.length&&u.push(d),y&&(d.__E=d.__=null),d.__e=!1}else null==_&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=O(n.__e,e,n,o,i,_,u,s);(p=S.diffed)&&p(e)}catch(t){e.__v=null,S.__e(t,e,n)}return e.__e}function y(t,e){S.__c&&S.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){S.__e(t,e.__v)}}))}function O(t,e,n,r,o,i,_,l){var c,u,a,s,p,d=n.props,h=e.props;if(o="svg"===e.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(u=i[c])&&((null===e.type?3===u.nodeType:u.localName===e.type)||t==u)){t=u,i[c]=null;break}if(null==t){if(null===e.type)return document.createTextNode(h);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,h.is&&{is:h.is}),i=null,l=!1}if(null===e.type)d!==h&&t.data!==h&&(t.data=h);else{if(null!=i&&(i=R.slice.call(t.childNodes)),a=(d=n.props||L).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!l){if(null!=i)for(d={},p=0;p<t.attributes.length;p++)d[t.attributes[p].name]=t.attributes[p].value;(s||a)&&(s&&a&&s.__html==a.__html||(t.innerHTML=s&&s.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||m(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||m(t,i,e[i],n[i],r)})(t,h,d,o,l),s?e.__k=[]:(c=e.props.children,f(t,Array.isArray(c)?c:[c],e,n,r,"foreignObject"!==e.type&&o,i,_,L,l)),l||("value"in h&&void 0!==(c=h.value)&&c!==t.value&&m(t,"value",c,d.value,!1),"checked"in h&&void 0!==(c=h.checked)&&c!==t.checked&&m(t,"checked",c,d.checked,!1))}return t}function j(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){S.__e(t,n)}}function k(t,e,n){var r,i,_;if(S.unmount&&S.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||j(r,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){S.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(_=0;_<r.length;_++)r[_]&&k(r[_],e,n);null!=i&&o(i)}function P(t,e,n){return this.constructor(t,n)}function H(t,e,n){var r,o,_;S.__&&S.__(t,e),o=(r=n===C)?null:n&&n.__k||e.__k,t=i(l,null,[t]),_=[],g(e,(r?e:n||e).__k=t,o||L,L,void 0!==e.ownerSVGElement,n&&!r?[n]:o?null:e.childNodes.length?R.slice.call(e.childNodes):null,_,n||L,r),y(_,t)}function w(t,e){H(t,e,C)}n.d(e,"d",(function(){return H})),n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return S}));var S,x,E,A,C,L={},R=[],T=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;S={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return s(n.__E=n)}catch(e){t=e}throw t}},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),s(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),s(this))},c.prototype.render=l,x=[],E="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,C=L},isEG:function(){},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.a,i=r.d,_=r.b,l=function(t){return t&&t.default?t.default:t},c=function(t){return"/"===t[t.length-1]?t:t+"/"};if("function"==typeof l(n("/hs+"))){var u=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(n("/hs+")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var a={preRenderData:e},s=e.url?c(e.url):"",p=_&&s===c(location.pathname);u=(p?_:i)(o(t,{CLI_DATA:a}),document.body,u)}()}}});
//# sourceMappingURL=bundle.46048.js.map