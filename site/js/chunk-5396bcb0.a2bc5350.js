(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5396bcb0"],{"4ec9":function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),a=n("e2cc"),o=n("0366"),c=n("19aa"),s=n("2266"),u=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,p=n("69f3"),v=p.set,h=p.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){c(t,l,e),v(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&s(r,t[u],{that:t,AS_ENTRIES:n})})),p=h(e),g=function(t,e,n){var r,i,a=p(t),o=b(t,e);return o?o.value=n:(a.last=o={index:i=f(e,!0),key:e,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),d?a.size++:t.size++,"F"!==i&&(a.index[i]=o)),t},b=function(t,e){var n,r=p(t),i=f(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return a(l.prototype,{clear:function(){var t=this,e=p(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),r=b(e,t);if(r){var i=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=i),i&&(i.previous=a),n.first==r&&(n.first=i),n.last==r&&(n.last=a),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=p(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),a(l.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&r(l.prototype,"size",{get:function(){return p(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",i=h(e),a=h(r);u(t,e,(function(t,e){v(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("94ca"),o=n("6eeb"),c=n("f183"),s=n("2266"),u=n("19aa"),l=n("1626"),d=n("861d"),f=n("d039"),p=n("1c7e"),v=n("d44e"),h=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),m=g?"set":"add",y=i[t],j=y&&y.prototype,C=y,O={},x=function(t){var e=j[t];o(j,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!d(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!d(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},k=a(t,!l(y)||!(b||j.forEach&&!f((function(){(new y).entries().next()}))));if(k)C=n.getConstructor(e,t,g,m),c.enable();else if(a(t,!0)){var w=new C,S=w[m](b?{}:-0,1)!=w,_=f((function(){w.has(1)})),B=p((function(t){new y(t)})),E=!b&&f((function(){var t=new y,e=5;while(e--)t[m](e,e);return!t.has(-0)}));B||(C=e((function(e,n){u(e,C,t);var r=h(new y,e,C);return void 0!=n&&s(n,r[m],{that:r,AS_ENTRIES:g}),r})),C.prototype=j,j.constructor=C),(_||E)&&(x("delete"),x("has"),g&&x("get")),(E||S)&&x(m),b&&j.clear&&delete j.clear}return O[t]=C,r({global:!0,forced:C!=y},O),v(C,t),b||n.setStrong(C,t,g),C}},"7e36":function(t,e,n){},"8adc":function(t,e,n){},c24e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[n("h1",[t._v("Product List")]),n("v-btn",{attrs:{color:"primary",to:"/products/new"}},[t._v("New product")]),n("v-container",[n("v-row",t._l(t.products,(function(t){return n("v-col",{key:t.code,attrs:{md:"4",sm:"6",cols:"12"}},[n("ProductCard",{attrs:{item:t}})],1)})),1)],1)],1)},i=[],a=n("d170"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-img",{attrs:{src:t.imageUrl}}),n("v-card-title",[t._v(t._s(t.item.name))]),n("v-card-subtitle",[n("b",[t._v("Price:")]),t._v(" "+t._s(t.item.price))]),n("div",{staticClass:"categories"},t._l(t.item.categories,(function(e){return n("v-chip",{key:e},[t._v(t._s(e))])})),1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"success",to:"/products/"+t.item.code}},[t._v(" Editar ")]),n("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.eliminar()}}},[t._v(" Eliminar ")])],1)],1)},c=[],s={props:["item"],methods:{editar:function(){this.$router.push("/products/".concat(this.item.code))},eliminar:function(){Object(a["c"])(this.item.code).then((function(){window.location.reload()})).catch((function(t){return console.error(t.response.data.message)}))}},computed:{imageUrl:function(){return void 0==this.item.imageUrl?"https://isocarp.org/app/uploads/2014/05/noimage.jpg":this.item.imageUrl}}},u=s,l=(n("f833"),n("2877")),d=n("6544"),f=n.n(d),p=n("8336"),v=n("b0af"),h=n("99d9"),g=n("cc20"),b=n("adda"),m=n("2fa4"),y=Object(l["a"])(u,o,c,!1,null,null,null),j=y.exports;f()(y,{VBtn:p["a"],VCard:v["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardTitle:h["d"],VChip:g["a"],VImg:b["a"],VSpacer:m["a"]});var C={components:{ProductCard:j},data:function(){return{products:[]}},created:function(){var t=this;Object(a["d"])().then((function(e){t.products=e.data})).catch((function(t){return console.error(t.response.data.message)}))}},O=C,x=n("ade3"),k=n("5530"),w=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),S=n("d9f7"),_=n("80d2"),B=["sm","md","lg","xl"],E=function(){return B.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),$=function(){return B.reduce((function(t,e){return t["offset"+Object(_["x"])(e)]={type:[String,Number],default:null},t}),{})}(),V=function(){return B.reduce((function(t,e){return t["order"+Object(_["x"])(e)]={type:[String,Number],default:null},t}),{})}(),z={col:Object.keys(E),offset:Object.keys($),order:Object.keys(V)};function N(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var i=e.replace(t,"");r+="-".concat(i)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var G=new Map,I=w["a"].extend({name:"v-col",functional:!0,props:Object(k["a"])(Object(k["a"])(Object(k["a"])(Object(k["a"])({cols:{type:[Boolean,String,Number],default:!1}},E),{},{offset:{type:[String,Number],default:null}},$),{},{order:{type:[String,Number],default:null}},V),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,i=e.children,a=(e.parent,"");for(var o in n)a+=String(n[o]);var c=G.get(a);return c||function(){var t,e;for(e in c=[],z)z[e].forEach((function(t){var r=n[t],i=N(e,t,r);i&&c.push(i)}));var r=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!r||!n.cols},Object(x["a"])(t,"col-".concat(n.cols),n.cols),Object(x["a"])(t,"offset-".concat(n.offset),n.offset),Object(x["a"])(t,"order-".concat(n.order),n.order),Object(x["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),G.set(a,c)}(),t(n.tag,Object(S["a"])(r,{class:c}),i)}}),L=n("a523"),P=(n("2532"),n("99af"),["sm","md","lg","xl"]),T=["start","end","center"];function F(t,e){return P.reduce((function(n,r){return n[t+Object(_["x"])(r)]=e(),n}),{})}var A=function(t){return[].concat(T,["baseline","stretch"]).includes(t)},M=F("align",(function(){return{type:String,default:null,validator:A}})),R=function(t){return[].concat(T,["space-between","space-around"]).includes(t)},U=F("justify",(function(){return{type:String,default:null,validator:R}})),J=function(t){return[].concat(T,["space-between","space-around","stretch"]).includes(t)},W=F("alignContent",(function(){return{type:String,default:null,validator:J}})),D={align:Object.keys(M),justify:Object.keys(U),alignContent:Object.keys(W)},K={align:"align",justify:"justify",alignContent:"align-content"};function q(t,e,n){var r=K[t];if(null!=n){if(e){var i=e.replace(t,"");r+="-".concat(i)}return r+="-".concat(n),r.toLowerCase()}}var H=new Map,Q=w["a"].extend({name:"v-row",functional:!0,props:Object(k["a"])(Object(k["a"])(Object(k["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:A}},M),{},{justify:{type:String,default:null,validator:R}},U),{},{alignContent:{type:String,default:null,validator:J}},W),render:function(t,e){var n=e.props,r=e.data,i=e.children,a="";for(var o in n)a+=String(n[o]);var c=H.get(a);return c||function(){var t,e;for(e in c=[],D)D[e].forEach((function(t){var r=n[t],i=q(e,t,r);i&&c.push(i)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(x["a"])(t,"align-".concat(n.align),n.align),Object(x["a"])(t,"justify-".concat(n.justify),n.justify),Object(x["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),H.set(a,c)}(),t(n.tag,Object(S["a"])(r,{staticClass:"row",class:c}),i)}}),X=Object(l["a"])(O,r,i,!1,null,null,null);e["default"]=X.exports;f()(X,{VBtn:p["a"],VCol:I,VContainer:L["a"],VRow:Q})},cc20:function(t,e,n){"use strict";var r=n("3835"),i=n("5530"),a=(n("4de4"),n("8adc"),n("58df")),o=n("0789"),c=n("9d26"),s=n("a9ad"),u=n("4e82"),l=n("7560"),d=n("f2e7"),f=n("1c87"),p=n("af2b"),v=n("d9bd");e["a"]=Object(a["a"])(s["a"],p["a"],f["a"],l["a"],Object(u["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({"v-chip":!0},f["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(f["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var n=Object(r["a"])(e,2),i=n[0],a=n[1];t.$attrs.hasOwnProperty(i)&&Object(v["a"])(i,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(c["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],t)},genClose:function(){var t=this;return this.$createElement(c["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,a=n.data;a.attrs=Object(i["a"])(Object(i["a"])({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var o=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(o,a),e)}})},d170:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return d}));var r=n("328a"),i="/api/products",a=function(){return r["a"].get(i)},o=function(t){return r["a"].get(i+"/"+t)},c=function(t){return r["a"].post(i,t)},s=function(t){return r["a"].post(i,t,{headers:{"Content-Type":"multipart/form-data"}})},u=function(t,e){return r["a"].put(i+"/"+t,e)},l=function(t,e){return r["a"].patch(i+"/"+t+"/image",e,{headers:{"Content-Type":"multipart/form-data"}})},d=function(t){return r["a"].delete(i+"/"+t)}},f833:function(t,e,n){"use strict";n("7e36")}}]);
//# sourceMappingURL=chunk-5396bcb0.a2bc5350.js.map