(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{1271:function(t,e,n){t.exports=n.p+"img/square.a9020bb.gif"},1272:function(t,e,n){t.exports=n.p+"img/person-1.bfb21a0.jpg"},1273:function(t,e,n){var content=n(1278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(128).default)("f8d38e08",content,!0,{sourceMap:!1})},1274:function(t,e,n){"use strict";var o=n(28);n(126);e.a={getInfo:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=5;break}return e.next=4,t.get("/static_infos",{});case 4:n=e.sent;case 5:return e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},1275:function(t,e,n){"use strict";var o=n(28);n(126);e.a={sendApplication:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$nuxt.$axios.post("/application/create",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},1276:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"img"},[t("img",{attrs:{src:n(1272),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"img"},[t("img",{attrs:{src:n(1272),alt:""}})])},function(){var t=this._self._c;return t("span",[t("img",{attrs:{src:n(1271),alt:""}})])}],r=n(28),l=(n(126),n(1275)),d={data:function(){return{myInputModel:"",number:"",full_name:""}},methods:{onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={number:"+998"+t.number,full_name:t.full_name},e.next=3,l.a.sendApplication(n);case 3:(o=e.sent)&&201===o.status?t.$toast.success("Successfully sent"):t.$toast.error("Error"),t.number="",t.full_name="",t.$emit("closeModal");case 8:case"end":return e.stop()}}),e)})))()}}},c=(n(1277),n(94)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"space",on:{click:function(e){return t.$emit("closeModal")}}}),t._v(" "),e("div",{staticClass:"body"},[e("div",{staticClass:"x",on:{click:function(e){return t.$emit("closeModal")}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[e("path",{attrs:{d:"M4.44458 4.43066L11.5552 11.54M4.44458 11.54L11.5552 4.43066",stroke:"white","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),e("div",{staticClass:"left"},[e("h4",{staticClass:"title"},[t._v(t._s(t.$store.state.translations["main.leave_app"]))]),t._v(" "),e("p",{staticClass:"sub"},[t._v("\n        "+t._s(t.$store.state.translations["main.leave_contacts"])+"\n      ")]),t._v(" "),e("div",{staticClass:"person"},[t._m(0),t._v(" "),e("div",{staticClass:"block"},[e("p",{staticClass:"name"},[t._v("\n            "+t._s(t.$store.state.translations["main.manager_name"])+"\n          ")]),t._v(" "),e("p",{staticClass:"status"},[t._v("\n            "+t._s(t.$store.state.translations["main.manger"])+"\n          ")])])])]),t._v(" "),e("div",{staticClass:"right"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit()}}},[e("div",{staticClass:"flexer"},[e("div",{staticClass:"input"},[e("span",[t._v(" +998 ")]),t._v(" "),e("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) ###-##-##",expression:"'(##) ###-##-##'"},{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{type:"text",placeholder:"(00) 000-00-00",required:""},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.full_name,expression:"full_name"}],staticClass:"second input",attrs:{required:"",type:"text",placeholder:t.$store.state.translations["main.your_name"]},domProps:{value:t.full_name},on:{input:function(e){e.target.composing||(t.full_name=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"hint"},[t._v(t._s(t.$store.state.translations["main.call_back"]))]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"manager"},[t._m(1),t._v(" "),e("div",{staticClass:"block"},[e("p",{staticClass:"name"},[t._v("\n                "+t._s(t.$store.state.translations["main.manager_name"])+"\n              ")]),t._v(" "),e("p",{staticClass:"status"},[t._v("\n                "+t._s(t.$store.state.translations["main.manager"])+"\n              ")])])]),t._v(" "),e("div",{staticClass:"button"},[t._m(2),t._v(" "),e("button",{staticClass:"application",attrs:{type:"submit"}},[e("p",[t._v(t._s(t.$store.state.translations["main.order_project"]))])])])])])])])])}),o,!1,null,"76578724",null);e.default=component.exports},1277:function(t,e,n){"use strict";n(1273)},1278:function(t,e,n){var o=n(127)((function(i){return i[1]}));o.push([t.i,".wrap[data-v-76578724]{align-items:center;background:rgba(0,0,0,.4)!important;display:flex;justify-content:center;opacity:0;pointer-events:none;position:fixed;transition:.4s;visibility:hidden;z-index:99;z-index:-1}.space[data-v-76578724],.wrap[data-v-76578724]{height:100%;left:0;top:0;width:100%}.space[data-v-76578724]{position:absolute}.body[data-v-76578724]{grid-gap:40px;background:#1b1b1b;border:1px solid #525252;border:1px solid var(--Grey,#525252);border-radius:24px;box-shadow:0 40px 51.5px 0 rgba(0,0,0,.25);display:grid;gap:40px;grid-template-columns:3fr 7fr;min-width:1200px;padding:60px 40px 40px;position:relative}.title[data-v-76578724]{font-family:var(--decor-bd);font-size:40px;line-height:120%;margin-bottom:8px}.sub[data-v-76578724],.title[data-v-76578724]{color:#fff;color:var(--White,#fff);font-style:normal;font-weight:400;max-width:314px}.sub[data-v-76578724]{font-size:18px;line-height:150%}form .flexer[data-v-76578724]{grid-gap:8px;align-items:center;display:grid;gap:8px;grid-template-columns:repeat(2,1fr)}.button[data-v-76578724]{align-items:center;background:#a050e2;border-radius:9px;box-shadow:0 8px 69px 0 rgba(161,80,227,.58);display:flex;height:56px;justify-content:center;max-width:232px;overflow:hidden;position:relative}.button span[data-v-76578724]{height:340px;left:50%;mix-blend-mode:plus-lighter;opacity:.2;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:340px;z-index:1}.button button[data-v-76578724]{color:#fff;color:var(--White,#fff);font-family:var(--decor-bd);font-size:16px;font-weight:400;line-height:normal;padding:12px 32px;position:relative;z-index:2}.button button[data-v-76578724],.input[data-v-76578724]{border-radius:9px;font-style:normal}.input[data-v-76578724]{background:#252525;border:1px solid #4b4b4b;color:#fff;font-size:18px;font-weight:500;height:56px;line-height:24px;min-width:323px;padding:15px}.input[data-v-76578724]::-moz-placeholder{color:#7a7a7a}.input[data-v-76578724]::placeholder{color:#7a7a7a}.input input[data-v-76578724]:active,.input input[data-v-76578724]:focus,.input input[data-v-76578724]:focus-visible{color:#fff}.input span[data-v-76578724]{color:#fff;color:var(--White,#fff);font-size:18px;font-style:normal;font-weight:500;line-height:24px}.flex[data-v-76578724]{justify-content:space-between;margin-top:22px}.flex[data-v-76578724],.manager[data-v-76578724],.person[data-v-76578724]{align-items:center;display:flex}.manager[data-v-76578724],.person[data-v-76578724]{gap:12px}.manager img[data-v-76578724],.person img[data-v-76578724]{border:2px solid #fff;border-radius:50%;height:50px;-o-object-fit:cover;object-fit:cover;width:50px}.name[data-v-76578724]{color:#fff;color:var(--White,#fff);font-size:18px;font-weight:600;margin-bottom:4px}.name[data-v-76578724],.status[data-v-76578724]{font-style:normal;line-height:normal}.status[data-v-76578724]{color:#adadad;font-size:14px;font-weight:400}.x[data-v-76578724]{align-items:center;background:#303030;border-radius:50%;cursor:pointer;display:flex;height:36px;justify-content:center;padding:10px;position:absolute;right:8px;top:8px;width:36px}.hint[data-v-76578724],.person[data-v-76578724]{display:none}@media screen and (max-width:1024px){.wrap[data-v-76578724]{align-items:flex-end;padding-bottom:0!important}.body[data-v-76578724]{background:#1b1b1b;border:0;border-radius:16px 16px 0 0;display:flex;flex-direction:column;min-width:0;min-width:auto;padding:24px 16px;transform:translateY(100%);transition:.4s;width:100%}.wrap.open .body[data-v-76578724]{transform:translateY(0)}.flex[data-v-76578724],.flexer[data-v-76578724]{display:flex!important;flex-direction:column}.title[data-v-76578724]{font-size:24px;margin-bottom:12px}.sub[data-v-76578724],.title[data-v-76578724]{font-style:normal;font-weight:400;line-height:normal}.sub[data-v-76578724]{font-size:18px;margin-bottom:16px}.manager[data-v-76578724]{display:none}.person[data-v-76578724]{background:#000;border-radius:10px;display:flex;padding:10px}.person img[data-v-76578724]{height:82px;width:82px}.name[data-v-76578724]{font-size:24px;font-weight:600}.name[data-v-76578724],.status[data-v-76578724]{font-style:normal;line-height:normal}.status[data-v-76578724]{font-size:16px;font-weight:400}.input[data-v-76578724]{background:#fff;border-radius:9px;color:#000;width:100%}.input input[data-v-76578724]:active,.input input[data-v-76578724]:focus,.input input[data-v-76578724]:focus-visible{color:#000}.input span[data-v-76578724]{color:#000;font-weight:500;line-height:24px}.hint[data-v-76578724],.input span[data-v-76578724]{font-size:18px;font-style:normal}.hint[data-v-76578724]{color:#fff;color:var(--White,#fff);display:flex;font-weight:400;line-height:normal;margin-bottom:120px;margin-top:12px}.flex[data-v-76578724]{align-items:flex-start}.button[data-v-76578724]{max-width:none;width:100%}.button img[data-v-76578724],.button span[data-v-76578724]{width:500px}}",""]),o.locals={},t.exports=o},1279:function(t,e,n){t.exports=n.p+"img/brand.8e23124.svg"},1280:function(t,e,n){var content=n(1290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(128).default)("59872660",content,!0,{sourceMap:!1})},1289:function(t,e,n){"use strict";n(1280)},1290:function(t,e,n){var o=n(127)((function(i){return i[1]}));o.push([t.i,".modaller.open[data-v-6ced570f]{opacity:1;pointer-events:auto;transform:translateY(0);visibility:visible;z-index:99}.wrap[data-v-6ced570f]{background:#000}.top[data-v-6ced570f]{align-items:center;display:flex;justify-content:space-between;padding:38px 0 28px}.top-cont[data-v-6ced570f]{border-bottom:1px solid #444344}.top .right[data-v-6ced570f]{align-items:center;display:flex;gap:64px}.link[data-v-6ced570f]{font-size:18px;font-weight:400;line-height:24px;opacity:.8}.link[data-v-6ced570f],.tel[data-v-6ced570f]{color:#fff;color:var(--White,#fff);font-style:normal}.tel[data-v-6ced570f]{font-size:28px;font-weight:600;gap:12px;line-height:40px}.bottom[data-v-6ced570f],.tel[data-v-6ced570f]{align-items:center;display:flex}.bottom[data-v-6ced570f]{justify-content:space-between;padding:20px 0}.bottom ul[data-v-6ced570f]{align-items:center;display:flex;gap:72px}.button[data-v-6ced570f]{background:#a050e2;border-radius:9px;box-shadow:0 8px 69px 0 rgba(161,80,227,.58);max-height:46px;max-width:232px;overflow:hidden;position:relative}.button span[data-v-6ced570f]{height:340px;left:50%;mix-blend-mode:plus-lighter;opacity:.2;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:340px;z-index:1}.button button[data-v-6ced570f]{color:#fff;color:var(--White,#fff);font-family:var(--decor-bd);font-size:16px;font-style:normal;font-weight:400;line-height:normal;padding:12px 24px;position:relative;z-index:2}",""]),o.locals={},t.exports=o},1315:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("span",[t("img",{attrs:{src:n(1271),alt:""}})])}],r=n(28),l=(n(126),n(1274)),d={data:function(){return{modalHandle:!1,info:{}}},methods:{closeModal:function(){this.modalHandle=!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getInfo(t.$axios);case 2:n=e.sent,t.info=n;case 4:case"end":return e.stop()}}),e)})))()},watch:{modalHandle:function(t){t?(document.body.style.overflow="hidden",document.body.style.height="100vh"):(document.body.style.overflow="auto",document.body.style.height="auto")}}},c=(n(1289),n(94)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"top-cont"},[e("div",{staticClass:"container-big"},[e("div",{staticClass:"top"},[e("div",{staticClass:"left"},[e("NuxtLink",{attrs:{to:"/"}},[e("img",{attrs:{src:n(1279),alt:""}})])],1),t._v(" "),e("div",{staticClass:"right"},[e("NuxtLink",{staticClass:"link",attrs:{to:"/#team"}},[t._v(t._s(t.$store.state.translations["main.agency"]))]),t._v(" "),e("NuxtLink",{staticClass:"link",attrs:{to:"/#projects"}},[t._v(t._s(t.$store.state.translations["main.works"]))]),t._v(" "),e("a",{staticClass:"tel",attrs:{href:"tel:".concat(t.info.number)}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"12",viewBox:"0 0 15 12",fill:"none"}},[e("path",{attrs:{d:"M13.6591 0C14.0999 0 14.4324 0.386641 14.2545 1.10579L12.0971 11.2745C11.9463 11.9975 11.5094 12.1715 10.9062 11.8351L5.76004 8.0344C5.74008 8.02008 5.72383 8.00121 5.71261 7.97936C5.70139 7.95751 5.69554 7.9333 5.69554 7.90874C5.69554 7.88418 5.70139 7.85997 5.71261 7.83812C5.72383 7.81627 5.74008 7.7974 5.76004 7.78308L11.7027 2.41651C11.9734 2.17679 11.6447 2.0608 11.289 2.27732L3.8307 6.98274C3.80808 6.99749 3.7824 7.0069 3.75561 7.01025C3.72881 7.0136 3.7016 7.0108 3.67605 7.00207L0.509457 6.00067C-0.19423 5.79575 -0.19423 5.31245 0.667979 4.96834L13.3382 0.0811946C13.4387 0.0329886 13.5478 0.00538155 13.6591 0Z",fill:"white"}})]),t._v("\n            "+t._s(t.info.number))])],1)])])]),t._v(" "),e("div",{staticClass:"container-big"},[e("div",{staticClass:"bottom"},[e("div",{staticClass:"left"},[e("ul",[e("li",[e("NuxtLink",{staticClass:"link",attrs:{to:"/#projects"}},[t._v("\n              "+t._s(t.$store.state.translations["main.site_development"])+"\n            ")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"link",attrs:{to:"/#offers"}},[t._v("\n              "+t._s(t.$store.state.translations["main.mobile_development"])+"\n            ")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"link",attrs:{to:"/#offers"}},[t._v("\n              "+t._s(t.$store.state.translations["main.businnes_auto"])+"\n            ")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"link",attrs:{to:"/#offers"}},[t._v("\n              "+t._s(t.$store.state.translations["main.complex_pack"])+"\n            ")])],1)])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.modalHandle=!t.modalHandle}}},[t._m(0),t._v(" "),e("button",{staticClass:"application"},[e("p",[t._v(t._s(t.$store.state.translations["main.order_project"]))])])])])])]),t._v(" "),e("ApplicationModal",{staticClass:"modaller",class:{open:t.modalHandle},on:{closeModal:t.closeModal}})],1)}),o,!1,null,"6ced570f",null);e.default=component.exports;installComponents(component,{ApplicationModal:n(1276).default})}}]);