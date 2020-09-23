!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(n){return t[n]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="https://rschristian.github.io/preact-hint",n(n.s="mdyV")}({"/hs+":function(t,n,e){"use strict";function i(t,n){v.d.__h&&v.d.__h(p,t,m||n),m=0;var e=p.__H||(p.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function o(t){return m=1,function(t,n,e){var o=i(f++,2);return o.t=t,o.__c||(o.__c=p,o.__=[e?e(n):r(void 0,n),function(t){var n=o.t(o.__[0],t);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}]),o.__}(r,t)}function u(t,n){var e=i(f++,7);return d(e.__H,n)?(e.__H=n,e.__h=t,e.__=t()):e.__}function c(){b.some((function(t){if(t.__P)try{t.__H.__h.forEach(a),t.__H.__h.forEach(s),t.__H.__h=[]}catch(n){return t.__H.__h=[],v.d.__e(n,t.__v),!0}})),b=[]}function a(t){"function"==typeof t.u&&t.u()}function s(t){t.u=t.__()}function d(t,n){return!t||n.some((function(n,e){return n!==t[e]}))}function r(t,n){return"function"==typeof n?n(t):n}function y(t){var n,e,c,a,s=(n=null,m=5,u((function(){return{current:n}}),[])),r=o(0),y=r[0],_=r[1];return e=function(){s.current&&_(s.current.getBoundingClientRect().width)},c=[s],a=i(f++,3),!v.d.__s&&d(a.__H,c)&&(a.__=e,a.__H=c,p.__H.__h.push(a)),Object(v.b)("div",{class:"preact-hint preact-hint__fade-in",style:{bottom:t.rootBoundingRect.height-t.targetBoundingRect.top+t.rootBoundingRect.top+2,left:t.targetBoundingRect.left-t.rootBoundingRect.left-y/2+t.targetBoundingRect.width/2}},Object(v.b)("span",{class:"preact-hint__content",ref:s},t.template?t.template(t.content):t.content))}function _(t){var n,e=o(""),i=e[0],c=e[1],a=o(null),s=a[0],d=a[1],r=o(null),_=r[0],l=r[1],f=(n=function(t){d(t),s&&(s.addEventListener("mouseover",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(c(t.target.getAttribute("data-preact-hint")||""),l(t.target.getBoundingClientRect()))})),s.addEventListener("mouseout",(function(t){t.target instanceof Element&&t.target.hasAttribute("data-preact-hint")&&(c(""),l(null))})))},m=8,u((function(){return n}),[s]));return Object(v.b)("div",{ref:f,style:{position:"relative"}},i&&s&&_&&Object(v.b)(y,{content:i,template:t.template,rootBoundingRect:s.getBoundingClientRect(),targetBoundingRect:_}),t.children)}function l(){var t=O,n=["#ededed","#62A197","#428892","#296887","#274969"];return Object(v.b)(v.a,null,Object(v.b)("section",{class:"hero"},Object(v.b)("div",{class:"hero-body"},Object(v.b)("div",{class:"container"},Object(v.b)("h1",{class:"is-size-2"},"Preact Hint")))),Object(v.b)("div",{class:"container"},Object(v.b)("div",{class:"tile box preview"},Object(v.b)(_,{template:function(t){var n=t.split(",");return Object(v.b)(v.a,null,Object(v.b)("strong",null,n[0]," Contributions")," on ",n[1])}},Object(v.b)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 740 96"},t.contributions.map((function(t){return t.map((function(t,e){return Object(v.b)("rect",{key:t.date,x:"0",y:14*e,width:12,height:12,fill:n[t.intensity],"data-preact-hint":[t.count,t.date]})}))})).map((function(t,n){return Object(v.b)("g",{key:n,transform:"translate("+14*n+", 0)"},t)})))))))}e.r(n),e.d(n,"default",(function(){return l}));var f,p,h,v=e("hosL"),m=(e("LQXr"),e("isEG"),0),b=[],g=v.d.__r,k=v.d.diffed,w=v.d.__c,S=v.d.unmount;v.d.__r=function(t){g&&g(t),f=0;var n=(p=t.__c).__H;n&&(n.__h.forEach(a),n.__h.forEach(s),n.__h=[])},v.d.diffed=function(t){k&&k(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==b.push(n)&&h===v.d.requestAnimationFrame||((h=v.d.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(i),E&&cancelAnimationFrame(n),setTimeout(t)},i=setTimeout(e,100);E&&(n=requestAnimationFrame(e))})(c))},v.d.__c=function(t,n){n.some((function(t){try{t.__h.forEach(a),t.__h=t.__h.filter((function(t){return!t.__||s(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],v.d.__e(e,t.__v)}})),w&&w(t,n)},v.d.unmount=function(t){S&&S(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(a)}catch(t){v.d.__e(t,n.__v)}};var E="function"==typeof requestAnimationFrame,O=(e("MV5A"),e("EKnp"))},EKnp:function(t){t.exports=JSON.parse('{"contributions":[[{"date":"2019-09-08","count":24,"intensity":3},{"date":"2019-09-09","count":7,"intensity":1},{"date":"2019-09-10","count":8,"intensity":1},{"date":"2019-09-11","count":3,"intensity":1},{"date":"2019-09-12","count":3,"intensity":1},{"date":"2019-09-13","count":5,"intensity":1},{"date":"2019-09-14","count":0,"intensity":0}],[{"date":"2019-09-15","count":0,"intensity":0},{"date":"2019-09-16","count":0,"intensity":0},{"date":"2019-09-17","count":0,"intensity":0},{"date":"2019-09-18","count":0,"intensity":0},{"date":"2019-09-19","count":0,"intensity":0},{"date":"2019-09-20","count":0,"intensity":0},{"date":"2019-09-21","count":0,"intensity":0}],[{"date":"2019-09-22","count":0,"intensity":0},{"date":"2019-09-23","count":0,"intensity":0},{"date":"2019-09-24","count":0,"intensity":0},{"date":"2019-09-25","count":2,"intensity":1},{"date":"2019-09-26","count":0,"intensity":0},{"date":"2019-09-27","count":0,"intensity":0},{"date":"2019-09-28","count":2,"intensity":1}],[{"date":"2019-09-29","count":2,"intensity":1},{"date":"2019-09-30","count":0,"intensity":0},{"date":"2019-10-01","count":4,"intensity":1},{"date":"2019-10-02","count":0,"intensity":0},{"date":"2019-10-03","count":0,"intensity":0},{"date":"2019-10-04","count":0,"intensity":0},{"date":"2019-10-05","count":0,"intensity":0}],[{"date":"2019-10-06","count":0,"intensity":0},{"date":"2019-10-07","count":0,"intensity":0},{"date":"2019-10-08","count":4,"intensity":1},{"date":"2019-10-09","count":2,"intensity":1},{"date":"2019-10-10","count":18,"intensity":3},{"date":"2019-10-11","count":34,"intensity":4},{"date":"2019-10-12","count":2,"intensity":1}],[{"date":"2019-10-13","count":0,"intensity":0},{"date":"2019-10-14","count":1,"intensity":1},{"date":"2019-10-15","count":1,"intensity":1},{"date":"2019-10-16","count":6,"intensity":1},{"date":"2019-10-17","count":12,"intensity":2},{"date":"2019-10-18","count":4,"intensity":1},{"date":"2019-10-19","count":4,"intensity":1}],[{"date":"2019-10-20","count":4,"intensity":1},{"date":"2019-10-21","count":7,"intensity":1},{"date":"2019-10-22","count":3,"intensity":1},{"date":"2019-10-23","count":9,"intensity":2},{"date":"2019-10-24","count":0,"intensity":0},{"date":"2019-10-25","count":0,"intensity":0},{"date":"2019-10-26","count":3,"intensity":1}],[{"date":"2019-10-27","count":2,"intensity":1},{"date":"2019-10-28","count":1,"intensity":1},{"date":"2019-10-29","count":0,"intensity":0},{"date":"2019-10-30","count":11,"intensity":2},{"date":"2019-10-31","count":14,"intensity":2},{"date":"2019-11-01","count":5,"intensity":1},{"date":"2019-11-02","count":6,"intensity":1}],[{"date":"2019-11-03","count":4,"intensity":1},{"date":"2019-11-04","count":6,"intensity":1},{"date":"2019-11-05","count":9,"intensity":2},{"date":"2019-11-06","count":5,"intensity":1},{"date":"2019-11-07","count":9,"intensity":2},{"date":"2019-11-08","count":15,"intensity":2},{"date":"2019-11-09","count":0,"intensity":0}],[{"date":"2019-11-10","count":0,"intensity":0},{"date":"2019-11-11","count":1,"intensity":1},{"date":"2019-11-12","count":0,"intensity":0},{"date":"2019-11-13","count":0,"intensity":0},{"date":"2019-11-14","count":2,"intensity":1},{"date":"2019-11-15","count":8,"intensity":1},{"date":"2019-11-16","count":1,"intensity":1}],[{"date":"2019-11-17","count":1,"intensity":1},{"date":"2019-11-18","count":3,"intensity":1},{"date":"2019-11-19","count":3,"intensity":1},{"date":"2019-11-20","count":8,"intensity":1},{"date":"2019-11-21","count":4,"intensity":1},{"date":"2019-11-22","count":11,"intensity":2},{"date":"2019-11-23","count":23,"intensity":3}],[{"date":"2019-11-24","count":2,"intensity":1},{"date":"2019-11-25","count":8,"intensity":1},{"date":"2019-11-26","count":4,"intensity":1},{"date":"2019-11-27","count":15,"intensity":2},{"date":"2019-11-28","count":16,"intensity":2},{"date":"2019-11-29","count":10,"intensity":2},{"date":"2019-11-30","count":20,"intensity":3}],[{"date":"2019-12-01","count":1,"intensity":1},{"date":"2019-12-02","count":1,"intensity":1},{"date":"2019-12-03","count":16,"intensity":2},{"date":"2019-12-04","count":5,"intensity":1},{"date":"2019-12-05","count":5,"intensity":1},{"date":"2019-12-06","count":9,"intensity":2},{"date":"2019-12-07","count":5,"intensity":1}],[{"date":"2019-12-08","count":21,"intensity":3},{"date":"2019-12-09","count":21,"intensity":3},{"date":"2019-12-10","count":0,"intensity":0},{"date":"2019-12-11","count":5,"intensity":1},{"date":"2019-12-12","count":0,"intensity":0},{"date":"2019-12-13","count":0,"intensity":0},{"date":"2019-12-14","count":23,"intensity":3}],[{"date":"2019-12-15","count":0,"intensity":0},{"date":"2019-12-16","count":0,"intensity":0},{"date":"2019-12-17","count":0,"intensity":0},{"date":"2019-12-18","count":10,"intensity":2},{"date":"2019-12-19","count":8,"intensity":1},{"date":"2019-12-20","count":6,"intensity":1},{"date":"2019-12-21","count":1,"intensity":1}],[{"date":"2019-12-22","count":3,"intensity":1},{"date":"2019-12-23","count":0,"intensity":0},{"date":"2019-12-24","count":8,"intensity":1},{"date":"2019-12-25","count":0,"intensity":0},{"date":"2019-12-26","count":0,"intensity":0},{"date":"2019-12-27","count":2,"intensity":1},{"date":"2019-12-28","count":0,"intensity":0}],[{"date":"2019-12-29","count":0,"intensity":0},{"date":"2019-12-30","count":0,"intensity":0},{"date":"2019-12-31","count":0,"intensity":0},{"date":"2020-01-01","count":0,"intensity":0},{"date":"2020-01-02","count":3,"intensity":1},{"date":"2020-01-03","count":0,"intensity":0},{"date":"2020-01-04","count":0,"intensity":0}],[{"date":"2020-01-05","count":0,"intensity":0},{"date":"2020-01-06","count":0,"intensity":0},{"date":"2020-01-07","count":0,"intensity":0},{"date":"2020-01-08","count":4,"intensity":1},{"date":"2020-01-09","count":0,"intensity":0},{"date":"2020-01-10","count":1,"intensity":1},{"date":"2020-01-11","count":17,"intensity":2}],[{"date":"2020-01-12","count":4,"intensity":1},{"date":"2020-01-13","count":0,"intensity":0},{"date":"2020-01-14","count":4,"intensity":1},{"date":"2020-01-15","count":5,"intensity":1},{"date":"2020-01-16","count":12,"intensity":2},{"date":"2020-01-17","count":0,"intensity":0},{"date":"2020-01-18","count":0,"intensity":0}],[{"date":"2020-01-19","count":0,"intensity":0},{"date":"2020-01-20","count":5,"intensity":1},{"date":"2020-01-21","count":10,"intensity":2},{"date":"2020-01-22","count":0,"intensity":0},{"date":"2020-01-23","count":7,"intensity":1},{"date":"2020-01-24","count":21,"intensity":3},{"date":"2020-01-25","count":23,"intensity":3}],[{"date":"2020-01-26","count":15,"intensity":2},{"date":"2020-01-27","count":1,"intensity":1},{"date":"2020-01-28","count":10,"intensity":2},{"date":"2020-01-29","count":11,"intensity":2},{"date":"2020-01-30","count":6,"intensity":1},{"date":"2020-01-31","count":10,"intensity":2},{"date":"2020-02-01","count":7,"intensity":1}],[{"date":"2020-02-02","count":0,"intensity":0},{"date":"2020-02-03","count":9,"intensity":2},{"date":"2020-02-04","count":11,"intensity":2},{"date":"2020-02-05","count":0,"intensity":0},{"date":"2020-02-06","count":5,"intensity":1},{"date":"2020-02-07","count":12,"intensity":2},{"date":"2020-02-08","count":21,"intensity":3}],[{"date":"2020-02-09","count":20,"intensity":3},{"date":"2020-02-10","count":15,"intensity":2},{"date":"2020-02-11","count":38,"intensity":4},{"date":"2020-02-12","count":1,"intensity":1},{"date":"2020-02-13","count":14,"intensity":2},{"date":"2020-02-14","count":2,"intensity":1},{"date":"2020-02-15","count":9,"intensity":2}],[{"date":"2020-02-16","count":32,"intensity":4},{"date":"2020-02-17","count":18,"intensity":3},{"date":"2020-02-18","count":27,"intensity":4},{"date":"2020-02-19","count":11,"intensity":2},{"date":"2020-02-20","count":24,"intensity":3},{"date":"2020-02-21","count":2,"intensity":1},{"date":"2020-02-22","count":11,"intensity":2}],[{"date":"2020-02-23","count":11,"intensity":2},{"date":"2020-02-24","count":0,"intensity":0},{"date":"2020-02-25","count":1,"intensity":1},{"date":"2020-02-26","count":8,"intensity":1},{"date":"2020-02-27","count":1,"intensity":1},{"date":"2020-02-28","count":13,"intensity":2},{"date":"2020-02-29","count":4,"intensity":1}],[{"date":"2020-03-01","count":8,"intensity":1},{"date":"2020-03-02","count":4,"intensity":1},{"date":"2020-03-03","count":6,"intensity":1},{"date":"2020-03-04","count":10,"intensity":2},{"date":"2020-03-05","count":0,"intensity":0},{"date":"2020-03-06","count":1,"intensity":1},{"date":"2020-03-07","count":1,"intensity":1}],[{"date":"2020-03-08","count":13,"intensity":2},{"date":"2020-03-09","count":27,"intensity":4},{"date":"2020-03-10","count":6,"intensity":1},{"date":"2020-03-11","count":9,"intensity":2},{"date":"2020-03-12","count":14,"intensity":2},{"date":"2020-03-13","count":25,"intensity":3},{"date":"2020-03-14","count":0,"intensity":0}],[{"date":"2020-03-15","count":12,"intensity":2},{"date":"2020-03-16","count":7,"intensity":1},{"date":"2020-03-17","count":2,"intensity":1},{"date":"2020-03-18","count":7,"intensity":1},{"date":"2020-03-19","count":12,"intensity":2},{"date":"2020-03-20","count":35,"intensity":4},{"date":"2020-03-21","count":46,"intensity":4}],[{"date":"2020-03-22","count":23,"intensity":3},{"date":"2020-03-23","count":9,"intensity":2},{"date":"2020-03-24","count":3,"intensity":1},{"date":"2020-03-25","count":7,"intensity":1},{"date":"2020-03-26","count":15,"intensity":2},{"date":"2020-03-27","count":23,"intensity":3},{"date":"2020-03-28","count":5,"intensity":1}],[{"date":"2020-03-29","count":11,"intensity":2},{"date":"2020-03-30","count":14,"intensity":2},{"date":"2020-03-31","count":5,"intensity":1},{"date":"2020-04-01","count":30,"intensity":4},{"date":"2020-04-02","count":22,"intensity":3},{"date":"2020-04-03","count":14,"intensity":2},{"date":"2020-04-04","count":14,"intensity":2}],[{"date":"2020-04-05","count":6,"intensity":1},{"date":"2020-04-06","count":18,"intensity":3},{"date":"2020-04-07","count":27,"intensity":4},{"date":"2020-04-08","count":0,"intensity":0},{"date":"2020-04-09","count":3,"intensity":1},{"date":"2020-04-10","count":0,"intensity":0},{"date":"2020-04-11","count":11,"intensity":2}],[{"date":"2020-04-12","count":4,"intensity":1},{"date":"2020-04-13","count":2,"intensity":1},{"date":"2020-04-14","count":0,"intensity":0},{"date":"2020-04-15","count":3,"intensity":1},{"date":"2020-04-16","count":6,"intensity":1},{"date":"2020-04-17","count":0,"intensity":0},{"date":"2020-04-18","count":5,"intensity":1}],[{"date":"2020-04-19","count":17,"intensity":2},{"date":"2020-04-20","count":2,"intensity":1},{"date":"2020-04-21","count":0,"intensity":0},{"date":"2020-04-22","count":2,"intensity":1},{"date":"2020-04-23","count":0,"intensity":0},{"date":"2020-04-24","count":0,"intensity":0},{"date":"2020-04-25","count":0,"intensity":0}],[{"date":"2020-04-26","count":0,"intensity":0},{"date":"2020-04-27","count":0,"intensity":0},{"date":"2020-04-28","count":0,"intensity":0},{"date":"2020-04-29","count":0,"intensity":0},{"date":"2020-04-30","count":3,"intensity":1},{"date":"2020-05-01","count":0,"intensity":0},{"date":"2020-05-02","count":1,"intensity":1}],[{"date":"2020-05-03","count":1,"intensity":1},{"date":"2020-05-04","count":0,"intensity":0},{"date":"2020-05-05","count":0,"intensity":0},{"date":"2020-05-06","count":0,"intensity":0},{"date":"2020-05-07","count":1,"intensity":1},{"date":"2020-05-08","count":2,"intensity":1},{"date":"2020-05-09","count":6,"intensity":1}],[{"date":"2020-05-10","count":9,"intensity":2},{"date":"2020-05-11","count":0,"intensity":0},{"date":"2020-05-12","count":3,"intensity":1},{"date":"2020-05-13","count":20,"intensity":3},{"date":"2020-05-14","count":1,"intensity":1},{"date":"2020-05-15","count":0,"intensity":0},{"date":"2020-05-16","count":0,"intensity":0}],[{"date":"2020-05-17","count":2,"intensity":1},{"date":"2020-05-18","count":0,"intensity":0},{"date":"2020-05-19","count":0,"intensity":0},{"date":"2020-05-20","count":10,"intensity":2},{"date":"2020-05-21","count":0,"intensity":0},{"date":"2020-05-22","count":0,"intensity":0},{"date":"2020-05-23","count":11,"intensity":2}],[{"date":"2020-05-24","count":25,"intensity":3},{"date":"2020-05-25","count":2,"intensity":1},{"date":"2020-05-26","count":0,"intensity":0},{"date":"2020-05-27","count":3,"intensity":1},{"date":"2020-05-28","count":10,"intensity":2},{"date":"2020-05-29","count":14,"intensity":2},{"date":"2020-05-30","count":14,"intensity":2}],[{"date":"2020-05-31","count":28,"intensity":4},{"date":"2020-06-01","count":28,"intensity":4},{"date":"2020-06-02","count":9,"intensity":2},{"date":"2020-06-03","count":4,"intensity":1},{"date":"2020-06-04","count":3,"intensity":1},{"date":"2020-06-05","count":7,"intensity":1},{"date":"2020-06-06","count":5,"intensity":1}],[{"date":"2020-06-07","count":1,"intensity":1},{"date":"2020-06-08","count":9,"intensity":2},{"date":"2020-06-09","count":1,"intensity":1},{"date":"2020-06-10","count":2,"intensity":1},{"date":"2020-06-11","count":0,"intensity":0},{"date":"2020-06-12","count":4,"intensity":1},{"date":"2020-06-13","count":12,"intensity":2}],[{"date":"2020-06-14","count":9,"intensity":2},{"date":"2020-06-15","count":13,"intensity":2},{"date":"2020-06-16","count":4,"intensity":1},{"date":"2020-06-17","count":11,"intensity":2},{"date":"2020-06-18","count":1,"intensity":1},{"date":"2020-06-19","count":11,"intensity":2},{"date":"2020-06-20","count":0,"intensity":0}],[{"date":"2020-06-21","count":2,"intensity":1},{"date":"2020-06-22","count":1,"intensity":1},{"date":"2020-06-23","count":3,"intensity":1},{"date":"2020-06-24","count":3,"intensity":1},{"date":"2020-06-25","count":10,"intensity":2},{"date":"2020-06-26","count":5,"intensity":1},{"date":"2020-06-27","count":6,"intensity":1}],[{"date":"2020-06-28","count":4,"intensity":1},{"date":"2020-06-29","count":1,"intensity":1},{"date":"2020-06-30","count":8,"intensity":1},{"date":"2020-07-01","count":1,"intensity":1},{"date":"2020-07-02","count":0,"intensity":0},{"date":"2020-07-03","count":0,"intensity":0},{"date":"2020-07-04","count":8,"intensity":1}],[{"date":"2020-07-05","count":6,"intensity":1},{"date":"2020-07-06","count":2,"intensity":1},{"date":"2020-07-07","count":0,"intensity":0},{"date":"2020-07-08","count":15,"intensity":2},{"date":"2020-07-09","count":17,"intensity":2},{"date":"2020-07-10","count":4,"intensity":1},{"date":"2020-07-11","count":18,"intensity":3}],[{"date":"2020-07-12","count":2,"intensity":1},{"date":"2020-07-13","count":10,"intensity":2},{"date":"2020-07-14","count":3,"intensity":1},{"date":"2020-07-15","count":2,"intensity":1},{"date":"2020-07-16","count":17,"intensity":2},{"date":"2020-07-17","count":0,"intensity":0},{"date":"2020-07-18","count":0,"intensity":0}],[{"date":"2020-07-19","count":0,"intensity":0},{"date":"2020-07-20","count":0,"intensity":0},{"date":"2020-07-21","count":5,"intensity":1},{"date":"2020-07-22","count":4,"intensity":1},{"date":"2020-07-23","count":15,"intensity":2},{"date":"2020-07-24","count":6,"intensity":1},{"date":"2020-07-25","count":2,"intensity":1}],[{"date":"2020-07-26","count":8,"intensity":1},{"date":"2020-07-27","count":10,"intensity":2},{"date":"2020-07-28","count":18,"intensity":3},{"date":"2020-07-29","count":0,"intensity":0},{"date":"2020-07-30","count":6,"intensity":1},{"date":"2020-07-31","count":0,"intensity":0},{"date":"2020-08-01","count":0,"intensity":0}],[{"date":"2020-08-02","count":0,"intensity":0},{"date":"2020-08-03","count":6,"intensity":1},{"date":"2020-08-04","count":17,"intensity":2},{"date":"2020-08-05","count":12,"intensity":2},{"date":"2020-08-06","count":9,"intensity":2},{"date":"2020-08-07","count":10,"intensity":2},{"date":"2020-08-08","count":0,"intensity":0}],[{"date":"2020-08-09","count":6,"intensity":1},{"date":"2020-08-10","count":1,"intensity":1},{"date":"2020-08-11","count":6,"intensity":1},{"date":"2020-08-12","count":0,"intensity":0},{"date":"2020-08-13","count":1,"intensity":1},{"date":"2020-08-14","count":2,"intensity":1},{"date":"2020-08-15","count":0,"intensity":0}],[{"date":"2020-08-16","count":5,"intensity":1},{"date":"2020-08-17","count":5,"intensity":1},{"date":"2020-08-18","count":5,"intensity":1},{"date":"2020-08-19","count":0,"intensity":0},{"date":"2020-08-20","count":1,"intensity":1},{"date":"2020-08-21","count":5,"intensity":1},{"date":"2020-08-22","count":5,"intensity":1}],[{"date":"2020-08-23","count":16,"intensity":2},{"date":"2020-08-24","count":14,"intensity":2},{"date":"2020-08-25","count":8,"intensity":1},{"date":"2020-08-26","count":10,"intensity":2},{"date":"2020-08-27","count":2,"intensity":1},{"date":"2020-08-28","count":1,"intensity":1},{"date":"2020-08-29","count":15,"intensity":2}],[{"date":"2020-08-30","count":1,"intensity":1},{"date":"2020-08-31","count":7,"intensity":1},{"date":"2020-09-01","count":9,"intensity":2},{"date":"2020-09-02","count":11,"intensity":2},{"date":"2020-09-03","count":2,"intensity":1},{"date":"2020-09-04","count":0,"intensity":0},{"date":"2020-09-05","count":0,"intensity":0}],[{"date":"2020-09-06","count":5,"intensity":1},{"date":"2020-09-07","count":0,"intensity":0},{"date":"2020-09-08","count":6,"intensity":1},{"date":"2020-09-09","count":13,"intensity":2},{"date":"2020-09-10","count":2,"intensity":1}]]}')},LQXr:function(){},MV5A:function(){},hosL:function(t,n,e){"use strict";function i(t,n){for(var e in n)t[e]=n[e];return t}function o(t){var n=t.parentNode;n&&n.removeChild(t)}function u(t,n,e){var i,o,u,a=arguments,s={};for(u in n)"key"==u?i=n[u]:"ref"==u?o=n[u]:s[u]=n[u];if(arguments.length>3)for(e=[e],u=3;u<arguments.length;u++)e.push(a[u]);if(null!=e&&(s.children=e),"function"==typeof t&&null!=t.defaultProps)for(u in t.defaultProps)void 0===s[u]&&(s[u]=t.defaultProps[u]);return c(t,s,i,o,null)}function c(t,n,e,i,o){var u={type:t,props:n,key:e,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(u.__v=u),null!=x.vnode&&x.vnode(u),u}function a(t){return t.children}function s(t,n){this.props=t,this.context=n}function d(t,n){if(null==n)return t.__?d(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?d(t):null}function r(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return r(t)}}function y(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!_.__r++||C!==x.debounceRendering)&&((C=x.debounceRendering)||P)(_)}function _(){for(var t;_.__r=A.length;)t=A.sort((function(t,n){return t.__v.__b-n.__v.__b})),A=[],t.some((function(t){var n,e,o,u,c,a,s;t.__d&&(a=(c=(n=t).__v).__e,(s=n.__P)&&(e=[],(o=i({},c)).__v=o,u=b(s,c,o,n.__n,void 0!==s.ownerSVGElement,null,e,null==a?d(c):a),g(e,c),u!=a&&r(c)))}))}function l(t,n,e,i,u,s,r,y,_,l){var p,h,v,m,g,k,E,O=i&&i.__k||R,j=O.length;for(_==L&&(_=null!=r?r[0]:j?d(i,0):null),e.__k=[],p=0;p<n.length;p++)if(null!=(m=e.__k[p]=null==(m=n[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?c(null,m,null,null,m):Array.isArray(m)?c(a,{children:m},null,null,null):null!=m.__e||null!=m.__c?c(m.type,m.props,m.key,null,m.__v):m)){if(m.__=e,m.__b=e.__b+1,null===(v=O[p])||v&&m.key==v.key&&m.type===v.type)O[p]=void 0;else for(h=0;h<j;h++){if((v=O[h])&&m.key==v.key&&m.type===v.type){O[h]=void 0;break}v=null}g=b(t,m,v=v||L,u,s,r,y,_,l),(h=m.ref)&&v.ref!=h&&(E||(E=[]),v.ref&&E.push(v.ref,null,m),E.push(h,m.__c||g,m)),null!=g?(null==k&&(k=g),_=f(t,m,v,O,r,g,_),l||"option"!=e.type?"function"==typeof e.type&&(e.__d=_):t.value=""):_&&v.__e==_&&_.parentNode!=t&&(_=d(v))}if(e.__e=k,null!=r&&"function"!=typeof e.type)for(p=r.length;p--;)null!=r[p]&&o(r[p]);for(p=j;p--;)null!=O[p]&&S(O[p],O[p]);if(E)for(p=0;p<E.length;p++)w(E[p],E[++p],E[++p])}function f(t,n,e,i,o,u,c){var a,s,d;if(void 0!==n.__d)a=n.__d,n.__d=void 0;else if(o==e||u!=c||null==u.parentNode)t:if(null==c||c.parentNode!==t)t.appendChild(u),a=null;else{for(s=c,d=0;(s=s.nextSibling)&&d<i.length;d+=2)if(s==u)break t;t.insertBefore(u,c),a=c}return void 0!==a?a:u.nextSibling}function p(t,n,e){"-"===n[0]?t.setProperty(n,e):t[n]=null==e?"":"number"!=typeof e||T.test(n)?e:e+"px"}function h(t,n,e,i,o){var u,c;if(o&&"className"==n&&(n="class"),"style"===n)if("string"==typeof e)t.style=e;else{if("string"==typeof i&&(t.style=i=""),i)for(n in i)e&&n in e||p(t.style,n,"");if(e)for(n in e)i&&e[n]===i[n]||p(t.style,n,e[n])}else"o"===n[0]&&"n"===n[1]?(u=n!==(n=n.replace(/Capture$/,"")),(c=n.toLowerCase())in t&&(n=c),n=n.slice(2),t.l||(t.l={}),t.l[n]=e,e?i||t.addEventListener(n,v,u):t.removeEventListener(n,v,u)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&"download"!==n&&"href"!==n&&!o&&n in t?t[n]=null==e?"":e:"function"!=typeof e&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/xlink:?/,""))?null==e||!1===e?t.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),e):null==e||!1===e&&!/^ar/.test(n)?t.removeAttribute(n):t.setAttribute(n,e))}function v(t){this.l[t.type](x.event?x.event(t):t)}function m(t,n,e){var i,o;for(i=0;i<t.__k.length;i++)(o=t.__k[i])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&m(o,n,e),n=f(e,o,o,t.__k,null,o.__e,n),"function"==typeof t.type&&(t.__d=n)))}function b(t,n,e,o,u,c,d,r,y){var _,f,p,h,v,b,g,w,S,O,j,A=n.type;if(void 0!==n.constructor)return null;(_=x.__b)&&_(n);try{t:if("function"==typeof A){if(w=n.props,S=(_=A.contextType)&&o[_.__c],O=_?S?S.props.value:_.__:o,e.__c?g=(f=n.__c=e.__c).__=f.__E:("prototype"in A&&A.prototype.render?n.__c=f=new A(w,O):(n.__c=f=new s(w,O),f.constructor=A,f.render=E),S&&S.sub(f),f.props=w,f.state||(f.state={}),f.context=O,f.__n=o,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=A.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=i({},f.__s)),i(f.__s,A.getDerivedStateFromProps(w,f.__s))),h=f.props,v=f.state,p)null==A.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==A.getDerivedStateFromProps&&w!==h&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(w,O),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(w,f.__s,O)||n.__v===e.__v){f.props=w,f.state=f.__s,n.__v!==e.__v&&(f.__d=!1),f.__v=n,n.__e=e.__e,n.__k=e.__k,f.__h.length&&d.push(f),m(n,r,t);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(w,f.__s,O),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(h,v,b)}))}f.context=O,f.props=w,f.state=f.__s,(_=x.__r)&&_(n),f.__d=!1,f.__v=n,f.__P=t,_=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=i(i({},o),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(b=f.getSnapshotBeforeUpdate(h,v)),j=null!=_&&_.type==a&&null==_.key?_.props.children:_,l(t,Array.isArray(j)?j:[j],n,e,o,u,c,d,r,y),f.base=n.__e,f.__h.length&&d.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==c&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=k(e.__e,n,e,o,u,c,d,y);(_=x.diffed)&&_(n)}catch(t){n.__v=null,x.__e(t,n,e)}return n.__e}function g(t,n){x.__c&&x.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){x.__e(t,n.__v)}}))}function k(t,n,e,i,o,u,c,a){var s,d,r,y,_,f=e.props,p=n.props;if(o="svg"===n.type||o,null!=u)for(s=0;s<u.length;s++)if(null!=(d=u[s])&&((null===n.type?3===d.nodeType:d.localName===n.type)||t==d)){t=d,u[s]=null;break}if(null==t){if(null===n.type)return document.createTextNode(p);t=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,p.is&&{is:p.is}),u=null,a=!1}if(null===n.type)f!==p&&t.data!==p&&(t.data=p);else{if(null!=u&&(u=R.slice.call(t.childNodes)),r=(f=e.props||L).dangerouslySetInnerHTML,y=p.dangerouslySetInnerHTML,!a){if(null!=u)for(f={},_=0;_<t.attributes.length;_++)f[t.attributes[_].name]=t.attributes[_].value;(y||r)&&(y&&r&&y.__html==r.__html||(t.innerHTML=y&&y.__html||""))}(function(t,n,e,i,o){var u;for(u in e)"children"===u||"key"===u||u in n||h(t,u,null,e[u],i);for(u in n)o&&"function"!=typeof n[u]||"children"===u||"key"===u||"value"===u||"checked"===u||e[u]===n[u]||h(t,u,n[u],e[u],i)})(t,p,f,o,a),y?n.__k=[]:(s=n.props.children,l(t,Array.isArray(s)?s:[s],n,e,i,"foreignObject"!==n.type&&o,u,c,L,a)),a||("value"in p&&void 0!==(s=p.value)&&s!==t.value&&h(t,"value",s,f.value,!1),"checked"in p&&void 0!==(s=p.checked)&&s!==t.checked&&h(t,"checked",s,f.checked,!1))}return t}function w(t,n,e){try{"function"==typeof t?t(n):t.current=n}catch(t){x.__e(t,e)}}function S(t,n,e){var i,u,c;if(x.unmount&&x.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||w(i,null,n)),e||"function"==typeof t.type||(e=null!=(u=t.__e)),t.__e=t.__d=void 0,null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){x.__e(t,n)}i.base=i.__P=null}if(i=t.__k)for(c=0;c<i.length;c++)i[c]&&S(i[c],n,e);null!=u&&o(u)}function E(t,n,e){return this.constructor(t,e)}function O(t,n,e){var i,o,c;x.__&&x.__(t,n),o=(i=e===H)?null:e&&e.__k||n.__k,t=u(a,null,[t]),c=[],b(n,(i?n:e||n).__k=t,o||L,L,void 0!==n.ownerSVGElement,e&&!i?[e]:o?null:n.childNodes.length?R.slice.call(n.childNodes):null,c,e||L,i),g(c,t)}function j(t,n){O(t,n,H)}e.d(n,"e",(function(){return O})),e.d(n,"c",(function(){return j})),e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return a})),e.d(n,"d",(function(){return x}));var x,A,P,C,H,L={},R=[],T=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;x={__e:function(t,n){for(var e,i;n=n.__;)if((e=n.__c)&&!e.__)try{if(e.constructor&&null!=e.constructor.getDerivedStateFromError&&(i=!0,e.setState(e.constructor.getDerivedStateFromError(t))),null!=e.componentDidCatch&&(i=!0,e.componentDidCatch(t)),i)return y(e.__E=e)}catch(n){t=n}throw t}},s.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=i({},this.state),"function"==typeof t&&(t=t(i({},e),this.props)),t&&i(e,t),null!=t&&this.__v&&(n&&this.__h.push(n),y(this))},s.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),y(this))},s.prototype.render=a,A=[],P="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_.__r=0,H=L},isEG:function(){},mdyV:function(t,n,e){"use strict";e.r(n);var i=e("hosL"),o=i.b,u=i.e,c=function(t){return t&&t.default?t.default:t};if("serviceWorker"in navigator&&navigator.serviceWorker.register(e.p+"sw.js"),"function"==typeof c(e("/hs+"))){var a=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=c(e("/hs+")),n={},i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(n=JSON.parse(decodeURI(i.innerHTML)).preRenderData||n);var s;n.url&&(s=n.url);a=u(o(t,{CLI_DATA:{preRenderData:n}}),document.body,a)}()}}});
//# sourceMappingURL=bundle.f927d.js.map