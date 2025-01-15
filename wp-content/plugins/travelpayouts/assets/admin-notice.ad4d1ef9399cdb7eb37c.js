"use strict";(self.travelpayoutsWpPlugin=self.travelpayoutsWpPlugin||[]).push([[248],{45249:(e,t,o)=>{o.d(t,{P:()=>r,t:()=>a});var n=o(14206),i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const a=e=>{const{url:t,params:o}=e,n=i(e,["url","params"]);return Object.assign(Object.assign({},n),{params:Object.assign(Object.assign({},o),{page:t?t.replace(/^\//,""):void 0})})},r=o.n(n)().create({baseURL:window.ajaxurl,params:{action:"travelpayouts_routes"}});r.interceptors.request.use(a)},59478:(e,t,o)=>{function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}o.r(t);var r,s,l,c,d,u=(r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],s=function(){function e(t){var o=t.targetModal,n=t.triggers,a=void 0===n?[]:n,r=t.onShow,s=void 0===r?function(){}:r,l=t.onClose,c=void 0===l?function(){}:l,d=t.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=t.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=t.openClass,g=void 0===v?"is-open":v,m=t.disableScroll,y=void 0!==m&&m,p=t.disableFocus,b=void 0!==p&&p,w=t.awaitCloseAnimation,E=void 0!==w&&w,k=t.awaitOpenAnimation,A=void 0!==k&&k,S=t.debugMode,L=void 0!==S&&S;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.getElementById(o),this.config={debugMode:L,disableScroll:y,openTrigger:u,closeTrigger:h,openClass:g,onShow:s,onClose:c,awaitCloseAnimation:E,awaitOpenAnimation:A,disableFocus:b},a.length>0&&this.registerTriggers.apply(this,i(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,o;return t=e,(o=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){this.modal.addEventListener("animationend",(function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()}),!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(r);return Array.apply(void 0,i(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&n(t.prototype,o),e}(),l=null,c=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},d=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)c(o);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),o=i(document.querySelectorAll("[".concat(t.openTrigger,"]"))),n=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(o,t.openTrigger);if(!0!==t.debugMode||!1!==d(o,n))for(var a in n){var r=n[a];t.targetModal=a,t.triggers=i(r),l=new s(t)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===c(e)||(l&&l.removeEventListeners(),(l=new s(o)).showModal())},close:function(e){e?l.closeModalById(e):l.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=u);const f=u;var h=o(45249),v=function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,s)}l((n=n.apply(e,t||[])).next())}))};const g=e=>v(void 0,void 0,void 0,(function*(){try{yield h.P.put("notifications/hide",{name:e})}catch(e){console.error(e)}})),m=e=>{const t=document.querySelector(`[data-tp-notification="${e}"]`);t&&(t.style.display="none")},y="tp-notification-disable-dialog",p=(e,t)=>{if(e){const o=e.querySelector('[data-action="disable"]'),n=e.querySelector('[data-action="hide"]');n&&(n.focus(),n.addEventListener("click",(()=>{m(t),f.close(y),g(t)}))),o&&o.addEventListener("click",(()=>{var e;m(t),f.close(y),e=t,v(void 0,void 0,void 0,(function*(){try{yield h.P.put("notifications/disable",{name:e})}catch(e){console.error(e)}}))}))}};var b;document.querySelector("[data-tp-notification]")&&(o.e(280).then(o.t.bind(o,69280,23)),Promise.all([o.e(48),o.e(558)]).then(o.t.bind(o,36558,23)),document.querySelector("#contextual-help-link-wrap")&&(null===(b=document.querySelector(".travelpayouts-notice-wrapper"))||void 0===b||b.classList.add("travelpayouts-notice-wrapper--offset-top")),document.querySelectorAll("[data-tp-notification]  [data-tp-notification-close]").forEach((e=>{e.addEventListener("click",(t=>{var o;t.preventDefault();const n=e.getAttribute("data-tp-notification-close"),i=null!==(o="1"===e.getAttribute("data-show-alert-dialog"))&&void 0!==o&&o;n?i?f.show(y,{disableFocus:!0,onShow:e=>{e&&p(e,n)}}):(g(n),m(n)):console.warn("it seems that you forgot to add data-notification-id attribute to the button")}))})))}}]);