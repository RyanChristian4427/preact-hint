!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(n){return t[n]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="https://rschristian.github.io/preact-hint",n(n.s="mdyV")}({"/hs+":function(t,n,e){"use strict";function i(t,n){v.options.__h&&v.options.__h(p,t,m||n),m=0;var e=p.__H||(p.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function o(t){return m=1,function(t,n,e){var o=i(f++,2);return o.t=t,o.__c||(o.__c=p,o.__=[e?e(n):r(void 0,n),function(t){var n=o.t(o.__[0],t);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}]),o.__}(r,t)}function u(t,n){var e=i(f++,7);return d(e.__H,n)?(e.__H=n,e.__h=t,e.__=t()):e.__}function c(){g.some((function(t){if(t.__P)try{t.__H.__h.forEach(s),t.__H.__h.forEach(a),t.__H.__h=[]}catch(n){return t.__H.__h=[],v.options.__e(n,t.__v),!0}})),g=[]}function s(t){"function"==typeof t.u&&t.u()}function a(t){t.u=t.__()}function d(t,n){return!t||n.some((function(n,e){return n!==t[e]}))}function r(t,n){return"function"==typeof n?n(t):n}function y(t){const n=(e=null,m=5,u((function(){return{current:e}}),[]));var e;const[c,s]=o(0);var a,r,y;return a=()=>{n.current&&s(n.current.getBoundingClientRect().width)},r=[n],y=i(f++,3),!v.options.__s&&d(y.__H,r)&&(y.__=a,y.__H=r,p.__H.__h.push(y)),Object(v.h)("div",{class:"preact-hint preact-hint__fade-in",style:{bottom:t.rootBoundingRect.height-t.targetBoundingRect.top+t.rootBoundingRect.top+2,left:t.targetBoundingRect.left-t.rootBoundingRect.left-c/2+t.targetBoundingRect.width/2}},Object(v.h)("span",{class:"preact-hint__content",ref:n},t.template?t.template(t.content):t.content))}function _(t){const[n,e]=o(""),[i,c]=o(null),[s,a]=o(null),d=(r=t=>{c(t),i&&(i.addEventListener("mouseover",t=>{t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(e(t.target.getAttribute("data-preact-hint")||""),a(t.target.getBoundingClientRect()))}),i.addEventListener("mouseout",t=>{t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(e(""),a(null))}))},m=8,u((function(){return r}),[i]));var r;return Object(v.h)("div",{ref:d,style:{position:"relative"}},n&&i&&s&&Object(v.h)(y,{content:n,template:t.template,rootBoundingRect:i.getBoundingClientRect(),targetBoundingRect:s}),t.children)}function l(){const t=E,n=["#ededed","#62A197","#428892","#296887","#274969"];return Object(v.h)(v.Fragment,null,Object(v.h)("section",{class:"hero"},Object(v.h)("div",{class:"hero-body"},Object(v.h)("div",{class:"container"},Object(v.h)("h1",{class:"is-size-2"},"Preact Hint")))),Object(v.h)("div",{class:"container"},Object(v.h)("div",{class:"tile box preview"},Object(v.h)(_,{template:t=>{const n=t.split(",");return Object(v.h)(v.Fragment,null,Object(v.h)("strong",null,n[0]," Contributions")," on ",n[1])}},Object(v.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 740 96"},t.contributions.map(t=>t.map((t,e)=>Object(v.h)("rect",{key:t.date,x:"0",y:14*e,width:12,height:12,fill:n[t.intensity],"data-preact-hint":[t.count,t.date]}))).map((t,n)=>Object(v.h)("g",{key:n,transform:`translate(${14*n}, 0)`},t)))))))}e.r(n),e.d(n,"default",(function(){return l}));var f,p,h,v=e("hosL"),m=(e("LQXr"),e("isEG"),0),g=[],b=v.options.__r,k=v.options.diffed,w=v.options.__c,C=v.options.unmount;v.options.__r=function(t){b&&b(t),f=0;var n=(p=t.__c).__H;n&&(n.__h.forEach(s),n.__h.forEach(a),n.__h=[])},v.options.diffed=function(t){k&&k(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==g.push(n)&&h===v.options.requestAnimationFrame||((h=v.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(i),x&&cancelAnimationFrame(n),setTimeout(t)},i=setTimeout(e,100);x&&(n=requestAnimationFrame(e))})(c))},v.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(s),t.__h=t.__h.filter((function(t){return!t.__||a(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],v.options.__e(e,t.__v)}})),w&&w(t,n)},v.options.unmount=function(t){C&&C(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(s)}catch(t){v.options.__e(t,n.__v)}};var x="function"==typeof requestAnimationFrame;e("MV5A");var E=e("EKnp")},EKnp:function(t){t.exports=JSON.parse('{"contributions":[[{"date":"2019-09-08","count":24,"intensity":3},{"date":"2019-09-09","count":7,"intensity":1},{"date":"2019-09-10","count":8,"intensity":1},{"date":"2019-09-11","count":3,"intensity":1},{"date":"2019-09-12","count":3,"intensity":1},{"date":"2019-09-13","count":5,"intensity":1},{"date":"2019-09-14","count":0,"intensity":0}],[{"date":"2019-09-15","count":0,"intensity":0},{"date":"2019-09-16","count":0,"intensity":0},{"date":"2019-09-17","count":0,"intensity":0},{"date":"2019-09-18","count":0,"intensity":0},{"date":"2019-09-19","count":0,"intensity":0},{"date":"2019-09-20","count":0,"intensity":0},{"date":"2019-09-21","count":0,"intensity":0}],[{"date":"2019-09-22","count":0,"intensity":0},{"date":"2019-09-23","count":0,"intensity":0},{"date":"2019-09-24","count":0,"intensity":0},{"date":"2019-09-25","count":2,"intensity":1},{"date":"2019-09-26","count":0,"intensity":0},{"date":"2019-09-27","count":0,"intensity":0},{"date":"2019-09-28","count":2,"intensity":1}],[{"date":"2019-09-29","count":2,"intensity":1},{"date":"2019-09-30","count":0,"intensity":0},{"date":"2019-10-01","count":4,"intensity":1},{"date":"2019-10-02","count":0,"intensity":0},{"date":"2019-10-03","count":0,"intensity":0},{"date":"2019-10-04","count":0,"intensity":0},{"date":"2019-10-05","count":0,"intensity":0}],[{"date":"2019-10-06","count":0,"intensity":0},{"date":"2019-10-07","count":0,"intensity":0},{"date":"2019-10-08","count":4,"intensity":1},{"date":"2019-10-09","count":2,"intensity":1},{"date":"2019-10-10","count":18,"intensity":3},{"date":"2019-10-11","count":34,"intensity":4},{"date":"2019-10-12","count":2,"intensity":1}],[{"date":"2019-10-13","count":0,"intensity":0},{"date":"2019-10-14","count":1,"intensity":1},{"date":"2019-10-15","count":1,"intensity":1},{"date":"2019-10-16","count":6,"intensity":1},{"date":"2019-10-17","count":12,"intensity":2},{"date":"2019-10-18","count":4,"intensity":1},{"date":"2019-10-19","count":4,"intensity":1}],[{"date":"2019-10-20","count":4,"intensity":1},{"date":"2019-10-21","count":7,"intensity":1},{"date":"2019-10-22","count":3,"intensity":1},{"date":"2019-10-23","count":9,"intensity":2},{"date":"2019-10-24","count":0,"intensity":0},{"date":"2019-10-25","count":0,"intensity":0},{"date":"2019-10-26","count":3,"intensity":1}],[{"date":"2019-10-27","count":2,"intensity":1},{"date":"2019-10-28","count":1,"intensity":1},{"date":"2019-10-29","count":0,"intensity":0},{"date":"2019-10-30","count":11,"intensity":2},{"date":"2019-10-31","count":14,"intensity":2},{"date":"2019-11-01","count":5,"intensity":1},{"date":"2019-11-02","count":6,"intensity":1}],[{"date":"2019-11-03","count":4,"intensity":1},{"date":"2019-11-04","count":6,"intensity":1},{"date":"2019-11-05","count":9,"intensity":2},{"date":"2019-11-06","count":5,"intensity":1},{"date":"2019-11-07","count":9,"intensity":2},{"date":"2019-11-08","count":15,"intensity":2},{"date":"2019-11-09","count":0,"intensity":0}],[{"date":"2019-11-10","count":0,"intensity":0},{"date":"2019-11-11","count":1,"intensity":1},{"date":"2019-11-12","count":0,"intensity":0},{"date":"2019-11-13","count":0,"intensity":0},{"date":"2019-11-14","count":2,"intensity":1},{"date":"2019-11-15","count":8,"intensity":1},{"date":"2019-11-16","count":1,"intensity":1}],[{"date":"2019-11-17","count":1,"intensity":1},{"date":"2019-11-18","count":3,"intensity":1},{"date":"2019-11-19","count":3,"intensity":1},{"date":"2019-11-20","count":8,"intensity":1},{"date":"2019-11-21","count":4,"intensity":1},{"date":"2019-11-22","count":11,"intensity":2},{"date":"2019-11-23","count":23,"intensity":3}],[{"date":"2019-11-24","count":2,"intensity":1},{"date":"2019-11-25","count":8,"intensity":1},{"date":"2019-11-26","count":4,"intensity":1},{"date":"2019-11-27","count":15,"intensity":2},{"date":"2019-11-28","count":16,"intensity":2},{"date":"2019-11-29","count":10,"intensity":2},{"date":"2019-11-30","count":20,"intensity":3}],[{"date":"2019-12-01","count":1,"intensity":1},{"date":"2019-12-02","count":1,"intensity":1},{"date":"2019-12-03","count":16,"intensity":2},{"date":"2019-12-04","count":5,"intensity":1},{"date":"2019-12-05","count":5,"intensity":1},{"date":"2019-12-06","count":9,"intensity":2},{"date":"2019-12-07","count":5,"intensity":1}],[{"date":"2019-12-08","count":21,"intensity":3},{"date":"2019-12-09","count":21,"intensity":3},{"date":"2019-12-10","count":0,"intensity":0},{"date":"2019-12-11","count":5,"intensity":1},{"date":"2019-12-12","count":0,"intensity":0},{"date":"2019-12-13","count":0,"intensity":0},{"date":"2019-12-14","count":23,"intensity":3}],[{"date":"2019-12-15","count":0,"intensity":0},{"date":"2019-12-16","count":0,"intensity":0},{"date":"2019-12-17","count":0,"intensity":0},{"date":"2019-12-18","count":10,"intensity":2},{"date":"2019-12-19","count":8,"intensity":1},{"date":"2019-12-20","count":6,"intensity":1},{"date":"2019-12-21","count":1,"intensity":1}],[{"date":"2019-12-22","count":3,"intensity":1},{"date":"2019-12-23","count":0,"intensity":0},{"date":"2019-12-24","count":8,"intensity":1},{"date":"2019-12-25","count":0,"intensity":0},{"date":"2019-12-26","count":0,"intensity":0},{"date":"2019-12-27","count":2,"intensity":1},{"date":"2019-12-28","count":0,"intensity":0}],[{"date":"2019-12-29","count":0,"intensity":0},{"date":"2019-12-30","count":0,"intensity":0},{"date":"2019-12-31","count":0,"intensity":0},{"date":"2020-01-01","count":0,"intensity":0},{"date":"2020-01-02","count":3,"intensity":1},{"date":"2020-01-03","count":0,"intensity":0},{"date":"2020-01-04","count":0,"intensity":0}],[{"date":"2020-01-05","count":0,"intensity":0},{"date":"2020-01-06","count":0,"intensity":0},{"date":"2020-01-07","count":0,"intensity":0},{"date":"2020-01-08","count":4,"intensity":1},{"date":"2020-01-09","count":0,"intensity":0},{"date":"2020-01-10","count":1,"intensity":1},{"date":"2020-01-11","count":17,"intensity":2}],[{"date":"2020-01-12","count":4,"intensity":1},{"date":"2020-01-13","count":0,"intensity":0},{"date":"2020-01-14","count":4,"intensity":1},{"date":"2020-01-15","count":5,"intensity":1},{"date":"2020-01-16","count":12,"intensity":2},{"date":"2020-01-17","count":0,"intensity":0},{"date":"2020-01-18","count":0,"intensity":0}],[{"date":"2020-01-19","count":0,"intensity":0},{"date":"2020-01-20","count":5,"intensity":1},{"date":"2020-01-21","count":10,"intensity":2},{"date":"2020-01-22","count":0,"intensity":0},{"date":"2020-01-23","count":7,"intensity":1},{"date":"2020-01-24","count":21,"intensity":3},{"date":"2020-01-25","count":23,"intensity":3}],[{"date":"2020-01-26","count":15,"intensity":2},{"date":"2020-01-27","count":1,"intensity":1},{"date":"2020-01-28","count":10,"intensity":2},{"date":"2020-01-29","count":11,"intensity":2},{"date":"2020-01-30","count":6,"intensity":1},{"date":"2020-01-31","count":10,"intensity":2},{"date":"2020-02-01","count":7,"intensity":1}],[{"date":"2020-02-02","count":0,"intensity":0},{"date":"2020-02-03","count":9,"intensity":2},{"date":"2020-02-04","count":11,"intensity":2},{"date":"2020-02-05","count":0,"intensity":0},{"date":"2020-02-06","count":5,"intensity":1},{"date":"2020-02-07","count":12,"intensity":2},{"date":"2020-02-08","count":21,"intensity":3}],[{"date":"2020-02-09","count":20,"intensity":3},{"date":"2020-02-10","count":15,"intensity":2},{"date":"2020-02-11","count":38,"intensity":4},{"date":"2020-02-12","count":1,"intensity":1},{"date":"2020-02-13","count":14,"intensity":2},{"date":"2020-02-14","count":2,"intensity":1},{"date":"2020-02-15","count":9,"intensity":2}],[{"date":"2020-02-16","count":32,"intensity":4},{"date":"2020-02-17","count":18,"intensity":3},{"date":"2020-02-18","count":27,"intensity":4},{"date":"2020-02-19","count":11,"intensity":2},{"date":"2020-02-20","count":24,"intensity":3},{"date":"2020-02-21","count":2,"intensity":1},{"date":"2020-02-22","count":11,"intensity":2}],[{"date":"2020-02-23","count":11,"intensity":2},{"date":"2020-02-24","count":0,"intensity":0},{"date":"2020-02-25","count":1,"intensity":1},{"date":"2020-02-26","count":8,"intensity":1},{"date":"2020-02-27","count":1,"intensity":1},{"date":"2020-02-28","count":13,"intensity":2},{"date":"2020-02-29","count":4,"intensity":1}],[{"date":"2020-03-01","count":8,"intensity":1},{"date":"2020-03-02","count":4,"intensity":1},{"date":"2020-03-03","count":6,"intensity":1},{"date":"2020-03-04","count":10,"intensity":2},{"date":"2020-03-05","count":0,"intensity":0},{"date":"2020-03-06","count":1,"intensity":1},{"date":"2020-03-07","count":1,"intensity":1}],[{"date":"2020-03-08","count":13,"intensity":2},{"date":"2020-03-09","count":27,"intensity":4},{"date":"2020-03-10","count":6,"intensity":1},{"date":"2020-03-11","count":9,"intensity":2},{"date":"2020-03-12","count":14,"intensity":2},{"date":"2020-03-13","count":25,"intensity":3},{"date":"2020-03-14","count":0,"intensity":0}],[{"date":"2020-03-15","count":12,"intensity":2},{"date":"2020-03-16","count":7,"intensity":1},{"date":"2020-03-17","count":2,"intensity":1},{"date":"2020-03-18","count":7,"intensity":1},{"date":"2020-03-19","count":12,"intensity":2},{"date":"2020-03-20","count":35,"intensity":4},{"date":"2020-03-21","count":46,"intensity":4}],[{"date":"2020-03-22","count":23,"intensity":3},{"date":"2020-03-23","count":9,"intensity":2},{"date":"2020-03-24","count":3,"intensity":1},{"date":"2020-03-25","count":7,"intensity":1},{"date":"2020-03-26","count":15,"intensity":2},{"date":"2020-03-27","count":23,"intensity":3},{"date":"2020-03-28","count":5,"intensity":1}],[{"date":"2020-03-29","count":11,"intensity":2},{"date":"2020-03-30","count":14,"intensity":2},{"date":"2020-03-31","count":5,"intensity":1},{"date":"2020-04-01","count":30,"intensity":4},{"date":"2020-04-02","count":22,"intensity":3},{"date":"2020-04-03","count":14,"intensity":2},{"date":"2020-04-04","count":14,"intensity":2}],[{"date":"2020-04-05","count":6,"intensity":1},{"date":"2020-04-06","count":18,"intensity":3},{"date":"2020-04-07","count":27,"intensity":4},{"date":"2020-04-08","count":0,"intensity":0},{"date":"2020-04-09","count":3,"intensity":1},{"date":"2020-04-10","count":0,"intensity":0},{"date":"2020-04-11","count":11,"intensity":2}],[{"date":"2020-04-12","count":4,"intensity":1},{"date":"2020-04-13","count":2,"intensity":1},{"date":"2020-04-14","count":0,"intensity":0},{"date":"2020-04-15","count":3,"intensity":1},{"date":"2020-04-16","count":6,"intensity":1},{"date":"2020-04-17","count":0,"intensity":0},{"date":"2020-04-18","count":5,"intensity":1}],[{"date":"2020-04-19","count":17,"intensity":2},{"date":"2020-04-20","count":2,"intensity":1},{"date":"2020-04-21","count":0,"intensity":0},{"date":"2020-04-22","count":2,"intensity":1},{"date":"2020-04-23","count":0,"intensity":0},{"date":"2020-04-24","count":0,"intensity":0},{"date":"2020-04-25","count":0,"intensity":0}],[{"date":"2020-04-26","count":0,"intensity":0},{"date":"2020-04-27","count":0,"intensity":0},{"date":"2020-04-28","count":0,"intensity":0},{"date":"2020-04-29","count":0,"intensity":0},{"date":"2020-04-30","count":3,"intensity":1},{"date":"2020-05-01","count":0,"intensity":0},{"date":"2020-05-02","count":1,"intensity":1}],[{"date":"2020-05-03","count":1,"intensity":1},{"date":"2020-05-04","count":0,"intensity":0},{"date":"2020-05-05","count":0,"intensity":0},{"date":"2020-05-06","count":0,"intensity":0},{"date":"2020-05-07","count":1,"intensity":1},{"date":"2020-05-08","count":2,"intensity":1},{"date":"2020-05-09","count":6,"intensity":1}],[{"date":"2020-05-10","count":9,"intensity":2},{"date":"2020-05-11","count":0,"intensity":0},{"date":"2020-05-12","count":3,"intensity":1},{"date":"2020-05-13","count":20,"intensity":3},{"date":"2020-05-14","count":1,"intensity":1},{"date":"2020-05-15","count":0,"intensity":0},{"date":"2020-05-16","count":0,"intensity":0}],[{"date":"2020-05-17","count":2,"intensity":1},{"date":"2020-05-18","count":0,"intensity":0},{"date":"2020-05-19","count":0,"intensity":0},{"date":"2020-05-20","count":10,"intensity":2},{"date":"2020-05-21","count":0,"intensity":0},{"date":"2020-05-22","count":0,"intensity":0},{"date":"2020-05-23","count":11,"intensity":2}],[{"date":"2020-05-24","count":25,"intensity":3},{"date":"2020-05-25","count":2,"intensity":1},{"date":"2020-05-26","count":0,"intensity":0},{"date":"2020-05-27","count":3,"intensity":1},{"date":"2020-05-28","count":10,"intensity":2},{"date":"2020-05-29","count":14,"intensity":2},{"date":"2020-05-30","count":14,"intensity":2}],[{"date":"2020-05-31","count":28,"intensity":4},{"date":"2020-06-01","count":28,"intensity":4},{"date":"2020-06-02","count":9,"intensity":2},{"date":"2020-06-03","count":4,"intensity":1},{"date":"2020-06-04","count":3,"intensity":1},{"date":"2020-06-05","count":7,"intensity":1},{"date":"2020-06-06","count":5,"intensity":1}],[{"date":"2020-06-07","count":1,"intensity":1},{"date":"2020-06-08","count":9,"intensity":2},{"date":"2020-06-09","count":1,"intensity":1},{"date":"2020-06-10","count":2,"intensity":1},{"date":"2020-06-11","count":0,"intensity":0},{"date":"2020-06-12","count":4,"intensity":1},{"date":"2020-06-13","count":12,"intensity":2}],[{"date":"2020-06-14","count":9,"intensity":2},{"date":"2020-06-15","count":13,"intensity":2},{"date":"2020-06-16","count":4,"intensity":1},{"date":"2020-06-17","count":11,"intensity":2},{"date":"2020-06-18","count":1,"intensity":1},{"date":"2020-06-19","count":11,"intensity":2},{"date":"2020-06-20","count":0,"intensity":0}],[{"date":"2020-06-21","count":2,"intensity":1},{"date":"2020-06-22","count":1,"intensity":1},{"date":"2020-06-23","count":3,"intensity":1},{"date":"2020-06-24","count":3,"intensity":1},{"date":"2020-06-25","count":10,"intensity":2},{"date":"2020-06-26","count":5,"intensity":1},{"date":"2020-06-27","count":6,"intensity":1}],[{"date":"2020-06-28","count":4,"intensity":1},{"date":"2020-06-29","count":1,"intensity":1},{"date":"2020-06-30","count":8,"intensity":1},{"date":"2020-07-01","count":1,"intensity":1},{"date":"2020-07-02","count":0,"intensity":0},{"date":"2020-07-03","count":0,"intensity":0},{"date":"2020-07-04","count":8,"intensity":1}],[{"date":"2020-07-05","count":6,"intensity":1},{"date":"2020-07-06","count":2,"intensity":1},{"date":"2020-07-07","count":0,"intensity":0},{"date":"2020-07-08","count":15,"intensity":2},{"date":"2020-07-09","count":17,"intensity":2},{"date":"2020-07-10","count":4,"intensity":1},{"date":"2020-07-11","count":18,"intensity":3}],[{"date":"2020-07-12","count":2,"intensity":1},{"date":"2020-07-13","count":10,"intensity":2},{"date":"2020-07-14","count":3,"intensity":1},{"date":"2020-07-15","count":2,"intensity":1},{"date":"2020-07-16","count":17,"intensity":2},{"date":"2020-07-17","count":0,"intensity":0},{"date":"2020-07-18","count":0,"intensity":0}],[{"date":"2020-07-19","count":0,"intensity":0},{"date":"2020-07-20","count":0,"intensity":0},{"date":"2020-07-21","count":5,"intensity":1},{"date":"2020-07-22","count":4,"intensity":1},{"date":"2020-07-23","count":15,"intensity":2},{"date":"2020-07-24","count":6,"intensity":1},{"date":"2020-07-25","count":2,"intensity":1}],[{"date":"2020-07-26","count":8,"intensity":1},{"date":"2020-07-27","count":10,"intensity":2},{"date":"2020-07-28","count":18,"intensity":3},{"date":"2020-07-29","count":0,"intensity":0},{"date":"2020-07-30","count":6,"intensity":1},{"date":"2020-07-31","count":0,"intensity":0},{"date":"2020-08-01","count":0,"intensity":0}],[{"date":"2020-08-02","count":0,"intensity":0},{"date":"2020-08-03","count":6,"intensity":1},{"date":"2020-08-04","count":17,"intensity":2},{"date":"2020-08-05","count":12,"intensity":2},{"date":"2020-08-06","count":9,"intensity":2},{"date":"2020-08-07","count":10,"intensity":2},{"date":"2020-08-08","count":0,"intensity":0}],[{"date":"2020-08-09","count":6,"intensity":1},{"date":"2020-08-10","count":1,"intensity":1},{"date":"2020-08-11","count":6,"intensity":1},{"date":"2020-08-12","count":0,"intensity":0},{"date":"2020-08-13","count":1,"intensity":1},{"date":"2020-08-14","count":2,"intensity":1},{"date":"2020-08-15","count":0,"intensity":0}],[{"date":"2020-08-16","count":5,"intensity":1},{"date":"2020-08-17","count":5,"intensity":1},{"date":"2020-08-18","count":5,"intensity":1},{"date":"2020-08-19","count":0,"intensity":0},{"date":"2020-08-20","count":1,"intensity":1},{"date":"2020-08-21","count":5,"intensity":1},{"date":"2020-08-22","count":5,"intensity":1}],[{"date":"2020-08-23","count":16,"intensity":2},{"date":"2020-08-24","count":14,"intensity":2},{"date":"2020-08-25","count":8,"intensity":1},{"date":"2020-08-26","count":10,"intensity":2},{"date":"2020-08-27","count":2,"intensity":1},{"date":"2020-08-28","count":1,"intensity":1},{"date":"2020-08-29","count":15,"intensity":2}],[{"date":"2020-08-30","count":1,"intensity":1},{"date":"2020-08-31","count":7,"intensity":1},{"date":"2020-09-01","count":9,"intensity":2},{"date":"2020-09-02","count":11,"intensity":2},{"date":"2020-09-03","count":2,"intensity":1},{"date":"2020-09-04","count":0,"intensity":0},{"date":"2020-09-05","count":0,"intensity":0}],[{"date":"2020-09-06","count":5,"intensity":1},{"date":"2020-09-07","count":0,"intensity":0},{"date":"2020-09-08","count":6,"intensity":1},{"date":"2020-09-09","count":13,"intensity":2},{"date":"2020-09-10","count":2,"intensity":1}]]}')},LQXr:function(){},MV5A:function(){},hosL:function(t,n,e){"use strict";function i(t,n){for(var e in n)t[e]=n[e];return t}function o(t){var n=t.parentNode;n&&n.removeChild(t)}function u(t,n,e){var i,o,u,s=arguments,a={};for(u in n)"key"==u?i=n[u]:"ref"==u?o=n[u]:a[u]=n[u];if(arguments.length>3)for(e=[e],u=3;u<arguments.length;u++)e.push(s[u]);if(null!=e&&(a.children=e),"function"==typeof t&&null!=t.defaultProps)for(u in t.defaultProps)void 0===a[u]&&(a[u]=t.defaultProps[u]);return c(t,a,i,o,null)}function c(t,n,e,i,o){var u={type:t,props:n,key:e,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(u.__v=u),null!=H.vnode&&H.vnode(u),u}function s(){return{current:null}}function a(t){return t.children}function d(t,n){this.props=t,this.context=n}function r(t,n){if(null==n)return t.__?r(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?r(t):null}function y(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return y(t)}}function _(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!l.__r++||B!==H.debounceRendering)&&((B=H.debounceRendering)||T)(l)}function l(){for(var t;l.__r=L.length;)t=L.sort((function(t,n){return t.__v.__b-n.__v.__b})),L=[],t.some((function(t){var n,e,o,u,c,s,a;t.__d&&(s=(c=(n=t).__v).__e,(a=n.__P)&&(e=[],(o=i({},c)).__v=o,u=k(a,c,o,n.__n,void 0!==a.ownerSVGElement,null,e,null==s?r(c):s),w(e,c),u!=s&&y(c)))}))}function f(t,n,e,i,u,s,d,y,_,l){var f,p,v,m,g,b,w,C=i&&i.__k||U,A=C.length;for(_==M&&(_=null!=d?d[0]:A?r(i,0):null),e.__k=[],f=0;f<n.length;f++)if(null!=(m=e.__k[f]=null==(m=n[f])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?c(null,m,null,null,m):Array.isArray(m)?c(a,{children:m},null,null,null):null!=m.__e||null!=m.__c?c(m.type,m.props,m.key,null,m.__v):m)){if(m.__=e,m.__b=e.__b+1,null===(v=C[f])||v&&m.key==v.key&&m.type===v.type)C[f]=void 0;else for(p=0;p<A;p++){if((v=C[p])&&m.key==v.key&&m.type===v.type){C[p]=void 0;break}v=null}g=k(t,m,v=v||M,u,s,d,y,_,l),(p=m.ref)&&v.ref!=p&&(w||(w=[]),v.ref&&w.push(v.ref,null,m),w.push(p,m.__c||g,m)),null!=g?(null==b&&(b=g),_=h(t,m,v,C,d,g,_),l||"option"!=e.type?"function"==typeof e.type&&(e.__d=_):t.value=""):_&&v.__e==_&&_.parentNode!=t&&(_=r(v))}if(e.__e=b,null!=d&&"function"!=typeof e.type)for(f=d.length;f--;)null!=d[f]&&o(d[f]);for(f=A;f--;)null!=C[f]&&E(C[f],C[f]);if(w)for(f=0;f<w.length;f++)x(w[f],w[++f],w[++f])}function p(t,n){return n=n||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){p(t,n)})):n.push(t)),n}function h(t,n,e,i,o,u,c){var s,a,d;if(void 0!==n.__d)s=n.__d,n.__d=void 0;else if(o==e||u!=c||null==u.parentNode)t:if(null==c||c.parentNode!==t)t.appendChild(u),s=null;else{for(a=c,d=0;(a=a.nextSibling)&&d<i.length;d+=2)if(a==u)break t;t.insertBefore(u,c),s=c}return void 0!==s?s:u.nextSibling}function v(t,n,e){"-"===n[0]?t.setProperty(n,e):t[n]=null==e?"":"number"!=typeof e||F.test(n)?e:e+"px"}function m(t,n,e,i,o){var u,c;if(o&&"className"==n&&(n="class"),"style"===n)if("string"==typeof e)t.style=e;else{if("string"==typeof i&&(t.style=i=""),i)for(n in i)e&&n in e||v(t.style,n,"");if(e)for(n in e)i&&e[n]===i[n]||v(t.style,n,e[n])}else"o"===n[0]&&"n"===n[1]?(u=n!==(n=n.replace(/Capture$/,"")),(c=n.toLowerCase())in t&&(n=c),n=n.slice(2),t.l||(t.l={}),t.l[n]=e,e?i||t.addEventListener(n,g,u):t.removeEventListener(n,g,u)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&"download"!==n&&"href"!==n&&!o&&n in t?t[n]=null==e?"":e:"function"!=typeof e&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/xlink:?/,""))?null==e||!1===e?t.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),e):null==e||!1===e&&!/^ar/.test(n)?t.removeAttribute(n):t.setAttribute(n,e))}function g(t){this.l[t.type](H.event?H.event(t):t)}function b(t,n,e){var i,o;for(i=0;i<t.__k.length;i++)(o=t.__k[i])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&b(o,n,e),n=h(e,o,o,t.__k,null,o.__e,n),"function"==typeof t.type&&(t.__d=n)))}function k(t,n,e,o,u,c,s,r,y){var _,l,p,h,v,m,g,k,w,x,E,O=n.type;if(void 0!==n.constructor)return null;(_=H.__b)&&_(n);try{t:if("function"==typeof O){if(k=n.props,w=(_=O.contextType)&&o[_.__c],x=_?w?w.props.value:_.__:o,e.__c?g=(l=n.__c=e.__c).__=l.__E:("prototype"in O&&O.prototype.render?n.__c=l=new O(k,x):(n.__c=l=new d(k,x),l.constructor=O,l.render=A),w&&w.sub(l),l.props=k,l.state||(l.state={}),l.context=x,l.__n=o,p=l.__d=!0,l.__h=[]),null==l.__s&&(l.__s=l.state),null!=O.getDerivedStateFromProps&&(l.__s==l.state&&(l.__s=i({},l.__s)),i(l.__s,O.getDerivedStateFromProps(k,l.__s))),h=l.props,v=l.state,p)null==O.getDerivedStateFromProps&&null!=l.componentWillMount&&l.componentWillMount(),null!=l.componentDidMount&&l.__h.push(l.componentDidMount);else{if(null==O.getDerivedStateFromProps&&k!==h&&null!=l.componentWillReceiveProps&&l.componentWillReceiveProps(k,x),!l.__e&&null!=l.shouldComponentUpdate&&!1===l.shouldComponentUpdate(k,l.__s,x)||n.__v===e.__v){l.props=k,l.state=l.__s,n.__v!==e.__v&&(l.__d=!1),l.__v=n,n.__e=e.__e,n.__k=e.__k,l.__h.length&&s.push(l),b(n,r,t);break t}null!=l.componentWillUpdate&&l.componentWillUpdate(k,l.__s,x),null!=l.componentDidUpdate&&l.__h.push((function(){l.componentDidUpdate(h,v,m)}))}l.context=x,l.props=k,l.state=l.__s,(_=H.__r)&&_(n),l.__d=!1,l.__v=n,l.__P=t,_=l.render(l.props,l.state,l.context),l.state=l.__s,null!=l.getChildContext&&(o=i(i({},o),l.getChildContext())),p||null==l.getSnapshotBeforeUpdate||(m=l.getSnapshotBeforeUpdate(h,v)),E=null!=_&&_.type==a&&null==_.key?_.props.children:_,f(t,Array.isArray(E)?E:[E],n,e,o,u,c,s,r,y),l.base=n.__e,l.__h.length&&s.push(l),g&&(l.__E=l.__=null),l.__e=!1}else null==c&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=C(e.__e,n,e,o,u,c,s,y);(_=H.diffed)&&_(n)}catch(t){n.__v=null,H.__e(t,n,e)}return n.__e}function w(t,n){H.__c&&H.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){H.__e(t,n.__v)}}))}function C(t,n,e,i,o,u,c,s){var a,d,r,y,_,l=e.props,p=n.props;if(o="svg"===n.type||o,null!=u)for(a=0;a<u.length;a++)if(null!=(d=u[a])&&((null===n.type?3===d.nodeType:d.localName===n.type)||t==d)){t=d,u[a]=null;break}if(null==t){if(null===n.type)return document.createTextNode(p);t=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,p.is&&{is:p.is}),u=null,s=!1}if(null===n.type)l!==p&&t.data!==p&&(t.data=p);else{if(null!=u&&(u=U.slice.call(t.childNodes)),r=(l=e.props||M).dangerouslySetInnerHTML,y=p.dangerouslySetInnerHTML,!s){if(null!=u)for(l={},_=0;_<t.attributes.length;_++)l[t.attributes[_].name]=t.attributes[_].value;(y||r)&&(y&&r&&y.__html==r.__html||(t.innerHTML=y&&y.__html||""))}(function(t,n,e,i,o){var u;for(u in e)"children"===u||"key"===u||u in n||m(t,u,null,e[u],i);for(u in n)o&&"function"!=typeof n[u]||"children"===u||"key"===u||"value"===u||"checked"===u||e[u]===n[u]||m(t,u,n[u],e[u],i)})(t,p,l,o,s),y?n.__k=[]:(a=n.props.children,f(t,Array.isArray(a)?a:[a],n,e,i,"foreignObject"!==n.type&&o,u,c,M,s)),s||("value"in p&&void 0!==(a=p.value)&&a!==t.value&&m(t,"value",a,l.value,!1),"checked"in p&&void 0!==(a=p.checked)&&a!==t.checked&&m(t,"checked",a,l.checked,!1))}return t}function x(t,n,e){try{"function"==typeof t?t(n):t.current=n}catch(t){H.__e(t,e)}}function E(t,n,e){var i,u,c;if(H.unmount&&H.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||x(i,null,n)),e||"function"==typeof t.type||(e=null!=(u=t.__e)),t.__e=t.__d=void 0,null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){H.__e(t,n)}i.base=i.__P=null}if(i=t.__k)for(c=0;c<i.length;c++)i[c]&&E(i[c],n,e);null!=u&&o(u)}function A(t,n,e){return this.constructor(t,e)}function O(t,n,e){var i,o,c;H.__&&H.__(t,n),o=(i=e===D)?null:e&&e.__k||n.__k,t=u(a,null,[t]),c=[],k(n,(i?n:e||n).__k=t,o||M,M,void 0!==n.ownerSVGElement,e&&!i?[e]:o?null:n.childNodes.length?U.slice.call(n.childNodes):null,c,e||M,i),w(c,t)}function S(t,n){O(t,n,D)}function j(t,n,e){var o,u,s,a=arguments,d=i({},t.props);for(s in n)"key"==s?o=n[s]:"ref"==s?u=n[s]:d[s]=n[s];if(arguments.length>3)for(e=[e],s=3;s<arguments.length;s++)e.push(a[s]);return null!=e&&(d.children=e),c(t.type,d,o||t.key,u||t.ref,null)}function P(t,n){var e={__c:n="__cC"+N++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t,e,i){return this.getChildContext||(e=[],(i={})[n]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(_)},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}e.r(n),e.d(n,"render",(function(){return O})),e.d(n,"hydrate",(function(){return S})),e.d(n,"createElement",(function(){return u})),e.d(n,"h",(function(){return u})),e.d(n,"Fragment",(function(){return a})),e.d(n,"createRef",(function(){return s})),e.d(n,"isValidElement",(function(){return R})),e.d(n,"Component",(function(){return d})),e.d(n,"cloneElement",(function(){return j})),e.d(n,"createContext",(function(){return P})),e.d(n,"toChildArray",(function(){return p})),e.d(n,"__u",(function(){return E})),e.d(n,"options",(function(){return H}));var H,R,L,T,B,D,N,M={},U=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;H={__e:function(t,n){for(var e,i;n=n.__;)if((e=n.__c)&&!e.__)try{if(e.constructor&&null!=e.constructor.getDerivedStateFromError&&(i=!0,e.setState(e.constructor.getDerivedStateFromError(t))),null!=e.componentDidCatch&&(i=!0,e.componentDidCatch(t)),i)return _(e.__E=e)}catch(n){t=n}throw t}},R=function(t){return null!=t&&void 0===t.constructor},d.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=i({},this.state),"function"==typeof t&&(t=t(i({},e),this.props)),t&&i(e,t),null!=t&&this.__v&&(n&&this.__h.push(n),_(this))},d.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},d.prototype.render=a,L=[],T="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l.__r=0,D=M,N=0},isEG:function(){},mdyV:function(t,n,e){"use strict";e.r(n);var i=e("hosL");const{h:o,render:u,hydrate:c}=i,s=t=>t&&t.default?t.default:t;if("serviceWorker"in navigator&&navigator.serviceWorker.register(e.p+"sw-esm.js"),"function"==typeof s(e("/hs+"))){let t=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let n=s(e("/hs+")),i={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(i=JSON.parse(decodeURI(c.innerHTML)).preRenderData||i);i.url&&(a=i.url);var a;t=u(o(n,{CLI_DATA:{preRenderData:i}}),document.body,t)})()}}});
//# sourceMappingURL=bundle.3ab03.esm.js.map