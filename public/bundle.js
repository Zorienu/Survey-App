!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=9)}([function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],d=e.base?i[0]+e.base:i[0],l=t[d]||0,c="".concat(d," ").concat(l);t[d]=l+1;var u=s(c),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:c,updater:x(p,e),references:1}),o.push(c)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,u=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var g=null,m=0;function x(n,e){var t,o,r;if(e.singleton){var i=m++;t=g||(g=l(e)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=l(e),o=f.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=s(t[o]);a[r].references--}for(var i=d(n,e),l=0;l<t.length;l++){var c=s(t[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=i}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},function(n,e,t){"use strict";var o=t(1),r=t.n(o)()((function(n){return n[1]}));r.push([n.i,"* { box-sizing: border-box; }\n\nbody {\n\tbackground-color: #eee;\n\tfont-family: 'Raleway', sans-serif;\n}\n\n.app {\n\twidth: 80%;\n\tmargin: auto;\n\tmargin-top: 100px;\n}\n\n\n",""]),e.a=r},function(n,e,t){"use strict";var o=t(1),r=t.n(o)()((function(n){return n[1]}));r.push([n.i,".nav-bar {\n\tbackground-color: #9764c7;\n\tcolor: #fff;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\tpadding: 10px 30px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tbox-shadow: 0px 3px 9px rgba(0,0,0,0.3);\n}\n\n.nav-bar__title {\n\tfont-family: 'Lobster', sans-serif;\n\tfont-size: 26px;\n}\n\n.nav-bar__logged-message {\n\tfont-weight: 700;\n}\n\n.nav-bar__logout-btn {\n\tcolor: #ddd;\n\tborder-radius: 15px;\n\tborder: 2px solid #ddd;\n\tpadding: 4px 10px;\n\ttransition: all .15s;\n\tfont-weight: 700;\n}\n\n.nav-bar__logout-btn:hover {\n\tcursor: pointer;\n\tcolor: #9764c7;\n\tborder-color: #fff;\n\tbackground-color: #fff;\n}\n",""]),e.a=r},function(n,e,t){"use strict";var o=t(1),r=t.n(o)()((function(n){return n[1]}));r.push([n.i,".survey-cards-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-column-gap: 10px;\n\tgrid-row-gap: 10px;\n}\n\n.survey-card {\n\tbackground-color: #fff;\n\tcolor: #252525;\n\tpadding: 20px;\n\tborder-radius: 8px;\n\theight: 200px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n}\n\n.add-survey-card {\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.add-survey-btn {\n\tfont-size: 48px;\n\tcolor: #ddd;\n\ttransition: all .15s;\n}\n\n.add-survey-card:hover, .add-survey-card:hover > .add-survey-btn {\n\tcursor: pointer;\n\tcolor: #aaa;\n\tfont-size: 55px;\n}\n\n.survey-title {\n\tfont-size: 26px;\n\tmargin-bottom: 10px;\n}\n\t\n.survey-creator {\n\tfont-size: 15px;\n\tcolor: #666;\n\tmargin-bottom: 5px;\n}\n\n.survey-btns {\n\talign-self: flex-end;\n\tmargin-top: auto;\n}\n\n.survey-btns a {\n\tdisplay: inline-block;\n\ttext-align: center;\n\tjustify-content: center;\n\ttransition: all .15s; \n}\n\n.responses-btn {\n\tpadding: 5px 10px;\n\tbackground-color: #6960c3;\n\tcolor: #fff;\n\tborder-radius: 5px;\n\tfont-weight: 700;\n}\n\n.responses-btn:hover {\n\tcursor: pointer;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n}\n\n.modify-btn {\n\tpadding: 5px;\n\tcolor: #666;\n\twidth: 30px;\n\theight: 30px;\n\tmargin: 0 10px;\n}\n\n.modify-btn:hover {\n\tbackground-color: #eee;\n\tborder-radius: 50%;\n\tcursor: pointer;\n}\n\n.delete-btn {\n\tpadding: 5px;\n\tcolor: #666;\n\twidth: 30px;\n\theight: 30px;\n}\n\n.delete-btn:hover {\n\tbackground-color: #eee;\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tcolor: #e01010;\n}\n\n",""]),e.a=r},function(n,e,t){"use strict";var o=t(1),r=t.n(o)()((function(n){return n[1]}));r.push([n.i,".create-survey-form {\n\twidth: 80%;\n\tmargin: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.survey-title-container {\n\tbackground-color: #fff;\n\tpadding: 20px 30px;\n\tdisplay: flex;\n\tborder-radius: 8px;\n\tborder-bottom: 3px solid #9157cc;\n\tmargin-bottom: 10px;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n}\n\n.create-survey-title {\n\tflex: 1;\n\tmargin: 0;\n\tmargin-right: 15px;\n\tborder: none;\n\toutline: none;\n\tborder-bottom: 2px solid #aaa;\n\tline-height: 135%;\n\tfont-size: 30px;\n}\n\n.create-survey-title:focus, .create-survey-title:hover {\n\tborder-bottom: 2px solid #9157cc;\n}\n\n.survey-select {\n\twidth: 100px;\n\tborder-radius: 5px;\n\tbackground-color: #fff;\n\tborder: 1px solid #aaa;\n\tfont-size: 14px;\n\tpadding: 10px 4px;\n}\n\n/*question card*/\n.survey-question {\n\tbackground-color: #fff;\n\tpadding: 20px 30px;\n\tborder-radius: 8px;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n\tborder-left: 3px solid #9157cc; \n\tmargin-bottom: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.survey-question .question, .answers div, .add-answer-container {\n\tdisplay: flex;\n\tmargin-bottom: 10px;\n\talign-items: center;\n}\n\n.question-text {\n\tflex: 1;\n\tfont-size: 20px;\n\tmargin-right: 15px;\n\tborder: none;\n\toutline: none;\n\tborder-bottom: 1px solid #aaa;\n\tline-height: 135%;\n}\n\n.question-text:focus, .question-text:hover {\n\tborder-bottom: 1px solid #9157cc;\n}\n\n.question-type-select {\n\twidth: 150px;\n\tborder-radius: 5px;\n\tbackground-color: #fff;\n\tborder: 1px solid #aaa;\n\tfont-size: 14px;\n\tpadding: 10px 4px;\n}\n\n.question-answer, .add-option {\n\tborder: none;\n\toutline: none;\n\tborder-bottom: 1px solid #aaa;\n\tflex: 1;\n\tfont-size: 16px;\n\tpadding: 7px 0;\n\tmargin: 0 10px;\n}\n\n.add-option {\n\tcolor: #aaa;\n\tcursor: pointer;\n}\n\n.add-question-answer {\n\tflex: 0;\n}\n\n.question-answer:hover, .question-answer:focus {\n\tborder-bottom: 1px solid #9157cc;\n}\n\n.del-answer {\n\tmargin-right: 10px;\n\tcolor: #aaa;\n}\n\n.del-answer:hover {\n\tcolor: #333;\n\tcursor: pointer;\n}\n\n.div-delete-question {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n\n.div-delete-question a {\n\tcolor: #777;\n\tmargin-right: 5px;\n\tfont-size: 20px;\n\tflex: 0;\n\tdisplay: flex;\n\theight: 30px;\n\twidth: 30px;\n\tpadding: 8px;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.div-delete-question a:hover {\n\tbackground-color: #eee;\n\tborder-radius: 50%;\n\tcursor: pointer;\n}\n\n.survey-buttons {\n\talign-self: flex-end;\n\tmargin-top: 20px;\n\tmargin-bottom: 100px;\n}\n\n.survey-buttons a {\n\tpadding: 10px 30px;\n\tbackground-color: #9157cc;\n\tborder-radius: 8px;\n\tcolor: #fff;\n\tfont-weight: 700;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n\tcursor: pointer;\n}\n",""]),e.a=r},function(n,e,t){"use strict";var o=t(1),r=t.n(o)()((function(n){return n[1]}));r.push([n.i,".nav-bar__client-btns {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.register-btn {\n\tmargin-right: 10px;\n\tcolor: #eee;\n\tborder: 1px solid #eee;\n\tpadding: 5px 10px;\n\tborder-radius: 8px;\n\tfont-weight: 700;\n}\n\n.register-btn:hover {\n\tcolor: #fff;\n\tborder: 1px solid #fff;\n\tcursor: pointer;\n}\n\n.login-btn {\n\tborder: 1px solid #eee;\n\tcolor: #eee;\n\tpadding: 5px 10px;\n\tborder-radius: 8px;\n\tfont-weight: 700;\n}\n\n.login-btn:hover {\n\tcolor: #fff;\n\tborder: 1px solid #fff;\n\tcursor: pointer;\n}\n/*.login-form {*/\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\t/*align-items: center;*/\n/*}*/\n\n/*.login-label {*/\n\t/*background-color: #eee;*/\n\t/*color: #555;*/\n\t/*padding: 3px;*/\n/*}*/\n\n/*.login-input {*/\n\t/*margin-right: 5px;*/\n\t/*padding: 3px;*/\n/*}*/\n",""]),e.a=r},function(n,e,t){"use strict";var o=t(1),r=t.n(o)()((function(n){return n[1]}));r.push([n.i,"#survey-title {\n\tfont-size: 26px;\n\tfont-weight: 700;\n\tcolor: #333;\n}\n\n.user-data {\n\tdisplay: flex;\n\talign-items: flex-start;\n\tflex-direction: column;\n\tjustify-content: left;\n}\n\n.input-user-data {\n\tpadding: 10px 20px;\n\tborder: none;\n\toutline: none;\n\tborder-bottom: 1px solid #aaa;\n\tmargin-bottom: 10px;\n\tfont-size: 16px;\n\twidth: 60%;\n}\n\n.input-user-data:focus {\n\tborder-bottom: 1px solid #9157cc;\n}\n\n.s-question {\n\tbackground-color: #fff;\t\n\tpadding: 20px 30px;\n\tmargin-bottom: 10px;\n\tborder-radius: 8px;\n\tborder-left: 3px solid #9157cc;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n}\n\n.question-title {\n\tfont-weight: 700;\n\tfont-size: 20px;\n\tcolor: #333;\n\tmargin-bottom: 15px;\n}\n\n.radio-s-res {\n\tmargin-bottom: 15px;\n\tmargin-left: 20px;\n}\n\n.text-s-res {\n\tborder: none;\n\toutline: none;\n\tdisplay: block;\n\tborder-bottom: 1px solid #aaa;\n\tpadding: 10px 20px;\n\tfont-size: 16px;\n\twidth: 60%;\n}\n\n.text-s-res:focus {\n\tborder-bottom: 1px solid #9157cc;\n}\n\n.send-survey-btns {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tmargin-bottom: 80px;\n}\n\n.send-survey-btns a {\n\tbackground-color: #9157cc;\n\tcolor: #fff;\n\tpadding: 10px 20px;\n\tborder-radius: 8px;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n\tmargin-left: 10px;\n\tfont-weight: 700;\n\tcursor: pointer;\n}\n\n",""]),e.a=r},function(n,e,t){"use strict";var o=t(1),r=t.n(o)()((function(n){return n[1]}));r.push([n.i,'.nav-bar__title:hover {\n\tcursor: pointer;\n}\n\n.login-form {\n\tbackground-color: #fff;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 40%;\n\tmargin: 0 auto;\n\tmargin-top: 200px;\n\tpadding: 20px 35px;\n\tborder-radius: 10px;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n}\n\n.login__title {\n\tfont-family: "Lobster", sans-serif;\n\ttext-align: center; \n\tfont-size: 50px;\n\tmargin: 30px 0;\n}\n\n.login__div {\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-bottom: 10px;\n}\n\n.login__input {\n\tflex: 1;\n\tpadding: 10px;\n\theight: 39px;\n\tfont-size: 16px;\n\tborder: none;\n\toutline: none;\n\tborder-bottom: 1px solid #aaa;\n\tmargin-bottom: 10px;\n}\n\n.login__input:focus {\n\tborder-bottom: 1px solid #9764c7;\n}\n\n.login__label {\n\tpadding: 10px;\n\tbackground-color: #eee;\n\tcolor: #777; \n\tmargin-bottom: 10px;\n\twidth: 34px;\n\theight: 39px;\n}\n\n.login__btn, .login__register-btn {\n\toutline: none;\n\tborder: none;\n\tpadding: 10px 20px;\n\tmargin-top: 10px;\n\tfont-size: 16px;\n\tcolor: #fff;\n\tbackground-color: #9764c7;\n\tborder-radius: 8px;\n\tfont-weight: 700;\n\ttransition: all .2s;\n}\n\n.login__register-btn {\n\tbackground-color: #eeeeee;\n\tcolor: #444;\n}\n\n.login__btn:hover, .login__register-btn:hover {\n\tcursor:pointer;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n}\n',""]),e.a=r},function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(2),a={insert:"head",singleton:!1},s=(r()(i.a,a),i.a.locals,t(3)),d={insert:"head",singleton:!1},l=(r()(s.a,d),s.a.locals,t(4)),c={insert:"head",singleton:!1},u=(r()(l.a,c),l.a.locals,t(5)),p={insert:"head",singleton:!1},f=(r()(u.a,p),u.a.locals,t(6)),g={insert:"head",singleton:!1},m=(r()(f.a,g),f.a.locals,t(7)),x={insert:"head",singleton:!1},v=(r()(m.a,x),m.a.locals,t(8)),b={insert:"head",singleton:!1};r()(v.a,b),v.a.locals;var y=n=>{const e="https://survey-app.zorienu.vercel.app/"+n;return{create:(n,t=null)=>fetch(e,{method:"POST",headers:{"Content-Type":"application/json",authorization:t},body:JSON.stringify(n)}).then(n=>n.json()),update:(n,t=null)=>fetch(e,{method:"PUT",headers:{"Content-Type":"application/json",authorization:t},body:JSON.stringify(n)}).then(n=>n.json()),get:(n=null)=>fetch(e,{method:"GET",headers:{"Content-Type":"application/json",authorization:n}}).then(n=>n.json()),getById:n=>fetch(`${e}/${n}`).then(n=>n.json()),del:(n,t=null)=>{fetch(`${e}/${n}`,{method:"DELETE",headers:{"Content-Type":"application/json",authorization:t}}).then(()=>console.log("the survey has been deleted"))}}};var h=n=>(new DOMParser).parseFromString(n,"text/html").body.firstChild;var E=n=>{alert("show survey responses")};var w=n=>{};const _=y("api/surveys"),q=n=>h(`\n      <div class="survey-card" id="s-${n._id}">\n        <div class="survey-title">${n.title}</div>\n        <div class="survey-creator">Created by ${n.user_email}</div>\n        <div class="survey-questions-quantity">Questions: ${n.questions.length}</div>\n        <div class="survey-btns">\n          <a class="responses-btn" id="res-${n._id}">Responses</a>\n          <a class="modify-btn" id="edit-${n._id}"><i class="fas fa-pencil-alt"></i></a>\n          <a class="delete-btn" id="del-${n._id}"><i class="far fa-trash-alt"></i></a>\n        </div>\n    `);var I=()=>{_.get().then(n=>{const e=n.map(q),t=document.getElementById("surveys-container");e.forEach(n=>t.appendChild(n)),n.forEach(n=>(n=>{if(document.getElementById("res-"+n._id).addEventListener("click",()=>E(n)),!n.public)return;document.getElementById("edit-"+n._id).addEventListener("click",w);document.getElementById("del-"+n._id).addEventListener("click",()=>{_.del(n._id),document.getElementById("s-"+n._id).remove()})})(n))})};const B=n=>{const e=n.querySelectorAll(".del-answer");if(1===e.length)return e[0].style.display="none";e[0].style.display="inline",e.forEach(e=>{e.addEventListener("click",()=>{e.parentElement.remove(),B(n)})})};var k=n=>{const e=n.querySelector(".add-option");B(n),e.addEventListener("click",()=>{const e=n.querySelector(".answers"),t=h('\n      <div>\n        <input type="radio" disabled>\n        <input class="question-answer" type="text" placeholder="Option">\n        <a class="del-answer"><i class="fas fa-eraser"></i></a>\n      </div>\n    ');e.appendChild(t),B(n)})};var L=(n,e)=>{const t=e.querySelector(".answers-container");if("radio"===n){const n=document.getElementById("multiple-choice-template");t.innerHTML=n.innerHTML,k(e)}else if("text"===n){const n=document.getElementById("text-template");t.innerHTML=n.innerHTML}};var S=()=>{let n={title:"",public:!0,user_email:JSON.parse(localStorage.getItem("user")).email,code:Math.floor(1e3*Math.random()),questions:[]};n.title=document.querySelector(".create-survey-title").value||"Survey title",n.public="true"==document.getElementById("public-survey").value;let e=0;document.querySelectorAll(".survey-question").forEach(t=>{const o={question:"",answers:[],code:e,question_type:""};if(o.question=t.querySelector(".question-text").value,o.question_type=t.querySelector(".question-type").value,e++,"radio"===o.question_type){t.querySelectorAll(".question-answer").forEach(n=>{o.answers.push(n.value)})}n.questions.push(o)});y("api/surveys").create(n).then(console.log),F()};const T=()=>{document.querySelectorAll(".survey-question").forEach(n=>{const e=n.querySelector(".question-type");e.addEventListener("change",()=>{L(e.value,n)});n.querySelector(".delete-question").addEventListener("click",()=>n.remove())})};var M=()=>{document.getElementById("app-container").innerHTML=document.getElementById("create-survey").innerHTML,(()=>{document.getElementById("add-question-btn").addEventListener("click",()=>{const n=document.getElementById("questions-container"),e=document.getElementById("survey-question-template"),t=h(e.innerHTML);n.appendChild(t),T()});document.getElementById("send-survey").addEventListener("click",S);document.getElementById("cancel-survey").addEventListener("click",F)})(),T()};const j=y("api/answers");let z={user_email:"",user_name:"",survey_code:0,answers:[]};var $=n=>{if(z.user_email=document.getElementById("user-email").value,z.user_name=document.getElementById("user-name").value,z.survey_code=n.code,!z.user_email||!z.user_name)return alert("You should provide your information");document.querySelectorAll(".s-question").forEach((n,e)=>{const t=n.getElementsByTagName("input");if(1===t.length)z.answers.push({code:e,answer:t[0].value});else for(let n of t)if(n.checked)return z.answers.push({code:e,answer:n.value})}),j.create(z).then(console.log),D()};var C=n=>{const e=document.getElementById("app-container"),t=document.getElementById("respond-survey");e.innerHTML=t.innerHTML,document.getElementById("survey-title").innerText=n.title;const o=document.getElementById("survey-container");n.questions.forEach(n=>{o.appendChild((n=>{if("radio"===n.question_type){const e=n.answers.map(e=>`\n      <input class="radio-s-res" type="radio" value="${e}" name="${n.code}">\n      <label for="${e}">${e}</label></br>`);return h(`\n      <div class="s-question">\n        <div class="question-title">${n.question}</div>\n        ${e.join("")}\n      </div>\n    `)}if("text"===n.question_type)return h(`\n      <div class="s-question">\n        <div class="question-title">${n.question}</div>\n        <input class="text-s-res" type="text" placeholder="Your answer">\n      </div>\n    `)})(n))}),(n=>{document.getElementById("submit-response").addEventListener("click",()=>$(n));document.getElementById("cancel-response").addEventListener("click",()=>D())})(n)};const H=y("api/auth/register");let O={name:"",email:"",password:""};var N=()=>{const n=document.getElementById("app-container"),e=document.getElementById("register-template");n.innerHTML=e.innerHTML,document.getElementById("logo").addEventListener("click",D);document.getElementById("register-btn").addEventListener("click",()=>{const n=document.getElementById("register-user-password").value;return n!==document.getElementById("register-user-r-password").value?alert("the passwords are not he same"):(O.name=document.getElementById("register-user-name").value,O.email=document.getElementById("register-user-email").value,O.password=n,O.name&&O.email&&O.password?void H.create(O).then(n=>{alert(n.message),J()}):alert("You should fill the fields"))})};const A=y("api/auth/login"),P=y("api/auth/me");var J=()=>{document.getElementById("app-container").innerHTML=document.getElementById("login-template").innerHTML,document.getElementById("logo").addEventListener("click",D);document.getElementById("login-submit").addEventListener("click",()=>{const n=document.getElementById("login-user-email").value,e=document.getElementById("login-user-password").value;A.create({email:n,password:e}).then(n=>{if(!n.token)return alert(n.message);localStorage.setItem("token",n.token),P.get(n.token).then(n=>{localStorage.setItem("user",JSON.stringify(n))}),F()})});document.getElementById("login-register-btn").addEventListener("click",N)};const R=y("api/surveys"),Y=n=>h(`\n      <div class="survey-card" id="s-${n._id}">\n        <div class="survey-title">${n.title}</div>\n        <div class="survey-creator">Created by ${n.user_email}</div>\n        <div class="survey-questions-quantity">Questions: ${n.questions.length}</div>\n        <div class="survey-btns">\n          <a class="responses-btn" id="respond-${n._id}">Submit response</a>\n        </div>\n    `);var D=()=>{const n=document.getElementById("app-container"),e=document.getElementById("surveys-client");n.innerHTML=e.innerHTML,document.getElementById("login-btn").addEventListener("click",J),document.getElementById("register-btn").addEventListener("click",N),R.get().then(n=>{const e=n.map(Y),t=document.getElementById("surveys-container");e.forEach(n=>t.appendChild(n)),n.forEach(n=>{document.getElementById("respond-"+n._id).addEventListener("click",()=>C(n))})})};var F=()=>{const n=document.getElementById("app-container"),e=document.getElementById("survey-control-panel");n.innerHTML=e.innerHTML;const t="You're logged as "+JSON.parse(localStorage.getItem("user")).name;document.getElementById("nav-bar-logged-message").innerText=t;document.getElementById("nav-bar-logout-btn").addEventListener("click",()=>{localStorage.removeItem("token"),D()}),I();document.getElementById("add-survey-btn").addEventListener("click",M)};window.onload=()=>{D()}}]);