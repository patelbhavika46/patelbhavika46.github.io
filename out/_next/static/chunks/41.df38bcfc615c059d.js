"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{9543:function(e,t,i){var n=i(5893);i(7294);var o=i(5152),s=i.n(o);let r=s()(()=>Promise.all([i.e(296),i.e(464)]).then(i.bind(i,9464)),{loadableGenerated:{webpack:()=>[9464]},ssr:!1}),a=e=>{let{animationPath:t}=e;return(0,n.jsx)("div",{onClick:()=>null,children:(0,n.jsx)(r,{options:{loop:!0,autoplay:!0,path:t}})})};t.Z=a},2041:function(e,t,i){i.r(t),i.d(t,{default:function(){return k}});var n=i(5893),o=i(7294),s=i(8122),r=i(8595),a=i(267),l=i(1252),d=i(7462),u=i(1180),c=i(3366),p=i(5697),h=i.n(p),f=i(4184),v=i.n(f),m=i(3663);function y(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?y(Object(i),!0).forEach(function(t){(0,u.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var w={children:h().node,bar:h().bool,multi:h().bool,tag:m.iC,value:h().oneOfType([h().string,h().number]),min:h().oneOfType([h().string,h().number]),max:h().oneOfType([h().string,h().number]),animated:h().bool,striped:h().bool,color:h().string,className:h().string,barClassName:h().string,cssModule:h().object,style:h().object,barStyle:h().object,barAriaValueText:h().string,barAriaLabelledBy:h().string},g=function(e){var t=e.children,i=e.className,n=e.barClassName,s=e.cssModule,r=e.value,a=e.min,l=e.max,u=e.animated,p=e.striped,h=e.color,f=e.bar,y=e.multi,w=e.tag,g=e.style,E=e.barStyle,O=e.barAriaValueText,j=e.barAriaLabelledBy,S=(0,c.Z)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"]),k=(0,m.He)(r)/(0,m.He)(l)*100,R=(0,m.mx)(v()(i,"progress"),s),x={className:(0,m.mx)(v()("progress-bar",f&&i||n,u?"progress-bar-animated":null,h?"bg-"+h:null,p||u?"progress-bar-striped":null),s),style:b(b(b({},f?g:{}),E),{},{width:k+"%"}),role:"progressbar","aria-valuenow":r,"aria-valuemin":a,"aria-valuemax":l,"aria-valuetext":O,"aria-labelledby":j,children:t};return f?o.createElement(w,(0,d.Z)({},S,x)):o.createElement(w,(0,d.Z)({},S,{style:g,className:R}),y?t:o.createElement("div",x))};g.propTypes=w,g.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}};var E=i(9470),O=i.n(E),j=i(9543);let S=()=>s.Bv&&(0,n.jsx)(r.Z,{className:"section section-lg",children:(0,n.jsx)(O(),{bottom:!0,duration:2e3,children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(l.Z,{lg:"6",children:[(0,n.jsx)("h1",{className:"h1",children:"Proficiency"}),s.Bv.map(e=>(0,n.jsxs)("div",{className:"progress-info",children:[(0,n.jsx)("div",{className:"progress-label",children:(0,n.jsx)("span",{children:e.Stack})}),(0,n.jsx)("div",{className:"progress-percentage",children:(0,n.jsxs)("span",{children:[e.progressPercentage,"%"]})}),(0,n.jsx)(g,{max:"100",value:e.progressPercentage,color:"info",role:"progressbar","aria-label":e.Stack})]},e.Stack))]}),(0,n.jsx)(l.Z,{lg:"6",children:(0,n.jsx)(j.Z,{animationPath:"/lottie/build.json"})})]})})});var k=S},9470:function(e,t,i){function n(e,t){var i=t.distance,n=t.left,o=t.right,s=t.up,r=t.down,l=t.top,d=t.bottom,c=t.big,p=t.mirror,h=t.opposite,f=(i?i.toString():0)+((n?1:0)|(o?2:0)|(l||r?4:0)|(d||s?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(c?128:0));if(u.hasOwnProperty(f))return u[f];var v=n||o||s||r||l||d,m=void 0,y=void 0;if(v){if(!p!=!(e&&h)){var b=[o,n,d,l,r,s];n=b[0],o=b[1],l=b[2],d=b[3],s=b[4],r=b[5]}var w=i||(c?"2000px":"100%");m=n?"-"+w:o?w:"0",y=r||l?"-"+w:s||d?w:"0"}return u[f]=(0,a.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,o=(e.out,e.forever),s=e.timeout,r=e.duration,d=void 0===r?a.defaults.duration:r,u=e.delay,c=void 0===u?a.defaults.delay:u,p=e.count,h=void 0===p?a.defaults.count:p,f=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:n,duration:void 0===s?d:s,delay:c,forever:o,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,l.default)(f,v,v,i):v}Object.defineProperty(t,"__esModule",{value:!0});var s,r=i(5697),a=i(1017),l=(s=i(2580))&&s.__esModule?s:{default:s},d={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,big:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,distance:r.string,delay:r.number,count:r.number,forever:r.bool},u={};o.propTypes=d,t.default=o,e.exports=t.default},5792:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw s}}return i}(e,t);throw TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=(n=i(7294))&&n.__esModule?n:{default:n},d=i(5697),u=i(1017),c=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),p={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:c.isRequired,outEffect:(0,d.oneOfType)([c,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},h={transitionGroup:d.object},f=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:(!n.isOn||e.ssrReveal)&&e.outEffect?0:void 0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,s=i.count,r=i.delay,a=i.duration;o||(this.animationEndTimeout=window.setTimeout(function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))},r+(a+(t?a:0)*s)))}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,s=void 0,r=void 0;if(t.collapseOnly)s=i.duration/3,r=i.delay;else{var a=n>>2,l=a>>1;s=a,r=i.delay+(this.isOn?0:n-a-l),e.style.animationDuration=n-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+s+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=l.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return l.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):l.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=n.duration,a=n.reverse,d=i.length,c=2*s;this.props.collapse&&(s=(c=parseInt(this.state.style.animationDuration,10))/2);var p=a?d:0;return i.map(function(e){return"object"===(void 0===e?"undefined":o(e))&&e?l.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(a?p--:p++,0,d,s,c))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit)return void e.onExited();e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=l.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:l.default.createElement("div",null,e)}return l.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e,t,i,n=void 0;n=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var o=this.getChild();"function"==typeof o.ref&&(this.childRef=o.ref);var s=!1,a=o.props,d=a.style,c=a.className,p=a.children,h=this.props.disabled?c:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(c?" "+c:"")||void 0,f=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&p&&this.state.style.animationName?(s=this.cascade(p),f=r({},d,{opacity:1})):f=this.props.disabled?d:r({},d,this.state.style);var v=r({},this.props.props,(e={className:h,style:f},t=this.props.refProp,i=this.saveRef,t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e)),m=l.default.cloneElement(o,v,n?s||p:void 0);return void 0!==this.props.collapse?this.props.collapseEl?l.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:m}):l.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:m}):m}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(l.default.Component);f.propTypes=p,f.defaultProps={fraction:.2,refProp:"ref"},f.contextTypes=h,f.displayName="RevealBase",t.default=f,e.exports=t.default},1017:function(e,t){function i(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function n(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",n,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",n,!0),window.document.removeEventListener("visibilitychange",n))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,i,n,o){var s=Math.log(n);return Math.exp(s+(Math.log(o)-s)/(i-t)*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(f+c)+"{"+e+"}",i=p[e];return i?""+f+i:(h.insertRule(t,h.cssRules.length),p[e]=c,""+f+c++)},t.hideAll=n,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,a=t.raf=function(e){return window.setTimeout(e,66)},l=t.disableSsr=function(){return t.ssr=s=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),c=1,p={},h=!1,f=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||a,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(l,1500),r||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(h=v.sheet,window.addEventListener("scroll",n,!0),window.addEventListener("orientationchange",n,!0),window.document.addEventListener("visibilitychange",n))}},2580:function(e,t,i){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),2>s.default.Children.count(n)?s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=s.default.Children.map(n,function(n){return s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:i,children:n}))}),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(i(7294)),r=n(i(5792));e.exports=t.default},1180:function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,i){var o;return o=function(e,t){if("object"!==n(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===n(o)?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Z:function(){return o}})}}]);