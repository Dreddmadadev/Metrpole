/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
    if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
    },cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
jQuery.noConflict(); 
/*  Prototype JavaScript framework, version 1.7
 *  (c) 2005-2010 Sam Stephenson
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://www.prototypejs.org/
 *
 *--------------------------------------------------------------------------*/

var Prototype = {

  Version: '1.7',

  Browser: (function(){
    var ua = navigator.userAgent;
    var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
    return {
      IE:             !!window.attachEvent && !isOpera,
      Opera:          isOpera,
      WebKit:         ua.indexOf('AppleWebKit/') > -1,
      Gecko:          ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
      MobileSafari:   /Apple.*Mobile/.test(ua)
    }
  })(),

  BrowserFeatures: {
    XPath: !!document.evaluate,

    SelectorsAPI: !!document.querySelector,

    ElementExtensions: (function() {
      var constructor = window.Element || window.HTMLElement;
      return !!(constructor && constructor.prototype);
    })(),
    SpecificElementExtensions: (function() {
      if (typeof window.HTMLDivElement !== 'undefined')
        return true;

      var div = document.createElement('div'),
          form = document.createElement('form'),
          isSupported = false;

      if (div['__proto__'] && (div['__proto__'] !== form['__proto__'])) {
        isSupported = true;
      }

      div = form = null;

      return isSupported;
    })()
  },

  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,

  emptyFunction: function() { },

  K: function(x) { return x }
};

if (Prototype.Browser.MobileSafari)
  Prototype.BrowserFeatures.SpecificElementExtensions = false;


var Abstract = { };


var Try = {
  these: function() {
    var returnValue;

    for (var i = 0, length = arguments.length; i < length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) { }
    }

    return returnValue;
  }
};

/* Based on Alex Arnell's inheritance implementation. */

var Class = (function() {

  var IS_DONTENUM_BUGGY = (function(){
    for (var p in { toString: 1 }) {
      if (p === 'toString') return false;
    }
    return true;
  })();

  function subclass() {};
  function create() {
    var parent = null, properties = $A(arguments);
    if (Object.isFunction(properties[0]))
      parent = properties.shift();

    function klass() {
      this.initialize.apply(this, arguments);
    }

    Object.extend(klass, Class.Methods);
    klass.superclass = parent;
    klass.subclasses = [];

    if (parent) {
      subclass.prototype = parent.prototype;
      klass.prototype = new subclass;
      parent.subclasses.push(klass);
    }

    for (var i = 0, length = properties.length; i < length; i++)
      klass.addMethods(properties[i]);

    if (!klass.prototype.initialize)
      klass.prototype.initialize = Prototype.emptyFunction;

    klass.prototype.constructor = klass;
    return klass;
  }

  function addMethods(source) {
    var ancestor   = this.superclass && this.superclass.prototype,
        properties = Object.keys(source);

    if (IS_DONTENUM_BUGGY) {
      if (source.toString != Object.prototype.toString)
        properties.push("toString");
      if (source.valueOf != Object.prototype.valueOf)
        properties.push("valueOf");
    }

    for (var i = 0, length = properties.length; i < length; i++) {
      var property = properties[i], value = source[property];
      if (ancestor && Object.isFunction(value) &&
          value.argumentNames()[0] == "$super") {
        var method = value;
        value = (function(m) {
          return function() { return ancestor[m].apply(this, arguments); };
        })(property).wrap(method);

        value.valueOf = method.valueOf.bind(method);
        value.toString = method.toString.bind(method);
      }
      this.prototype[property] = value;
    }

    return this;
  }

  return {
    create: create,
    Methods: {
      addMethods: addMethods
    }
  };
})();
(function() {

  var _toString = Object.prototype.toString,
      NULL_TYPE = 'Null',
      UNDEFINED_TYPE = 'Undefined',
      BOOLEAN_TYPE = 'Boolean',
      NUMBER_TYPE = 'Number',
      STRING_TYPE = 'String',
      OBJECT_TYPE = 'Object',
      FUNCTION_CLASS = '[object Function]',
      BOOLEAN_CLASS = '[object Boolean]',
      NUMBER_CLASS = '[object Number]',
      STRING_CLASS = '[object String]',
      ARRAY_CLASS = '[object Array]',
      DATE_CLASS = '[object Date]',
      NATIVE_JSON_STRINGIFY_SUPPORT = window.JSON &&
        typeof JSON.stringify === 'function' &&
        JSON.stringify(0) === '0' &&
        typeof JSON.stringify(Prototype.K) === 'undefined';

  function Type(o) {
    switch(o) {
      case null: return NULL_TYPE;
      case (void 0): return UNDEFINED_TYPE;
    }
    var type = typeof o;
    switch(type) {
      case 'boolean': return BOOLEAN_TYPE;
      case 'number':  return NUMBER_TYPE;
      case 'string':  return STRING_TYPE;
    }
    return OBJECT_TYPE;
  }

  function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
  }

  function inspect(object) {
    try {
      if (isUndefined(object)) return 'undefined';
      if (object === null) return 'null';
      return object.inspect ? object.inspect() : String(object);
    } catch (e) {
      if (e instanceof RangeError) return '...';
      throw e;
    }
  }

  function toJSON(value) {
    return Str('', { '': value }, []);
  }

  function Str(key, holder, stack) {
    var value = holder[key],
        type = typeof value;

    if (Type(value) === OBJECT_TYPE && typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }

    var _class = _toString.call(value);

    switch (_class) {
      case NUMBER_CLASS:
      case BOOLEAN_CLASS:
      case STRING_CLASS:
        value = value.valueOf();
    }

    switch (value) {
      case null: return 'null';
      case true: return 'true';
      case false: return 'false';
    }

    type = typeof value;
    switch (type) {
      case 'string':
        return value.inspect(true);
      case 'number':
        return isFinite(value) ? String(value) : 'null';
      case 'object':

        for (var i = 0, length = stack.length; i < length; i++) {
          if (stack[i] === value) { throw new TypeError(); }
        }
        stack.push(value);

        var partial = [];
        if (_class === ARRAY_CLASS) {
          for (var i = 0, length = value.length; i < length; i++) {
            var str = Str(i, value, stack);
            partial.push(typeof str === 'undefined' ? 'null' : str);
          }
          partial = '[' + partial.join(',') + ']';
        } else {
          var keys = Object.keys(value);
          for (var i = 0, length = keys.length; i < length; i++) {
            var key = keys[i], str = Str(key, value, stack);
            if (typeof str !== "undefined") {
               partial.push(key.inspect(true)+ ':' + str);
             }
          }
          partial = '{' + partial.join(',') + '}';
        }
        stack.pop();
        return partial;
    }
  }

  function stringify(object) {
    return JSON.stringify(object);
  }

  function toQueryString(object) {
    return $H(object).toQueryString();
  }

  function toHTML(object) {
    return object && object.toHTML ? object.toHTML() : String.interpret(object);
  }

  function keys(object) {
    if (Type(object) !== OBJECT_TYPE) { throw new TypeError(); }
    var results = [];
    for (var property in object) {
      if (object.hasOwnProperty(property)) {
        results.push(property);
      }
    }
    return results;
  }

  function values(object) {
    var results = [];
    for (var property in object)
      results.push(object[property]);
    return results;
  }

  function clone(object) {
    return extend({ }, object);
  }

  function isElement(object) {
    return !!(object && object.nodeType == 1);
  }

  function isArray(object) {
    return _toString.call(object) === ARRAY_CLASS;
  }

  var hasNativeIsArray = (typeof Array.isArray == 'function')
    && Array.isArray([]) && !Array.isArray({});

  if (hasNativeIsArray) {
    isArray = Array.isArray;
  }

  function isHash(object) {
    return object instanceof Hash;
  }

  function isFunction(object) {
    return _toString.call(object) === FUNCTION_CLASS;
  }

  function isString(object) {
    return _toString.call(object) === STRING_CLASS;
  }

  function isNumber(object) {
    return _toString.call(object) === NUMBER_CLASS;
  }

  function isDate(object) {
    return _toString.call(object) === DATE_CLASS;
  }

  function isUndefined(object) {
    return typeof object === "undefined";
  }

  extend(Object, {
    extend:        extend,
    inspect:       inspect,
    toJSON:        NATIVE_JSON_STRINGIFY_SUPPORT ? stringify : toJSON,
    toQueryString: toQueryString,
    toHTML:        toHTML,
    keys:          Object.keys || keys,
    values:        values,
    clone:         clone,
    isElement:     isElement,
    isArray:       isArray,
    isHash:        isHash,
    isFunction:    isFunction,
    isString:      isString,
    isNumber:      isNumber,
    isDate:        isDate,
    isUndefined:   isUndefined
  });
})();
Object.extend(Function.prototype, (function() {
  var slice = Array.prototype.slice;

  function update(array, args) {
    var arrayLength = array.length, length = args.length;
    while (length--) array[arrayLength + length] = args[length];
    return array;
  }

  function merge(array, args) {
    array = slice.call(array, 0);
    return update(array, args);
  }

  function argumentNames() {
    var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
      .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
      .replace(/\s+/g, '').split(',');
    return names.length == 1 && !names[0] ? [] : names;
  }

  function bind(context) {
    if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
    var __method = this, args = slice.call(arguments, 1);
    return function() {
      var a = merge(args, arguments);
      return __method.apply(context, a);
    }
  }

  function bindAsEventListener(context) {
    var __method = this, args = slice.call(arguments, 1);
    return function(event) {
      var a = update([event || window.event], args);
      return __method.apply(context, a);
    }
  }

  function curry() {
    if (!arguments.length) return this;
    var __method = this, args = slice.call(arguments, 0);
    return function() {
      var a = merge(args, arguments);
      return __method.apply(this, a);
    }
  }

  function delay(timeout) {
    var __method = this, args = slice.call(arguments, 1);
    timeout = timeout * 1000;
    return window.setTimeout(function() {
      return __method.apply(__method, args);
    }, timeout);
  }

  function defer() {
    var args = update([0.01], arguments);
    return this.delay.apply(this, args);
  }

  function wrap(wrapper) {
    var __method = this;
    return function() {
      var a = update([__method.bind(this)], arguments);
      return wrapper.apply(this, a);
    }
  }

  function methodize() {
    if (this._methodized) return this._methodized;
    var __method = this;
    return this._methodized = function() {
      var a = update([this], arguments);
      return __method.apply(null, a);
    };
  }

  return {
    argumentNames:       argumentNames,
    bind:                bind,
    bindAsEventListener: bindAsEventListener,
    curry:               curry,
    delay:               delay,
    defer:               defer,
    wrap:                wrap,
    methodize:           methodize
  }
})());



(function(proto) {


  function toISOString() {
    return this.getUTCFullYear() + '-' +
      (this.getUTCMonth() + 1).toPaddedString(2) + '-' +
      this.getUTCDate().toPaddedString(2) + 'T' +
      this.getUTCHours().toPaddedString(2) + ':' +
      this.getUTCMinutes().toPaddedString(2) + ':' +
      this.getUTCSeconds().toPaddedString(2) + 'Z';
  }


  function toJSON() {
    return this.toISOString();
  }

  if (!proto.toISOString) proto.toISOString = toISOString;
  if (!proto.toJSON) proto.toJSON = toJSON;

})(Date.prototype);


RegExp.prototype.match = RegExp.prototype.test;

RegExp.escape = function(str) {
  return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
var PeriodicalExecuter = Class.create({
  initialize: function(callback, frequency) {
    this.callback = callback;
    this.frequency = frequency;
    this.currentlyExecuting = false;

    this.registerCallback();
  },

  registerCallback: function() {
    this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
  },

  execute: function() {
    this.callback(this);
  },

  stop: function() {
    if (!this.timer) return;
    clearInterval(this.timer);
    this.timer = null;
  },

  onTimerEvent: function() {
    if (!this.currentlyExecuting) {
      try {
        this.currentlyExecuting = true;
        this.execute();
        this.currentlyExecuting = false;
      } catch(e) {
        this.currentlyExecuting = false;
        throw e;
      }
    }
  }
});
Object.extend(String, {
  interpret: function(value) {
    return value == null ? '' : String(value);
  },
  specialChar: {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '\\': '\\\\'
  }
});

Object.extend(String.prototype, (function() {
  var NATIVE_JSON_PARSE_SUPPORT = window.JSON &&
    typeof JSON.parse === 'function' &&
    JSON.parse('{"test": true}').test;

  function prepareReplacement(replacement) {
    if (Object.isFunction(replacement)) return replacement;
    var template = new Template(replacement);
    return function(match) { return template.evaluate(match) };
  }

  function gsub(pattern, replacement) {
    var result = '', source = this, match;
    replacement = prepareReplacement(replacement);

    if (Object.isString(pattern))
      pattern = RegExp.escape(pattern);

    if (!(pattern.length || pattern.source)) {
      replacement = replacement('');
      return replacement + source.split('').join(replacement) + replacement;
    }

    while (source.length > 0) {
      if (match = source.match(pattern)) {
        result += source.slice(0, match.index);
        result += String.interpret(replacement(match));
        source  = source.slice(match.index + match[0].length);
      } else {
        result += source, source = '';
      }
    }
    return result;
  }

  function sub(pattern, replacement, count) {
    replacement = prepareReplacement(replacement);
    count = Object.isUndefined(count) ? 1 : count;

    return this.gsub(pattern, function(match) {
      if (--count < 0) return match[0];
      return replacement(match);
    });
  }

  function scan(pattern, iterator) {
    this.gsub(pattern, iterator);
    return String(this);
  }

  function truncate(length, truncation) {
    length = length || 30;
    truncation = Object.isUndefined(truncation) ? '...' : truncation;
    return this.length > length ?
      this.slice(0, length - truncation.length) + truncation : String(this);
  }

  function strip() {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
  }

  function stripTags() {
    return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
  }

  function stripScripts() {
    return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
  }

  function extractScripts() {
    var matchAll = new RegExp(Prototype.ScriptFragment, 'img'),
        matchOne = new RegExp(Prototype.ScriptFragment, 'im');
    return (this.match(matchAll) || []).map(function(scriptTag) {
      return (scriptTag.match(matchOne) || ['', ''])[1];
    });
  }

  function evalScripts() {
    return this.extractScripts().map(function(script) { return eval(script) });
  }

  function escapeHTML() {
    return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function unescapeHTML() {
    return this.stripTags().replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
  }


  function toQueryParams(separator) {
    var match = this.strip().match(/([^?#]*)(#.*)?$/);
    if (!match) return { };

    return match[1].split(separator || '&').inject({ }, function(hash, pair) {
      if ((pair = pair.split('='))[0]) {
        var key = decodeURIComponent(pair.shift()),
            value = pair.length > 1 ? pair.join('=') : pair[0];

        if (value != undefined) value = decodeURIComponent(value);

        if (key in hash) {
          if (!Object.isArray(hash[key])) hash[key] = [hash[key]];
          hash[key].push(value);
        }
        else hash[key] = value;
      }
      return hash;
    });
  }

  function toArray() {
    return this.split('');
  }

  function succ() {
    return this.slice(0, this.length - 1) +
      String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
  }

  function times(count) {
    return count < 1 ? '' : new Array(count + 1).join(this);
  }

  function camelize() {
    return this.replace(/-+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
  }

  function capitalize() {
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
  }

  function underscore() {
    return this.replace(/::/g, '/')
               .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
               .replace(/([a-z\d])([A-Z])/g, '$1_$2')
               .replace(/-/g, '_')
               .toLowerCase();
  }

  function dasherize() {
    return this.replace(/_/g, '-');
  }

  function inspect(useDoubleQuotes) {
    var escapedString = this.replace(/[\x00-\x1f\\]/g, function(character) {
      if (character in String.specialChar) {
        return String.specialChar[character];
      }
      return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
    });
    if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
    return "'" + escapedString.replace(/'/g, '\\\'') + "'";
  }

  function unfilterJSON(filter) {
    return this.replace(filter || Prototype.JSONFilter, '$1');
  }

  function isJSON() {
    var str = this;
    if (str.blank()) return false;
    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return (/^[\],:{}\s]*$/).test(str);
  }

  function evalJSON(sanitize) {
    var json = this.unfilterJSON(),
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    if (cx.test(json)) {
      json = json.replace(cx, function (a) {
        return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      });
    }
    try {
      if (!sanitize || json.isJSON()) return eval('(' + json + ')');
    } catch (e) { }
    throw new SyntaxError('Badly formed JSON string: ' + this.inspect());
  }

  function parseJSON() {
    var json = this.unfilterJSON();
    return JSON.parse(json);
  }

  function include(pattern) {
    return this.indexOf(pattern) > -1;
  }

  function startsWith(pattern) {
    return this.lastIndexOf(pattern, 0) === 0;
  }

  function endsWith(pattern) {
    var d = this.length - pattern.length;
    return d >= 0 && this.indexOf(pattern, d) === d;
  }

  function empty() {
    return this == '';
  }

  function blank() {
    return /^\s*$/.test(this);
  }

  function interpolate(object, pattern) {
    return new Template(this, pattern).evaluate(object);
  }

  return {
    gsub:           gsub,
    sub:            sub,
    scan:           scan,
    truncate:       truncate,
    strip:          String.prototype.trim || strip,
    stripTags:      stripTags,
    stripScripts:   stripScripts,
    extractScripts: extractScripts,
    evalScripts:    evalScripts,
    escapeHTML:     escapeHTML,
    unescapeHTML:   unescapeHTML,
    toQueryParams:  toQueryParams,
    parseQuery:     toQueryParams,
    toArray:        toArray,
    succ:           succ,
    times:          times,
    camelize:       camelize,
    capitalize:     capitalize,
    underscore:     underscore,
    dasherize:      dasherize,
    inspect:        inspect,
    unfilterJSON:   unfilterJSON,
    isJSON:         isJSON,
    evalJSON:       NATIVE_JSON_PARSE_SUPPORT ? parseJSON : evalJSON,
    include:        include,
    startsWith:     startsWith,
    endsWith:       endsWith,
    empty:          empty,
    blank:          blank,
    interpolate:    interpolate
  };
})());

var Template = Class.create({
  initialize: function(template, pattern) {
    this.template = template.toString();
    this.pattern = pattern || Template.Pattern;
  },

  evaluate: function(object) {
    if (object && Object.isFunction(object.toTemplateReplacements))
      object = object.toTemplateReplacements();

    return this.template.gsub(this.pattern, function(match) {
      if (object == null) return (match[1] + '');

      var before = match[1] || '';
      if (before == '\\') return match[2];

      var ctx = object, expr = match[3],
          pattern = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;

      match = pattern.exec(expr);
      if (match == null) return before;

      while (match != null) {
        var comp = match[1].startsWith('[') ? match[2].replace(/\\\\]/g, ']') : match[1];
        ctx = ctx[comp];
        if (null == ctx || '' == match[3]) break;
        expr = expr.substring('[' == match[3] ? match[1].length : match[0].length);
        match = pattern.exec(expr);
      }

      return before + String.interpret(ctx);
    });
  }
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;

var $break = { };

var Enumerable = (function() {
  function each(iterator, context) {
    var index = 0;
    try {
      this._each(function(value) {
        iterator.call(context, value, index++);
      });
    } catch (e) {
      if (e != $break) throw e;
    }
    return this;
  }

  function eachSlice(number, iterator, context) {
    var index = -number, slices = [], array = this.toArray();
    if (number < 1) return array;
    while ((index += number) < array.length)
      slices.push(array.slice(index, index+number));
    return slices.collect(iterator, context);
  }

  function all(iterator, context) {
    iterator = iterator || Prototype.K;
    var result = true;
    this.each(function(value, index) {
      result = result && !!iterator.call(context, value, index);
      if (!result) throw $break;
    });
    return result;
  }

  function any(iterator, context) {
    iterator = iterator || Prototype.K;
    var result = false;
    this.each(function(value, index) {
      if (result = !!iterator.call(context, value, index))
        throw $break;
    });
    return result;
  }

  function collect(iterator, context) {
    iterator = iterator || Prototype.K;
    var results = [];
    this.each(function(value, index) {
      results.push(iterator.call(context, value, index));
    });
    return results;
  }

  function detect(iterator, context) {
    var result;
    this.each(function(value, index) {
      if (iterator.call(context, value, index)) {
        result = value;
        throw $break;
      }
    });
    return result;
  }

  function findAll(iterator, context) {
    var results = [];
    this.each(function(value, index) {
      if (iterator.call(context, value, index))
        results.push(value);
    });
    return results;
  }

  function grep(filter, iterator, context) {
    iterator = iterator || Prototype.K;
    var results = [];

    if (Object.isString(filter))
      filter = new RegExp(RegExp.escape(filter));

    this.each(function(value, index) {
      if (filter.match(value))
        results.push(iterator.call(context, value, index));
    });
    return results;
  }

  function include(object) {
    if (Object.isFunction(this.indexOf))
      if (this.indexOf(object) != -1) return true;

    var found = false;
    this.each(function(value) {
      if (value == object) {
        found = true;
        throw $break;
      }
    });
    return found;
  }

  function inGroupsOf(number, fillWith) {
    fillWith = Object.isUndefined(fillWith) ? null : fillWith;
    return this.eachSlice(number, function(slice) {
      while(slice.length < number) slice.push(fillWith);
      return slice;
    });
  }

  function inject(memo, iterator, context) {
    this.each(function(value, index) {
      memo = iterator.call(context, memo, value, index);
    });
    return memo;
  }

  function invoke(method) {
    var args = $A(arguments).slice(1);
    return this.map(function(value) {
      return value[method].apply(value, args);
    });
  }

  function max(iterator, context) {
    iterator = iterator || Prototype.K;
    var result;
    this.each(function(value, index) {
      value = iterator.call(context, value, index);
      if (result == null || value >= result)
        result = value;
    });
    return result;
  }

  function min(iterator, context) {
    iterator = iterator || Prototype.K;
    var result;
    this.each(function(value, index) {
      value = iterator.call(context, value, index);
      if (result == null || value < result)
        result = value;
    });
    return result;
  }

  function partition(iterator, context) {
    iterator = iterator || Prototype.K;
    var trues = [], falses = [];
    this.each(function(value, index) {
      (iterator.call(context, value, index) ?
        trues : falses).push(value);
    });
    return [trues, falses];
  }

  function pluck(property) {
    var results = [];
    this.each(function(value) {
      results.push(value[property]);
    });
    return results;
  }

  function reject(iterator, context) {
    var results = [];
    this.each(function(value, index) {
      if (!iterator.call(context, value, index))
        results.push(value);
    });
    return results;
  }

  function sortBy(iterator, context) {
    return this.map(function(value, index) {
      return {
        value: value,
        criteria: iterator.call(context, value, index)
      };
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }).pluck('value');
  }

  function toArray() {
    return this.map();
  }

  function zip() {
    var iterator = Prototype.K, args = $A(arguments);
    if (Object.isFunction(args.last()))
      iterator = args.pop();

    var collections = [this].concat(args).map($A);
    return this.map(function(value, index) {
      return iterator(collections.pluck(index));
    });
  }

  function size() {
    return this.toArray().length;
  }

  function inspect() {
    return '#<Enumerable:' + this.toArray().inspect() + '>';
  }









  return {
    each:       each,
    eachSlice:  eachSlice,
    all:        all,
    every:      all,
    any:        any,
    some:       any,
    collect:    collect,
    map:        collect,
    detect:     detect,
    findAll:    findAll,
    select:     findAll,
    filter:     findAll,
    grep:       grep,
    include:    include,
    member:     include,
    inGroupsOf: inGroupsOf,
    inject:     inject,
    invoke:     invoke,
    max:        max,
    min:        min,
    partition:  partition,
    pluck:      pluck,
    reject:     reject,
    sortBy:     sortBy,
    toArray:    toArray,
    entries:    toArray,
    zip:        zip,
    size:       size,
    inspect:    inspect,
    find:       detect
  };
})();

function $A(iterable) {
  if (!iterable) return [];
  if ('toArray' in Object(iterable)) return iterable.toArray();
  var length = iterable.length || 0, results = new Array(length);
  while (length--) results[length] = iterable[length];
  return results;
}


function $w(string) {
  if (!Object.isString(string)) return [];
  string = string.strip();
  return string ? string.split(/\s+/) : [];
}

Array.from = $A;


(function() {
  var arrayProto = Array.prototype,
      slice = arrayProto.slice,
      _each = arrayProto.forEach; // use native browser JS 1.6 implementation if available

  function each(iterator, context) {
    for (var i = 0, length = this.length >>> 0; i < length; i++) {
      if (i in this) iterator.call(context, this[i], i, this);
    }
  }
  if (!_each) _each = each;

  function clear() {
    this.length = 0;
    return this;
  }

  function first() {
    return this[0];
  }

  function last() {
    return this[this.length - 1];
  }

  function compact() {
    return this.select(function(value) {
      return value != null;
    });
  }

  function flatten() {
    return this.inject([], function(array, value) {
      if (Object.isArray(value))
        return array.concat(value.flatten());
      array.push(value);
      return array;
    });
  }

  function without() {
    var values = slice.call(arguments, 0);
    return this.select(function(value) {
      return !values.include(value);
    });
  }

  function reverse(inline) {
    return (inline === false ? this.toArray() : this)._reverse();
  }

  function uniq(sorted) {
    return this.inject([], function(array, value, index) {
      if (0 == index || (sorted ? array.last() != value : !array.include(value)))
        array.push(value);
      return array;
    });
  }

  function intersect(array) {
    return this.uniq().findAll(function(item) {
      return array.detect(function(value) { return item === value });
    });
  }


  function clone() {
    return slice.call(this, 0);
  }

  function size() {
    return this.length;
  }

  function inspect() {
    return '[' + this.map(Object.inspect).join(', ') + ']';
  }

  function indexOf(item, i) {
    i || (i = 0);
    var length = this.length;
    if (i < 0) i = length + i;
    for (; i < length; i++)
      if (this[i] === item) return i;
    return -1;
  }

  function lastIndexOf(item, i) {
    i = isNaN(i) ? this.length : (i < 0 ? this.length + i : i) + 1;
    var n = this.slice(0, i).reverse().indexOf(item);
    return (n < 0) ? n : i - n - 1;
  }

  function concat() {
    var array = slice.call(this, 0), item;
    for (var i = 0, length = arguments.length; i < length; i++) {
      item = arguments[i];
      if (Object.isArray(item) && !('callee' in item)) {
        for (var j = 0, arrayLength = item.length; j < arrayLength; j++)
          array.push(item[j]);
      } else {
        array.push(item);
      }
    }
    return array;
  }

  Object.extend(arrayProto, Enumerable);

  if (!arrayProto._reverse)
    arrayProto._reverse = arrayProto.reverse;

  Object.extend(arrayProto, {
    _each:     _each,
    clear:     clear,
    first:     first,
    last:      last,
    compact:   compact,
    flatten:   flatten,
    without:   without,
    reverse:   reverse,
    uniq:      uniq,
    intersect: intersect,
    clone:     clone,
    toArray:   clone,
    size:      size,
    inspect:   inspect
  });

  var CONCAT_ARGUMENTS_BUGGY = (function() {
    return [].concat(arguments)[0][0] !== 1;
  })(1,2)

  if (CONCAT_ARGUMENTS_BUGGY) arrayProto.concat = concat;

  if (!arrayProto.indexOf) arrayProto.indexOf = indexOf;
  if (!arrayProto.lastIndexOf) arrayProto.lastIndexOf = lastIndexOf;
})();
function $H(object) {
  return new Hash(object);
};

var Hash = Class.create(Enumerable, (function() {
  function initialize(object) {
    this._object = Object.isHash(object) ? object.toObject() : Object.clone(object);
  }


  function _each(iterator) {
    for (var key in this._object) {
      var value = this._object[key], pair = [key, value];
      pair.key = key;
      pair.value = value;
      iterator(pair);
    }
  }

  function set(key, value) {
    return this._object[key] = value;
  }

  function get(key) {
    if (this._object[key] !== Object.prototype[key])
      return this._object[key];
  }

  function unset(key) {
    var value = this._object[key];
    delete this._object[key];
    return value;
  }

  function toObject() {
    return Object.clone(this._object);
  }



  function keys() {
    return this.pluck('key');
  }

  function values() {
    return this.pluck('value');
  }

  function index(value) {
    var match = this.detect(function(pair) {
      return pair.value === value;
    });
    return match && match.key;
  }

  function merge(object) {
    return this.clone().update(object);
  }

  function update(object) {
    return new Hash(object).inject(this, function(result, pair) {
      result.set(pair.key, pair.value);
      return result;
    });
  }

  function toQueryPair(key, value) {
    if (Object.isUndefined(value)) return key;
    return key + '=' + encodeURIComponent(String.interpret(value));
  }

  function toQueryString() {
    return this.inject([], function(results, pair) {
      var key = encodeURIComponent(pair.key), values = pair.value;

      if (values && typeof values == 'object') {
        if (Object.isArray(values)) {
          var queryValues = [];
          for (var i = 0, len = values.length, value; i < len; i++) {
            value = values[i];
            queryValues.push(toQueryPair(key, value));
          }
          return results.concat(queryValues);
        }
      } else results.push(toQueryPair(key, values));
      return results;
    }).join('&');
  }

  function inspect() {
    return '#<Hash:{' + this.map(function(pair) {
      return pair.map(Object.inspect).join(': ');
    }).join(', ') + '}>';
  }

  function clone() {
    return new Hash(this);
  }

  return {
    initialize:             initialize,
    _each:                  _each,
    set:                    set,
    get:                    get,
    unset:                  unset,
    toObject:               toObject,
    toTemplateReplacements: toObject,
    keys:                   keys,
    values:                 values,
    index:                  index,
    merge:                  merge,
    update:                 update,
    toQueryString:          toQueryString,
    inspect:                inspect,
    toJSON:                 toObject,
    clone:                  clone
  };
})());

Hash.from = $H;
Object.extend(Number.prototype, (function() {
  function toColorPart() {
    return this.toPaddedString(2, 16);
  }

  function succ() {
    return this + 1;
  }

  function times(iterator, context) {
    $R(0, this, true).each(iterator, context);
    return this;
  }

  function toPaddedString(length, radix) {
    var string = this.toString(radix || 10);
    return '0'.times(length - string.length) + string;
  }

  function abs() {
    return Math.abs(this);
  }

  function round() {
    return Math.round(this);
  }

  function ceil() {
    return Math.ceil(this);
  }

  function floor() {
    return Math.floor(this);
  }

  return {
    toColorPart:    toColorPart,
    succ:           succ,
    times:          times,
    toPaddedString: toPaddedString,
    abs:            abs,
    round:          round,
    ceil:           ceil,
    floor:          floor
  };
})());

function $R(start, end, exclusive) {
  return new ObjectRange(start, end, exclusive);
}

var ObjectRange = Class.create(Enumerable, (function() {
  function initialize(start, end, exclusive) {
    this.start = start;
    this.end = end;
    this.exclusive = exclusive;
  }

  function _each(iterator) {
    var value = this.start;
    while (this.include(value)) {
      iterator(value);
      value = value.succ();
    }
  }

  function include(value) {
    if (value < this.start)
      return false;
    if (this.exclusive)
      return value < this.end;
    return value <= this.end;
  }

  return {
    initialize: initialize,
    _each:      _each,
    include:    include
  };
})());



var Ajax = {
  getTransport: function() {
    return Try.these(
      function() {return new XMLHttpRequest()},
      function() {return new ActiveXObject('Msxml2.XMLHTTP')},
      function() {return new ActiveXObject('Microsoft.XMLHTTP')}
    ) || false;
  },

  activeRequestCount: 0
};

Ajax.Responders = {
  responders: [],

  _each: function(iterator) {
    this.responders._each(iterator);
  },

  register: function(responder) {
    if (!this.include(responder))
      this.responders.push(responder);
  },

  unregister: function(responder) {
    this.responders = this.responders.without(responder);
  },

  dispatch: function(callback, request, transport, json) {
    this.each(function(responder) {
      if (Object.isFunction(responder[callback])) {
        try {
          responder[callback].apply(responder, [request, transport, json]);
        } catch (e) { }
      }
    });
  }
};

Object.extend(Ajax.Responders, Enumerable);

Ajax.Responders.register({
  onCreate:   function() { Ajax.activeRequestCount++ },
  onComplete: function() { Ajax.activeRequestCount-- }
});
Ajax.Base = Class.create({
  initialize: function(options) {
    this.options = {
      method:       'post',
      asynchronous: true,
      contentType:  'application/x-www-form-urlencoded',
      encoding:     'UTF-8',
      parameters:   '',
      evalJSON:     true,
      evalJS:       true
    };
    Object.extend(this.options, options || { });

    this.options.method = this.options.method.toLowerCase();

    if (Object.isHash(this.options.parameters))
      this.options.parameters = this.options.parameters.toObject();
  }
});
Ajax.Request = Class.create(Ajax.Base, {
  _complete: false,

  initialize: function($super, url, options) {
    $super(options);
    this.transport = Ajax.getTransport();
    this.request(url);
  },

  request: function(url) {
    this.url = url;
    this.method = this.options.method;
    var params = Object.isString(this.options.parameters) ?
          this.options.parameters :
          Object.toQueryString(this.options.parameters);

    if (!['get', 'post'].include(this.method)) {
      params += (params ? '&' : '') + "_method=" + this.method;
      this.method = 'post';
    }

    if (params && this.method === 'get') {
      this.url += (this.url.include('?') ? '&' : '?') + params;
    }

    this.parameters = params.toQueryParams();

    try {
      var response = new Ajax.Response(this);
      if (this.options.onCreate) this.options.onCreate(response);
      Ajax.Responders.dispatch('onCreate', this, response);

      this.transport.open(this.method.toUpperCase(), this.url,
        this.options.asynchronous);

      if (this.options.asynchronous) this.respondToReadyState.bind(this).defer(1);

      this.transport.onreadystatechange = this.onStateChange.bind(this);
      this.setRequestHeaders();

      this.body = this.method == 'post' ? (this.options.postBody || params) : null;
      this.transport.send(this.body);

      /* Force Firefox to handle ready state 4 for synchronous requests */
      if (!this.options.asynchronous && this.transport.overrideMimeType)
        this.onStateChange();

    }
    catch (e) {
      this.dispatchException(e);
    }
  },

  onStateChange: function() {
    var readyState = this.transport.readyState;
    if (readyState > 1 && !((readyState == 4) && this._complete))
      this.respondToReadyState(this.transport.readyState);
  },

  setRequestHeaders: function() {
    var headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'X-Prototype-Version': Prototype.Version,
      'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
    };

    if (this.method == 'post') {
      headers['Content-type'] = this.options.contentType +
        (this.options.encoding ? '; charset=' + this.options.encoding : '');

      /* Force "Connection: close" for older Mozilla browsers to work
       * around a bug where XMLHttpRequest sends an incorrect
       * Content-length header. See Mozilla Bugzilla #246651.
       */
      if (this.transport.overrideMimeType &&
          (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0,2005])[1] < 2005)
            headers['Connection'] = 'close';
    }

    if (typeof this.options.requestHeaders == 'object') {
      var extras = this.options.requestHeaders;

      if (Object.isFunction(extras.push))
        for (var i = 0, length = extras.length; i < length; i += 2)
          headers[extras[i]] = extras[i+1];
      else
        $H(extras).each(function(pair) { headers[pair.key] = pair.value });
    }

    for (var name in headers)
      this.transport.setRequestHeader(name, headers[name]);
  },

  success: function() {
    var status = this.getStatus();
    return !status || (status >= 200 && status < 300) || status == 304;
  },

  getStatus: function() {
    try {
      if (this.transport.status === 1223) return 204;
      return this.transport.status || 0;
    } catch (e) { return 0 }
  },

  respondToReadyState: function(readyState) {
    var state = Ajax.Request.Events[readyState], response = new Ajax.Response(this);

    if (state == 'Complete') {
      try {
        this._complete = true;
        (this.options['on' + response.status]
         || this.options['on' + (this.success() ? 'Success' : 'Failure')]
         || Prototype.emptyFunction)(response, response.headerJSON);
      } catch (e) {
        this.dispatchException(e);
      }

      var contentType = response.getHeader('Content-type');
      if (this.options.evalJS == 'force'
          || (this.options.evalJS && this.isSameOrigin() && contentType
          && contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))
        this.evalResponse();
    }

    try {
      (this.options['on' + state] || Prototype.emptyFunction)(response, response.headerJSON);
      Ajax.Responders.dispatch('on' + state, this, response, response.headerJSON);
    } catch (e) {
      this.dispatchException(e);
    }

    if (state == 'Complete') {
      this.transport.onreadystatechange = Prototype.emptyFunction;
    }
  },

  isSameOrigin: function() {
    var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
    return !m || (m[0] == '#{protocol}//#{domain}#{port}'.interpolate({
      protocol: location.protocol,
      domain: document.domain,
      port: location.port ? ':' + location.port : ''
    }));
  },

  getHeader: function(name) {
    try {
      return this.transport.getResponseHeader(name) || null;
    } catch (e) { return null; }
  },

  evalResponse: function() {
    try {
      return eval((this.transport.responseText || '').unfilterJSON());
    } catch (e) {
      this.dispatchException(e);
    }
  },

  dispatchException: function(exception) {
    (this.options.onException || Prototype.emptyFunction)(this, exception);
    Ajax.Responders.dispatch('onException', this, exception);
  }
});

Ajax.Request.Events =
  ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];








Ajax.Response = Class.create({
  initialize: function(request){
    this.request = request;
    var transport  = this.transport  = request.transport,
        readyState = this.readyState = transport.readyState;

    if ((readyState > 2 && !Prototype.Browser.IE) || readyState == 4) {
      this.status       = this.getStatus();
      this.statusText   = this.getStatusText();
      this.responseText = String.interpret(transport.responseText);
      this.headerJSON   = this._getHeaderJSON();
    }

    if (readyState == 4) {
      var xml = transport.responseXML;
      this.responseXML  = Object.isUndefined(xml) ? null : xml;
      this.responseJSON = this._getResponseJSON();
    }
  },

  status:      0,

  statusText: '',

  getStatus: Ajax.Request.prototype.getStatus,

  getStatusText: function() {
    try {
      return this.transport.statusText || '';
    } catch (e) { return '' }
  },

  getHeader: Ajax.Request.prototype.getHeader,

  getAllHeaders: function() {
    try {
      return this.getAllResponseHeaders();
    } catch (e) { return null }
  },

  getResponseHeader: function(name) {
    return this.transport.getResponseHeader(name);
  },

  getAllResponseHeaders: function() {
    return this.transport.getAllResponseHeaders();
  },

  _getHeaderJSON: function() {
    var json = this.getHeader('X-JSON');
    if (!json) return null;
    json = decodeURIComponent(escape(json));
    try {
      return json.evalJSON(this.request.options.sanitizeJSON ||
        !this.request.isSameOrigin());
    } catch (e) {
      this.request.dispatchException(e);
    }
  },

  _getResponseJSON: function() {
    var options = this.request.options;
    if (!options.evalJSON || (options.evalJSON != 'force' &&
      !(this.getHeader('Content-type') || '').include('application/json')) ||
        this.responseText.blank())
          return null;
    try {
      return this.responseText.evalJSON(options.sanitizeJSON ||
        !this.request.isSameOrigin());
    } catch (e) {
      this.request.dispatchException(e);
    }
  }
});

Ajax.Updater = Class.create(Ajax.Request, {
  initialize: function($super, container, url, options) {
    this.container = {
      success: (container.success || container),
      failure: (container.failure || (container.success ? null : container))
    };

    options = Object.clone(options);
    var onComplete = options.onComplete;
    options.onComplete = (function(response, json) {
      this.updateContent(response.responseText);
      if (Object.isFunction(onComplete)) onComplete(response, json);
    }).bind(this);

    $super(url, options);
  },

  updateContent: function(responseText) {
    var receiver = this.container[this.success() ? 'success' : 'failure'],
        options = this.options;

    if (!options.evalScripts) responseText = responseText.stripScripts();

    if (receiver = $(receiver)) {
      if (options.insertion) {
        if (Object.isString(options.insertion)) {
          var insertion = { }; insertion[options.insertion] = responseText;
          receiver.insert(insertion);
        }
        else options.insertion(receiver, responseText);
      }
      else receiver.update(responseText);
    }
  }
});

Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
  initialize: function($super, container, url, options) {
    $super(options);
    this.onComplete = this.options.onComplete;

    this.frequency = (this.options.frequency || 2);
    this.decay = (this.options.decay || 1);

    this.updater = { };
    this.container = container;
    this.url = url;

    this.start();
  },

  start: function() {
    this.options.onComplete = this.updateComplete.bind(this);
    this.onTimerEvent();
  },

  stop: function() {
    this.updater.options.onComplete = undefined;
    clearTimeout(this.timer);
    (this.onComplete || Prototype.emptyFunction).apply(this, arguments);
  },

  updateComplete: function(response) {
    if (this.options.decay) {
      this.decay = (response.responseText == this.lastText ?
        this.decay * this.options.decay : 1);

      this.lastText = response.responseText;
    }
    this.timer = this.onTimerEvent.bind(this).delay(this.decay * this.frequency);
  },

  onTimerEvent: function() {
    this.updater = new Ajax.Updater(this.container, this.url, this.options);
  }
});


function $(element) {
  if (arguments.length > 1) {
    for (var i = 0, elements = [], length = arguments.length; i < length; i++)
      elements.push($(arguments[i]));
    return elements;
  }
  if (Object.isString(element))
    element = document.getElementById(element);
  return Element.extend(element);
}

if (Prototype.BrowserFeatures.XPath) {
  document._getElementsByXPath = function(expression, parentElement) {
    var results = [];
    var query = document.evaluate(expression, $(parentElement) || document,
      null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0, length = query.snapshotLength; i < length; i++)
      results.push(Element.extend(query.snapshotItem(i)));
    return results;
  };
}

/*--------------------------------------------------------------------------*/

if (!Node) var Node = { };

if (!Node.ELEMENT_NODE) {
  Object.extend(Node, {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12
  });
}



(function(global) {
  function shouldUseCache(tagName, attributes) {
    if (tagName === 'select') return false;
    if ('type' in attributes) return false;
    return true;
  }

  var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = (function(){
    try {
      var el = document.createElement('<input name="x">');
      return el.tagName.toLowerCase() === 'input' && el.name === 'x';
    }
    catch(err) {
      return false;
    }
  })();

  var element = global.Element;

  global.Element = function(tagName, attributes) {
    attributes = attributes || { };
    tagName = tagName.toLowerCase();
    var cache = Element.cache;

    if (HAS_EXTENDED_CREATE_ELEMENT_SYNTAX && attributes.name) {
      tagName = '<' + tagName + ' name="' + attributes.name + '">';
      delete attributes.name;
      return Element.writeAttribute(document.createElement(tagName), attributes);
    }

    if (!cache[tagName]) cache[tagName] = Element.extend(document.createElement(tagName));

    var node = shouldUseCache(tagName, attributes) ?
     cache[tagName].cloneNode(false) : document.createElement(tagName);

    return Element.writeAttribute(node, attributes);
  };

  Object.extend(global.Element, element || { });
  if (element) global.Element.prototype = element.prototype;

})(this);

Element.idCounter = 1;
Element.cache = { };

Element._purgeElement = function(element) {
  var uid = element._prototypeUID;
  if (uid) {
    Element.stopObserving(element);
    element._prototypeUID = void 0;
    delete Element.Storage[uid];
  }
}

Element.Methods = {
  visible: function(element) {
    return $(element).style.display != 'none';
  },

  toggle: function(element) {
    element = $(element);
    Element[Element.visible(element) ? 'hide' : 'show'](element);
    return element;
  },

  hide: function(element) {
    element = $(element);
    element.style.display = 'none';
    return element;
  },

  show: function(element) {
    element = $(element);
    element.style.display = '';
    return element;
  },

  remove: function(element) {
    element = $(element);
    element.parentNode.removeChild(element);
    return element;
  },

  update: (function(){

    var SELECT_ELEMENT_INNERHTML_BUGGY = (function(){
      var el = document.createElement("select"),
          isBuggy = true;
      el.innerHTML = "<option value=\"test\">test</option>";
      if (el.options && el.options[0]) {
        isBuggy = el.options[0].nodeName.toUpperCase() !== "OPTION";
      }
      el = null;
      return isBuggy;
    })();

    var TABLE_ELEMENT_INNERHTML_BUGGY = (function(){
      try {
        var el = document.createElement("table");
        if (el && el.tBodies) {
          el.innerHTML = "<tbody><tr><td>test</td></tr></tbody>";
          var isBuggy = typeof el.tBodies[0] == "undefined";
          el = null;
          return isBuggy;
        }
      } catch (e) {
        return true;
      }
    })();

    var LINK_ELEMENT_INNERHTML_BUGGY = (function() {
      try {
        var el = document.createElement('div');
        el.innerHTML = "<link>";
        var isBuggy = (el.childNodes.length === 0);
        el = null;
        return isBuggy;
      } catch(e) {
        return true;
      }
    })();

    var ANY_INNERHTML_BUGGY = SELECT_ELEMENT_INNERHTML_BUGGY ||
     TABLE_ELEMENT_INNERHTML_BUGGY || LINK_ELEMENT_INNERHTML_BUGGY;

    var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = (function () {
      var s = document.createElement("script"),
          isBuggy = false;
      try {
        s.appendChild(document.createTextNode(""));
        isBuggy = !s.firstChild ||
          s.firstChild && s.firstChild.nodeType !== 3;
      } catch (e) {
        isBuggy = true;
      }
      s = null;
      return isBuggy;
    })();


    function update(element, content) {
      element = $(element);
      var purgeElement = Element._purgeElement;

      var descendants = element.getElementsByTagName('*'),
       i = descendants.length;
      while (i--) purgeElement(descendants[i]);

      if (content && content.toElement)
        content = content.toElement();

      if (Object.isElement(content))
        return element.update().insert(content);

      content = Object.toHTML(content);

      var tagName = element.tagName.toUpperCase();

      if (tagName === 'SCRIPT' && SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING) {
        element.text = content;
        return element;
      }

      if (ANY_INNERHTML_BUGGY) {
        if (tagName in Element._insertionTranslations.tags) {
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
          Element._getContentFromAnonymousElement(tagName, content.stripScripts())
            .each(function(node) {
              element.appendChild(node)
            });
        } else if (LINK_ELEMENT_INNERHTML_BUGGY && Object.isString(content) && content.indexOf('<link') > -1) {
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
          var nodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts(), true);
          nodes.each(function(node) { element.appendChild(node) });
        }
        else {
          element.innerHTML = content.stripScripts();
        }
      }
      else {
        element.innerHTML = content.stripScripts();
      }

      content.evalScripts.bind(content).defer();
      return element;
    }

    return update;
  })(),

  replace: function(element, content) {
    element = $(element);
    if (content && content.toElement) content = content.toElement();
    else if (!Object.isElement(content)) {
      content = Object.toHTML(content);
      var range = element.ownerDocument.createRange();
      range.selectNode(element);
      content.evalScripts.bind(content).defer();
      content = range.createContextualFragment(content.stripScripts());
    }
    element.parentNode.replaceChild(content, element);
    return element;
  },

  insert: function(element, insertions) {
    element = $(element);

    if (Object.isString(insertions) || Object.isNumber(insertions) ||
        Object.isElement(insertions) || (insertions && (insertions.toElement || insertions.toHTML)))
          insertions = {bottom:insertions};

    var content, insert, tagName, childNodes;

    for (var position in insertions) {
      content  = insertions[position];
      position = position.toLowerCase();
      insert = Element._insertionTranslations[position];

      if (content && content.toElement) content = content.toElement();
      if (Object.isElement(content)) {
        insert(element, content);
        continue;
      }

      content = Object.toHTML(content);

      tagName = ((position == 'before' || position == 'after')
        ? element.parentNode : element).tagName.toUpperCase();

      childNodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts());

      if (position == 'top' || position == 'after') childNodes.reverse();
      childNodes.each(insert.curry(element));

      content.evalScripts.bind(content).defer();
    }

    return element;
  },

  wrap: function(element, wrapper, attributes) {
    element = $(element);
    if (Object.isElement(wrapper))
      $(wrapper).writeAttribute(attributes || { });
    else if (Object.isString(wrapper)) wrapper = new Element(wrapper, attributes);
    else wrapper = new Element('div', wrapper);
    if (element.parentNode)
      element.parentNode.replaceChild(wrapper, element);
    wrapper.appendChild(element);
    return wrapper;
  },

  inspect: function(element) {
    element = $(element);
    var result = '<' + element.tagName.toLowerCase();
    $H({'id': 'id', 'className': 'class'}).each(function(pair) {
      var property = pair.first(),
          attribute = pair.last(),
          value = (element[property] || '').toString();
      if (value) result += ' ' + attribute + '=' + value.inspect(true);
    });
    return result + '>';
  },

  recursivelyCollect: function(element, property, maximumLength) {
    element = $(element);
    maximumLength = maximumLength || -1;
    var elements = [];

    while (element = element[property]) {
      if (element.nodeType == 1)
        elements.push(Element.extend(element));
      if (elements.length == maximumLength)
        break;
    }

    return elements;
  },

  ancestors: function(element) {
    return Element.recursivelyCollect(element, 'parentNode');
  },

  descendants: function(element) {
    return Element.select(element, "*");
  },

  firstDescendant: function(element) {
    element = $(element).firstChild;
    while (element && element.nodeType != 1) element = element.nextSibling;
    return $(element);
  },

  immediateDescendants: function(element) {
    var results = [], child = $(element).firstChild;
    while (child) {
      if (child.nodeType === 1) {
        results.push(Element.extend(child));
      }
      child = child.nextSibling;
    }
    return results;
  },

  previousSiblings: function(element, maximumLength) {
    return Element.recursivelyCollect(element, 'previousSibling');
  },

  nextSiblings: function(element) {
    return Element.recursivelyCollect(element, 'nextSibling');
  },

  siblings: function(element) {
    element = $(element);
    return Element.previousSiblings(element).reverse()
      .concat(Element.nextSiblings(element));
  },

  match: function(element, selector) {
    element = $(element);
    if (Object.isString(selector))
      return Prototype.Selector.match(element, selector);
    return selector.match(element);
  },

  up: function(element, expression, index) {
    element = $(element);
    if (arguments.length == 1) return $(element.parentNode);
    var ancestors = Element.ancestors(element);
    return Object.isNumber(expression) ? ancestors[expression] :
      Prototype.Selector.find(ancestors, expression, index);
  },

  down: function(element, expression, index) {
    element = $(element);
    if (arguments.length == 1) return Element.firstDescendant(element);
    return Object.isNumber(expression) ? Element.descendants(element)[expression] :
      Element.select(element, expression)[index || 0];
  },

  previous: function(element, expression, index) {
    element = $(element);
    if (Object.isNumber(expression)) index = expression, expression = false;
    if (!Object.isNumber(index)) index = 0;

    if (expression) {
      return Prototype.Selector.find(element.previousSiblings(), expression, index);
    } else {
      return element.recursivelyCollect("previousSibling", index + 1)[index];
    }
  },

  next: function(element, expression, index) {
    element = $(element);
    if (Object.isNumber(expression)) index = expression, expression = false;
    if (!Object.isNumber(index)) index = 0;

    if (expression) {
      return Prototype.Selector.find(element.nextSiblings(), expression, index);
    } else {
      var maximumLength = Object.isNumber(index) ? index + 1 : 1;
      return element.recursivelyCollect("nextSibling", index + 1)[index];
    }
  },


  select: function(element) {
    element = $(element);
    var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
    return Prototype.Selector.select(expressions, element);
  },

  adjacent: function(element) {
    element = $(element);
    var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
    return Prototype.Selector.select(expressions, element.parentNode).without(element);
  },

  identify: function(element) {
    element = $(element);
    var id = Element.readAttribute(element, 'id');
    if (id) return id;
    do { id = 'anonymous_element_' + Element.idCounter++ } while ($(id));
    Element.writeAttribute(element, 'id', id);
    return id;
  },

  readAttribute: function(element, name) {
    element = $(element);
    if (Prototype.Browser.IE) {
      var t = Element._attributeTranslations.read;
      if (t.values[name]) return t.values[name](element, name);
      if (t.names[name]) name = t.names[name];
      if (name.include(':')) {
        return (!element.attributes || !element.attributes[name]) ? null :
         element.attributes[name].value;
      }
    }
    return element.getAttribute(name);
  },

  writeAttribute: function(element, name, value) {
    element = $(element);
    var attributes = { }, t = Element._attributeTranslations.write;

    if (typeof name == 'object') attributes = name;
    else attributes[name] = Object.isUndefined(value) ? true : value;

    for (var attr in attributes) {
      name = t.names[attr] || attr;
      value = attributes[attr];
      if (t.values[attr]) name = t.values[attr](element, value);
      if (value === false || value === null)
        element.removeAttribute(name);
      else if (value === true)
        element.setAttribute(name, name);
      else element.setAttribute(name, value);
    }
    return element;
  },

  getHeight: function(element) {
    return Element.getDimensions(element).height;
  },

  getWidth: function(element) {
    return Element.getDimensions(element).width;
  },

  classNames: function(element) {
    return new Element.ClassNames(element);
  },

  hasClassName: function(element, className) {
    if (!(element = $(element))) return;
    var elementClassName = element.className;
    return (elementClassName.length > 0 && (elementClassName == className ||
      new RegExp("(^|\\s)" + className + "(\\s|$)").test(elementClassName)));
  },

  addClassName: function(element, className) {
    if (!(element = $(element))) return;
    if (!Element.hasClassName(element, className))
      element.className += (element.className ? ' ' : '') + className;
    return element;
  },

  removeClassName: function(element, className) {
    if (!(element = $(element))) return;
    element.className = element.className.replace(
      new RegExp("(^|\\s+)" + className + "(\\s+|$)"), ' ').strip();
    return element;
  },

  toggleClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element[Element.hasClassName(element, className) ?
      'removeClassName' : 'addClassName'](element, className);
  },

  cleanWhitespace: function(element) {
    element = $(element);
    var node = element.firstChild;
    while (node) {
      var nextNode = node.nextSibling;
      if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
        element.removeChild(node);
      node = nextNode;
    }
    return element;
  },

  empty: function(element) {
    return $(element).innerHTML.blank();
  },

  descendantOf: function(element, ancestor) {
    element = $(element), ancestor = $(ancestor);

    if (element.compareDocumentPosition)
      return (element.compareDocumentPosition(ancestor) & 8) === 8;

    if (ancestor.contains)
      return ancestor.contains(element) && ancestor !== element;

    while (element = element.parentNode)
      if (element == ancestor) return true;

    return false;
  },

  scrollTo: function(element) {
    element = $(element);
    var pos = Element.cumulativeOffset(element);
    window.scrollTo(pos[0], pos[1]);
    return element;
  },

  getStyle: function(element, style) {
    element = $(element);
    style = style == 'float' ? 'cssFloat' : style.camelize();
    var value = element.style[style];
    if (!value || value == 'auto') {
      var css = document.defaultView.getComputedStyle(element, null);
      value = css ? css[style] : null;
    }
    if (style == 'opacity') return value ? parseFloat(value) : 1.0;
    return value == 'auto' ? null : value;
  },

  getOpacity: function(element) {
    return $(element).getStyle('opacity');
  },

  setStyle: function(element, styles) {
    element = $(element);
    var elementStyle = element.style, match;
    if (Object.isString(styles)) {
      element.style.cssText += ';' + styles;
      return styles.include('opacity') ?
        element.setOpacity(styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) : element;
    }
    for (var property in styles)
      if (property == 'opacity') element.setOpacity(styles[property]);
      else
        elementStyle[(property == 'float' || property == 'cssFloat') ?
          (Object.isUndefined(elementStyle.styleFloat) ? 'cssFloat' : 'styleFloat') :
            property] = styles[property];

    return element;
  },

  setOpacity: function(element, value) {
    element = $(element);
    element.style.opacity = (value == 1 || value === '') ? '' :
      (value < 0.00001) ? 0 : value;
    return element;
  },

  makePositioned: function(element) {
    element = $(element);
    var pos = Element.getStyle(element, 'position');
    if (pos == 'static' || !pos) {
      element._madePositioned = true;
      element.style.position = 'relative';
      if (Prototype.Browser.Opera) {
        element.style.top = 0;
        element.style.left = 0;
      }
    }
    return element;
  },

  undoPositioned: function(element) {
    element = $(element);
    if (element._madePositioned) {
      element._madePositioned = undefined;
      element.style.position =
        element.style.top =
        element.style.left =
        element.style.bottom =
        element.style.right = '';
    }
    return element;
  },

  makeClipping: function(element) {
    element = $(element);
    if (element._overflow) return element;
    element._overflow = Element.getStyle(element, 'overflow') || 'auto';
    if (element._overflow !== 'hidden')
      element.style.overflow = 'hidden';
    return element;
  },

  undoClipping: function(element) {
    element = $(element);
    if (!element._overflow) return element;
    element.style.overflow = element._overflow == 'auto' ? '' : element._overflow;
    element._overflow = null;
    return element;
  },

  clonePosition: function(element, source) {
    var options = Object.extend({
      setLeft:    true,
      setTop:     true,
      setWidth:   true,
      setHeight:  true,
      offsetTop:  0,
      offsetLeft: 0
    }, arguments[2] || { });

    source = $(source);
    var p = Element.viewportOffset(source), delta = [0, 0], parent = null;

    element = $(element);

    if (Element.getStyle(element, 'position') == 'absolute') {
      parent = Element.getOffsetParent(element);
      delta = Element.viewportOffset(parent);
    }

    if (parent == document.body) {
      delta[0] -= document.body.offsetLeft;
      delta[1] -= document.body.offsetTop;
    }

    if (options.setLeft)   element.style.left  = (p[0] - delta[0] + options.offsetLeft) + 'px';
    if (options.setTop)    element.style.top   = (p[1] - delta[1] + options.offsetTop) + 'px';
    if (options.setWidth)  element.style.width = source.offsetWidth + 'px';
    if (options.setHeight) element.style.height = source.offsetHeight + 'px';
    return element;
  }
};

Object.extend(Element.Methods, {
  getElementsBySelector: Element.Methods.select,

  childElements: Element.Methods.immediateDescendants
});

Element._attributeTranslations = {
  write: {
    names: {
      className: 'class',
      htmlFor:   'for'
    },
    values: { }
  }
};

if (Prototype.Browser.Opera) {
  Element.Methods.getStyle = Element.Methods.getStyle.wrap(
    function(proceed, element, style) {
      switch (style) {
        case 'height': case 'width':
          if (!Element.visible(element)) return null;

          var dim = parseInt(proceed(element, style), 10);

          if (dim !== element['offset' + style.capitalize()])
            return dim + 'px';

          var properties;
          if (style === 'height') {
            properties = ['border-top-width', 'padding-top',
             'padding-bottom', 'border-bottom-width'];
          }
          else {
            properties = ['border-left-width', 'padding-left',
             'padding-right', 'border-right-width'];
          }
          return properties.inject(dim, function(memo, property) {
            var val = proceed(element, property);
            return val === null ? memo : memo - parseInt(val, 10);
          }) + 'px';
        default: return proceed(element, style);
      }
    }
  );

  Element.Methods.readAttribute = Element.Methods.readAttribute.wrap(
    function(proceed, element, attribute) {
      if (attribute === 'title') return element.title;
      return proceed(element, attribute);
    }
  );
}

else if (Prototype.Browser.IE) {
  Element.Methods.getStyle = function(element, style) {
    element = $(element);
    style = (style == 'float' || style == 'cssFloat') ? 'styleFloat' : style.camelize();
    var value = element.style[style];
    if (!value && element.currentStyle) value = element.currentStyle[style];

    if (style == 'opacity') {
      if (value = (element.getStyle('filter') || '').match(/alpha\(opacity=(.*)\)/))
        if (value[1]) return parseFloat(value[1]) / 100;
      return 1.0;
    }

    if (value == 'auto') {
      if ((style == 'width' || style == 'height') && (element.getStyle('display') != 'none'))
        return element['offset' + style.capitalize()] + 'px';
      return null;
    }
    return value;
  };

  Element.Methods.setOpacity = function(element, value) {
    function stripAlpha(filter){
      return filter.replace(/alpha\([^\)]*\)/gi,'');
    }
    element = $(element);
    var currentStyle = element.currentStyle;
    if ((currentStyle && !currentStyle.hasLayout) ||
      (!currentStyle && element.style.zoom == 'normal'))
        element.style.zoom = 1;

    var filter = element.getStyle('filter'), style = element.style;
    if (value == 1 || value === '') {
      (filter = stripAlpha(filter)) ?
        style.filter = filter : style.removeAttribute('filter');
      return element;
    } else if (value < 0.00001) value = 0;
    style.filter = stripAlpha(filter) +
      'alpha(opacity=' + (value * 100) + ')';
    return element;
  };

  Element._attributeTranslations = (function(){

    var classProp = 'className',
        forProp = 'for',
        el = document.createElement('div');

    el.setAttribute(classProp, 'x');

    if (el.className !== 'x') {
      el.setAttribute('class', 'x');
      if (el.className === 'x') {
        classProp = 'class';
      }
    }
    el = null;

    el = document.createElement('label');
    el.setAttribute(forProp, 'x');
    if (el.htmlFor !== 'x') {
      el.setAttribute('htmlFor', 'x');
      if (el.htmlFor === 'x') {
        forProp = 'htmlFor';
      }
    }
    el = null;

    return {
      read: {
        names: {
          'class':      classProp,
          'className':  classProp,
          'for':        forProp,
          'htmlFor':    forProp
        },
        values: {
          _getAttr: function(element, attribute) {
            return element.getAttribute(attribute);
          },
          _getAttr2: function(element, attribute) {
            return element.getAttribute(attribute, 2);
          },
          _getAttrNode: function(element, attribute) {
            var node = element.getAttributeNode(attribute);
            return node ? node.value : "";
          },
          _getEv: (function(){

            var el = document.createElement('div'), f;
            el.onclick = Prototype.emptyFunction;
            var value = el.getAttribute('onclick');

            if (String(value).indexOf('{') > -1) {
              f = function(element, attribute) {
                attribute = element.getAttribute(attribute);
                if (!attribute) return null;
                attribute = attribute.toString();
                attribute = attribute.split('{')[1];
                attribute = attribute.split('}')[0];
                return attribute.strip();
              };
            }
            else if (value === '') {
              f = function(element, attribute) {
                attribute = element.getAttribute(attribute);
                if (!attribute) return null;
                return attribute.strip();
              };
            }
            el = null;
            return f;
          })(),
          _flag: function(element, attribute) {
            return $(element).hasAttribute(attribute) ? attribute : null;
          },
          style: function(element) {
            return element.style.cssText.toLowerCase();
          },
          title: function(element) {
            return element.title;
          }
        }
      }
    }
  })();

  Element._attributeTranslations.write = {
    names: Object.extend({
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing'
    }, Element._attributeTranslations.read.names),
    values: {
      checked: function(element, value) {
        element.checked = !!value;
      },

      style: function(element, value) {
        element.style.cssText = value ? value : '';
      }
    }
  };

  Element._attributeTranslations.has = {};

  $w('colSpan rowSpan vAlign dateTime accessKey tabIndex ' +
      'encType maxLength readOnly longDesc frameBorder').each(function(attr) {
    Element._attributeTranslations.write.names[attr.toLowerCase()] = attr;
    Element._attributeTranslations.has[attr.toLowerCase()] = attr;
  });

  (function(v) {
    Object.extend(v, {
      href:        v._getAttr2,
      src:         v._getAttr2,
      type:        v._getAttr,
      action:      v._getAttrNode,
      disabled:    v._flag,
      checked:     v._flag,
      readonly:    v._flag,
      multiple:    v._flag,
      onload:      v._getEv,
      onunload:    v._getEv,
      onclick:     v._getEv,
      ondblclick:  v._getEv,
      onmousedown: v._getEv,
      onmouseup:   v._getEv,
      onmouseover: v._getEv,
      onmousemove: v._getEv,
      onmouseout:  v._getEv,
      onfocus:     v._getEv,
      onblur:      v._getEv,
      onkeypress:  v._getEv,
      onkeydown:   v._getEv,
      onkeyup:     v._getEv,
      onsubmit:    v._getEv,
      onreset:     v._getEv,
      onselect:    v._getEv,
      onchange:    v._getEv
    });
  })(Element._attributeTranslations.read.values);

  if (Prototype.BrowserFeatures.ElementExtensions) {
    (function() {
      function _descendants(element) {
        var nodes = element.getElementsByTagName('*'), results = [];
        for (var i = 0, node; node = nodes[i]; i++)
          if (node.tagName !== "!") // Filter out comment nodes.
            results.push(node);
        return results;
      }

      Element.Methods.down = function(element, expression, index) {
        element = $(element);
        if (arguments.length == 1) return element.firstDescendant();
        return Object.isNumber(expression) ? _descendants(element)[expression] :
          Element.select(element, expression)[index || 0];
      }
    })();
  }

}

else if (Prototype.Browser.Gecko && /rv:1\.8\.0/.test(navigator.userAgent)) {
  Element.Methods.setOpacity = function(element, value) {
    element = $(element);
    element.style.opacity = (value == 1) ? 0.999999 :
      (value === '') ? '' : (value < 0.00001) ? 0 : value;
    return element;
  };
}

else if (Prototype.Browser.WebKit) {
  Element.Methods.setOpacity = function(element, value) {
    element = $(element);
    element.style.opacity = (value == 1 || value === '') ? '' :
      (value < 0.00001) ? 0 : value;

    if (value == 1)
      if (element.tagName.toUpperCase() == 'IMG' && element.width) {
        element.width++; element.width--;
      } else try {
        var n = document.createTextNode(' ');
        element.appendChild(n);
        element.removeChild(n);
      } catch (e) { }

    return element;
  };
}

if ('outerHTML' in document.documentElement) {
  Element.Methods.replace = function(element, content) {
    element = $(element);

    if (content && content.toElement) content = content.toElement();
    if (Object.isElement(content)) {
      element.parentNode.replaceChild(content, element);
      return element;
    }

    content = Object.toHTML(content);
    var parent = element.parentNode, tagName = parent.tagName.toUpperCase();

    if (Element._insertionTranslations.tags[tagName]) {
      var nextSibling = element.next(),
          fragments = Element._getContentFromAnonymousElement(tagName, content.stripScripts());
      parent.removeChild(element);
      if (nextSibling)
        fragments.each(function(node) { parent.insertBefore(node, nextSibling) });
      else
        fragments.each(function(node) { parent.appendChild(node) });
    }
    else element.outerHTML = content.stripScripts();

    content.evalScripts.bind(content).defer();
    return element;
  };
}

Element._returnOffset = function(l, t) {
  var result = [l, t];
  result.left = l;
  result.top = t;
  return result;
};

Element._getContentFromAnonymousElement = function(tagName, html, force) {
  var div = new Element('div'),
      t = Element._insertionTranslations.tags[tagName];

  var workaround = false;
  if (t) workaround = true;
  else if (force) {
    workaround = true;
    t = ['', '', 0];
  }

  if (workaround) {
    div.innerHTML = '&nbsp;' + t[0] + html + t[1];
    div.removeChild(div.firstChild);
    for (var i = t[2]; i--; ) {
      div = div.firstChild;
    }
  }
  else {
    div.innerHTML = html;
  }
  return $A(div.childNodes);
};

Element._insertionTranslations = {
  before: function(element, node) {
    element.parentNode.insertBefore(node, element);
  },
  top: function(element, node) {
    element.insertBefore(node, element.firstChild);
  },
  bottom: function(element, node) {
    element.appendChild(node);
  },
  after: function(element, node) {
    element.parentNode.insertBefore(node, element.nextSibling);
  },
  tags: {
    TABLE:  ['<table>',                '</table>',                   1],
    TBODY:  ['<table><tbody>',         '</tbody></table>',           2],
    TR:     ['<table><tbody><tr>',     '</tr></tbody></table>',      3],
    TD:     ['<table><tbody><tr><td>', '</td></tr></tbody></table>', 4],
    SELECT: ['<select>',               '</select>',                  1]
  }
};

(function() {
  var tags = Element._insertionTranslations.tags;
  Object.extend(tags, {
    THEAD: tags.TBODY,
    TFOOT: tags.TBODY,
    TH:    tags.TD
  });
})();

Element.Methods.Simulated = {
  hasAttribute: function(element, attribute) {
    attribute = Element._attributeTranslations.has[attribute] || attribute;
    var node = $(element).getAttributeNode(attribute);
    return !!(node && node.specified);
  }
};

Element.Methods.ByTag = { };

Object.extend(Element, Element.Methods);

(function(div) {

  if (!Prototype.BrowserFeatures.ElementExtensions && div['__proto__']) {
    window.HTMLElement = { };
    window.HTMLElement.prototype = div['__proto__'];
    Prototype.BrowserFeatures.ElementExtensions = true;
  }

  div = null;

})(document.createElement('div'));

Element.extend = (function() {

  function checkDeficiency(tagName) {
    if (typeof window.Element != 'undefined') {
      var proto = window.Element.prototype;
      if (proto) {
        var id = '_' + (Math.random()+'').slice(2),
            el = document.createElement(tagName);
        proto[id] = 'x';
        var isBuggy = (el[id] !== 'x');
        delete proto[id];
        el = null;
        return isBuggy;
      }
    }
    return false;
  }

  function extendElementWith(element, methods) {
    for (var property in methods) {
      var value = methods[property];
      if (Object.isFunction(value) && !(property in element))
        element[property] = value.methodize();
    }
  }

  var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY = checkDeficiency('object');

  if (Prototype.BrowserFeatures.SpecificElementExtensions) {
    if (HTMLOBJECTELEMENT_PROTOTYPE_BUGGY) {
      return function(element) {
        if (element && typeof element._extendedByPrototype == 'undefined') {
          var t = element.tagName;
          if (t && (/^(?:object|applet|embed)$/i.test(t))) {
            extendElementWith(element, Element.Methods);
            extendElementWith(element, Element.Methods.Simulated);
            extendElementWith(element, Element.Methods.ByTag[t.toUpperCase()]);
          }
        }
        return element;
      }
    }
    return Prototype.K;
  }

  var Methods = { }, ByTag = Element.Methods.ByTag;

  var extend = Object.extend(function(element) {
    if (!element || typeof element._extendedByPrototype != 'undefined' ||
        element.nodeType != 1 || element == window) return element;

    var methods = Object.clone(Methods),
        tagName = element.tagName.toUpperCase();

    if (ByTag[tagName]) Object.extend(methods, ByTag[tagName]);

    extendElementWith(element, methods);

    element._extendedByPrototype = Prototype.emptyFunction;
    return element;

  }, {
    refresh: function() {
      if (!Prototype.BrowserFeatures.ElementExtensions) {
        Object.extend(Methods, Element.Methods);
        Object.extend(Methods, Element.Methods.Simulated);
      }
    }
  });

  extend.refresh();
  return extend;
})();

if (document.documentElement.hasAttribute) {
  Element.hasAttribute = function(element, attribute) {
    return element.hasAttribute(attribute);
  };
}
else {
  Element.hasAttribute = Element.Methods.Simulated.hasAttribute;
}

Element.addMethods = function(methods) {
  var F = Prototype.BrowserFeatures, T = Element.Methods.ByTag;

  if (!methods) {
    Object.extend(Form, Form.Methods);
    Object.extend(Form.Element, Form.Element.Methods);
    Object.extend(Element.Methods.ByTag, {
      "FORM":     Object.clone(Form.Methods),
      "INPUT":    Object.clone(Form.Element.Methods),
      "SELECT":   Object.clone(Form.Element.Methods),
      "TEXTAREA": Object.clone(Form.Element.Methods),
      "BUTTON":   Object.clone(Form.Element.Methods)
    });
  }

  if (arguments.length == 2) {
    var tagName = methods;
    methods = arguments[1];
  }

  if (!tagName) Object.extend(Element.Methods, methods || { });
  else {
    if (Object.isArray(tagName)) tagName.each(extend);
    else extend(tagName);
  }

  function extend(tagName) {
    tagName = tagName.toUpperCase();
    if (!Element.Methods.ByTag[tagName])
      Element.Methods.ByTag[tagName] = { };
    Object.extend(Element.Methods.ByTag[tagName], methods);
  }

  function copy(methods, destination, onlyIfAbsent) {
    onlyIfAbsent = onlyIfAbsent || false;
    for (var property in methods) {
      var value = methods[property];
      if (!Object.isFunction(value)) continue;
      if (!onlyIfAbsent || !(property in destination))
        destination[property] = value.methodize();
    }
  }

  function findDOMClass(tagName) {
    var klass;
    var trans = {
      "OPTGROUP": "OptGroup", "TEXTAREA": "TextArea", "P": "Paragraph",
      "FIELDSET": "FieldSet", "UL": "UList", "OL": "OList", "DL": "DList",
      "DIR": "Directory", "H1": "Heading", "H2": "Heading", "H3": "Heading",
      "H4": "Heading", "H5": "Heading", "H6": "Heading", "Q": "Quote",
      "INS": "Mod", "DEL": "Mod", "A": "Anchor", "IMG": "Image", "CAPTION":
      "TableCaption", "COL": "TableCol", "COLGROUP": "TableCol", "THEAD":
      "TableSection", "TFOOT": "TableSection", "TBODY": "TableSection", "TR":
      "TableRow", "TH": "TableCell", "TD": "TableCell", "FRAMESET":
      "FrameSet", "IFRAME": "IFrame"
    };
    if (trans[tagName]) klass = 'HTML' + trans[tagName] + 'Element';
    if (window[klass]) return window[klass];
    klass = 'HTML' + tagName + 'Element';
    if (window[klass]) return window[klass];
    klass = 'HTML' + tagName.capitalize() + 'Element';
    if (window[klass]) return window[klass];

    var element = document.createElement(tagName),
        proto = element['__proto__'] || element.constructor.prototype;

    element = null;
    return proto;
  }

  var elementPrototype = window.HTMLElement ? HTMLElement.prototype :
   Element.prototype;

  if (F.ElementExtensions) {
    copy(Element.Methods, elementPrototype);
    copy(Element.Methods.Simulated, elementPrototype, true);
  }

  if (F.SpecificElementExtensions) {
    for (var tag in Element.Methods.ByTag) {
      var klass = findDOMClass(tag);
      if (Object.isUndefined(klass)) continue;
      copy(T[tag], klass.prototype);
    }
  }

  Object.extend(Element, Element.Methods);
  delete Element.ByTag;

  if (Element.extend.refresh) Element.extend.refresh();
  Element.cache = { };
};


document.viewport = {

  getDimensions: function() {
    return { width: this.getWidth(), height: this.getHeight() };
  },

  getScrollOffsets: function() {
    return Element._returnOffset(
      window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      window.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop);
  }
};

(function(viewport) {
  var B = Prototype.Browser, doc = document, element, property = {};

  function getRootElement() {
    if (B.WebKit && !doc.evaluate)
      return document;

    if (B.Opera && window.parseFloat(window.opera.version()) < 9.5)
      return document.body;

    return document.documentElement;
  }

  function define(D) {
    if (!element) element = getRootElement();

    property[D] = 'client' + D;

    viewport['get' + D] = function() { return element[property[D]] };
    return viewport['get' + D]();
  }

  viewport.getWidth  = define.curry('Width');

  viewport.getHeight = define.curry('Height');
})(document.viewport);


Element.Storage = {
  UID: 1
};

Element.addMethods({
  getStorage: function(element) {
    if (!(element = $(element))) return;

    var uid;
    if (element === window) {
      uid = 0;
    } else {
      if (typeof element._prototypeUID === "undefined")
        element._prototypeUID = Element.Storage.UID++;
      uid = element._prototypeUID;
    }

    if (!Element.Storage[uid])
      Element.Storage[uid] = $H();

    return Element.Storage[uid];
  },

  store: function(element, key, value) {
    if (!(element = $(element))) return;

    if (arguments.length === 2) {
      Element.getStorage(element).update(key);
    } else {
      Element.getStorage(element).set(key, value);
    }

    return element;
  },

  retrieve: function(element, key, defaultValue) {
    if (!(element = $(element))) return;
    var hash = Element.getStorage(element), value = hash.get(key);

    if (Object.isUndefined(value)) {
      hash.set(key, defaultValue);
      value = defaultValue;
    }

    return value;
  },

  clone: function(element, deep) {
    if (!(element = $(element))) return;
    var clone = element.cloneNode(deep);
    clone._prototypeUID = void 0;
    if (deep) {
      var descendants = Element.select(clone, '*'),
          i = descendants.length;
      while (i--) {
        descendants[i]._prototypeUID = void 0;
      }
    }
    return Element.extend(clone);
  },

  purge: function(element) {
    if (!(element = $(element))) return;
    var purgeElement = Element._purgeElement;

    purgeElement(element);

    var descendants = element.getElementsByTagName('*'),
     i = descendants.length;

    while (i--) purgeElement(descendants[i]);

    return null;
  }
});

(function() {

  function toDecimal(pctString) {
    var match = pctString.match(/^(\d+)%?$/i);
    if (!match) return null;
    return (Number(match[1]) / 100);
  }

  function getPixelValue(value, property, context) {
    var element = null;
    if (Object.isElement(value)) {
      element = value;
      value = element.getStyle(property);
    }

    if (value === null) {
      return null;
    }

    if ((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(value)) {
      return window.parseFloat(value);
    }

    var isPercentage = value.include('%'), isViewport = (context === document.viewport);

    if (/\d/.test(value) && element && element.runtimeStyle && !(isPercentage && isViewport)) {
      var style = element.style.left, rStyle = element.runtimeStyle.left;
      element.runtimeStyle.left = element.currentStyle.left;
      element.style.left = value || 0;
      value = element.style.pixelLeft;
      element.style.left = style;
      element.runtimeStyle.left = rStyle;

      return value;
    }

    if (element && isPercentage) {
      context = context || element.parentNode;
      var decimal = toDecimal(value);
      var whole = null;
      var position = element.getStyle('position');

      var isHorizontal = property.include('left') || property.include('right') ||
       property.include('width');

      var isVertical =  property.include('top') || property.include('bottom') ||
        property.include('height');

      if (context === document.viewport) {
        if (isHorizontal) {
          whole = document.viewport.getWidth();
        } else if (isVertical) {
          whole = document.viewport.getHeight();
        }
      } else {
        if (isHorizontal) {
          whole = $(context).measure('width');
        } else if (isVertical) {
          whole = $(context).measure('height');
        }
      }

      return (whole === null) ? 0 : whole * decimal;
    }

    return 0;
  }

  function toCSSPixels(number) {
    if (Object.isString(number) && number.endsWith('px')) {
      return number;
    }
    return number + 'px';
  }

  function isDisplayed(element) {
    var originalElement = element;
    while (element && element.parentNode) {
      var display = element.getStyle('display');
      if (display === 'none') {
        return false;
      }
      element = $(element.parentNode);
    }
    return true;
  }

  var hasLayout = Prototype.K;
  if ('currentStyle' in document.documentElement) {
    hasLayout = function(element) {
      if (!element.currentStyle.hasLayout) {
        element.style.zoom = 1;
      }
      return element;
    };
  }

  function cssNameFor(key) {
    if (key.include('border')) key = key + '-width';
    return key.camelize();
  }

  Element.Layout = Class.create(Hash, {
    initialize: function($super, element, preCompute) {
      $super();
      this.element = $(element);

      Element.Layout.PROPERTIES.each( function(property) {
        this._set(property, null);
      }, this);

      if (preCompute) {
        this._preComputing = true;
        this._begin();
        Element.Layout.PROPERTIES.each( this._compute, this );
        this._end();
        this._preComputing = false;
      }
    },

    _set: function(property, value) {
      return Hash.prototype.set.call(this, property, value);
    },

    set: function(property, value) {
      throw "Properties of Element.Layout are read-only.";
    },

    get: function($super, property) {
      var value = $super(property);
      return value === null ? this._compute(property) : value;
    },

    _begin: function() {
      if (this._prepared) return;

      var element = this.element;
      if (isDisplayed(element)) {
        this._prepared = true;
        return;
      }

      var originalStyles = {
        position:   element.style.position   || '',
        width:      element.style.width      || '',
        visibility: element.style.visibility || '',
        display:    element.style.display    || ''
      };

      element.store('prototype_original_styles', originalStyles);

      var position = element.getStyle('position'),
       width = element.getStyle('width');

      if (width === "0px" || width === null) {
        element.style.display = 'block';
        width = element.getStyle('width');
      }

      var context = (position === 'fixed') ? document.viewport :
       element.parentNode;

      element.setStyle({
        position:   'absolute',
        visibility: 'hidden',
        display:    'block'
      });

      var positionedWidth = element.getStyle('width');

      var newWidth;
      if (width && (positionedWidth === width)) {
        newWidth = getPixelValue(element, 'width', context);
      } else if (position === 'absolute' || position === 'fixed') {
        newWidth = getPixelValue(element, 'width', context);
      } else {
        var parent = element.parentNode, pLayout = $(parent).getLayout();

        newWidth = pLayout.get('width') -
         this.get('margin-left') -
         this.get('border-left') -
         this.get('padding-left') -
         this.get('padding-right') -
         this.get('border-right') -
         this.get('margin-right');
      }

      element.setStyle({ width: newWidth + 'px' });

      this._prepared = true;
    },

    _end: function() {
      var element = this.element;
      var originalStyles = element.retrieve('prototype_original_styles');
      element.store('prototype_original_styles', null);
      element.setStyle(originalStyles);
      this._prepared = false;
    },

    _compute: function(property) {
      var COMPUTATIONS = Element.Layout.COMPUTATIONS;
      if (!(property in COMPUTATIONS)) {
        throw "Property not found.";
      }

      return this._set(property, COMPUTATIONS[property].call(this, this.element));
    },

    toObject: function() {
      var args = $A(arguments);
      var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
       args.join(' ').split(' ');
      var obj = {};
      keys.each( function(key) {
        if (!Element.Layout.PROPERTIES.include(key)) return;
        var value = this.get(key);
        if (value != null) obj[key] = value;
      }, this);
      return obj;
    },

    toHash: function() {
      var obj = this.toObject.apply(this, arguments);
      return new Hash(obj);
    },

    toCSS: function() {
      var args = $A(arguments);
      var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
       args.join(' ').split(' ');
      var css = {};

      keys.each( function(key) {
        if (!Element.Layout.PROPERTIES.include(key)) return;
        if (Element.Layout.COMPOSITE_PROPERTIES.include(key)) return;

        var value = this.get(key);
        if (value != null) css[cssNameFor(key)] = value + 'px';
      }, this);
      return css;
    },

    inspect: function() {
      return "#<Element.Layout>";
    }
  });

  Object.extend(Element.Layout, {
    PROPERTIES: $w('height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height'),

    COMPOSITE_PROPERTIES: $w('padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height'),

    COMPUTATIONS: {
      'height': function(element) {
        if (!this._preComputing) this._begin();

        var bHeight = this.get('border-box-height');
        if (bHeight <= 0) {
          if (!this._preComputing) this._end();
          return 0;
        }

        var bTop = this.get('border-top'),
         bBottom = this.get('border-bottom');

        var pTop = this.get('padding-top'),
         pBottom = this.get('padding-bottom');

        if (!this._preComputing) this._end();

        return bHeight - bTop - bBottom - pTop - pBottom;
      },

      'width': function(element) {
        if (!this._preComputing) this._begin();

        var bWidth = this.get('border-box-width');
        if (bWidth <= 0) {
          if (!this._preComputing) this._end();
          return 0;
        }

        var bLeft = this.get('border-left'),
         bRight = this.get('border-right');

        var pLeft = this.get('padding-left'),
         pRight = this.get('padding-right');

        if (!this._preComputing) this._end();

        return bWidth - bLeft - bRight - pLeft - pRight;
      },

      'padding-box-height': function(element) {
        var height = this.get('height'),
         pTop = this.get('padding-top'),
         pBottom = this.get('padding-bottom');

        return height + pTop + pBottom;
      },

      'padding-box-width': function(element) {
        var width = this.get('width'),
         pLeft = this.get('padding-left'),
         pRight = this.get('padding-right');

        return width + pLeft + pRight;
      },

      'border-box-height': function(element) {
        if (!this._preComputing) this._begin();
        var height = element.offsetHeight;
        if (!this._preComputing) this._end();
        return height;
      },

      'border-box-width': function(element) {
        if (!this._preComputing) this._begin();
        var width = element.offsetWidth;
        if (!this._preComputing) this._end();
        return width;
      },

      'margin-box-height': function(element) {
        var bHeight = this.get('border-box-height'),
         mTop = this.get('margin-top'),
         mBottom = this.get('margin-bottom');

        if (bHeight <= 0) return 0;

        return bHeight + mTop + mBottom;
      },

      'margin-box-width': function(element) {
        var bWidth = this.get('border-box-width'),
         mLeft = this.get('margin-left'),
         mRight = this.get('margin-right');

        if (bWidth <= 0) return 0;

        return bWidth + mLeft + mRight;
      },

      'top': function(element) {
        var offset = element.positionedOffset();
        return offset.top;
      },

      'bottom': function(element) {
        var offset = element.positionedOffset(),
         parent = element.getOffsetParent(),
         pHeight = parent.measure('height');

        var mHeight = this.get('border-box-height');

        return pHeight - mHeight - offset.top;
      },

      'left': function(element) {
        var offset = element.positionedOffset();
        return offset.left;
      },

      'right': function(element) {
        var offset = element.positionedOffset(),
         parent = element.getOffsetParent(),
         pWidth = parent.measure('width');

        var mWidth = this.get('border-box-width');

        return pWidth - mWidth - offset.left;
      },

      'padding-top': function(element) {
        return getPixelValue(element, 'paddingTop');
      },

      'padding-bottom': function(element) {
        return getPixelValue(element, 'paddingBottom');
      },

      'padding-left': function(element) {
        return getPixelValue(element, 'paddingLeft');
      },

      'padding-right': function(element) {
        return getPixelValue(element, 'paddingRight');
      },

      'border-top': function(element) {
        return getPixelValue(element, 'borderTopWidth');
      },

      'border-bottom': function(element) {
        return getPixelValue(element, 'borderBottomWidth');
      },

      'border-left': function(element) {
        return getPixelValue(element, 'borderLeftWidth');
      },

      'border-right': function(element) {
        return getPixelValue(element, 'borderRightWidth');
      },

      'margin-top': function(element) {
        return getPixelValue(element, 'marginTop');
      },

      'margin-bottom': function(element) {
        return getPixelValue(element, 'marginBottom');
      },

      'margin-left': function(element) {
        return getPixelValue(element, 'marginLeft');
      },

      'margin-right': function(element) {
        return getPixelValue(element, 'marginRight');
      }
    }
  });

  if ('getBoundingClientRect' in document.documentElement) {
    Object.extend(Element.Layout.COMPUTATIONS, {
      'right': function(element) {
        var parent = hasLayout(element.getOffsetParent());
        var rect = element.getBoundingClientRect(),
         pRect = parent.getBoundingClientRect();

        return (pRect.right - rect.right).round();
      },

      'bottom': function(element) {
        var parent = hasLayout(element.getOffsetParent());
        var rect = element.getBoundingClientRect(),
         pRect = parent.getBoundingClientRect();

        return (pRect.bottom - rect.bottom).round();
      }
    });
  }

  Element.Offset = Class.create({
    initialize: function(left, top) {
      this.left = left.round();
      this.top  = top.round();

      this[0] = this.left;
      this[1] = this.top;
    },

    relativeTo: function(offset) {
      return new Element.Offset(
        this.left - offset.left,
        this.top  - offset.top
      );
    },

    inspect: function() {
      return "#<Element.Offset left: #{left} top: #{top}>".interpolate(this);
    },

    toString: function() {
      return "[#{left}, #{top}]".interpolate(this);
    },

    toArray: function() {
      return [this.left, this.top];
    }
  });

  function getLayout(element, preCompute) {
    return new Element.Layout(element, preCompute);
  }

  function measure(element, property) {
    return $(element).getLayout().get(property);
  }

  function getDimensions(element) {
    element = $(element);
    var display = Element.getStyle(element, 'display');

    if (display && display !== 'none') {
      return { width: element.offsetWidth, height: element.offsetHeight };
    }

    var style = element.style;
    var originalStyles = {
      visibility: style.visibility,
      position:   style.position,
      display:    style.display
    };

    var newStyles = {
      visibility: 'hidden',
      display:    'block'
    };

    if (originalStyles.position !== 'fixed')
      newStyles.position = 'absolute';

    Element.setStyle(element, newStyles);

    var dimensions = {
      width:  element.offsetWidth,
      height: element.offsetHeight
    };

    Element.setStyle(element, originalStyles);

    return dimensions;
  }

  function getOffsetParent(element) {
    element = $(element);

    if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
      return $(document.body);

    var isInline = (Element.getStyle(element, 'display') === 'inline');
    if (!isInline && element.offsetParent) return $(element.offsetParent);

    while ((element = element.parentNode) && element !== document.body) {
      if (Element.getStyle(element, 'position') !== 'static') {
        return isHtml(element) ? $(document.body) : $(element);
      }
    }

    return $(document.body);
  }


  function cumulativeOffset(element) {
    element = $(element);
    var valueT = 0, valueL = 0;
    if (element.parentNode) {
      do {
        valueT += element.offsetTop  || 0;
        valueL += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);
    }
    return new Element.Offset(valueL, valueT);
  }

  function positionedOffset(element) {
    element = $(element);

    var layout = element.getLayout();

    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        if (isBody(element)) break;
        var p = Element.getStyle(element, 'position');
        if (p !== 'static') break;
      }
    } while (element);

    valueL -= layout.get('margin-top');
    valueT -= layout.get('margin-left');

    return new Element.Offset(valueL, valueT);
  }

  function cumulativeScrollOffset(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.scrollTop  || 0;
      valueL += element.scrollLeft || 0;
      element = element.parentNode;
    } while (element);
    return new Element.Offset(valueL, valueT);
  }

  function viewportOffset(forElement) {
    element = $(element);
    var valueT = 0, valueL = 0, docBody = document.body;

    var element = forElement;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      if (element.offsetParent == docBody &&
        Element.getStyle(element, 'position') == 'absolute') break;
    } while (element = element.offsetParent);

    element = forElement;
    do {
      if (element != docBody) {
        valueT -= element.scrollTop  || 0;
        valueL -= element.scrollLeft || 0;
      }
    } while (element = element.parentNode);
    return new Element.Offset(valueL, valueT);
  }

  function absolutize(element) {
    element = $(element);

    if (Element.getStyle(element, 'position') === 'absolute') {
      return element;
    }

    var offsetParent = getOffsetParent(element);
    var eOffset = element.viewportOffset(),
     pOffset = offsetParent.viewportOffset();

    var offset = eOffset.relativeTo(pOffset);
    var layout = element.getLayout();

    element.store('prototype_absolutize_original_styles', {
      left:   element.getStyle('left'),
      top:    element.getStyle('top'),
      width:  element.getStyle('width'),
      height: element.getStyle('height')
    });

    element.setStyle({
      position: 'absolute',
      top:    offset.top + 'px',
      left:   offset.left + 'px',
      width:  layout.get('width') + 'px',
      height: layout.get('height') + 'px'
    });

    return element;
  }

  function relativize(element) {
    element = $(element);
    if (Element.getStyle(element, 'position') === 'relative') {
      return element;
    }

    var originalStyles =
     element.retrieve('prototype_absolutize_original_styles');

    if (originalStyles) element.setStyle(originalStyles);
    return element;
  }

  if (Prototype.Browser.IE) {
    getOffsetParent = getOffsetParent.wrap(
      function(proceed, element) {
        element = $(element);

        if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
          return $(document.body);

        var position = element.getStyle('position');
        if (position !== 'static') return proceed(element);

        element.setStyle({ position: 'relative' });
        var value = proceed(element);
        element.setStyle({ position: position });
        return value;
      }
    );

    positionedOffset = positionedOffset.wrap(function(proceed, element) {
      element = $(element);
      if (!element.parentNode) return new Element.Offset(0, 0);
      var position = element.getStyle('position');
      if (position !== 'static') return proceed(element);

      var offsetParent = element.getOffsetParent();
      if (offsetParent && offsetParent.getStyle('position') === 'fixed')
        hasLayout(offsetParent);

      element.setStyle({ position: 'relative' });
      var value = proceed(element);
      element.setStyle({ position: position });
      return value;
    });
  } else if (Prototype.Browser.Webkit) {
    cumulativeOffset = function(element) {
      element = $(element);
      var valueT = 0, valueL = 0;
      do {
        valueT += element.offsetTop  || 0;
        valueL += element.offsetLeft || 0;
        if (element.offsetParent == document.body)
          if (Element.getStyle(element, 'position') == 'absolute') break;

        element = element.offsetParent;
      } while (element);

      return new Element.Offset(valueL, valueT);
    };
  }


  Element.addMethods({
    getLayout:              getLayout,
    measure:                measure,
    getDimensions:          getDimensions,
    getOffsetParent:        getOffsetParent,
    cumulativeOffset:       cumulativeOffset,
    positionedOffset:       positionedOffset,
    cumulativeScrollOffset: cumulativeScrollOffset,
    viewportOffset:         viewportOffset,
    absolutize:             absolutize,
    relativize:             relativize
  });

  function isBody(element) {
    return element.nodeName.toUpperCase() === 'BODY';
  }

  function isHtml(element) {
    return element.nodeName.toUpperCase() === 'HTML';
  }

  function isDocument(element) {
    return element.nodeType === Node.DOCUMENT_NODE;
  }

  function isDetached(element) {
    return element !== document.body &&
     !Element.descendantOf(element, document.body);
  }

  if ('getBoundingClientRect' in document.documentElement) {
    Element.addMethods({
      viewportOffset: function(element) {
        element = $(element);
        if (isDetached(element)) return new Element.Offset(0, 0);

        var rect = element.getBoundingClientRect(),
         docEl = document.documentElement;
        return new Element.Offset(rect.left - docEl.clientLeft,
         rect.top - docEl.clientTop);
      }
    });
  }
})();
window.$$ = function() {
  var expression = $A(arguments).join(', ');
  return Prototype.Selector.select(expression, document);
};

Prototype.Selector = (function() {

  function select() {
    throw new Error('Method "Prototype.Selector.select" must be defined.');
  }

  function match() {
    throw new Error('Method "Prototype.Selector.match" must be defined.');
  }

  function find(elements, expression, index) {
    index = index || 0;
    var match = Prototype.Selector.match, length = elements.length, matchIndex = 0, i;

    for (i = 0; i < length; i++) {
      if (match(elements[i], expression) && index == matchIndex++) {
        return Element.extend(elements[i]);
      }
    }
  }

  function extendElements(elements) {
    for (var i = 0, length = elements.length; i < length; i++) {
      Element.extend(elements[i]);
    }
    return elements;
  }


  var K = Prototype.K;

  return {
    select: select,
    match: match,
    find: find,
    extendElements: (Element.extend === K) ? K : extendElements,
    extendElement: Element.extend
  };
})();
Prototype._original_property = window.Sizzle;
/*!
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true;

[0, 0].sort(function(){
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	var origContext = context = context || document;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var parts = [], m, set, checkSet, check, mode, extra, prune = true, contextXML = isXML(context),
		soFar = selector;

	while ( (chunker.exec(""), m = chunker.exec(soFar)) !== null ) {
		soFar = m[3];

		parts.push( m[1] );

		if ( m[2] ) {
			extra = m[3];
			break;
		}
	}

	if ( parts.length > 1 && origPOS.exec( selector ) ) {
		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );
		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] )
					selector += parts.shift();

				set = posProcess( selector, set );
			}
		}
	} else {
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {
			var ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ? Sizzle.filter( ret.expr, ret.set )[0] : ret.set[0];
		}

		if ( context ) {
			var ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );
			set = ret.expr ? Sizzle.filter( ret.expr, ret.set ) : ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray(set);
			} else {
				prune = false;
			}

			while ( parts.length ) {
				var cur = parts.pop(), pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}
		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		throw "Syntax error, unrecognized expression: " + (cur || selector);
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context && context.nodeType === 1 ) {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}
		} else {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}
	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function(results){
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort(sortOrder);

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[i-1] ) {
					results.splice(i--, 1);
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function(expr, set){
	return Sizzle(expr, null, null, set);
};

Sizzle.find = function(expr, context, isXML){
	var set, match;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var type = Expr.order[i], match;

		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice(1,1);

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace(/\\/g, "");
				set = Expr.find[ type ]( match, context, isXML );
				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = context.getElementsByTagName("*");
	}

	return {set: set, expr: expr};
};

Sizzle.filter = function(expr, set, inplace, not){
	var old = expr, result = [], curLoop = set, match, anyFound,
		isXMLFilter = set && set[0] && isXML(set[0]);

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.match[ type ].exec( expr )) != null ) {
				var filter = Expr.filter[ type ], found, item;
				anyFound = false;

				if ( curLoop == result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;
					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;
								} else {
									curLoop[i] = false;
								}
							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		if ( expr == old ) {
			if ( anyFound == null ) {
				throw "Syntax error, unrecognized expression: " + expr;
			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
	},
	leftMatch: {},
	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},
	attrHandle: {
		href: function(elem){
			return elem.getAttribute("href");
		}
	},
	relative: {
		"+": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag && !isXML ) {
				part = part.toUpperCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string";

			if ( isPartStr && !/\W/.test(part) ) {
				part = isXML ? part : part.toUpperCase();

				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName === part ? parent : false;
					}
				}
			} else {
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},
		"": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( !/\W/.test(part) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( typeof part === "string" && !/\W/.test(part) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
		}
	},
	find: {
		ID: function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? [m] : [];
			}
		},
		NAME: function(match, context, isXML){
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [], results = context.getElementsByName(match[1]);

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},
		TAG: function(match, context){
			return context.getElementsByTagName(match[1]);
		}
	},
	preFilter: {
		CLASS: function(match, curLoop, inplace, result, not, isXML){
			match = " " + match[1].replace(/\\/g, "") + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").indexOf(match) >= 0) ) {
						if ( !inplace )
							result.push( elem );
					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},
		ID: function(match){
			return match[1].replace(/\\/g, "");
		},
		TAG: function(match, curLoop){
			for ( var i = 0; curLoop[i] === false; i++ ){}
			return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
		},
		CHILD: function(match){
			if ( match[1] == "nth" ) {
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}

			match[0] = done++;

			return match;
		},
		ATTR: function(match, curLoop, inplace, result, not, isXML){
			var name = match[1].replace(/\\/g, "");

			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},
		PSEUDO: function(match, curLoop, inplace, result, not){
			if ( match[1] === "not" ) {
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);
				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
					if ( !inplace ) {
						result.push.apply( result, ret );
					}
					return false;
				}
			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}

			return match;
		},
		POS: function(match){
			match.unshift( true );
			return match;
		}
	},
	filters: {
		enabled: function(elem){
			return elem.disabled === false && elem.type !== "hidden";
		},
		disabled: function(elem){
			return elem.disabled === true;
		},
		checked: function(elem){
			return elem.checked === true;
		},
		selected: function(elem){
			elem.parentNode.selectedIndex;
			return elem.selected === true;
		},
		parent: function(elem){
			return !!elem.firstChild;
		},
		empty: function(elem){
			return !elem.firstChild;
		},
		has: function(elem, i, match){
			return !!Sizzle( match[3], elem ).length;
		},
		header: function(elem){
			return /h\d/i.test( elem.nodeName );
		},
		text: function(elem){
			return "text" === elem.type;
		},
		radio: function(elem){
			return "radio" === elem.type;
		},
		checkbox: function(elem){
			return "checkbox" === elem.type;
		},
		file: function(elem){
			return "file" === elem.type;
		},
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			return "submit" === elem.type;
		},
		image: function(elem){
			return "image" === elem.type;
		},
		reset: function(elem){
			return "reset" === elem.type;
		},
		button: function(elem){
			return "button" === elem.type || elem.nodeName.toUpperCase() === "BUTTON";
		},
		input: function(elem){
			return /input|select|textarea|button/i.test(elem.nodeName);
		}
	},
	setFilters: {
		first: function(elem, i){
			return i === 0;
		},
		last: function(elem, i, match, array){
			return i === array.length - 1;
		},
		even: function(elem, i){
			return i % 2 === 0;
		},
		odd: function(elem, i){
			return i % 2 === 1;
		},
		lt: function(elem, i, match){
			return i < match[3] - 0;
		},
		gt: function(elem, i, match){
			return i > match[3] - 0;
		},
		nth: function(elem, i, match){
			return match[3] - 0 == i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 == i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];

				for ( var i = 0, l = not.length; i < l; i++ ) {
					if ( not[i] === elem ) {
						return false;
					}
				}

				return true;
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while ( (node = node.previousSibling) )  {
						if ( node.nodeType === 1 ) return false;
					}
					if ( type == 'first') return true;
					node = elem;
				case 'last':
					while ( (node = node.nextSibling) )  {
						if ( node.nodeType === 1 ) return false;
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];

					if ( first == 1 && last == 0 ) {
						return true;
					}

					var doneName = match[0],
						parent = elem.parentNode;

					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}
						parent.sizcache = doneName;
					}

					var diff = elem.nodeIndex - last;
					if ( first == 0 ) {
						return diff == 0;
					} else {
						return ( diff % first == 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
		},
		CLASS: function(elem, match){
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},
		ATTR: function(elem, match){
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value != check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},
		POS: function(elem, match, i, array){
			var name = match[2], filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS;

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source );
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}

	return array;
};

try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 );

} catch(e){
	makeArray = function(array, results) {
		var ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );
		} else {
			if ( typeof array.length === "number" ) {
				for ( var i = 0, l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}
			} else {
				for ( var i = 0; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return 0;
		}

		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		if ( !a.sourceIndex || !b.sourceIndex ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return 0;
		}

		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		if ( !a.ownerDocument || !b.ownerDocument ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return 0;
		}

		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.setStart(a, 0);
		aRange.setEnd(a, 0);
		bRange.setStart(b, 0);
		bRange.setEnd(b, 0);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

(function(){
	var form = document.createElement("div"),
		id = "script" + (new Date).getTime();
	form.innerHTML = "<a name='" + id + "'/>";

	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );

	if ( !!document.getElementById( id ) ) {
		Expr.find.ID = function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
			}
		};

		Expr.filter.ID = function(elem, match){
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );
	root = form = null; // release memory in IE
})();

(function(){

	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function(match, context){
			var results = context.getElementsByTagName(match[1]);

			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	div.innerHTML = "<a href='#'></a>";
	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {
		Expr.attrHandle.href = function(elem){
			return elem.getAttribute("href", 2);
		};
	}

	div = null; // release memory in IE
})();

if ( document.querySelectorAll ) (function(){
	var oldSizzle = Sizzle, div = document.createElement("div");
	div.innerHTML = "<p class='TEST'></p>";

	if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
		return;
	}

	Sizzle = function(query, context, extra, seed){
		context = context || document;

		if ( !seed && context.nodeType === 9 && !isXML(context) ) {
			try {
				return makeArray( context.querySelectorAll(query), extra );
			} catch(e){}
		}

		return oldSizzle(query, context, extra, seed);
	};

	for ( var prop in oldSizzle ) {
		Sizzle[ prop ] = oldSizzle[ prop ];
	}

	div = null; // release memory in IE
})();

if ( document.getElementsByClassName && document.documentElement.getElementsByClassName ) (function(){
	var div = document.createElement("div");
	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	if ( div.getElementsByClassName("e").length === 0 )
		return;

	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 )
		return;

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	div = null; // release memory in IE
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ){
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ) {
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}
					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

var contains = document.compareDocumentPosition ?  function(a, b){
	return a.compareDocumentPosition(b) & 16;
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};

var isXML = function(elem){
	return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
		!!elem.ownerDocument && elem.ownerDocument.documentElement.nodeName !== "HTML";
};

var posProcess = function(selector, context){
	var tmpSet = [], later = "", match,
		root = context.nodeType ? [context] : context;

	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};


window.Sizzle = Sizzle;

})();

;(function(engine) {
  var extendElements = Prototype.Selector.extendElements;

  function select(selector, scope) {
    return extendElements(engine(selector, scope || document));
  }

  function match(element, selector) {
    return engine.matches(selector, [element]).length == 1;
  }

  Prototype.Selector.engine = engine;
  Prototype.Selector.select = select;
  Prototype.Selector.match = match;
})(Sizzle);

window.Sizzle = Prototype._original_property;
delete Prototype._original_property;

var Form = {
  reset: function(form) {
    form = $(form);
    form.reset();
    return form;
  },

  serializeElements: function(elements, options) {
    if (typeof options != 'object') options = { hash: !!options };
    else if (Object.isUndefined(options.hash)) options.hash = true;
    var key, value, submitted = false, submit = options.submit, accumulator, initial;

    if (options.hash) {
      initial = {};
      accumulator = function(result, key, value) {
        if (key in result) {
          if (!Object.isArray(result[key])) result[key] = [result[key]];
          result[key].push(value);
        } else result[key] = value;
        return result;
      };
    } else {
      initial = '';
      accumulator = function(result, key, value) {
        return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + encodeURIComponent(value);
      }
    }

    return elements.inject(initial, function(result, element) {
      if (!element.disabled && element.name) {
        key = element.name; value = $(element).getValue();
        if (value != null && element.type != 'file' && (element.type != 'submit' || (!submitted &&
            submit !== false && (!submit || key == submit) && (submitted = true)))) {
          result = accumulator(result, key, value);
        }
      }
      return result;
    });
  }
};

Form.Methods = {
  serialize: function(form, options) {
    return Form.serializeElements(Form.getElements(form), options);
  },

  getElements: function(form) {
    var elements = $(form).getElementsByTagName('*'),
        element,
        arr = [ ],
        serializers = Form.Element.Serializers;
    for (var i = 0; element = elements[i]; i++) {
      arr.push(element);
    }
    return arr.inject([], function(elements, child) {
      if (serializers[child.tagName.toLowerCase()])
        elements.push(Element.extend(child));
      return elements;
    })
  },

  getInputs: function(form, typeName, name) {
    form = $(form);
    var inputs = form.getElementsByTagName('input');

    if (!typeName && !name) return $A(inputs).map(Element.extend);

    for (var i = 0, matchingInputs = [], length = inputs.length; i < length; i++) {
      var input = inputs[i];
      if ((typeName && input.type != typeName) || (name && input.name != name))
        continue;
      matchingInputs.push(Element.extend(input));
    }

    return matchingInputs;
  },

  disable: function(form) {
    form = $(form);
    Form.getElements(form).invoke('disable');
    return form;
  },

  enable: function(form) {
    form = $(form);
    Form.getElements(form).invoke('enable');
    return form;
  },

  findFirstElement: function(form) {
    var elements = $(form).getElements().findAll(function(element) {
      return 'hidden' != element.type && !element.disabled;
    });
    var firstByIndex = elements.findAll(function(element) {
      return element.hasAttribute('tabIndex') && element.tabIndex >= 0;
    }).sortBy(function(element) { return element.tabIndex }).first();

    return firstByIndex ? firstByIndex : elements.find(function(element) {
      return /^(?:input|select|textarea)$/i.test(element.tagName);
    });
  },

  focusFirstElement: function(form) {
    form = $(form);
    var element = form.findFirstElement();
    if (element) element.activate();
    return form;
  },

  request: function(form, options) {
    form = $(form), options = Object.clone(options || { });

    var params = options.parameters, action = form.readAttribute('action') || '';
    if (action.blank()) action = window.location.href;
    options.parameters = form.serialize(true);

    if (params) {
      if (Object.isString(params)) params = params.toQueryParams();
      Object.extend(options.parameters, params);
    }

    if (form.hasAttribute('method') && !options.method)
      options.method = form.method;

    return new Ajax.Request(action, options);
  }
};

/*--------------------------------------------------------------------------*/


Form.Element = {
  focus: function(element) {
    $(element).focus();
    return element;
  },

  select: function(element) {
    $(element).select();
    return element;
  }
};

Form.Element.Methods = {

  serialize: function(element) {
    element = $(element);
    if (!element.disabled && element.name) {
      var value = element.getValue();
      if (value != undefined) {
        var pair = { };
        pair[element.name] = value;
        return Object.toQueryString(pair);
      }
    }
    return '';
  },

  getValue: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    return Form.Element.Serializers[method](element);
  },

  setValue: function(element, value) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    Form.Element.Serializers[method](element, value);
    return element;
  },

  clear: function(element) {
    $(element).value = '';
    return element;
  },

  present: function(element) {
    return $(element).value != '';
  },

  activate: function(element) {
    element = $(element);
    try {
      element.focus();
      if (element.select && (element.tagName.toLowerCase() != 'input' ||
          !(/^(?:button|reset|submit)$/i.test(element.type))))
        element.select();
    } catch (e) { }
    return element;
  },

  disable: function(element) {
    element = $(element);
    element.disabled = true;
    return element;
  },

  enable: function(element) {
    element = $(element);
    element.disabled = false;
    return element;
  }
};

/*--------------------------------------------------------------------------*/

var Field = Form.Element;

var $F = Form.Element.Methods.getValue;

/*--------------------------------------------------------------------------*/

Form.Element.Serializers = (function() {
  function input(element, value) {
    switch (element.type.toLowerCase()) {
      case 'checkbox':
      case 'radio':
        return inputSelector(element, value);
      default:
        return valueSelector(element, value);
    }
  }

  function inputSelector(element, value) {
    if (Object.isUndefined(value))
      return element.checked ? element.value : null;
    else element.checked = !!value;
  }

  function valueSelector(element, value) {
    if (Object.isUndefined(value)) return element.value;
    else element.value = value;
  }

  function select(element, value) {
    if (Object.isUndefined(value))
      return (element.type === 'select-one' ? selectOne : selectMany)(element);

    var opt, currentValue, single = !Object.isArray(value);
    for (var i = 0, length = element.length; i < length; i++) {
      opt = element.options[i];
      currentValue = this.optionValue(opt);
      if (single) {
        if (currentValue == value) {
          opt.selected = true;
          return;
        }
      }
      else opt.selected = value.include(currentValue);
    }
  }

  function selectOne(element) {
    var index = element.selectedIndex;
    return index >= 0 ? optionValue(element.options[index]) : null;
  }

  function selectMany(element) {
    var values, length = element.length;
    if (!length) return null;

    for (var i = 0, values = []; i < length; i++) {
      var opt = element.options[i];
      if (opt.selected) values.push(optionValue(opt));
    }
    return values;
  }

  function optionValue(opt) {
    return Element.hasAttribute(opt, 'value') ? opt.value : opt.text;
  }

  return {
    input:         input,
    inputSelector: inputSelector,
    textarea:      valueSelector,
    select:        select,
    selectOne:     selectOne,
    selectMany:    selectMany,
    optionValue:   optionValue,
    button:        valueSelector
  };
})();

/*--------------------------------------------------------------------------*/


Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
  initialize: function($super, element, frequency, callback) {
    $super(callback, frequency);
    this.element   = $(element);
    this.lastValue = this.getValue();
  },

  execute: function() {
    var value = this.getValue();
    if (Object.isString(this.lastValue) && Object.isString(value) ?
        this.lastValue != value : String(this.lastValue) != String(value)) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  }
});

Form.Element.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function() {
    return Form.serialize(this.element);
  }
});

/*--------------------------------------------------------------------------*/

Abstract.EventObserver = Class.create({
  initialize: function(element, callback) {
    this.element  = $(element);
    this.callback = callback;

    this.lastValue = this.getValue();
    if (this.element.tagName.toLowerCase() == 'form')
      this.registerFormCallbacks();
    else
      this.registerCallback(this.element);
  },

  onElementEvent: function() {
    var value = this.getValue();
    if (this.lastValue != value) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  },

  registerFormCallbacks: function() {
    Form.getElements(this.element).each(this.registerCallback, this);
  },

  registerCallback: function(element) {
    if (element.type) {
      switch (element.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
          Event.observe(element, 'click', this.onElementEvent.bind(this));
          break;
        default:
          Event.observe(element, 'change', this.onElementEvent.bind(this));
          break;
      }
    }
  }
});

Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function() {
    return Form.serialize(this.element);
  }
});
(function() {

  var Event = {
    KEY_BACKSPACE: 8,
    KEY_TAB:       9,
    KEY_RETURN:   13,
    KEY_ESC:      27,
    KEY_LEFT:     37,
    KEY_UP:       38,
    KEY_RIGHT:    39,
    KEY_DOWN:     40,
    KEY_DELETE:   46,
    KEY_HOME:     36,
    KEY_END:      35,
    KEY_PAGEUP:   33,
    KEY_PAGEDOWN: 34,
    KEY_INSERT:   45,

    cache: {}
  };

  var docEl = document.documentElement;
  var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = 'onmouseenter' in docEl
    && 'onmouseleave' in docEl;



  var isIELegacyEvent = function(event) { return false; };

  if (window.attachEvent) {
    if (window.addEventListener) {
      isIELegacyEvent = function(event) {
        return !(event instanceof window.Event);
      };
    } else {
      isIELegacyEvent = function(event) { return true; };
    }
  }

  var _isButton;

  function _isButtonForDOMEvents(event, code) {
    return event.which ? (event.which === code + 1) : (event.button === code);
  }

  var legacyButtonMap = { 0: 1, 1: 4, 2: 2 };
  function _isButtonForLegacyEvents(event, code) {
    return event.button === legacyButtonMap[code];
  }

  function _isButtonForWebKit(event, code) {
    switch (code) {
      case 0: return event.which == 1 && !event.metaKey;
      case 1: return event.which == 2 || (event.which == 1 && event.metaKey);
      case 2: return event.which == 3;
      default: return false;
    }
  }

  if (window.attachEvent) {
    if (!window.addEventListener) {
      _isButton = _isButtonForLegacyEvents;
    } else {
      _isButton = function(event, code) {
        return isIELegacyEvent(event) ? _isButtonForLegacyEvents(event, code) :
         _isButtonForDOMEvents(event, code);
      }
    }
  } else if (Prototype.Browser.WebKit) {
    _isButton = _isButtonForWebKit;
  } else {
    _isButton = _isButtonForDOMEvents;
  }

  function isLeftClick(event)   { return _isButton(event, 0) }

  function isMiddleClick(event) { return _isButton(event, 1) }

  function isRightClick(event)  { return _isButton(event, 2) }

  function element(event) {
    event = Event.extend(event);

    var node = event.target, type = event.type,
     currentTarget = event.currentTarget;

    if (currentTarget && currentTarget.tagName) {
      if (type === 'load' || type === 'error' ||
        (type === 'click' && currentTarget.tagName.toLowerCase() === 'input'
          && currentTarget.type === 'radio'))
            node = currentTarget;
    }

    if (node.nodeType == Node.TEXT_NODE)
      node = node.parentNode;

    return Element.extend(node);
  }

  function findElement(event, expression) {
    var element = Event.element(event);

    if (!expression) return element;
    while (element) {
      if (Object.isElement(element) && Prototype.Selector.match(element, expression)) {
        return Element.extend(element);
      }
      element = element.parentNode;
    }
  }

  function pointer(event) {
    return { x: pointerX(event), y: pointerY(event) };
  }

  function pointerX(event) {
    var docElement = document.documentElement,
     body = document.body || { scrollLeft: 0 };

    return event.pageX || (event.clientX +
      (docElement.scrollLeft || body.scrollLeft) -
      (docElement.clientLeft || 0));
  }

  function pointerY(event) {
    var docElement = document.documentElement,
     body = document.body || { scrollTop: 0 };

    return  event.pageY || (event.clientY +
       (docElement.scrollTop || body.scrollTop) -
       (docElement.clientTop || 0));
  }


  function stop(event) {
    Event.extend(event);
    event.preventDefault();
    event.stopPropagation();

    event.stopped = true;
  }


  Event.Methods = {
    isLeftClick:   isLeftClick,
    isMiddleClick: isMiddleClick,
    isRightClick:  isRightClick,

    element:     element,
    findElement: findElement,

    pointer:  pointer,
    pointerX: pointerX,
    pointerY: pointerY,

    stop: stop
  };

  var methods = Object.keys(Event.Methods).inject({ }, function(m, name) {
    m[name] = Event.Methods[name].methodize();
    return m;
  });

  if (window.attachEvent) {
    function _relatedTarget(event) {
      var element;
      switch (event.type) {
        case 'mouseover':
        case 'mouseenter':
          element = event.fromElement;
          break;
        case 'mouseout':
        case 'mouseleave':
          element = event.toElement;
          break;
        default:
          return null;
      }
      return Element.extend(element);
    }

    var additionalMethods = {
      stopPropagation: function() { this.cancelBubble = true },
      preventDefault:  function() { this.returnValue = false },
      inspect: function() { return '[object Event]' }
    };

    Event.extend = function(event, element) {
      if (!event) return false;

      if (!isIELegacyEvent(event)) return event;

      if (event._extendedByPrototype) return event;
      event._extendedByPrototype = Prototype.emptyFunction;

      var pointer = Event.pointer(event);

      Object.extend(event, {
        target: event.srcElement || element,
        relatedTarget: _relatedTarget(event),
        pageX:  pointer.x,
        pageY:  pointer.y
      });

      Object.extend(event, methods);
      Object.extend(event, additionalMethods);

      return event;
    };
  } else {
    Event.extend = Prototype.K;
  }

  if (window.addEventListener) {
    Event.prototype = window.Event.prototype || document.createEvent('HTMLEvents').__proto__;
    Object.extend(Event.prototype, methods);
  }

  function _createResponder(element, eventName, handler) {
    var registry = Element.retrieve(element, 'prototype_event_registry');

    if (Object.isUndefined(registry)) {
      CACHE.push(element);
      registry = Element.retrieve(element, 'prototype_event_registry', $H());
    }

    var respondersForEvent = registry.get(eventName);
    if (Object.isUndefined(respondersForEvent)) {
      respondersForEvent = [];
      registry.set(eventName, respondersForEvent);
    }

    if (respondersForEvent.pluck('handler').include(handler)) return false;

    var responder;
    if (eventName.include(":")) {
      responder = function(event) {
        if (Object.isUndefined(event.eventName))
          return false;

        if (event.eventName !== eventName)
          return false;

        Event.extend(event, element);
        handler.call(element, event);
      };
    } else {
      if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED &&
       (eventName === "mouseenter" || eventName === "mouseleave")) {
        if (eventName === "mouseenter" || eventName === "mouseleave") {
          responder = function(event) {
            Event.extend(event, element);

            var parent = event.relatedTarget;
            while (parent && parent !== element) {
              try { parent = parent.parentNode; }
              catch(e) { parent = element; }
            }

            if (parent === element) return;

            handler.call(element, event);
          };
        }
      } else {
        responder = function(event) {
          Event.extend(event, element);
          handler.call(element, event);
        };
      }
    }

    responder.handler = handler;
    respondersForEvent.push(responder);
    return responder;
  }

  function _destroyCache() {
    for (var i = 0, length = CACHE.length; i < length; i++) {
      Event.stopObserving(CACHE[i]);
      CACHE[i] = null;
    }
  }

  var CACHE = [];

  if (Prototype.Browser.IE)
    window.attachEvent('onunload', _destroyCache);

  if (Prototype.Browser.WebKit)
    window.addEventListener('unload', Prototype.emptyFunction, false);


  var _getDOMEventName = Prototype.K,
      translations = { mouseenter: "mouseover", mouseleave: "mouseout" };

  if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED) {
    _getDOMEventName = function(eventName) {
      return (translations[eventName] || eventName);
    };
  }

  function observe(element, eventName, handler) {
    element = $(element);

    var responder = _createResponder(element, eventName, handler);

    if (!responder) return element;

    if (eventName.include(':')) {
      if (element.addEventListener)
        element.addEventListener("dataavailable", responder, false);
      else {
        element.attachEvent("ondataavailable", responder);
        element.attachEvent("onlosecapture", responder);
      }
    } else {
      var actualEventName = _getDOMEventName(eventName);

      if (element.addEventListener)
        element.addEventListener(actualEventName, responder, false);
      else
        element.attachEvent("on" + actualEventName, responder);
    }

    return element;
  }

  function stopObserving(element, eventName, handler) {
    element = $(element);

    var registry = Element.retrieve(element, 'prototype_event_registry');
    if (!registry) return element;

    if (!eventName) {
      registry.each( function(pair) {
        var eventName = pair.key;
        stopObserving(element, eventName);
      });
      return element;
    }

    var responders = registry.get(eventName);
    if (!responders) return element;

    if (!handler) {
      responders.each(function(r) {
        stopObserving(element, eventName, r.handler);
      });
      return element;
    }

    var i = responders.length, responder;
    while (i--) {
      if (responders[i].handler === handler) {
        responder = responders[i];
        break;
      }
    }
    if (!responder) return element;

    if (eventName.include(':')) {
      if (element.removeEventListener)
        element.removeEventListener("dataavailable", responder, false);
      else {
        element.detachEvent("ondataavailable", responder);
        element.detachEvent("onlosecapture", responder);
      }
    } else {
      var actualEventName = _getDOMEventName(eventName);
      if (element.removeEventListener)
        element.removeEventListener(actualEventName, responder, false);
      else
        element.detachEvent('on' + actualEventName, responder);
    }

    registry.set(eventName, responders.without(responder));

    return element;
  }

  function fire(element, eventName, memo, bubble) {
    element = $(element);

    if (Object.isUndefined(bubble))
      bubble = true;

    if (element == document && document.createEvent && !element.dispatchEvent)
      element = document.documentElement;

    var event;
    if (document.createEvent) {
      event = document.createEvent('HTMLEvents');
      event.initEvent('dataavailable', bubble, true);
    } else {
      event = document.createEventObject();
      event.eventType = bubble ? 'ondataavailable' : 'onlosecapture';
    }

    event.eventName = eventName;
    event.memo = memo || { };

    if (document.createEvent)
      element.dispatchEvent(event);
    else
      element.fireEvent(event.eventType, event);

    return Event.extend(event);
  }

  Event.Handler = Class.create({
    initialize: function(element, eventName, selector, callback) {
      this.element   = $(element);
      this.eventName = eventName;
      this.selector  = selector;
      this.callback  = callback;
      this.handler   = this.handleEvent.bind(this);
    },

    start: function() {
      Event.observe(this.element, this.eventName, this.handler);
      return this;
    },

    stop: function() {
      Event.stopObserving(this.element, this.eventName, this.handler);
      return this;
    },

    handleEvent: function(event) {
      var element = Event.findElement(event, this.selector);
      if (element) this.callback.call(this.element, event, element);
    }
  });

  function on(element, eventName, selector, callback) {
    element = $(element);
    if (Object.isFunction(selector) && Object.isUndefined(callback)) {
      callback = selector, selector = null;
    }

    return new Event.Handler(element, eventName, selector, callback).start();
  }

  Object.extend(Event, Event.Methods);

  Object.extend(Event, {
    fire:          fire,
    observe:       observe,
    stopObserving: stopObserving,
    on:            on
  });

  Element.addMethods({
    fire:          fire,

    observe:       observe,

    stopObserving: stopObserving,

    on:            on
  });

  Object.extend(document, {
    fire:          fire.methodize(),

    observe:       observe.methodize(),

    stopObserving: stopObserving.methodize(),

    on:            on.methodize(),

    loaded:        false
  });

  if (window.Event) Object.extend(window.Event, Event);
  else window.Event = Event;
})();

(function() {
  /* Support for the DOMContentLoaded event is based on work by Dan Webb,
     Matthias Miller, Dean Edwards, John Resig, and Diego Perini. */

  var timer;

  function fireContentLoadedEvent() {
    if (document.loaded) return;
    if (timer) window.clearTimeout(timer);
    document.loaded = true;
    document.fire('dom:loaded');
  }

  function checkReadyState() {
    if (document.readyState === 'complete') {
      document.stopObserving('readystatechange', checkReadyState);
      fireContentLoadedEvent();
    }
  }

  function pollDoScroll() {
    try { document.documentElement.doScroll('left'); }
    catch(e) {
      timer = pollDoScroll.defer();
      return;
    }
    fireContentLoadedEvent();
  }

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
  } else {
    document.observe('readystatechange', checkReadyState);
    if (window == top)
      timer = pollDoScroll.defer();
  }

  Event.observe(window, 'load', fireContentLoadedEvent);
})();

Element.addMethods();

/*------------------------------- DEPRECATED -------------------------------*/

Hash.toQueryString = Object.toQueryString;

var Toggle = { display: Element.toggle };

Element.Methods.childOf = Element.Methods.descendantOf;

var Insertion = {
  Before: function(element, content) {
    return Element.insert(element, {before:content});
  },

  Top: function(element, content) {
    return Element.insert(element, {top:content});
  },

  Bottom: function(element, content) {
    return Element.insert(element, {bottom:content});
  },

  After: function(element, content) {
    return Element.insert(element, {after:content});
  }
};

var $continue = new Error('"throw $continue" is deprecated, use "return" instead');

var Position = {
  includeScrollOffsets: false,

  prepare: function() {
    this.deltaX =  window.pageXOffset
                || document.documentElement.scrollLeft
                || document.body.scrollLeft
                || 0;
    this.deltaY =  window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
  },

  within: function(element, x, y) {
    if (this.includeScrollOffsets)
      return this.withinIncludingScrolloffsets(element, x, y);
    this.xcomp = x;
    this.ycomp = y;
    this.offset = Element.cumulativeOffset(element);

    return (y >= this.offset[1] &&
            y <  this.offset[1] + element.offsetHeight &&
            x >= this.offset[0] &&
            x <  this.offset[0] + element.offsetWidth);
  },

  withinIncludingScrolloffsets: function(element, x, y) {
    var offsetcache = Element.cumulativeScrollOffset(element);

    this.xcomp = x + offsetcache[0] - this.deltaX;
    this.ycomp = y + offsetcache[1] - this.deltaY;
    this.offset = Element.cumulativeOffset(element);

    return (this.ycomp >= this.offset[1] &&
            this.ycomp <  this.offset[1] + element.offsetHeight &&
            this.xcomp >= this.offset[0] &&
            this.xcomp <  this.offset[0] + element.offsetWidth);
  },

  overlap: function(mode, element) {
    if (!mode) return 0;
    if (mode == 'vertical')
      return ((this.offset[1] + element.offsetHeight) - this.ycomp) /
        element.offsetHeight;
    if (mode == 'horizontal')
      return ((this.offset[0] + element.offsetWidth) - this.xcomp) /
        element.offsetWidth;
  },


  cumulativeOffset: Element.Methods.cumulativeOffset,

  positionedOffset: Element.Methods.positionedOffset,

  absolutize: function(element) {
    Position.prepare();
    return Element.absolutize(element);
  },

  relativize: function(element) {
    Position.prepare();
    return Element.relativize(element);
  },

  realOffset: Element.Methods.cumulativeScrollOffset,

  offsetParent: Element.Methods.getOffsetParent,

  page: Element.Methods.viewportOffset,

  clone: function(source, target, options) {
    options = options || { };
    return Element.clonePosition(target, source, options);
  }
};

/*--------------------------------------------------------------------------*/

if (!document.getElementsByClassName) document.getElementsByClassName = function(instanceMethods){
  function iter(name) {
    return name.blank() ? null : "[contains(concat(' ', @class, ' '), ' " + name + " ')]";
  }

  instanceMethods.getElementsByClassName = Prototype.BrowserFeatures.XPath ?
  function(element, className) {
    className = className.toString().strip();
    var cond = /\s/.test(className) ? $w(className).map(iter).join('') : iter(className);
    return cond ? document._getElementsByXPath('.//*' + cond, element) : [];
  } : function(element, className) {
    className = className.toString().strip();
    var elements = [], classNames = (/\s/.test(className) ? $w(className) : null);
    if (!classNames && !className) return elements;

    var nodes = $(element).getElementsByTagName('*');
    className = ' ' + className + ' ';

    for (var i = 0, child, cn; child = nodes[i]; i++) {
      if (child.className && (cn = ' ' + child.className + ' ') && (cn.include(className) ||
          (classNames && classNames.all(function(name) {
            return !name.toString().blank() && cn.include(' ' + name + ' ');
          }))))
        elements.push(Element.extend(child));
    }
    return elements;
  };

  return function(className, parentElement) {
    return $(parentElement || document.body).getElementsByClassName(className);
  };
}(Element.Methods);

/*--------------------------------------------------------------------------*/

Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
  initialize: function(element) {
    this.element = $(element);
  },

  _each: function(iterator) {
    this.element.className.split(/\s+/).select(function(name) {
      return name.length > 0;
    })._each(iterator);
  },

  set: function(className) {
    this.element.className = className;
  },

  add: function(classNameToAdd) {
    if (this.include(classNameToAdd)) return;
    this.set($A(this).concat(classNameToAdd).join(' '));
  },

  remove: function(classNameToRemove) {
    if (!this.include(classNameToRemove)) return;
    this.set($A(this).without(classNameToRemove).join(' '));
  },

  toString: function() {
    return $A(this).join(' ');
  }
};

Object.extend(Element.ClassNames.prototype, Enumerable);

/*--------------------------------------------------------------------------*/

(function() {
  window.Selector = Class.create({
    initialize: function(expression) {
      this.expression = expression.strip();
    },

    findElements: function(rootElement) {
      return Prototype.Selector.select(this.expression, rootElement);
    },

    match: function(element) {
      return Prototype.Selector.match(element, this.expression);
    },

    toString: function() {
      return this.expression;
    },

    inspect: function() {
      return "#<Selector: " + this.expression + ">";
    }
  });

  Object.extend(Selector, {
    matchElements: function(elements, expression) {
      var match = Prototype.Selector.match,
          results = [];

      for (var i = 0, length = elements.length; i < length; i++) {
        var element = elements[i];
        if (match(element, expression)) {
          results.push(Element.extend(element));
        }
      }
      return results;
    },

    findElement: function(elements, expression, index) {
      index = index || 0;
      var matchIndex = 0, element;
      for (var i = 0, length = elements.length; i < length; i++) {
        element = elements[i];
        if (Prototype.Selector.match(element, expression) && index === matchIndex++) {
          return Element.extend(element);
        }
      }
    },

    findChildElements: function(element, expressions) {
      var selector = expressions.toArray().join(', ');
      return Prototype.Selector.select(selector, element || document);
    }
  });
})();

// Credit Card Validation Javascript
// copyright 12th May 2003, by Stephen Chapman, Felgall Pty Ltd

// You have permission to copy and use this javascript provided that
// the content of the script is not changed in any way.

function validateCreditCard(s) {
    // remove non-numerics
    var v = "0123456789";
    var w = "";
    for (i=0; i < s.length; i++) {
        x = s.charAt(i);
        if (v.indexOf(x,0) != -1)
        w += x;
    }
    // validate number
    j = w.length / 2;
    k = Math.floor(j);
    m = Math.ceil(j) - k;
    c = 0;
    for (i=0; i<k; i++) {
        a = w.charAt(i*2+m) * 2;
        c += a > 9 ? Math.floor(a/10 + a%10) : a;
    }
    for (i=0; i<k+m; i++) c += w.charAt(i*2+1-m) * 1;
    return (c%10 == 0);
}


/*
* Really easy field validation with Prototype
* http://tetlaw.id.au/view/javascript/really-easy-field-validation
* Andrew Tetlaw
* Version 1.5.4.1 (2007-01-05)
*
* Copyright (c) 2007 Andrew Tetlaw
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies
* of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
* BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
* ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
var Validator = Class.create();

Validator.prototype = {
    initialize : function(className, error, test, options) {
        if(typeof test == 'function'){
            this.options = $H(options);
            this._test = test;
        } else {
            this.options = $H(test);
            this._test = function(){return true};
        }
        this.error = error || 'Validation failed.';
        this.className = className;
    },
    test : function(v, elm) {
        return (this._test(v,elm) && this.options.all(function(p){
            return Validator.methods[p.key] ? Validator.methods[p.key](v,elm,p.value) : true;
        }));
    }
}
Validator.methods = {
    pattern : function(v,elm,opt) {return Validation.get('IsEmpty').test(v) || opt.test(v)},
    minLength : function(v,elm,opt) {return v.length >= opt},
    maxLength : function(v,elm,opt) {return v.length <= opt},
    min : function(v,elm,opt) {return v >= parseFloat(opt)},
    max : function(v,elm,opt) {return v <= parseFloat(opt)},
    notOneOf : function(v,elm,opt) {return $A(opt).all(function(value) {
        return v != value;
    })},
    oneOf : function(v,elm,opt) {return $A(opt).any(function(value) {
        return v == value;
    })},
    is : function(v,elm,opt) {return v == opt},
    isNot : function(v,elm,opt) {return v != opt},
    equalToField : function(v,elm,opt) {return v == $F(opt)},
    notEqualToField : function(v,elm,opt) {return v != $F(opt)},
    include : function(v,elm,opt) {return $A(opt).all(function(value) {
        return Validation.get(value).test(v,elm);
    })}
}

var Validation = Class.create();
Validation.defaultOptions = {
    onSubmit : true,
    stopOnFirst : false,
    immediate : false,
    focusOnError : true,
    useTitles : false,
    addClassNameToContainer: false,
    containerClassName: '.input-box',
    onFormValidate : function(result, form) {},
    onElementValidate : function(result, elm) {}
};

Validation.prototype = {
    initialize : function(form, options){
        this.form = $(form);
        if (!this.form) {
            return;
        }
        this.options = Object.extend({
            onSubmit : Validation.defaultOptions.onSubmit,
            stopOnFirst : Validation.defaultOptions.stopOnFirst,
            immediate : Validation.defaultOptions.immediate,
            focusOnError : Validation.defaultOptions.focusOnError,
            useTitles : Validation.defaultOptions.useTitles,
            onFormValidate : Validation.defaultOptions.onFormValidate,
            onElementValidate : Validation.defaultOptions.onElementValidate
        }, options || {});
        if(this.options.onSubmit) Event.observe(this.form,'submit',this.onSubmit.bind(this),false);
        if(this.options.immediate) {
            Form.getElements(this.form).each(function(input) { // Thanks Mike!
                if (input.tagName.toLowerCase() == 'select') {
                    Event.observe(input, 'blur', this.onChange.bindAsEventListener(this));
                }
                if (input.type.toLowerCase() == 'radio' || input.type.toLowerCase() == 'checkbox') {
                    Event.observe(input, 'click', this.onChange.bindAsEventListener(this));
                } else {
                    Event.observe(input, 'change', this.onChange.bindAsEventListener(this));
                }
            }, this);
        }
    },
    onChange : function (ev) {
        Validation.isOnChange = true;
        Validation.validate(Event.element(ev),{
                useTitle : this.options.useTitles,
                onElementValidate : this.options.onElementValidate
        });
        Validation.isOnChange = false;
    },
    onSubmit :  function(ev){
        if(!this.validate()) Event.stop(ev);
    },
    validate : function() {
        var result = false;
        var useTitles = this.options.useTitles;
        var callback = this.options.onElementValidate;
        try {
            if(this.options.stopOnFirst) {
                result = Form.getElements(this.form).all(function(elm) {
                    if (elm.hasClassName('local-validation') && !this.isElementInForm(elm, this.form)) {
                        return true;
                    }
                    return Validation.validate(elm,{useTitle : useTitles, onElementValidate : callback});
                }, this);
            } else {
                result = Form.getElements(this.form).collect(function(elm) {
                    if (elm.hasClassName('local-validation') && !this.isElementInForm(elm, this.form)) {
                        return true;
                    }
                    return Validation.validate(elm,{useTitle : useTitles, onElementValidate : callback});
                }, this).all();
            }
        } catch (e) {
        }
        if(!result && this.options.focusOnError) {
            try{
                Form.getElements(this.form).findAll(function(elm){return $(elm).hasClassName('validation-failed')}).first().focus()
            }
            catch(e){
            }
        }
        this.options.onFormValidate(result, this.form);
        return result;
    },
    reset : function() {
        Form.getElements(this.form).each(Validation.reset);
    },
    isElementInForm : function(elm, form) {
        var domForm = elm.up('form');
        if (domForm == form) {
            return true;
        }
        return false;
    }
}

Object.extend(Validation, {
    validate : function(elm, options){
        options = Object.extend({
            useTitle : false,
            onElementValidate : function(result, elm) {}
        }, options || {});
        elm = $(elm);

        var cn = $w(elm.className);
        return result = cn.all(function(value) {
            var test = Validation.test(value,elm,options.useTitle);
            options.onElementValidate(test, elm);
            return test;
        });
    },
    insertAdvice : function(elm, advice){
        var container = $(elm).up('.field-row');
        if(container){
            Element.insert(container, {after: advice});
        } else if (elm.up('td.value')) {
            elm.up('td.value').insert({bottom: advice});
        } else if (elm.advaiceContainer && $(elm.advaiceContainer)) {
            $(elm.advaiceContainer).update(advice);
        }
        else {
            switch (elm.type.toLowerCase()) {
                case 'checkbox':
                case 'radio':
                    var p = elm.parentNode;
                    if(p) {
                        Element.insert(p, {'bottom': advice});
                    } else {
                        Element.insert(elm, {'after': advice});
                    }
                    break;
                default:
                    Element.insert(elm, {'after': advice});
            }
        }
    },
    showAdvice : function(elm, advice, adviceName){
        if(!elm.advices){
            elm.advices = new Hash();
        }
        else{
            elm.advices.each(function(pair){
                if (!advice || pair.value.id != advice.id) {
                    // hide non-current advice after delay
                    this.hideAdvice(elm, pair.value);
                }
            }.bind(this));
        }
        elm.advices.set(adviceName, advice);
        if(typeof Effect == 'undefined') {
            advice.style.display = 'block';
        } else {
            if(!advice._adviceAbsolutize) {
                new Effect.Appear(advice, {duration : 1 });
            } else {
                Position.absolutize(advice);
                advice.show();
                advice.setStyle({
                    'top':advice._adviceTop,
                    'left': advice._adviceLeft,
                    'width': advice._adviceWidth,
                    'z-index': 1000
                });
                advice.addClassName('advice-absolute');
            }
        }
    },
    hideAdvice : function(elm, advice){
        if (advice != null) {
            new Effect.Fade(advice, {duration : 1, afterFinishInternal : function() {advice.hide();}});
        }
    },
    updateCallback : function(elm, status) {
        if (typeof elm.callbackFunction != 'undefined') {
            eval(elm.callbackFunction+'(\''+elm.id+'\',\''+status+'\')');
        }
    },
    ajaxError : function(elm, errorMsg) {
        var name = 'validate-ajax';
        var advice = Validation.getAdvice(name, elm);
        if (advice == null) {
            advice = this.createAdvice(name, elm, false, errorMsg);
        }
        this.showAdvice(elm, advice, 'validate-ajax');
        this.updateCallback(elm, 'failed');

        elm.addClassName('validation-failed');
        elm.addClassName('validate-ajax');
        if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
            var container = elm.up(Validation.defaultOptions.containerClassName);
            if (container && this.allowContainerClassName(elm)) {
                container.removeClassName('validation-passed');
                container.addClassName('validation-error');
            }
        }
    },
    allowContainerClassName: function (elm) {
        if (elm.type == 'radio' || elm.type == 'checkbox') {
            return elm.hasClassName('change-container-classname');
        }

        return true;
    },
    test : function(name, elm, useTitle) {
        var v = Validation.get(name);
        var prop = '__advice'+name.camelize();
        try {
        if(Validation.isVisible(elm) && !v.test($F(elm), elm)) {
            //if(!elm[prop]) {
                var advice = Validation.getAdvice(name, elm);
                if (advice == null) {
                    advice = this.createAdvice(name, elm, useTitle);
                }
                this.showAdvice(elm, advice, name);
                this.updateCallback(elm, 'failed');
            //}
            elm[prop] = 1;
            if (!elm.advaiceContainer) {
                elm.removeClassName('validation-passed');
                elm.addClassName('validation-failed');
            }

           if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && this.allowContainerClassName(elm)) {
                    container.removeClassName('validation-passed');
                    container.addClassName('validation-error');
                }
            }
            return false;
        } else {
            var advice = Validation.getAdvice(name, elm);
            this.hideAdvice(elm, advice);
            this.updateCallback(elm, 'passed');
            elm[prop] = '';
            elm.removeClassName('validation-failed');
            elm.addClassName('validation-passed');
            if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && !container.down('.validation-failed') && this.allowContainerClassName(elm)) {
                    if (!Validation.get('IsEmpty').test(elm.value) || !this.isVisible(elm)) {
                        container.addClassName('validation-passed');
                    } else {
                        container.removeClassName('validation-passed');
                    }
                    container.removeClassName('validation-error');
                }
            }
            return true;
        }
        } catch(e) {
            throw(e)
        }
    },
    isVisible : function(elm) {
        while(elm.tagName != 'BODY') {
            if(!$(elm).visible()) return false;
            elm = elm.parentNode;
        }
        return true;
    },
    getAdvice : function(name, elm) {
        return $('advice-' + name + '-' + Validation.getElmID(elm)) || $('advice-' + Validation.getElmID(elm));
    },
    createAdvice : function(name, elm, useTitle, customError) {
        var v = Validation.get(name);
        var errorMsg = useTitle ? ((elm && elm.title) ? elm.title : v.error) : v.error;
        if (customError) {
            errorMsg = customError;
        }
        try {
            if (Translator){
                errorMsg = Translator.translate(errorMsg);
            }
        }
        catch(e){}

        advice = '<div class="validation-advice" id="advice-' + name + '-' + Validation.getElmID(elm) +'" style="display:none">' + errorMsg + '</div>'


        Validation.insertAdvice(elm, advice);
        advice = Validation.getAdvice(name, elm);
        if($(elm).hasClassName('absolute-advice')) {
            var dimensions = $(elm).getDimensions();
            var originalPosition = Position.cumulativeOffset(elm);

            advice._adviceTop = (originalPosition[1] + dimensions.height) + 'px';
            advice._adviceLeft = (originalPosition[0])  + 'px';
            advice._adviceWidth = (dimensions.width)  + 'px';
            advice._adviceAbsolutize = true;
        }
        return advice;
    },
    getElmID : function(elm) {
        return elm.id ? elm.id : elm.name;
    },
    reset : function(elm) {
        elm = $(elm);
        var cn = $w(elm.className);
        cn.each(function(value) {
            var prop = '__advice'+value.camelize();
            if(elm[prop]) {
                var advice = Validation.getAdvice(value, elm);
                if (advice) {
                    advice.hide();
                }
                elm[prop] = '';
            }
            elm.removeClassName('validation-failed');
            elm.removeClassName('validation-passed');
            if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container) {
                    container.removeClassName('validation-passed');
                    container.removeClassName('validation-error');
                }
            }
        });
    },
    add : function(className, error, test, options) {
        var nv = {};
        nv[className] = new Validator(className, error, test, options);
        Object.extend(Validation.methods, nv);
    },
    addAllThese : function(validators) {
        var nv = {};
        $A(validators).each(function(value) {
                nv[value[0]] = new Validator(value[0], value[1], value[2], (value.length > 3 ? value[3] : {}));
            });
        Object.extend(Validation.methods, nv);
    },
    get : function(name) {
        return  Validation.methods[name] ? Validation.methods[name] : Validation.methods['_LikeNoIDIEverSaw_'];
    },
    methods : {
        '_LikeNoIDIEverSaw_' : new Validator('_LikeNoIDIEverSaw_','',{})
    }
});

Validation.add('IsEmpty', '', function(v) {
    return  (v == '' || (v == null) || (v.length == 0) || /^\s+$/.test(v));
});

Validation.addAllThese([
    ['validate-no-html-tags', 'HTML tags are not allowed', function(v) {
				return !/<(\/)?\w+/.test(v);
			}],
	['validate-select', 'Please select an option.', function(v) {
                return ((v != "none") && (v != null) && (v.length != 0));
            }],
    ['required-entry', 'This is a required field.', function(v) {
                return !Validation.get('IsEmpty').test(v);
            }],
    ['validate-number', 'Please enter a valid number in this field.', function(v) {
                return Validation.get('IsEmpty').test(v)
                    || (!isNaN(parseNumber(v)) && /^\s*-?\d*(\.\d*)?\s*$/.test(v));
            }],
    ['validate-number-range', 'The value is not within the specified range.', function(v, elm) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }

                var numValue = parseNumber(v);
                if (isNaN(numValue)) {
                    return false;
                }

                var reRange = /^number-range-(-?[\d.,]+)?-(-?[\d.,]+)?$/,
                    result = true;

                $w(elm.className).each(function(name) {
                    var m = reRange.exec(name);
                    if (m) {
                        result = result
                            && (m[1] == null || m[1] == '' || numValue >= parseNumber(m[1]))
                            && (m[2] == null || m[2] == '' || numValue <= parseNumber(m[2]));
                    }
                });

                return result;
            }],
    ['validate-digits', 'Please use numbers only in this field. Please avoid spaces or other characters such as dots or commas.', function(v) {
                return Validation.get('IsEmpty').test(v) ||  !/[^\d]/.test(v);
            }],
    ['validate-digits-range', 'The value is not within the specified range.', function(v, elm) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }

                var numValue = parseNumber(v);
                if (isNaN(numValue)) {
                    return false;
                }

                var reRange = /^digits-range-(-?\d+)?-(-?\d+)?$/,
                    result = true;

                $w(elm.className).each(function(name) {
                    var m = reRange.exec(name);
                    if (m) {
                        result = result
                            && (m[1] == null || m[1] == '' || numValue >= parseNumber(m[1]))
                            && (m[2] == null || m[2] == '' || numValue <= parseNumber(m[2]));
                    }
                });

                return result;
            }],
    ['validate-alpha', 'Please use letters only (a-z or A-Z) in this field.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[a-zA-Z]+$/.test(v)
            }],
    ['validate-code', 'Please use only letters (a-z), numbers (0-9) or underscore(_) in this field, first character should be a letter.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[a-z]+[a-z0-9_]+$/.test(v)
            }],
    ['validate-alphanum', 'Please use only letters (a-z or A-Z) or numbers (0-9) only in this field. No spaces or other characters are allowed.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^[a-zA-Z0-9]+$/.test(v)
            }],
    ['validate-alphanum-with-spaces', 'Please use only letters (a-z or A-Z), numbers (0-9) or spaces only in this field.', function(v) {
                    return Validation.get('IsEmpty').test(v) || /^[a-zA-Z0-9 ]+$/.test(v)
            }],
    ['validate-street', 'Please use only letters (a-z or A-Z) or numbers (0-9) or spaces and # only in this field.', function(v) {
                return Validation.get('IsEmpty').test(v) ||  /^[ \w]{3,}([A-Za-z]\.)?([ \w]*\#\d+)?(\r\n| )[ \w]{3,}/.test(v)
            }],
    ['validate-phoneStrict', 'Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);
            }],
    ['validate-phoneLax', 'Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^((\d[-. ]?)?((\(\d{3}\))|\d{3}))?[-. ]?\d{3}[-. ]?\d{4}$/.test(v);
            }],
    ['validate-fax', 'Please enter a valid fax number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);
            }],
    ['validate-date', 'Please enter a valid date.', function(v) {
                var test = new Date(v);
                return Validation.get('IsEmpty').test(v) || !isNaN(test);
            }],
    ['validate-date-range', 'The From Date value should be less than or equal to the To Date value.', function(v, elm) {
            var m = /\bdate-range-(\w+)-(\w+)\b/.exec(elm.className);
            if (!m || m[2] == 'to' || Validation.get('IsEmpty').test(v)) {
                return true;
            }

            var currentYear = new Date().getFullYear() + '';
            var normalizedTime = function(v) {
                v = v.split(/[.\/]/);
                if (v[2] && v[2].length < 4) {
                    v[2] = currentYear.substr(0, v[2].length) + v[2];
                }
                return new Date(v.join('/')).getTime();
            };

            var dependentElements = Element.select(elm.form, '.validate-date-range.date-range-' + m[1] + '-to');
            return !dependentElements.length || Validation.get('IsEmpty').test(dependentElements[0].value)
                || normalizedTime(v) <= normalizedTime(dependentElements[0].value);
        }],
    ['validate-email', 'Please enter a valid email address. For example johndoe@domain.com.', function (v) {
                //return Validation.get('IsEmpty').test(v) || /\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(v)
                //return Validation.get('IsEmpty').test(v) || /^[\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9][\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9\.]{1,30}[\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9]@([a-z0-9_-]{1,30}\.){1,5}[a-z]{2,4}$/i.test(v)
                return Validation.get('IsEmpty').test(v) || /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i.test(v)
            }],
    ['validate-emailSender', 'Please use only visible characters and spaces.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[\S ]+$/.test(v)
                    }],
    ['validate-password', 'Please enter 6 or more characters without leading or trailing spaces.', function(v) {
                var pass=v.strip(); /*strip leading and trailing spaces*/
                return (!(v.length>0 && v.length < 6) && v.length == pass.length);
            }],
    ['validate-admin-password', 'Please enter 7 or more characters. Password should contain both numeric and alphabetic characters.', function(v) {
                var pass=v.strip();
                if (0 == pass.length) {
                    return true;
                }
                if (!(/[a-z]/i.test(v)) || !(/[0-9]/.test(v))) {
                    return false;
                }
                return !(pass.length < 7);
            }],
    ['validate-cpassword', 'Please make sure your passwords match.', function(v) {
                var conf = $('confirmation') ? $('confirmation') : $$('.validate-cpassword')[0];
                var pass = false;
                if ($('password')) {
                    pass = $('password');
                }
                var passwordElements = $$('.validate-password');
                for (var i = 0; i < passwordElements.size(); i++) {
                    var passwordElement = passwordElements[i];
                    if (passwordElement.up('form').id == conf.up('form').id) {
                        pass = passwordElement;
                    }
                }
                if ($$('.validate-admin-password').size()) {
                    pass = $$('.validate-admin-password')[0];
                }
                return (pass.value == conf.value);
            }],
    ['validate-both-passwords', 'Please make sure your passwords match.', function(v, input) {
                var dependentInput = $(input.form[input.name == 'password' ? 'confirmation' : 'password']),
                    isEqualValues  = input.value == dependentInput.value;

                if (isEqualValues && dependentInput.hasClassName('validation-failed')) {
                    Validation.test(this.className, dependentInput);
                }

                return dependentInput.value == '' || isEqualValues;
            }],
    ['validate-url', 'Please enter a valid URL. Protocol is required (http://, https:// or ftp://)', function (v) {
                v = (v || '').replace(/^\s+/, '').replace(/\s+$/, '');
                return Validation.get('IsEmpty').test(v) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(v)
            }],
    ['validate-clean-url', 'Please enter a valid URL. For example http://www.example.com or www.example.com', function (v) {
                return Validation.get('IsEmpty').test(v) || /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v) || /^(www)((\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v)
            }],
    ['validate-identifier', 'Please enter a valid URL Key. For example "example-page", "example-page.html" or "anotherlevel/example-page".', function (v) {
                return Validation.get('IsEmpty').test(v) || /^[a-z0-9][a-z0-9_\/-]+(\.[a-z0-9_-]+)?$/.test(v)
            }],
    ['validate-xml-identifier', 'Please enter a valid XML-identifier. For example something_1, block5, id-4.', function (v) {
                return Validation.get('IsEmpty').test(v) || /^[A-Z][A-Z0-9_\/-]*$/i.test(v)
            }],
    ['validate-ssn', 'Please enter a valid social security number. For example 123-45-6789.', function(v) {
            return Validation.get('IsEmpty').test(v) || /^\d{3}-?\d{2}-?\d{4}$/.test(v);
            }],
    ['validate-zip', 'Please enter a valid zip code. For example 90602 or 90602-1234.', function(v) {
            return Validation.get('IsEmpty').test(v) || /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v);
            }],
    ['validate-zip-international', 'Please enter a valid zip code.', function(v) {
            //return Validation.get('IsEmpty').test(v) || /(^[A-z0-9]{2,10}([\s]{0,1}|[\-]{0,1})[A-z0-9]{2,10}$)/.test(v);
            return true;
            }],
    ['validate-date-au', 'Please use this date format: dd/mm/yyyy. For example 17/03/2006 for the 17th of March, 2006.', function(v) {
                if(Validation.get('IsEmpty').test(v)) return true;
                var regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
                if(!regex.test(v)) return false;
                var d = new Date(v.replace(regex, '$2/$1/$3'));
                return ( parseInt(RegExp.$2, 10) == (1+d.getMonth()) ) &&
                            (parseInt(RegExp.$1, 10) == d.getDate()) &&
                            (parseInt(RegExp.$3, 10) == d.getFullYear() );
            }],
    ['validate-currency-dollar', 'Please enter a valid $ amount. For example $100.00.', function(v) {
                // [$]1[##][,###]+[.##]
                // [$]1###+[.##]
                // [$]0.##
                // [$].##
                return Validation.get('IsEmpty').test(v) ||  /^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(v)
            }],
    ['validate-one-required', 'Please select one of the above options.', function (v,elm) {
                var p = elm.parentNode;
                var options = p.getElementsByTagName('INPUT');
                return $A(options).any(function(elm) {
                    return $F(elm);
                });
            }],
    ['validate-one-required-by-name', 'Please select one of the options.', function (v,elm) {
                var inputs = $$('input[name="' + elm.name.replace(/([\\"])/g, '\\$1') + '"]');

                var error = 1;
                for(var i=0;i<inputs.length;i++) {
                    if((inputs[i].type == 'checkbox' || inputs[i].type == 'radio') && inputs[i].checked == true) {
                        error = 0;
                    }

                    if(Validation.isOnChange && (inputs[i].type == 'checkbox' || inputs[i].type == 'radio')) {
                        Validation.reset(inputs[i]);
                    }
                }

                if( error == 0 ) {
                    return true;
                } else {
                    return false;
                }
            }],
    ['validate-not-negative-number', 'Please enter a number 0 or greater in this field.', function(v) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }
                v = parseNumber(v);
                return !isNaN(v) && v >= 0;
            }],
    ['validate-zero-or-greater', 'Please enter a number 0 or greater in this field.', function(v) {
            return Validation.get('validate-not-negative-number').test(v);
        }],
    ['validate-greater-than-zero', 'Please enter a number greater than 0 in this field.', function(v) {
            if (Validation.get('IsEmpty').test(v)) {
                return true;
            }
            v = parseNumber(v);
            return !isNaN(v) && v > 0;
        }],

    ['validate-special-price', 'The Special Price is active only when lower than the Actual Price.', function(v) {
        var priceInput = $('price');
        var priceType = $('price_type');
        var priceValue = parseFloat(v);

        // Passed on non-related validators conditions (to not change order of validation)
        if(
            !priceInput
            || Validation.get('IsEmpty').test(v)
            || !Validation.get('validate-number').test(v)
        ) {
            return true;
        }
        if(priceType) {
            return (priceType && priceValue <= 99.99);
        }
        return priceValue < parseFloat($F(priceInput));
    }],
    ['validate-state', 'Please select State/Province.', function(v) {
                return (v!=0 || v == '');
            }],
    ['validate-new-password', 'Please enter 6 or more characters without leading or trailing spaces.', function(v) {
                if (!Validation.get('validate-password').test(v)) return false;
                if (Validation.get('IsEmpty').test(v) && v != '') return false;
                return true;
            }],
    ['validate-cc-number', 'Please enter a valid credit card number.', function(v, elm) {
                // remove non-numerics
                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_number')) + '_cc_type');
                if (ccTypeContainer && typeof Validation.creditCartTypes.get(ccTypeContainer.value) != 'undefined'
                        && Validation.creditCartTypes.get(ccTypeContainer.value)[2] == false) {
                    if (!Validation.get('IsEmpty').test(v) && Validation.get('validate-digits').test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return validateCreditCard(v);
            }],
    ['validate-cc-type', 'Credit card number does not match credit card type.', function(v, elm) {
                // remove credit card number delimiters such as "-" and space
                elm.value = removeDelimiters(elm.value);
                v         = removeDelimiters(v);

                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_number')) + '_cc_type');
                if (!ccTypeContainer) {
                    return true;
                }
                var ccType = ccTypeContainer.value;

                if (typeof Validation.creditCartTypes.get(ccType) == 'undefined') {
                    return false;
                }

                // Other card type or switch or solo card
                if (Validation.creditCartTypes.get(ccType)[0]==false) {
                    return true;
                }

                var validationFailure = false;
                Validation.creditCartTypes.each(function (pair) {
                    if (pair.key == ccType) {
                        if (pair.value[0] && !v.match(pair.value[0])) {
                            validationFailure = true;
                        }
                        throw $break;
                    }
                });

                if (validationFailure) {
                    return false;
                }

                if (ccTypeContainer.hasClassName('validation-failed') && Validation.isOnChange) {
                    Validation.validate(ccTypeContainer);
                }

                return true;
            }],
     ['validate-cc-type-select', 'Card type does not match credit card number.', function(v, elm) {
                var ccNumberContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_type')) + '_cc_number');
                if (Validation.isOnChange && Validation.get('IsEmpty').test(ccNumberContainer.value)) {
                    return true;
                }
                if (Validation.get('validate-cc-type').test(ccNumberContainer.value, ccNumberContainer)) {
                    Validation.validate(ccNumberContainer);
                }
                return Validation.get('validate-cc-type').test(ccNumberContainer.value, ccNumberContainer);
            }],
     ['validate-cc-exp', 'Incorrect credit card expiration date.', function(v, elm) {
                var ccExpMonth   = v;
                var ccExpYear    = $(elm.id.substr(0,elm.id.indexOf('_expiration')) + '_expiration_yr').value;
                var currentTime  = new Date();
                var currentMonth = currentTime.getMonth() + 1;
                var currentYear  = currentTime.getFullYear();
                if (ccExpMonth < currentMonth && ccExpYear == currentYear) {
                    return false;
                }
                return true;
            }],
     ['validate-cc-cvn', 'Please enter a valid credit card verification number.', function(v, elm) {
                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_cid')) + '_cc_type');
                if (!ccTypeContainer) {
                    return true;
                }
                var ccType = ccTypeContainer.value;

                if (typeof Validation.creditCartTypes.get(ccType) == 'undefined') {
                    return false;
                }

                var re = Validation.creditCartTypes.get(ccType)[1];

                if (v.match(re)) {
                    return true;
                }

                return false;
            }],
     ['validate-ajax', '', function(v, elm) { return true; }],
     ['validate-data', 'Please use only letters (a-z or A-Z), numbers (0-9) or underscore(_) in this field, first character should be a letter.', function (v) {
                if(v != '' && v) {
                    return /^[A-Za-z]+[A-Za-z0-9_]+$/.test(v);
                }
                return true;
            }],
     ['validate-css-length', 'Please input a valid CSS-length. For example 100px or 77pt or 20em or .5ex or 50%.', function (v) {
                if (v != '' && v) {
                    return /^[0-9\.]+(px|pt|em|ex|%)?$/.test(v) && (!(/\..*\./.test(v))) && !(/\.$/.test(v));
                }
                return true;
            }],
     ['validate-length', 'Text length does not satisfy specified text range.', function (v, elm) {
                var reMax = new RegExp(/^maximum-length-[0-9]+$/);
                var reMin = new RegExp(/^minimum-length-[0-9]+$/);
                var result = true;
                $w(elm.className).each(function(name, index) {
                    if (name.match(reMax) && result) {
                       var length = name.split('-')[2];
                       result = (v.length <= length);
                    }
                    if (name.match(reMin) && result && !Validation.get('IsEmpty').test(v)) {
                        var length = name.split('-')[2];
                        result = (v.length >= length);
                    }
                });
                return result;
            }],
     ['validate-percents', 'Please enter a number lower than 100.', {max:100}],
     ['required-file', 'Please select a file', function(v, elm) {
         var result = !Validation.get('IsEmpty').test(v);
         if (result === false) {
             ovId = elm.id + '_value';
             if ($(ovId)) {
                 result = !Validation.get('IsEmpty').test($(ovId).value);
             }
         }
         return result;
     }],
     ['validate-cc-ukss', 'Please enter issue number or start date for switch/solo card type.', function(v,elm) {
         var endposition;

         if (elm.id.match(/(.)+_cc_issue$/)) {
             endposition = elm.id.indexOf('_cc_issue');
         } else if (elm.id.match(/(.)+_start_month$/)) {
             endposition = elm.id.indexOf('_start_month');
         } else {
             endposition = elm.id.indexOf('_start_year');
         }

         var prefix = elm.id.substr(0,endposition);

         var ccTypeContainer = $(prefix + '_cc_type');

         if (!ccTypeContainer) {
               return true;
         }
         var ccType = ccTypeContainer.value;

         if(['SS','SM','SO'].indexOf(ccType) == -1){
             return true;
         }

         $(prefix + '_cc_issue').advaiceContainer
           = $(prefix + '_start_month').advaiceContainer
           = $(prefix + '_start_year').advaiceContainer
           = $(prefix + '_cc_type_ss_div').down('ul li.adv-container');

         var ccIssue   =  $(prefix + '_cc_issue').value;
         var ccSMonth  =  $(prefix + '_start_month').value;
         var ccSYear   =  $(prefix + '_start_year').value;

         var ccStartDatePresent = (ccSMonth && ccSYear) ? true : false;

         if (!ccStartDatePresent && !ccIssue){
             return false;
         }
         return true;
     }]
]);

function removeDelimiters (v) {
    v = v.replace(/\s/g, '');
    v = v.replace(/\-/g, '');
    return v;
}

function parseNumber(v)
{
    if (typeof v != 'string') {
        return parseFloat(v);
    }

    var isDot  = v.indexOf('.');
    var isComa = v.indexOf(',');

    if (isDot != -1 && isComa != -1) {
        if (isComa > isDot) {
            v = v.replace('.', '').replace(',', '.');
        }
        else {
            v = v.replace(',', '');
        }
    }
    else if (isComa != -1) {
        v = v.replace(',', '.');
    }

    return parseFloat(v);
}

/**
 * Hash with credit card types which can be simply extended in payment modules
 * 0 - regexp for card number
 * 1 - regexp for cvn
 * 2 - check or not credit card number trough Luhn algorithm by
 *     function validateCreditCard which you can find above in this file
 */
Validation.creditCartTypes = $H({
//    'SS': [new RegExp('^((6759[0-9]{12})|(5018|5020|5038|6304|6759|6761|6763[0-9]{12,19})|(49[013][1356][0-9]{12})|(6333[0-9]{12})|(6334[0-4]\d{11})|(633110[0-9]{10})|(564182[0-9]{10}))([0-9]{2,3})?$'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'SO': [new RegExp('^(6334[5-9]([0-9]{11}|[0-9]{13,14}))|(6767([0-9]{12}|[0-9]{14,15}))$'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'VI': [new RegExp('^4[0-9]{12}([0-9]{3})?$'), new RegExp('^[0-9]{3}$'), true],
    'MC': [new RegExp('^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$'), new RegExp('^[0-9]{3}$'), true],
    'AE': [new RegExp('^3[47][0-9]{13}$'), new RegExp('^[0-9]{4}$'), true],
    'DI': [new RegExp('^(30[0-5][0-9]{13}|3095[0-9]{12}|35(2[8-9][0-9]{12}|[3-8][0-9]{13})|36[0-9]{12}|3[8-9][0-9]{14}|6011(0[0-9]{11}|[2-4][0-9]{11}|74[0-9]{10}|7[7-9][0-9]{10}|8[6-9][0-9]{10}|9[0-9]{11})|62(2(12[6-9][0-9]{10}|1[3-9][0-9]{11}|[2-8][0-9]{12}|9[0-1][0-9]{11}|92[0-5][0-9]{10})|[4-6][0-9]{13}|8[2-8][0-9]{12})|6(4[4-9][0-9]{13}|5[0-9]{14}))$'), new RegExp('^[0-9]{3}$'), true],
    'JCB': [new RegExp('^(30[0-5][0-9]{13}|3095[0-9]{12}|35(2[8-9][0-9]{12}|[3-8][0-9]{13})|36[0-9]{12}|3[8-9][0-9]{14}|6011(0[0-9]{11}|[2-4][0-9]{11}|74[0-9]{10}|7[7-9][0-9]{10}|8[6-9][0-9]{10}|9[0-9]{11})|62(2(12[6-9][0-9]{10}|1[3-9][0-9]{11}|[2-8][0-9]{12}|9[0-1][0-9]{11}|92[0-5][0-9]{10})|[4-6][0-9]{13}|8[2-8][0-9]{12})|6(4[4-9][0-9]{13}|5[0-9]{14}))$'), new RegExp('^[0-9]{3,4}$'), true],
    'DICL': [new RegExp('^(30[0-5][0-9]{13}|3095[0-9]{12}|35(2[8-9][0-9]{12}|[3-8][0-9]{13})|36[0-9]{12}|3[8-9][0-9]{14}|6011(0[0-9]{11}|[2-4][0-9]{11}|74[0-9]{10}|7[7-9][0-9]{10}|8[6-9][0-9]{10}|9[0-9]{11})|62(2(12[6-9][0-9]{10}|1[3-9][0-9]{11}|[2-8][0-9]{12}|9[0-1][0-9]{11}|92[0-5][0-9]{10})|[4-6][0-9]{13}|8[2-8][0-9]{12})|6(4[4-9][0-9]{13}|5[0-9]{14}))$'), new RegExp('^[0-9]{3}$'), true],
    'SM': [new RegExp('(^(5[0678])[0-9]{11,18}$)|(^(6[^05])[0-9]{11,18}$)|(^(601)[^1][0-9]{9,16}$)|(^(6011)[0-9]{9,11}$)|(^(6011)[0-9]{13,16}$)|(^(65)[0-9]{11,13}$)|(^(65)[0-9]{15,18}$)|(^(49030)[2-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49033)[5-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49110)[1-2]([0-9]{10}$|[0-9]{12,13}$))|(^(49117)[4-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49118)[0-2]([0-9]{10}$|[0-9]{12,13}$))|(^(4936)([0-9]{12}$|[0-9]{14,15}$))'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'OT': [false, new RegExp('^([0-9]{3}|[0-9]{4})?$'), false]
});

// script.aculo.us builder.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

var Builder = {
  NODEMAP: {
    AREA: 'map',
    CAPTION: 'table',
    COL: 'table',
    COLGROUP: 'table',
    LEGEND: 'fieldset',
    OPTGROUP: 'select',
    OPTION: 'select',
    PARAM: 'object',
    TBODY: 'table',
    TD: 'table',
    TFOOT: 'table',
    TH: 'table',
    THEAD: 'table',
    TR: 'table'
  },
  // note: For Firefox < 1.5, OPTION and OPTGROUP tags are currently broken,
  //       due to a Firefox bug
  node: function(elementName) {
    elementName = elementName.toUpperCase();

    // try innerHTML approach
    var parentTag = this.NODEMAP[elementName] || 'div';
    var parentElement = document.createElement(parentTag);
    try { // prevent IE "feature": http://dev.rubyonrails.org/ticket/2707
      parentElement.innerHTML = "<" + elementName + "></" + elementName + ">";
    } catch(e) {}
    var element = parentElement.firstChild || null;

    // see if browser added wrapping tags
    if(element && (element.tagName.toUpperCase() != elementName))
      element = element.getElementsByTagName(elementName)[0];

    // fallback to createElement approach
    if(!element) element = document.createElement(elementName);

    // abort if nothing could be created
    if(!element) return;

    // attributes (or text)
    if(arguments[1])
      if(this._isStringOrNumber(arguments[1]) ||
        (arguments[1] instanceof Array) ||
        arguments[1].tagName) {
          this._children(element, arguments[1]);
        } else {
          var attrs = this._attributes(arguments[1]);
          if(attrs.length) {
            try { // prevent IE "feature": http://dev.rubyonrails.org/ticket/2707
              parentElement.innerHTML = "<" +elementName + " " +
                attrs + "></" + elementName + ">";
            } catch(e) {}
            element = parentElement.firstChild || null;
            // workaround firefox 1.0.X bug
            if(!element) {
              element = document.createElement(elementName);
              for(attr in arguments[1])
                element[attr == 'class' ? 'className' : attr] = arguments[1][attr];
            }
            if(element.tagName.toUpperCase() != elementName)
              element = parentElement.getElementsByTagName(elementName)[0];
          }
        }

    // text, or array of children
    if(arguments[2])
      this._children(element, arguments[2]);

     return $(element);
  },
  _text: function(text) {
     return document.createTextNode(text);
  },

  ATTR_MAP: {
    'className': 'class',
    'htmlFor': 'for'
  },

  _attributes: function(attributes) {
    var attrs = [];
    for(attribute in attributes)
      attrs.push((attribute in this.ATTR_MAP ? this.ATTR_MAP[attribute] : attribute) +
          '="' + attributes[attribute].toString().escapeHTML().gsub(/"/,'&quot;') + '"');
    return attrs.join(" ");
  },
  _children: function(element, children) {
    if(children.tagName) {
      element.appendChild(children);
      return;
    }
    if(typeof children=='object') { // array can hold nodes and text
      children.flatten().each( function(e) {
        if(typeof e=='object')
          element.appendChild(e);
        else
          if(Builder._isStringOrNumber(e))
            element.appendChild(Builder._text(e));
      });
    } else
      if(Builder._isStringOrNumber(children))
        element.appendChild(Builder._text(children));
  },
  _isStringOrNumber: function(param) {
    return(typeof param=='string' || typeof param=='number');
  },
  build: function(html) {
    var element = this.node('div');
    $(element).update(html.strip());
    return element.down();
  },
  dump: function(scope) {
    if(typeof scope != 'object' && typeof scope != 'function') scope = window; //global scope

    var tags = ("A ABBR ACRONYM ADDRESS APPLET AREA B BASE BASEFONT BDO BIG BLOCKQUOTE BODY " +
      "BR BUTTON CAPTION CENTER CITE CODE COL COLGROUP DD DEL DFN DIR DIV DL DT EM FIELDSET " +
      "FONT FORM FRAME FRAMESET H1 H2 H3 H4 H5 H6 HEAD HR HTML I IFRAME IMG INPUT INS ISINDEX "+
      "KBD LABEL LEGEND LI LINK MAP MENU META NOFRAMES NOSCRIPT OBJECT OL OPTGROUP OPTION P "+
      "PARAM PRE Q S SAMP SCRIPT SELECT SMALL SPAN STRIKE STRONG STYLE SUB SUP TABLE TBODY TD "+
      "TEXTAREA TFOOT TH THEAD TITLE TR TT U UL VAR").split(/\s+/);

    tags.each( function(tag){
      scope[tag] = function() {
        return Builder.node.apply(Builder, [tag].concat($A(arguments)));
      };
    });
  }
};
// script.aculo.us effects.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// converts rgb() and #xxx to #xxxxxx format,
// returns self (or first argument) if not convertable
String.prototype.parseColor = function() {
  var color = '#';
  if (this.slice(0,4) == 'rgb(') {
    var cols = this.slice(4,this.length-1).split(',');
    var i=0; do { color += parseInt(cols[i]).toColorPart() } while (++i<3);
  } else {
    if (this.slice(0,1) == '#') {
      if (this.length==4) for(var i=1;i<4;i++) color += (this.charAt(i) + this.charAt(i)).toLowerCase();
      if (this.length==7) color = this.toLowerCase();
    }
  }
  return (color.length==7 ? color : (arguments[0] || this));
};

/*--------------------------------------------------------------------------*/

Element.collectTextNodes = function(element) {
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue :
      (node.hasChildNodes() ? Element.collectTextNodes(node) : ''));
  }).flatten().join('');
};

Element.collectTextNodesIgnoreClass = function(element, className) {
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue :
      ((node.hasChildNodes() && !Element.hasClassName(node,className)) ?
        Element.collectTextNodesIgnoreClass(node, className) : ''));
  }).flatten().join('');
};

Element.setContentZoom = function(element, percent) {
  element = $(element);
  element.setStyle({fontSize: (percent/100) + 'em'});
  if (Prototype.Browser.WebKit) window.scrollBy(0,0);
  return element;
};

Element.getInlineOpacity = function(element){
  return $(element).style.opacity || '';
};

Element.forceRerendering = function(element) {
  try {
    element = $(element);
    var n = document.createTextNode(' ');
    element.appendChild(n);
    element.removeChild(n);
  } catch(e) { }
};

/*--------------------------------------------------------------------------*/

var Effect = {
  _elementDoesNotExistError: {
    name: 'ElementDoesNotExistError',
    message: 'The specified DOM element does not exist, but is required for this effect to operate'
  },
  Transitions: {
    linear: Prototype.K,
    sinoidal: function(pos) {
      return (-Math.cos(pos*Math.PI)/2) + .5;
    },
    reverse: function(pos) {
      return 1-pos;
    },
    flicker: function(pos) {
      var pos = ((-Math.cos(pos*Math.PI)/4) + .75) + Math.random()/4;
      return pos > 1 ? 1 : pos;
    },
    wobble: function(pos) {
      return (-Math.cos(pos*Math.PI*(9*pos))/2) + .5;
    },
    pulse: function(pos, pulses) {
      return (-Math.cos((pos*((pulses||5)-.5)*2)*Math.PI)/2) + .5;
    },
    spring: function(pos) {
      return 1 - (Math.cos(pos * 4.5 * Math.PI) * Math.exp(-pos * 6));
    },
    none: function(pos) {
      return 0;
    },
    full: function(pos) {
      return 1;
    }
  },
  DefaultOptions: {
    duration:   1.0,   // seconds
    fps:        100,   // 100= assume 66fps max.
    sync:       false, // true for combining
    from:       0.0,
    to:         1.0,
    delay:      0.0,
    queue:      'parallel'
  },
  tagifyText: function(element) {
    var tagifyStyle = 'position:relative';
    if (Prototype.Browser.IE) tagifyStyle += ';zoom:1';

    element = $(element);
    $A(element.childNodes).each( function(child) {
      if (child.nodeType==3) {
        child.nodeValue.toArray().each( function(character) {
          element.insertBefore(
            new Element('span', {style: tagifyStyle}).update(
              character == ' ' ? String.fromCharCode(160) : character),
              child);
        });
        Element.remove(child);
      }
    });
  },
  multiple: function(element, effect) {
    var elements;
    if (((typeof element == 'object') ||
        Object.isFunction(element)) &&
       (element.length))
      elements = element;
    else
      elements = $(element).childNodes;

    var options = Object.extend({
      speed: 0.1,
      delay: 0.0
    }, arguments[2] || { });
    var masterDelay = options.delay;

    $A(elements).each( function(element, index) {
      new effect(element, Object.extend(options, { delay: index * options.speed + masterDelay }));
    });
  },
  PAIRS: {
    'slide':  ['SlideDown','SlideUp'],
    'blind':  ['BlindDown','BlindUp'],
    'appear': ['Appear','Fade']
  },
  toggle: function(element, effect) {
    element = $(element);
    effect = (effect || 'appear').toLowerCase();
    var options = Object.extend({
      queue: { position:'end', scope:(element.id || 'global'), limit: 1 }
    }, arguments[2] || { });
    Effect[element.visible() ?
      Effect.PAIRS[effect][1] : Effect.PAIRS[effect][0]](element, options);
  }
};

Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create(Enumerable, {
  initialize: function() {
    this.effects  = [];
    this.interval = null;
  },
  _each: function(iterator) {
    this.effects._each(iterator);
  },
  add: function(effect) {
    var timestamp = new Date().getTime();

    var position = Object.isString(effect.options.queue) ?
      effect.options.queue : effect.options.queue.position;

    switch(position) {
      case 'front':
        // move unstarted effects after this effect
        this.effects.findAll(function(e){ return e.state=='idle' }).each( function(e) {
            e.startOn  += effect.finishOn;
            e.finishOn += effect.finishOn;
          });
        break;
      case 'with-last':
        timestamp = this.effects.pluck('startOn').max() || timestamp;
        break;
      case 'end':
        // start effect after last queued effect has finished
        timestamp = this.effects.pluck('finishOn').max() || timestamp;
        break;
    }

    effect.startOn  += timestamp;
    effect.finishOn += timestamp;

    if (!effect.options.queue.limit || (this.effects.length < effect.options.queue.limit))
      this.effects.push(effect);

    if (!this.interval)
      this.interval = setInterval(this.loop.bind(this), 15);
  },
  remove: function(effect) {
    this.effects = this.effects.reject(function(e) { return e==effect });
    if (this.effects.length == 0) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  loop: function() {
    var timePos = new Date().getTime();
    for(var i=0, len=this.effects.length;i<len;i++)
      this.effects[i] && this.effects[i].loop(timePos);
  }
});

Effect.Queues = {
  instances: $H(),
  get: function(queueName) {
    if (!Object.isString(queueName)) return queueName;

    return this.instances.get(queueName) ||
      this.instances.set(queueName, new Effect.ScopedQueue());
  }
};
Effect.Queue = Effect.Queues.get('global');

Effect.Base = Class.create({
  position: null,
  start: function(options) {
    function codeForEvent(options,eventName){
      return (
        (options[eventName+'Internal'] ? 'this.options.'+eventName+'Internal(this);' : '') +
        (options[eventName] ? 'this.options.'+eventName+'(this);' : '')
      );
    }
    if (options && options.transition === false) options.transition = Effect.Transitions.linear;
    this.options      = Object.extend(Object.extend({ },Effect.DefaultOptions), options || { });
    this.currentFrame = 0;
    this.state        = 'idle';
    this.startOn      = this.options.delay*1000;
    this.finishOn     = this.startOn+(this.options.duration*1000);
    this.fromToDelta  = this.options.to-this.options.from;
    this.totalTime    = this.finishOn-this.startOn;
    this.totalFrames  = this.options.fps*this.options.duration;

    this.render = (function() {
      function dispatch(effect, eventName) {
        if (effect.options[eventName + 'Internal'])
          effect.options[eventName + 'Internal'](effect);
        if (effect.options[eventName])
          effect.options[eventName](effect);
      }

      return function(pos) {
        if (this.state === "idle") {
          this.state = "running";
          dispatch(this, 'beforeSetup');
          if (this.setup) this.setup();
          dispatch(this, 'afterSetup');
        }
        if (this.state === "running") {
          pos = (this.options.transition(pos) * this.fromToDelta) + this.options.from;
          this.position = pos;
          dispatch(this, 'beforeUpdate');
          if (this.update) this.update(pos);
          dispatch(this, 'afterUpdate');
        }
      };
    })();

    this.event('beforeStart');
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ?
        'global' : this.options.queue.scope).add(this);
  },
  loop: function(timePos) {
    if (timePos >= this.startOn) {
      if (timePos >= this.finishOn) {
        this.render(1.0);
        this.cancel();
        this.event('beforeFinish');
        if (this.finish) this.finish();
        this.event('afterFinish');
        return;
      }
      var pos   = (timePos - this.startOn) / this.totalTime,
          frame = (pos * this.totalFrames).round();
      if (frame > this.currentFrame) {
        this.render(pos);
        this.currentFrame = frame;
      }
    }
  },
  cancel: function() {
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ?
        'global' : this.options.queue.scope).remove(this);
    this.state = 'finished';
  },
  event: function(eventName) {
    if (this.options[eventName + 'Internal']) this.options[eventName + 'Internal'](this);
    if (this.options[eventName]) this.options[eventName](this);
  },
  inspect: function() {
    var data = $H();
    for(property in this)
      if (!Object.isFunction(this[property])) data.set(property, this[property]);
    return '#<Effect:' + data.inspect() + ',options:' + $H(this.options).inspect() + '>';
  }
});

Effect.Parallel = Class.create(Effect.Base, {
  initialize: function(effects) {
    this.effects = effects || [];
    this.start(arguments[1]);
  },
  update: function(position) {
    this.effects.invoke('render', position);
  },
  finish: function(position) {
    this.effects.each( function(effect) {
      effect.render(1.0);
      effect.cancel();
      effect.event('beforeFinish');
      if (effect.finish) effect.finish(position);
      effect.event('afterFinish');
    });
  }
});

Effect.Tween = Class.create(Effect.Base, {
  initialize: function(object, from, to) {
    object = Object.isString(object) ? $(object) : object;
    var args = $A(arguments), method = args.last(),
      options = args.length == 5 ? args[3] : null;
    this.method = Object.isFunction(method) ? method.bind(object) :
      Object.isFunction(object[method]) ? object[method].bind(object) :
      function(value) { object[method] = value };
    this.start(Object.extend({ from: from, to: to }, options || { }));
  },
  update: function(position) {
    this.method(position);
  }
});

Effect.Event = Class.create(Effect.Base, {
  initialize: function() {
    this.start(Object.extend({ duration: 0 }, arguments[0] || { }));
  },
  update: Prototype.emptyFunction
});

Effect.Opacity = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    // make this work on IE on elements without 'layout'
    if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
      this.element.setStyle({zoom: 1});
    var options = Object.extend({
      from: this.element.getOpacity() || 0.0,
      to:   1.0
    }, arguments[1] || { });
    this.start(options);
  },
  update: function(position) {
    this.element.setOpacity(position);
  }
});

Effect.Move = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      x:    0,
      y:    0,
      mode: 'relative'
    }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    this.element.makePositioned();
    this.originalLeft = parseFloat(this.element.getStyle('left') || '0');
    this.originalTop  = parseFloat(this.element.getStyle('top')  || '0');
    if (this.options.mode == 'absolute') {
      this.options.x = this.options.x - this.originalLeft;
      this.options.y = this.options.y - this.originalTop;
    }
  },
  update: function(position) {
    this.element.setStyle({
      left: (this.options.x  * position + this.originalLeft).round() + 'px',
      top:  (this.options.y  * position + this.originalTop).round()  + 'px'
    });
  }
});

// for backwards compatibility
Effect.MoveBy = function(element, toTop, toLeft) {
  return new Effect.Move(element,
    Object.extend({ x: toLeft, y: toTop }, arguments[3] || { }));
};

Effect.Scale = Class.create(Effect.Base, {
  initialize: function(element, percent) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      scaleX: true,
      scaleY: true,
      scaleContent: true,
      scaleFromCenter: false,
      scaleMode: 'box',        // 'box' or 'contents' or { } with provided values
      scaleFrom: 100.0,
      scaleTo:   percent
    }, arguments[2] || { });
    this.start(options);
  },
  setup: function() {
    this.restoreAfterFinish = this.options.restoreAfterFinish || false;
    this.elementPositioning = this.element.getStyle('position');

    this.originalStyle = { };
    ['top','left','width','height','fontSize'].each( function(k) {
      this.originalStyle[k] = this.element.style[k];
    }.bind(this));

    this.originalTop  = this.element.offsetTop;
    this.originalLeft = this.element.offsetLeft;

    var fontSize = this.element.getStyle('font-size') || '100%';
    ['em','px','%','pt'].each( function(fontSizeType) {
      if (fontSize.indexOf(fontSizeType)>0) {
        this.fontSize     = parseFloat(fontSize);
        this.fontSizeType = fontSizeType;
      }
    }.bind(this));

    this.factor = (this.options.scaleTo - this.options.scaleFrom)/100;

    this.dims = null;
    if (this.options.scaleMode=='box')
      this.dims = [this.element.offsetHeight, this.element.offsetWidth];
    if (/^content/.test(this.options.scaleMode))
      this.dims = [this.element.scrollHeight, this.element.scrollWidth];
    if (!this.dims)
      this.dims = [this.options.scaleMode.originalHeight,
                   this.options.scaleMode.originalWidth];
  },
  update: function(position) {
    var currentScale = (this.options.scaleFrom/100.0) + (this.factor * position);
    if (this.options.scaleContent && this.fontSize)
      this.element.setStyle({fontSize: this.fontSize * currentScale + this.fontSizeType });
    this.setDimensions(this.dims[0] * currentScale, this.dims[1] * currentScale);
  },
  finish: function(position) {
    if (this.restoreAfterFinish) this.element.setStyle(this.originalStyle);
  },
  setDimensions: function(height, width) {
    var d = { };
    if (this.options.scaleX) d.width = width.round() + 'px';
    if (this.options.scaleY) d.height = height.round() + 'px';
    if (this.options.scaleFromCenter) {
      var topd  = (height - this.dims[0])/2;
      var leftd = (width  - this.dims[1])/2;
      if (this.elementPositioning == 'absolute') {
        if (this.options.scaleY) d.top = this.originalTop-topd + 'px';
        if (this.options.scaleX) d.left = this.originalLeft-leftd + 'px';
      } else {
        if (this.options.scaleY) d.top = -topd + 'px';
        if (this.options.scaleX) d.left = -leftd + 'px';
      }
    }
    this.element.setStyle(d);
  }
});

Effect.Highlight = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({ startcolor: '#ffff99' }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    // Prevent executing on elements not in the layout flow
    if (this.element.getStyle('display')=='none') { this.cancel(); return; }
    // Disable background image during the effect
    this.oldStyle = { };
    if (!this.options.keepBackgroundImage) {
      this.oldStyle.backgroundImage = this.element.getStyle('background-image');
      this.element.setStyle({backgroundImage: 'none'});
    }
    if (!this.options.endcolor)
      this.options.endcolor = this.element.getStyle('background-color').parseColor('#ffffff');
    if (!this.options.restorecolor)
      this.options.restorecolor = this.element.getStyle('background-color');
    // init color calculations
    this._base  = $R(0,2).map(function(i){ return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16) }.bind(this));
    this._delta = $R(0,2).map(function(i){ return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i] }.bind(this));
  },
  update: function(position) {
    this.element.setStyle({backgroundColor: $R(0,2).inject('#',function(m,v,i){
      return m+((this._base[i]+(this._delta[i]*position)).round().toColorPart()); }.bind(this)) });
  },
  finish: function() {
    this.element.setStyle(Object.extend(this.oldStyle, {
      backgroundColor: this.options.restorecolor
    }));
  }
});

Effect.ScrollTo = function(element) {
  var options = arguments[1] || { },
  scrollOffsets = document.viewport.getScrollOffsets(),
  elementOffsets = $(element).cumulativeOffset();

  if (options.offset) elementOffsets[1] += options.offset;

  return new Effect.Tween(null,
    scrollOffsets.top,
    elementOffsets[1],
    options,
    function(p){ scrollTo(scrollOffsets.left, p.round()); }
  );
};

/* ------------- combination effects ------------- */

Effect.Fade = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  var options = Object.extend({
    from: element.getOpacity() || 1.0,
    to:   0.0,
    afterFinishInternal: function(effect) {
      if (effect.options.to!=0) return;
      effect.element.hide().setStyle({opacity: oldOpacity});
    }
  }, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Appear = function(element) {
  element = $(element);
  var options = Object.extend({
  from: (element.getStyle('display') == 'none' ? 0.0 : element.getOpacity() || 0.0),
  to:   1.0,
  // force Safari to render floated elements properly
  afterFinishInternal: function(effect) {
    effect.element.forceRerendering();
  },
  beforeSetup: function(effect) {
    effect.element.setOpacity(effect.options.from).show();
  }}, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Puff = function(element) {
  element = $(element);
  var oldStyle = {
    opacity: element.getInlineOpacity(),
    position: element.getStyle('position'),
    top:  element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height
  };
  return new Effect.Parallel(
   [ new Effect.Scale(element, 200,
      { sync: true, scaleFromCenter: true, scaleContent: true, restoreAfterFinish: true }),
     new Effect.Opacity(element, { sync: true, to: 0.0 } ) ],
     Object.extend({ duration: 1.0,
      beforeSetupInternal: function(effect) {
        Position.absolutize(effect.effects[0].element);
      },
      afterFinishInternal: function(effect) {
         effect.effects[0].element.hide().setStyle(oldStyle); }
     }, arguments[1] || { })
   );
};

Effect.BlindUp = function(element) {
  element = $(element);
  element.makeClipping();
  return new Effect.Scale(element, 0,
    Object.extend({ scaleContent: false,
      scaleX: false,
      restoreAfterFinish: true,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping();
      }
    }, arguments[1] || { })
  );
};

Effect.BlindDown = function(element) {
  element = $(element);
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({
    scaleContent: false,
    scaleX: false,
    scaleFrom: 0,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makeClipping().setStyle({height: '0px'}).show();
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping();
    }
  }, arguments[1] || { }));
};

Effect.SwitchOff = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  return new Effect.Appear(element, Object.extend({
    duration: 0.4,
    from: 0,
    transition: Effect.Transitions.flicker,
    afterFinishInternal: function(effect) {
      new Effect.Scale(effect.element, 1, {
        duration: 0.3, scaleFromCenter: true,
        scaleX: false, scaleContent: false, restoreAfterFinish: true,
        beforeSetup: function(effect) {
          effect.element.makePositioned().makeClipping();
        },
        afterFinishInternal: function(effect) {
          effect.element.hide().undoClipping().undoPositioned().setStyle({opacity: oldOpacity});
        }
      });
    }
  }, arguments[1] || { }));
};

Effect.DropOut = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left'),
    opacity: element.getInlineOpacity() };
  return new Effect.Parallel(
    [ new Effect.Move(element, {x: 0, y: 100, sync: true }),
      new Effect.Opacity(element, { sync: true, to: 0.0 }) ],
    Object.extend(
      { duration: 0.5,
        beforeSetup: function(effect) {
          effect.effects[0].element.makePositioned();
        },
        afterFinishInternal: function(effect) {
          effect.effects[0].element.hide().undoPositioned().setStyle(oldStyle);
        }
      }, arguments[1] || { }));
};

Effect.Shake = function(element) {
  element = $(element);
  var options = Object.extend({
    distance: 20,
    duration: 0.5
  }, arguments[1] || {});
  var distance = parseFloat(options.distance);
  var split = parseFloat(options.duration) / 10.0;
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left') };
    return new Effect.Move(element,
      { x:  distance, y: 0, duration: split, afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance, y: 0, duration: split, afterFinishInternal: function(effect) {
        effect.element.undoPositioned().setStyle(oldStyle);
  }}); }}); }}); }}); }}); }});
};

Effect.SlideDown = function(element) {
  element = $(element).cleanWhitespace();
  // SlideDown need to have the content of the element wrapped in a container element with fixed height!
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({
    scaleContent: false,
    scaleX: false,
    scaleFrom: window.opera ? 0 : 1,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().setStyle({height: '0px'}).show();
    },
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' });
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom}); }
    }, arguments[1] || { })
  );
};

Effect.SlideUp = function(element) {
  element = $(element).cleanWhitespace();
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, window.opera ? 0 : 1,
   Object.extend({ scaleContent: false,
    scaleX: false,
    scaleMode: 'box',
    scaleFrom: 100,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().show();
    },
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' });
    },
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom});
    }
   }, arguments[1] || { })
  );
};

// Bug in opera makes the TD containing this element expand for a instance after finish
Effect.Squish = function(element) {
  return new Effect.Scale(element, window.opera ? 1 : 0, {
    restoreAfterFinish: true,
    beforeSetup: function(effect) {
      effect.element.makeClipping();
    },
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping();
    }
  });
};

Effect.Grow = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.full
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var initialMoveX, initialMoveY;
  var moveX, moveY;

  switch (options.direction) {
    case 'top-left':
      initialMoveX = initialMoveY = moveX = moveY = 0;
      break;
    case 'top-right':
      initialMoveX = dims.width;
      initialMoveY = moveY = 0;
      moveX = -dims.width;
      break;
    case 'bottom-left':
      initialMoveX = moveX = 0;
      initialMoveY = dims.height;
      moveY = -dims.height;
      break;
    case 'bottom-right':
      initialMoveX = dims.width;
      initialMoveY = dims.height;
      moveX = -dims.width;
      moveY = -dims.height;
      break;
    case 'center':
      initialMoveX = dims.width / 2;
      initialMoveY = dims.height / 2;
      moveX = -dims.width / 2;
      moveY = -dims.height / 2;
      break;
  }

  return new Effect.Move(element, {
    x: initialMoveX,
    y: initialMoveY,
    duration: 0.01,
    beforeSetup: function(effect) {
      effect.element.hide().makeClipping().makePositioned();
    },
    afterFinishInternal: function(effect) {
      new Effect.Parallel(
        [ new Effect.Opacity(effect.element, { sync: true, to: 1.0, from: 0.0, transition: options.opacityTransition }),
          new Effect.Move(effect.element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition }),
          new Effect.Scale(effect.element, 100, {
            scaleMode: { originalHeight: dims.height, originalWidth: dims.width },
            sync: true, scaleFrom: window.opera ? 1 : 0, transition: options.scaleTransition, restoreAfterFinish: true})
        ], Object.extend({
             beforeSetup: function(effect) {
               effect.effects[0].element.setStyle({height: '0px'}).show();
             },
             afterFinishInternal: function(effect) {
               effect.effects[0].element.undoClipping().undoPositioned().setStyle(oldStyle);
             }
           }, options)
      );
    }
  });
};

Effect.Shrink = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.none
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var moveX, moveY;

  switch (options.direction) {
    case 'top-left':
      moveX = moveY = 0;
      break;
    case 'top-right':
      moveX = dims.width;
      moveY = 0;
      break;
    case 'bottom-left':
      moveX = 0;
      moveY = dims.height;
      break;
    case 'bottom-right':
      moveX = dims.width;
      moveY = dims.height;
      break;
    case 'center':
      moveX = dims.width / 2;
      moveY = dims.height / 2;
      break;
  }

  return new Effect.Parallel(
    [ new Effect.Opacity(element, { sync: true, to: 0.0, from: 1.0, transition: options.opacityTransition }),
      new Effect.Scale(element, window.opera ? 1 : 0, { sync: true, transition: options.scaleTransition, restoreAfterFinish: true}),
      new Effect.Move(element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition })
    ], Object.extend({
         beforeStartInternal: function(effect) {
           effect.effects[0].element.makePositioned().makeClipping();
         },
         afterFinishInternal: function(effect) {
           effect.effects[0].element.hide().undoClipping().undoPositioned().setStyle(oldStyle); }
       }, options)
  );
};

Effect.Pulsate = function(element) {
  element = $(element);
  var options    = arguments[1] || { },
    oldOpacity = element.getInlineOpacity(),
    transition = options.transition || Effect.Transitions.linear,
    reverser   = function(pos){
      return 1 - transition((-Math.cos((pos*(options.pulses||5)*2)*Math.PI)/2) + .5);
    };

  return new Effect.Opacity(element,
    Object.extend(Object.extend({  duration: 2.0, from: 0,
      afterFinishInternal: function(effect) { effect.element.setStyle({opacity: oldOpacity}); }
    }, options), {transition: reverser}));
};

Effect.Fold = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height };
  element.makeClipping();
  return new Effect.Scale(element, 5, Object.extend({
    scaleContent: false,
    scaleX: false,
    afterFinishInternal: function(effect) {
    new Effect.Scale(element, 1, {
      scaleContent: false,
      scaleY: false,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping().setStyle(oldStyle);
      } });
  }}, arguments[1] || { }));
};

Effect.Morph = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      style: { }
    }, arguments[1] || { });

    if (!Object.isString(options.style)) this.style = $H(options.style);
    else {
      if (options.style.include(':'))
        this.style = options.style.parseStyle();
      else {
        this.element.addClassName(options.style);
        this.style = $H(this.element.getStyles());
        this.element.removeClassName(options.style);
        var css = this.element.getStyles();
        this.style = this.style.reject(function(style) {
          return style.value == css[style.key];
        });
        options.afterFinishInternal = function(effect) {
          effect.element.addClassName(effect.options.style);
          effect.transforms.each(function(transform) {
            effect.element.style[transform.style] = '';
          });
        };
      }
    }
    this.start(options);
  },

  setup: function(){
    function parseColor(color){
      if (!color || ['rgba(0, 0, 0, 0)','transparent'].include(color)) color = '#ffffff';
      color = color.parseColor();
      return $R(0,2).map(function(i){
        return parseInt( color.slice(i*2+1,i*2+3), 16 );
      });
    }
    this.transforms = this.style.map(function(pair){
      var property = pair[0], value = pair[1], unit = null;

      if (value.parseColor('#zzzzzz') != '#zzzzzz') {
        value = value.parseColor();
        unit  = 'color';
      } else if (property == 'opacity') {
        value = parseFloat(value);
        if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
          this.element.setStyle({zoom: 1});
      } else if (Element.CSS_LENGTH.test(value)) {
          var components = value.match(/^([\+\-]?[0-9\.]+)(.*)$/);
          value = parseFloat(components[1]);
          unit = (components.length == 3) ? components[2] : null;
      }

      var originalValue = this.element.getStyle(property);
      return {
        style: property.camelize(),
        originalValue: unit=='color' ? parseColor(originalValue) : parseFloat(originalValue || 0),
        targetValue: unit=='color' ? parseColor(value) : value,
        unit: unit
      };
    }.bind(this)).reject(function(transform){
      return (
        (transform.originalValue == transform.targetValue) ||
        (
          transform.unit != 'color' &&
          (isNaN(transform.originalValue) || isNaN(transform.targetValue))
        )
      );
    });
  },
  update: function(position) {
    var style = { }, transform, i = this.transforms.length;
    while(i--)
      style[(transform = this.transforms[i]).style] =
        transform.unit=='color' ? '#'+
          (Math.round(transform.originalValue[0]+
            (transform.targetValue[0]-transform.originalValue[0])*position)).toColorPart() +
          (Math.round(transform.originalValue[1]+
            (transform.targetValue[1]-transform.originalValue[1])*position)).toColorPart() +
          (Math.round(transform.originalValue[2]+
            (transform.targetValue[2]-transform.originalValue[2])*position)).toColorPart() :
        (transform.originalValue +
          (transform.targetValue - transform.originalValue) * position).toFixed(3) +
            (transform.unit === null ? '' : transform.unit);
    this.element.setStyle(style, true);
  }
});

Effect.Transform = Class.create({
  initialize: function(tracks){
    this.tracks  = [];
    this.options = arguments[1] || { };
    this.addTracks(tracks);
  },
  addTracks: function(tracks){
    tracks.each(function(track){
      track = $H(track);
      var data = track.values().first();
      this.tracks.push($H({
        ids:     track.keys().first(),
        effect:  Effect.Morph,
        options: { style: data }
      }));
    }.bind(this));
    return this;
  },
  play: function(){
    return new Effect.Parallel(
      this.tracks.map(function(track){
        var ids = track.get('ids'), effect = track.get('effect'), options = track.get('options');
        var elements = [$(ids) || $$(ids)].flatten();
        return elements.map(function(e){ return new effect(e, Object.extend({ sync:true }, options)) });
      }).flatten(),
      this.options
    );
  }
});

Element.CSS_PROPERTIES = $w(
  'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' +
  'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
  'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
  'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
  'fontSize fontWeight height left letterSpacing lineHeight ' +
  'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
  'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
  'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
  'right textIndent top width wordSpacing zIndex');

Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;

String.__parseStyleElement = document.createElement('div');
String.prototype.parseStyle = function(){
  var style, styleRules = $H();
  if (Prototype.Browser.WebKit)
    style = new Element('div',{style:this}).style;
  else {
    String.__parseStyleElement.innerHTML = '<div style="' + this + '"></div>';
    style = String.__parseStyleElement.childNodes[0].style;
  }

  Element.CSS_PROPERTIES.each(function(property){
    if (style[property]) styleRules.set(property, style[property]);
  });

  if (Prototype.Browser.IE && this.include('opacity'))
    styleRules.set('opacity', this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);

  return styleRules;
};

if (document.defaultView && document.defaultView.getComputedStyle) {
  Element.getStyles = function(element) {
    var css = document.defaultView.getComputedStyle($(element), null);
    return Element.CSS_PROPERTIES.inject({ }, function(styles, property) {
      styles[property] = css[property];
      return styles;
    });
  };
} else {
  Element.getStyles = function(element) {
    element = $(element);
    var css = element.currentStyle, styles;
    styles = Element.CSS_PROPERTIES.inject({ }, function(results, property) {
      results[property] = css[property];
      return results;
    });
    if (!styles.opacity) styles.opacity = element.getOpacity();
    return styles;
  };
}

Effect.Methods = {
  morph: function(element, style) {
    element = $(element);
    new Effect.Morph(element, Object.extend({ style: style }, arguments[2] || { }));
    return element;
  },
  visualEffect: function(element, effect, options) {
    element = $(element);
    var s = effect.dasherize().camelize(), klass = s.charAt(0).toUpperCase() + s.substring(1);
    new Effect[klass](element, options);
    return element;
  },
  highlight: function(element, options) {
    element = $(element);
    new Effect.Highlight(element, options);
    return element;
  }
};

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+
  'pulsate shake puff squish switchOff dropOut').each(
  function(effect) {
    Effect.Methods[effect] = function(element, options){
      element = $(element);
      Effect[effect.charAt(0).toUpperCase() + effect.substring(1)](element, options);
      return element;
    };
  }
);

$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each(
  function(f) { Effect.Methods[f] = Element[f]; }
);

Element.addMethods(Effect.Methods);
// script.aculo.us dragdrop.js v1.9.0, Thu Dec 23 16:54:48 -0500 2010

// Copyright (c) 2005-2010 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

if(Object.isUndefined(Effect))
  throw("dragdrop.js requires including script.aculo.us' effects.js library");

var Droppables = {
  drops: [],

  remove: function(element) {
    this.drops = this.drops.reject(function(d) { return d.element==$(element) });
  },

  add: function(element) {
    element = $(element);
    var options = Object.extend({
      greedy:     true,
      hoverclass: null,
      tree:       false
    }, arguments[1] || { });

    // cache containers
    if(options.containment) {
      options._containers = [];
      var containment = options.containment;
      if(Object.isArray(containment)) {
        containment.each( function(c) { options._containers.push($(c)) });
      } else {
        options._containers.push($(containment));
      }
    }

    if(options.accept) options.accept = [options.accept].flatten();

    Element.makePositioned(element); // fix IE
    options.element = element;

    this.drops.push(options);
  },

  findDeepestChild: function(drops) {
    deepest = drops[0];

    for (i = 1; i < drops.length; ++i)
      if (Element.isParent(drops[i].element, deepest.element))
        deepest = drops[i];

    return deepest;
  },

  isContained: function(element, drop) {
    var containmentNode;
    if(drop.tree) {
      containmentNode = element.treeNode;
    } else {
      containmentNode = element.parentNode;
    }
    return drop._containers.detect(function(c) { return containmentNode == c });
  },

  isAffected: function(point, element, drop) {
    return (
      (drop.element!=element) &&
      ((!drop._containers) ||
        this.isContained(element, drop)) &&
      ((!drop.accept) ||
        (Element.classNames(element).detect(
          function(v) { return drop.accept.include(v) } ) )) &&
      Position.within(drop.element, point[0], point[1]) );
  },

  deactivate: function(drop) {
    if(drop.hoverclass)
      Element.removeClassName(drop.element, drop.hoverclass);
    this.last_active = null;
  },

  activate: function(drop) {
    if(drop.hoverclass)
      Element.addClassName(drop.element, drop.hoverclass);
    this.last_active = drop;
  },

  show: function(point, element) {
    if(!this.drops.length) return;
    var drop, affected = [];

    this.drops.each( function(drop) {
      if(Droppables.isAffected(point, element, drop))
        affected.push(drop);
    });

    if(affected.length>0)
      drop = Droppables.findDeepestChild(affected);

    if(this.last_active && this.last_active != drop) this.deactivate(this.last_active);
    if (drop) {
      Position.within(drop.element, point[0], point[1]);
      if(drop.onHover)
        drop.onHover(element, drop.element, Position.overlap(drop.overlap, drop.element));

      if (drop != this.last_active) Droppables.activate(drop);
    }
  },

  fire: function(event, element) {
    if(!this.last_active) return;
    Position.prepare();

    if (this.isAffected([Event.pointerX(event), Event.pointerY(event)], element, this.last_active))
      if (this.last_active.onDrop) {
        this.last_active.onDrop(element, this.last_active.element, event);
        return true;
      }
  },

  reset: function() {
    if(this.last_active)
      this.deactivate(this.last_active);
  }
};

var Draggables = {
  drags: [],
  observers: [],

  register: function(draggable) {
    if(this.drags.length == 0) {
      this.eventMouseUp   = this.endDrag.bindAsEventListener(this);
      this.eventMouseMove = this.updateDrag.bindAsEventListener(this);
      this.eventKeypress  = this.keyPress.bindAsEventListener(this);

      Event.observe(document, "mouseup", this.eventMouseUp);
      Event.observe(document, "mousemove", this.eventMouseMove);
      Event.observe(document, "keypress", this.eventKeypress);
    }
    this.drags.push(draggable);
  },

  unregister: function(draggable) {
    this.drags = this.drags.reject(function(d) { return d==draggable });
    if(this.drags.length == 0) {
      Event.stopObserving(document, "mouseup", this.eventMouseUp);
      Event.stopObserving(document, "mousemove", this.eventMouseMove);
      Event.stopObserving(document, "keypress", this.eventKeypress);
    }
  },

  activate: function(draggable) {
    if(draggable.options.delay) {
      this._timeout = setTimeout(function() {
        Draggables._timeout = null;
        window.focus();
        Draggables.activeDraggable = draggable;
      }.bind(this), draggable.options.delay);
    } else {
      window.focus(); // allows keypress events if window isn't currently focused, fails for Safari
      this.activeDraggable = draggable;
    }
  },

  deactivate: function() {
    this.activeDraggable = null;
  },

  updateDrag: function(event) {
    if(!this.activeDraggable) return;
    var pointer = [Event.pointerX(event), Event.pointerY(event)];
    // Mozilla-based browsers fire successive mousemove events with
    // the same coordinates, prevent needless redrawing (moz bug?)
    if(this._lastPointer && (this._lastPointer.inspect() == pointer.inspect())) return;
    this._lastPointer = pointer;

    this.activeDraggable.updateDrag(event, pointer);
  },

  endDrag: function(event) {
    if(this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    if(!this.activeDraggable) return;
    this._lastPointer = null;
    this.activeDraggable.endDrag(event);
    this.activeDraggable = null;
  },

  keyPress: function(event) {
    if(this.activeDraggable)
      this.activeDraggable.keyPress(event);
  },

  addObserver: function(observer) {
    this.observers.push(observer);
    this._cacheObserverCallbacks();
  },

  removeObserver: function(element) {  // element instead of observer fixes mem leaks
    this.observers = this.observers.reject( function(o) { return o.element==element });
    this._cacheObserverCallbacks();
  },

  notify: function(eventName, draggable, event) {  // 'onStart', 'onEnd', 'onDrag'
    if(this[eventName+'Count'] > 0)
      this.observers.each( function(o) {
        if(o[eventName]) o[eventName](eventName, draggable, event);
      });
    if(draggable.options[eventName]) draggable.options[eventName](draggable, event);
  },

  _cacheObserverCallbacks: function() {
    ['onStart','onEnd','onDrag'].each( function(eventName) {
      Draggables[eventName+'Count'] = Draggables.observers.select(
        function(o) { return o[eventName]; }
      ).length;
    });
  }
};

/*--------------------------------------------------------------------------*/

var Draggable = Class.create({
  initialize: function(element) {
    var defaults = {
      handle: false,
      reverteffect: function(element, top_offset, left_offset) {
        var dur = Math.sqrt(Math.abs(top_offset^2)+Math.abs(left_offset^2))*0.02;
        new Effect.Move(element, { x: -left_offset, y: -top_offset, duration: dur,
          queue: {scope:'_draggable', position:'end'}
        });
      },
      endeffect: function(element) {
        var toOpacity = Object.isNumber(element._opacity) ? element._opacity : 1.0;
        new Effect.Opacity(element, {duration:0.2, from:0.7, to:toOpacity,
          queue: {scope:'_draggable', position:'end'},
          afterFinish: function(){
            Draggable._dragging[element] = false
          }
        });
      },
      zindex: 1000,
      revert: false,
      quiet: false,
      scroll: false,
      scrollSensitivity: 20,
      scrollSpeed: 15,
      snap: false,  // false, or xy or [x,y] or function(x,y){ return [x,y] }
      delay: 0
    };

    if(!arguments[1] || Object.isUndefined(arguments[1].endeffect))
      Object.extend(defaults, {
        starteffect: function(element) {
          element._opacity = Element.getOpacity(element);
          Draggable._dragging[element] = true;
          new Effect.Opacity(element, {duration:0.2, from:element._opacity, to:0.7});
        }
      });

    var options = Object.extend(defaults, arguments[1] || { });

    this.element = $(element);

    if(options.handle && Object.isString(options.handle))
      this.handle = this.element.down('.'+options.handle, 0);

    if(!this.handle) this.handle = $(options.handle);
    if(!this.handle) this.handle = this.element;

    if(options.scroll && !options.scroll.scrollTo && !options.scroll.outerHTML) {
      options.scroll = $(options.scroll);
      this._isScrollChild = Element.childOf(this.element, options.scroll);
    }

    Element.makePositioned(this.element); // fix IE

    this.options  = options;
    this.dragging = false;

    this.eventMouseDown = this.initDrag.bindAsEventListener(this);
    Event.observe(this.handle, "mousedown", this.eventMouseDown);

    Draggables.register(this);
  },

  destroy: function() {
    Event.stopObserving(this.handle, "mousedown", this.eventMouseDown);
    Draggables.unregister(this);
  },

  currentDelta: function() {
    return([
      parseInt(Element.getStyle(this.element,'left') || '0'),
      parseInt(Element.getStyle(this.element,'top') || '0')]);
  },

  initDrag: function(event) {
    if(!Object.isUndefined(Draggable._dragging[this.element]) &&
      Draggable._dragging[this.element]) return;
    if(Event.isLeftClick(event)) {
      // abort on form elements, fixes a Firefox issue
      var src = Event.element(event);
      if((tag_name = src.tagName.toUpperCase()) && (
        tag_name=='INPUT' ||
        tag_name=='SELECT' ||
        tag_name=='OPTION' ||
        tag_name=='BUTTON' ||
        tag_name=='TEXTAREA')) return;

      var pointer = [Event.pointerX(event), Event.pointerY(event)];
      var pos     = this.element.cumulativeOffset();
      this.offset = [0,1].map( function(i) { return (pointer[i] - pos[i]) });

      Draggables.activate(this);
      Event.stop(event);
    }
  },

  startDrag: function(event) {
    this.dragging = true;
    if(!this.delta)
      this.delta = this.currentDelta();

    if(this.options.zindex) {
      this.originalZ = parseInt(Element.getStyle(this.element,'z-index') || 0);
      this.element.style.zIndex = this.options.zindex;
    }

    if(this.options.ghosting) {
      this._clone = this.element.cloneNode(true);
      this._originallyAbsolute = (this.element.getStyle('position') == 'absolute');
      if (!this._originallyAbsolute)
        Position.absolutize(this.element);
      this.element.parentNode.insertBefore(this._clone, this.element);
    }

    if(this.options.scroll) {
      if (this.options.scroll == window) {
        var where = this._getWindowScroll(this.options.scroll);
        this.originalScrollLeft = where.left;
        this.originalScrollTop = where.top;
      } else {
        this.originalScrollLeft = this.options.scroll.scrollLeft;
        this.originalScrollTop = this.options.scroll.scrollTop;
      }
    }

    Draggables.notify('onStart', this, event);

    if(this.options.starteffect) this.options.starteffect(this.element);
  },

  updateDrag: function(event, pointer) {
    if(!this.dragging) this.startDrag(event);

    if(!this.options.quiet){
      Position.prepare();
      Droppables.show(pointer, this.element);
    }

    Draggables.notify('onDrag', this, event);

    this.draw(pointer);
    if(this.options.change) this.options.change(this);

    if(this.options.scroll) {
      this.stopScrolling();

      var p;
      if (this.options.scroll == window) {
        with(this._getWindowScroll(this.options.scroll)) { p = [ left, top, left+width, top+height ]; }
      } else {
        p = Position.page(this.options.scroll).toArray();
        p[0] += this.options.scroll.scrollLeft + Position.deltaX;
        p[1] += this.options.scroll.scrollTop + Position.deltaY;
        p.push(p[0]+this.options.scroll.offsetWidth);
        p.push(p[1]+this.options.scroll.offsetHeight);
      }
      var speed = [0,0];
      if(pointer[0] < (p[0]+this.options.scrollSensitivity)) speed[0] = pointer[0]-(p[0]+this.options.scrollSensitivity);
      if(pointer[1] < (p[1]+this.options.scrollSensitivity)) speed[1] = pointer[1]-(p[1]+this.options.scrollSensitivity);
      if(pointer[0] > (p[2]-this.options.scrollSensitivity)) speed[0] = pointer[0]-(p[2]-this.options.scrollSensitivity);
      if(pointer[1] > (p[3]-this.options.scrollSensitivity)) speed[1] = pointer[1]-(p[3]-this.options.scrollSensitivity);
      this.startScrolling(speed);
    }

    // fix AppleWebKit rendering
    if(Prototype.Browser.WebKit) window.scrollBy(0,0);

    Event.stop(event);
  },

  finishDrag: function(event, success) {
    this.dragging = false;

    if(this.options.quiet){
      Position.prepare();
      var pointer = [Event.pointerX(event), Event.pointerY(event)];
      Droppables.show(pointer, this.element);
    }

    if(this.options.ghosting) {
      if (!this._originallyAbsolute)
        Position.relativize(this.element);
      delete this._originallyAbsolute;
      Element.remove(this._clone);
      this._clone = null;
    }

    var dropped = false;
    if(success) {
      dropped = Droppables.fire(event, this.element);
      if (!dropped) dropped = false;
    }
    if(dropped && this.options.onDropped) this.options.onDropped(this.element);
    Draggables.notify('onEnd', this, event);

    var revert = this.options.revert;
    if(revert && Object.isFunction(revert)) revert = revert(this.element);

    var d = this.currentDelta();
    if(revert && this.options.reverteffect) {
      if (dropped == 0 || revert != 'failure')
        this.options.reverteffect(this.element,
          d[1]-this.delta[1], d[0]-this.delta[0]);
    } else {
      this.delta = d;
    }

    if(this.options.zindex)
      this.element.style.zIndex = this.originalZ;

    if(this.options.endeffect)
      this.options.endeffect(this.element);

    Draggables.deactivate(this);
    Droppables.reset();
  },

  keyPress: function(event) {
    if(event.keyCode!=Event.KEY_ESC) return;
    this.finishDrag(event, false);
    Event.stop(event);
  },

  endDrag: function(event) {
    if(!this.dragging) return;
    this.stopScrolling();
    this.finishDrag(event, true);
    Event.stop(event);
  },

  draw: function(point) {
    var pos = this.element.cumulativeOffset();
    if(this.options.ghosting) {
      var r   = Position.realOffset(this.element);
      pos[0] += r[0] - Position.deltaX; pos[1] += r[1] - Position.deltaY;
    }

    var d = this.currentDelta();
    pos[0] -= d[0]; pos[1] -= d[1];

    if(this.options.scroll && (this.options.scroll != window && this._isScrollChild)) {
      pos[0] -= this.options.scroll.scrollLeft-this.originalScrollLeft;
      pos[1] -= this.options.scroll.scrollTop-this.originalScrollTop;
    }

    var p = [0,1].map(function(i){
      return (point[i]-pos[i]-this.offset[i])
    }.bind(this));

    if(this.options.snap) {
      if(Object.isFunction(this.options.snap)) {
        p = this.options.snap(p[0],p[1],this);
      } else {
      if(Object.isArray(this.options.snap)) {
        p = p.map( function(v, i) {
          return (v/this.options.snap[i]).round()*this.options.snap[i] }.bind(this));
      } else {
        p = p.map( function(v) {
          return (v/this.options.snap).round()*this.options.snap }.bind(this));
      }
    }}

    var style = this.element.style;
    if((!this.options.constraint) || (this.options.constraint=='horizontal'))
      style.left = p[0] + "px";
    if((!this.options.constraint) || (this.options.constraint=='vertical'))
      style.top  = p[1] + "px";

    if(style.visibility=="hidden") style.visibility = ""; // fix gecko rendering
  },

  stopScrolling: function() {
    if(this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
      Draggables._lastScrollPointer = null;
    }
  },

  startScrolling: function(speed) {
    if(!(speed[0] || speed[1])) return;
    this.scrollSpeed = [speed[0]*this.options.scrollSpeed,speed[1]*this.options.scrollSpeed];
    this.lastScrolled = new Date();
    this.scrollInterval = setInterval(this.scroll.bind(this), 10);
  },

  scroll: function() {
    var current = new Date();
    var delta = current - this.lastScrolled;
    this.lastScrolled = current;
    if(this.options.scroll == window) {
      with (this._getWindowScroll(this.options.scroll)) {
        if (this.scrollSpeed[0] || this.scrollSpeed[1]) {
          var d = delta / 1000;
          this.options.scroll.scrollTo( left + d*this.scrollSpeed[0], top + d*this.scrollSpeed[1] );
        }
      }
    } else {
      this.options.scroll.scrollLeft += this.scrollSpeed[0] * delta / 1000;
      this.options.scroll.scrollTop  += this.scrollSpeed[1] * delta / 1000;
    }

    Position.prepare();
    Droppables.show(Draggables._lastPointer, this.element);
    Draggables.notify('onDrag', this);
    if (this._isScrollChild) {
      Draggables._lastScrollPointer = Draggables._lastScrollPointer || $A(Draggables._lastPointer);
      Draggables._lastScrollPointer[0] += this.scrollSpeed[0] * delta / 1000;
      Draggables._lastScrollPointer[1] += this.scrollSpeed[1] * delta / 1000;
      if (Draggables._lastScrollPointer[0] < 0)
        Draggables._lastScrollPointer[0] = 0;
      if (Draggables._lastScrollPointer[1] < 0)
        Draggables._lastScrollPointer[1] = 0;
      this.draw(Draggables._lastScrollPointer);
    }

    if(this.options.change) this.options.change(this);
  },

  _getWindowScroll: function(w) {
    var T, L, W, H;
    with (w.document) {
      if (w.document.documentElement && documentElement.scrollTop) {
        T = documentElement.scrollTop;
        L = documentElement.scrollLeft;
      } else if (w.document.body) {
        T = body.scrollTop;
        L = body.scrollLeft;
      }
      if (w.innerWidth) {
        W = w.innerWidth;
        H = w.innerHeight;
      } else if (w.document.documentElement && documentElement.clientWidth) {
        W = documentElement.clientWidth;
        H = documentElement.clientHeight;
      } else {
        W = body.offsetWidth;
        H = body.offsetHeight;
      }
    }
    return { top: T, left: L, width: W, height: H };
  }
});

Draggable._dragging = { };

/*--------------------------------------------------------------------------*/

var SortableObserver = Class.create({
  initialize: function(element, observer) {
    this.element   = $(element);
    this.observer  = observer;
    this.lastValue = Sortable.serialize(this.element);
  },

  onStart: function() {
    this.lastValue = Sortable.serialize(this.element);
  },

  onEnd: function() {
    Sortable.unmark();
    if(this.lastValue != Sortable.serialize(this.element))
      this.observer(this.element)
  }
});

var Sortable = {
  SERIALIZE_RULE: /^[^_\-](?:[A-Za-z0-9\-\_]*)[_](.*)$/,

  sortables: { },

  _findRootElement: function(element) {
    while (element.tagName.toUpperCase() != "BODY") {
      if(element.id && Sortable.sortables[element.id]) return element;
      element = element.parentNode;
    }
  },

  options: function(element) {
    element = Sortable._findRootElement($(element));
    if(!element) return;
    return Sortable.sortables[element.id];
  },

  destroy: function(element){
    element = $(element);
    var s = Sortable.sortables[element.id];

    if(s) {
      Draggables.removeObserver(s.element);
      s.droppables.each(function(d){ Droppables.remove(d) });
      s.draggables.invoke('destroy');

      delete Sortable.sortables[s.element.id];
    }
  },

  create: function(element) {
    element = $(element);
    var options = Object.extend({
      element:     element,
      tag:         'li',       // assumes li children, override with tag: 'tagname'
      dropOnEmpty: false,
      tree:        false,
      treeTag:     'ul',
      overlap:     'vertical', // one of 'vertical', 'horizontal'
      constraint:  'vertical', // one of 'vertical', 'horizontal', false
      containment: element,    // also takes array of elements (or id's); or false
      handle:      false,      // or a CSS class
      only:        false,
      delay:       0,
      hoverclass:  null,
      ghosting:    false,
      quiet:       false,
      scroll:      false,
      scrollSensitivity: 20,
      scrollSpeed: 15,
      format:      this.SERIALIZE_RULE,

      // these take arrays of elements or ids and can be
      // used for better initialization performance
      elements:    false,
      handles:     false,

      onChange:    Prototype.emptyFunction,
      onUpdate:    Prototype.emptyFunction
    }, arguments[1] || { });

    // clear any old sortable with same element
    this.destroy(element);

    // build options for the draggables
    var options_for_draggable = {
      revert:      true,
      quiet:       options.quiet,
      scroll:      options.scroll,
      scrollSpeed: options.scrollSpeed,
      scrollSensitivity: options.scrollSensitivity,
      delay:       options.delay,
      ghosting:    options.ghosting,
      constraint:  options.constraint,
      handle:      options.handle };

    if(options.starteffect)
      options_for_draggable.starteffect = options.starteffect;

    if(options.reverteffect)
      options_for_draggable.reverteffect = options.reverteffect;
    else
      if(options.ghosting) options_for_draggable.reverteffect = function(element) {
        element.style.top  = 0;
        element.style.left = 0;
      };

    if(options.endeffect)
      options_for_draggable.endeffect = options.endeffect;

    if(options.zindex)
      options_for_draggable.zindex = options.zindex;

    // build options for the droppables
    var options_for_droppable = {
      overlap:     options.overlap,
      containment: options.containment,
      tree:        options.tree,
      hoverclass:  options.hoverclass,
      onHover:     Sortable.onHover
    };

    var options_for_tree = {
      onHover:      Sortable.onEmptyHover,
      overlap:      options.overlap,
      containment:  options.containment,
      hoverclass:   options.hoverclass
    };

    // fix for gecko engine
    Element.cleanWhitespace(element);

    options.draggables = [];
    options.droppables = [];

    // drop on empty handling
    if(options.dropOnEmpty || options.tree) {
      Droppables.add(element, options_for_tree);
      options.droppables.push(element);
    }

    (options.elements || this.findElements(element, options) || []).each( function(e,i) {
      var handle = options.handles ? $(options.handles[i]) :
        (options.handle ? $(e).select('.' + options.handle)[0] : e);
      options.draggables.push(
        new Draggable(e, Object.extend(options_for_draggable, { handle: handle })));
      Droppables.add(e, options_for_droppable);
      if(options.tree) e.treeNode = element;
      options.droppables.push(e);
    });

    if(options.tree) {
      (Sortable.findTreeElements(element, options) || []).each( function(e) {
        Droppables.add(e, options_for_tree);
        e.treeNode = element;
        options.droppables.push(e);
      });
    }

    // keep reference
    this.sortables[element.identify()] = options;

    // for onupdate
    Draggables.addObserver(new SortableObserver(element, options.onUpdate));

  },

  // return all suitable-for-sortable elements in a guaranteed order
  findElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.tag);
  },

  findTreeElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.treeTag);
  },

  onHover: function(element, dropon, overlap) {
    if(Element.isParent(dropon, element)) return;

    if(overlap > .33 && overlap < .66 && Sortable.options(dropon).tree) {
      return;
    } else if(overlap>0.5) {
      Sortable.mark(dropon, 'before');
      if(dropon.previousSibling != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, dropon);
        if(dropon.parentNode!=oldParentNode)
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    } else {
      Sortable.mark(dropon, 'after');
      var nextElement = dropon.nextSibling || null;
      if(nextElement != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, nextElement);
        if(dropon.parentNode!=oldParentNode)
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    }
  },

  onEmptyHover: function(element, dropon, overlap) {
    var oldParentNode = element.parentNode;
    var droponOptions = Sortable.options(dropon);

    if(!Element.isParent(dropon, element)) {
      var index;

      var children = Sortable.findElements(dropon, {tag: droponOptions.tag, only: droponOptions.only});
      var child = null;

      if(children) {
        var offset = Element.offsetSize(dropon, droponOptions.overlap) * (1.0 - overlap);

        for (index = 0; index < children.length; index += 1) {
          if (offset - Element.offsetSize (children[index], droponOptions.overlap) >= 0) {
            offset -= Element.offsetSize (children[index], droponOptions.overlap);
          } else if (offset - (Element.offsetSize (children[index], droponOptions.overlap) / 2) >= 0) {
            child = index + 1 < children.length ? children[index + 1] : null;
            break;
          } else {
            child = children[index];
            break;
          }
        }
      }

      dropon.insertBefore(element, child);

      Sortable.options(oldParentNode).onChange(element);
      droponOptions.onChange(element);
    }
  },

  unmark: function() {
    if(Sortable._marker) Sortable._marker.hide();
  },

  mark: function(dropon, position) {
    // mark on ghosting only
    var sortable = Sortable.options(dropon.parentNode);
    if(sortable && !sortable.ghosting) return;

    if(!Sortable._marker) {
      Sortable._marker =
        ($('dropmarker') || Element.extend(document.createElement('DIV'))).
          hide().addClassName('dropmarker').setStyle({position:'absolute'});
      document.getElementsByTagName("body").item(0).appendChild(Sortable._marker);
    }
    var offsets = dropon.cumulativeOffset();
    Sortable._marker.setStyle({left: offsets[0]+'px', top: offsets[1] + 'px'});

    if(position=='after')
      if(sortable.overlap == 'horizontal')
        Sortable._marker.setStyle({left: (offsets[0]+dropon.clientWidth) + 'px'});
      else
        Sortable._marker.setStyle({top: (offsets[1]+dropon.clientHeight) + 'px'});

    Sortable._marker.show();
  },

  _tree: function(element, options, parent) {
    var children = Sortable.findElements(element, options) || [];

    for (var i = 0; i < children.length; ++i) {
      var match = children[i].id.match(options.format);

      if (!match) continue;

      var child = {
        id: encodeURIComponent(match ? match[1] : null),
        element: element,
        parent: parent,
        children: [],
        position: parent.children.length,
        container: $(children[i]).down(options.treeTag)
      };

      /* Get the element containing the children and recurse over it */
      if (child.container)
        this._tree(child.container, options, child);

      parent.children.push (child);
    }

    return parent;
  },

  tree: function(element) {
    element = $(element);
    var sortableOptions = this.options(element);
    var options = Object.extend({
      tag: sortableOptions.tag,
      treeTag: sortableOptions.treeTag,
      only: sortableOptions.only,
      name: element.id,
      format: sortableOptions.format
    }, arguments[1] || { });

    var root = {
      id: null,
      parent: null,
      children: [],
      container: element,
      position: 0
    };

    return Sortable._tree(element, options, root);
  },

  /* Construct a [i] index for a particular node */
  _constructIndex: function(node) {
    var index = '';
    do {
      if (node.id) index = '[' + node.position + ']' + index;
    } while ((node = node.parent) != null);
    return index;
  },

  sequence: function(element) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[1] || { });

    return $(this.findElements(element, options) || []).map( function(item) {
      return item.id.match(options.format) ? item.id.match(options.format)[1] : '';
    });
  },

  setSequence: function(element, new_sequence) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[2] || { });

    var nodeMap = { };
    this.findElements(element, options).each( function(n) {
        if (n.id.match(options.format))
            nodeMap[n.id.match(options.format)[1]] = [n, n.parentNode];
        n.parentNode.removeChild(n);
    });

    new_sequence.each(function(ident) {
      var n = nodeMap[ident];
      if (n) {
        n[1].appendChild(n[0]);
        delete nodeMap[ident];
      }
    });
  },

  serialize: function(element) {
    element = $(element);
    var options = Object.extend(Sortable.options(element), arguments[1] || { });
    var name = encodeURIComponent(
      (arguments[1] && arguments[1].name) ? arguments[1].name : element.id);

    if (options.tree) {
      return Sortable.tree(element, arguments[1]).children.map( function (item) {
        return [name + Sortable._constructIndex(item) + "[id]=" +
                encodeURIComponent(item.id)].concat(item.children.map(arguments.callee));
      }).flatten().join('&');
    } else {
      return Sortable.sequence(element, arguments[1]).map( function(item) {
        return name + "[]=" + encodeURIComponent(item);
      }).join('&');
    }
  }
};

// Returns true if child is contained within element
Element.isParent = function(child, element) {
  if (!child.parentNode || child == element) return false;
  if (child.parentNode == element) return true;
  return Element.isParent(child.parentNode, element);
};

Element.findChildren = function(element, only, recursive, tagName) {
  if(!element.hasChildNodes()) return null;
  tagName = tagName.toUpperCase();
  if(only) only = [only].flatten();
  var elements = [];
  $A(element.childNodes).each( function(e) {
    if(e.tagName && e.tagName.toUpperCase()==tagName &&
      (!only || (Element.classNames(e).detect(function(v) { return only.include(v) }))))
        elements.push(e);
    if(recursive) {
      var grandchildren = Element.findChildren(e, only, recursive, tagName);
      if(grandchildren) elements.push(grandchildren);
    }
  });

  return (elements.length>0 ? elements.flatten() : []);
};

Element.offsetSize = function (element, type) {
  return element['offset' + ((type=='vertical' || type=='height') ? 'Height' : 'Width')];
};
// script.aculo.us controls.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005-2008 Ivan Krstic (http://blogs.law.harvard.edu/ivan)
//           (c) 2005-2008 Jon Tirsen (http://www.tirsen.com)
// Contributors:
//  Richard Livsey
//  Rahul Bhargava
//  Rob Wills
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// Autocompleter.Base handles all the autocompletion functionality
// that's independent of the data source for autocompletion. This
// includes drawing the autocompletion menu, observing keyboard
// and mouse events, and similar.
//
// Specific autocompleters need to provide, at the very least,
// a getUpdatedChoices function that will be invoked every time
// the text inside the monitored textbox changes. This method
// should get the text for which to provide autocompletion by
// invoking this.getToken(), NOT by directly accessing
// this.element.value. This is to allow incremental tokenized
// autocompletion. Specific auto-completion logic (AJAX, etc)
// belongs in getUpdatedChoices.
//
// Tokenized incremental autocompletion is enabled automatically
// when an autocompleter is instantiated with the 'tokens' option
// in the options parameter, e.g.:
// new Ajax.Autocompleter('id','upd', '/url/', { tokens: ',' });
// will incrementally autocomplete with a comma as the token.
// Additionally, ',' in the above example can be replaced with
// a token array, e.g. { tokens: [',', '\n'] } which
// enables autocompletion on multiple tokens. This is most
// useful when one of the tokens is \n (a newline), as it
// allows smart autocompletion after linebreaks.

if(typeof Effect == 'undefined')
  throw("controls.js requires including script.aculo.us' effects.js library");

var Autocompleter = { };
Autocompleter.Base = Class.create({
  baseInitialize: function(element, update, options) {
    element          = $(element);
    this.element     = element;
    this.update      = $(update);
    this.hasFocus    = false;
    this.changed     = false;
    this.active      = false;
    this.index       = 0;
    this.entryCount  = 0;
    this.oldElementValue = this.element.value;

    if(this.setOptions)
      this.setOptions(options);
    else
      this.options = options || { };

    this.options.paramName    = this.options.paramName || this.element.name;
    this.options.tokens       = this.options.tokens || [];
    this.options.frequency    = this.options.frequency || 0.4;
    this.options.minChars     = this.options.minChars || 1;
    this.options.onShow       = this.options.onShow ||
      function(element, update){
        if(!update.style.position || update.style.position=='absolute') {
          update.style.position = 'absolute';
          Position.clone(element, update, {
            setHeight: false,
            offsetTop: element.offsetHeight
          });
        }
        Effect.Appear(update,{duration:0.15});
      };
    this.options.onHide = this.options.onHide ||
      function(element, update){ new Effect.Fade(update,{duration:0.15}) };

    if(typeof(this.options.tokens) == 'string')
      this.options.tokens = new Array(this.options.tokens);
    // Force carriage returns as token delimiters anyway
    if (!this.options.tokens.include('\n'))
      this.options.tokens.push('\n');

    this.observer = null;

    this.element.setAttribute('autocomplete','off');

    Element.hide(this.update);

    Event.observe(this.element, 'blur', this.onBlur.bindAsEventListener(this));
    Event.observe(this.element, 'keydown', this.onKeyPress.bindAsEventListener(this));
  },

  show: function() {
    if(Element.getStyle(this.update, 'display')=='none') this.options.onShow(this.element, this.update);
    if(!this.iefix &&
      (Prototype.Browser.IE) &&
      (Element.getStyle(this.update, 'position')=='absolute')) {
      new Insertion.After(this.update,
       '<iframe id="' + this.update.id + '_iefix" '+
       'style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" ' +
       'src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
      this.iefix = $(this.update.id+'_iefix');
    }
    if(this.iefix) setTimeout(this.fixIEOverlapping.bind(this), 50);
  },

  fixIEOverlapping: function() {
    Position.clone(this.update, this.iefix, {setTop:(!this.update.style.height)});
    this.iefix.style.zIndex = 1;
    this.update.style.zIndex = 2;
    Element.show(this.iefix);
  },

  hide: function() {
    this.stopIndicator();
    if(Element.getStyle(this.update, 'display')!='none') this.options.onHide(this.element, this.update);
    if(this.iefix) Element.hide(this.iefix);
  },

  startIndicator: function() {
    if(this.options.indicator) Element.show(this.options.indicator);
  },

  stopIndicator: function() {
    if(this.options.indicator) Element.hide(this.options.indicator);
  },

  onKeyPress: function(event) {
    if(this.active)
      switch(event.keyCode) {
       case Event.KEY_TAB:
       case Event.KEY_RETURN:
         this.selectEntry();
         Event.stop(event);
       case Event.KEY_ESC:
         this.hide();
         this.active = false;
         Event.stop(event);
         return;
       case Event.KEY_LEFT:
       case Event.KEY_RIGHT:
         return;
       case Event.KEY_UP:
         this.markPrevious();
         this.render();
         Event.stop(event);
         return;
       case Event.KEY_DOWN:
         this.markNext();
         this.render();
         Event.stop(event);
         return;
      }
     else
       if(event.keyCode==Event.KEY_TAB || event.keyCode==Event.KEY_RETURN ||
         (Prototype.Browser.WebKit > 0 && event.keyCode == 0)) return;

    this.changed = true;
    this.hasFocus = true;

    if(this.observer) clearTimeout(this.observer);
      this.observer =
        setTimeout(this.onObserverEvent.bind(this), this.options.frequency*1000);
  },

  activate: function() {
    this.changed = false;
    this.hasFocus = true;
    this.getUpdatedChoices();
  },

  onHover: function(event) {
    var element = Event.findElement(event, 'LI');
    if(this.index != element.autocompleteIndex)
    {
        this.index = element.autocompleteIndex;
        this.render();
    }
    Event.stop(event);
  },

  onClick: function(event) {
    var element = Event.findElement(event, 'LI');
    this.index = element.autocompleteIndex;
    this.selectEntry();
    this.hide();
  },

  onBlur: function(event) {
    // needed to make click events working
    setTimeout(this.hide.bind(this), 250);
    this.hasFocus = false;
    this.active = false;
  },

  render: function() {
    if(this.entryCount > 0) {
      for (var i = 0; i < this.entryCount; i++)
        this.index==i ?
          Element.addClassName(this.getEntry(i),"selected") :
          Element.removeClassName(this.getEntry(i),"selected");
      if(this.hasFocus) {
        this.show();
        this.active = true;
      }
    } else {
      this.active = false;
      this.hide();
    }
  },

  markPrevious: function() {
    if(this.index > 0) this.index--;
      else this.index = this.entryCount-1;
    //this.getEntry(this.index).scrollIntoView(true); useless
  },

  markNext: function() {
    if(this.index < this.entryCount-1) this.index++;
      else this.index = 0;
    this.getEntry(this.index).scrollIntoView(false);
  },

  getEntry: function(index) {
    return this.update.firstChild.childNodes[index];
  },

  getCurrentEntry: function() {
    return this.getEntry(this.index);
  },

  selectEntry: function() {
    this.active = false;
    this.updateElement(this.getCurrentEntry());
  },

  updateElement: function(selectedElement) {
    if (this.options.updateElement) {
      this.options.updateElement(selectedElement);
      return;
    }
    var value = '';
    if (this.options.select) {
      var nodes = $(selectedElement).select('.' + this.options.select) || [];
      if(nodes.length>0) value = Element.collectTextNodes(nodes[0], this.options.select);
    } else
      value = Element.collectTextNodesIgnoreClass(selectedElement, 'informal');

    var bounds = this.getTokenBounds();
    if (bounds[0] != -1) {
      var newValue = this.element.value.substr(0, bounds[0]);
      var whitespace = this.element.value.substr(bounds[0]).match(/^\s+/);
      if (whitespace)
        newValue += whitespace[0];
      this.element.value = newValue + value + this.element.value.substr(bounds[1]);
    } else {
      this.element.value = value;
    }
    this.oldElementValue = this.element.value;
    this.element.focus();

    if (this.options.afterUpdateElement)
      this.options.afterUpdateElement(this.element, selectedElement);
  },

  updateChoices: function(choices) {
    if(!this.changed && this.hasFocus) {
      this.update.innerHTML = choices;
      Element.cleanWhitespace(this.update);
      Element.cleanWhitespace(this.update.down());

      if(this.update.firstChild && this.update.down().childNodes) {
        this.entryCount =
          this.update.down().childNodes.length;
        for (var i = 0; i < this.entryCount; i++) {
          var entry = this.getEntry(i);
          entry.autocompleteIndex = i;
          this.addObservers(entry);
        }
      } else {
        this.entryCount = 0;
      }

      this.stopIndicator();
      this.index = 0;

      if(this.entryCount==1 && this.options.autoSelect) {
        this.selectEntry();
        this.hide();
      } else {
        this.render();
      }
    }
  },

  addObservers: function(element) {
    Event.observe(element, "mouseover", this.onHover.bindAsEventListener(this));
    Event.observe(element, "click", this.onClick.bindAsEventListener(this));
  },

  onObserverEvent: function() {
    this.changed = false;
    this.tokenBounds = null;
    if(this.getToken().length>=this.options.minChars) {
      this.getUpdatedChoices();
    } else {
      this.active = false;
      this.hide();
    }
    this.oldElementValue = this.element.value;
  },

  getToken: function() {
    var bounds = this.getTokenBounds();
    return this.element.value.substring(bounds[0], bounds[1]).strip();
  },

  getTokenBounds: function() {
    if (null != this.tokenBounds) return this.tokenBounds;
    var value = this.element.value;
    if (value.strip().empty()) return [-1, 0];
    var diff = arguments.callee.getFirstDifferencePos(value, this.oldElementValue);
    var offset = (diff == this.oldElementValue.length ? 1 : 0);
    var prevTokenPos = -1, nextTokenPos = value.length;
    var tp;
    for (var index = 0, l = this.options.tokens.length; index < l; ++index) {
      tp = value.lastIndexOf(this.options.tokens[index], diff + offset - 1);
      if (tp > prevTokenPos) prevTokenPos = tp;
      tp = value.indexOf(this.options.tokens[index], diff + offset);
      if (-1 != tp && tp < nextTokenPos) nextTokenPos = tp;
    }
    return (this.tokenBounds = [prevTokenPos + 1, nextTokenPos]);
  }
});

Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos = function(newS, oldS) {
  var boundary = Math.min(newS.length, oldS.length);
  for (var index = 0; index < boundary; ++index)
    if (newS[index] != oldS[index])
      return index;
  return boundary;
};

Ajax.Autocompleter = Class.create(Autocompleter.Base, {
  initialize: function(element, update, url, options) {
    this.baseInitialize(element, update, options);
    this.options.asynchronous  = true;
    this.options.onComplete    = this.onComplete.bind(this);
    this.options.defaultParams = this.options.parameters || null;
    this.url                   = url;
  },

  getUpdatedChoices: function() {
    this.startIndicator();

    var entry = encodeURIComponent(this.options.paramName) + '=' +
      encodeURIComponent(this.getToken());

    this.options.parameters = this.options.callback ?
      this.options.callback(this.element, entry) : entry;

    if(this.options.defaultParams)
      this.options.parameters += '&' + this.options.defaultParams;

    new Ajax.Request(this.url, this.options);
  },

  onComplete: function(request) {
    this.updateChoices(request.responseText);
  }
});

// The local array autocompleter. Used when you'd prefer to
// inject an array of autocompletion options into the page, rather
// than sending out Ajax queries, which can be quite slow sometimes.
//
// The constructor takes four parameters. The first two are, as usual,
// the id of the monitored textbox, and id of the autocompletion menu.
// The third is the array you want to autocomplete from, and the fourth
// is the options block.
//
// Extra local autocompletion options:
// - choices - How many autocompletion choices to offer
//
// - partialSearch - If false, the autocompleter will match entered
//                    text only at the beginning of strings in the
//                    autocomplete array. Defaults to true, which will
//                    match text at the beginning of any *word* in the
//                    strings in the autocomplete array. If you want to
//                    search anywhere in the string, additionally set
//                    the option fullSearch to true (default: off).
//
// - fullSsearch - Search anywhere in autocomplete array strings.
//
// - partialChars - How many characters to enter before triggering
//                   a partial match (unlike minChars, which defines
//                   how many characters are required to do any match
//                   at all). Defaults to 2.
//
// - ignoreCase - Whether to ignore case when autocompleting.
//                 Defaults to true.
//
// It's possible to pass in a custom function as the 'selector'
// option, if you prefer to write your own autocompletion logic.
// In that case, the other options above will not apply unless
// you support them.

Autocompleter.Local = Class.create(Autocompleter.Base, {
  initialize: function(element, update, array, options) {
    this.baseInitialize(element, update, options);
    this.options.array = array;
  },

  getUpdatedChoices: function() {
    this.updateChoices(this.options.selector(this));
  },

  setOptions: function(options) {
    this.options = Object.extend({
      choices: 10,
      partialSearch: true,
      partialChars: 2,
      ignoreCase: true,
      fullSearch: false,
      selector: function(instance) {
        var ret       = []; // Beginning matches
        var partial   = []; // Inside matches
        var entry     = instance.getToken();
        var count     = 0;

        for (var i = 0; i < instance.options.array.length &&
          ret.length < instance.options.choices ; i++) {

          var elem = instance.options.array[i];
          var foundPos = instance.options.ignoreCase ?
            elem.toLowerCase().indexOf(entry.toLowerCase()) :
            elem.indexOf(entry);

          while (foundPos != -1) {
            if (foundPos == 0 && elem.length != entry.length) {
              ret.push("<li><strong>" + elem.substr(0, entry.length) + "</strong>" +
                elem.substr(entry.length) + "</li>");
              break;
            } else if (entry.length >= instance.options.partialChars &&
              instance.options.partialSearch && foundPos != -1) {
              if (instance.options.fullSearch || /\s/.test(elem.substr(foundPos-1,1))) {
                partial.push("<li>" + elem.substr(0, foundPos) + "<strong>" +
                  elem.substr(foundPos, entry.length) + "</strong>" + elem.substr(
                  foundPos + entry.length) + "</li>");
                break;
              }
            }

            foundPos = instance.options.ignoreCase ?
              elem.toLowerCase().indexOf(entry.toLowerCase(), foundPos + 1) :
              elem.indexOf(entry, foundPos + 1);

          }
        }
        if (partial.length)
          ret = ret.concat(partial.slice(0, instance.options.choices - ret.length));
        return "<ul>" + ret.join('') + "</ul>";
      }
    }, options || { });
  }
});

// AJAX in-place editor and collection editor
// Full rewrite by Christophe Porteneuve <tdd@tddsworld.com> (April 2007).

// Use this if you notice weird scrolling problems on some browsers,
// the DOM might be a bit confused when this gets called so do this
// waits 1 ms (with setTimeout) until it does the activation
Field.scrollFreeActivate = function(field) {
  setTimeout(function() {
    Field.activate(field);
  }, 1);
};

Ajax.InPlaceEditor = Class.create({
  initialize: function(element, url, options) {
    this.url = url;
    this.element = element = $(element);
    this.prepareOptions();
    this._controls = { };
    arguments.callee.dealWithDeprecatedOptions(options); // DEPRECATION LAYER!!!
    Object.extend(this.options, options || { });
    if (!this.options.formId && this.element.id) {
      this.options.formId = this.element.id + '-inplaceeditor';
      if ($(this.options.formId))
        this.options.formId = '';
    }
    if (this.options.externalControl)
      this.options.externalControl = $(this.options.externalControl);
    if (!this.options.externalControl)
      this.options.externalControlOnly = false;
    this._originalBackground = this.element.getStyle('background-color') || 'transparent';
    this.element.title = this.options.clickToEditText;
    this._boundCancelHandler = this.handleFormCancellation.bind(this);
    this._boundComplete = (this.options.onComplete || Prototype.emptyFunction).bind(this);
    this._boundFailureHandler = this.handleAJAXFailure.bind(this);
    this._boundSubmitHandler = this.handleFormSubmission.bind(this);
    this._boundWrapperHandler = this.wrapUp.bind(this);
    this.registerListeners();
  },
  checkForEscapeOrReturn: function(e) {
    if (!this._editing || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (Event.KEY_ESC == e.keyCode)
      this.handleFormCancellation(e);
    else if (Event.KEY_RETURN == e.keyCode)
      this.handleFormSubmission(e);
  },
  createControl: function(mode, handler, extraClasses) {
    var control = this.options[mode + 'Control'];
    var text = this.options[mode + 'Text'];
    if ('button' == control) {
      var btn = document.createElement('input');
      btn.type = 'submit';
      btn.value = text;
      btn.className = 'editor_' + mode + '_button';
      if ('cancel' == mode)
        btn.onclick = this._boundCancelHandler;
      this._form.appendChild(btn);
      this._controls[mode] = btn;
    } else if ('link' == control) {
      var link = document.createElement('a');
      link.href = '#';
      link.appendChild(document.createTextNode(text));
      link.onclick = 'cancel' == mode ? this._boundCancelHandler : this._boundSubmitHandler;
      link.className = 'editor_' + mode + '_link';
      if (extraClasses)
        link.className += ' ' + extraClasses;
      this._form.appendChild(link);
      this._controls[mode] = link;
    }
  },
  createEditField: function() {
    var text = (this.options.loadTextURL ? this.options.loadingText : this.getText());
    var fld;
    if (1 >= this.options.rows && !/\r|\n/.test(this.getText())) {
      fld = document.createElement('input');
      fld.type = 'text';
      var size = this.options.size || this.options.cols || 0;
      if (0 < size) fld.size = size;
    } else {
      fld = document.createElement('textarea');
      fld.rows = (1 >= this.options.rows ? this.options.autoRows : this.options.rows);
      fld.cols = this.options.cols || 40;
    }
    fld.name = this.options.paramName;
    fld.value = text; // No HTML breaks conversion anymore
    fld.className = 'editor_field';
    if (this.options.submitOnBlur)
      fld.onblur = this._boundSubmitHandler;
    this._controls.editor = fld;
    if (this.options.loadTextURL)
      this.loadExternalText();
    this._form.appendChild(this._controls.editor);
  },
  createForm: function() {
    var ipe = this;
    function addText(mode, condition) {
      var text = ipe.options['text' + mode + 'Controls'];
      if (!text || condition === false) return;
      ipe._form.appendChild(document.createTextNode(text));
    };
    this._form = $(document.createElement('form'));
    this._form.id = this.options.formId;
    this._form.addClassName(this.options.formClassName);
    this._form.onsubmit = this._boundSubmitHandler;
    this.createEditField();
    if ('textarea' == this._controls.editor.tagName.toLowerCase())
      this._form.appendChild(document.createElement('br'));
    if (this.options.onFormCustomization)
      this.options.onFormCustomization(this, this._form);
    addText('Before', this.options.okControl || this.options.cancelControl);
    this.createControl('ok', this._boundSubmitHandler);
    addText('Between', this.options.okControl && this.options.cancelControl);
    this.createControl('cancel', this._boundCancelHandler, 'editor_cancel');
    addText('After', this.options.okControl || this.options.cancelControl);
  },
  destroy: function() {
    if (this._oldInnerHTML)
      this.element.innerHTML = this._oldInnerHTML;
    this.leaveEditMode();
    this.unregisterListeners();
  },
  enterEditMode: function(e) {
    if (this._saving || this._editing) return;
    this._editing = true;
    this.triggerCallback('onEnterEditMode');
    if (this.options.externalControl)
      this.options.externalControl.hide();
    this.element.hide();
    this.createForm();
    this.element.parentNode.insertBefore(this._form, this.element);
    if (!this.options.loadTextURL)
      this.postProcessEditField();
    if (e) Event.stop(e);
  },
  enterHover: function(e) {
    if (this.options.hoverClassName)
      this.element.addClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onEnterHover');
  },
  getText: function() {
    return this.element.innerHTML.unescapeHTML();
  },
  handleAJAXFailure: function(transport) {
    this.triggerCallback('onFailure', transport);
    if (this._oldInnerHTML) {
      this.element.innerHTML = this._oldInnerHTML;
      this._oldInnerHTML = null;
    }
  },
  handleFormCancellation: function(e) {
    this.wrapUp();
    if (e) Event.stop(e);
  },
  handleFormSubmission: function(e) {
    var form = this._form;
    var value = $F(this._controls.editor);
    this.prepareSubmission();
    var params = this.options.callback(form, value) || '';
    if (Object.isString(params))
      params = params.toQueryParams();
    params.editorId = this.element.id;
    if (this.options.htmlResponse) {
      var options = Object.extend({ evalScripts: true }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Updater({ success: this.element }, this.url, options);
    } else {
      var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Request(this.url, options);
    }
    if (e) Event.stop(e);
  },
  leaveEditMode: function() {
    this.element.removeClassName(this.options.savingClassName);
    this.removeForm();
    this.leaveHover();
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
    if (this.options.externalControl)
      this.options.externalControl.show();
    this._saving = false;
    this._editing = false;
    this._oldInnerHTML = null;
    this.triggerCallback('onLeaveEditMode');
  },
  leaveHover: function(e) {
    if (this.options.hoverClassName)
      this.element.removeClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onLeaveHover');
  },
  loadExternalText: function() {
    this._form.addClassName(this.options.loadingClassName);
    this._controls.editor.disabled = true;
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._form.removeClassName(this.options.loadingClassName);
        var text = transport.responseText;
        if (this.options.stripLoadedTextTags)
          text = text.stripTags();
        this._controls.editor.value = text;
        this._controls.editor.disabled = false;
        this.postProcessEditField();
      }.bind(this),
      onFailure: this._boundFailureHandler
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },
  postProcessEditField: function() {
    var fpc = this.options.fieldPostCreation;
    if (fpc)
      $(this._controls.editor)['focus' == fpc ? 'focus' : 'activate']();
  },
  prepareOptions: function() {
    this.options = Object.clone(Ajax.InPlaceEditor.DefaultOptions);
    Object.extend(this.options, Ajax.InPlaceEditor.DefaultCallbacks);
    [this._extraDefaultOptions].flatten().compact().each(function(defs) {
      Object.extend(this.options, defs);
    }.bind(this));
  },
  prepareSubmission: function() {
    this._saving = true;
    this.removeForm();
    this.leaveHover();
    this.showSaving();
  },
  registerListeners: function() {
    this._listeners = { };
    var listener;
    $H(Ajax.InPlaceEditor.Listeners).each(function(pair) {
      listener = this[pair.value].bind(this);
      this._listeners[pair.key] = listener;
      if (!this.options.externalControlOnly)
        this.element.observe(pair.key, listener);
      if (this.options.externalControl)
        this.options.externalControl.observe(pair.key, listener);
    }.bind(this));
  },
  removeForm: function() {
    if (!this._form) return;
    this._form.remove();
    this._form = null;
    this._controls = { };
  },
  showSaving: function() {
    this._oldInnerHTML = this.element.innerHTML;
    this.element.innerHTML = this.options.savingText;
    this.element.addClassName(this.options.savingClassName);
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
  },
  triggerCallback: function(cbName, arg) {
    if ('function' == typeof this.options[cbName]) {
      this.options[cbName](this, arg);
    }
  },
  unregisterListeners: function() {
    $H(this._listeners).each(function(pair) {
      if (!this.options.externalControlOnly)
        this.element.stopObserving(pair.key, pair.value);
      if (this.options.externalControl)
        this.options.externalControl.stopObserving(pair.key, pair.value);
    }.bind(this));
  },
  wrapUp: function(transport) {
    this.leaveEditMode();
    // Can't use triggerCallback due to backward compatibility: requires
    // binding + direct element
    this._boundComplete(transport, this.element);
  }
});

Object.extend(Ajax.InPlaceEditor.prototype, {
  dispose: Ajax.InPlaceEditor.prototype.destroy
});

Ajax.InPlaceCollectionEditor = Class.create(Ajax.InPlaceEditor, {
  initialize: function($super, element, url, options) {
    this._extraDefaultOptions = Ajax.InPlaceCollectionEditor.DefaultOptions;
    $super(element, url, options);
  },

  createEditField: function() {
    var list = document.createElement('select');
    list.name = this.options.paramName;
    list.size = 1;
    this._controls.editor = list;
    this._collection = this.options.collection || [];
    if (this.options.loadCollectionURL)
      this.loadCollection();
    else
      this.checkForExternalText();
    this._form.appendChild(this._controls.editor);
  },

  loadCollection: function() {
    this._form.addClassName(this.options.loadingClassName);
    this.showLoadingText(this.options.loadingCollectionText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        var js = transport.responseText.strip();
        if (!/^\[.*\]$/.test(js)) // TODO: improve sanity check
          throw('Server returned an invalid collection representation.');
        this._collection = eval(js);
        this.checkForExternalText();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadCollectionURL, options);
  },

  showLoadingText: function(text) {
    this._controls.editor.disabled = true;
    var tempOption = this._controls.editor.firstChild;
    if (!tempOption) {
      tempOption = document.createElement('option');
      tempOption.value = '';
      this._controls.editor.appendChild(tempOption);
      tempOption.selected = true;
    }
    tempOption.update((text || '').stripScripts().stripTags());
  },

  checkForExternalText: function() {
    this._text = this.getText();
    if (this.options.loadTextURL)
      this.loadExternalText();
    else
      this.buildOptionList();
  },

  loadExternalText: function() {
    this.showLoadingText(this.options.loadingText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._text = transport.responseText.strip();
        this.buildOptionList();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },

  buildOptionList: function() {
    this._form.removeClassName(this.options.loadingClassName);
    this._collection = this._collection.map(function(entry) {
      return 2 === entry.length ? entry : [entry, entry].flatten();
    });
    var marker = ('value' in this.options) ? this.options.value : this._text;
    var textFound = this._collection.any(function(entry) {
      return entry[0] == marker;
    }.bind(this));
    this._controls.editor.update('');
    var option;
    this._collection.each(function(entry, index) {
      option = document.createElement('option');
      option.value = entry[0];
      option.selected = textFound ? entry[0] == marker : 0 == index;
      option.appendChild(document.createTextNode(entry[1]));
      this._controls.editor.appendChild(option);
    }.bind(this));
    this._controls.editor.disabled = false;
    Field.scrollFreeActivate(this._controls.editor);
  }
});

//**** DEPRECATION LAYER FOR InPlace[Collection]Editor! ****
//**** This only  exists for a while,  in order to  let ****
//**** users adapt to  the new API.  Read up on the new ****
//**** API and convert your code to it ASAP!            ****

Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions = function(options) {
  if (!options) return;
  function fallback(name, expr) {
    if (name in options || expr === undefined) return;
    options[name] = expr;
  };
  fallback('cancelControl', (options.cancelLink ? 'link' : (options.cancelButton ? 'button' :
    options.cancelLink == options.cancelButton == false ? false : undefined)));
  fallback('okControl', (options.okLink ? 'link' : (options.okButton ? 'button' :
    options.okLink == options.okButton == false ? false : undefined)));
  fallback('highlightColor', options.highlightcolor);
  fallback('highlightEndColor', options.highlightendcolor);
};

Object.extend(Ajax.InPlaceEditor, {
  DefaultOptions: {
    ajaxOptions: { },
    autoRows: 3,                                // Use when multi-line w/ rows == 1
    cancelControl: 'link',                      // 'link'|'button'|false
    cancelText: 'cancel',
    clickToEditText: 'Click to edit',
    externalControl: null,                      // id|elt
    externalControlOnly: false,
    fieldPostCreation: 'activate',              // 'activate'|'focus'|false
    formClassName: 'inplaceeditor-form',
    formId: null,                               // id|elt
    highlightColor: '#ffff99',
    highlightEndColor: '#ffffff',
    hoverClassName: '',
    htmlResponse: true,
    loadingClassName: 'inplaceeditor-loading',
    loadingText: 'Loading...',
    okControl: 'button',                        // 'link'|'button'|false
    okText: 'ok',
    paramName: 'value',
    rows: 1,                                    // If 1 and multi-line, uses autoRows
    savingClassName: 'inplaceeditor-saving',
    savingText: 'Saving...',
    size: 0,
    stripLoadedTextTags: false,
    submitOnBlur: false,
    textAfterControls: '',
    textBeforeControls: '',
    textBetweenControls: ''
  },
  DefaultCallbacks: {
    callback: function(form) {
      return Form.serialize(form);
    },
    onComplete: function(transport, element) {
      // For backward compatibility, this one is bound to the IPE, and passes
      // the element directly.  It was too often customized, so we don't break it.
      new Effect.Highlight(element, {
        startcolor: this.options.highlightColor, keepBackgroundImage: true });
    },
    onEnterEditMode: null,
    onEnterHover: function(ipe) {
      ipe.element.style.backgroundColor = ipe.options.highlightColor;
      if (ipe._effect)
        ipe._effect.cancel();
    },
    onFailure: function(transport, ipe) {
      alert('Error communication with the server: ' + transport.responseText.stripTags());
    },
    onFormCustomization: null, // Takes the IPE and its generated form, after editor, before controls.
    onLeaveEditMode: null,
    onLeaveHover: function(ipe) {
      ipe._effect = new Effect.Highlight(ipe.element, {
        startcolor: ipe.options.highlightColor, endcolor: ipe.options.highlightEndColor,
        restorecolor: ipe._originalBackground, keepBackgroundImage: true
      });
    }
  },
  Listeners: {
    click: 'enterEditMode',
    keydown: 'checkForEscapeOrReturn',
    mouseover: 'enterHover',
    mouseout: 'leaveHover'
  }
});

Ajax.InPlaceCollectionEditor.DefaultOptions = {
  loadingCollectionText: 'Loading options...'
};

// Delayed observer, like Form.Element.Observer,
// but waits for delay after last key input
// Ideal for live-search fields

Form.Element.DelayedObserver = Class.create({
  initialize: function(element, delay, callback) {
    this.delay     = delay || 0.5;
    this.element   = $(element);
    this.callback  = callback;
    this.timer     = null;
    this.lastValue = $F(this.element);
    Event.observe(this.element,'keyup',this.delayedListener.bindAsEventListener(this));
  },
  delayedListener: function(event) {
    if(this.lastValue == $F(this.element)) return;
    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(this.onTimerEvent.bind(this), this.delay * 1000);
    this.lastValue = $F(this.element);
  },
  onTimerEvent: function() {
    this.timer = null;
    this.callback(this.element, $F(this.element));
  }
});
// script.aculo.us slider.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Marty Haught, Thomas Fuchs
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

if (!Control) var Control = { };

// options:
//  axis: 'vertical', or 'horizontal' (default)
//
// callbacks:
//  onChange(value)
//  onSlide(value)
Control.Slider = Class.create({
  initialize: function(handle, track, options) {
    var slider = this;

    if (Object.isArray(handle)) {
      this.handles = handle.collect( function(e) { return $(e) });
    } else {
      this.handles = [$(handle)];
    }

    this.track   = $(track);
    this.options = options || { };

    this.axis      = this.options.axis || 'horizontal';
    this.increment = this.options.increment || 1;
    this.step      = parseInt(this.options.step || '1');
    this.range     = this.options.range || $R(0,1);

    this.value     = 0; // assure backwards compat
    this.values    = this.handles.map( function() { return 0 });
    this.spans     = this.options.spans ? this.options.spans.map(function(s){ return $(s) }) : false;
    this.options.startSpan = $(this.options.startSpan || null);
    this.options.endSpan   = $(this.options.endSpan || null);

    this.restricted = this.options.restricted || false;

    this.maximum   = this.options.maximum || this.range.end;
    this.minimum   = this.options.minimum || this.range.start;

    // Will be used to align the handle onto the track, if necessary
    this.alignX = parseInt(this.options.alignX || '0');
    this.alignY = parseInt(this.options.alignY || '0');

    this.trackLength = this.maximumOffset() - this.minimumOffset();

    this.handleLength = this.isVertical() ?
      (this.handles[0].offsetHeight != 0 ?
        this.handles[0].offsetHeight : this.handles[0].style.height.replace(/px$/,"")) :
      (this.handles[0].offsetWidth != 0 ? this.handles[0].offsetWidth :
        this.handles[0].style.width.replace(/px$/,""));

    this.active   = false;
    this.dragging = false;
    this.disabled = false;

    if (this.options.disabled) this.setDisabled();

    // Allowed values array
    this.allowedValues = this.options.values ? this.options.values.sortBy(Prototype.K) : false;
    if (this.allowedValues) {
      this.minimum = this.allowedValues.min();
      this.maximum = this.allowedValues.max();
    }

    this.eventMouseDown = this.startDrag.bindAsEventListener(this);
    this.eventMouseUp   = this.endDrag.bindAsEventListener(this);
    this.eventMouseMove = this.update.bindAsEventListener(this);

    // Initialize handles in reverse (make sure first handle is active)
    this.handles.each( function(h,i) {
      i = slider.handles.length-1-i;
      slider.setValue(parseFloat(
        (Object.isArray(slider.options.sliderValue) ?
          slider.options.sliderValue[i] : slider.options.sliderValue) ||
         slider.range.start), i);
      h.makePositioned().observe("mousedown", slider.eventMouseDown);
    });

    this.track.observe("mousedown", this.eventMouseDown);
    document.observe("mouseup", this.eventMouseUp);
    $(this.track.parentNode.parentNode).observe("mousemove", this.eventMouseMove);


    this.initialized = true;
  },
  dispose: function() {
    var slider = this;
    Event.stopObserving(this.track, "mousedown", this.eventMouseDown);
    Event.stopObserving(document, "mouseup", this.eventMouseUp);
    Event.stopObserving(this.track.parentNode.parentNode, "mousemove", this.eventMouseMove);
    this.handles.each( function(h) {
      Event.stopObserving(h, "mousedown", slider.eventMouseDown);
    });
  },
  setDisabled: function(){
    this.disabled = true;
    this.track.parentNode.className = this.track.parentNode.className + ' disabled';
  },
  setEnabled: function(){
    this.disabled = false;
  },
  getNearestValue: function(value){
    if (this.allowedValues){
      if (value >= this.allowedValues.max()) return(this.allowedValues.max());
      if (value <= this.allowedValues.min()) return(this.allowedValues.min());

      var offset = Math.abs(this.allowedValues[0] - value);
      var newValue = this.allowedValues[0];
      this.allowedValues.each( function(v) {
        var currentOffset = Math.abs(v - value);
        if (currentOffset <= offset){
          newValue = v;
          offset = currentOffset;
        }
      });
      return newValue;
    }
    if (value > this.range.end) return this.range.end;
    if (value < this.range.start) return this.range.start;
    return value;
  },
  setValue: function(sliderValue, handleIdx){
    if (!this.active) {
      this.activeHandleIdx = handleIdx || 0;
      this.activeHandle    = this.handles[this.activeHandleIdx];
      this.updateStyles();
    }
    handleIdx = handleIdx || this.activeHandleIdx || 0;
    if (this.initialized && this.restricted) {
      if ((handleIdx>0) && (sliderValue<this.values[handleIdx-1]))
        sliderValue = this.values[handleIdx-1];
      if ((handleIdx < (this.handles.length-1)) && (sliderValue>this.values[handleIdx+1]))
        sliderValue = this.values[handleIdx+1];
    }
    sliderValue = this.getNearestValue(sliderValue);
    this.values[handleIdx] = sliderValue;
    this.value = this.values[0]; // assure backwards compat

    this.handles[handleIdx].style[this.isVertical() ? 'top' : 'left'] =
      this.translateToPx(sliderValue);

    this.drawSpans();
    if (!this.dragging || !this.event) this.updateFinished();
  },
  setValueBy: function(delta, handleIdx) {
    this.setValue(this.values[handleIdx || this.activeHandleIdx || 0] + delta,
      handleIdx || this.activeHandleIdx || 0);
  },
  translateToPx: function(value) {
    return Math.round(
      ((this.trackLength-this.handleLength)/(this.range.end-this.range.start)) *
      (value - this.range.start)) + "px";
  },
  translateToValue: function(offset) {
    return ((offset/(this.trackLength-this.handleLength) *
      (this.range.end-this.range.start)) + this.range.start);
  },
  getRange: function(range) {
    var v = this.values.sortBy(Prototype.K);
    range = range || 0;
    return $R(v[range],v[range+1]);
  },
  minimumOffset: function(){
    return(this.isVertical() ? this.alignY : this.alignX);
  },
  maximumOffset: function(){
    return(this.isVertical() ?
      (this.track.offsetHeight != 0 ? this.track.offsetHeight :
        this.track.style.height.replace(/px$/,"")) - this.alignY :
      (this.track.offsetWidth != 0 ? this.track.offsetWidth :
        this.track.style.width.replace(/px$/,"")) - this.alignX);
  },
  isVertical:  function(){
    return (this.axis == 'vertical');
  },
  drawSpans: function() {
    var slider = this;
    if (this.spans)
      $R(0, this.spans.length-1).each(function(r) { slider.setSpan(slider.spans[r], slider.getRange(r)) });
    if (this.options.startSpan)
      this.setSpan(this.options.startSpan,
        $R(0, this.values.length>1 ? this.getRange(0).min() : this.value ));
    if (this.options.endSpan)
      this.setSpan(this.options.endSpan,
        $R(this.values.length>1 ? this.getRange(this.spans.length-1).max() : this.value, this.maximum));
  },
  setSpan: function(span, range) {
    if (this.isVertical()) {
      span.style.top = this.translateToPx(range.start);
      span.style.height = this.translateToPx(range.end - range.start + this.range.start);
    } else {
      span.style.left = this.translateToPx(range.start);
      span.style.width = this.translateToPx(range.end - range.start + this.range.start);
    }
  },
  updateStyles: function() {
    this.handles.each( function(h){ Element.removeClassName(h, 'selected') });
    Element.addClassName(this.activeHandle, 'selected');
  },
  startDrag: function(event) {
    if (Event.isLeftClick(event)) {
      if (!this.disabled){
        this.active = true;

        var handle = Event.element(event);
        var pointer  = [Event.pointerX(event), Event.pointerY(event)];
        var track = handle;
        if (track==this.track) {
          var offsets  = Position.cumulativeOffset(this.track);
          this.event = event;
          this.setValue(this.translateToValue(
           (this.isVertical() ? pointer[1]-offsets[1] : pointer[0]-offsets[0])-(this.handleLength/2)
          ));
          var offsets  = Position.cumulativeOffset(this.activeHandle);
          this.offsetX = (pointer[0] - offsets[0]);
          this.offsetY = (pointer[1] - offsets[1]);
        } else {
          // find the handle (prevents issues with Safari)
          while((this.handles.indexOf(handle) == -1) && handle.parentNode)
            handle = handle.parentNode;

          if (this.handles.indexOf(handle)!=-1) {
            this.activeHandle    = handle;
            this.activeHandleIdx = this.handles.indexOf(this.activeHandle);
            this.updateStyles();

            var offsets  = Position.cumulativeOffset(this.activeHandle);
            this.offsetX = (pointer[0] - offsets[0]);
            this.offsetY = (pointer[1] - offsets[1]);
          }
        }
      }
      Event.stop(event);
    }
  },
  update: function(event) {
   if (this.active) {
      if (!this.dragging) this.dragging = true;
      this.draw(event);
      if (Prototype.Browser.WebKit) window.scrollBy(0,0);
      Event.stop(event);
   }
  },
  draw: function(event) {
    var pointer = [Event.pointerX(event), Event.pointerY(event)];
    var offsets = Position.cumulativeOffset(this.track);
    pointer[0] -= this.offsetX + offsets[0];
    pointer[1] -= this.offsetY + offsets[1];
    this.event = event;
    this.setValue(this.translateToValue( this.isVertical() ? pointer[1] : pointer[0] ));
    if (this.initialized && this.options.onSlide)
      this.options.onSlide(this.values.length>1 ? this.values : this.value, this);
  },
  endDrag: function(event) {
    if (this.active && this.dragging) {
      this.finishDrag(event, true);
      Event.stop(event);
    }
    this.active = false;
    this.dragging = false;
  },
  finishDrag: function(event, success) {
    this.active = false;
    this.dragging = false;
    this.updateFinished();
  },
  updateFinished: function() {
    if (this.initialized && this.options.onChange)
      this.options.onChange(this.values.length>1 ? this.values : this.value, this);
    this.event = null;
  }
});
/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2006-2017 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
function popWin(url,win,para) {
    var win = window.open(url,win,para);
    win.focus();
}

function setLocation(url){
    window.location.href = encodeURI(url);
}

function setPLocation(url, setFocus){
    if( setFocus ) {
        window.opener.focus();
    }
    window.opener.location.href = encodeURI(url);
}

/**
 * @deprecated
 */
function setLanguageCode(code, fromCode){
    //TODO: javascript cookies have different domain and path than php cookies
    var href = window.location.href;
    var after = '', dash;
    if (dash = href.match(/\#(.*)$/)) {
        href = href.replace(/\#(.*)$/, '');
        after = dash[0];
    }

    if (href.match(/[?]/)) {
        var re = /([?&]store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '$1'+code);
        } else {
            href += '&store='+code;
        }

        var re = /([?&]from_store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '');
        }
    } else {
        href += '?store='+code;
    }
    if (typeof(fromCode) != 'undefined') {
        href += '&from_store='+fromCode;
    }
    href += after;

    setLocation(href);
}

/**
 * Add classes to specified elements.
 * Supported classes are: 'odd', 'even', 'first', 'last'
 *
 * @param elements - array of elements to be decorated
 * [@param decorateParams] - array of classes to be set. If omitted, all available will be used
 */
function decorateGeneric(elements, decorateParams)
{
    var allSupportedParams = ['odd', 'even', 'first', 'last'];
    var _decorateParams = {};
    var total = elements.length;

    if (total) {
        // determine params called
        if (typeof(decorateParams) == 'undefined') {
            decorateParams = allSupportedParams;
        }
        if (!decorateParams.length) {
            return;
        }
        for (var k in allSupportedParams) {
            _decorateParams[allSupportedParams[k]] = false;
        }
        for (var k in decorateParams) {
            _decorateParams[decorateParams[k]] = true;
        }

        // decorate elements
        // elements[0].addClassName('first'); // will cause bug in IE (#5587)
        if (_decorateParams.first) {
            Element.addClassName(elements[0], 'first');
        }
        if (_decorateParams.last) {
            Element.addClassName(elements[total-1], 'last');
        }
        for (var i = 0; i < total; i++) {
            if ((i + 1) % 2 == 0) {
                if (_decorateParams.even) {
                    Element.addClassName(elements[i], 'even');
                }
            }
            else {
                if (_decorateParams.odd) {
                    Element.addClassName(elements[i], 'odd');
                }
            }
        }
    }
}

/**
 * Decorate table rows and cells, tbody etc
 * @see decorateGeneric()
 */
function decorateTable(table, options) {
    var table = $(table);
    if (table) {
        // set default options
        var _options = {
            'tbody'    : false,
            'tbody tr' : ['odd', 'even', 'first', 'last'],
            'thead tr' : ['first', 'last'],
            'tfoot tr' : ['first', 'last'],
            'tr td'    : ['last']
        };
        // overload options
        if (typeof(options) != 'undefined') {
            for (var k in options) {
                _options[k] = options[k];
            }
        }
        // decorate
        if (_options['tbody']) {
            decorateGeneric(table.select('tbody'), _options['tbody']);
        }
        if (_options['tbody tr']) {
            decorateGeneric(table.select('tbody tr'), _options['tbody tr']);
        }
        if (_options['thead tr']) {
            decorateGeneric(table.select('thead tr'), _options['thead tr']);
        }
        if (_options['tfoot tr']) {
            decorateGeneric(table.select('tfoot tr'), _options['tfoot tr']);
        }
        if (_options['tr td']) {
            var allRows = table.select('tr');
            if (allRows.length) {
                for (var i = 0; i < allRows.length; i++) {
                    decorateGeneric(allRows[i].getElementsByTagName('TD'), _options['tr td']);
                }
            }
        }
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateList(list, nonRecursive) {
    if ($(list)) {
        if (typeof(nonRecursive) == 'undefined') {
            var items = $(list).select('li');
        }
        else {
            var items = $(list).childElements();
        }
        decorateGeneric(items, ['odd', 'even', 'last']);
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateDataList(list) {
    list = $(list);
    if (list) {
        decorateGeneric(list.select('dt'), ['odd', 'even', 'last']);
        decorateGeneric(list.select('dd'), ['odd', 'even', 'last']);
    }
}

/**
 * Parse SID and produces the correct URL
 */
function parseSidUrl(baseUrl, urlExt) {
    var sidPos = baseUrl.indexOf('/?SID=');
    var sid = '';
    urlExt = (urlExt != undefined) ? urlExt : '';

    if(sidPos > -1) {
        sid = '?' + baseUrl.substring(sidPos + 2);
        baseUrl = baseUrl.substring(0, sidPos + 1);
    }

    return baseUrl+urlExt+sid;
}

/**
 * Formats currency using patern
 * format - JSON (pattern, decimal, decimalsDelimeter, groupsDelimeter)
 * showPlus - true (always show '+'or '-'),
 *      false (never show '-' even if number is negative)
 *      null (show '-' if number is negative)
 */

function formatCurrency(price, format, showPlus){
    var precision = isNaN(format.precision = Math.abs(format.precision)) ? 2 : format.precision;
    var requiredPrecision = isNaN(format.requiredPrecision = Math.abs(format.requiredPrecision)) ? 2 : format.requiredPrecision;

    //precision = (precision > requiredPrecision) ? precision : requiredPrecision;
    //for now we don't need this difference so precision is requiredPrecision
    precision = requiredPrecision;

    var integerRequired = isNaN(format.integerRequired = Math.abs(format.integerRequired)) ? 1 : format.integerRequired;

    var decimalSymbol = format.decimalSymbol == undefined ? "," : format.decimalSymbol;
    var groupSymbol = format.groupSymbol == undefined ? "." : format.groupSymbol;
    var groupLength = format.groupLength == undefined ? 3 : format.groupLength;

    var s = '';

    if (showPlus == undefined || showPlus == true) {
        s = price < 0 ? "-" : ( showPlus ? "+" : "");
    } else if (showPlus == false) {
        s = '';
    }

    var i = parseInt(price = Math.abs(+price || 0).toFixed(precision)) + "";
    var pad = (i.length < integerRequired) ? (integerRequired - i.length) : 0;
    while (pad) { i = '0' + i; pad--; }
    j = (j = i.length) > groupLength ? j % groupLength : 0;
    re = new RegExp("(\\d{" + groupLength + "})(?=\\d)", "g");

    /**
     * replace(/-/, 0) is only for fixing Safari bug which appears
     * when Math.abs(0).toFixed() executed on "0" number.
     * Result is "0.-0" :(
     */
    var r = (j ? i.substr(0, j) + groupSymbol : "") + i.substr(j).replace(re, "$1" + groupSymbol) + (precision ? decimalSymbol + Math.abs(price - i).toFixed(precision).replace(/-/, 0).slice(2) : "");
    var pattern = '';
    if (format.pattern.indexOf('{sign}') == -1) {
        pattern = s + format.pattern;
    } else {
        pattern = format.pattern.replace('{sign}', s);
    }

    return pattern.replace('%s', r).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

function expandDetails(el, childClass) {
    if (Element.hasClassName(el,'show-details')) {
        $$(childClass).each(function(item){
            item.hide();
        });
        Element.removeClassName(el,'show-details');
    }
    else {
        $$(childClass).each(function(item){
            item.show();
        });
        Element.addClassName(el,'show-details');
    }
}

// Version 1.0
var isIE = navigator.appVersion.match(/MSIE/) == "MSIE";

if (!window.Varien)
    var Varien = new Object();

Varien.showLoading = function(){
    var loader = $('loading-process');
    loader && loader.show();
};
Varien.hideLoading = function(){
    var loader = $('loading-process');
    loader && loader.hide();
};
Varien.GlobalHandlers = {
    onCreate: function() {
        Varien.showLoading();
    },

    onComplete: function() {
        if(Ajax.activeRequestCount == 0) {
            Varien.hideLoading();
        }
    }
};

Ajax.Responders.register(Varien.GlobalHandlers);

/**
 * Quick Search form client model
 */
Varien.searchForm = Class.create();
Varien.searchForm.prototype = {
    initialize : function(form, field, emptyText){
        this.form   = $(form);
        this.field  = $(field);
        this.emptyText = emptyText;

        Event.observe(this.form,  'submit', this.submit.bind(this));
        Event.observe(this.field, 'focus', this.focus.bind(this));
        Event.observe(this.field, 'blur', this.blur.bind(this));
        this.blur();
    },

    submit : function(event){
        if (this.field.value == this.emptyText || this.field.value == ''){
            Event.stop(event);
            return false;
        }
        return true;
    },

    focus : function(event){
        if(this.field.value==this.emptyText){
            this.field.value='';
        }

    },

    blur : function(event){
        if(this.field.value==''){
            this.field.value=this.emptyText;
        }
    },

    initAutocomplete : function(url, destinationElement){
        new Ajax.Autocompleter(
            this.field,
            destinationElement,
            url,
            {
                paramName: this.field.name,
                method: 'get',
                minChars: 2,
                updateElement: this._selectAutocompleteItem.bind(this),
                onShow : function(element, update) {
                    if(!update.style.position || update.style.position=='absolute') {
                        update.style.position = 'absolute';
                        Position.clone(element, update, {
                            setHeight: false,
                            offsetTop: element.offsetHeight
                        });
                    }
                    Effect.Appear(update,{duration:0});
                }

            }
        );
    },

    _selectAutocompleteItem : function(element){
        if(element.title){
            this.field.value = element.title;
        }
        this.form.submit();
    }
};

Varien.Tabs = Class.create();
Varien.Tabs.prototype = {
  initialize: function(selector) {
    var self=this;
    $$(selector+' a').each(this.initTab.bind(this));
  },

  initTab: function(el) {
      el.href = 'javascript:void(0)';
      if ($(el.parentNode).hasClassName('active')) {
        this.showContent(el);
      }
      el.observe('click', this.showContent.bind(this, el));
  },

  showContent: function(a) {
    var li = $(a.parentNode), ul = $(li.parentNode);
    ul.getElementsBySelector('li', 'ol').each(function(el){
      var contents = $(el.id+'_contents');
      if (el==li) {
        el.addClassName('active');
        contents.show();
      } else {
        el.removeClassName('active');
        contents.hide();
      }
    });
  }
};

Varien.DateElement = Class.create();
Varien.DateElement.prototype = {
    initialize: function(type, content, required, format) {
        if (type == 'id') {
            // id prefix
            this.day    = $(content + 'day');
            this.month  = $(content + 'month');
            this.year   = $(content + 'year');
            this.full   = $(content + 'full');
            this.advice = $(content + 'date-advice');
        } else if (type == 'container') {
            // content must be container with data
            this.day    = content.day;
            this.month  = content.month;
            this.year   = content.year;
            this.full   = content.full;
            this.advice = content.advice;
        } else {
            return;
        }

        this.required = required;
        this.format   = format;

        this.day.addClassName('validate-custom');
        this.day.validate = this.validate.bind(this);
        this.month.addClassName('validate-custom');
        this.month.validate = this.validate.bind(this);
        this.year.addClassName('validate-custom');
        this.year.validate = this.validate.bind(this);

        this.setDateRange(false, false);
        this.year.setAttribute('autocomplete','off');

        this.advice.hide();

        var date = new Date;
        this.curyear = date.getFullYear();
    },
    validate: function() {
        var error = false,
            day   = parseInt(this.day.value, 10)   || 0,
            month = parseInt(this.month.value, 10) || 0,
            year  = parseInt(this.year.value, 10)  || 0;
        if (this.day.value.strip().empty()
            && this.month.value.strip().empty()
            && this.year.value.strip().empty()
        ) {
            if (this.required) {
                error = 'This date is a required value.';
            } else {
                this.full.value = '';
            }
        } else if (!day || !month || !year) {
            error = 'Please enter a valid full date';
        } else {
            var date = new Date, countDaysInMonth = 0, errorType = null;
            date.setYear(year);date.setMonth(month-1);date.setDate(32);
            countDaysInMonth = 32 - date.getDate();
            if(!countDaysInMonth || countDaysInMonth>31) countDaysInMonth = 31;
            if(year < 1900) error = this.errorTextModifier(this.validateDataErrorText);

            if (day<1 || day>countDaysInMonth) {
                errorType = 'day';
                error = 'Please enter a valid day (1-%d).';
            } else if (month<1 || month>12) {
                errorType = 'month';
                error = 'Please enter a valid month (1-12).';
            } else {
                if(day % 10 == day) this.day.value = '0'+day;
                if(month % 10 == month) this.month.value = '0'+month;
                this.full.value = this.format.replace(/%[mb]/i, this.month.value).replace(/%[de]/i, this.day.value).replace(/%y/i, this.year.value);
                var testFull = this.month.value + '/' + this.day.value + '/'+ this.year.value;
                var test = new Date(testFull);
                if (isNaN(test)) {
                    error = 'Please enter a valid date.';
                } else {
                    this.setFullDate(test);
                }
            }
            var valueError = false;
            if (!error && !this.validateData()){//(year<1900 || year>curyear) {
                errorType = this.validateDataErrorType;//'year';
                valueError = this.validateDataErrorText;//'Please enter a valid year (1900-%d).';
                error = valueError;
            }
        }

        if (error !== false) {
            try {
                error = Translator.translate(error);
            }
            catch (e) {}
            if (!valueError) {
                this.advice.innerHTML = error.replace('%d', countDaysInMonth);
            } else {
                this.advice.innerHTML = this.errorTextModifier(error);
            }
            this.advice.show();
            return false;
        }

        // fixing elements class
        this.day.removeClassName('validation-failed');
        this.month.removeClassName('validation-failed');
        this.year.removeClassName('validation-failed');

        this.advice.hide();
        return true;
    },
    validateData: function() {
        var year = this.fullDate.getFullYear();
        return (year>=1900 && year<=this.curyear);
    },
    validateDataErrorType: 'year',
    validateDataErrorText: 'Please enter a valid year (1900-%d).',
    errorTextModifier: function(text) {
        text = Translator.translate(text);
        return text.replace('%d', this.curyear);
    },
    setDateRange: function(minDate, maxDate) {
        this.minDate = minDate;
        this.maxDate = maxDate;
    },
    setFullDate: function(date) {
        this.fullDate = date;
    }
};

Varien.DOB = Class.create();
Varien.DOB.prototype = {
    initialize: function(selector, required, format) {
        var el = $$(selector)[0];
        var container       = {};
        container.day       = Element.select(el, '.dob-day input')[0];
        container.month     = Element.select(el, '.dob-month input')[0];
        container.year      = Element.select(el, '.dob-year input')[0];
        container.full      = Element.select(el, '.dob-full input')[0];
        container.advice    = Element.select(el, '.validation-advice')[0];

        new Varien.DateElement('container', container, required, format);
    }
};

Varien.dateRangeDate = Class.create();
Varien.dateRangeDate.prototype = Object.extend(new Varien.DateElement(), {
    validateData: function() {
        var validate = true;
        if (this.minDate || this.maxValue) {
            if (this.minDate) {
                this.minDate = new Date(this.minDate);
                this.minDate.setHours(0);
                if (isNaN(this.minDate)) {
                    this.minDate = new Date('1/1/1900');
                }
                validate = validate && (this.fullDate >= this.minDate);
            }
            if (this.maxDate) {
                this.maxDate = new Date(this.maxDate);
                this.minDate.setHours(0);
                if (isNaN(this.maxDate)) {
                    this.maxDate = new Date();
                }
                validate = validate && (this.fullDate <= this.maxDate);
            }
            if (this.maxDate && this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date between %s and %s';
            } else if (this.maxDate) {
                this.validateDataErrorText = 'Please enter a valid date less than or equal to %s';
            } else if (this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date equal to or greater than %s';
            } else {
                this.validateDataErrorText = '';
            }
        }
        return validate;
    },
    validateDataErrorText: 'Date should be between %s and %s',
    errorTextModifier: function(text) {
        if (this.minDate) {
            text = text.sub('%s', this.dateFormat(this.minDate));
        }
        if (this.maxDate) {
            text = text.sub('%s', this.dateFormat(this.maxDate));
        }
        return text;
    },
    dateFormat: function(date) {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }
});

Varien.FileElement = Class.create();
Varien.FileElement.prototype = {
    initialize: function (id) {
        this.fileElement = $(id);
        this.hiddenElement = $(id + '_value');

        this.fileElement.observe('change', this.selectFile.bind(this));
    },
    selectFile: function(event) {
        this.hiddenElement.value = this.fileElement.getValue();
    }
};

Validation.addAllThese([
    ['validate-custom', ' ', function(v,elm) {
        return elm.validate();
    }]
]);

function truncateOptions() {
    $$('.truncated').each(function(element){
        Event.observe(element, 'mouseover', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').addClassName('show');
            }
        });
        Event.observe(element, 'mouseout', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').removeClassName('show');
            }
        });

    });
}
Event.observe(window, 'load', function(){
   truncateOptions();
});

Element.addMethods({
    getInnerText: function(element)
    {
        element = $(element);
        if(element.innerText && !Prototype.Browser.Opera) {
            return element.innerText;
        }
        return element.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g, ' ').strip();
    }
});

/*
if (!("console" in window) || !("firebug" in console))
{
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
    "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

    window.console = {};
    for (var i = 0; i < names.length; ++i)
        window.console[names[i]] = function() {}
}
*/

/**
 * Executes event handler on the element. Works with event handlers attached by Prototype,
 * in a browser-agnostic fashion.
 * @param element The element object
 * @param event Event name, like 'change'
 *
 * @example fireEvent($('my-input', 'click'));
 */
function fireEvent(element, event) {
    if (document.createEvent) {
        // dispatch for all browsers except IE before version 9
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type, bubbling, cancelable
        return element.dispatchEvent(evt);
    } else {
        // dispatch for IE before version 9
        var evt = document.createEventObject();
        return element.fireEvent('on' + event, evt);
    }
}

/**
 * Returns more accurate results of floating-point modulo division
 * E.g.:
 * 0.6 % 0.2 = 0.19999999999999996
 * modulo(0.6, 0.2) = 0
 *
 * @param dividend
 * @param divisor
 */
function modulo(dividend, divisor)
{
    var epsilon = divisor / 10000;
    var remainder = dividend % divisor;

    if (Math.abs(remainder - divisor) < epsilon || Math.abs(remainder) < epsilon) {
        remainder = 0;
    }

    return remainder;
}

/**
 * createContextualFragment is not supported in IE9. Adding its support.
 */
if ((typeof Range != "undefined") && !Range.prototype.createContextualFragment)
{
    Range.prototype.createContextualFragment = function(html)
    {
        var frag = document.createDocumentFragment(),
        div = document.createElement("div");
        frag.appendChild(div);
        div.outerHTML = html;
        return frag;
    };
}

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2006-2017 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
VarienForm = Class.create();
VarienForm.prototype = {
    initialize: function(formId, firstFieldFocus){
        this.form       = $(formId);
        if (!this.form) {
            return;
        }
        this.cache      = $A();
        this.currLoader = false;
        this.currDataIndex = false;
        this.validator  = new Validation(this.form);
        this.elementFocus   = this.elementOnFocus.bindAsEventListener(this);
        this.elementBlur    = this.elementOnBlur.bindAsEventListener(this);
        this.childLoader    = this.onChangeChildLoad.bindAsEventListener(this);
        this.highlightClass = 'highlight';
        this.extraChildParams = '';
        this.firstFieldFocus= firstFieldFocus || false;
        this.bindElements();
        if(this.firstFieldFocus){
            try{
                Form.Element.focus(Form.findFirstElement(this.form));
            }
            catch(e){}
        }
    },

    submit : function(url){
        if(this.validator && this.validator.validate()){
             this.form.submit();
        }
        return false;
    },

    bindElements:function (){
        var elements = Form.getElements(this.form);
        for (var row in elements) {
            if (elements[row].id) {
                Event.observe(elements[row],'focus',this.elementFocus);
                Event.observe(elements[row],'blur',this.elementBlur);
            }
        }
    },

    elementOnFocus: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.addClassName(element, this.highlightClass);
        }
    },

    elementOnBlur: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.removeClassName(element, this.highlightClass);
        }
    },

    setElementsRelation: function(parent, child, dataUrl, first){
        if (parent=$(parent)) {
            // TODO: array of relation and caching
            if (!this.cache[parent.id]){
                this.cache[parent.id] = $A();
                this.cache[parent.id]['child']     = child;
                this.cache[parent.id]['dataUrl']   = dataUrl;
                this.cache[parent.id]['data']      = $A();
                this.cache[parent.id]['first']      = first || false;
            }
            Event.observe(parent,'change',this.childLoader);
        }
    },

    onChangeChildLoad: function(event){
        element = Event.element(event);
        this.elementChildLoad(element);
    },

    elementChildLoad: function(element, callback){
        this.callback = callback || false;
        if (element.value) {
            this.currLoader = element.id;
            this.currDataIndex = element.value;
            if (this.cache[element.id]['data'][element.value]) {
                this.setDataToChild(this.cache[element.id]['data'][element.value]);
            }
            else{
                new Ajax.Request(this.cache[this.currLoader]['dataUrl'],{
                        method: 'post',
                        parameters: {"parent":element.value},
                        onComplete: this.reloadChildren.bind(this)
                });
            }
        }
    },

    reloadChildren: function(transport){
        var data = transport.responseJSON || transport.responseText.evalJSON(true) || {};
        this.cache[this.currLoader]['data'][this.currDataIndex] = data;
        this.setDataToChild(data);
    },

    setDataToChild: function(data){
        if (data.length) {
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<select name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                if(this.cache[this.currLoader]['first']){
                    html+= '<option value="">'+this.cache[this.currLoader]['first']+'</option>';
                }
                for (var i in data){
                    if(data[i].value) {
                        html+= '<option value="'+data[i].value+'"';
                        if(child.value && (child.value == data[i].value || child.value == data[i].label)){
                            html+= ' selected';
                        }
                        html+='>'+data[i].label+'</option>';
                    }
                }
                html+= '</select>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }
        else{
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<input type="text" name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }

        this.bindElements();
        if (this.callback) {
            this.callback();
        }
    }
};

RegionUpdater = Class.create();
RegionUpdater.prototype = {
    initialize: function (countryEl, regionTextEl, regionSelectEl, regions, disableAction, zipEl)
    {
        this.countryEl = $(countryEl);
        this.regionTextEl = $(regionTextEl);
        this.regionSelectEl = $(regionSelectEl);
        this.zipEl = $(zipEl);
        this.config = regions['config'];
        delete regions.config;
        this.regions = regions;

        this.disableAction = (typeof disableAction=='undefined') ? 'hide' : disableAction;
        this.zipOptions = (typeof zipOptions=='undefined') ? false : zipOptions;

        if (this.regionSelectEl.options.length<=1) {
            this.update();
        }

        Event.observe(this.countryEl, 'change', this.update.bind(this));
    },

    _checkRegionRequired: function()
    {
        var label, wildCard;
        var elements = [this.regionTextEl, this.regionSelectEl];
        var that = this;
        if (typeof this.config == 'undefined') {
            return;
        }
        var regionRequired = this.config.regions_required.indexOf(this.countryEl.value) >= 0;

        elements.each(function(currentElement) {
            Validation.reset(currentElement);
            label = $$('label[for="' + currentElement.id + '"]')[0];
            if (label) {
                wildCard = label.down('em') || label.down('span.required');
                if (!that.config.show_all_regions) {
                    if (regionRequired) {
                        label.up().show();
                    } else {
                        label.up().hide();
                    }
                }
            }

            if (label && wildCard) {
                if (!regionRequired) {
                    wildCard.hide();
                    if (label.hasClassName('required')) {
                        label.removeClassName('required');
                    }
                } else if (regionRequired) {
                    wildCard.show();
                    if (!label.hasClassName('required')) {
                        label.addClassName('required');
                    }
                }
            }

            if (!regionRequired) {
                if (currentElement.hasClassName('required-entry')) {
                    currentElement.removeClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    currentElement.hasClassName('validate-select')) {
                    currentElement.removeClassName('validate-select');
                }
            } else {
                if (!currentElement.hasClassName('required-entry')) {
                    currentElement.addClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    !currentElement.hasClassName('validate-select')) {
                    currentElement.addClassName('validate-select');
                }
            }
        });
    },

    update: function()
    {
        if (this.regions[this.countryEl.value]) {
            var i, option, region, def;

            def = this.regionSelectEl.getAttribute('defaultValue');
            if (this.regionTextEl) {
                if (!def) {
                    def = this.regionTextEl.value.toLowerCase();
                }
                this.regionTextEl.value = '';
            }

            this.regionSelectEl.options.length = 1;
            for (regionId in this.regions[this.countryEl.value]) {
                region = this.regions[this.countryEl.value][regionId];

                option = document.createElement('OPTION');
                option.value = regionId;
                option.text = region.name.stripTags();
                option.title = region.name;

                if (this.regionSelectEl.options.add) {
                    this.regionSelectEl.options.add(option);
                } else {
                    this.regionSelectEl.appendChild(option);
                }

                if (regionId == def || (region.name && region.name.toLowerCase() == def)
                    || (region.name && region.code.toLowerCase() == def)
                ) {
                    this.regionSelectEl.value = regionId;
                }
            }
            this.sortSelect();
            if (this.disableAction == 'hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = 'none';
                }

                this.regionSelectEl.style.display = '';
            } else if (this.disableAction == 'disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = true;
                }
                this.regionSelectEl.disabled = false;
            }
            this.setMarkDisplay(this.regionSelectEl, true);
        } else {
            this.regionSelectEl.options.length = 1;
            this.sortSelect();
            if (this.disableAction == 'hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = '';
                }
                this.regionSelectEl.style.display = 'none';
                Validation.reset(this.regionSelectEl);
            } else if (this.disableAction == 'disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = false;
                }
                this.regionSelectEl.disabled = true;
            } else if (this.disableAction == 'nullify') {
                this.regionSelectEl.options.length = 1;
                this.regionSelectEl.value = '';
                this.regionSelectEl.selectedIndex = 0;
                this.lastCountryId = '';
            }
            this.setMarkDisplay(this.regionSelectEl, false);
        }

        this._checkRegionRequired();
        // Make Zip and its label required/optional
        var zipUpdater = new ZipUpdater(this.countryEl.value, this.zipEl);
        zipUpdater.update();
    },

    setMarkDisplay: function(elem, display){
        elem = $(elem);
        var labelElement = elem.up(0).down('label > span.required') ||
                           elem.up(1).down('label > span.required') ||
                           elem.up(0).down('label.required > em') ||
                           elem.up(1).down('label.required > em');
        if(labelElement) {
            inputElement = labelElement.up().next('input');
            if (display) {
                labelElement.show();
                if (inputElement) {
                    inputElement.addClassName('required-entry');
                }
            } else {
                labelElement.hide();
                if (inputElement) {
                    inputElement.removeClassName('required-entry');
                }
            }
        }
    },
    sortSelect : function () {
        var elem = this.regionSelectEl;
        var tmpArray = new Array();
        var currentVal = $(elem).value;
        for (var i = 0; i < $(elem).options.length; i++) {
            if (i == 0) {
                continue;
            }
            tmpArray[i-1] = new Array();
            tmpArray[i-1][0] = $(elem).options[i].text;
            tmpArray[i-1][1] = $(elem).options[i].value;
        }
        tmpArray.sort();
        for (var i = 1; i <= tmpArray.length; i++) {
            var op = new Option(tmpArray[i-1][0], tmpArray[i-1][1]);
            $(elem).options[i] = op;
        }
        $(elem).value = currentVal;
        return;
    }
};

ZipUpdater = Class.create();
ZipUpdater.prototype = {
    initialize: function(country, zipElement)
    {
        this.country = country;
        this.zipElement = $(zipElement);
    },

    update: function()
    {
        // Country ISO 2-letter codes must be pre-defined
        if (typeof optionalZipCountries == 'undefined') {
            return false;
        }

        // Ajax-request and normal content load compatibility
        if (this.zipElement != undefined) {
            Validation.reset(this.zipElement);
            this._setPostcodeOptional();
        } else {
            Event.observe(window, "load", this._setPostcodeOptional.bind(this));
        }
    },

    _setPostcodeOptional: function()
    {
        this.zipElement = $(this.zipElement);
        if (this.zipElement == undefined) {
            return false;
        }

        // find label
        var label = $$('label[for="' + this.zipElement.id + '"]')[0];
        if (label != undefined) {
            var wildCard = label.down('em') || label.down('span.required');
        }

        // Make Zip and its label required/optional
        if (optionalZipCountries.indexOf(this.country) != -1) {
            while (this.zipElement.hasClassName('required-entry')) {
                this.zipElement.removeClassName('required-entry');
            }
            if (wildCard != undefined) {
                wildCard.hide();
            }
        } else {
            this.zipElement.addClassName('required-entry');
            if (wildCard != undefined) {
                wildCard.show();
            }
        }
    }
};

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Mage
 * @package     js
 * @copyright   Copyright (c) 2006-2017 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

var Translate = Class.create();
Translate.prototype = {
    initialize: function(data){
        this.data = $H(data);
    },

    translate : function(){
        var args = arguments;
        var text = arguments[0];

        if(this.data.get(text)){
            return this.data.get(text);
        }
        return text;
    },
    add : function() {
        if (arguments.length > 1) {
            this.data.set(arguments[0], arguments[1]);
        } else if (typeof arguments[0] =='object') {
            $H(arguments[0]).each(function (pair){
                this.data.set(pair.key, pair.value);
            }.bind(this));
        }
    }
};

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Mage
 * @package     js
 * @copyright   Copyright (c) 2006-2017 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
// old school cookie functions grabbed off the web

if (!window.Mage) var Mage = {};

Mage.Cookies = {};
Mage.Cookies.expires  = null;
Mage.Cookies.path     = '/';
Mage.Cookies.domain   = null;
Mage.Cookies.secure   = false;
Mage.Cookies.set = function(name, value){
     var argv = arguments;
     var argc = arguments.length;
     var expires = (argc > 2) ? argv[2] : Mage.Cookies.expires;
     var path = (argc > 3) ? argv[3] : Mage.Cookies.path;
     var domain = (argc > 4) ? argv[4] : Mage.Cookies.domain;
     var secure = (argc > 5) ? argv[5] : Mage.Cookies.secure;
     document.cookie = name + "=" + escape (value) +
       ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
       ((path == null) ? "" : ("; path=" + path)) +
       ((domain == null) ? "" : ("; domain=" + domain)) +
       ((secure == true) ? "; secure" : "");
};

Mage.Cookies.get = function(name){
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    var j = 0;
    while(i < clen){
        j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return Mage.Cookies.getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if(i == 0)
            break;
    }
    return null;
};

Mage.Cookies.clear = function(name) {
  if(Mage.Cookies.get(name)){
    document.cookie = name + "=" +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
};

Mage.Cookies.getCookieVal = function(offset){
   var endstr = document.cookie.indexOf(";", offset);
   if(endstr == -1){
       endstr = document.cookie.length;
   }
   return unescape(document.cookie.substring(offset, endstr));
};

var Advancednewsletter = Class.create();
Advancednewsletter.prototype = {
    url: '',
    initialize: function(ctrl, url) {
        this.url = url;
        Event.observe(ctrl, 'click', function(event){this.display();Event.stop(event);}.bind(this));
        $('an-content').observe('click', (function(event) {
            if (event.element().id == 'advancednewsletter-cancel') {
                this.deactivate();
            }
        }).bind(this));

        //prepare position
        Event.observe(window,'resize', (function(event) {
            this.alignBlockAn($('an-content'), 400, null);
        }).bind(this));
    },
    display: function(){
        if ($('advancednewsletter-subscribe-ajax') == undefined) {
            this.sendResponse()
        } else {
            $('advancednewsletter-overlay').show();
            $('an-content').show();
            this.alignBlockAn($('an-content'), 400, null);
        }
    },
    deactivate: function(){
        $('advancednewsletter-overlay').hide();
        $('an-content').hide();
    },
    sendResponse: function(){
        this.displayWait();
        new Ajax.Request(this.url, {
            onSuccess: function(resp){
                $('subscribe-please-wait').hide();
                $('an-content').update(resp.responseText.stripScripts());
                $('an-content').show();
                this.alignBlockAn($('an-content'), 400, null);
                advancednewsletterForm = new VarienForm('advancednewsletter-form');
            }.bind(this)
        });
    },
    displayWait: function(){
        $('advancednewsletter-overlay').show();
        $('subscribe-please-wait').show();
        this.alignBlockAn($('subscribe-please-wait'), null, null);
        Event.observe($('advancednewsletter-overlay'), 'click', function(event){this.deactivate();Event.stop(event);}.bind(this));
    },
    alignBlockAn: function(block, width, height){
        if (!width) {
            width = block.getWidth();
        }
        if (!height) {
            height = block.getHeight();
        }
        var left = 0;
        var top = 0;
        block.style.position ="absolute";

        if (document.viewport.getWidth() > width && document.viewport.getHeight() > height) {
            block.style.position ="fixed";
        }
        if (document.viewport.getWidth() > width) {
            left = (document.viewport.getWidth()/2 - width/2);
        }
        if (document.viewport.getHeight() > height) {
            top = (document.viewport.getHeight()/2 - height/2);
        }

        block.style.height = height + 'px';
        block.style.width = width + 'px';
        block.style.left = left + 'px';
        block.style.top = top + 'px';
    }
};
//////////////////////////////////////////////////////////////////////////////////
// Cloud Zoom V1.0.2
// (c) 2010 by R Cecco. <http://www.professorcloud.com>
// MIT License
//
// Please retain this copyright header in all versions of the software
//////////////////////////////////////////////////////////////////////////////////
(function ($) {

    $(document).ready(function () {
        $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
    });

    function format(str) {
        for (var i = 1; i < arguments.length; i++) {
            str = str.replace('%' + (i - 1), arguments[i]);
        }
        return str;
    }

    function CloudZoom(jWin, opts) {
        var sImg = $('img', jWin);
        var img1;
        var img2;
        var zoomDiv = null;
        var $mouseTrap = null;
        var lens = null;
        var $tint = null;
        var softFocus = null;
        var $ie6Fix = null;
        var zoomImage;
        var controlTimer = 0;      
        var cw, ch;
        var destU = 0;
        var destV = 0;
        var currV = 0;
        var currU = 0;      
        var filesLoaded = 0;
        var mx,
            my; 
        var ctx = this, zw;
        // Display an image loading message. This message gets deleted when the images have loaded and the zoom init function is called.
        // We add a small delay before the message is displayed to avoid the message flicking on then off again virtually immediately if the
        // images load really fast, e.g. from the cache. 
        //var    ctx = this;
        setTimeout(function () {
            //                         <img src="/images/loading.gif"/>
            if ($mouseTrap === null) {
                var w = jWin.width();
                jWin.parent().append(format('<div style="width:%0px;position:absolute;top:75%;left:%1px;text-align:center" class="cloud-zoom-loading" >Loading...</div>', w / 3, (w / 2) - (w / 6))).find(':last').css('opacity', 0.5);
            }
        }, 200);


        var ie6FixRemove = function () {

            if ($ie6Fix !== null) {
                $ie6Fix.remove();
                $ie6Fix = null;
            }
        };

        // Removes cursor, tint layer, blur layer etc.
        this.removeBits = function () {
            //$mouseTrap.unbind();
            if (lens) {
                lens.remove();
                lens = null;             
            }
            if ($tint) {
                $tint.remove();
                $tint = null;
            }
            if (softFocus) {
                softFocus.remove();
                softFocus = null;
            }
            ie6FixRemove();

            $('.cloud-zoom-loading', jWin.parent()).remove();
        };


        this.destroy = function () {
            jWin.data('zoom', null);

            jQuery('.mousetrap').remove();
            if ($mouseTrap) {
                $mouseTrap.unbind();
                $mouseTrap.remove();
                $mouseTrap = null;
            }
            if (zoomDiv) {
                zoomDiv.remove();
                zoomDiv = null;
            }
            //ie6FixRemove();
            this.removeBits();
            // DON'T FORGET TO REMOVE JQUERY 'DATA' VALUES
        };


        // This is called when the zoom window has faded out so it can be removed.
        this.fadedOut = function () {
            
            if (zoomDiv) {
                zoomDiv.remove();
                zoomDiv = null;
            }
             this.removeBits();
            //ie6FixRemove();
        };

        this.controlLoop = function () {
            if (lens) {
                var x = (mx - sImg.offset().left - (cw * 0.5)) >> 0;
                var y = (my - sImg.offset().top - (ch * 0.5)) >> 0;
               
                if (x < 0) {
                    x = 0;
                }
                else if (x > (sImg.outerWidth() - cw)) {
                    x = (sImg.outerWidth() - cw);
                }
                if (y < 0) {
                    y = 0;
                }
                else if (y > (sImg.outerHeight() - ch)) {
                    y = (sImg.outerHeight() - ch);
                }

                lens.css({
                    left: x,
                    top: y
                });
                lens.css('background-position', (-x) + 'px ' + (-y) + 'px');

                destU = (((x) / sImg.outerWidth()) * zoomImage.width) >> 0;
                destV = (((y) / sImg.outerHeight()) * zoomImage.height) >> 0;
                currU += (destU - currU) / opts.smoothMove;
                currV += (destV - currV) / opts.smoothMove;

                zoomDiv.css('background-position', (-(currU >> 0) + 'px ') + (-(currV >> 0) + 'px'));              
            }
            controlTimer = setTimeout(function () {
                ctx.controlLoop();
            }, 30);
        };

        this.init2 = function (img, id) {

            filesLoaded++;
            //console.log(img.src + ' ' + id + ' ' + img.width);    
            if (id === 1) {
                zoomImage = img;
            }
            //this.images[id] = img;
            if (filesLoaded === 2) {
                this.init();
            }
        };

        /* Init function start.  */
        this.init = function () {
            // Remove loading message (if present);
            $('.cloud-zoom-loading', jWin.parent()).remove();


/* Add a box (mouseTrap) over the small image to trap mouse events.
        It has priority over zoom window to avoid issues with inner zoom.
        We need the dummy background image as IE does not trap mouse events on
        transparent parts of a div.
        */
            $mouseTrap = jWin.parent().append(format("<div class='mousetrap' style='background:#fff;opacity:0;filter:alpha(opacity=0);z-index:99;position:absolute;width:%0px;height:%1px;left:%2px;top:%3px;\'></div>", sImg.outerWidth(), sImg.outerHeight(), 0, 0)).find(':last');

            //////////////////////////////////////////////////////////////////////            
            /* Do as little as possible in mousemove event to prevent slowdown. */
            $mouseTrap.bind('mousemove', this, function (event) {
                // Just update the mouse position
                mx = event.pageX;
                my = event.pageY;
            });
            //////////////////////////////////////////////////////////////////////                    
            $mouseTrap.bind('mouseleave', this, function (event) {
                clearTimeout(controlTimer);
                //event.data.removeBits();                
                if(lens) { lens.fadeOut(299); }
                if($tint) { $tint.fadeOut(299); }
                if(softFocus) { softFocus.fadeOut(299); }
                zoomDiv.fadeOut(300, function () {
                    ctx.fadedOut();
                });                                                                
                return false;
            });
            //////////////////////////////////////////////////////////////////////            
            $mouseTrap.bind('mouseenter', this, function (event) {
                mx = event.pageX;
                my = event.pageY;
                zw = event.data;
                if (zoomDiv) {
                    zoomDiv.stop(true, false);
                    zoomDiv.remove();
                }

                var xPos = opts.adjustX,
                    yPos = opts.adjustY;
                             
                var siw = sImg.outerWidth();
                var sih = sImg.outerHeight();

                var w = opts.zoomWidth;
                var h = opts.zoomHeight;
                if (opts.zoomWidth == 'auto') {
                    w = siw;
                }
                if (opts.zoomHeight == 'auto') {
                    h = sih;
                }
                //$('#info').text( xPos + ' ' + yPos + ' ' + siw + ' ' + sih );
                var appendTo = jWin.parent(); // attach to the wrapper            
                var appendTo = jQuery(".container-product-image"); // attach to the wrapper
                switch (opts.position) {
                case 'top':
                    yPos -= h; // + opts.adjustY;
                    break;
                case 'right':
                    xPos += siw; // + opts.adjustX;
                    break;
                case 'bottom':
                    yPos += sih; // + opts.adjustY;
                    break;
                case 'left':
                    xPos -= w; // + opts.adjustX;                    
                    break;
                case 'inside':
                    w = siw;
                    h = sih;
                    break;
                    // All other values, try and find an id in the dom to attach to.
                default:
                    /*appendTo = $('#' + opts.position);
                    // If dom element doesn't exit, just use 'right' position as default.
                    if (!appendTo.length) {
                        appendTo = jWin;
                        xPos += siw; //+ opts.adjustX;
                        yPos += sih; // + opts.adjustY;    
                    } else {
                        w = appendTo.innerWidth();
                        h = appendTo.innerHeight();
                    }*/
                }

                xPos = jQuery(".container-product-image").width() + 5 ;
                w = jQuery(".container-product-image").width() ;

                zoomDiv = appendTo.append(format('<div id="cloud-zoom-big" class="cloud-zoom-big" style="display:none;position:absolute;left:%0px;top:%1px;width:%2px;height:%3px;background-repeat: no-repeat;background-image:url(\'%4\');z-index:99;"></div>', xPos, yPos, w, h, zoomImage.src)).find(':last');

                // Add the title from title tag.
                if (sImg.attr('title') && opts.showTitle) {
                    zoomDiv.append(format('<div class="cloud-zoom-title">%0</div>', sImg.attr('title'))).find(':last').css('opacity', opts.titleOpacity);
                }

                // Fix ie6 select elements wrong z-index bug. Placing an iFrame over the select element solves the issue...        
                if ($.browser.msie && $.browser.version < 7) {
                    $ie6Fix = $('<iframe frameborder="0" src="#"></iframe>').css({
                        position: "absolute",
                        left: xPos,
                        top: yPos,
                        zIndex: 99,
                        width: w,
                        height: h
                    }).insertBefore(zoomDiv);
                }

                zoomDiv.fadeIn(500);

                if (lens) {
                    lens.remove();
                    lens = null;
                } /* Work out size of cursor */
                
                
                if(typeof event.data.zoomDivWidth == 'undefined'){
                    event.data.zoomDivWidth = zoomDiv.get(0).offsetWidth - (zoomDiv.css('border-left-width').match(/(\d+)\.\d*/g, '')*1) - (zoomDiv.css('border-right-width').match(/(\d+)\.\d*/g, '')*1);
                }
                if(typeof event.data.zoomDivHeight == 'undefined'){
                    event.data.zoomDivHeight = zoomDiv.get(0).offsetHeight - (zoomDiv.css('border-top-width').match(/(\d+)\.\d*/g, '')*1) - (zoomDiv.css('border-bottom-width').match(/(\d+)\.\d*/g, '')*1);
                }
                
                cw = (sImg.outerWidth() / zoomImage.width) * event.data.zoomDivWidth;
                
                ch = (sImg.outerHeight() / zoomImage.height) * event.data.zoomDivHeight;


                // Attach mouse, initially invisible to prevent first frame glitch
                lens = jWin.append(format("<div class = 'cloud-zoom-lens' style='display:none;z-index:98;position:absolute;width:%0px;height:%1px;'></div>", cw, ch)).find(':last');

                $mouseTrap.css('cursor', lens.css('cursor'));

                var noTrans = false;

                // Init tint layer if needed. (Not relevant if using inside mode)            
                if (opts.tint) {
                    lens.css('background', 'url("' + sImg.attr('src') + '")');
                    $tint = jWin.append(format('<div style="display:none;position:absolute; left:0px; top:0px; width:%0px; height:%1px; background-color:%2;" />', sImg.outerWidth(), sImg.outerHeight(), opts.tint)).find(':last');
                    $tint.css('opacity', opts.tintOpacity);                    
                    noTrans = true;
                    $tint.fadeIn(500);

                }
                if (opts.softFocus) {
                    lens.css('background', 'url("' + sImg.attr('src') + '")');
                    softFocus = jWin.append(format('<div style="position:absolute;display:none;top:2px; left:2px; width:%0px; height:%1px;" />', sImg.outerWidth() - 2, sImg.outerHeight() - 2, opts.tint)).find(':last');
                    softFocus.css('background', 'url("' + sImg.attr('src') + '")');
                    softFocus.css('opacity', 0.5);
                    noTrans = true;
                    softFocus.fadeIn(500);
                }

                if (!noTrans) {
                    lens.css('opacity', opts.lensOpacity);                                        
                }
                if ( opts.position !== 'inside' ) { lens.fadeIn(500); }

                // Start processing. 
                zw.controlLoop();

                return; // Don't return false here otherwise opera will not detect change of the mouse pointer type.
            });
        };

        img1 = new Image();
        $(img1).load(function () {
            ctx.init2(this, 0);
        });
        img1.src = sImg.attr('src');

        img2 = new Image();
        $(img2).load(function () {
            ctx.init2(this, 1);
        });
        img2.src = jWin.attr('href');
    }

    $.fn.CloudZoom = function (options) {
        // IE6 background image flicker fix
        try {
            document.execCommand("BackgroundImageCache", false, true);
        } catch (e) {}
        this.each(function () {
            var    relOpts, opts;
            // Hmm...eval...slap on wrist.
            eval('var    a = {' + $(this).attr('rel') + '}');
            relOpts = a;
            if ($(this).is('.cloud-zoom')) {
                $(this).css({
                    'position': 'relative',
                    'display': 'block'
                });
                $('img', $(this)).css({
                    'display': 'block'
                });
                // Wrap an outer div around the link so we can attach things without them becoming part of the link.
                // But not if wrap already exists.
                if ($(this).parent().attr('id') != 'wrap') {
                    $(this).wrap('<div id="wrap" style="top:0px;z-index:99;position:relative;"></div>');
                }
                opts = $.extend({}, $.fn.CloudZoom.defaults, options);
                opts = $.extend({}, opts, relOpts);
                $(this).data('zoom', new CloudZoom($(this), opts));

            } else if ($(this).is('.cloud-zoom-gallery')) {
                opts = $.extend({}, relOpts, options);
                $(this).data('relOpts', opts);
                $(this).bind('click', $(this), function (event) {
                    var data = event.data.data('relOpts');
                    // Destroy the previous zoom
                    $('#' + data.useZoom).data('zoom').destroy();
                    // Change the biglink to point to the new big image.
                    $('#' + data.useZoom).attr('href', event.data.attr('href'));
                    // Change the small image to point to the new small image.
                    $('#' + data.useZoom + ' img').attr('src', event.data.data('relOpts').smallImage);
                    // Init a new zoom with the new images.                
                    $('#' + event.data.data('relOpts').useZoom).CloudZoom();
                    return false;
                });
            }
        });
        return this;
    };

    $.fn.CloudZoom.defaults = {
        zoomWidth: 'auto',
        zoomHeight: 'auto',
        position: 'right',
        tint: false,
        tintOpacity: 0.5,
        lensOpacity: 0.5,
        softFocus: false,
        smoothMove: 3,
        showTitle: true,
        titleOpacity: 0.5,
        adjustX: 0,
        adjustY: 0
    };

})(jQuery);

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(o){"use strict";o.fn.emulateTransitionEnd=function(t){var e=!1,i=this;o(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||o(i).trigger(o.support.transition.end)},t),this},o(function(){o.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}(),o.support.transition&&(o.event.special.bsTransitionEnd={bindType:o.support.transition.end,delegateType:o.support.transition.end,handle:function(t){if(o(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(n){"use strict";var e='[data-dismiss="alert"]',o=function(t){n(t).on("click",e,this.close)};o.VERSION="3.2.0",o.prototype.close=function(t){var e=n(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,""));var o=n(i);function s(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.hasClass("alert")?e:e.parent()),o.trigger(t=n.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),n.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",s).emulateTransitionEnd(150):s())};var t=n.fn.alert;n.fn.alert=function(i){return this.each(function(){var t=n(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new o(this)),"string"==typeof i&&e[i].call(t)})},n.fn.alert.Constructor=o,n.fn.alert.noConflict=function(){return n.fn.alert=t,this},n(document).on("click.bs.alert.data-api",e,o.prototype.close)}(jQuery),function(n){"use strict";var s=function(t,e){this.$element=n(t),this.options=n.extend({},s.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=n(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new s(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}s.VERSION="3.2.0",s.DEFAULTS={loadingText:"loading..."},s.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",s=i.data();t+="Text",null==s.resetText&&i.data("resetText",i[o]()),i[o](null==s[t]?this.options[t]:s[t]),setTimeout(n.proxy(function(){"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e))},this),0)},s.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var t=n.fn.button;n.fn.button=i,n.fn.button.Constructor=s,n.fn.button.noConflict=function(){return n.fn.button=t,this},n(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=n(t.target);e.hasClass("btn")||(e=e.closest(".btn")),i.call(e,"toggle"),t.preventDefault()})}(jQuery),function(d){"use strict";var n=function(t,e){this.$element=d(t).on("keydown.bs.carousel",d.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",d.proxy(this.pause,this)).on("mouseleave.bs.carousel",d.proxy(this.cycle,this))};function r(s){return this.each(function(){var t=d(this),e=t.data("bs.carousel"),i=d.extend({},n.DEFAULTS,t.data(),"object"==typeof s&&s),o="string"==typeof s?s:i.slide;e||t.data("bs.carousel",e=new n(this,i)),"number"==typeof s?e.to(s):o?e[o]():i.interval&&e.pause().cycle()})}n.VERSION="3.2.0",n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},n.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},n.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(d.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",d(this.$items[t]))},n.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&d.support.transition&&(this.$element.trigger(d.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){if(!this.sliding)return this.slide("next")},n.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},n.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||i[t](),s=this.interval,n="next"==t?"left":"right",r="next"==t?"first":"last",a=this;if(!o.length){if(!this.options.wrap)return;o=this.$element.find(".item")[r]()}if(o.hasClass("active"))return this.sliding=!1;var l=o[0],h=d.Event("slide.bs.carousel",{relatedTarget:l,direction:n});if(this.$element.trigger(h),!h.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=d(this.$indicators.children()[this.getItemIndex(o)]);p&&p.addClass("active")}var c=d.Event("slid.bs.carousel",{relatedTarget:l,direction:n});return d.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),o[0].offsetWidth,i.addClass(n),o.addClass(n),i.one("bsTransitionEnd",function(){o.removeClass([t,n].join(" ")).addClass("active"),i.removeClass(["active",n].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(c)},0)}).emulateTransitionEnd(1e3*i.css("transition-duration").slice(0,-1))):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(c)),s&&this.cycle(),this}};var t=d.fn.carousel;d.fn.carousel=r,d.fn.carousel.Constructor=n,d.fn.carousel.noConflict=function(){return d.fn.carousel=t,this},d(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(t){var e,i=d(this),o=d(i.attr("data-target")||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""));if(o.hasClass("carousel")){var s=d.extend({},o.data(),i.data()),n=i.attr("data-slide-to");n&&(s.interval=!1),r.call(o,s),n&&o.data("bs.carousel").to(n),t.preventDefault()}}),d(window).on("load",function(){d('[data-ride="carousel"]').each(function(){var t=d(this);r.call(t,t.data())})})}(jQuery),function(h){"use strict";var s=function(t,e){this.$element=h(t),this.options=h.extend({},s.DEFAULTS,e),this.transitioning=null,this.options.parent&&(this.$parent=h(this.options.parent)),this.options.toggle&&this.toggle()};function p(o){return this.each(function(){var t=h(this),e=t.data("bs.collapse"),i=h.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&"show"==o&&(o=!o),e||t.data("bs.collapse",e=new s(this,i)),"string"==typeof o&&e[o]()})}s.VERSION="3.2.0",s.DEFAULTS={toggle:!0},s.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},s.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t=h.Event("show.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.$parent&&this.$parent.find("> .panel > .in");if(e&&e.length){var i=e.data("bs.collapse");if(i&&i.transitioning)return;p.call(e,"hide"),i||e.data("bs.collapse",null)}var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!h.support.transition)return s.call(this);var n=h.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",h.proxy(s,this)).emulateTransitionEnd(350)[o](this.$element[0][n])}}},s.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=h.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!h.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",h.proxy(i,this)).emulateTransitionEnd(350)}}},s.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var t=h.fn.collapse;h.fn.collapse=p,h.fn.collapse.Constructor=s,h.fn.collapse.noConflict=function(){return h.fn.collapse=t,this},h(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e,i=h(this),o=i.attr("data-target")||t.preventDefault()||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),s=h(o),n=s.data("bs.collapse"),r=n?"toggle":i.data(),a=i.attr("data-parent"),l=a&&h(a);n&&n.transitioning||(l&&l.find('[data-toggle="collapse"][data-parent="'+a+'"]').not(i).addClass("collapsed"),i[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),p.call(s,r)})}(jQuery),function(a){"use strict";var l='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function n(i){i&&3===i.which||(a(".dropdown-backdrop").remove(),a(l).each(function(){var t=h(a(this)),e={relatedTarget:this};t.hasClass("open")&&(t.trigger(i=a.Event("hide.bs.dropdown",e)),i.isDefaultPrevented()||t.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function h(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i=e&&a(e);return i&&i.length?i:t.parent()}o.VERSION="3.2.0",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=h(e),o=i.hasClass("open");if(n(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",n);var s={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",s)),t.isDefaultPrevented())return;e.trigger("focus"),i.toggleClass("open").trigger("shown.bs.dropdown",s)}return!1}},o.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=h(e),o=i.hasClass("open");if(!o||o&&27==t.keyCode)return 27==t.which&&i.find(l).trigger("focus"),e.trigger("click");var s=" li:not(.divider):visible a",n=i.find('[role="menu"]'+s+', [role="listbox"]'+s);if(n.length){var r=n.index(n.filter(":focus"));38==t.keyCode&&0<r&&r--,40==t.keyCode&&r<n.length-1&&r++,~r||(r=0),n.eq(r).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",l,o.prototype.toggle).on("keydown.bs.dropdown.data-api",l+', [role="menu"], [role="listbox"]',o.prototype.keydown)}(jQuery),function(n){"use strict";var r=function(t,e){this.options=e,this.$body=n(document.body),this.$element=n(t),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,n.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function a(o,s){return this.each(function(){var t=n(this),e=t.data("bs.modal"),i=n.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new r(this,i)),"string"==typeof o?e[o](s):i.show&&e.show(s)})}r.VERSION="3.2.0",r.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},r.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},r.prototype.show=function(i){var o=this,t=n.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',n.proxy(this.hide,this)),this.backdrop(function(){var t=n.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),t&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var e=n.Event("shown.bs.modal",{relatedTarget:i});t?o.$element.find(".modal-dialog").one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):o.$element.trigger("focus").trigger(e)}))},r.prototype.hide=function(t){t&&t.preventDefault(),t=n.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),n(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),n.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",n.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},r.prototype.enforceFocus=function(){n(document).off("focusin.bs.modal").on("focusin.bs.modal",n.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},r.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",n.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},r.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},r.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},r.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=n.support.transition&&i;if(this.$backdrop=n('<div class="modal-backdrop '+i+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",n.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(150):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){e.removeBackdrop(),t&&t()};n.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(150):s()}else t&&t()},r.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},r.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},r.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},r.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=n.fn.modal;n.fn.modal=a,n.fn.modal.Constructor=r,n.fn.modal.noConflict=function(){return n.fn.modal=t,this},n(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=n(this),i=e.attr("href"),o=n(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),s=o.data("bs.modal")?"toggle":n.extend({remote:!/#/.test(i)&&i},o.data(),e.data());e.is("a")&&t.preventDefault(),o.one("show.bs.modal",function(t){t.isDefaultPrevented()||o.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),a.call(o,s,this)})}(jQuery),function(v){"use strict";var s=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};s.VERSION="3.2.0",s.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},s.prototype.init=function(t,e,i){this.enabled=!0,this.type=t,this.$element=v(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&v(this.options.viewport.selector||this.options.viewport);for(var o=this.options.trigger.split(" "),s=o.length;s--;){var n=o[s];if("click"==n)this.$element.on("click."+this.type,this.options.selector,v.proxy(this.toggle,this));else if("manual"!=n){var r="hover"==n?"mouseenter":"focusin",a="hover"==n?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,v.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,v.proxy(this.leave,this))}}this.options.selector?this._options=v.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},s.prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.getOptions=function(t){return(t=v.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},s.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&v.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},s.prototype.enter=function(t){var e=t instanceof this.constructor?t:v(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),v(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)},s.prototype.leave=function(t){var e=t instanceof this.constructor?t:v(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),v(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)},s.prototype.show=function(){var t=v.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=v.contains(document.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),s=this.getUID(this.type);this.setContent(),o.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&o.addClass("fade");var n="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,r=/\s?auto?\s?/i,a=r.test(n);a&&(n=n.replace(r,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(n).data("bs."+this.type,this),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element);var l=this.getPosition(),h=o[0].offsetWidth,p=o[0].offsetHeight;if(a){var c=n,d=this.$element.parent(),f=this.getPosition(d);n="bottom"==n&&l.top+l.height+p-f.scroll>f.height?"top":"top"==n&&l.top-f.scroll-p<0?"bottom":"right"==n&&l.right+h>f.width?"left":"left"==n&&l.left-h<f.left?"right":n,o.removeClass(c).addClass(n)}var u=this.getCalculatedOffset(n,l,h,p);this.applyPlacement(u,n);var g=function(){i.$element.trigger("shown.bs."+i.type),i.hoverState=null};v.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",g).emulateTransitionEnd(150):g()}},s.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,s=i[0].offsetHeight,n=parseInt(i.css("margin-top"),10),r=parseInt(i.css("margin-left"),10);isNaN(n)&&(n=0),isNaN(r)&&(r=0),t.top=t.top+n,t.left=t.left+r,v.offset.setOffset(i[0],v.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var a=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=s&&(t.top=t.top+s-l);var h=this.getViewportAdjustedDelta(e,t,a,l);h.left?t.left+=h.left:t.top+=h.top;var p=h.left?2*h.left-o+a:2*h.top-s+l,c=h.left?"left":"top",d=h.left?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][d],c)},s.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},s.prototype.hide=function(){var t=this,e=this.tip(),i=v.Event("hide.bs."+this.type);function o(){"in"!=t.hoverState&&e.detach(),t.$element.trigger("hidden.bs."+t.type)}if(this.$element.removeAttr("aria-describedby"),this.$element.trigger(i),!i.isDefaultPrevented())return e.removeClass("in"),v.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",o).emulateTransitionEnd(150):o(),this.hoverState=null,this},s.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},s.prototype.hasContent=function(){return this.getTitle()},s.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName;return v.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():null,{scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop(),width:i?v(window).width():t.outerWidth(),height:i?v(window).height():t.outerHeight()},i?{top:0,left:0}:t.offset())},s.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},s.prototype.getViewportAdjustedDelta=function(t,e,i,o){var s={top:0,left:0};if(!this.$viewport)return s;var n=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-n-r.scroll,l=e.top+n-r.scroll+o;a<r.top?s.top=r.top-a:l>r.top+r.height&&(s.top=r.top+r.height-l)}else{var h=e.left-n,p=e.left+n+i;h<r.left?s.left=r.left-h:p>r.width&&(s.left=r.left+r.width-p)}return s},s.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},s.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},s.prototype.tip=function(){return this.$tip=this.$tip||v(this.options.template)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},s.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},s.prototype.enable=function(){this.enabled=!0},s.prototype.disable=function(){this.enabled=!1},s.prototype.toggleEnabled=function(){this.enabled=!this.enabled},s.prototype.toggle=function(t){var e=this;t&&((e=v(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),v(t.currentTarget).data("bs."+this.type,e))),e.tip().hasClass("in")?e.leave(e):e.enter(e)},s.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var t=v.fn.tooltip;v.fn.tooltip=function(o){return this.each(function(){var t=v(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;(e||"destroy"!=o)&&(e||t.data("bs.tooltip",e=new s(this,i)),"string"==typeof o&&e[o]())})},v.fn.tooltip.Constructor=s,v.fn.tooltip.noConflict=function(){return v.fn.tooltip=t,this}}(jQuery),function(s){"use strict";var n=function(t,e){this.init("popover",t,e)};if(!s.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.2.0",n.DEFAULTS=s.extend({},s.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((n.prototype=s.extend({},s.fn.tooltip.Constructor.prototype)).constructor=n).prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").empty()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},n.prototype.tip=function(){return this.$tip||(this.$tip=s(this.options.template)),this.$tip};var t=s.fn.popover;s.fn.popover=function(o){return this.each(function(){var t=s(this),e=t.data("bs.popover"),i="object"==typeof o&&o;(e||"destroy"!=o)&&(e||t.data("bs.popover",e=new n(this,i)),"string"==typeof o&&e[o]())})},s.fn.popover.Constructor=n,s.fn.popover.noConflict=function(){return s.fn.popover=t,this}}(jQuery),function(n){"use strict";function s(t,e){var i=n.proxy(this.process,this);this.$body=n("body"),this.$scrollElement=n(t).is("body")?n(window):n(t),this.options=n.extend({},s.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",i),this.refresh(),this.process()}function e(o){return this.each(function(){var t=n(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new s(this,i)),"string"==typeof o&&e[o]()})}s.VERSION="3.2.0",s.DEFAULTS={offset:10},s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},s.prototype.refresh=function(){var o="offset",s=0;n.isWindow(this.$scrollElement[0])||(o="position",s=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var t=this;this.$body.find(this.selector).map(function(){var t=n(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&n(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+s,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},s.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),s=this.offsets,n=this.targets,r=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return r!=(t=n[n.length-1])&&this.activate(t);if(r&&e<=s[0])return r!=(t=n[0])&&this.activate(t);for(t=s.length;t--;)r!=n[t]&&e>=s[t]&&(!s[t+1]||e<=s[t+1])&&this.activate(n[t])},s.prototype.activate=function(t){this.activeTarget=t,n(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=n(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")};var t=n.fn.scrollspy;n.fn.scrollspy=e,n.fn.scrollspy.Constructor=s,n.fn.scrollspy.noConflict=function(){return n.fn.scrollspy=t,this},n(window).on("load.bs.scrollspy.data-api",function(){n('[data-spy="scroll"]').each(function(){var t=n(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var o=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new o(this)),"string"==typeof i&&e[i]()})}o.VERSION="3.2.0",o.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a")[0],s=r.Event("show.bs.tab",{relatedTarget:o});if(t.trigger(s),!s.isDefaultPrevented()){var n=r(i);this.activate(t.closest("li"),e),this.activate(n,n.parent(),function(){t.trigger({type:"shown.bs.tab",relatedTarget:o})})}}},o.prototype.activate=function(t,e,i){var o=e.find("> .active"),s=i&&r.support.transition&&o.hasClass("fade");function n(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),i&&i()}s?o.one("bsTransitionEnd",n).emulateTransitionEnd(150):n(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=o,r.fn.tab.noConflict=function(){return r.fn.tab=t,this},r(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e.call(r(this),"show")})}(jQuery),function(h){"use strict";var p=function(t,e){this.options=h.extend({},p.DEFAULTS,e),this.$target=h(this.options.target).on("scroll.bs.affix.data-api",h.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",h.proxy(this.checkPositionWithEventLoop,this)),this.$element=h(t),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=h(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new p(this,i)),"string"==typeof o&&e[o]()})}p.VERSION="3.2.0",p.RESET="affix affix-top affix-bottom",p.DEFAULTS={offset:0,target:window},p.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(p.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},p.prototype.checkPositionWithEventLoop=function(){setTimeout(h.proxy(this.checkPosition,this),1)},p.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=h(document).height(),e=this.$target.scrollTop(),i=this.$element.offset(),o=this.options.offset,s=o.top,n=o.bottom;"object"!=typeof o&&(n=s=o),"function"==typeof s&&(s=o.top(this.$element)),"function"==typeof n&&(n=o.bottom(this.$element));var r=!(null!=this.unpin&&e+this.unpin<=i.top)&&(null!=n&&i.top+this.$element.height()>=t-n?"bottom":null!=s&&e<=s&&"top");if(this.affixed!==r){null!=this.unpin&&this.$element.css("top","");var a="affix"+(r?"-"+r:""),l=h.Event(a+".bs.affix");this.$element.trigger(l),l.isDefaultPrevented()||(this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(p.RESET).addClass(a).trigger(h.Event(a.replace("affix","affixed"))),"bottom"==r&&this.$element.offset({top:t-this.$element.height()-n}))}}};var t=h.fn.affix;h.fn.affix=i,h.fn.affix.Constructor=p,h.fn.affix.noConflict=function(){return h.fn.affix=t,this},h(window).on("load",function(){h('[data-spy="affix"]').each(function(){var t=h(this),e=t.data();e.offset=e.offset||{},e.offsetBottom&&(e.offset.bottom=e.offsetBottom),e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(1-Math.pow(2,-10*e/a))+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(2-Math.pow(2,-10*--e))+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*-.5+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*((1+(r*=1.525))*e-r))+t:u/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:e<2/2.75?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return e<a/2?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});
window.define=function(){Array.prototype.slice.call(arguments).pop()(window.jQuery)},define(["jquery"],function(e){!function(a,s){if(a.cleanData){var i=a.cleanData;a.cleanData=function(e){for(var t,n=0;null!=(t=e[n]);n++)a(t).triggerHandler("remove");i(e)}}else{var n=a.fn.remove;a.fn.remove=function(e,t){return this.each(function(){return t||e&&!a.filter(e,[this]).length||a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")}),n.call(a(this),e,t)})}}a.widget=function(t,e,n){var i,o=t.split(".")[0];i=o+"-"+(t=t.split(".")[1]),n||(n=e,e=a.Widget),a.expr[":"][i]=function(e){return!!a.data(e,t)},a[o]=a[o]||{},a[o][t]=function(e,t){arguments.length&&this._createWidget(e,t)};var r=new e;r.options=a.extend(!0,{},r.options),a[o][t].prototype=a.extend(!0,r,{namespace:o,widgetName:t,widgetEventPrefix:a[o][t].prototype.widgetEventPrefix||t,widgetBaseClass:i},n),a.widget.bridge(t,a[o][t])},a.widget.bridge=function(r,t){a.fn[r]=function(n){var e="string"==typeof n,i=Array.prototype.slice.call(arguments,1),o=this;return n=!e&&i.length?a.extend.apply(null,[!0,n].concat(i)):n,e&&"_"===n.charAt(0)||(e?this.each(function(){var e=a.data(this,r);if(!e)throw"cannot call methods on "+r+" prior to initialization; attempted to call method '"+n+"'";if(!a.isFunction(e[n]))throw"no such method '"+n+"' for "+r+" widget instance";var t=e[n].apply(e,i);if(t!==e&&t!==s)return o=t,!1}):this.each(function(){var e=a.data(this,r);e?e.option(n||{})._init():a.data(this,r,new t(n,this))})),o}},a.Widget=function(e,t){arguments.length&&this._createWidget(e,t)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(e,t){a.data(t,this.widgetName,this),this.element=a(t),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),e);var n=this;this.element.bind("remove."+this.widgetName,function(){n.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){var e={};return a.metadata&&(e=a.metadata.get(element)[this.widgetName]),e},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(e,t){var n=e;if(0===arguments.length)return a.extend({},this.options);if("string"==typeof e){if(t===s)return this.options[e];(n={})[e]=t}return this._setOptions(n),this},_setOptions:function(e){var n=this;return a.each(e,function(e,t){n._setOption(e,t)}),this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&this.widget()[t?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",t),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(e,t,n){var i=this.options[e];if((t=a.Event(t)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),n=n||{},t.originalEvent)for(var o,r=a.event.props.length;r;)t[o=a.event.props[--r]]=t.originalEvent[o];return this.element.trigger(t,n),!(a.isFunction(i)&&!1===i.call(this.element[0],t,n)||t.isDefaultPrevented())}}}(jQuery)}),define(["jquery","./jquery.ui.widget"],function(e){var o;(o=jQuery).widget("mobile.widget",{_createWidget:function(){o.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_getCreateOptions:function(){var n=this.element,i={};return o.each(this.options,function(e){var t=n.jqmData(e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}));void 0!==t&&(i[e]=t)}),i},enhanceWithin:function(e){var t=o.mobile.closestPageData(o(e)),n=t&&t.keepNativeSelector()||"";o(this.options.initSelector,e).not(n)[this.widgetName]()}})}),define(["jquery","./jquery.mobile.core"],function(e){!function(e,t){e(window);var i,o,r,a=e("html");e.mobile.media=(i={},o=e("<div id='jquery-mediatest'>"),r=e("<body>").append(o),function(e){if(!(e in i)){var t=document.createElement("style"),n="@media "+e+" { #jquery-mediatest { position:absolute; } }";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),a.prepend(r).prepend(t),i[e]="absolute"===o.css("position"),r.add(t).remove()}return i[e]})}(jQuery)}),define(["jquery","./jquery.mobile.media"],function(e){!function(e,t){function n(e,t,n){var o,r,a,s,u,c=document.createElement("div"),l=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},d=n?[n]:p;for(i=0;i<d.length;i++)r=d[i],a=void 0,s="-"+(a=r).charAt(0).toLowerCase()+a.substr(1)+"-"+e+": "+t+";",u=l(r)+l(e),c.setAttribute("style",s),c.style[u]&&(o=!0);return!!o}function o(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+p.join(t+" ")+t).split(" ");for(var i in n)if(void 0!==h[n[i]])return!0}var r,a,s,u,c,l,d=e("<body>").prependTo("html"),h=d[0].style,p=["Webkit","Moz","O"],f="palmGetResource"in window,m=window.operamini&&"[object OperaMini]"==={}.toString.call(window.operamini),v=window.blackberry;e.extend(e.mobile,{browser:{}}),e.mobile.browser.ie=function(){for(var e=3,t=document.createElement("div"),n=t.all||[];t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><br><![endif]--\x3e",n[0];);return 4<e?e:!e}(),e.extend(e.support,{orientation:"orientation"in window&&"onorientationchange"in window,touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in window||n("transition","height 100ms linear"),pushState:"pushState"in history&&"replaceState"in history,mediaquery:e.mobile.media("only all"),cssPseudoElement:!!o("content"),touchOverflow:!!o("overflowScrolling"),cssTransform3d:(l="transform-3d",n("perspective","10px","moz")||e.mobile.media("(-"+p.join("-"+l+"),(-")+"-"+l+"),("+l+")")),boxShadow:!!o("boxShadow")&&!v,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement||"scrollTop"in d[0])&&!f&&!m,dynamicBaseTag:(a=location.protocol+"//"+location.host+location.pathname+"ui-dir/",s=e("head base"),u=null,c="",s.length?c=s.attr("href"):s=u=e("<base>",{href:a}).appendTo("head"),r=e("<a href='testurl' />").prependTo(d)[0].href,s[0].href=c||location.pathname,u&&u.remove(),0===r.indexOf(a))}),d.remove();var g,b=-1<(g=window.navigator.userAgent).indexOf("Nokia")&&(-1<g.indexOf("Symbian/3")||-1<g.indexOf("Series60/5"))&&-1<g.indexOf("AppleWebKit")&&g.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/);e.mobile.ajaxBlacklist=window.blackberry&&!window.WebKitPoint||m||b,b&&e(function(){e("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),e.support.boxShadow||e("html").addClass("ui-mobile-nosupport-boxshadow")}(jQuery)}),define(["jquery"],function(e){!function(d,e,t,h){function n(o){var r=o.substr(1);return{setup:function(e,t){s(this)||d.data(this,w,{}),d.data(this,w)[o]=!0,x[o]=(x[o]||0)+1,1===x[o]&&O.bind(r,f),d(this).bind(r,a),q&&(x.touchstart=(x.touchstart||0)+1,1===x.touchstart&&O.bind("touchstart",p).bind("touchend",u).bind("touchmove",c).bind("scroll",l))},teardown:function(e,t){--x[o],x[o]||O.unbind(r,f),q&&(--x.touchstart,x.touchstart||O.unbind("touchstart",p).unbind("touchmove",c).unbind("touchend",u).unbind("scroll",l));var n=d(this),i=d.data(this,w);i&&(i[o]=!1),n.unbind(r,a),s(this)||n.removeData(w)}}}function a(){}function s(e){var t,n=d.data(e,w);if(n)for(t in n)if(n[t])return!0;return!1}function u(e){if(!_){v();var t,n=g(e.target);if(r("vmouseup",e,n),!C){var i=r("vclick",e,n);i&&i.isDefaultPrevented()&&(t=b(e).changedTouches[0],A.push({touchID:W,x:t.clientX,y:t.clientY}),M=!0)}r("vmouseout",e,n),C=!1,o()}}function c(e){if(!_){var t=b(e).touches[0],n=C,i=d.vmouse.moveDistanceThreshold;C=C||Math.abs(t.pageX-N)>i||Math.abs(t.pageY-P)>i,flags=g(e.target),C&&!n&&r("vmousecancel",e,flags),r("vmousemove",e,flags),o()}}function l(e){_||(C||r("vmousecancel",e,g(e.target)),C=!0,o())}function p(e){var t,n,i=b(e).touches;if(i&&1===i.length&&(n=g(t=e.target)).hasVirtualBinding){W=S++,d.data(t,y,W),m(),C=_=!1;var o=b(e).touches[0];N=o.pageX,P=o.pageY,r("vmouseover",e,n),r("vmousedown",e,n)}}function f(e){var t=d.data(e.target,y);if(!(M||W&&W===t)){var n=r("v"+e.type,e);n&&(n.isDefaultPrevented()&&e.preventDefault(),n.isPropagationStopped()&&e.stopPropagation(),n.isImmediatePropagationStopped()&&e.stopImmediatePropagation())}}function r(e,t,n){var i;return(n&&n[e]||!n&&function(e,t){var n;for(;e;){if((n=d.data(e,w))&&(!t||n[t]))return e;e=e.parentNode}return null}(t.target,e))&&(i=function(e,t){var n,i,o,r,a,s,u,c,l=e.type;(e=d.Event(e)).type=t,n=e.originalEvent,i=d.event.props,-1<l.search(/mouse/)&&(i=E);if(n)for(u=i.length;u;)r=i[--u],e[r]=n[r];-1<l.search(/mouse(down|up)|click/)&&!e.which&&(e.which=1);if(-1!==l.search(/^touch/)&&(o=b(n),l=o.touches,a=o.changedTouches,s=l&&l.length?l[0]:a&&a.length?a[0]:h))for(c=0,len=D.length;c<len;c++)r=D[c],e[r]=s[r];return e}(t,e),d(t.target).trigger(i)),i}function m(){j&&(clearTimeout(j),j=0)}function o(){m(),j=setTimeout(function(){W=j=0,A.length=0,M=!1,v()},d.vmouse.resetTimerDuration)}function v(){_=!0}function g(e){for(var t,n,i={};e;){for(n in t=d.data(e,w))t[n]&&(i[n]=i.hasVirtualBinding=!0);e=e.parentNode}return i}function b(e){for(;e&&void 0!==e.originalEvent;)e=e.originalEvent;return e}var w="virtualMouseBindings",y="virtualTouchID",i="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),D="clientX clientY pageX pageY screenX screenY".split(" "),T=d.event.mouseHooks?d.event.mouseHooks.props:[],E=d.event.props.concat(T),x={},j=0,N=0,P=0,C=!1,A=[],M=!1,_=!1,q="addEventListener"in t,O=d(t),S=1,W=0;d.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var k=0;k<i.length;k++)d.event.special[i[k]]=n(i[k]);q&&t.addEventListener("click",function(e){var t,n,i,o,r,a=A.length,s=e.target;if(a)for(t=e.clientX,n=e.clientY,threshold=d.vmouse.clickDistanceThreshold,i=s;i;){for(o=0;o<a;o++)if(r=A[o],0,i===s&&Math.abs(r.x-t)<threshold&&Math.abs(r.y-n)<threshold||d.data(i,y)===r.touchID)return e.preventDefault(),void e.stopPropagation();i=i.parentNode}},!0)}(jQuery,window,document)}),define(["jquery","./jquery.mobile.core","./jquery.mobile.media","./jquery.mobile.support","./jquery.mobile.vmouse"],function(e){!function(u,e,t){function c(e,t,n){var i=n.type;n.type=t,u.event.handle.call(e,n),n.type=i}u.each("touchstart touchmove touchend orientationchange throttledresize tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(e,t){u.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)},u.attrFn[t]=!0});var n=u.support.touch,i=n?"touchstart":"mousedown",a=n?"touchend":"mouseup",s=n?"touchmove":"mousemove";u.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){c(o,(n=t)?"scrollstart":"scrollstop",e)}var n,i,o=this;u(o).bind("touchmove scroll",function(e){u.event.special.scrollstart.enabled&&(n||t(e,!0),clearTimeout(i),i=setTimeout(function(){t(e,!1)},50))})}},u.event.special.tap={setup:function(){var a=this,s=u(a);s.bind("vmousedown",function(e){function t(e){n(),r==e.target&&c(a,"tap",e)}function n(){i(),s.unbind("vclick",t).unbind("vmouseup",i),u(document).unbind("vmousecancel",n)}function i(){clearTimeout(o)}if(e.which&&1!==e.which)return!1;var o,r=e.target;e.originalEvent;s.bind("vmouseup",i).bind("vclick",t),u(document).bind("vmousecancel",n),o=setTimeout(function(){c(a,"taphold",u.Event("taphold"))},750)})}},u.event.special.swipe={scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var r=u(this);r.bind(i,function(e){function t(e){if(o){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;n={time:(new Date).getTime(),coords:[t.pageX,t.pageY]},Math.abs(o.coords[0]-n.coords[0])>u.event.special.swipe.scrollSupressionThreshold&&e.preventDefault()}}var n,i=e.originalEvent.touches?e.originalEvent.touches[0]:e,o={time:(new Date).getTime(),coords:[i.pageX,i.pageY],origin:u(e.target)};r.bind(s,t).one(a,function(e){r.unbind(s,t),o&&n&&n.time-o.time<u.event.special.swipe.durationThreshold&&Math.abs(o.coords[0]-n.coords[0])>u.event.special.swipe.horizontalDistanceThreshold&&Math.abs(o.coords[1]-n.coords[1])<u.event.special.swipe.verticalDistanceThreshold&&o.origin.trigger("swipe").trigger(o.coords[0]>n.coords[0]?"swipeleft":"swiperight"),o=n=void 0})})}},function(t,n){function e(){var e=i();e!==o&&(o=e,s.trigger("orientationchange"))}var i,o,r,a,s=t(n),u={0:!0,180:!0};t.support.orientation&&(r=t.mobile.media("all and (orientation: landscape)"),a=u[n.orientation],(r&&a||!r&&!a)&&(u={"-90":!0,90:!0})),t.event.special.orientationchange={setup:function(){if(t.support.orientation&&t.mobile.orientationChangeEnabled)return!1;o=i(),s.bind("throttledresize",e)},teardown:function(){if(t.support.orientation&&t.mobile.orientationChangeEnabled)return!1;s.unbind("throttledresize",e)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=i(),t.apply(this,arguments)}}},t.event.special.orientationchange.orientation=i=function(){var e=document.documentElement;return(t.support.orientation?u[n.orientation]:e&&e.clientWidth/e.clientHeight<1.1)?"portrait":"landscape"}}(jQuery,e),function(){u.event.special.throttledresize={setup:function(){u(this).bind("resize",i)},teardown:function(){u(this).unbind("resize",i)}};var e,t,n,i=function(){t=(new Date).getTime(),250<=(n=t-o)?(o=t,u(this).trigger("throttledresize")):(e&&clearTimeout(e),e=setTimeout(i,250-n))},o=0}(),u.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(e,t){u.event.special[e]={setup:function(){u(this).bind(t,u.noop)}}})}(jQuery,this)}),define(["jquery","../external/requirejs/text!../version.txt","./jquery.mobile.widget"],function(e,i){!function(o,t,e){var n={};o.mobile=o.extend({},{version:i,ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:10,touchOverflowEnabled:!1,defaultDialogTransition:"pop",loadingMessage:"loading",pageLoadErrorMessage:"Error Loading Page",loadingMessageTextVisible:!1,loadingMessageTheme:"a",pageLoadErrorMessageTheme:"e",autoInitializePage:!0,pushStateEnabled:!0,orientationChangeEnabled:!0,gradeA:function(){return o.support.mediaquery||o.mobile.browser.ie&&7<=o.mobile.browser.ie},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},silentScroll:function(e){"number"!==o.type(e)&&(e=o.mobile.defaultHomeScroll),o.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,e),o(document).trigger("silentscroll",{x:0,y:e})},20),setTimeout(function(){o.event.special.scrollstart.enabled=!0},150)},nsNormalizeDict:n,nsNormalize:function(e){if(e)return n[e]||(n[e]=o.camelCase(o.mobile.ns+e))},getInheritedTheme:function(e,t){for(var n,i=e[0],o="",r=/ui-(bar|body)-([a-z])\b/;i;){var a=i.className||"";if((n=r.exec(a))&&(o=n[2]))break;i=i.parentNode}return o||t||"a"},closestPageData:function(e){return e.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page")}},o.mobile),o.fn.jqmData=function(e,t){var n;return void 0!==e&&(n=this.data(e?o.mobile.nsNormalize(e):e,t)),n},o.jqmData=function(e,t,n){var i;return void 0!==t&&(i=o.data(e,t?o.mobile.nsNormalize(t):t,n)),i},o.fn.jqmRemoveData=function(e){return this.removeData(o.mobile.nsNormalize(e))},o.jqmRemoveData=function(e,t){return o.removeData(e,o.mobile.nsNormalize(t))},o.fn.removeWithDependents=function(){o.removeWithDependents(this)},o.removeWithDependents=function(e){var t=o(e);(t.jqmData("dependents")||o()).remove(),t.remove()},o.fn.addDependents=function(e){o.addDependents(o(this),e)},o.addDependents=function(e,t){var n=o(e).jqmData("dependents")||o();o(e).jqmData("dependents",o.merge(n,t))},o.fn.getEncodedText=function(){return o("<div/>").text(o(this).text()).html()};var r=o.find,a=/:jqmData\(([^)]*)\)/g;o.find=function(e,t,n,i){return e=e.replace(a,"[data-"+(o.mobile.ns||"")+"$1]"),r.call(this,e,t,n,i)},o.extend(o.find,r),o.find.matches=function(e,t){return o.find(e,null,null,t)},o.find.matchesSelector=function(e,t){return 0<o.find(t,null,null,[e]).length}}(jQuery,this)});
!function($){function sc_setScroll(t,e,s){return"transition"==s.transition&&"swing"==e&&(e="ease"),{anims:[],duration:t,orgDuration:t,easing:e,startTime:getTime()}}function sc_startScroll(t,e){for(var s=0,i=t.anims.length;s<i;s++){var o=t.anims[s];o&&o[0][e.transition](o[1],t.duration,t.easing,o[2])}}function sc_stopScroll(t,e){is_boolean(e)||(e=!0),is_object(t.pre)&&sc_stopScroll(t.pre,e);for(var s=0,i=t.anims.length;s<i;s++){var o=t.anims[s];o[0].stop(!0),e&&(o[0].css(o[1]),is_function(o[2])&&o[2]())}is_object(t.post)&&sc_stopScroll(t.post,e)}function sc_afterScroll(t,e,s){switch(e&&e.remove(),s.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":t.css("opacity",1),t.css("filter","")}}function sc_fireCallbacks(t,e,s,i,o){if(e[s]&&e[s].call(t,i),o[s].length)for(var n=0,r=o[s].length;n<r;n++)o[s][n].call(t,i);return[]}function sc_fireQueue(t,e,s){return e.length&&(t.trigger(cf_e(e[0][0],s),e[0][1]),e.shift()),e}function sc_hideHiddenItems(t){t.each(function(){var t=$(this);t.data("_cfs_isHidden",t.is(":hidden")).hide()})}function sc_showHiddenItems(t){t&&t.each(function(){var t=$(this);t.data("_cfs_isHidden")||t.show()})}function sc_clearTimers(t){return t.auto&&clearTimeout(t.auto),t.progress&&clearInterval(t.progress),t}function sc_mapCallbackArguments(t,e,s,i,o,n,r){return{width:r.width,height:r.height,items:{old:t,skipped:e,visible:s},scroll:{items:i,direction:o,duration:n}}}function sc_getDuration(t,e,s,i){var o=t.duration;return"none"==t.fx?0:("auto"==o?o=e.scroll.duration/e.scroll.items*s:o<10&&(o=i/o),o<1?0:("fade"==t.fx&&(o/=2),Math.round(o)))}function nv_showNavi(t,e,s){var i=is_number(t.items.minimum)?t.items.minimum:t.items.visible+1;if("show"==e||"hide"==e)var o=e;else if(e<i){debug(s,"Not enough items ("+e+" total, "+i+" needed): Hiding navigation.");o="hide"}else o="show";var n="show"==o?"removeClass":"addClass",r=cf_c("hidden",s);t.auto.button&&t.auto.button[o]()[n](r),t.prev.button&&t.prev.button[o]()[n](r),t.next.button&&t.next.button[o]()[n](r),t.pagination.container&&t.pagination.container[o]()[n](r)}function nv_enableNavi(t,e,s){if(!t.circular&&!t.infinite){var i=("removeClass"==e||"addClass"==e)&&e,o=cf_c("disabled",s);if(t.auto.button&&i&&t.auto.button[i](o),t.prev.button){var n=i||0==e?"addClass":"removeClass";t.prev.button[n](o)}if(t.next.button){n=i||e==t.items.visible?"addClass":"removeClass";t.next.button[n](o)}}}function go_getObject(t,e){return is_function(e)?e=e.call(t):is_undefined(e)&&(e={}),e}function go_getItemsObject(t,e){return is_number(e=go_getObject(t,e))?e={visible:e}:"variable"==e?e={visible:e,width:e,height:e}:is_object(e)||(e={}),e}function go_getScrollObject(t,e){return is_number(e=go_getObject(t,e))?e=e<=50?{items:e}:{duration:e}:is_string(e)?e={easing:e}:is_object(e)||(e={}),e}function go_getNaviObject(t,e){if(is_string(e=go_getObject(t,e))){var s=cf_getKeyCode(e);e=-1==s?$(e):s}return e}function go_getAutoObject(t,e){return is_jquery(e=go_getNaviObject(t,e))?e={button:e}:is_boolean(e)?e={play:e}:is_number(e)&&(e={timeoutDuration:e}),e.progress&&(is_string(e.progress)||is_jquery(e.progress))&&(e.progress={bar:e.progress}),e}function go_complementAutoObject(t,e){return is_function(e.button)&&(e.button=e.button.call(t)),is_string(e.button)&&(e.button=$(e.button)),is_boolean(e.play)||(e.play=!0),is_number(e.delay)||(e.delay=0),is_undefined(e.pauseOnEvent)&&(e.pauseOnEvent=!0),is_boolean(e.pauseOnResize)||(e.pauseOnResize=!0),is_number(e.timeoutDuration)||(e.timeoutDuration=e.duration<10?2500:5*e.duration),e.progress&&(is_function(e.progress.bar)&&(e.progress.bar=e.progress.bar.call(t)),is_string(e.progress.bar)&&(e.progress.bar=$(e.progress.bar)),e.progress.bar?(is_function(e.progress.updater)||(e.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(e.progress.interval)||(e.progress.interval=50)):e.progress=!1),e}function go_getPrevNextObject(t,e){return is_jquery(e=go_getNaviObject(t,e))?e={button:e}:is_number(e)&&(e={key:e}),e}function go_complementPrevNextObject(t,e){return is_function(e.button)&&(e.button=e.button.call(t)),is_string(e.button)&&(e.button=$(e.button)),is_string(e.key)&&(e.key=cf_getKeyCode(e.key)),e}function go_getPaginationObject(t,e){return is_jquery(e=go_getNaviObject(t,e))?e={container:e}:is_boolean(e)&&(e={keys:e}),e}function go_complementPaginationObject(t,e){return is_function(e.container)&&(e.container=e.container.call(t)),is_string(e.container)&&(e.container=$(e.container)),is_number(e.items)||(e.items=!1),is_boolean(e.keys)||(e.keys=!1),is_function(e.anchorBuilder)||is_false(e.anchorBuilder)||(e.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(e.deviation)||(e.deviation=0),e}function go_getSwipeObject(t,e){return is_function(e)&&(e=e.call(t)),is_undefined(e)&&(e={onTouch:!1}),is_true(e)?e={onTouch:e}:is_number(e)&&(e={items:e}),e}function go_complementSwipeObject(t,e){return is_boolean(e.onTouch)||(e.onTouch=!0),is_boolean(e.onMouse)||(e.onMouse=!1),is_object(e.options)||(e.options={}),is_boolean(e.options.triggerOnTouchEnd)||(e.options.triggerOnTouchEnd=!1),e}function go_getMousewheelObject(t,e){return is_function(e)&&(e=e.call(t)),is_true(e)?e={}:is_number(e)?e={items:e}:is_undefined(e)&&(e=!1),e}function go_complementMousewheelObject(t,e){return e}function gn_getItemIndex(t,e,s,i,o){if(is_string(t)&&(t=$(t,o)),is_object(t)&&(t=$(t,o)),is_jquery(t)?(t=o.children().index(t),is_boolean(s)||(s=!1)):is_boolean(s)||(s=!0),is_number(t)||(t=0),is_number(e)||(e=0),s&&(t+=i.first),t+=e,0<i.total){for(;t>=i.total;)t-=i.total;for(;t<0;)t+=i.total}return t}function gn_getVisibleItemsPrev(t,e,s){for(var i=0,o=0,n=s;0<=n;n--){var r=t.eq(n);if((i+=r.is(":visible")?r[e.d.outerWidth](!0):0)>e.maxDimension)return o;0==n&&(n=t.length),o++}}function gn_getVisibleItemsPrevFilter(t,e,s){return gn_getItemsPrevFilter(t,e.items.filter,e.items.visibleConf.org,s)}function gn_getScrollItemsPrevFilter(t,e,s,i){return gn_getItemsPrevFilter(t,e.items.filter,i,s)}function gn_getItemsPrevFilter(t,e,s,i){for(var o=0,n=0,r=i,c=t.length;0<=r;r--){if(++n==c)return n;if(t.eq(r).is(e)&&++o==s)return n;0==r&&(r=c)}}function gn_getVisibleOrg(t,e){return e.items.visibleConf.org||t.children().slice(0,e.items.visible).filter(e.items.filter).length}function gn_getVisibleItemsNext(t,e,s){for(var i=0,o=0,n=s,r=t.length-1;n<=r;n++){var c=t.eq(n);if((i+=c.is(":visible")?c[e.d.outerWidth](!0):0)>e.maxDimension)return o;if(++o==r+1)return o;n==r&&(n=-1)}}function gn_getVisibleItemsNextTestCircular(t,e,s,i){var o=gn_getVisibleItemsNext(t,e,s);return e.circular||i<s+o&&(o=i-s),o}function gn_getVisibleItemsNextFilter(t,e,s){return gn_getItemsNextFilter(t,e.items.filter,e.items.visibleConf.org,s,e.circular)}function gn_getScrollItemsNextFilter(t,e,s,i){return gn_getItemsNextFilter(t,e.items.filter,i+1,s,e.circular)-1}function gn_getItemsNextFilter(t,e,s,i,o){for(var n=0,r=0,c=i,a=t.length-1;c<=a;c++){if(a<=++r)return r;if(t.eq(c).is(e)&&++n==s)return r;c==a&&(c=-1)}}function gi_getCurrentItems(t,e){return t.slice(0,e.items.visible)}function gi_getOldItemsPrev(t,e,s){return t.slice(s,e.items.visibleConf.old+s)}function gi_getNewItemsPrev(t,e){return t.slice(0,e.items.visible)}function gi_getOldItemsNext(t,e){return t.slice(0,e.items.visibleConf.old)}function gi_getNewItemsNext(t,e,s){return t.slice(s,e.items.visible+s)}function sz_storeMargin(t,s,i){s.usePadding&&(is_string(i)||(i="_cfs_origCssMargin"),t.each(function(){var t=$(this),e=parseInt(t.css(s.d.marginRight),10);is_number(e)||(e=0),t.data(i,e)}))}function sz_resetMargin(t,e,s){if(e.usePadding){var i=!!is_boolean(s)&&s;is_number(s)||(s=0),sz_storeMargin(t,e,"_cfs_tempCssMargin"),t.each(function(){var t=$(this);t.css(e.d.marginRight,i?t.data("_cfs_tempCssMargin"):s+t.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(t){t.each(function(){var t=$(this);t.data("_cfs_origCss",t.attr("style")||"")})}function sz_restoreOrigCss(t){t.each(function(){var t=$(this);t.attr("style",t.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(s,t){s.items.visible;var i=s.items[s.d.width],o=s[s.d.height],n=is_percentage(o);t.each(function(){var t=$(this),e=i-ms_getPaddingBorderMargin(t,s,"Width");t[s.d.width](e),n&&t[s.d.height](ms_getPercentage(e,o))})}function sz_setSizes(t,e){var s=t.parent(),i=t.children(),o=gi_getCurrentItems(i,e),n=cf_mapWrapperSizes(ms_getSizes(o,e,!0),e,!1);if(s.css(n),e.usePadding){var r=e.padding,c=r[e.d[1]];e.align&&c<0&&(c=0);var a=o.last();a.css(e.d.marginRight,a.data("_cfs_origCssMargin")+c),t.css(e.d.top,r[e.d[0]]),t.css(e.d.left,r[e.d[3]])}return t.css(e.d.width,n[e.d.width]+2*ms_getTotalSize(i,e,"width")),t.css(e.d.height,ms_getLargestSize(i,e,"height")),n}function ms_getSizes(t,e,s){return[ms_getTotalSize(t,e,"width",s),ms_getLargestSize(t,e,"height",s)]}function ms_getLargestSize(t,e,s,i){return is_boolean(i)||(i=!1),is_number(e[e.d[s]])&&i?e[e.d[s]]:is_number(e.items[e.d[s]])?e.items[e.d[s]]:ms_getTrueLargestSize(t,e,s=-1<s.toLowerCase().indexOf("width")?"outerWidth":"outerHeight")}function ms_getTrueLargestSize(t,e,s){for(var i=0,o=0,n=t.length;o<n;o++){var r=t.eq(o),c=r.is(":visible")?r[e.d[s]](!0):0;i<c&&(i=c)}return i}function ms_getTotalSize(t,e,s,i){if(is_boolean(i)||(i=!1),is_number(e[e.d[s]])&&i)return e[e.d[s]];if(is_number(e.items[e.d[s]]))return e.items[e.d[s]]*t.length;for(var o=-1<s.toLowerCase().indexOf("width")?"outerWidth":"outerHeight",n=0,r=0,c=t.length;r<c;r++){var a=t.eq(r);n+=a.is(":visible")?a[e.d[o]](!0):0}return n}function ms_getParentSize(t,e,s){var i=t.is(":visible");i&&t.hide();var o=t.parent()[e.d[s]]();return i&&t.show(),o}function ms_getMaxDimension(t,e){return is_number(t[t.d.width])?t[t.d.width]:e}function ms_hasVariableSizes(t,e,s){for(var i=!1,o=!1,n=0,r=t.length;n<r;n++){var c=t.eq(n),a=c.is(":visible")?c[e.d[s]](!0):0;!1===i?i=a:i!=a&&(o=!0),0==i&&(o=!0)}return o}function ms_getPaddingBorderMargin(t,e,s){return t[e.d["outer"+s]](!0)-t[e.d[s.toLowerCase()]]()}function ms_getPercentage(t,e){if(is_percentage(e)){if(!is_number(e=parseInt(e.slice(0,-1),10)))return t;t*=e/100}return t}function cf_e(t,e,s,i,o){return is_boolean(s)||(s=!0),is_boolean(i)||(i=!0),is_boolean(o)||(o=!1),s&&(t=e.events.prefix+t),i&&(t=t+"."+e.events.namespace),i&&o&&(t+=e.serialNumber),t}function cf_c(t,e){return is_string(e.classnames[t])?e.classnames[t]:t}function cf_mapWrapperSizes(t,e,s){is_boolean(s)||(s=!0);var i=e.usePadding&&s?e.padding:[0,0,0,0],o={};return o[e.d.width]=t[0]+i[1]+i[3],o[e.d.height]=t[1]+i[0]+i[2],o}function cf_sortParams(t,e){for(var s=[],i=0,o=t.length;i<o;i++)for(var n=0,r=e.length;n<r;n++)if(-1<e[n].indexOf(typeof t[i])&&is_undefined(s[n])){s[n]=t[i];break}return s}function cf_getPadding(t){if(is_undefined(t))return[0,0,0,0];if(is_number(t))return[t,t,t,t];if(is_string(t)&&(t=t.split("px").join("").split("em").join("").split(" ")),!is_array(t))return[0,0,0,0];for(var e=0;e<4;e++)t[e]=parseInt(t[e],10);switch(t.length){case 0:return[0,0,0,0];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];default:return[t[0],t[1],t[2],t[3]]}}function cf_getAlignPadding(t,e){var s=is_number(e[e.d.width])?Math.ceil(e[e.d.width]-ms_getTotalSize(t,e,"width")):0;switch(e.align){case"left":return[0,s];case"right":return[s,0];case"center":default:return[Math.ceil(s/2),Math.floor(s/2)]}}function cf_getDimensions(t){for(var e=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],s=e[0].length,i="right"==t.direction||"left"==t.direction?0:1,o={},n=0;n<s;n++)o[e[0][n]]=e[i][n];return o}function cf_getAdjust(t,e,s,i){var o=t;if(is_function(s))o=s.call(i,o);else if(is_string(s)){var n=s.split("+"),r=s.split("-");if(r.length>n.length)var c=!0,a=r[0],f=r[1];else c=!1,a=n[0],f=n[1];switch(a){case"even":o=t%2==1?t-1:t;break;case"odd":o=t%2==0?t-1:t;break;default:o=t}is_number(f=parseInt(f,10))&&(c&&(f=-f),o+=f)}return(!is_number(o)||o<1)&&(o=1),o}function cf_getItemsAdjust(t,e,s,i){return cf_getItemAdjustMinMax(cf_getAdjust(t,e,s,i),e.items.visibleConf)}function cf_getItemAdjustMinMax(t,e){return is_number(e.min)&&t<e.min&&(t=e.min),is_number(e.max)&&t>e.max&&(t=e.max),t<1&&(t=1),t}function cf_getSynchArr(t){is_array(t)||(t=[[t]]),is_array(t[0])||(t=[t]);for(var e=0,s=t.length;e<s;e++)is_string(t[e][0])&&(t[e][0]=$(t[e][0])),is_boolean(t[e][1])||(t[e][1]=!0),is_boolean(t[e][2])||(t[e][2]=!0),is_number(t[e][3])||(t[e][3]=0);return t}function cf_getKeyCode(t){return"right"==t?39:"left"==t?37:"up"==t?38:"down"==t?40:-1}function cf_setCookie(t,e,s){if(t){var i=e.triggerHandler(cf_e("currentPosition",s));$.fn.carouFredSel.cookie.set(t,i)}}function cf_getCookie(t){var e=$.fn.carouFredSel.cookie.get(t);return""==e?0:e}function in_mapCss(t,e){for(var s={},i=0,o=e.length;i<o;i++)s[e[i]]=t.css(e[i]);return s}function in_complementItems(t,e,s,i){return is_object(t.visibleConf)||(t.visibleConf={}),is_object(t.sizesConf)||(t.sizesConf={}),0==t.start&&is_number(i)&&(t.start=i),is_object(t.visible)?(t.visibleConf.min=t.visible.min,t.visibleConf.max=t.visible.max,t.visible=!1):is_string(t.visible)?("variable"==t.visible?t.visibleConf.variable=!0:t.visibleConf.adjust=t.visible,t.visible=!1):is_function(t.visible)&&(t.visibleConf.adjust=t.visible,t.visible=!1),is_string(t.filter)||(t.filter=0<s.filter(":hidden").length?":visible":"*"),t[e.d.width]||(e.responsive?(debug(!0,"Set a "+e.d.width+" for the items!"),t[e.d.width]=ms_getTrueLargestSize(s,e,"outerWidth")):t[e.d.width]=ms_hasVariableSizes(s,e,"outerWidth")?"variable":s[e.d.outerWidth](!0)),t[e.d.height]||(t[e.d.height]=ms_hasVariableSizes(s,e,"outerHeight")?"variable":s[e.d.outerHeight](!0)),t.sizesConf.width=t.width,t.sizesConf.height=t.height,t}function in_complementVisibleItems(t,e){return"variable"==t.items[t.d.width]&&(t.items.visibleConf.variable=!0),t.items.visibleConf.variable||(is_number(t[t.d.width])?t.items.visible=Math.floor(t[t.d.width]/t.items[t.d.width]):(t.items.visible=Math.floor(e/t.items[t.d.width]),t[t.d.width]=t.items.visible*t.items[t.d.width],t.items.visibleConf.adjust||(t.align=!1)),("Infinity"==t.items.visible||t.items.visible<1)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),t.items.visibleConf.variable=!0)),t}function in_complementPrimarySize(t,e,s){return"auto"==t&&(t=ms_getTrueLargestSize(s,e,"outerWidth")),t}function in_complementSecondarySize(t,e,s){return"auto"==t&&(t=ms_getTrueLargestSize(s,e,"outerHeight")),t||(t=e.items[e.d.height]),t}function in_getAlignPadding(t,e){var s=cf_getAlignPadding(gi_getCurrentItems(e,t),t);return t.padding[t.d[1]]=s[1],t.padding[t.d[3]]=s[0],t}function in_getResponsiveValues(t,e,s){var i=cf_getItemAdjustMinMax(Math.ceil(t[t.d.width]/t.items[t.d.width]),t.items.visibleConf);i>e.length&&(i=e.length);var o=Math.floor(t[t.d.width]/i);return t.items.visible=i,t.items[t.d.width]=o,t[t.d.width]=i*o,t}function bt_pauseOnHoverConfig(t){if(is_string(t))var e=-1<t.indexOf("immediate"),s=-1<t.indexOf("resume");else e=s=!1;return[e,s]}function bt_mousesheelNumber(t){return is_number(t)?t:null}function is_null(t){return null===t}function is_undefined(t){return is_null(t)||void 0===t||""===t||"undefined"===t}function is_array(t){return t instanceof Array}function is_jquery(t){return t instanceof jQuery}function is_object(t){return(t instanceof Object||"object"==typeof t)&&!is_null(t)&&!is_jquery(t)&&!is_array(t)&&!is_function(t)}function is_number(t){return(t instanceof Number||"number"==typeof t)&&!isNaN(t)}function is_string(t){return(t instanceof String||"string"==typeof t)&&!is_undefined(t)&&!is_true(t)&&!is_false(t)}function is_function(t){return t instanceof Function||"function"==typeof t}function is_boolean(t){return t instanceof Boolean||"boolean"==typeof t||is_true(t)||is_false(t)}function is_true(t){return!0===t||"true"===t}function is_false(t){return!1===t||"false"===t}function is_percentage(t){return is_string(t)&&"%"==t.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(t,e){debug(!0,t+" is DEPRECATED, support for it will be removed. Use "+e+" instead.")}function debug(t,e){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(t)){var s=" ("+t.selector+")";t=t.debug}else s="";if(!t)return!1;e=is_string(e)?"carouFredSel"+s+": "+e:["carouFredSel"+s+":",e],window.console.log(e)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(1<this.length)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={_init:function(t,e,s){(t=go_getObject($tt0,t)).items=go_getItemsObject($tt0,t.items),t.scroll=go_getScrollObject($tt0,t.scroll),t.auto=go_getAutoObject($tt0,t.auto),t.prev=go_getPrevNextObject($tt0,t.prev),t.next=go_getPrevNextObject($tt0,t.next),t.pagination=go_getPaginationObject($tt0,t.pagination),t.swipe=go_getSwipeObject($tt0,t.swipe),t.mousewheel=go_getMousewheelObject($tt0,t.mousewheel),e&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,t)),(opts=$.extend(!0,{},$.fn.carouFredSel.defaults,t)).d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var i=$cfs.children(),o=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,o),opts.items=in_complementItems(opts.items,opts,i,s),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,i),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,i),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(o,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,o)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=!!is_number(opts[opts.d.width])&&"center"),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(i,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(i,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,i,o);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&((opts=in_getAlignPadding(opts,i)).usePadding=!0);break;default:opts.align=!1,opts.usePadding=0!=opts.padding[0]||0!=opts.padding[1]||0!=opts.padding[2]||0!=opts.padding[3]}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},_build:function(){$cfs.data("_cfs_isCarousel",!0);var t=$cfs.children(),e=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),s="relative";switch(e.position){case"absolute":case"fixed":s=e.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(e),$wrp.css({overflow:"hidden",position:s}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",e.zIndex),$cfs.css({textAlign:"left",float:"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(t,opts),sz_storeOrigCss(t),opts.responsive&&sz_setResponsiveSizes(opts,t)},_bind_events:function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(t,e){return t.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),e)),!0}),$cfs.bind(cf_e("finish",conf),function(t){return t.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(t,e,s){if(t.stopPropagation(),tmrs=sc_clearTimers(tmrs),e&&crsl.isScrolling){scrl.isStopped=!0;var i=getTime()-scrl.startTime;scrl.duration-=i,scrl.pre&&(scrl.pre.duration-=i),scrl.post&&(scrl.post.duration-=i),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||s&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var o=opts.auto.timeoutDuration-tmrs.timePassed,n=100-Math.ceil(100*o/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,n,o)}return!0}),$cfs.bind(cf_e("play",conf),function(t,e,s,i){t.stopPropagation(),tmrs=sc_clearTimers(tmrs);var o=cf_sortParams([e,s,i],["string","number","boolean"]);if(e=o[0],s=o[1],i=o[2],"prev"!=e&&"next"!=e&&(e=crsl.direction),is_number(s)||(s=0),is_boolean(i)||(i=!1),i&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return t.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var n=opts.auto.timeoutDuration+s;return dur2=n-tmrs.timePassed,perc=100-Math.ceil(100*dur2/n),opts.auto.progress&&(tmrs.progress=setInterval(function(){var t=getTime()-tmrs.startTime+tmrs.timePassed,e=Math.ceil(100*t/n);opts.auto.progress.updater.call(opts.auto.progress.bar[0],e)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),e):$cfs.trigger(cf_e(e,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(t){return t.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(t,e,s,i,o){if(t.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return t.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var n=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(n>itms.total)return t.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+n+" needed): Not scrolling.");e=(a=cf_sortParams([e,s,i,o],["object","number/string","function","boolean"]))[0],s=a[1],i=a[2],o=a[3];var r=t.type.slice(conf.events.prefix.length);if(is_object(e)||(e={}),is_function(i)&&(e.onAfter=i),is_boolean(o)&&(e.queue=o),(e=$.extend(!0,{},opts[r],e)).conditions&&!e.conditions.call($tt0,r))return t.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(s)){if("*"!=opts.items.filter)s="visible";else for(var c=[s,e.items,opts[r].items],a=0,f=c.length;a<f;a++)if(is_number(c[a])||"page"==c[a]||"visible"==c[a]){s=c[a];break}switch(s){case"page":return t.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(r+"Page",conf),[e,i]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(s=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[r,[e,s,i]]),t.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(0<e.duration&&crsl.isScrolling)return e.queue&&("last"==e.queue&&(queu=[]),"first"==e.queue&&0!=queu.length||$cfs.trigger(cf_e("queue",conf),[r,[e,s,i]])),t.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+r,conf),[e,s]),opts.synchronise){var l=opts.synchronise,u=[e,s],p=0;for(f=l.length;p<f;p++){var d=r;l[p][2]||(d="prev"==d?"next":"prev"),l[p][1]||(u[0]=l[p][0].triggerHandler("_cfs_triggerEvent",["configuration",d])),u[1]=s+l[p][3],l[p][0].trigger("_cfs_triggerEvent",["slide_"+d,u])}}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(t,e,s){t.stopPropagation();var i=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),t.stopImmediatePropagation();if(sz_resetMargin(i,opts),!is_number(s)){if(opts.items.visibleConf.variable)s=gn_getVisibleItemsPrev(i,opts,itms.total-1);else if("*"!=opts.items.filter){var o=is_number(e.items)?e.items:gn_getVisibleOrg($cfs,opts);s=gn_getScrollItemsPrevFilter(i,opts,itms.total-1,o)}else s=opts.items.visible;s=cf_getAdjust(s,opts,e.items,$tt0)}if(opts.circular||itms.total-s<itms.first&&(s=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var n=cf_getItemsAdjust(gn_getVisibleItemsNext(i,opts,itms.total-s),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible+s<=n&&s<itms.total&&(s++,n=cf_getItemsAdjust(gn_getVisibleItemsNext(i,opts,itms.total-s),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=n}else if("*"!=opts.items.filter){n=gn_getVisibleItemsNextFilter(i,opts,itms.total-s);opts.items.visible=cf_getItemsAdjust(n,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(i,opts,!0),0==s)return t.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+s+" items backward."),itms.first+=s;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&e.onEnd&&e.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-s,itms.total).prependTo($cfs),itms.total<opts.items.visible+s&&$cfs.children().slice(0,opts.items.visible+s-itms.total).clone(!0).appendTo($cfs);var r=gi_getOldItemsPrev(i=$cfs.children(),opts,s),c=gi_getNewItemsPrev(i,opts),a=i.eq(s-1),f=r.last(),l=c.last();sz_resetMargin(i,opts);var u=0,p=0;if(opts.align){var d=cf_getAlignPadding(c,opts);u=d[0],p=d[1]}var g=u<0?opts.padding[opts.d[3]]:0,m=!1,_=$();if(opts.items.visible<s&&(_=i.slice(opts.items.visibleConf.old,s),"directscroll"==e.fx)){var b=opts.items[opts.d.width];a=l,sc_hideHiddenItems(m=_),opts.items[opts.d.width]="variable"}var v=!1,h=ms_getTotalSize(i.slice(0,s),opts,"width"),w=cf_mapWrapperSizes(ms_getSizes(c,opts,!0),opts,!opts.usePadding),P=0,C={},x={},S={},y={},I={},z={},j={},k=sc_getDuration(e,opts,s,h);switch(e.fx){case"cover":case"cover-fade":P=ms_getTotalSize(i.slice(0,opts.items.visible),opts,"width")}m&&(opts.items[opts.d.width]=b),sz_resetMargin(i,opts,!0),0<=p&&sz_resetMargin(f,opts,opts.padding[opts.d[1]]),0<=u&&sz_resetMargin(a,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=p,opts.padding[opts.d[3]]=u),z[opts.d.left]=-(h-g),j[opts.d.left]=-(P-g),x[opts.d.left]=w[opts.d.width];var N,O,T,M=function(){},A=function(){},F=function(){},H=function(){},q=function(){},D=function(){},V=function(){},R=function(){};switch(e.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":v=$cfs.clone(!0).appendTo($wrp)}switch(e.fx){case"crossfade":case"uncover":case"uncover-fade":v.children().slice(0,s).remove(),v.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":v.children().slice(opts.items.visible).remove(),v.css(j)}if($cfs.css(z),scrl=sc_setScroll(k,e.easing,conf),C[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,"variable"!=opts[opts.d.width]&&"variable"!=opts[opts.d.height]||(M=function(){$wrp.css(w)},A=function(){scrl.anims.push([$wrp,w])}),opts.usePadding){switch(l.not(a).length&&(S[opts.d.marginRight]=a.data("_cfs_origCssMargin"),u<0?a.css(S):(V=function(){a.css(S)},R=function(){scrl.anims.push([a,S])})),e.fx){case"cover":case"cover-fade":v.children().eq(s-1).css(S)}l.not(f).length&&(y[opts.d.marginRight]=f.data("_cfs_origCssMargin"),F=function(){f.css(y)},H=function(){scrl.anims.push([f,y])}),0<=p&&(I[opts.d.marginRight]=l.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],q=function(){l.css(I)},D=function(){scrl.anims.push([l,I])})}T=function(){$cfs.css(C)};var E=opts.items.visible+s-itms.total;O=function(){if(0<E&&($cfs.children().slice(itms.total).remove(),r=$($cfs.children().slice(itms.total-(opts.items.visible-E)).get().concat($cfs.children().slice(0,E).get()))),sc_showHiddenItems(m),opts.usePadding){var t=$cfs.children().eq(opts.items.visible+s-1);t.css(opts.d.marginRight,t.data("_cfs_origCssMargin"))}};var W=sc_mapCallbackArguments(r,_,c,s,"prev",k,w);switch(N=function(){sc_afterScroll($cfs,v,e),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,e,"onAfter",W,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,e,"onBefore",W,clbk),e.fx){case"none":$cfs.css(C),M(),F(),q(),V(),T(),O(),N();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){M(),F(),q(),V(),T(),O(),(scrl=sc_setScroll(k,e.easing,conf)).anims.push([$cfs,{opacity:1},N]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([v,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},N]),A(),F(),q(),V(),T(),O();break;case"cover":scrl.anims.push([v,C,function(){F(),q(),V(),T(),O(),N()}]),A();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([v,C,function(){F(),q(),V(),T(),O(),N()}]),A();break;case"uncover":scrl.anims.push([v,x,N]),A(),F(),q(),V(),T(),O();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([v,x,N]),A(),F(),q(),V(),T(),O();break;default:scrl.anims.push([$cfs,C,function(){O(),N()}]),A(),H(),D(),R()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,w]),!0}),$cfs.bind(cf_e("slide_next",conf),function(t,e,s){t.stopPropagation();var i=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),t.stopImmediatePropagation();if(sz_resetMargin(i,opts),!is_number(s)){if("*"!=opts.items.filter){var o=is_number(e.items)?e.items:gn_getVisibleOrg($cfs,opts);s=gn_getScrollItemsNextFilter(i,opts,0,o)}else s=opts.items.visible;s=cf_getAdjust(s,opts,e.items,$tt0)}var n=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable){var r=gn_getVisibleItemsNext(i,opts,s);o=gn_getVisibleItemsPrev(i,opts,n-1)}else r=opts.items.visible,o=opts.items.visible;n<s+r&&(s=n-o)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(r=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(i,opts,s,n),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-s>=r&&s<itms.total;)r=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(i,opts,++s,n),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=r}else if("*"!=opts.items.filter){r=gn_getVisibleItemsNextFilter(i,opts,s);opts.items.visible=cf_getItemsAdjust(r,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(i,opts,!0),0==s)return t.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+s+" items forward."),itms.first-=s;itms.first<0;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&e.onEnd&&e.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+s&&$cfs.children().slice(0,opts.items.visible+s-itms.total).clone(!0).appendTo($cfs);var c=gi_getOldItemsNext(i=$cfs.children(),opts),a=gi_getNewItemsNext(i,opts,s),f=i.eq(s-1),l=c.last(),u=a.last();sz_resetMargin(i,opts);var p=0,d=0;if(opts.align){var g=cf_getAlignPadding(a,opts);p=g[0],d=g[1]}var m=!1,_=$();if(opts.items.visibleConf.old<s&&(_=i.slice(opts.items.visibleConf.old,s),"directscroll"==e.fx)){var b=opts.items[opts.d.width];f=l,sc_hideHiddenItems(m=_),opts.items[opts.d.width]="variable"}var v=!1,h=ms_getTotalSize(i.slice(0,s),opts,"width"),w=cf_mapWrapperSizes(ms_getSizes(a,opts,!0),opts,!opts.usePadding),P=0,C={},x={},S={},y={},I={},z=sc_getDuration(e,opts,s,h);switch(e.fx){case"uncover":case"uncover-fade":P=ms_getTotalSize(i.slice(0,opts.items.visibleConf.old),opts,"width")}m&&(opts.items[opts.d.width]=b),opts.align&&opts.padding[opts.d[1]]<0&&(opts.padding[opts.d[1]]=0),sz_resetMargin(i,opts,!0),sz_resetMargin(l,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=d,opts.padding[opts.d[3]]=p),I[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var j,k,N,O=function(){},T=function(){},M=function(){},A=function(){},F=function(){},H=function(){};switch(e.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":(v=$cfs.clone(!0).appendTo($wrp)).children().slice(opts.items.visibleConf.old).remove()}switch(e.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),v.css("zIndex",0)}if(scrl=sc_setScroll(z,e.easing,conf),C[opts.d.left]=-h,x[opts.d.left]=-P,p<0&&(C[opts.d.left]+=p),"variable"!=opts[opts.d.width]&&"variable"!=opts[opts.d.height]||(O=function(){$wrp.css(w)},T=function(){scrl.anims.push([$wrp,w])}),opts.usePadding){var q=u.data("_cfs_origCssMargin");0<=d&&(q+=opts.padding[opts.d[1]]),u.css(opts.d.marginRight,q),f.not(l).length&&(y[opts.d.marginRight]=l.data("_cfs_origCssMargin")),M=function(){l.css(y)},A=function(){scrl.anims.push([l,y])};var D=f.data("_cfs_origCssMargin");0<p&&(D+=opts.padding[opts.d[3]]),S[opts.d.marginRight]=D,F=function(){f.css(S)},H=function(){scrl.anims.push([f,S])}}N=function(){$cfs.css(I)};var V=opts.items.visible+s-itms.total;k=function(){0<V&&$cfs.children().slice(itms.total).remove();var t=$cfs.children().slice(0,s).appendTo($cfs).last();if(0<V&&(a=gi_getCurrentItems(i,opts)),sc_showHiddenItems(m),opts.usePadding){if(itms.total<opts.items.visible+s){var e=$cfs.children().eq(opts.items.visible-1);e.css(opts.d.marginRight,e.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}t.css(opts.d.marginRight,t.data("_cfs_origCssMargin"))}};var R=sc_mapCallbackArguments(c,_,a,s,"next",z,w);switch(j=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,v,e),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,e,"onAfter",R,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,e,"onBefore",R,clbk),e.fx){case"none":$cfs.css(C),O(),M(),F(),N(),k(),j();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){O(),M(),F(),N(),k(),(scrl=sc_setScroll(z,e.easing,conf)).anims.push([$cfs,{opacity:1},j]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([v,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},j]),T(),M(),F(),N(),k();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,I,j]),T(),M(),F(),k();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([v,{opacity:0}]),scrl.anims.push([$cfs,I,j]),T(),M(),F(),k();break;case"uncover":scrl.anims.push([v,x,j]),T(),M(),F(),N(),k();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([v,x,j]),T(),M(),F(),N(),k();break;default:scrl.anims.push([$cfs,C,function(){N(),k(),j()}]),T(),A(),H()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,w]),!0}),$cfs.bind(cf_e("slideTo",conf),function(t,e,s,i,o,n,r){t.stopPropagation();var c=cf_sortParams([e,s,i,o,n,r],["string/number/object","number","boolean","object","string","function"]);return o=c[3],n=c[4],r=c[5],0!=(e=gn_getItemIndex(c[0],c[1],c[2],itms,$cfs))&&(is_object(o)||(o=!1),"prev"!=n&&"next"!=n&&(n=opts.circular?e<=itms.total/2?"next":"prev":0==itms.first||itms.first>e?"next":"prev"),"prev"==n&&(e=itms.total-e),$cfs.trigger(cf_e(n,conf),[o,e,r]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(t,e,s){t.stopPropagation();var i=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[i-1,e,"prev",s])}),$cfs.bind(cf_e("nextPage",conf),function(t,e,s){t.stopPropagation();var i=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[i+1,e,"next",s])}),$cfs.bind(cf_e("slideToPage",conf),function(t,e,s,i,o){t.stopPropagation(),is_number(e)||(e=$cfs.triggerHandler(cf_e("currentPage",conf)));var n=opts.pagination.items||opts.items.visible,r=Math.ceil(itms.total/n)-1;return e<0&&(e=r),r<e&&(e=0),$cfs.triggerHandler(cf_e("slideTo",conf),[e*n,0,!0,s,i,o])}),$cfs.bind(cf_e("jumpToStart",conf),function(t,e){if(t.stopPropagation(),e=e?gn_getItemIndex(e,0,!0,itms,$cfs):0,0!=(e+=itms.first)){if(0<itms.total)for(;e>itms.total;)e-=itms.total;$cfs.prepend($cfs.children().slice(e,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(t,e){if(t.stopPropagation(),e)e=cf_getSynchArr(e);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");e=opts.synchronise}for(var s=$cfs.triggerHandler(cf_e("currentPosition",conf)),i=!0,o=0,n=e.length;o<n;o++)e[o][0].triggerHandler(cf_e("slideTo",conf),[s,e[o][3],!0])||(i=!1);return i}),$cfs.bind(cf_e("queue",conf),function(t,e,s){return t.stopPropagation(),is_function(e)?e.call($tt0,queu):is_array(e)?queu=e:is_undefined(e)||queu.push([e,s]),queu}),$cfs.bind(cf_e("insertItem",conf),function(t,e,s,i,o){t.stopPropagation();var n=cf_sortParams([e,s,i,o],["string/object","string/number/object","boolean","number"]);if(e=n[0],s=n[1],i=n[2],o=n[3],is_object(e)&&!is_jquery(e)?e=$(e):is_string(e)&&(e=$(e)),!is_jquery(e)||0==e.length)return debug(conf,"Not a valid object.");is_undefined(s)&&(s="end"),sz_storeMargin(e,opts),sz_storeOrigCss(e);var r=s,c="before";"end"==s?i?(0==itms.first?(s=itms.total-1,c="after"):(s=itms.first,itms.first+=e.length),s<0&&(s=0)):(s=itms.total-1,c="after"):s=gn_getItemIndex(s,o,i,itms,$cfs);var a=$cfs.children().eq(s);return a.length?a[c](e):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(e)),"end"==r||i||s<itms.first&&(itms.first+=e.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(t,e,i,o){t.stopPropagation();var s=cf_sortParams([e,i,o],["string/number/object","boolean","number"]);e=s[0],i=s[1],o=s[2];if(e instanceof $&&1<e.length)return n=$(),e.each(function(t,e){var s=$cfs.trigger(cf_e("removeItem",conf),[$(this),i,o]);s&&(n=n.add(s))}),n;if(is_undefined(e)||"end"==e)n=$cfs.children().last();else{e=gn_getItemIndex(e,o,i,itms,$cfs);var n=$cfs.children().eq(e);n.length&&e<itms.first&&(itms.first-=n.length)}return n&&n.length&&(n.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),n}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(t,e){t.stopPropagation();var s=t.type.slice(conf.events.prefix.length);return is_array(e)&&(clbk[s]=e),is_function(e)&&clbk[s].push(e),clbk[s]}),$cfs.bind(cf_e("currentPosition",conf),function(t,e){if(t.stopPropagation(),0==itms.first)var s=0;else s=itms.total-itms.first;return is_function(e)&&e.call($tt0,s),s}),$cfs.bind(cf_e("currentPage",conf),function(t,e){t.stopPropagation();var s,i=opts.pagination.items||opts.items.visible,o=Math.ceil(itms.total/i-1);return(s=0==itms.first?0:itms.first<itms.total%i?0:itms.first!=i||opts.circular?Math.round((itms.total-itms.first)/i):o)<0&&(s=0),o<s&&(s=o),is_function(e)&&e.call($tt0,s),s}),$cfs.bind(cf_e("currentVisible",conf),function(t,e){t.stopPropagation();var s=gi_getCurrentItems($cfs.children(),opts);return is_function(e)&&e.call($tt0,s),s}),$cfs.bind(cf_e("slice",conf),function(t,e,s,i){if(t.stopPropagation(),0==itms.total)return!1;var o=cf_sortParams([e,s,i],["number","number","function"]);if(e=is_number(o[0])?o[0]:0,s=is_number(o[1])?o[1]:itms.total,i=o[2],e+=itms.first,s+=itms.first,0<items.total){for(;e>itms.total;)e-=itms.total;for(;s>itms.total;)s-=itms.total;for(;e<0;)e+=itms.total;for(;s<0;)s+=itms.total}var n,r=$cfs.children();return n=e<s?r.slice(e,s):$(r.slice(e,itms.total).get().concat(r.slice(0,s).get())),is_function(i)&&i.call($tt0,n),n}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(t,e){t.stopPropagation();var s=t.type.slice(conf.events.prefix.length),i=crsl[s];return is_function(e)&&e.call($tt0,i),i}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),!1!==b?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),!1!==c?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(t,e,s){return t.stopPropagation(),is_undefined(e)?e=$("body"):is_string(e)&&(e=$(e)),is_jquery(e)&&0!=e.length?(is_string(s)||(s="a.caroufredsel"),e.find(s).each(function(){var e=this.hash||"";0<e.length&&-1!=$cfs.children().index($(e))&&$(this).unbind("click").click(function(t){t.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),e)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(t,e,s){if(t.stopPropagation(),opts.pagination.container){var i=opts.pagination.items||opts.items.visible,o=Math.ceil(itms.total/i);e&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var t=0;t<o;t++){var e=$cfs.children().eq(gn_getItemIndex(t*i,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(e[0],t+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(e){$(this).bind(opts.pagination.event,function(t){t.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[e*i,-opts.pagination.deviation,!0,opts.pagination])})})}));var n=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return o<=n&&(n=0),n<0&&(n=o-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(n).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(t){var e=opts.items.visible,s=$cfs.children(),i=ms_getParentSize($wrp,opts,"width");if(itms.total=s.length,crsl.primarySizePercentage?(opts.maxDimension=i,opts[opts.d.width]=ms_getPercentage(i,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,i),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,e=(opts=in_getResponsiveValues(opts,s,i)).items.visible,sz_setResponsiveSizes(opts,s)):opts.items.visibleConf.variable?e=gn_getVisibleItemsNext(s,opts,0):"*"!=opts.items.filter&&(e=gn_getVisibleItemsNextFilter(s,opts,0)),!opts.circular&&0!=itms.first&&e>itms.first){if(opts.items.visibleConf.variable)var o=gn_getVisibleItemsPrev(s,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)o=gn_getVisibleItemsPrevFilter(s,opts,itms.first)-itms.first;else o=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+o+" items backward."),$cfs.trigger(cf_e("prev",conf),o)}opts.items.visible=cf_getItemsAdjust(e,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,s);var n=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,n]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),n}),$cfs.bind(cf_e("destroy",conf),function(t,e){return t.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),e&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(t){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(t,e,s){return t.stopPropagation(),$cfs.triggerHandler(cf_e(e,conf),s)})},_unbind_events:function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},_bind_buttons:function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var t=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),t)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(t){t.preventDefault();var e=!1,s=null;crsl.isPaused?e="play":opts.auto.pauseOnEvent&&(e="pause",s=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),e&&$cfs.trigger(cf_e(e,conf),s)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(t){t.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){t=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),t)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(t){t.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){t=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),t)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){t=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),t)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(t){var e=t.keyCode;e==opts.next.key&&(t.preventDefault(),$cfs.trigger(cf_e("next",conf))),e==opts.prev.key&&(t.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(t){var e=t.keyCode;49<=e&&e<58&&(e=(e-49)*opts.items.visible)<=itms.total&&(t.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[e,0,!0,opts.pagination]))}),$.fn.swipe){var e="ontouchstart"in window;if(e&&opts.swipe.onTouch||!e&&opts.swipe.onMouse){var s=$.extend(!0,{},opts.prev,opts.swipe),i=$.extend(!0,{},opts.next,opts.swipe),o=function(){$cfs.trigger(cf_e("prev",conf),[s])},n=function(){$cfs.trigger(cf_e("next",conf),[i])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=n,opts.swipe.options.swipeDown=o;break;default:opts.swipe.options.swipeLeft=n,opts.swipe.options.swipeRight=o}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var r=$.extend(!0,{},opts.prev,opts.mousewheel),c=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(t,e){t.preventDefault(),0<e?$cfs.trigger(cf_e("prev",conf),[r]):$cfs.trigger(cf_e("next",conf),[c])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var a=function(t){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},f=$(window),l=null;if($.debounce&&"debounce"==conf.onWindowResize)l=$.debounce(200,a);else if($.throttle&&"throttle"==conf.onWindowResize)l=$.throttle(300,a);else{var u=0,p=0;l=function(){var t=f.width(),e=f.height();t==u&&e==p||(a(),u=t,p=e)}}f.bind(cf_e("resize",conf,!1,!0,!0),l)}},_unbind_buttons:function(){cf_e("",conf);var t=cf_e("",conf,!1);ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(t),opts.auto.button&&opts.auto.button.unbind(t),opts.prev.button&&opts.prev.button.unbind(t),opts.next.button&&opts.next.button.unbind(t),opts.pagination.container&&(opts.pagination.container.unbind(t),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)}};is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),0<start_arr.length)for(var a=0,l=start_arr.length;a<l;a++){var s=start_arr[a];if(0!=s){if(!0===s){if(s=window.location.hash,s.length<1)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(t){return'<a href="#"><span>'+t+"</span></a>"},$.fn.carouFredSel.progressbarUpdater=function(t){$(this).css("width",t+"%")},$.fn.carouFredSel.cookie={get:function(t){t+="=";for(var e=document.cookie.split(";"),s=0,i=e.length;s<i;s++){for(var o=e[s];" "==o.charAt(0);)o=o.slice(1);if(0==o.indexOf(t))return o.slice(t.length)}return 0},set:function(t,e,s){var i="";if(s){var o=new Date;o.setTime(o.getTime()+24*s*60*60*1e3),i="; expires="+o.toGMTString()}document.cookie=t+"="+e+i+"; path=/"},remove:function(t){$.fn.carouFredSel.cookie.set(t,"",-1)}},$.extend($.easing,{quadratic:function(t){var e=t*t;return t*(-e*t+4*e-6*t+4)},cubic:function(t){return t*(4*t*t-9*t+6)},elastic:function(t){var e=t*t;return t*(33*e*e-106*e*t+126*e-67*t+15)}}))}(jQuery);
!function(re){"use strict";var le="left",ae="right",ue="up",oe="down",se="in",ce="out",he="none",pe="auto",ge="swipe",fe="pinch",de="tap",we="doubletap",ve="longtap",Te="horizontal",be="vertical",Se="all",Ee=10,Oe="start",xe="move",ye="end",me="cancel",Le="ontouchstart"in window,Me="TouchSwipe";function i(e,v){var t=Le||!v.fallbackToMouseEvents,n=t?"touchstart":"mousedown",i=t?"touchmove":"mousemove",r=t?"touchend":"mouseup",l=t?null:"mouseleave",a="touchcancel",T=0,b=null,S=0,E=0,O=0,x=1,y=0,m=0,L=null,u=re(e),M="start",D=0,P=null,o=0,R=0,s=0,c=0,h=0,p=null;try{u.bind(n,g),u.bind(a,w)}catch(e){re.error("events not supported "+n+","+a+" on jQuery.swipe")}function g(e){if(!0!==u.data(Me+"_intouch")&&!(0<re(e.target).closest(v.excludedElements,u).length)){var t,n,i=e.originalEvent?e.originalEvent:e,r=Le?i.touches[0]:i;if(M=Oe,Le?D=i.touches.length:e.preventDefault(),m=b=null,x=1,y=O=E=S=T=0,P=function(){for(var e=[],t=0;t<=5;t++)e.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0});return e}(),(n={})[le]=ee(le),n[ae]=ee(ae),n[ue]=ee(ue),n[oe]=ee(oe),L=n,G(),!Le||D===v.fingers||v.fingers===Se||X()?(J(0,r),o=ie(),2==D&&(J(1,i.touches[1]),E=O=ne(P[0].start,P[1].start)),(v.swipeStatus||v.pinchStatus)&&(t=N(i,M))):t=!1,!1===t)return N(i,M=me),t;B(!0)}}function f(e){var t=e.originalEvent?e.originalEvent:e;if(M!==ye&&M!==me&&!Z()){var n,i,r,l,a,u,o,s,c,h,p,g,f=K(Le?t.touches[0]:t);if(R=ie(),Le&&(D=t.touches.length),M=xe,2==D&&(0==E?(J(1,t.touches[1]),E=O=ne(P[0].start,P[1].start)):(K(t.touches[1]),O=ne(P[0].end,P[1].end),P[0].end,P[1].end,m=x<1?ce:se),x=(O/E*1).toFixed(2),y=Math.abs(E-O)),D===v.fingers||v.fingers===Se||!Le||X()){if(h=f.start,p=f.end,g=function(e,t){var n=e.x-t.x,i=t.y-e.y,r=Math.atan2(i,n),l=Math.round(180*r/Math.PI);l<0&&(l=360-Math.abs(l));return l}(h,p),function(e,t){if(v.allowPageScroll===he||X())e.preventDefault();else{var n=v.allowPageScroll===pe;switch(t){case le:(v.swipeLeft&&n||!n&&v.allowPageScroll!=Te)&&e.preventDefault();break;case ae:(v.swipeRight&&n||!n&&v.allowPageScroll!=Te)&&e.preventDefault();break;case ue:(v.swipeUp&&n||!n&&v.allowPageScroll!=be)&&e.preventDefault();break;case oe:(v.swipeDown&&n||!n&&v.allowPageScroll!=be)&&e.preventDefault()}}}(e,b=g<=45&&0<=g?le:g<=360&&315<=g?le:135<=g&&g<=225?ae:45<g&&g<135?oe:ue),s=f.start,c=f.end,T=Math.round(Math.sqrt(Math.pow(c.x-s.x,2)+Math.pow(c.y-s.y,2))),S=te(),u=b,o=T,o=Math.max(o,$(u)),L[u].distance=o,(v.swipeStatus||v.pinchStatus)&&(n=N(t,M)),!v.triggerOnTouchEnd||v.triggerOnTouchLeave){var d=!0;if(v.triggerOnTouchLeave){var w={left:(a=(l=re(l=this)).offset()).left,right:a.left+l.outerWidth(),top:a.top,bottom:a.top+l.outerHeight()};i=f.end,r=w,d=i.x>r.left&&i.x<r.right&&i.y>r.top&&i.y<r.bottom}!v.triggerOnTouchEnd&&d?M=I(xe):v.triggerOnTouchLeave&&!d&&(M=I(ye)),M!=me&&M!=ye||N(t,M)}}else N(t,M=me);!1===n&&N(t,M=me)}}function d(e){var t=e.originalEvent;if(Le&&0<t.touches.length)return s=ie(),c=event.touches.length+1,!0;Z()&&(D=c),e.preventDefault(),R=ie(),S=te(),_()?N(t,M=me):v.triggerOnTouchEnd||0==v.triggerOnTouchEnd&&M===xe?N(t,M=ye):!v.triggerOnTouchEnd&&F()?U(t,M=ye,de):M===xe&&N(t,M=me),B(!1)}function w(){O=E=o=R=D=0,x=1,G(),B(!1)}function k(e){var t=e.originalEvent;v.triggerOnTouchLeave&&N(t,M=I(ye))}function A(){u.unbind(n,g),u.unbind(a,w),u.unbind(i,f),u.unbind(r,d),l&&u.unbind(l,k),B(!1)}function I(e){var t=e,n=j(),i=H(),r=_();return!n||r?t=me:!i||e!=xe||v.triggerOnTouchEnd&&!v.triggerOnTouchLeave?!i&&e==ye&&v.triggerOnTouchLeave&&(t=me):t=ye,t}function N(e,t){var n=void 0;return Y()&&C()||C()?n=U(e,t,ge):(Q()&&X()||X())&&!1!==n&&(n=U(e,t,fe)),z()&&V()&&!1!==n?n=U(e,t,we):S>v.longTapThreshold&&T<Ee&&v.longTap&&!1!==n?n=U(e,t,ve):1!==D&&Le||!isNaN(T)&&0!==T||!F()||!1===n||(n=U(e,t,de)),t===me&&w(),t===ye&&(Le?0==e.touches.length&&w():w()),n}function U(e,t,n){var i=void 0;if(n==ge){if(u.trigger("swipeStatus",[t,b||null,T||0,S||0,D]),v.swipeStatus&&!1===(i=v.swipeStatus.call(u,e,t,b||null,T||0,S||0,D)))return!1;if(t==ye&&Y()){if(u.trigger("swipe",[b,T,S,D]),v.swipe&&!1===(i=v.swipe.call(u,e,b,T,S,D)))return!1;switch(b){case le:u.trigger("swipeLeft",[b,T,S,D]),v.swipeLeft&&(i=v.swipeLeft.call(u,e,b,T,S,D));break;case ae:u.trigger("swipeRight",[b,T,S,D]),v.swipeRight&&(i=v.swipeRight.call(u,e,b,T,S,D));break;case ue:u.trigger("swipeUp",[b,T,S,D]),v.swipeUp&&(i=v.swipeUp.call(u,e,b,T,S,D));break;case oe:u.trigger("swipeDown",[b,T,S,D]),v.swipeDown&&(i=v.swipeDown.call(u,e,b,T,S,D))}}}if(n==fe){if(u.trigger("pinchStatus",[t,m||null,y||0,S||0,D,x]),v.pinchStatus&&!1===(i=v.pinchStatus.call(u,e,t,m||null,y||0,S||0,D,x)))return!1;if(t==ye&&Q())switch(m){case se:u.trigger("pinchIn",[m||null,y||0,S||0,D,x]),v.pinchIn&&(i=v.pinchIn.call(u,e,m||null,y||0,S||0,D,x));break;case ce:u.trigger("pinchOut",[m||null,y||0,S||0,D,x]),v.pinchOut&&(i=v.pinchOut.call(u,e,m||null,y||0,S||0,D,x))}}return n==de?t!==me&&t!==ye||(clearTimeout(p),V()&&!z()?(h=ie(),p=setTimeout(re.proxy(function(){h=null,u.trigger("tap",[e.target]),v.tap&&(i=v.tap.call(u,e,e.target))},this),v.doubleTapThreshold)):(h=null,u.trigger("tap",[e.target]),v.tap&&(i=v.tap.call(u,e,e.target)))):n==we?t!==me&&t!==ye||(clearTimeout(p),h=null,u.trigger("doubletap",[e.target]),v.doubleTap&&(i=v.doubleTap.call(u,e,e.target))):n==ve&&(t!==me&&t!==ye||(clearTimeout(p),h=null,u.trigger("longtap",[e.target]),v.longTap&&(i=v.longTap.call(u,e,e.target)))),i}function H(){var e=!0;return null!==v.threshold&&(e=T>=v.threshold),e}function _(){var e=!1;return null!==v.cancelThreshold&&null!==b&&(e=$(b)-T>=v.cancelThreshold),e}function j(){return!v.maxTimeThreshold||!(S>=v.maxTimeThreshold)}function Q(){var e=W(),t=q(),n=null===v.pinchThreshold||y>=v.pinchThreshold;return e&&t&&n}function X(){return!!(v.pinchStatus||v.pinchIn||v.pinchOut)}function Y(){var e=j(),t=H(),n=W(),i=q();return!_()&&i&&n&&t&&e}function C(){return!!(v.swipe||v.swipeStatus||v.swipeLeft||v.swipeRight||v.swipeUp||v.swipeDown)}function W(){return D===v.fingers||v.fingers===Se||!Le}function q(){return 0!==P[0].end.x}function F(){return!!v.tap}function V(){return!!v.doubleTap}function z(){if(null==h)return!1;var e=ie();return V()&&e-h<=v.doubleTapThreshold}function G(){c=s=0}function Z(){var e=!1;s&&(ie()-s<=v.fingerReleaseThreshold&&(e=!0));return e}function B(e){!0===e?(u.bind(i,f),u.bind(r,d),l&&u.bind(l,k)):(u.unbind(i,f,!1),u.unbind(r,d,!1),l&&u.unbind(l,k,!1)),u.data(Me+"_intouch",!0===e)}function J(e,t){var n=void 0!==t.identifier?t.identifier:0;return P[e].identifier=n,P[e].start.x=P[e].end.x=t.pageX||t.clientX,P[e].start.y=P[e].end.y=t.pageY||t.clientY,P[e]}function K(e){var t=function(e){for(var t=0;t<P.length;t++)if(P[t].identifier==e)return P[t]}(void 0!==e.identifier?e.identifier:0);return t.end.x=e.pageX||e.clientX,t.end.y=e.pageY||e.clientY,t}function $(e){return L[e].distance}function ee(e){return{direction:e,distance:0}}function te(){return R-o}function ne(e,t){var n=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+i*i))}function ie(){return(new Date).getTime()}this.enable=function(){return u.bind(n,g),u.bind(a,w),u},this.disable=function(){return A(),u},this.destroy=function(){return A(),u.data(Me,null),u},this.option=function(e,t){if(void 0!==v[e]){if(void 0===t)return v[e];v[e]=t}else re.error("Option "+e+" does not exist on jQuery.swipe.options")}}re.fn.swipe=function(e){var t=re(this),n=t.data(Me);if(n&&"string"==typeof e){if(n[e])return n[e].apply(this,Array.prototype.slice.call(arguments,1));re.error("Method "+e+" does not exist on jQuery.swipe")}else if(!(n||"object"!=typeof e&&e))return function(n){!n||void 0!==n.allowPageScroll||void 0===n.swipe&&void 0===n.swipeStatus||(n.allowPageScroll=he);void 0!==n.click&&void 0===n.tap&&(n.tap=n.click);n||(n={});return n=re.extend({},re.fn.swipe.defaults,n),this.each(function(){var e=re(this),t=e.data(Me);t||(t=new i(this,n),e.data(Me,t))})}.apply(this,arguments);return t},re.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:"button, input, select, textarea, .noSwipe"},re.fn.swipe.phases={PHASE_START:Oe,PHASE_MOVE:xe,PHASE_END:ye,PHASE_CANCEL:me},re.fn.swipe.directions={LEFT:le,RIGHT:ae,UP:ue,DOWN:oe,IN:se,OUT:ce},re.fn.swipe.pageScroll={NONE:he,HORIZONTAL:Te,VERTICAL:be,AUTO:pe},re.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:Se}}(jQuery);
!function(Y){var V={},B={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};Y.fn.bxSlider=function(e){if(0==this.length)return this;if(1<this.length)return this.each(function(){Y(this).bxSlider(e)}),this;var d={},c=this;V.el=this;var s=Y(window).width(),n=Y(window).height(),o=function(){d.settings=Y.extend({},B,e),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=c.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=1<d.settings.minSlides||1<d.settings.maxSlides,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"==d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!=d.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return d.cssPrefix=e[i].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"==d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),c.data("origStyle",c.attr("style")),c.children(d.settings.slideSelector).each(function(){Y(this).data("origStyle",Y(this).attr("style"))}),t()},t=function(){c.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),d.viewport=c.parent(),d.loader=Y('<div class="bx-loading" />'),d.viewport.prepend(d.loader),c.css({width:"horizontal"==d.settings.mode?100*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?c.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),p(),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:l()}),d.settings.pager||d.viewport.parent().css({margin:"0 auto 0px"}),d.children.css({float:"horizontal"==d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",h()),"horizontal"==d.settings.mode&&0<d.settings.slideMargin&&d.children.css("marginRight",d.settings.slideMargin),"vertical"==d.settings.mode&&0<d.settings.slideMargin&&d.children.css("marginBottom",d.settings.slideMargin),"fade"==d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:50,display:"block"})),d.controls.el=Y('<div class="bx-controls" />'),d.settings.captions&&T(),d.active.last=d.settings.startSlide==u()-1,d.settings.video&&c.fitVids();var t=d.children.eq(d.settings.startSlide);"all"==d.settings.preloadImages&&(t=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.pager&&S(),d.settings.controls&&b(),d.settings.auto&&d.settings.autoControls&&w(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),r(t,a)},r=function(t,e){var i=t.find("img, iframe").length;if(0!=i){var s=0;t.find("img, iframe").each(function(){Y(this).is("img")&&Y(this).attr("src",Y(this).attr("src")+"?timestamp="+(new Date).getTime()),Y(this).load(function(){setTimeout(function(){++s==i&&e()},0)})})}else e()},a=function(){if(d.settings.infiniteLoop&&"fade"!=d.settings.mode&&!d.settings.ticker){var t="vertical"==d.settings.mode?d.settings.minSlides:d.settings.maxSlides,e=d.children.slice(0,t).clone().addClass("bx-clone"),i=d.children.slice(-t).clone().addClass("bx-clone");c.append(e).prepend(i)}d.loader.remove(),f(),"vertical"==d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(g()),c.redrawSlider(),d.settings.onSliderLoad(d.active.index),d.initialized=!0,d.settings.responsive&&Y(window).bind("resize",X),d.settings.auto&&d.settings.autoStart&&D(),d.settings.ticker&&A(),d.settings.pager&&k(d.settings.startSlide),d.settings.controls&&I(),d.settings.touchEnabled&&!d.settings.ticker&&H()},g=function(){var t=0,e=Y();if("vertical"==d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){var s=1==d.settings.moveSlides?d.active.index:d.active.index*v();for(e=d.children.eq(s),i=1;i<=d.settings.maxSlides-1;i++)e=s+i>=d.children.length?e.add(d.children.eq(i-1)):e.add(d.children.eq(s+i))}else e=d.children.eq(d.active.index);else e=d.children;return"vertical"==d.settings.mode?(e.each(function(){t+=Y(this).outerHeight()}),0<d.settings.slideMargin&&(t+=d.settings.slideMargin*(d.settings.minSlides-1))):t=Math.max.apply(Math,e.map(function(){return Y(this).outerHeight(!1)}).get()),t},l=function(){var t="100%";return 0<d.settings.slideWidth&&(t="horizontal"==d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),t},h=function(){var t=d.settings.slideWidth,e=d.viewport.width();return 0==d.settings.slideWidth||d.settings.slideWidth>e&&!d.carousel||"vertical"==d.settings.mode?t=e:1<d.settings.maxSlides&&"horizontal"==d.settings.mode&&(e>d.maxThreshold||e<d.minThreshold&&(t=(e-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides)),t},p=function(){var t=1;if("horizontal"==d.settings.mode&&0<d.settings.slideWidth)if(d.viewport.width()<d.minThreshold)t=d.settings.minSlides;else if(d.viewport.width()>d.maxThreshold)t=d.settings.maxSlides;else{var e=d.children.first().width();t=Math.floor(d.viewport.width()/e)}else"vertical"==d.settings.mode&&(t=d.settings.minSlides);return t},u=function(){var t=0;if(0<d.settings.moveSlides)if(d.settings.infiniteLoop)t=d.children.length/v();else for(var e=0,i=0;e<d.children.length;)++t,e=i+p(),i+=d.settings.moveSlides<=p()?d.settings.moveSlides:p();else t=Math.ceil(d.children.length/p());return t},v=function(){return 0<d.settings.moveSlides&&d.settings.moveSlides<=p()?d.settings.moveSlides:p()},f=function(){if(d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop){if("horizontal"==d.settings.mode){var t=d.children.last(),e=t.position();x(-(e.left-(d.viewport.width()-t.width())),"reset",0)}else if("vertical"==d.settings.mode){var i=d.children.length-d.settings.minSlides;e=d.children.eq(i).position();x(-e.top,"reset",0)}}else{e=d.children.eq(d.active.index*v()).position();d.active.index==u()-1&&(d.active.last=!0),null!=e&&("horizontal"==d.settings.mode?x(-e.left,"reset",0):"vertical"==d.settings.mode&&x(-e.top,"reset",0))}},x=function(t,e,i,s){if(d.usingCSS){var n="vertical"==d.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";c.css("-"+d.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(c.css(d.animProp,n),c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),M()})):"reset"==e?c.css(d.animProp,n):"ticker"==e&&(c.css("-"+d.cssPrefix+"-transition-timing-function","linear"),c.css(d.animProp,n),c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),x(s.resetValue,"reset",0),W()}))}else{var o={};o[d.animProp]=t,"slide"==e?c.animate(o,i,d.settings.easing,function(){M()}):"reset"==e?c.css(d.animProp,t):"ticker"==e&&c.animate(o,speed,"linear",function(){x(s.resetValue,"reset",0),W()})}},m=function(){for(var t="",e=u(),i=0;i<e;i++){var s="";d.settings.buildPager&&Y.isFunction(d.settings.buildPager)?(s=d.settings.buildPager(i),d.pagerEl.addClass("bx-custom-pager")):(s=i+1,d.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+s+"</a></div>"}d.pagerEl.html(t)},S=function(){d.settings.pagerCustom?d.pagerEl=Y(d.settings.pagerCustom):(d.pagerEl=Y('<div class="bx-pager" />'),d.settings.pagerSelector?Y(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),m()),d.pagerEl.delegate("a","click",z)},b=function(){d.controls.next=Y('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=Y('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click",C),d.controls.prev.bind("click",E),d.settings.nextSelector&&Y(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&Y(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=Y('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},w=function(){d.controls.start=Y('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=Y('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=Y('<div class="bx-controls-auto" />'),d.controls.autoEl.delegate(".bx-start","click",P),d.controls.autoEl.delegate(".bx-stop","click",y),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?Y(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),q(d.settings.autoStart?"stop":"start")},T=function(){d.children.each(function(){var t=Y(this).find("img:first").attr("title");null!=t&&(""+t).length&&Y(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},C=function(t){d.settings.auto&&c.stopAuto(),c.goToNextSlide(),t.preventDefault()},E=function(t){d.settings.auto&&c.stopAuto(),c.goToPrevSlide(),t.preventDefault()},P=function(t){c.startAuto(),t.preventDefault()},y=function(t){c.stopAuto(),t.preventDefault()},z=function(t){d.settings.auto&&c.stopAuto();var e=Y(t.currentTarget),i=parseInt(e.attr("data-slide-index"));i!=d.active.index&&c.goToSlide(i),t.preventDefault()},k=function(i){var t=d.children.length;return"short"==d.settings.pagerType?(1<d.settings.maxSlides&&(t=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(i+1+d.settings.pagerShortSeparator+t)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(t,e){Y(e).find("a").eq(i).addClass("active")}))},M=function(){if(d.settings.infiniteLoop){var t="";0==d.active.index?t=d.children.eq(0).position():d.active.index==u()-1&&d.carousel?t=d.children.eq((u()-1)*v()).position():d.active.index==d.children.length-1&&(t=d.children.eq(d.children.length-1).position()),"horizontal"==d.settings.mode?x(-t.left,"reset",0):"vertical"==d.settings.mode&&x(-t.top,"reset",0)}d.working=!1,d.settings.onSlideAfter(d.children.eq(d.active.index),d.oldIndex,d.active.index)},q=function(t){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[t]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},I=function(){1==u()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0==d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index==u()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},D=function(){0<d.settings.autoDelay?setTimeout(c.startAuto,d.settings.autoDelay):c.startAuto(),d.settings.autoHover&&c.hover(function(){d.interval&&(c.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(c.startAuto(!0),d.autoPaused=null)})},A=function(){var t=0;if("next"==d.settings.autoDirection)c.append(d.children.clone().addClass("bx-clone"));else{c.prepend(d.children.clone().addClass("bx-clone"));var e=d.children.first().position();t="horizontal"==d.settings.mode?-e.left:-e.top}x(t,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&!d.usingCSS&&d.viewport.hover(function(){c.stop()},function(){var t=0;d.children.each(function(){t+="horizontal"==d.settings.mode?Y(this).outerWidth(!0):Y(this).outerHeight(!0)});var e=d.settings.speed/t,i="horizontal"==d.settings.mode?"left":"top",s=e*(t-Math.abs(parseInt(c.css(i))));W(s)}),W()},W=function(t){speed=t||d.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==d.settings.autoDirection?e=c.find(".bx-clone").first().position():i=d.children.first().position();var s="horizontal"==d.settings.mode?-e.left:-e.top,n="horizontal"==d.settings.mode?-i.left:-i.top;x(s,"ticker",speed,{resetValue:n})},H=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart",L)},L=function(t){if(d.working)t.preventDefault();else{d.touch.originalPos=c.position();var e=t.originalEvent;d.touch.start.x=e.changedTouches[0].pageX,d.touch.start.y=e.changedTouches[0].pageY,d.viewport.bind("touchmove",N),d.viewport.bind("touchend",O)}},N=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-d.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-d.touch.start.y);if(s<3*i&&d.settings.preventDefaultSwipeX?t.preventDefault():i<3*s&&d.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=d.settings.mode&&d.settings.oneToOneTouch){var n=0;if("horizontal"==d.settings.mode){var o=e.changedTouches[0].pageX-d.touch.start.x;n=d.touch.originalPos.left+o}else{o=e.changedTouches[0].pageY-d.touch.start.y;n=d.touch.originalPos.top+o}x(n,"reset",0)}},O=function(t){d.viewport.unbind("touchmove",N);var e=t.originalEvent,i=0;if(d.touch.end.x=e.changedTouches[0].pageX,d.touch.end.y=e.changedTouches[0].pageY,"fade"==d.settings.mode){(s=Math.abs(d.touch.start.x-d.touch.end.x))>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto())}else{var s=0;"horizontal"==d.settings.mode?(s=d.touch.end.x-d.touch.start.x,i=d.touch.originalPos.left):(s=d.touch.end.y-d.touch.start.y,i=d.touch.originalPos.top),!d.settings.infiniteLoop&&(0==d.active.index&&0<s||d.active.last&&s<0)?x(i,"reset",200):Math.abs(s)>=d.settings.swipeThreshold?(s<0?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto()):x(i,"reset",200)}d.viewport.unbind("touchend",O)},X=function(){var t=Y(window).width(),e=Y(window).height();(s!=t||n!=e)&&(s=t,n=e,c.redrawSlider())};return c.goToSlide=function(t,e){if(!d.working&&d.active.index!=t)if(d.working=!0,d.oldIndex=d.active.index,d.active.index=t<0?u()-1:t>=u()?0:t,d.settings.onSlideBefore(d.children.eq(d.active.index),d.oldIndex,d.active.index),"next"==e?d.settings.onSlideNext(d.children.eq(d.active.index),d.oldIndex,d.active.index):"prev"==e&&d.settings.onSlidePrev(d.children.eq(d.active.index),d.oldIndex,d.active.index),d.active.last=d.active.index>=u()-1,d.settings.pager&&k(d.active.index),d.settings.controls&&I(),"fade"==d.settings.mode)d.settings.adaptiveHeight&&d.viewport.height()!=g()&&d.viewport.animate({height:g()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",51).fadeIn(d.settings.speed,function(){Y(this).css("zIndex",50),M()});else{d.settings.adaptiveHeight&&d.viewport.height()!=g()&&d.viewport.animate({height:g()},d.settings.adaptiveHeightSpeed);var i=0,s={left:0,top:0};if(!d.settings.infiniteLoop&&d.carousel&&d.active.last)if("horizontal"==d.settings.mode){s=(o=d.children.eq(d.children.length-1)).position(),i=d.viewport.width()-o.outerWidth()}else{var n=d.children.length-d.settings.minSlides;s=d.children.eq(n).position()}else if(d.carousel&&d.active.last&&"prev"==e){var o,r=1==d.settings.moveSlides?d.settings.maxSlides-v():(u()-1)*v()-(d.children.length-d.settings.maxSlides);s=(o=c.children(".bx-clone").eq(r)).position()}else if("next"==e&&0==d.active.index)s=c.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1;else if(0<=t){var a=t*v();s=d.children.eq(a).position()}if(void 0!==s){var l="horizontal"==d.settings.mode?-(s.left-i):-s.top;x(l,"slide",d.settings.speed)}}},c.goToNextSlide=function(){if(d.settings.infiniteLoop||!d.active.last){var t=parseInt(d.active.index)+1;c.goToSlide(t,"next")}},c.goToPrevSlide=function(){if(d.settings.infiniteLoop||0!=d.active.index){var t=parseInt(d.active.index)-1;c.goToSlide(t,"prev")}},c.startAuto=function(t){d.interval||(d.interval=setInterval(function(){"next"==d.settings.autoDirection?c.goToNextSlide():c.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&1!=t&&q("stop"))},c.stopAuto=function(t){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&1!=t&&q("start"))},c.getCurrentSlide=function(){return d.active.index},c.getSlideCount=function(){return d.children.length},c.redrawSlider=function(){d.children.add(c.find(".bx-clone")).outerWidth(h()),d.viewport.css("height",g()),d.settings.ticker||f(),d.active.last&&(d.active.index=u()-1),d.active.index>=u()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(m(),k(d.active.index))},c.destroySlider=function(){d.initialized&&(d.initialized=!1,Y(".bx-clone",this).remove(),d.children.each(function(){null!=Y(this).data("origStyle")?Y(this).attr("style",Y(this).data("origStyle")):Y(this).removeAttr("style")}),null!=Y(this).data("origStyle")?this.attr("style",Y(this).data("origStyle")):Y(this).removeAttr("style"),Y(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.pagerEl.remove(),Y(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&Y(window).unbind("resize",X))},c.reloadSlider=function(t){null!=t&&(e=t),c.destroySlider(),o()},o(),this}}(jQuery);
!function(l){l.fn.unveil=function(t,i){var e,o=l(window),u=t||0,n=1<window.devicePixelRatio?"data-src-retina":"data-src",r=this;function s(){var t=r.filter(function(){var t=l(this);if(!t.is(":hidden")){var i=o.scrollTop(),e=i+o.height(),n=t.offset().top,r=n+t.height();return i-u<=r&&n<=e+u}});e=t.trigger("unveil"),r=r.not(e)}return this.one("unveil",function(){var t=this.getAttribute(n);(t=t||this.getAttribute("data-src"))&&(this.setAttribute("src",t),"function"==typeof i&&i.call(this))}),o.on("scroll.unveil resize.unveil lookup.unveil",s),s(),this}}(window.jQuery||window.Zepto);
!function(d){var e={init:function(o){var l={offset:!0,bgfixed:!0,invert:!0};return this.each(function(){o&&d.extend(l,o);var r,i=d(this),n=d(window),a=d(document),c=0,t="";Boolean(navigator.userAgent.match(/MSIE ([8]+)\./));function e(){var t,e,o;c=i.outerHeight(),windowHeight=n.height(),r=i.offset().top,e=(t=a.scrollTop())+windowHeight,o=t-c,r<e&&o<r&&(pixelScrolled=t-(r-windowHeight),percentScrolled=pixelScrolled/(e-o),deltaTopScrollVal=l.invert?100*percentScrolled:100*(1-percentScrolled),i.css({"background-position":"50% "+deltaTopScrollVal+"%"}))}!function(){t=i.data("source-url"),parseFloat(i.data("source-width")),parseFloat(i.data("source-height")),i.css({"background-image":"url("+t+")"}),l.bgfixed&&i.css({"background-attachment":"fixed"});n.on("scroll",function(){l.offset&&e()}).trigger("scroll"),n.on("resize",function(){i.width(n.width()),i.css({width:n.width(),"margin-left":Math.floor(-.5*n.width()),left:"50%"}),l.offset&&e()}).trigger("resize")}()})},destroy:function(){},reposition:function(){},update:function(t){}};d.fn.cherryFixedParallax=function(t){return e[t]?e[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void d.error("Method with name "+t+" is not exist for jQuery.cherryMediaParallax"):e.init.apply(this,arguments)}}(jQuery);
!function(u){u.fn.tmStickUp=function(o){var t={correctionSelector:u(".correctionSelector")};u.extend(t,o);var e,c,s=u(this),i=u(window),r=u(document),n=0,l=0,p=0,a=0;n=parseInt(s.offset().top),parseInt(s.css("margin-top")),l=parseInt(s.outerHeight(!0)),u('<div class="pseudoStickyBlock"></div>').insertAfter(s),(e=u(".pseudoStickyBlock")).css({position:"relative",display:"block"}),r.on("scroll",function(){c=u(this).scrollTop(),a<c?"down":"up",a=c,correctionValue=t.correctionSelector.outerHeight(!0),p=parseInt(i.scrollTop()),n-correctionValue<p?(s.addClass("isStuck"),s.css({position:"fixed",top:correctionValue}),e.css({height:l})):(s.removeClass("isStuck"),s.css({position:"relative",top:0}),e.css({height:0}))}).trigger("scroll")}}(jQuery);
!function(i){"use strict";var e,s,r,t,o,n,a,h,l,p,f,u,c,d,v,m,y,C=(r="sf-breadcrumb",t="sf-js-enabled",o="sf-with-ul",n="sf-arrows",(s=/iPhone|iPad|iPod/i.test(navigator.userAgent))&&i(window).load(function(){i("body").children().on("click",i.noop)}),a=s,h="behavior"in(e=document.documentElement.style)&&"fill"in e&&/iemobile/i.test(navigator.userAgent),l=function(e,s){var o=t;s.cssArrows&&(o+=" "+n),e.toggleClass(o)},p=function(e){e.children("a").toggleClass(o)},f=function(e){var s=e.css("ms-touch-action");s="pan-y"===s?"auto":"pan-y",e.css("ms-touch-action",s)},u=function(e){var s=i(this),o=s.siblings(e.data.popUpSelector);0<o.length&&o.is(":hidden")&&(s.one("click.superfish",!1),"MSPointerDown"===e.type?s.trigger("focus"):i.proxy(c,s.parent("li"))())},c=function(){var e=i(this),s=y(e);clearTimeout(s.sfTimer),e.siblings().superfish("hide").end().superfish("show")},d=function(){var e=i(this),s=y(e);a?i.proxy(v,e,s)():(clearTimeout(s.sfTimer),s.sfTimer=setTimeout(i.proxy(v,e,s),s.delay))},v=function(e){e.retainPath=-1<i.inArray(this[0],e.$path),this.superfish("hide"),this.parents("."+e.hoverClass).length||(e.onIdle.call(m(this)),e.$path.length&&i.proxy(c,e.$path)())},m=function(e){return e.closest("."+t)},y=function(e){return m(e).data("sf-options")},{hide:function(e){if(this.length){var s=y(this);if(!s)return this;var o=!0===s.retainPath?s.$path:"",t=this.find("li."+s.hoverClass).add(this).not(o).removeClass(s.hoverClass).children(s.popUpSelector),n=s.speedOut;e&&(t.show(),n=0),s.retainPath=!1,s.onBeforeHide.call(t),t.stop(!0,!0).animate(s.animationOut,n,function(){var e=i(this);s.onHide.call(e)})}return this},show:function(){var e=y(this);if(!e)return this;var s=this.addClass(e.hoverClass).children(e.popUpSelector);return e.onBeforeShow.call(s),s.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(s)}),this},destroy:function(){return this.each(function(){var e,s=i(this),o=s.data("sf-options");if(!o)return!1;e=s.find(o.popUpSelector).parent("li"),clearTimeout(o.sfTimer),l(s,o),p(e),f(s),s.off(".superfish").off(".hoverIntent"),e.children(o.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),o.$path.removeClass(o.hoverClass+" "+r).addClass(o.pathClass),s.find("."+o.hoverClass).removeClass(o.hoverClass),o.onDestroy.call(s),s.removeData("sf-options")})},init:function(n){return this.each(function(){var e=i(this);if(e.data("sf-options"))return!1;var s,o=i.extend({},i.fn.superfish.defaults,n),t=e.find(o.popUpSelector).parent("li");o.$path=(s=o,e.find("li."+s.pathClass).slice(0,s.pathLevels).addClass(s.hoverClass+" "+r).filter(function(){return i(this).children(s.popUpSelector).hide().show().length}).removeClass(s.pathClass)),e.data("sf-options",o),l(e,o),p(t),f(e),function(e,s){var o="li:has("+s.popUpSelector+")";i.fn.hoverIntent&&!s.disableHI?e.hoverIntent(c,d,o):e.on("mouseenter.superfish",o,c).on("mouseleave.superfish",o,d);var t="MSPointerDown.superfish";a||(t+=" touchend.superfish"),h&&(t+=" mousedown.superfish"),e.on("focusin.superfish","li",c).on("focusout.superfish","li",d).on(t,"a",s,u)}(e,o),t.not("."+r).superfish("hide",!0),o.onInit.call(this)})}});i.fn.superfish=function(e,s){return C[e]?C[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?i.error("Method "+e+" does not exist on jQuery.fn.superfish"):C.init.apply(this,arguments)},i.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{height:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:i.noop,onBeforeShow:i.noop,onShow:i.noop,onBeforeHide:i.noop,onHide:i.noop,onIdle:i.noop,onDestroy:i.noop},i.fn.extend({hideSuperfishUl:C.hide,showSuperfishUl:C.show})}(jQuery),jQuery(function(){jQuery(".sf-menu").superfish()});
jQuery(document).ready(function(){
	var topControlIcon = jQuery ('.top-icon-menu, .shadow, .block-cart-header, .top-search, .page, body, .header-button');

	var blockSliderMarker = jQuery('.products-grid, .products-list, .catalog-product-view');
 	if(blockSliderMarker.length===0 ) {
   		jQuery(".sidebar .block-slider-sidebar").remove();  
 	}
 	else {
  		jQuery(".sidebar .block-slider-sidebar").addClass('block-slider-start');
  	};

	/*************************************************************** Superfish Menu *********************************************************************/
	/* toggle nav */
	jQuery("#menu-icon").on("click", function(){
        jQuery("#sf-menu-phone").slideToggle();
        jQuery(this).toggleClass("active");
	});

    jQuery('#sf-menu-phone').find('li.parent').append('<strong></strong>');
    jQuery('#sf-menu-phone li.parent strong').on("click", function(){
        if (jQuery(this).attr('class') == 'opened') {
        	jQuery(this).removeClass().parent('li.parent').find('> ul').slideToggle();
			jQuery(this).parent('li.parent').removeClass('opened');
        } else {
			jQuery(this).addClass('opened').parent('li.parent').find('> ul').slideToggle();
				jQuery(this).parent('li.parent').addClass('opened');
		}
	});

	jQuery('.swipe-control, .block-cart-header, .top-search').on("click", function(){
        jQuery('#sf-menu-phone').slideUp()
        jQuery('#menu-icon').removeClass('active')
	});

	/***************************************************************** Cart Truncated *********************************************************************/
	
		jQuery('.truncated span').click(function(){
				jQuery(this).parent().find('.truncated_full_value').stop().slideToggle();
		});
		function truncateOptions() {
		    $$('.truncated').each(function(element){
		        Event.observe(element, 'mouseover', function(){
		            if (element.down('div.truncated_full_value')) {
		                element.down('div.truncated_full_value').removeClassName('show')
		            }
		        });
		    });
		}
	
		Event.observe(window, 'load', function(){
		   truncateOptions();
		});

		jQuery(".price-box.map-info a, .tier-price a").click(function() { 
	        jQuery(".map-popup").toggleClass("displayblock");
	    });

	    jQuery('.map-popup-close').on('click',function(){ 
	    	jQuery('.map-popup').removeClass('displayblock');
	    });
	/********************************************************** Product View Accordion *********************************************************************/
		jQuery.fn.slideFadeToggle = function(speed, easing, callback) {
		  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);  
		};
		jQuery('.box-collateral').not('.box-up-sell').find('h2').append('<span class="toggle"></span>');
		jQuery('.form-add').find('.box-collateral-content').css({'display':'block'}).parents('.form-add').find('> h2 > span').addClass('opened');
		
		jQuery('.box-collateral > h2').click(function(){
			OpenedClass = jQuery(this).find('> span').attr('class');
			if (OpenedClass == 'toggle opened') { jQuery(this).find('> span').removeClass('opened'); }
			else { jQuery(this).find('> span').addClass('opened'); }
			jQuery(this).parents('.box-collateral').find(' > .box-collateral-content').slideFadeToggle()
		});
	/*************************************************************** Sidebar Accordion *********************************************************************/
		jQuery('.sidebar .block .block-title').append('<span class="toggle"></span>');
		jQuery('.sidebar .block .block-title').on("click", function(){
			if (jQuery(this).find('> span').attr('class') == 'toggle opened') { jQuery(this).find('> span').removeClass('opened').parents('.block').find('.block-content').slideToggle(); }
			else {
				jQuery(this).find('> span').addClass('opened').parents('.block').find('.block-content').slideToggle();
			}
		});

	/**************************************************************** Footer Accordion *********************************************************************/


	/******************************************************************** Header Buttons *********************************************************************/

		jQuery('.header-button, .switch-show').not('.top-login').on("click", function(e){
		    var ul=jQuery(this).find('ul')
		    if(ul.is(':hidden'))
		     ul.slideDown()
		     ,jQuery(this).addClass('active')
		    else
		     ul.slideUp()
		     ,jQuery(this).removeClass('active')
		     jQuery('.header-button, .switch-show').not(this).removeClass('active'),
		     jQuery('.header-button, .switch-show').not(this).find('ul').slideUp()
		     jQuery('.header-button ul li, .switch-show ul li').click(function(e){
		      	 e.stopPropagation(); 
		    	});
		    	return false
		});
		jQuery(document).on('click',function(){ 
		    jQuery('.header-button, .switch-show').removeClass('active').find('ul').slideUp()
		});
		jQuery('.block-cart-header, .top-search').on('click',function(){ 
		    jQuery('.header-button').removeClass('active').find('ul').slideUp()
		});
		   
/********************************************************************* swipe *****************************************************************************/
		function swipe_animate_true(){
			jQuery('.swipe-control').addClass('active');
			jQuery('.swipe').stop(true).animate({'left':'0'},300);
		}
		function swipe_animate_false(){
			jQuery('.swipe-control').removeClass('active');
			jQuery('.swipe').stop(true).animate({'left':'-237px'},400);
		}
	    jQuery('.swipe-control').click(function(){
	    	swipe_animate_true();
	    	mini_form_hide();
		    if(jQuery(this).parents('body').hasClass('ind')){
		    	jQuery(this).parents('body').removeClass('ind');
		    	swipe_animate_false()
		    	return false
		    }
		    else{
			    jQuery(this).parents('body').addClass('ind');
			    swipe_animate_true()
			    return false
		    }
	    })

	    jQuery(topControlIcon).not('.page').click(function(){
	    	swipe_animate_false();
		    if(jQuery(this).parents('body').hasClass('ind')){
		    	jQuery(this).parents('body').removeClass('ind');
		    	swipe_animate_false();
		    	return false
		    }
		});

	   jQuery('.swipe').outerHeight(jQuery(window).outerHeight());

	    jQuery(window).resize(function() {
	        jQuery('.swipe').outerHeight(jQuery(window).outerHeight());
	    });

	    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent),
	    $flag
        if(isMobile) {
				jQuery('body').removeClass('ps-static');
				jQuery('body').addClass('ps-phone');
				jQuery('.page').click(function(){
			    	jQuery('body').removeClass('ind');
			    	swipe_animate_false();
				});

		};
		var isiPhone = (navigator.userAgent.match(/iPhone/i) != null);

		// Sticky menu
		if(!isMobile) {
			if(jQuery(".nav-container").length){ 
				jQuery('.nav-container').tmStickUp({}) ;
			};
		};

/********************************************************************* top-icon-menu ***********************************************************************/
		function mini_form_hide(){
			if(!$flag){	return false}		
				jQuery('#search_mini_form').animate({height: 'hide', opacity:0}, 300);		
				jQuery('.top-search').removeClass('active');
			
		}
		function mini_form_show(){
			jQuery('#search_mini_form').animate({height: 'show', opacity:1}, 300);
			jQuery('.top-search').addClass('active');
			jQuery('.form-search .input-text').trigger('focus');
			if (isiPhone) {
				jQuery('#search_mini_form').css({'top':'55px'});
			}
		};
		
		jQuery('.top-search').on("click", function(){
			if ( jQuery('#search_mini_form').css('display') == 'none' ) {
				mini_form_show()
			} else {
				mini_form_hide()
			}
		}); 

	/********************************************************************** Header Cart *********************************************************************/

		jQuery('.header .block-cart-header ').click(function(){
			jQuery('.block-cart-header .cart-content').stop(true, true).slideToggle(300);
			jQuery(this).toggleClass('active');
			return false
		});
		jQuery(topControlIcon).not('.block-cart-header').on('click',function(){ 
			jQuery('.block-cart-header .cart-content').slideUp();
			jQuery('.block-cart-header').removeClass('active');
		});
		jQuery('.swipe-control').on('click',function(){ 
			jQuery('.block-cart-header .cart-content').slideUp();
			jQuery('.block-cart-header').removeClass('active');
		});
		jQuery('.header .block-cart-header a').on('click touchend', function(e) {
		    var el = jQuery(this);
		    var link = el.attr('href');
		    window.location = link;
		});

!function($){
 var top_search=$('.top-search')
 $(window).bind('load resize',function(){
  var bodyWidth=$('.container').width()
  if(bodyWidth>=767){    
    if($flag===true)
  		$('#search_mini_form').show().css({opacity:1})
  	$flag = false;
  }else{    
    if($flag===false&&!top_search.hasClass('active'))
  		$('#search_mini_form').hide().css({opacity:0})
  	$flag = true;
  }
  })
}(jQuery);
});



/**********************************************************************back-top*****************************************************************************/
jQuery(function () {
 jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 100) {
   jQuery('#back-top').fadeIn();
  } else {
   jQuery('#back-top').fadeOut();
  }
 });

 // scroll body to 0px on click
 jQuery('#back-top a').click(function () {
  jQuery('body,html').stop(false, false).animate({
   scrollTop: 0
  }, 800);
  return false;
 });
});

/***************************************************************************************************** Magento class **************************************************************************/
jQuery(document).ready(function() {
	jQuery('.sidebar .block').last().addClass('last_block');
	jQuery('.sidebar .block').first().addClass('first');
	jQuery('.box-up-sell li').eq(2).addClass('last');
	jQuery('.form-alt li:last-child').addClass('last');
	jQuery('.product-collateral #customer-reviews dl dd, #cart-sidebar .item').last().addClass('last');
	jQuery('#checkout-progress-state li:odd').addClass('odd');
	jQuery('.product-view .product-img-box .product-image').append('<span></span>');
    jQuery('.links a.top-link-cart').parent().addClass('top-car');
    jQuery('.footer-cols-wrapper .footer-col').last().addClass('last'); 
    if(jQuery('.footer .facebook-fanbox')){ jQuery('.footer .footer-col').addClass('footer-col-ex')};
    jQuery('.input-box select, .input-box input, input.qty, .data-table textarea, .input-box textarea, .advanced-search .input-range input').not('input.radio, input.checkbox').addClass('form-control');
    if(jQuery('.new + .sale').each(function(index){
    	jQuery(this).parent('.label-product').addClass('label-indent');
    }));
  
	if (jQuery('.container').width() < 766) {
		if(jQuery(".my-account").length){
			jQuery('.my-account table td.order-id').prepend('<strong>Order #:</strong>');
			jQuery('.my-account table td.order-date').prepend('<strong>Date: </strong>');
			jQuery('.my-account table td.order-ship').prepend('<strong>Ship To: </strong>');
			jQuery('.my-account table td.order-total').prepend('<strong>Order Total: </strong>');
			jQuery('.my-account table td.order-status').prepend('<strong>Status: </strong>');
			jQuery('.my-account table td.order-sku').prepend('<strong>SKU: </strong>');
			jQuery('.my-account table td.order-price').prepend('<strong>Price: </strong>');
			jQuery('.my-account table td.order-subtotal').prepend('<strong>Subtotal: </strong>');
		};
		
		if(jQuery(".multiple-checkout").length){
			jQuery('.multiple-checkout td.order-qty, .multiple-checkout th.order-qty').prepend('<strong>Qty: </strong>');
			jQuery('.multiple-checkout td.order-shipping, .multiple-checkout th.order-shipping, ').prepend('<strong>Send To: </strong>');
			jQuery('.multiple-checkout td.order-subtotal, .multiple-checkout th.order-subtotal').prepend('<strong>Subtotal: </strong>');
			jQuery('.multiple-checkout td.order-price, .multiple-checkout th.order-price').prepend('<strong>Price: </strong>');
		};
	}

		jQuery(function() {
		//	Scrolled by user interaction
			if(jQuery(".up-sell-carousel").length){ 
				jQuery('.up-sell-carousel').carouFredSel({
					responsive: true,
					width: '100%',
					prev: '.carousel-prev',
					next: '.carousel-next',
					scroll: 1,
					auto	: {
			    		play	: 1,
				    	timeoutDuration :15000
				    },
					items: {
						visible: {
							min: 1,
							max: 4
						},
						width:360,
					},
					mousewheel: true,
					swipe: {
						onMouse: false,
						onTouch: true
					}
				});
			};

			if(jQuery(".tumbSlider").length){ 
				jQuery('.tumbSlider').carouFredSel({
					responsive: true,
					width: '100%',
                    height: '140px',
					prev: '.tumbSlider-prev',
					next: '.tumbSlider-next',
					scroll: 1,
					auto	:false,
					items: {
						visible: {
							min: 1,
							max: 3
						},
						width:97,
					},
					mousewheel: true,
					swipe: {
						onMouse: false,
						onTouch: true
					}
				});
                jQuery('.tumbSlider').parent().css("height", "140px");
				jQuery(".tumbSlider").swipe({
		            excludedElements: "button, input, select, textarea, .noSwipe",
		            swipeLeft: function() {
		                jQuery('.tumbSlider').trigger('next', true);
		            },
		            swipeRight: function() {
		                jQuery('.tumbSlider').trigger('prev', true);
		            },
		            tap: function(event, target) {
		                // in case of an image wrapped by a link click on image will fire parent link
		                jQuery(target).parent().trigger('click');
		            }
		        });
			};
			if(jQuery(".slider-sidebar").length){ 
				jQuery('.slider-sidebar').carouFredSel({
					responsive: true,
					width: '100%',
					prev: '.slider-sidebar-prev',
					next: '.slider-sidebar-next',
					pagination:'.slider-sidebar-pager',
					scroll: 1,
					auto	: {
			    		play	: 1,
				    	timeoutDuration :15000
				    },
					items: {
						visible: {
							min: 1,
							max: 1
						},
						width:270,
					},
					mousewheel: true,
					swipe: {
						onMouse: true,
						onTouch: true
					}
				});
			};
			
		});
		if(jQuery("#gallery-swipe").length){ 
				jQuery('#gallery-swipe').bxSlider({
					pager:false,
					controls:true,
					minSlides: 1,
					maxSlides: 1,
					infiniteLoop:false,
					moveSlides:1
					});
			};

		if(jQuery("#gallery-swipe").length){  
			var myPhotoSwipe = jQuery("#gallery-swipe a").photoSwipe({ enableMouseWheel: false , enableKeyboard: false, captionAndToolbarAutoHideDelay:0 });
		};

		// + and - Qty product  
	var parentTD;
    var newDiv;
    var navigationDiv;
    var i = 1;
    var currentElement = null;
    $$('.qty-block input.qty').each(function(el){
        parentTD = el.parentNode;
        newDiv = document.createElement('div');
        newDiv.className += "qty-control";
        Element.extend(newDiv);
        newDiv.id = i++;
        newDiv.update(parentTD.innerHTML).innerHTML; //set new input inside new div
        parentTD.update().innerHTML; //erase old input
        parentTD.appendChild(newDiv); //show new div
        navigationDiv = document.createElement('div');
        Element.extend(navigationDiv);
        navigationDiv.update('<p class="up">+</p><p class="dn">-</i></p>').innerHTML;
        newDiv.appendChild(navigationDiv);
    });
    $$('p.up').each(function(el){
        el.observe('click',function(event){
            currentElement = el.parentNode.previous();
            i = 0; //In case we get in to infinite loop
            while(currentElement.type != 'text' && i < 5){
                currentElement = currentElement.previous();
                i++;
            }
            currentElement.value = parseInt(currentElement.value) + 1;
        });
    });
    $$('p.dn').each(function(el){
        el.observe('click',function(event){
            currentElement = el.parentNode.previous();
            i = 0; //In case we get in to infinite loop
            while(currentElement.type != 'text' && i < 5){
                currentElement = currentElement.previous();
                i++;
            }
            if(parseInt(currentElement.value) > 0){
                currentElement.value = parseInt(currentElement.value) - 1;
            }
        });
    });

    jQuery(document).ready(function () {
        jQuery(window).scroll( function () {
            var url = "https://www.youtube.com/embed/_N_FKt16wfM?rel=0";
            jQuery('iframe#video-pres').attr('src', url);
            jQuery(window).unbind('scroll')
        })
    });
		
});



(function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

}(document));

/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(P){var t,e,i,s;function n(t,e){var i,s,n,o=t.nodeName.toLowerCase();return"area"===o?(s=(i=t.parentNode).name,!(!t.href||!s||"map"!==i.nodeName.toLowerCase())&&(!!(n=P("img[usemap='#"+s+"']")[0])&&a(n))):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o&&t.href||e)&&a(t)}function a(t){return P.expr.filters.visible(t)&&!P(t).parents().addBack().filter(function(){return"hidden"===P.css(this,"visibility")}).length}P.ui=P.ui||{},P.extend(P.ui,{version:"1.11.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),P.fn.extend({scrollParent:function(t){var e=this.css("position"),i="absolute"===e,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,n=this.parents().filter(function(){var t=P(this);return(!i||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&n.length?n:P(this[0].ownerDocument||document)},uniqueId:(t=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&P(this).removeAttr("id")})}}),P.extend(P.expr[":"],{data:P.expr.createPseudo?P.expr.createPseudo(function(e){return function(t){return!!P.data(t,e)}}):function(t,e,i){return!!P.data(t,i[3])},focusable:function(t){return n(t,!isNaN(P.attr(t,"tabindex")))},tabbable:function(t){var e=P.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&n(t,!i)}}),P("<a>").outerWidth(1).jquery||P.each(["Width","Height"],function(t,i){var n="Width"===i?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),o={innerWidth:P.fn.innerWidth,innerHeight:P.fn.innerHeight,outerWidth:P.fn.outerWidth,outerHeight:P.fn.outerHeight};function a(t,e,i,s){return P.each(n,function(){e-=parseFloat(P.css(t,"padding"+this))||0,i&&(e-=parseFloat(P.css(t,"border"+this+"Width"))||0),s&&(e-=parseFloat(P.css(t,"margin"+this))||0)}),e}P.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){P(this).css(s,a(this,t)+"px")})},P.fn["outer"+i]=function(t,e){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){P(this).css(s,a(this,t,!0,e)+"px")})}}),P.fn.addBack||(P.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),P("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(P.fn.removeData=(e=P.fn.removeData,function(t){return arguments.length?e.call(this,P.camelCase(t)):e.call(this)})),P.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),P.fn.extend({focus:(s=P.fn.focus,function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){P(t).focus(),i&&i.call(t)},e)}):s.apply(this,arguments)}),disableSelection:(i="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.bind(i+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var e,i,s=P(this[0]);s.length&&s[0]!==document;){if(("absolute"===(e=s.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(s.css("zIndex"),10),!isNaN(i)&&0!==i))return i;s=s.parent()}return 0}}),P.ui.plugin={add:function(t,e,i){var s,n=P.ui[t].prototype;for(s in i)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([e,i[s]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;n<o.length;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}};var o,r=0,h=Array.prototype.slice;P.cleanData=(o=P.cleanData,function(t){var e,i,s;for(s=0;null!=(i=t[s]);s++)try{(e=P._data(i,"events"))&&e.remove&&P(i).triggerHandler("remove")}catch(t){}o(t)}),P.widget=function(t,i,e){var s,n,o,a,r={},h=t.split(".")[0];return t=t.split(".")[1],s=h+"-"+t,e||(e=i,i=P.Widget),P.expr[":"][s.toLowerCase()]=function(t){return!!P.data(t,s)},P[h]=P[h]||{},n=P[h][t],o=P[h][t]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},P.extend(o,n,{version:e.version,_proto:P.extend({},e),_childConstructors:[]}),(a=new i).options=P.widget.extend({},a.options),P.each(e,function(e,s){var n,o;P.isFunction(s)?r[e]=(n=function(){return i.prototype[e].apply(this,arguments)},o=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=n,this._superApply=o,t=s.apply(this,arguments),this._super=e,this._superApply=i,t}):r[e]=s}),o.prototype=P.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||t},r,{constructor:o,namespace:h,widgetName:t,widgetFullName:s}),n?(P.each(n._childConstructors,function(t,e){var i=e.prototype;P.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),P.widget.bridge(t,o),o},P.widget.extend=function(t){for(var e,i,s=h.call(arguments,1),n=0,o=s.length;n<o;n++)for(e in s[n])i=s[n][e],s[n].hasOwnProperty(e)&&void 0!==i&&(P.isPlainObject(i)?t[e]=P.isPlainObject(t[e])?P.widget.extend({},t[e],i):P.widget.extend({},i):t[e]=i);return t},P.widget.bridge=function(o,e){var a=e.prototype.widgetFullName||o;P.fn[o]=function(i){var t="string"==typeof i,s=h.call(arguments,1),n=this;return i=!t&&s.length?P.widget.extend.apply(null,[i].concat(s)):i,t?this.each(function(){var t,e=P.data(this,a);return"instance"===i?(n=e,!1):e?P.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,s))!==e&&void 0!==t?(n=t&&t.jquery?n.pushStack(t.get()):t,!1):void 0:P.error("no such method '"+i+"' for "+o+" widget instance"):P.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):this.each(function(){var t=P.data(this,a);t?(t.option(i||{}),t._init&&t._init()):P.data(this,a,new e(i,this))}),n}},P.Widget=function(){},P.Widget._childConstructors=[],P.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=P(e||this.defaultElement||this)[0],this.element=P(e),this.uuid=r++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=P.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=P(),this.hoverable=P(),this.focusable=P(),e!==this&&(P.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=P(e.style?e.ownerDocument:e.document||e),this.window=P(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:P.noop,_getCreateEventData:P.noop,_create:P.noop,_init:P.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(P.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:P.noop,widget:function(){return this.element},option:function(t,e){var i,s,n,o=t;if(0===arguments.length)return P.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(s=o[t]=P.widget.extend({},this.options[t]),n=0;n<i.length-1;n++)s[i[n]]=s[i[n]]||{},s=s[i[n]];if(t=i.pop(),1===arguments.length)return void 0===s[t]?null:s[t];s[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(a,r,t){var h,l=this;"boolean"!=typeof a&&(t=r,r=a,a=!1),t?(r=h=P(r),this.bindings=this.bindings.add(r)):(t=r,r=this.element,h=this.widget()),P.each(t,function(t,e){function i(){if(a||!0!==l.options.disabled&&!P(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||P.guid++);var s=t.match(/^([\w:-]*)\s*(.*)$/),n=s[1]+l.eventNamespace,o=s[2];o?h.delegate(o,n,i):r.bind(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){P(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){P(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){P(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){P(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var s,n,o=this.options[t];if(i=i||{},(e=P.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],n=e.originalEvent)for(s in n)s in e||(e[s]=n[s]);return this.element.trigger(e,i),!(P.isFunction(o)&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},P.each({show:"fadeIn",hide:"fadeOut"},function(o,a){P.Widget.prototype["_"+o]=function(e,t,i){"string"==typeof t&&(t={effect:t});var s,n=t?!0===t||"number"==typeof t?a:t.effect||a:o;"number"==typeof(t=t||{})&&(t={duration:t}),s=!P.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),s&&P.effects&&P.effects.effect[n]?e[o](t):n!==o&&e[n]?e[n](t.duration,t.easing,i):e.queue(function(t){P(this)[o](),i&&i.call(e[0]),t()})}});P.widget;var l=!1;P(document).mouseup(function(){l=!1});P.widget("ui.mouse",{version:"1.11.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(t){if(!0===P.data(t.target,e.widgetName+".preventClickEvent"))return P.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!l){this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,i=1===t.which,s=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&P(t.target).closest(this.options.cancel).length;return!(i&&!s&&this._mouseCapture(t))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?(t.preventDefault(),!0):(!0===P.data(t.target,this.widgetName+".preventClickEvent")&&P.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),l=!0))}},_mouseMove:function(t){return P.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):t.which?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&P.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),l=!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});!function(){P.ui=P.ui||{};var n,x,k=Math.max,C=Math.abs,D=Math.round,s=/left|center|right/,o=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,h=/%$/,l=P.fn.position;function I(t,e,i){return[parseFloat(t[0])*(h.test(t[0])?e/100:1),parseFloat(t[1])*(h.test(t[1])?i/100:1)]}function T(t,e){return parseInt(P.css(t,e),10)||0}P.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,e,i=P("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=i.children()[0];return P("body").append(i),t=s.offsetWidth,i.css("overflow","scroll"),t===(e=s.offsetWidth)&&(e=i[0].clientWidth),i.remove(),n=t-e},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),s="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?P.position.scrollbarWidth():0,height:s?P.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=P(t||window),i=P.isWindow(e[0]),s=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:s,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:i||s?e.width():e.outerWidth(),height:i||s?e.height():e.outerHeight()}}},P.fn.position=function(u){if(!u||!u.of)return l.apply(this,arguments);u=P.extend({},u);var d,p,f,m,g,t,e,i,v=P(u.of),_=P.position.getWithinInfo(u.within),b=P.position.getScrollInfo(_),y=(u.collision||"flip").split(" "),w={};return t=9===(i=(e=v)[0]).nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:P.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()},v[0].preventDefault&&(u.at="left top"),p=t.width,f=t.height,m=t.offset,g=P.extend({},m),P.each(["my","at"],function(){var t,e,i=(u[this]||"").split(" ");1===i.length&&(i=s.test(i[0])?i.concat(["center"]):o.test(i[0])?["center"].concat(i):["center","center"]),i[0]=s.test(i[0])?i[0]:"center",i[1]=o.test(i[1])?i[1]:"center",t=a.exec(i[0]),e=a.exec(i[1]),w[this]=[t?t[0]:0,e?e[0]:0],u[this]=[r.exec(i[0])[0],r.exec(i[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===u.at[0]?g.left+=p:"center"===u.at[0]&&(g.left+=p/2),"bottom"===u.at[1]?g.top+=f:"center"===u.at[1]&&(g.top+=f/2),d=I(w.at,p,f),g.left+=d[0],g.top+=d[1],this.each(function(){var i,t,a=P(this),r=a.outerWidth(),h=a.outerHeight(),e=T(this,"marginLeft"),s=T(this,"marginTop"),n=r+e+T(this,"marginRight")+b.width,o=h+s+T(this,"marginBottom")+b.height,l=P.extend({},g),c=I(w.my,a.outerWidth(),a.outerHeight());"right"===u.my[0]?l.left-=r:"center"===u.my[0]&&(l.left-=r/2),"bottom"===u.my[1]?l.top-=h:"center"===u.my[1]&&(l.top-=h/2),l.left+=c[0],l.top+=c[1],x||(l.left=D(l.left),l.top=D(l.top)),i={marginLeft:e,marginTop:s},P.each(["left","top"],function(t,e){P.ui.position[y[t]]&&P.ui.position[y[t]][e](l,{targetWidth:p,targetHeight:f,elemWidth:r,elemHeight:h,collisionPosition:i,collisionWidth:n,collisionHeight:o,offset:[d[0]+c[0],d[1]+c[1]],my:u.my,at:u.at,within:_,elem:a})}),u.using&&(t=function(t){var e=m.left-l.left,i=e+p-r,s=m.top-l.top,n=s+f-h,o={target:{element:v,left:m.left,top:m.top,width:p,height:f},element:{element:a,left:l.left,top:l.top,width:r,height:h},horizontal:i<0?"left":0<e?"right":"center",vertical:n<0?"top":0<s?"bottom":"middle"};p<r&&C(e+i)<p&&(o.horizontal="center"),f<h&&C(s+n)<f&&(o.vertical="middle"),k(C(e),C(i))>k(C(s),C(n))?o.important="horizontal":o.important="vertical",u.using.call(this,t,o)}),a.offset(P.extend(l,{using:t}))})},P.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,a=t.left-e.collisionPosition.marginLeft,r=n-a,h=a+e.collisionWidth-o-n;e.collisionWidth>o?0<r&&h<=0?(i=t.left+r+e.collisionWidth-o-n,t.left+=r-i):t.left=0<h&&r<=0?n:h<r?n+o-e.collisionWidth:n:0<r?t.left+=r:0<h?t.left-=h:t.left=k(t.left-a,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,r=n-a,h=a+e.collisionHeight-o-n;e.collisionHeight>o?0<r&&h<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=0<h&&r<=0?n:h<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<h?t.top-=h:t.top=k(t.top-a,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,r=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,l=h-r,c=h+e.collisionWidth-a-r,u="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];l<0?((i=t.left+u+d+p+e.collisionWidth-a-o)<0||i<C(l))&&(t.left+=u+d+p):0<c&&(0<(s=t.left-e.collisionPosition.marginLeft+u+d+p-r)||C(s)<c)&&(t.left+=u+d+p)},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,r=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,l=h-r,c=h+e.collisionHeight-a-r,u="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,p=-2*e.offset[1];l<0?(s=t.top+u+d+p+e.collisionHeight-a-o,t.top+u+d+p>l&&(s<0||s<C(l))&&(t.top+=u+d+p)):0<c&&(i=t.top-e.collisionPosition.marginTop+u+d+p-r,t.top+u+d+p>c&&(0<i||C(i)<c)&&(t.top+=u+d+p))}},flipfit:{left:function(){P.ui.position.flip.left.apply(this,arguments),P.ui.position.fit.left.apply(this,arguments)},top:function(){P.ui.position.flip.top.apply(this,arguments),P.ui.position.fit.top.apply(this,arguments)}}},function(){var t,e,i,s,n,o=document.getElementsByTagName("body")[0],a=document.createElement("div");for(n in t=document.createElement(o?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&P.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"}),i)t.style[n]=i[n];t.appendChild(a),(e=o||document.documentElement).insertBefore(t,e.firstChild),a.style.cssText="position: absolute; left: 10.7432222px;",s=P(a).offset().left,x=10<s&&s<11,t.innerHTML="",e.removeChild(t)}()}();P.ui.position,P.widget("ui.accordion",{version:"1.11.1",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=P(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||!1!==t.active&&null!=t.active||(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():P()}},_createIcons:function(){var t=this.options.icons;t&&(P("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){"active"!==t?("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||!1!==this.options.active||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&(this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e))):this._activate(e)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var e=P.ui.keyCode,i=this.headers.length,s=this.headers.index(t.target),n=!1;switch(t.keyCode){case e.RIGHT:case e.DOWN:n=this.headers[(s+1)%i];break;case e.LEFT:case e.UP:n=this.headers[(s-1+i)%i];break;case e.SPACE:case e.ENTER:this._eventHandler(t);break;case e.HOME:n=this.headers[0];break;case e.END:n=this.headers[i-1]}n&&(P(t.target).attr("tabIndex",-1),P(n).attr("tabIndex",0),n.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===P.ui.keyCode.UP&&t.ctrlKey&&P(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),!1===t.active&&!0===t.collapsible||!this.headers.length?(t.active=!1,this.active=P()):!1===t.active?this._activate(0):this.active.length&&!P.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=P()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,t=this.options,e=t.heightStyle,s=this.element.parent();this.active=this._findActive(t.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=P(this),e=t.uniqueId().attr("id"),i=t.next(),s=i.uniqueId().attr("id");t.attr("aria-controls",s),i.attr("aria-labelledby",e)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(t.event),"fill"===e?(i=s.height(),this.element.siblings(":visible").each(function(){var t=P(this),e=t.css("position");"absolute"!==e&&"fixed"!==e&&(i-=t.outerHeight(!0))}),this.headers.each(function(){i-=P(this).outerHeight(!0)}),this.headers.next().each(function(){P(this).height(Math.max(0,i-P(this).innerHeight()+P(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.headers.next().each(function(){i=Math.max(i,P(this).css("height","").height())}).height(i))},_activate:function(t){var e=this._findActive(t)[0];e!==this.active[0]&&(e=e||this.active[0],this._eventHandler({target:e,currentTarget:e,preventDefault:P.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):P()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&P.each(t.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var e=this.options,i=this.active,s=P(t.currentTarget),n=s[0]===i[0],o=n&&e.collapsible,a=o?P():s.next(),r=i.next(),h={oldHeader:i,oldPanel:r,newHeader:o?P():s,newPanel:a};t.preventDefault(),n&&!e.collapsible||!1===this._trigger("beforeActivate",t,h)||(e.active=!o&&this.headers.index(s),this.active=n?P():s,this._toggle(h),i.removeClass("ui-accordion-header-active ui-state-active"),e.icons&&i.children(".ui-accordion-header-icon").removeClass(e.icons.activeHeader).addClass(e.icons.header),n||(s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),e.icons&&s.children(".ui-accordion-header-icon").removeClass(e.icons.header).addClass(e.icons.activeHeader),s.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var e=t.newPanel,i=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=e,this.prevHide=i,this.options.animate?this._animate(e,i,t):(i.hide(),e.show(),this._toggleComplete(t)),i.attr({"aria-hidden":"true"}),i.prev().attr("aria-selected","false"),e.length&&i.length?i.prev().attr({tabIndex:-1,"aria-expanded":"false"}):e.length&&this.headers.filter(function(){return 0===P(this).attr("tabIndex")}).attr("tabIndex",-1),e.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(t,i,e){var s,n,o,a=this,r=0,h=t.length&&(!i.length||t.index()<i.index()),l=this.options.animate||{},c=h&&l.down||l,u=function(){a._toggleComplete(e)};return"number"==typeof c&&(o=c),"string"==typeof c&&(n=c),n=n||c.easing||l.easing,o=o||c.duration||l.duration,i.length?t.length?(s=t.show().outerHeight(),i.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:o,easing:n,complete:u,step:function(t,e){e.now=Math.round(t),"height"!==e.prop?r+=e.now:"content"!==a.options.heightStyle&&(e.now=Math.round(s-i.outerHeight()-r),r=0)}})):i.animate(this.hideProps,o,n,u):t.animate(this.showProps,o,n,u)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),P.widget("ui.menu",{version:"1.11.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(t){var e=P(t.target);!this.mouseHandled&&e.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),e.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&P(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var e=P(t.currentTarget);e.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,e)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(t){this._delay(function(){P.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=P(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var e,i,s,n,o,a=!0;function r(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(t.keyCode){case P.ui.keyCode.PAGE_UP:this.previousPage(t);break;case P.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case P.ui.keyCode.HOME:this._move("first","first",t);break;case P.ui.keyCode.END:this._move("last","last",t);break;case P.ui.keyCode.UP:this.previous(t);break;case P.ui.keyCode.DOWN:this.next(t);break;case P.ui.keyCode.LEFT:this.collapse(t);break;case P.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case P.ui.keyCode.ENTER:case P.ui.keyCode.SPACE:this._activate(t);break;case P.ui.keyCode.ESCAPE:this.collapse(t);break;default:a=!1,i=this.previousFilter||"",s=String.fromCharCode(t.keyCode),n=!1,clearTimeout(this.filterTimer),s===i?n=!0:s=i+s,o=new RegExp("^"+r(s),"i"),e=this.activeMenu.find(this.options.items).filter(function(){return o.test(P(this).text())}),(e=n&&-1!==e.index(this.active.next())?this.active.nextAll(".ui-menu-item"):e).length||(s=String.fromCharCode(t.keyCode),o=new RegExp("^"+r(s),"i"),e=this.activeMenu.find(this.options.items).filter(function(){return o.test(P(this).text())})),e.length?(this.focus(t,e),1<e.length?(this.previousFilter=s,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}a&&t.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(t):this.select(t))},refresh:function(){var t,e=this,s=this.options.icons.submenu,i=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=P(this),e=t.parent(),i=P("<span>").addClass("ui-menu-icon ui-icon "+s).data("ui-menu-submenu-carat",!0);e.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",e.attr("id"))}),(t=i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var t=P(this);e._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!P.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=e.children(".ui-menu")).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(t){var e,i,s,n,o,a;this._hasScroll()&&(e=parseFloat(P.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(P.css(this.activeMenu[0],"paddingTop"))||0,s=t.offset().top-this.activeMenu.offset().top-e-i,n=this.activeMenu.scrollTop(),o=this.activeMenu.height(),a=t.outerHeight(),s<0?this.activeMenu.scrollTop(n+s):o<s+a&&this.activeMenu.scrollTop(n+s-o+a))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(t){var e=P.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(e)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var t=i?this.element:P(e&&e.target).closest(this.element.find(".ui-menu"));t.length||(t=this.element),this._close(t),this.blur(e),this.activeMenu=t},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!P(t.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(t){var e,i,s;this.active?this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return(e=P(this)).offset().top-i-s<0}),this.focus(t,e)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())):this.next(t)},previousPage:function(t){var e,i,s;this.active?this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return 0<(e=P(this)).offset().top-i+s}),this.focus(t,e)):this.focus(t,this.activeMenu.find(this.options.items).first())):this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||P(t.target).closest(".ui-menu-item");var e={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,e)}});P.widget("ui.autocomplete",{version:"1.11.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var i,s,n,t=this.element[0].nodeName.toLowerCase(),e="textarea"===t,o="input"===t;this.isMultiLine=!!e||!o&&this.element.prop("isContentEditable"),this.valueMethod=this.element[e||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(t){if(this.element.prop("readOnly"))s=n=i=!0;else{s=n=i=!1;var e=P.ui.keyCode;switch(t.keyCode){case e.PAGE_UP:i=!0,this._move("previousPage",t);break;case e.PAGE_DOWN:i=!0,this._move("nextPage",t);break;case e.UP:i=!0,this._keyEvent("previous",t);break;case e.DOWN:i=!0,this._keyEvent("next",t);break;case e.ENTER:this.menu.active&&(i=!0,t.preventDefault(),this.menu.select(t));break;case e.TAB:this.menu.active&&this.menu.select(t);break;case e.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(t),t.preventDefault());break;default:s=!0,this._searchTimeout(t)}}},keypress:function(t){if(i)return i=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||t.preventDefault());if(!s){var e=P.ui.keyCode;switch(t.keyCode){case e.PAGE_UP:this._move("previousPage",t);break;case e.PAGE_DOWN:this._move("nextPage",t);break;case e.UP:this._keyEvent("previous",t);break;case e.DOWN:this._keyEvent("next",t)}}},input:function(t){if(n)return n=!1,void t.preventDefault();this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){this.cancelBlur?delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),this._change(t))}}),this._initSource(),this.menu=P("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];P(t.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(t){t.target===e.element[0]||t.target===i||P.contains(i,t.target)||e.close()})})},menufocus:function(t,e){var i,s;if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",function(){P(t.target).trigger(t.originalEvent)});s=e.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:s})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value),(i=e.item.attr("aria-label")||s.value)&&P.trim(i).length&&(this.liveRegion.children().hide(),P("<div>").text(i).appendTo(this.liveRegion))},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=P("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?P(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var i,s,n=this;P.isArray(this.options.source)?(i=this.options.source,this.source=function(t,e){e(P.ui.autocomplete.filter(i,t.term))}):"string"==typeof this.options.source?(s=this.options.source,this.source=function(t,e){n.xhr&&n.xhr.abort(),n.xhr=P.ajax({url:s,data:t,dataType:"json",success:function(t){e(t)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(s){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),e=this.menu.element.is(":visible"),i=s.altKey||s.ctrlKey||s.metaKey||s.shiftKey;t&&(!t||e||i)||(this.selectedItem=null,this.search(null,s))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger("search",e)?this._search(t):void 0},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return P.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:P.map(t,function(t){return"string"==typeof t?{label:t,value:t}:P.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var e=this.menu.element.empty();this._renderMenu(e,t),this.isNewMenu=!0,this.menu.refresh(),e.show(),this._resizeMenu(),e.position(P.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(i,t){var s=this;P.each(t,function(t,e){s._renderItemData(i,e)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(t,e){return P("<li>").text(e.label).appendTo(t)},_move:function(t,e){if(this.menu.element.is(":visible"))return this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e);this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(t,e),e.preventDefault())}}),P.extend(P.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,e){var i=new RegExp(P.ui.autocomplete.escapeRegex(e),"i");return P.grep(t,function(t){return i.test(t.label||t.value||t)})}}),P.widget("ui.autocomplete",P.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(1<t?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),P("<div>").text(e).appendTo(this.liveRegion))}});P.ui.autocomplete;var c,u="ui-button ui-widget ui-state-default ui-corner-all",d="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",p=function(){var t=P(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},f=function(t){var e=t.name,i=t.form,s=P([]);return e&&(e=e.replace(/'/g,"\\'"),s=i?P(i).find("[name='"+e+"'][type=radio]"):P("[name='"+e+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),s};P.widget("ui.button",{version:"1.11.1",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,p),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var e=this,i=this.options,t="checkbox"===this.type||"radio"===this.type,s=t?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(u).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&P(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||P(this).removeClass(s)}).bind("click"+this.eventNamespace,function(t){i.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),t&&this.element.bind("change"+this.eventNamespace,function(){e.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;P(this).addClass("ui-state-active"),e.buttonElement.attr("aria-pressed","true");var t=e.element[0];f(t).not(t).map(function(){return P(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(i.disabled)return!1;P(this).addClass("ui-state-active"),c=this,e.document.one("mouseup",function(){c=null})}).bind("mouseup"+this.eventNamespace,function(){if(i.disabled)return!1;P(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(i.disabled)return!1;t.keyCode!==P.ui.keyCode.SPACE&&t.keyCode!==P.ui.keyCode.ENTER||P(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){P(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===P.ui.keyCode.SPACE&&P(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),(i=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(u+" ui-state-active "+d).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){if(this._super(t,e),"disabled"===t)return this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),void(e&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")));this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?f(this.element[0]).each(function(){P(this).is(":checked")?P(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):P(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"!==this.type){var t=this.buttonElement.removeClass(d),e=P("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),i=this.options.icons,s=i.primary&&i.secondary,n=[];i.primary||i.secondary?(this.options.text&&n.push("ui-button-text-icon"+(s?"s":i.primary?"-primary":"-secondary")),i.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>"),i.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>"),this.options.text||(n.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",P.trim(e)))):n.push("ui-button-text-only"),t.addClass(n.join(" "))}else this.options.label&&this.element.val(this.options.label)}}),P.widget("ui.buttonset",{version:"1.11.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var t="rtl"===this.element.css("direction"),e=this.element.find(this.options.items),i=e.filter(":ui-button");e.not(":ui-button").button(),i.button("refresh"),this.buttons=e.map(function(){return P(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return P(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}});var m;P.ui.button;function g(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},P.extend(this._defaults,this.regional[""]),this.regional.en=P.extend(!0,{},this.regional[""]),this.regional["en-US"]=P.extend(!0,{},this.regional.en),this.dpDiv=v(P("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function v(t){var e="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(e,"mouseout",function(){P(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&P(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&P(this).removeClass("ui-datepicker-next-hover")}).delegate(e,"mouseover",_)}function _(){P.datepicker._isDisabledDatepicker(m.inline?m.dpDiv.parent()[0]:m.input[0])||(P(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),P(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&P(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&P(this).addClass("ui-datepicker-next-hover"))}function b(t,e){for(var i in P.extend(t,e),e)null==e[i]&&(t[i]=e[i]);return t}P.extend(P.ui,{datepicker:{version:"1.11.1"}}),P.extend(g.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return b(this._defaults,t||{}),this},_attachDatepicker:function(t,e){var i,s,n;s="div"===(i=t.nodeName.toLowerCase())||"span"===i,t.id||(this.uuid+=1,t.id="dp"+this.uuid),(n=this._newInst(P(t),s)).settings=P.extend({},e||{}),"input"===i?this._connectDatepicker(t,n):s&&this._inlineDatepicker(t,n)},_newInst:function(t,e){return{id:t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:e,dpDiv:e?v(P("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,e){var i=P(t);e.append=P([]),e.trigger=P([]),i.hasClass(this.markerClassName)||(this._attachments(i,e),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(e),P.data(t,"datepicker",e),e.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,e){var i,s,n,o=this._get(e,"appendText"),a=this._get(e,"isRTL");e.append&&e.append.remove(),o&&(e.append=P("<span class='"+this._appendClass+"'>"+o+"</span>"),t[a?"before":"after"](e.append)),t.unbind("focus",this._showDatepicker),e.trigger&&e.trigger.remove(),"focus"!==(i=this._get(e,"showOn"))&&"both"!==i||t.focus(this._showDatepicker),"button"!==i&&"both"!==i||(s=this._get(e,"buttonText"),n=this._get(e,"buttonImage"),e.trigger=P(this._get(e,"buttonImageOnly")?P("<img/>").addClass(this._triggerClass).attr({src:n,alt:s,title:s}):P("<button type='button'></button>").addClass(this._triggerClass).html(n?P("<img/>").attr({src:n,alt:s,title:s}):s)),t[a?"before":"after"](e.trigger),e.trigger.click(function(){return P.datepicker._datepickerShowing&&P.datepicker._lastInput===t[0]?P.datepicker._hideDatepicker():(P.datepicker._datepickerShowing&&P.datepicker._lastInput!==t[0]&&P.datepicker._hideDatepicker(),P.datepicker._showDatepicker(t[0])),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(n=s=i=0;n<t.length;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(t,e){var i=P(t);i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(e.dpDiv),P.data(t,"datepicker",e),this._setDate(e,this._getDefaultDate(e),!0),this._updateDatepicker(e),this._updateAlternate(e),e.settings.disabled&&this._disableDatepicker(t),e.dpDiv.css("display","block"))},_dialogDatepicker:function(t,e,i,s,n){var o,a,r,h,l,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=P("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),P("body").append(this._dialogInput),(c=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},P.data(this._dialogInput[0],"datepicker",c)),b(c.settings,s||{}),e=e&&e.constructor===Date?this._formatDate(c,e):e,this._dialogInput.val(e),this._pos=n?n.length?n:[n.pageX,n.pageY]:null,this._pos||(a=document.documentElement.clientWidth,r=document.documentElement.clientHeight,h=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[a/2-100+h,r/2-150+l]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),P.blockUI&&P.blockUI(this.dpDiv),P.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var e,i=P(t),s=P.data(t,"datepicker");i.hasClass(this.markerClassName)&&(e=t.nodeName.toLowerCase(),P.removeData(t,"datepicker"),"input"===e?(s.append.remove(),s.trigger.remove(),i.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):"div"!==e&&"span"!==e||i.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var t,i,s=P(e),n=P.data(e,"datepicker");s.hasClass(this.markerClassName)&&("input"===(t=e.nodeName.toLowerCase())?(e.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==t&&"span"!==t||((i=s.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=P.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var t,i,s=P(e),n=P.data(e,"datepicker");s.hasClass(this.markerClassName)&&("input"===(t=e.nodeName.toLowerCase())?(e.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==t&&"span"!==t||((i=s.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=P.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;e<this._disabledInputs.length;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(t){try{return P.data(t,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,e,i){var s,n,o,a,r=this._getInst(t);if(2===arguments.length&&"string"==typeof e)return"defaults"===e?P.extend({},P.datepicker._defaults):r?"all"===e?P.extend({},r.settings):this._get(r,e):null;s=e||{},"string"==typeof e&&((s={})[e]=i),r&&(this._curInst===r&&this._hideDatepicker(),n=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(r,"min"),a=this._getMinMaxDate(r,"max"),b(r.settings,s),null!==o&&void 0!==s.dateFormat&&void 0===s.minDate&&(r.settings.minDate=this._formatDate(r,o)),null!==a&&void 0!==s.dateFormat&&void 0===s.maxDate&&(r.settings.maxDate=this._formatDate(r,a)),"disabled"in s&&(s.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(P(t),r),this._autoSize(r),this._setDate(r,n),this._updateAlternate(r),this._updateDatepicker(r))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(t){var e,i,s,n=P.datepicker._getInst(t.target),o=!0,a=n.dpDiv.is(".ui-datepicker-rtl");if(n._keyEvent=!0,P.datepicker._datepickerShowing)switch(t.keyCode){case 9:P.datepicker._hideDatepicker(),o=!1;break;case 13:return(s=P("td."+P.datepicker._dayOverClass+":not(."+P.datepicker._currentClass+")",n.dpDiv))[0]&&P.datepicker._selectDay(t.target,n.selectedMonth,n.selectedYear,s[0]),(e=P.datepicker._get(n,"onSelect"))?(i=P.datepicker._formatDate(n),e.apply(n.input?n.input[0]:null,[i,n])):P.datepicker._hideDatepicker(),!1;case 27:P.datepicker._hideDatepicker();break;case 33:P.datepicker._adjustDate(t.target,t.ctrlKey?-P.datepicker._get(n,"stepBigMonths"):-P.datepicker._get(n,"stepMonths"),"M");break;case 34:P.datepicker._adjustDate(t.target,t.ctrlKey?+P.datepicker._get(n,"stepBigMonths"):+P.datepicker._get(n,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&P.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&P.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&P.datepicker._adjustDate(t.target,a?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&P.datepicker._adjustDate(t.target,t.ctrlKey?-P.datepicker._get(n,"stepBigMonths"):-P.datepicker._get(n,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&P.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&P.datepicker._adjustDate(t.target,a?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&P.datepicker._adjustDate(t.target,t.ctrlKey?+P.datepicker._get(n,"stepBigMonths"):+P.datepicker._get(n,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&P.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?P.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var e,i,s=P.datepicker._getInst(t.target);if(P.datepicker._get(s,"constrainInput"))return e=P.datepicker._possibleChars(P.datepicker._get(s,"dateFormat")),i=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||i<" "||!e||-1<e.indexOf(i)},_doKeyUp:function(t){var e=P.datepicker._getInst(t.target);if(e.input.val()!==e.lastVal)try{P.datepicker.parseDate(P.datepicker._get(e,"dateFormat"),e.input?e.input.val():null,P.datepicker._getFormatConfig(e))&&(P.datepicker._setDateFromField(e),P.datepicker._updateAlternate(e),P.datepicker._updateDatepicker(e))}catch(t){}return!0},_showDatepicker:function(t){var e,i,s,n,o,a,r;("input"!==(t=t.target||t).nodeName.toLowerCase()&&(t=P("input",t.parentNode)[0]),P.datepicker._isDisabledDatepicker(t)||P.datepicker._lastInput===t)||(e=P.datepicker._getInst(t),P.datepicker._curInst&&P.datepicker._curInst!==e&&(P.datepicker._curInst.dpDiv.stop(!0,!0),e&&P.datepicker._datepickerShowing&&P.datepicker._hideDatepicker(P.datepicker._curInst.input[0])),!1!==(s=(i=P.datepicker._get(e,"beforeShow"))?i.apply(t,[t,e]):{})&&(b(e.settings,s),e.lastVal=null,P.datepicker._lastInput=t,P.datepicker._setDateFromField(e),P.datepicker._inDialog&&(t.value=""),P.datepicker._pos||(P.datepicker._pos=P.datepicker._findPos(t),P.datepicker._pos[1]+=t.offsetHeight),n=!1,P(t).parents().each(function(){return!(n|="fixed"===P(this).css("position"))}),o={left:P.datepicker._pos[0],top:P.datepicker._pos[1]},P.datepicker._pos=null,e.dpDiv.empty(),e.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),P.datepicker._updateDatepicker(e),o=P.datepicker._checkOffset(e,o,n),e.dpDiv.css({position:P.datepicker._inDialog&&P.blockUI?"static":n?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),e.inline||(a=P.datepicker._get(e,"showAnim"),r=P.datepicker._get(e,"duration"),e.dpDiv.css("z-index",function(t){for(var e,i;t.length&&t[0]!==document;){if(("absolute"===(e=t.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}(P(t))+1),P.datepicker._datepickerShowing=!0,P.effects&&P.effects.effect[a]?e.dpDiv.show(a,P.datepicker._get(e,"showOptions"),r):e.dpDiv[a||"show"](a?r:null),P.datepicker._shouldFocusInput(e)&&e.input.focus(),P.datepicker._curInst=e)))},_updateDatepicker:function(t){this.maxRows=4,(m=t).dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var e,i=this._getNumberOfMonths(t),s=i[1],n=t.dpDiv.find("."+this._dayOverClass+" a");0<n.length&&_.apply(n.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),1<s&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",17*s+"em"),t.dpDiv[(1!==i[0]||1!==i[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===P.datepicker._curInst&&P.datepicker._datepickerShowing&&P.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(e=t.yearshtml,setTimeout(function(){e===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),e=t.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(t,e,i){var s=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,a=t.input?t.input.outerHeight():0,r=document.documentElement.clientWidth+(i?0:P(document).scrollLeft()),h=document.documentElement.clientHeight+(i?0:P(document).scrollTop());return e.left-=this._get(t,"isRTL")?s-o:0,e.left-=i&&e.left===t.input.offset().left?P(document).scrollLeft():0,e.top-=i&&e.top===t.input.offset().top+a?P(document).scrollTop():0,e.left-=Math.min(e.left,e.left+s>r&&s<r?Math.abs(e.left+s-r):0),e.top-=Math.min(e.top,e.top+n>h&&n<h?Math.abs(n+a):0),e},_findPos:function(t){for(var e,i=this._getInst(t),s=this._get(i,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||P.expr.filters.hidden(t));)t=t[s?"previousSibling":"nextSibling"];return[(e=P(t).offset()).left,e.top]},_hideDatepicker:function(t){var e,i,s,n,o=this._curInst;!o||t&&o!==P.data(t,"datepicker")||this._datepickerShowing&&(e=this._get(o,"showAnim"),i=this._get(o,"duration"),s=function(){P.datepicker._tidyDialog(o)},P.effects&&(P.effects.effect[e]||P.effects[e])?o.dpDiv.hide(e,P.datepicker._get(o,"showOptions"),i,s):o.dpDiv["slideDown"===e?"slideUp":"fadeIn"===e?"fadeOut":"hide"](e?i:null,s),e||s(),this._datepickerShowing=!1,(n=this._get(o,"onClose"))&&n.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),P.blockUI&&(P.unblockUI(),P("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(P.datepicker._curInst){var e=P(t.target),i=P.datepicker._getInst(e[0]);(e[0].id===P.datepicker._mainDivId||0!==e.parents("#"+P.datepicker._mainDivId).length||e.hasClass(P.datepicker.markerClassName)||e.closest("."+P.datepicker._triggerClass).length||!P.datepicker._datepickerShowing||P.datepicker._inDialog&&P.blockUI)&&(!e.hasClass(P.datepicker.markerClassName)||P.datepicker._curInst===i)||P.datepicker._hideDatepicker()}},_adjustDate:function(t,e,i){var s=P(t),n=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(n,e+("M"===i?this._get(n,"showCurrentAtPos"):0),i),this._updateDatepicker(n))},_gotoToday:function(t){var e,i=P(t),s=this._getInst(i[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(e=new Date,s.selectedDay=e.getDate(),s.drawMonth=s.selectedMonth=e.getMonth(),s.drawYear=s.selectedYear=e.getFullYear()),this._notifyChange(s),this._adjustDate(i)},_selectMonthYear:function(t,e,i){var s=P(t),n=this._getInst(s[0]);n["selected"+("M"===i?"Month":"Year")]=n["draw"+("M"===i?"Month":"Year")]=parseInt(e.options[e.selectedIndex].value,10),this._notifyChange(n),this._adjustDate(s)},_selectDay:function(t,e,i,s){var n,o=P(t);P(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||((n=this._getInst(o[0])).selectedDay=n.currentDay=P("a",s).html(),n.selectedMonth=n.currentMonth=e,n.selectedYear=n.currentYear=i,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){var e=P(t);this._selectDate(e,"")},_selectDate:function(t,e){var i,s=P(t),n=this._getInst(s[0]);e=null!=e?e:this._formatDate(n),n.input&&n.input.val(e),this._updateAlternate(n),(i=this._get(n,"onSelect"))?i.apply(n.input?n.input[0]:null,[e,n]):n.input&&n.input.trigger("change"),n.inline?this._updateDatepicker(n):(this._hideDatepicker(),this._lastInput=n.input[0],"object"!=typeof n.input[0]&&n.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var e,i,s,n=this._get(t,"altField");n&&(e=this._get(t,"altFormat")||this._get(t,"dateFormat"),i=this._getDate(t),s=this.formatDate(e,i,this._getFormatConfig(t)),P(n).each(function(){P(this).val(s)}))},noWeekends:function(t){var e=t.getDay();return[0<e&&e<6,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,o,t){if(null==i||null==o)throw"Invalid arguments";if(""===(o="object"==typeof o?o.toString():o+""))return null;var s,e,n,a,r=0,h=(t?t.shortYearCutoff:null)||this._defaults.shortYearCutoff,l="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),c=(t?t.dayNamesShort:null)||this._defaults.dayNamesShort,u=(t?t.dayNames:null)||this._defaults.dayNames,d=(t?t.monthNamesShort:null)||this._defaults.monthNamesShort,p=(t?t.monthNames:null)||this._defaults.monthNames,f=-1,m=-1,g=-1,v=-1,_=!1,b=function(t){var e=s+1<i.length&&i.charAt(s+1)===t;return e&&s++,e},y=function(t){var e=b(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,s=new RegExp("^\\d{"+("y"===t?i:1)+","+i+"}"),n=o.substring(r).match(s);if(!n)throw"Missing number at position "+r;return r+=n[0].length,parseInt(n[0],10)},w=function(t,e,i){var s=-1,n=P.map(b(t)?i:e,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(P.each(n,function(t,e){var i=e[1];if(o.substr(r,i.length).toLowerCase()===i.toLowerCase())return s=e[0],r+=i.length,!1}),-1!==s)return s+1;throw"Unknown name at position "+r},x=function(){if(o.charAt(r)!==i.charAt(s))throw"Unexpected literal at position "+r;r++};for(s=0;s<i.length;s++)if(_)"'"!==i.charAt(s)||b("'")?x():_=!1;else switch(i.charAt(s)){case"d":g=y("d");break;case"D":w("D",c,u);break;case"o":v=y("o");break;case"m":m=y("m");break;case"M":m=w("M",d,p);break;case"y":f=y("y");break;case"@":f=(a=new Date(y("@"))).getFullYear(),m=a.getMonth()+1,g=a.getDate();break;case"!":f=(a=new Date((y("!")-this._ticksTo1970)/1e4)).getFullYear(),m=a.getMonth()+1,g=a.getDate();break;case"'":b("'")?x():_=!0;break;default:x()}if(r<o.length&&(n=o.substr(r),!/^\s+/.test(n)))throw"Extra/unparsed characters found in date: "+n;if(-1===f?f=(new Date).getFullYear():f<100&&(f+=(new Date).getFullYear()-(new Date).getFullYear()%100+(f<=l?0:-100)),-1<v)for(m=1,g=v;;){if(g<=(e=this._getDaysInMonth(f,m-1)))break;m++,g-=e}if((a=this._daylightSavingAdjust(new Date(f,m-1,g))).getFullYear()!==f||a.getMonth()+1!==m||a.getDate()!==g)throw"Invalid date";return a},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(i,t,e){if(!t)return"";var s,n=(e?e.dayNamesShort:null)||this._defaults.dayNamesShort,o=(e?e.dayNames:null)||this._defaults.dayNames,a=(e?e.monthNamesShort:null)||this._defaults.monthNamesShort,r=(e?e.monthNames:null)||this._defaults.monthNames,h=function(t){var e=s+1<i.length&&i.charAt(s+1)===t;return e&&s++,e},l=function(t,e,i){var s=""+e;if(h(t))for(;s.length<i;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(t)for(s=0;s<i.length;s++)if(d)"'"!==i.charAt(s)||h("'")?u+=i.charAt(s):d=!1;else switch(i.charAt(s)){case"d":u+=l("d",t.getDate(),2);break;case"D":u+=c("D",t.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",t.getMonth()+1,2);break;case"M":u+=c("M",t.getMonth(),a,r);break;case"y":u+=h("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":u+=t.getTime();break;case"!":u+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=i.charAt(s)}return u},_possibleChars:function(i){var s,t="",e=!1,n=function(t){var e=s+1<i.length&&i.charAt(s+1)===t;return e&&s++,e};for(s=0;s<i.length;s++)if(e)"'"!==i.charAt(s)||n("'")?t+=i.charAt(s):e=!1;else switch(i.charAt(s)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":n("'")?t+="'":e=!0;break;default:t+=i.charAt(s)}return t},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(t){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(r,t,e){var i,s,n=null==t||""===t?e:"string"==typeof t?function(t){try{return P.datepicker.parseDate(P.datepicker._get(r,"dateFormat"),t,P.datepicker._getFormatConfig(r))}catch(t){}for(var e=(t.toLowerCase().match(/^c/)?P.datepicker._getDate(r):null)||new Date,i=e.getFullYear(),s=e.getMonth(),n=e.getDate(),o=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=o.exec(t);a;){switch(a[2]||"d"){case"d":case"D":n+=parseInt(a[1],10);break;case"w":case"W":n+=7*parseInt(a[1],10);break;case"m":case"M":s+=parseInt(a[1],10),n=Math.min(n,P.datepicker._getDaysInMonth(i,s));break;case"y":case"Y":i+=parseInt(a[1],10),n=Math.min(n,P.datepicker._getDaysInMonth(i,s))}a=o.exec(t)}return new Date(i,s,n)}(t):"number"==typeof t?isNaN(t)?e:(i=t,(s=new Date).setDate(s.getDate()+i),s):new Date(t.getTime());return(n=n&&"Invalid Date"===n.toString()?e:n)&&(n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0)),this._daylightSavingAdjust(n)},_daylightSavingAdjust:function(t){return t?(t.setHours(12<t.getHours()?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){return!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},_attachHandlers:function(t){var e=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){P.datepicker._adjustDate(i,-e,"M")},next:function(){P.datepicker._adjustDate(i,+e,"M")},hide:function(){P.datepicker._hideDatepicker()},today:function(){P.datepicker._gotoToday(i)},selectDay:function(){return P.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return P.datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return P.datepicker._selectMonthYear(i,this,"Y"),!1}};P(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,m,g,v,_,b,y,w,x,k,C,D,I,T,P,M,S,z,H,A,N,E,W,O,F,R,L=new Date,Y=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,tt=t.drawYear;if(Z<0&&(Z+=12,tt--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&e<Q?Q:e;this._daylightSavingAdjust(new Date(tt,Z,1))>e;)--Z<0&&(Z=11,tt--);for(t.drawMonth=Z,t.drawYear=tt,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,tt,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(tt,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,tt,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:Y,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",x=0;x<U[0];x++){for(k="",this.maxRows=4,C=0;C<U[1];C++){if(D=this._daylightSavingAdjust(new Date(tt,Z,t.selectedDay)),I=" ui-corner-all",T="",$){if(T+="<div class='ui-datepicker-group",1<U[1])switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(B?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(B?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===x?B?o:s:"")+(/all|right/.test(I)&&0===x?B?s:o:"")+this._generateMonthYearHeader(t,Z,tt,Q,J,0<x||0<C,f,m)+"</div><table class='ui-datepicker-calendar'><thead><tr>",P=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;w<7;w++)P+="<th scope='col'"+(5<=(w+c+6)%7?" class='ui-datepicker-week-end'":"")+"><span title='"+d[M=(w+c)%7]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(tt,Z),tt===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),z=(this._getFirstDayOfMonth(tt,Z)-c+7)%7,H=Math.ceil((z+S)/7),A=$&&this.maxRows>H?this.maxRows:H,this.maxRows=A,N=this._daylightSavingAdjust(new Date(tt,Z,1-z)),E=0;E<A;E++){for(T+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(N)+"</td>":"",w=0;w<7;w++)O=g?g.apply(t.input?t.input[0]:null,[N]):[!0,""],R=(F=N.getMonth()!==Z)&&!_||!O[0]||Q&&N<Q||J&&J<N,W+="<td class='"+(5<=(w+c+6)%7?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(N.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===N.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!v?"":" "+O[1]+(N.getTime()===G.getTime()?" "+this._currentClass:"")+(N.getTime()===Y.getTime()?" ui-datepicker-today":""))+"'"+(F&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+N.getMonth()+"' data-year='"+N.getFullYear()+"'")+">"+(F&&!v?"&#xa0;":R?"<span class='ui-state-default'>"+N.getDate()+"</span>":"<a class='ui-state-default"+(N.getTime()===Y.getTime()?" ui-state-highlight":"")+(N.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+N.getDate()+"</a>")+"</td>",N.setDate(N.getDate()+1),N=this._daylightSavingAdjust(N);T+=W+"</tr>"}11<++Z&&(Z=0,tt++),k+=T+="</tbody></table>"+($?"</div>"+(0<U[0]&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")}y+=k}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!g)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;c<12;c++)(!h||c>=s.getMonth())&&(!l||c<=n.getMonth())&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(_||(b+=y+(!o&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),f=(p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e})(u[0]),m=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";f<=m;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),"M"!==i&&"Y"!==i||this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&e<i?i:e;return s&&s<n?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(e<0?e:n[0]*n[1]),1));return e<0&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||e.getFullYear()<=r)},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return{shortYearCutoff:e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),P.fn.datepicker=function(t){if(!this.length)return this;P.datepicker.initialized||(P(document).mousedown(P.datepicker._checkExternalClick),P.datepicker.initialized=!0),0===P("#"+P.datepicker._mainDivId).length&&P("body").append(P.datepicker.dpDiv);var e=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?P.datepicker["_"+t+"Datepicker"].apply(P.datepicker,[this[0]].concat(e)):this.each(function(){"string"==typeof t?P.datepicker["_"+t+"Datepicker"].apply(P.datepicker,[this].concat(e)):P.datepicker._attachDatepicker(this,t)}):P.datepicker["_"+t+"Datepicker"].apply(P.datepicker,[this[0]].concat(e))},P.datepicker=new g,P.datepicker.initialized=!1,P.datepicker.uuid=(new Date).getTime(),P.datepicker.version="1.11.1";P.datepicker;P.widget("ui.draggable",P.ui.mouse,{version:"1.11.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(t){var e=this.document[0],i=this.options;try{e.activeElement&&"body"!==e.activeElement.nodeName.toLowerCase()&&P(e.activeElement).blur()}catch(t){}return!(this.helper||i.disabled||0<P(t.target).closest(".ui-resizable-handle").length)&&(this.handle=this._getHandle(t),!!this.handle&&(P(!0===i.iframeFix?"iframe":i.iframeFix).each(function(){P("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(P(this).offset()).appendTo("body")}),!0))},_mouseStart:function(t){var e=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),P.ui.ddmanager&&(P.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,P.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this._setContainment(),!1===this._trigger("start",t)?(this._clear(),!1):(this._cacheHelperProportions(),P.ui.ddmanager&&!e.dropBehaviour&&P.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),P.ui.ddmanager&&P.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,e){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!e){var i=this._uiHash();if(!1===this._trigger("drag",t,i))return this._mouseUp({}),!1;this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",P.ui.ddmanager&&P.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var e=this,i=!1;return P.ui.ddmanager&&!this.options.dropBehaviour&&(i=P.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||P.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?P(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==e._trigger("stop",t)&&e._clear()}):!1!==this._trigger("stop",t)&&this._clear(),!1},_mouseUp:function(t){return P("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),P.ui.ddmanager&&P.ui.ddmanager.dragStop(this,t),this.element.focus(),P.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return!this.options.handle||!!P(t.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var e=this.options,i=P.isFunction(e.helper)?P(e.helper.apply(this.element[0],[t])):"clone"===e.helper?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo("parent"===e.appendTo?this.element[0].parentNode:e.appendTo),i[0]===this.element[0]||/(fixed|absolute)/.test(i.css("position"))||i.css("position","absolute"),i},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),P.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),e=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==e&&P.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,s=this.options,n=this.document[0];this.relativeContainer=null,s.containment?"window"!==s.containment?"document"!==s.containment?s.containment.constructor!==Array?("parent"===s.containment&&(s.containment=this.helper[0].parentNode),(i=(e=P(s.containment))[0])&&(t="hidden"!==e.css("overflow"),this.containment=[(parseInt(e.css("borderLeftWidth"),10)||0)+(parseInt(e.css("paddingLeft"),10)||0),(parseInt(e.css("borderTopWidth"),10)||0)+(parseInt(e.css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(e.css("borderRightWidth"),10)||0)-(parseInt(e.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(e.css("borderBottomWidth"),10)||0)-(parseInt(e.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=e)):this.containment=s.containment:this.containment=[0,0,P(n).width()-this.helperProportions.width-this.margins.left,(P(n).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[P(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,P(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,P(window).scrollLeft()+P(window).width()-this.helperProportions.width-this.margins.left,P(window).scrollTop()+(P(window).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(t,e,i){return i=i||this._uiHash(),P.ui.plugin.call(this,t,[e,i,this],!0),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),P.Widget.prototype._trigger.call(this,t,e,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),P.ui.plugin.add("draggable","connectToSortable",{start:function(e,t,i){var s=i.options,n=P.extend({},t,{item:i.element});i.sortables=[],P(s.connectToSortable).each(function(){var t=P(this).sortable("instance");t&&!t.options.disabled&&(i.sortables.push({instance:t,shouldRevert:t.options.revert}),t.refreshPositions(),t._trigger("activate",e,n))})},stop:function(t,e,i){var s=P.extend({},e,{item:i.element});P.each(i.sortables,function(){this.instance.isOver?(this.instance.isOver=0,i.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===i.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,s))})},drag:function(i,s,n){var o=this;P.each(n.sortables,function(){var t=!1,e=this;this.instance.positionAbs=n.positionAbs,this.instance.helperProportions=n.helperProportions,this.instance.offset.click=n.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(t=!0,P.each(n.sortables,function(){return this.instance.positionAbs=n.positionAbs,this.instance.helperProportions=n.helperProportions,this.instance.offset.click=n.offset.click,this!==e&&this.instance._intersectsWith(this.instance.containerCache)&&P.contains(e.instance.element[0],this.instance.element[0])&&(t=!1),t})),t?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=P(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return s.helper[0]},i.target=this.instance.currentItem[0],this.instance._mouseCapture(i,!0),this.instance._mouseStart(i,!0,!0),this.instance.offset.click.top=n.offset.click.top,this.instance.offset.click.left=n.offset.click.left,this.instance.offset.parent.left-=n.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=n.offset.parent.top-this.instance.offset.parent.top,n._trigger("toSortable",i),n.dropped=this.instance.element,n.currentItem=n.element,this.instance.fromOutside=n),this.instance.currentItem&&this.instance._mouseDrag(i)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",i,this.instance._uiHash(this.instance)),this.instance._mouseStop(i,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),n._trigger("fromSortable",i),n.dropped=!1)})}}),P.ui.plugin.add("draggable","cursor",{start:function(t,e,i){var s=P("body"),n=i.options;s.css("cursor")&&(n._cursor=s.css("cursor")),s.css("cursor",n.cursor)},stop:function(t,e,i){var s=i.options;s._cursor&&P("body").css("cursor",s._cursor)}}),P.ui.plugin.add("draggable","opacity",{start:function(t,e,i){var s=P(e.helper),n=i.options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,e,i){var s=i.options;s._opacity&&P(e.helper).css("opacity",s._opacity)}}),P.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,e,i){var s=i.options,n=!1,o=i.scrollParentNotHidden[0],a=i.document[0];o!==a&&"HTML"!==o.tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+o.offsetHeight-t.pageY<s.scrollSensitivity?o.scrollTop=n=o.scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(o.scrollTop=n=o.scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+o.offsetWidth-t.pageX<s.scrollSensitivity?o.scrollLeft=n=o.scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(o.scrollLeft=n=o.scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-P(a).scrollTop()<s.scrollSensitivity?n=P(a).scrollTop(P(a).scrollTop()-s.scrollSpeed):P(window).height()-(t.pageY-P(a).scrollTop())<s.scrollSensitivity&&(n=P(a).scrollTop(P(a).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-P(a).scrollLeft()<s.scrollSensitivity?n=P(a).scrollLeft(P(a).scrollLeft()-s.scrollSpeed):P(window).width()-(t.pageX-P(a).scrollLeft())<s.scrollSensitivity&&(n=P(a).scrollLeft(P(a).scrollLeft()+s.scrollSpeed)))),!1!==n&&P.ui.ddmanager&&!s.dropBehaviour&&P.ui.ddmanager.prepareOffsets(i,t)}}),P.ui.plugin.add("draggable","snap",{start:function(t,e,i){var s=i.options;i.snapElements=[],P(s.snap.constructor!==String?s.snap.items||":data(ui-draggable)":s.snap).each(function(){var t=P(this),e=t.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:e.top,left:e.left})})},drag:function(t,e,i){var s,n,o,a,r,h,l,c,u,d,p=i.options,f=p.snapTolerance,m=e.offset.left,g=m+i.helperProportions.width,v=e.offset.top,_=v+i.helperProportions.height;for(u=i.snapElements.length-1;0<=u;u--)h=(r=i.snapElements[u].left)+i.snapElements[u].width,c=(l=i.snapElements[u].top)+i.snapElements[u].height,g<r-f||h+f<m||_<l-f||c+f<v||!P.contains(i.snapElements[u].item.ownerDocument,i.snapElements[u].item)?(i.snapElements[u].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,t,P.extend(i._uiHash(),{snapItem:i.snapElements[u].item})),i.snapElements[u].snapping=!1):("inner"!==p.snapMode&&(s=Math.abs(l-_)<=f,n=Math.abs(c-v)<=f,o=Math.abs(r-g)<=f,a=Math.abs(h-m)<=f,s&&(e.position.top=i._convertPositionTo("relative",{top:l-i.helperProportions.height,left:0}).top-i.margins.top),n&&(e.position.top=i._convertPositionTo("relative",{top:c,left:0}).top-i.margins.top),o&&(e.position.left=i._convertPositionTo("relative",{top:0,left:r-i.helperProportions.width}).left-i.margins.left),a&&(e.position.left=i._convertPositionTo("relative",{top:0,left:h}).left-i.margins.left)),d=s||n||o||a,"outer"!==p.snapMode&&(s=Math.abs(l-v)<=f,n=Math.abs(c-_)<=f,o=Math.abs(r-m)<=f,a=Math.abs(h-g)<=f,s&&(e.position.top=i._convertPositionTo("relative",{top:l,left:0}).top-i.margins.top),n&&(e.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top-i.margins.top),o&&(e.position.left=i._convertPositionTo("relative",{top:0,left:r}).left-i.margins.left),a&&(e.position.left=i._convertPositionTo("relative",{top:0,left:h-i.helperProportions.width}).left-i.margins.left)),!i.snapElements[u].snapping&&(s||n||o||a||d)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,t,P.extend(i._uiHash(),{snapItem:i.snapElements[u].item})),i.snapElements[u].snapping=s||n||o||a||d)}}),P.ui.plugin.add("draggable","stack",{start:function(t,e,i){var s,n=i.options,o=P.makeArray(P(n.stack)).sort(function(t,e){return(parseInt(P(t).css("zIndex"),10)||0)-(parseInt(P(e).css("zIndex"),10)||0)});o.length&&(s=parseInt(P(o[0]).css("zIndex"),10)||0,P(o).each(function(t){P(this).css("zIndex",s+t)}),this.css("zIndex",s+o.length))}}),P.ui.plugin.add("draggable","zIndex",{start:function(t,e,i){var s=P(e.helper),n=i.options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,e,i){var s=i.options;s._zIndex&&P(e.helper).css("zIndex",s._zIndex)}});P.ui.draggable;P.widget("ui.resizable",P.ui.mouse,{version:"1.11.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseInt(t,10)||0},_isNumber:function(t){return!isNaN(parseInt(t,10))},_hasScroll:function(t,e){if("hidden"===P(t).css("overflow"))return!1;var i,s=e&&"left"===e?"scrollLeft":"scrollTop";return 0<t[s]||(t[s]=1,i=0<t[s],t[s]=0,i)},_create:function(){var t,e,i,s,n=this,o=this.options;if(this.element.addClass("ui-resizable"),P.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(P("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=o.handles||(P(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},e=0;e<t.length;e++)i=P.trim(t[e]),(s=P("<div class='ui-resizable-handle "+("ui-resizable-"+i)+"'></div>")).css({zIndex:o.zIndex}),"se"===i&&s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[i]=".ui-resizable-"+i,this.element.append(s);this._renderAxis=function(t){var e,i,s,n;for(e in t=t||this.element,this.handles)this.handles[e].constructor===String&&(this.handles[e]=this.element.children(this.handles[e]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(i=P(this.handles[e],this.element),n=/sw|ne|nw|se|n|s/.test(e)?i.outerHeight():i.outerWidth(),s=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),t.css(s,n),this._proportionallyResize()),P(this.handles[e]).length},this._renderAxis(this.element),this._handles=P(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){n.resizing||(this.className&&(s=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),n.axis=s&&s[1]?s[1]:"se")}),o.autoHide&&(this._handles.hide(),P(this.element).addClass("ui-resizable-autohide").mouseenter(function(){o.disabled||(P(this).removeClass("ui-resizable-autohide"),n._handles.show())}).mouseleave(function(){o.disabled||n.resizing||(P(this).addClass("ui-resizable-autohide"),n._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,e=function(t){P(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(e(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),e(this.originalElement),this},_mouseCapture:function(t){var e,i,s=!1;for(e in this.handles)((i=P(this.handles[e])[0])===t.target||P.contains(i,t.target))&&(s=!0);return!this.options.disabled&&s},_mouseStart:function(t){var e,i,s,n=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),e=this._num(this.helper.css("left")),i=this._num(this.helper.css("top")),n.containment&&(e+=P(n.containment).scrollLeft()||0,i+=P(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:e,top:i},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:e,top:i},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=P(".ui-resizable-"+this.axis).css("cursor"),P("body").css("cursor","auto"===s?this.axis+"-resize":s),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var e,i,s=this.originalMousePosition,n=this.axis,o=t.pageX-s.left||0,a=t.pageY-s.top||0,r=this._change[n];return this._updatePrevProperties(),r&&(e=r.apply(this,[t,o,a]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(e=this._updateRatio(e,t)),e=this._respectSize(e,t),this._updateCache(e),this._propagate("resize",t),i=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),P.isEmptyObject(i)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges())),!1},_mouseStop:function(t){this.resizing=!1;var e,i,s,n,o,a,r,h=this.options,l=this;return this._helper&&(s=(i=(e=this._proportionallyResizeElements).length&&/textarea/i.test(e[0].nodeName))&&this._hasScroll(e[0],"left")?0:l.sizeDiff.height,n=i?0:l.sizeDiff.width,o={width:l.helper.width()-n,height:l.helper.height()-s},a=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,r=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,h.animate||this.element.css(P.extend(o,{top:r,left:a})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!h.animate&&this._proportionallyResize()),P("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),i<o.maxWidth&&(o.maxWidth=i),n<o.maxHeight&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&c&&(t.top=h-e.minHeight),n&&c&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseInt(s[e],10)||0,i[e]+=parseInt(n[e],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,e=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||P("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize;return{top:this.originalPosition.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(t,e,i){return P.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},sw:function(t,e,i){return P.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,e,i]))},ne:function(t,e,i){return P.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},nw:function(t,e,i){return P.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,e,i]))}},_propagate:function(t,e){P.ui.plugin.call(this,t,[e,this.ui()]),"resize"!==t&&this._trigger(t,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),P.ui.plugin.add("resizable","animate",{stop:function(e){var i=P(this).resizable("instance"),t=i.options,s=i._proportionallyResizeElements,n=s.length&&/textarea/i.test(s[0].nodeName),o=n&&i._hasScroll(s[0],"left")?0:i.sizeDiff.height,a=n?0:i.sizeDiff.width,r={width:i.size.width-a,height:i.size.height-o},h=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,l=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(P.extend(r,l&&h?{top:l,left:h}:{}),{duration:t.animateDuration,easing:t.animateEasing,step:function(){var t={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};s&&s.length&&P(s[0]).css({width:t.width,height:t.height}),i._updateCache(t),i._propagate("resize",e)}})}}),P.ui.plugin.add("resizable","containment",{start:function(){var i,s,t,e,n,o,a,r=P(this).resizable("instance"),h=r.options,l=r.element,c=h.containment,u=c instanceof P?c.get(0):/parent/.test(c)?l.parent().get(0):c;u&&(r.containerElement=P(u),/document/.test(c)||c===document?(r.containerOffset={left:0,top:0},r.containerPosition={left:0,top:0},r.parentData={element:P(document),left:0,top:0,width:P(document).width(),height:P(document).height()||document.body.parentNode.scrollHeight}):(i=P(u),s=[],P(["Top","Right","Left","Bottom"]).each(function(t,e){s[t]=r._num(i.css("padding"+e))}),r.containerOffset=i.offset(),r.containerPosition=i.position(),r.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},t=r.containerOffset,e=r.containerSize.height,n=r.containerSize.width,o=r._hasScroll(u,"left")?u.scrollWidth:n,a=r._hasScroll(u)?u.scrollHeight:e,r.parentData={element:u,left:t.left,top:t.top,width:o,height:a}))},resize:function(t){var e,i,s,n,o=P(this).resizable("instance"),a=o.options,r=o.containerOffset,h=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},u=o.containerElement,d=!0;u[0]!==document&&/static/.test(u.css("position"))&&(c=r),h.left<(o._helper?r.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-r.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio,d=!1),o.position.left=a.helper?r.left:0),h.top<(o._helper?r.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-r.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio,d=!1),o.position.top=o._helper?r.top:0),s=o.containerElement.get(0)===o.element.parent().get(0),n=/relative|absolute/.test(o.containerElement.css("position")),s&&n?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),e=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-c.left:o.offset.left-r.left)),i=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-c.top:o.offset.top-r.top)),e+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-e,l&&(o.size.height=o.size.width/o.aspectRatio,d=!1)),i+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-i,l&&(o.size.width=o.size.height*o.aspectRatio,d=!1)),d||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=P(this).resizable("instance"),e=t.options,i=t.containerOffset,s=t.containerPosition,n=t.containerElement,o=P(t.helper),a=o.offset(),r=o.outerWidth()-t.sizeDiff.width,h=o.outerHeight()-t.sizeDiff.height;t._helper&&!e.animate&&/relative/.test(n.css("position"))&&P(this).css({left:a.left-s.left-i.left,width:r,height:h}),t._helper&&!e.animate&&/static/.test(n.css("position"))&&P(this).css({left:a.left-s.left-i.left,width:r,height:h})}}),P.ui.plugin.add("resizable","alsoResize",{start:function(){var t=P(this).resizable("instance").options,e=function(t){P(t).each(function(){var t=P(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof t.alsoResize||t.alsoResize.parentNode?e(t.alsoResize):t.alsoResize.length?(t.alsoResize=t.alsoResize[0],e(t.alsoResize)):P.each(t.alsoResize,function(t){e(t)})},resize:function(t,o){var e=P(this).resizable("instance"),i=e.options,s=e.originalSize,n=e.originalPosition,a={height:e.size.height-s.height||0,width:e.size.width-s.width||0,top:e.position.top-n.top||0,left:e.position.left-n.left||0},r=function(t,i){P(t).each(function(){var t=P(this),s=P(this).data("ui-resizable-alsoresize"),n={},e=i&&i.length?i:t.parents(o.originalElement[0]).length?["width","height"]:["width","height","top","left"];P.each(e,function(t,e){var i=(s[e]||0)+(a[e]||0);i&&0<=i&&(n[e]=i||null)}),t.css(n)})};"object"!=typeof i.alsoResize||i.alsoResize.nodeType?r(i.alsoResize):P.each(i.alsoResize,function(t,e){r(t,e)})},stop:function(){P(this).removeData("resizable-alsoresize")}}),P.ui.plugin.add("resizable","ghost",{start:function(){var t=P(this).resizable("instance"),e=t.options,i=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof e.ghost?e.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=P(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=P(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),P.ui.plugin.add("resizable","grid",{resize:function(){var t,e=P(this).resizable("instance"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,c=Math.round((s.width-n.width)/h)*h,u=Math.round((s.height-n.height)/l)*l,d=n.width+c,p=n.height+u,f=i.maxWidth&&i.maxWidth<d,m=i.maxHeight&&i.maxHeight<p,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(a)?(e.size.width=d,e.size.height=p):/^(ne)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.top=o.top-u):/^(sw)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.left=o.left-c):((p-l<=0||d-h<=0)&&(t=e._getPaddingPlusBorderDimensions(this)),0<p-l?(e.size.height=p,e.position.top=o.top-u):(p=l-t.height,e.size.height=p,e.position.top=o.top+n.height-p),0<d-h?(e.size.width=d,e.position.left=o.left-c):(d=l-t.height,e.size.width=d,e.position.left=o.left+n.width-d))}});P.ui.resizable,P.widget("ui.dialog",{version:"1.11.1",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=P(this).css(t).offset().top;e<0&&P(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&P.fn.draggable&&this._makeDraggable(),this.options.resizable&&P.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?P(t):this.document.find(t||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(t=e.parent.children().eq(e.index)).length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:P.noop,enable:P.noop,close:function(t){var e,i=this;if(this._isOpen&&!1!==this._trigger("beforeClose",t)){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{(e=this.document[0].activeElement)&&"body"!==e.nodeName.toLowerCase()&&P(e).blur()}catch(t){}this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!1,s=this.uiDialog.siblings(".ui-front:visible").map(function(){return+P(this).css("z-index")}).get(),n=Math.max.apply(null,s);return n>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",n+1),i=!0),i&&!e&&this._trigger("focus",t),i},open:function(){var t=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=P(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(t){function e(){var t=this.document[0].activeElement;this.uiDialog[0]===t||P.contains(this.uiDialog[0],t)||this._focusTabbable()}t.preventDefault(),e.call(this),this._delay(e)},_createWrapper:function(){this.uiDialog=P("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===P.ui.keyCode.ESCAPE)return t.preventDefault(),void this.close(t);if(t.keyCode===P.ui.keyCode.TAB&&!t.isDefaultPrevented()){var e=this.uiDialog.find(":tabbable"),i=e.filter(":first"),s=e.filter(":last");t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==i[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){s.focus()}),t.preventDefault()):(this._delay(function(){i.focus()}),t.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=P("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){P(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=P("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),t=P("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=P("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=P("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var n=this,t=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),P.isEmptyObject(t)||P.isArray(t)&&!t.length?this.uiDialog.removeClass("ui-dialog-buttons"):(P.each(t,function(t,e){var i,s;e=P.isFunction(e)?{click:e,text:t}:e,e=P.extend({type:"button"},e),i=e.click,e.click=function(){i.apply(n.element[0],arguments)},s={icons:e.icons,text:e.showText},delete e.icons,delete e.showText,P("<button></button>",e).button(s).appendTo(n.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var n=this,o=this.options;function a(t){return{position:t.position,offset:t.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(t,e){P(this).addClass("ui-dialog-dragging"),n._blockFrames(),n._trigger("dragStart",t,a(e))},drag:function(t,e){n._trigger("drag",t,a(e))},stop:function(t,e){var i=e.offset.left-n.document.scrollLeft(),s=e.offset.top-n.document.scrollTop();o.position={my:"left top",at:"left"+(0<=i?"+":"")+i+" top"+(0<=s?"+":"")+s,of:n.window},P(this).removeClass("ui-dialog-dragging"),n._unblockFrames(),n._trigger("dragStop",t,a(e))}})},_makeResizable:function(){var o=this,a=this.options,t=a.resizable,e=this.uiDialog.css("position"),i="string"==typeof t?t:"n,e,s,w,se,sw,ne,nw";function r(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:a.maxWidth,maxHeight:a.maxHeight,minWidth:a.minWidth,minHeight:this._minHeight(),handles:i,start:function(t,e){P(this).addClass("ui-dialog-resizing"),o._blockFrames(),o._trigger("resizeStart",t,r(e))},resize:function(t,e){o._trigger("resize",t,r(e))},stop:function(t,e){var i=o.uiDialog.offset(),s=i.left-o.document.scrollLeft(),n=i.top-o.document.scrollTop();a.height=o.uiDialog.height(),a.width=o.uiDialog.width(),a.position={my:"left top",at:"left"+(0<=s?"+":"")+s+" top"+(0<=n?"+":"")+n,of:o.window},P(this).removeClass("ui-dialog-resizing"),o._unblockFrames(),o._trigger("resizeStop",t,r(e))}}).css("position",e)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=P(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=P.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};P.each(t,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&((i=n.is(":data(ui-draggable)"))&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((s=n.is(":data(ui-resizable)"))&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=P(this);return P("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!P(t.target).closest(".ui-dialog").length||!!P(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=P("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}});P.widget("ui.droppable",{version:"1.11.1",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,e=this.options,i=e.accept;this.isover=!1,this.isout=!0,this.accept=P.isFunction(i)?i:function(t){return t.is(i)},this.proportions=function(){if(!arguments.length)return t||(t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});t=arguments[0]},this._addToManager(e.scope),e.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){P.ui.ddmanager.droppables[t]=P.ui.ddmanager.droppables[t]||[],P.ui.ddmanager.droppables[t].push(this)},_splice:function(t){for(var e=0;e<t.length;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var t=P.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,e){if("accept"===t)this.accept=P.isFunction(e)?e:function(t){return t.is(e)};else if("scope"===t){var i=P.ui.ddmanager.droppables[this.options.scope];this._splice(i),this._addToManager(e)}this._super(t,e)},_activate:function(t){var e=P.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),e&&this._trigger("activate",t,this.ui(e))},_deactivate:function(t){var e=P.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),e&&this._trigger("deactivate",t,this.ui(e))},_over:function(t){var e=P.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(e)))},_out:function(t){var e=P.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(e)))},_drop:function(e,t){var i=t||P.ui.ddmanager.current,s=!1;return!(!i||(i.currentItem||i.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=P(this).droppable("instance");if(t.options.greedy&&!t.options.disabled&&t.options.scope===i.options.scope&&t.accept.call(t.element[0],i.currentItem||i.element)&&P.ui.intersect(i,P.extend(t,{offset:t.element.offset()}),t.options.tolerance,e))return!(s=!0)}),!s&&(!!this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(i)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),P.ui.intersect=function(){function d(t,e,i){return e<=t&&t<e+i}return function(t,e,i,s){if(!e.offset)return!1;var n=(t.positionAbs||t.position.absolute).left,o=(t.positionAbs||t.position.absolute).top,a=n+t.helperProportions.width,r=o+t.helperProportions.height,h=e.offset.left,l=e.offset.top,c=h+e.proportions().width,u=l+e.proportions().height;switch(i){case"fit":return h<=n&&a<=c&&l<=o&&r<=u;case"intersect":return h<n+t.helperProportions.width/2&&a-t.helperProportions.width/2<c&&l<o+t.helperProportions.height/2&&r-t.helperProportions.height/2<u;case"pointer":return d(s.pageY,l,e.proportions().height)&&d(s.pageX,h,e.proportions().width);case"touch":return(l<=o&&o<=u||l<=r&&r<=u||o<l&&u<r)&&(h<=n&&n<=c||h<=a&&a<=c||n<h&&c<a);default:return!1}}}(),P.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(t,e){var i,s,n=P.ui.ddmanager.droppables[t.options.scope]||[],o=e?e.type:null,a=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();t:for(i=0;i<n.length;i++)if(!(n[i].options.disabled||t&&!n[i].accept.call(n[i].element[0],t.currentItem||t.element))){for(s=0;s<a.length;s++)if(a[s]===n[i].element[0]){n[i].proportions().height=0;continue t}n[i].visible="none"!==n[i].element.css("display"),n[i].visible&&("mousedown"===o&&n[i]._activate.call(n[i],e),n[i].offset=n[i].element.offset(),n[i].proportions({width:n[i].element[0].offsetWidth,height:n[i].element[0].offsetHeight}))}},drop:function(t,e){var i=!1;return P.each((P.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&P.ui.intersect(t,this,this.options.tolerance,e)&&(i=this._drop.call(this,e)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,e)))}),i},dragStart:function(t,e){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||P.ui.ddmanager.prepareOffsets(t,e)})},drag:function(o,a){o.options.refreshPositions&&P.ui.ddmanager.prepareOffsets(o,a),P.each(P.ui.ddmanager.droppables[o.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var t,e,i,s=P.ui.intersect(o,this,this.options.tolerance,a),n=!s&&this.isover?"isout":s&&!this.isover?"isover":null;n&&(this.options.greedy&&(e=this.options.scope,(i=this.element.parents(":data(ui-droppable)").filter(function(){return P(this).droppable("instance").options.scope===e})).length&&((t=P(i[0]).droppable("instance")).greedyChild="isover"===n)),t&&"isover"===n&&(t.isover=!1,t.isout=!0,t._out.call(t,a)),this[n]=!0,this["isout"===n?"isover":"isout"]=!1,this["isover"===n?"_over":"_out"].call(this,a),t&&"isout"===n&&(t.isout=!1,t.isover=!0,t._over.call(t,a)))}})},dragStop:function(t,e){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||P.ui.ddmanager.prepareOffsets(t,e)}};P.ui.droppable;var y,w="ui-effects-",x=P;P.effects={effect:{}},function(c,u){var l,d=/^([\-+])=\s*(\d+\.?\d*)/,t=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],p=c.Color=function(t,e,i,s){return new c.Color.fn.parse(t,e,i,s)},f={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},m={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=p.support={},e=c("<p>")[0],g=c.each;function v(t,e,i){var s=m[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:t<0?0:s.max<t?s.max:t)}function r(a){var r=p(),h=r._rgba=[];return a=a.toLowerCase(),g(t,function(t,e){var i,s=e.re.exec(a),n=s&&e.parse(s),o=e.space||"rgba";if(n)return i=r[o](n),r[f[o].cache]=i[f[o].cache],h=r._rgba=i._rgba,!1}),h.length?("0,0,0,0"===h.join()&&c.extend(h,l.transparent),r):l[a]}function h(t,e,i){return 6*(i=(i+1)%1)<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}e.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=-1<e.style.backgroundColor.indexOf("rgba"),g(f,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),p.fn=c.extend(p.prototype,{parse:function(n,t,e,i){if(n===u)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=c(n).css(t),t=u);var o=this,s=c.type(n),a=this._rgba=[];return t!==u&&(n=[n,t,e,i],s="array"),"string"===s?this.parse(r(n)||l._default):"array"===s?(g(f.rgba.props,function(t,e){a[e.idx]=v(n[e.idx],e)}),this):"object"===s?(g(f,n instanceof p?function(t,e){n[e.cache]&&(o[e.cache]=n[e.cache].slice())}:function(t,i){var s=i.cache;g(i.props,function(t,e){if(!o[s]&&i.to){if("alpha"===t||null==n[t])return;o[s]=i.to(o._rgba)}o[s][e.idx]=v(n[t],e,!0)}),o[s]&&c.inArray(null,o[s].slice(0,3))<0&&(o[s][3]=1,i.from&&(o._rgba=i.from(o[s])))}),this):void 0},is:function(t){var n=p(t),o=!0,a=this;return g(f,function(t,e){var i,s=n[e.cache];return s&&(i=a[e.cache]||e.to&&e.to(a._rgba)||[],g(e.props,function(t,e){if(null!=s[e.idx])return o=s[e.idx]===i[e.idx]})),o}),o},_space:function(){var i=[],s=this;return g(f,function(t,e){s[e.cache]&&i.push(t)}),i.pop()},transition:function(t,a){var r=p(t),e=r._space(),i=f[e],s=0===this.alpha()?p("transparent"):this,h=s[i.cache]||i.to(s._rgba),l=h.slice();return r=r[i.cache],g(i.props,function(t,e){var i=e.idx,s=h[i],n=r[i],o=m[e.type]||{};null!==n&&(null===s?l[i]=n:(o.mod&&(n-s>o.mod/2?s+=o.mod:s-n>o.mod/2&&(s-=o.mod)),l[i]=v((n-s)*a+s,e)))}),this[e](l)},blend:function(t){if(1===this._rgba[3])return this;var e=this._rgba.slice(),i=e.pop(),s=p(t)._rgba;return p(c.map(e,function(t,e){return(1-i)*s[e]+i*t}))},toRgbaString:function(){var t="rgba(",e=c.map(this._rgba,function(t,e){return null==t?2<e?1:0:t});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join()+")"},toHslaString:function(){var t="hsla(",e=c.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join()+")"},toHexString:function(t){var e=this._rgba.slice(),i=e.pop();return t&&e.push(~~(255*i)),"#"+c.map(e,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),p.fn.parse.prototype=p.fn,f.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:u<=.5?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},f.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],n=t[3],o=s<=.5?s*(1+i):s+i-s*i,a=2*s-o;return[Math.round(255*h(a,o,e+1/3)),Math.round(255*h(a,o,e)),Math.round(255*h(a,o,e-1/3)),n]},g(f,function(h,t){var i=t.props,a=t.cache,r=t.to,l=t.from;p.fn[h]=function(t){if(r&&!this[a]&&(this[a]=r(this._rgba)),t===u)return this[a].slice();var e,s=c.type(t),n="array"===s||"object"===s?t:arguments,o=this[a].slice();return g(i,function(t,e){var i=n["object"===s?t:e.idx];null==i&&(i=o[e.idx]),o[e.idx]=v(i,e)}),l?((e=p(l(o)))[a]=o,e):p(o)},g(i,function(a,r){p.fn[a]||(p.fn[a]=function(t){var e,i=c.type(t),s="alpha"===a?this._hsla?"hsla":"rgba":h,n=this[s](),o=n[r.idx];return"undefined"===i?o:("function"===i&&(t=t.call(this,o),i=c.type(t)),null==t&&r.empty?this:("string"===i&&(e=d.exec(t))&&(t=o+parseFloat(e[2])*("+"===e[1]?1:-1)),n[r.idx]=t,this[s](n)))})})}),p.hook=function(t){var e=t.split(" ");g(e,function(t,o){c.cssHooks[o]={set:function(t,e){var i,s,n="";if("transparent"!==e&&("string"!==c.type(e)||(i=r(e)))){if(e=p(i||e),!a.rgba&&1!==e._rgba[3]){for(s="backgroundColor"===o?t.parentNode:t;(""===n||"transparent"===n)&&s&&s.style;)try{n=c.css(s,"backgroundColor"),s=s.parentNode}catch(t){}e=e.blend(n&&"transparent"!==n?n:"_default")}e=e.toRgbaString()}try{t.style[o]=e}catch(t){}}},c.fx.step[o]=function(t){t.colorInit||(t.start=p(t.elem,o),t.end=p(t.end),t.colorInit=!0),c.cssHooks[o].set(t.elem,t.start.transition(t.end,t.pos))}})},p.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),c.cssHooks.borderColor={expand:function(i){var s={};return g(["Top","Right","Bottom","Left"],function(t,e){s["border"+e+"Color"]=i}),s}},l=c.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(x),function(){var o,n,a,r=["add","remove","toggle"],h={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function l(t){var e,i,s=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,n={};if(s&&s.length&&s[0]&&s[s[0]])for(i=s.length;i--;)"string"==typeof s[e=s[i]]&&(n[P.camelCase(e)]=s[e]);else for(e in s)"string"==typeof s[e]&&(n[e]=s[e]);return n}P.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){P.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(x.style(t.elem,e,t.end),t.setAttr=!0)}}),P.fn.addBack||(P.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),P.effects.animateClass=function(n,t,e,i){var o=P.speed(t,e,i);return this.queue(function(){var t,i=P(this),e=i.attr("class")||"",s=o.children?i.find("*").addBack():i;s=s.map(function(){return{el:P(this),start:l(this)}}),(t=function(){P.each(r,function(t,e){n[e]&&i[e+"Class"](n[e])})})(),s=s.map(function(){return this.end=l(this.el[0]),this.diff=function(t,e){var i,s,n={};for(i in e)s=e[i],t[i]!==s&&(h[i]||!P.fx.step[i]&&isNaN(parseFloat(s))||(n[i]=s));return n}(this.start,this.end),this}),i.attr("class",e),s=s.map(function(){var t=this,e=P.Deferred(),i=P.extend({},o,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,i),e.promise()}),P.when.apply(P,s.get()).done(function(){t(),P.each(arguments,function(){var e=this.el;P.each(this.diff,function(t){e.css(t,"")})}),o.complete.call(i[0])})})},P.fn.extend({addClass:(a=P.fn.addClass,function(t,e,i,s){return e?P.effects.animateClass.call(this,{add:t},e,i,s):a.apply(this,arguments)}),removeClass:(n=P.fn.removeClass,function(t,e,i,s){return 1<arguments.length?P.effects.animateClass.call(this,{remove:t},e,i,s):n.apply(this,arguments)}),toggleClass:(o=P.fn.toggleClass,function(t,e,i,s,n){return"boolean"==typeof e||void 0===e?i?P.effects.animateClass.call(this,e?{add:t}:{remove:t},i,s,n):o.apply(this,arguments):P.effects.animateClass.call(this,{toggle:t},e,i,s)}),switchClass:function(t,e,i,s,n){return P.effects.animateClass.call(this,{add:e,remove:t},i,s,n)}})}(),function(){function s(t,e,i,s){return P.isPlainObject(t)&&(t=(e=t).effect),t={effect:t},null==e&&(e={}),P.isFunction(e)&&(s=e,i=null,e={}),("number"==typeof e||P.fx.speeds[e])&&(s=i,i=e,e={}),P.isFunction(i)&&(s=i,i=null),e&&P.extend(t,e),i=i||e.duration,t.duration=P.fx.off?0:"number"==typeof i?i:i in P.fx.speeds?P.fx.speeds[i]:P.fx.speeds._default,t.complete=s||e.complete,t}function i(t){return!(t&&"number"!=typeof t&&!P.fx.speeds[t])||("string"==typeof t&&!P.effects.effect[t]||(!!P.isFunction(t)||"object"==typeof t&&!t.effect))}var n,o,a;P.extend(P.effects,{version:"1.11.1",save:function(t,e){for(var i=0;i<e.length;i++)null!==e[i]&&t.data(w+e[i],t[0].style[e[i]])},restore:function(t,e){var i,s;for(s=0;s<e.length;s++)null!==e[s]&&(void 0===(i=t.data(w+e[s]))&&(i=""),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(i){if(i.parent().is(".ui-effects-wrapper"))return i.parent();var s={width:i.outerWidth(!0),height:i.outerHeight(!0),float:i.css("float")},t=P("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:i.width(),height:i.height()},n=document.activeElement;try{n.id}catch(t){n=document.body}return i.wrap(t),(i[0]===n||P.contains(i[0],n))&&P(n).focus(),t=i.parent(),"static"===i.css("position")?(t.css({position:"relative"}),i.css({position:"relative"})):(P.extend(s,{position:i.css("position"),zIndex:i.css("z-index")}),P.each(["top","left","bottom","right"],function(t,e){s[e]=i.css(e),isNaN(parseInt(s[e],10))&&(s[e]="auto")}),i.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),i.css(e),t.css(s).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===e||P.contains(t[0],e))&&P(e).focus()),t},setTransition:function(s,t,n,o){return o=o||{},P.each(t,function(t,e){var i=s.cssUnit(e);0<i[0]&&(o[e]=i[0]*n+i[1])}),o}}),P.fn.extend({effect:function(){var o=s.apply(this,arguments),t=o.mode,e=o.queue,a=P.effects.effect[o.effect];if(P.fx.off||!a)return t?this[t](o.duration,o.complete):this.each(function(){o.complete&&o.complete.call(this)});function i(t){var e=P(this),i=o.complete,s=o.mode;function n(){P.isFunction(i)&&i.call(e[0]),P.isFunction(t)&&t()}(e.is(":hidden")?"hide"===s:"show"===s)?(e[s](),n()):a.call(e[0],o,n)}return!1===e?this.each(i):this.queue(e||"fx",i)},show:(a=P.fn.show,function(t){if(i(t))return a.apply(this,arguments);var e=s.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}),hide:(o=P.fn.hide,function(t){if(i(t))return o.apply(this,arguments);var e=s.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}),toggle:(n=P.fn.toggle,function(t){if(i(t)||"boolean"==typeof t)return n.apply(this,arguments);var e=s.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}),cssUnit:function(t){var i=this.css(t),s=[];return P.each(["em","px","%","pt"],function(t,e){0<i.indexOf(e)&&(s=[parseFloat(i),e])}),s}})}(),y={},P.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){y[t]=function(t){return Math.pow(t,e+2)}}),P.extend(y,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),P.each(y,function(t,e){P.easing["easeIn"+t]=e,P.easing["easeOut"+t]=function(t){return 1-e(1-t)},P.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}});P.effects,P.effects.effect.blind=function(t,e){var i,s,n,o=P(this),a=["position","top","bottom","left","right","height","width"],r=P.effects.setMode(o,t.mode||"hide"),h=t.direction||"up",l=/up|down|vertical/.test(h),c=l?"height":"width",u=l?"top":"left",d=/up|left|vertical|horizontal/.test(h),p={},f="show"===r;o.parent().is(".ui-effects-wrapper")?P.effects.save(o.parent(),a):P.effects.save(o,a),o.show(),s=(i=P.effects.createWrapper(o).css({overflow:"hidden"}))[c](),n=parseFloat(i.css(u))||0,p[c]=f?s:0,d||(o.css(l?"bottom":"right",0).css(l?"top":"left","auto").css({position:"absolute"}),p[u]=f?n:s+n),f&&(i.css(c,0),d||i.css(u,n+s)),i.animate(p,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===r&&o.hide(),P.effects.restore(o,a),P.effects.removeWrapper(o),e()}})},P.effects.effect.bounce=function(t,e){var i,s,n,o=P(this),a=["position","top","bottom","left","right","height","width"],r=P.effects.setMode(o,t.mode||"effect"),h="hide"===r,l="show"===r,c=t.direction||"up",u=t.distance,d=t.times||5,p=2*d+(l||h?1:0),f=t.duration/p,m=t.easing,g="up"===c||"down"===c?"top":"left",v="up"===c||"left"===c,_=o.queue(),b=_.length;for((l||h)&&a.push("opacity"),P.effects.save(o,a),o.show(),P.effects.createWrapper(o),u||(u=o["top"===g?"outerHeight":"outerWidth"]()/3),l&&((n={opacity:1})[g]=0,o.css("opacity",0).css(g,v?2*-u:2*u).animate(n,f,m)),h&&(u/=Math.pow(2,d-1)),i=(n={})[g]=0;i<d;i++)(s={})[g]=(v?"-=":"+=")+u,o.animate(s,f,m).animate(n,f,m),u=h?2*u:u/2;h&&((s={opacity:0})[g]=(v?"-=":"+=")+u,o.animate(s,f,m)),o.queue(function(){h&&o.hide(),P.effects.restore(o,a),P.effects.removeWrapper(o),e()}),1<b&&_.splice.apply(_,[1,0].concat(_.splice(b,p+1))),o.dequeue()},P.effects.effect.clip=function(t,e){var i,s,n,o=P(this),a=["position","top","bottom","left","right","height","width"],r="show"===P.effects.setMode(o,t.mode||"hide"),h="vertical"===(t.direction||"vertical"),l=h?"height":"width",c=h?"top":"left",u={};P.effects.save(o,a),o.show(),i=P.effects.createWrapper(o).css({overflow:"hidden"}),n=(s="IMG"===o[0].tagName?i:o)[l](),r&&(s.css(l,0),s.css(c,n/2)),u[l]=r?n:0,u[c]=r?0:n/2,s.animate(u,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){r||o.hide(),P.effects.restore(o,a),P.effects.removeWrapper(o),e()}})},P.effects.effect.drop=function(t,e){var i,s=P(this),n=["position","top","bottom","left","right","opacity","height","width"],o=P.effects.setMode(s,t.mode||"hide"),a="show"===o,r=t.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r?"pos":"neg",c={opacity:a?1:0};P.effects.save(s,n),s.show(),P.effects.createWrapper(s),i=t.distance||s["top"===h?"outerHeight":"outerWidth"](!0)/2,a&&s.css("opacity",0).css(h,"pos"===l?-i:i),c[h]=(a?"pos"===l?"+=":"-=":"pos"===l?"-=":"+=")+i,s.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&s.hide(),P.effects.restore(s,n),P.effects.removeWrapper(s),e()}})},P.effects.effect.explode=function(t,e){var i,s,n,o,a,r,h=t.pieces?Math.round(Math.sqrt(t.pieces)):3,l=h,c=P(this),u="show"===P.effects.setMode(c,t.mode||"hide"),d=c.show().css("visibility","hidden").offset(),p=Math.ceil(c.outerWidth()/l),f=Math.ceil(c.outerHeight()/h),m=[];function g(){m.push(this),m.length===h*l&&function(){c.css({visibility:"visible"}),P(m).remove(),u||c.hide();e()}()}for(i=0;i<h;i++)for(o=d.top+i*f,r=i-(h-1)/2,s=0;s<l;s++)n=d.left+s*p,a=s-(l-1)/2,c.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-s*p,top:-i*f}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:p,height:f,left:n+(u?a*p:0),top:o+(u?r*f:0),opacity:u?0:1}).animate({left:n+(u?0:a*p),top:o+(u?0:r*f),opacity:u?1:0},t.duration||500,t.easing,g)},P.effects.effect.fade=function(t,e){var i=P(this),s=P.effects.setMode(i,t.mode||"toggle");i.animate({opacity:s},{queue:!1,duration:t.duration,easing:t.easing,complete:e})},P.effects.effect.fold=function(t,e){var i,s,n=P(this),o=["position","top","bottom","left","right","height","width"],a=P.effects.setMode(n,t.mode||"hide"),r="show"===a,h="hide"===a,l=t.size||15,c=/([0-9]+)%/.exec(l),u=!!t.horizFirst,d=r!==u,p=d?["width","height"]:["height","width"],f=t.duration/2,m={},g={};P.effects.save(n,o),n.show(),i=P.effects.createWrapper(n).css({overflow:"hidden"}),s=d?[i.width(),i.height()]:[i.height(),i.width()],c&&(l=parseInt(c[1],10)/100*s[h?0:1]),r&&i.css(u?{height:0,width:l}:{height:l,width:0}),m[p[0]]=r?s[0]:l,g[p[1]]=r?s[1]:0,i.animate(m,f,t.easing).animate(g,f,t.easing,function(){h&&n.hide(),P.effects.restore(n,o),P.effects.removeWrapper(n),e()})},P.effects.effect.highlight=function(t,e){var i=P(this),s=["backgroundImage","backgroundColor","opacity"],n=P.effects.setMode(i,t.mode||"show"),o={backgroundColor:i.css("backgroundColor")};"hide"===n&&(o.opacity=0),P.effects.save(i,s),i.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===n&&i.hide(),P.effects.restore(i,s),e()}})},P.effects.effect.size=function(o,t){var e,i,a,r=P(this),s=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["width","height","overflow"],n=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],u=P.effects.setMode(r,o.mode||"effect"),d=o.restore||"effect"!==u,p=o.scale||"both",f=o.origin||["middle","center"],m=r.css("position"),g=d?s:["position","top","bottom","left","right","overflow","opacity"],v={height:0,width:0,outerHeight:0,outerWidth:0};"show"===u&&r.show(),e={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},"toggle"===o.mode&&"show"===u?(r.from=o.to||v,r.to=o.from||e):(r.from=o.from||("show"===u?v:e),r.to=o.to||("hide"===u?v:e)),a={from:{y:r.from.height/e.height,x:r.from.width/e.width},to:{y:r.to.height/e.height,x:r.to.width/e.width}},"box"!==p&&"both"!==p||(a.from.y!==a.to.y&&(g=g.concat(l),r.from=P.effects.setTransition(r,l,a.from.y,r.from),r.to=P.effects.setTransition(r,l,a.to.y,r.to)),a.from.x!==a.to.x&&(g=g.concat(c),r.from=P.effects.setTransition(r,c,a.from.x,r.from),r.to=P.effects.setTransition(r,c,a.to.x,r.to))),"content"!==p&&"both"!==p||a.from.y!==a.to.y&&(g=g.concat(n).concat(h),r.from=P.effects.setTransition(r,n,a.from.y,r.from),r.to=P.effects.setTransition(r,n,a.to.y,r.to)),P.effects.save(r,g),r.show(),P.effects.createWrapper(r),r.css("overflow","hidden").css(r.from),f&&(i=P.effects.getBaseline(f,e),r.from.top=(e.outerHeight-r.outerHeight())*i.y,r.from.left=(e.outerWidth-r.outerWidth())*i.x,r.to.top=(e.outerHeight-r.to.outerHeight)*i.y,r.to.left=(e.outerWidth-r.to.outerWidth)*i.x),r.css(r.from),"content"!==p&&"both"!==p||(l=l.concat(["marginTop","marginBottom"]).concat(n),c=c.concat(["marginLeft","marginRight"]),h=s.concat(l).concat(c),r.find("*[width]").each(function(){var t=P(this),e=t.height(),i=t.width(),s=t.outerHeight(),n=t.outerWidth();d&&P.effects.save(t,h),t.from={height:e*a.from.y,width:i*a.from.x,outerHeight:s*a.from.y,outerWidth:n*a.from.x},t.to={height:e*a.to.y,width:i*a.to.x,outerHeight:e*a.to.y,outerWidth:i*a.to.x},a.from.y!==a.to.y&&(t.from=P.effects.setTransition(t,l,a.from.y,t.from),t.to=P.effects.setTransition(t,l,a.to.y,t.to)),a.from.x!==a.to.x&&(t.from=P.effects.setTransition(t,c,a.from.x,t.from),t.to=P.effects.setTransition(t,c,a.to.x,t.to)),t.css(t.from),t.animate(t.to,o.duration,o.easing,function(){d&&P.effects.restore(t,h)})})),r.animate(r.to,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){0===r.to.opacity&&r.css("opacity",r.from.opacity),"hide"===u&&r.hide(),P.effects.restore(r,g),d||("static"===m?r.css({position:"relative",top:r.to.top,left:r.to.left}):P.each(["top","left"],function(n,t){r.css(t,function(t,e){var i=parseInt(e,10),s=n?r.to.left:r.to.top;return"auto"===e?s+"px":i+s+"px"})})),P.effects.removeWrapper(r),t()}})},P.effects.effect.scale=function(t,e){var i=P(this),s=P.extend(!0,{},t),n=P.effects.setMode(i,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===n?0:100),a=t.direction||"both",r=t.origin,h={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()},l="horizontal"!==a?o/100:1,c="vertical"!==a?o/100:1;s.effect="size",s.queue=!1,s.complete=e,"effect"!==n&&(s.origin=r||["middle","center"],s.restore=!0),s.from=t.from||("show"===n?{height:0,width:0,outerHeight:0,outerWidth:0}:h),s.to={height:h.height*l,width:h.width*c,outerHeight:h.outerHeight*l,outerWidth:h.outerWidth*c},s.fade&&("show"===n&&(s.from.opacity=0,s.to.opacity=1),"hide"===n&&(s.from.opacity=1,s.to.opacity=0)),i.effect(s)},P.effects.effect.puff=function(t,e){var i=P(this),s=P.effects.setMode(i,t.mode||"hide"),n="hide"===s,o=parseInt(t.percent,10)||150,a=o/100,r={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};P.extend(t,{effect:"scale",queue:!1,fade:!0,mode:s,complete:e,percent:n?o:100,from:n?r:{height:r.height*a,width:r.width*a,outerHeight:r.outerHeight*a,outerWidth:r.outerWidth*a}}),i.effect(t)},P.effects.effect.pulsate=function(t,e){var i,s=P(this),n=P.effects.setMode(s,t.mode||"show"),o="show"===n,a="hide"===n,r=o||"hide"===n,h=2*(t.times||5)+(r?1:0),l=t.duration/h,c=0,u=s.queue(),d=u.length;for(!o&&s.is(":visible")||(s.css("opacity",0).show(),c=1),i=1;i<h;i++)s.animate({opacity:c},l,t.easing),c=1-c;s.animate({opacity:c},l,t.easing),s.queue(function(){a&&s.hide(),e()}),1<d&&u.splice.apply(u,[1,0].concat(u.splice(d,h+1))),s.dequeue()},P.effects.effect.shake=function(t,e){var i,s=P(this),n=["position","top","bottom","left","right","height","width"],o=P.effects.setMode(s,t.mode||"effect"),a=t.direction||"left",r=t.distance||20,h=t.times||3,l=2*h+1,c=Math.round(t.duration/l),u="up"===a||"down"===a?"top":"left",d="up"===a||"left"===a,p={},f={},m={},g=s.queue(),v=g.length;for(P.effects.save(s,n),s.show(),P.effects.createWrapper(s),p[u]=(d?"-=":"+=")+r,f[u]=(d?"+=":"-=")+2*r,m[u]=(d?"-=":"+=")+2*r,s.animate(p,c,t.easing),i=1;i<h;i++)s.animate(f,c,t.easing).animate(m,c,t.easing);s.animate(f,c,t.easing).animate(p,c/2,t.easing).queue(function(){"hide"===o&&s.hide(),P.effects.restore(s,n),P.effects.removeWrapper(s),e()}),1<v&&g.splice.apply(g,[1,0].concat(g.splice(v,l+1))),s.dequeue()},P.effects.effect.slide=function(t,e){var i,s=P(this),n=["position","top","bottom","left","right","width","height"],o=P.effects.setMode(s,t.mode||"show"),a="show"===o,r=t.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r,c={};P.effects.save(s,n),s.show(),i=t.distance||s["top"===h?"outerHeight":"outerWidth"](!0),P.effects.createWrapper(s).css({overflow:"hidden"}),a&&s.css(h,l?isNaN(i)?"-"+i:-i:i),c[h]=(a?l?"+=":"-=":l?"-=":"+=")+i,s.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&s.hide(),P.effects.restore(s,n),P.effects.removeWrapper(s),e()}})},P.effects.effect.transfer=function(t,e){var i=P(this),s=P(t.to),n="fixed"===s.css("position"),o=P("body"),a=n?o.scrollTop():0,r=n?o.scrollLeft():0,h=s.offset(),l={top:h.top-a,left:h.left-r,height:s.innerHeight(),width:s.innerWidth()},c=i.offset(),u=P("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:c.top-a,left:c.left-r,height:i.innerHeight(),width:i.innerWidth(),position:n?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){u.remove(),e()})},P.widget("ui.progressbar",{version:"1.11.1",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=P("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){if(void 0===t)return this.options.value;this.options.value=this._constrainedValue(t),this._refreshValue()},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,e=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(e.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=P("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),P.widget("ui.selectable",P.ui.mouse,{version:"1.11.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,e=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){(t=P(e.options.filter,e.element[0])).addClass("ui-selectee"),t.each(function(){var t=P(this),e=t.offset();P.data(this,"selectable-item",{element:this,$element:t,left:e.left,top:e.top,right:e.left+t.outerWidth(),bottom:e.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=P("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(i){var s=this,t=this.options;this.opos=[i.pageX,i.pageY],this.options.disabled||(this.selectees=P(t.filter,this.element[0]),this._trigger("start",i),P(t.appendTo).append(this.helper),this.helper.css({left:i.pageX,top:i.pageY,width:0,height:0}),t.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var t=P.data(this,"selectable-item");t.startselected=!0,i.metaKey||i.ctrlKey||(t.$element.removeClass("ui-selected"),t.selected=!1,t.$element.addClass("ui-unselecting"),t.unselecting=!0,s._trigger("unselecting",i,{unselecting:t.element}))}),P(i.target).parents().addBack().each(function(){var t,e=P.data(this,"selectable-item");if(e)return t=!i.metaKey&&!i.ctrlKey||!e.$element.hasClass("ui-selected"),e.$element.removeClass(t?"ui-unselecting":"ui-selected").addClass(t?"ui-selecting":"ui-unselecting"),e.unselecting=!t,e.selecting=t,(e.selected=t)?s._trigger("selecting",i,{selecting:e.element}):s._trigger("unselecting",i,{unselecting:e.element}),!1}))},_mouseDrag:function(i){if(this.dragged=!0,!this.options.disabled){var t,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=i.pageX,h=i.pageY;return r<o&&(t=r,r=o,o=t),h<a&&(t=h,h=a,a=t),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var t=P.data(this,"selectable-item"),e=!1;t&&t.element!==s.element[0]&&("touch"===n.tolerance?e=!(t.left>r||t.right<o||t.top>h||t.bottom<a):"fit"===n.tolerance&&(e=t.left>o&&t.right<r&&t.top>a&&t.bottom<h),e?(t.selected&&(t.$element.removeClass("ui-selected"),t.selected=!1),t.unselecting&&(t.$element.removeClass("ui-unselecting"),t.unselecting=!1),t.selecting||(t.$element.addClass("ui-selecting"),t.selecting=!0,s._trigger("selecting",i,{selecting:t.element}))):(t.selecting&&((i.metaKey||i.ctrlKey)&&t.startselected?(t.$element.removeClass("ui-selecting"),t.selecting=!1,t.$element.addClass("ui-selected"),t.selected=!0):(t.$element.removeClass("ui-selecting"),t.selecting=!1,t.startselected&&(t.$element.addClass("ui-unselecting"),t.unselecting=!0),s._trigger("unselecting",i,{unselecting:t.element}))),t.selected&&(i.metaKey||i.ctrlKey||t.startselected||(t.$element.removeClass("ui-selected"),t.selected=!1,t.$element.addClass("ui-unselecting"),t.unselecting=!0,s._trigger("unselecting",i,{unselecting:t.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,P(".ui-unselecting",this.element[0]).each(function(){var t=P.data(this,"selectable-item");t.$element.removeClass("ui-unselecting"),t.unselecting=!1,t.startselected=!1,i._trigger("unselected",e,{unselected:t.element})}),P(".ui-selecting",this.element[0]).each(function(){var t=P.data(this,"selectable-item");t.$element.removeClass("ui-selecting").addClass("ui-selected"),t.selecting=!1,t.selected=!0,t.startselected=!0,i._trigger("selected",e,{selected:t.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),P.widget("ui.selectmenu",{version:"1.11.1",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var t=this.element.uniqueId().attr("id");this.ids={element:t,button:t+"-button",menu:t+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this,e=this.element.attr("tabindex");this.label=P("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=P("<span>",{class:"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:e||this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),P("<span>",{class:"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=P("<span>",{class:"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var s=this;this.menu=P("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=P("<div>",{class:"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(t,e){t.preventDefault(),s._select(e.item.data("ui-selectmenu-item"),t)},focus:function(t,e){var i=e.item.data("ui-selectmenu-item");null!=s.focusIndex&&i.index!==s.focusIndex&&(s._trigger("focus",t,{item:i}),s.isOpen||s._select(i,t)),s.focusIndex=i.index,s.button.attr("aria-activedescendant",s.menuItems.eq(i.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var t,e=this.element.find("option");e.length&&(this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t))},_position:function(){this.menuWrap.position(P.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(i,t){var s=this,n="";P.each(t,function(t,e){e.optgroup!==n&&(P("<li>",{class:"ui-selectmenu-optgroup ui-menu-divider"+(e.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:e.optgroup}).appendTo(i),n=e.optgroup),s._renderItemData(i,e)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(t,e){var i=P("<li>");return e.disabled&&i.addClass("ui-state-disabled"),this._setText(i,e.label),i.appendTo(t)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),(s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0)).length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_documentClick:{mousedown:function(t){this.isOpen&&(P(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(t){t.preventDefault()},click:"_toggle",keydown:function(t){var e=!0;switch(t.keyCode){case P.ui.keyCode.TAB:case P.ui.keyCode.ESCAPE:this.close(t),e=!1;break;case P.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case P.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case P.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case P.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case P.ui.keyCode.LEFT:this._move("prev",t);break;case P.ui.keyCode.RIGHT:this._move("next",t);break;case P.ui.keyCode.HOME:case P.ui.keyCode.PAGE_UP:this._move("first",t);break;case P.ui.keyCode.END:case P.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),e=!1}e&&t.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex);e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this._setText(this.buttonText,t.label),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){"icons"===t&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button),this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"disabled"===t&&(this.menuInstance.option("disabled",e),this.button.toggleClass("ui-state-disabled",e).attr("aria-disabled",e),this.element.prop("disabled",e),e?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===t&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?P(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;t||(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var n=[];t.each(function(t,e){var i=P(e),s=i.parent("optgroup");n.push({element:i,index:t,value:i.attr("value"),label:i.text(),optgroup:s.attr("label")||"",disabled:s.prop("disabled")||i.prop("disabled")})}),this.items=n},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),P.widget("ui.slider",P.ui.mouse,{version:"1.11.1",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,e,i=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),n=[];for(e=i.values&&i.values.length||1,s.length>e&&(s.slice(e).remove(),s=s.slice(0,e)),t=s.length;t<e;t++)n.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");this.handles=s.add(P(n.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){P(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,e="";t.range?(!0===t.range&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:P.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=P("<div></div>").appendTo(this.element),e="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(e+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var e,i,s,n,o,a,r,h=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var e=Math.abs(i-h.values(t));(e<s||s===e&&(t===h._lastChangedValue||h.values(t)===l.min))&&(s=e,n=P(this),o=t)}),!1!==this._start(t,o)&&(this._mouseSliding=!0,this._handleIndex=o,n.addClass("ui-state-active").focus(),a=n.offset(),r=!P(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=r?{left:0,top:0}:{left:t.pageX-a.left-n.width()/2,top:t.pageY-a.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,i),this._animateOff=!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),1<(s=i/e)&&(s=1),s<0&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,o;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&!0===this.options.range&&(0===e&&s<i||1===e&&i<s)&&(i=s),i!==this.values(e)&&((n=this.values())[e]=i,o=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),!1!==o&&this.values(e,i))):i!==this.value()&&!1!==(o=this._trigger("slide",t,{handle:this.handles[e],value:i}))&&this.value(i)},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(t,e){var i,s,n;if(1<arguments.length)return this.options.values[t]=this._trimAlignValue(e),this._refreshValue(),void this._change(null,t);if(!arguments.length)return this._values();if(!P.isArray(t))return this.options.values&&this.options.values.length?this._values(t):this.value();for(i=this.options.values,s=t,n=0;n<i.length;n+=1)i[n]=this._trimAlignValue(s[n]),this._change(null,n);this._refreshValue()},_setOption:function(t,e){var i,s=0;switch("range"===t&&!0===this.options.range&&("min"===e?(this.options.value=this._values(0),this.options.values=null):"max"===e&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),P.isArray(this.options.values)&&(s=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e),this._super(t,e),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===e?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=0;i<s;i+=1)this._change(null,i);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;s<i.length;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(t<=this._valueMin())return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=0<this.options.step?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=0<i?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,t,s,n,o=this.options.range,a=this.options,r=this,h=!this._animateOff&&a.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(t){i=(r.values(t)-r._valueMin())/(r._valueMax()-r._valueMin())*100,l["horizontal"===r.orientation?"left":"bottom"]=i+"%",P(this).stop(1,1)[h?"animate":"css"](l,a.animate),!0===r.options.range&&("horizontal"===r.orientation?(0===t&&r.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},a.animate),1===t&&r.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:a.animate})):(0===t&&r.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},a.animate),1===t&&r.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:a.animate}))),e=i}):(t=this.value(),s=this._valueMin(),n=this._valueMax(),i=n!==s?(t-s)/(n-s)*100:0,l["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](l,a.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},a.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:a.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},a.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:a.animate}))},_handleEvents:{keydown:function(t){var e,i,s,n=P(t.target).data("ui-slider-handle-index");switch(t.keyCode){case P.ui.keyCode.HOME:case P.ui.keyCode.END:case P.ui.keyCode.PAGE_UP:case P.ui.keyCode.PAGE_DOWN:case P.ui.keyCode.UP:case P.ui.keyCode.RIGHT:case P.ui.keyCode.DOWN:case P.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,P(t.target).addClass("ui-state-active"),!1===this._start(t,n)))return}switch(s=this.options.step,e=i=this.options.values&&this.options.values.length?this.values(n):this.value(),t.keyCode){case P.ui.keyCode.HOME:i=this._valueMin();break;case P.ui.keyCode.END:i=this._valueMax();break;case P.ui.keyCode.PAGE_UP:i=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/this.numPages);break;case P.ui.keyCode.PAGE_DOWN:i=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/this.numPages);break;case P.ui.keyCode.UP:case P.ui.keyCode.RIGHT:if(e===this._valueMax())return;i=this._trimAlignValue(e+s);break;case P.ui.keyCode.DOWN:case P.ui.keyCode.LEFT:if(e===this._valueMin())return;i=this._trimAlignValue(e-s)}this._slide(t,n,i)},keyup:function(t){var e=P(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,e),this._change(t,e),P(t.target).removeClass("ui-state-active"))}}}),P.widget("ui.sortable",P.ui.mouse,{version:"1.11.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return e<=t&&t<e+i},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=!!this.items.length&&("x"===t.axis||this._isFloating(this.items[0].item)),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),P.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var t=this.items.length-1;0<=t;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,e){var i=null,s=!1,n=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(t),P(t.target).parents().each(function(){if(P.data(this,n.widgetName+"-item")===n)return i=P(this),!1}),P.data(t.target,n.widgetName+"-item")===n&&(i=P(t.target)),!!i&&(!(this.options.handle&&!e&&(P(this.options.handle,i).find("*").addBack().each(function(){this===t.target&&(s=!0)}),!s))&&(this.currentItem=i,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(t,e,i){var s,n,o=this.options;if((this.currentContainer=this).refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},P.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(n=this.document.find("body"),this.storedCursor=n.css("cursor"),n.css("cursor",o.cursor),this.storedStylesheet=P("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(n)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!i)for(s=this.containers.length-1;0<=s;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return P.ui.ddmanager&&(P.ui.ddmanager.current=this),P.ui.ddmanager&&!o.dropBehaviour&&P.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var e,i,s,n,o=this.options,a=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-P(document).scrollTop()<o.scrollSensitivity?a=P(document).scrollTop(P(document).scrollTop()-o.scrollSpeed):P(window).height()-(t.pageY-P(document).scrollTop())<o.scrollSensitivity&&(a=P(document).scrollTop(P(document).scrollTop()+o.scrollSpeed)),t.pageX-P(document).scrollLeft()<o.scrollSensitivity?a=P(document).scrollLeft(P(document).scrollLeft()-o.scrollSpeed):P(window).width()-(t.pageX-P(document).scrollLeft())<o.scrollSensitivity&&(a=P(document).scrollLeft(P(document).scrollLeft()+o.scrollSpeed))),!1!==a&&P.ui.ddmanager&&!o.dropBehaviour&&P.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e=this.items.length-1;0<=e;e--)if(s=(i=this.items[e]).item[0],(n=this._intersectsWithPointer(i))&&i.instance===this.currentContainer&&!(s===this.currentItem[0]||this.placeholder[1===n?"next":"prev"]()[0]===s||P.contains(this.placeholder[0],s)||"semi-dynamic"===this.options.type&&P.contains(this.element[0],s))){if(this.direction=1===n?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(i))break;this._rearrange(t,i),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),P.ui.ddmanager&&P.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,e){if(t){if(P.ui.ddmanager&&!this.options.dropBehaviour&&P.ui.ddmanager.drop(this,t),this.options.revert){var i=this,s=this.placeholder.offset(),n=this.options.axis,o={};n&&"x"!==n||(o.left=s.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),n&&"y"!==n||(o.top=s.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,P(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){i._clear(t)})}else this._clear(t,e);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;0<=t;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),P.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?P(this.domPosition.prev).after(this.currentItem):P(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var t=this._getItemsAsjQuery(e&&e.connected),i=[];return e=e||{},P(t).each(function(){var t=(P(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);t&&i.push((e.key||t[1]+"[]")+"="+(e.key&&e.expression?t[1]:t[2]))}),!i.length&&e.key&&i.push(e.key+"="),i.join("&")},toArray:function(t){var e=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},e.each(function(){i.push(P(t.item||this).attr(t.attribute||"id")||"")}),i},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||r<s+l&&s+l<h,d="y"===this.options.axis||o<e+c&&e+c<a,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:o<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<a&&r<s+this.helperProportions.height/2&&n-this.helperProportions.height/2<h},_intersectsWithPointer:function(t){var e="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),s=e&&i,n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return!!s&&(this.floating?o&&"right"===o||"down"===n?2:1:n&&("down"===n?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(0<t?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(0<t?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(t){var e,i,s,n,o=[],a=[],r=this._connectWith();if(r&&t)for(e=r.length-1;0<=e;e--)for(i=(s=P(r[e])).length-1;0<=i;i--)(n=P.data(s[i],this.widgetFullName))&&n!==this&&!n.options.disabled&&a.push([P.isFunction(n.options.items)?n.options.items.call(n.element):P(n.options.items,n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),n]);function h(){o.push(this)}for(a.push([P.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):P(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),e=a.length-1;0<=e;e--)a[e][0].each(h);return P(o)},_removeCurrentsFromItems:function(){var i=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=P.grep(this.items,function(t){for(var e=0;e<i.length;e++)if(i[e]===t.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var e,i,s,n,o,a,r,h,l=this.items,c=[[P.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):P(this.options.items,this.element),this]],u=this._connectWith();if(u&&this.ready)for(e=u.length-1;0<=e;e--)for(i=(s=P(u[e])).length-1;0<=i;i--)(n=P.data(s[i],this.widgetFullName))&&n!==this&&!n.options.disabled&&(c.push([P.isFunction(n.options.items)?n.options.items.call(n.element[0],t,{item:this.currentItem}):P(n.options.items,n.element),n]),this.containers.push(n));for(e=c.length-1;0<=e;e--)for(o=c[e][1],i=0,h=(a=c[e][0]).length;i<h;i++)(r=P(a[i])).data(this.widgetName+"-item",o),l.push({item:r,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){var e,i,s,n;for(this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),e=this.items.length-1;0<=e;e--)(i=this.items[e]).instance!==this.currentContainer&&this.currentContainer&&i.item[0]!==this.currentItem[0]||(s=this.options.toleranceElement?P(this.options.toleranceElement,i.item):i.item,t||(i.width=s.outerWidth(),i.height=s.outerHeight()),n=s.offset(),i.left=n.left,i.top=n.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(e=this.containers.length-1;0<=e;e--)n=this.containers[e].element.offset(),this.containers[e].containerCache.left=n.left,this.containers[e].containerCache.top=n.top,this.containers[e].containerCache.width=this.containers[e].element.outerWidth(),this.containers[e].containerCache.height=this.containers[e].element.outerHeight();return this},_createPlaceholder:function(i){var s,n=(i=i||this).options;n.placeholder&&n.placeholder.constructor!==String||(s=n.placeholder,n.placeholder={element:function(){var t=i.currentItem[0].nodeName.toLowerCase(),e=P("<"+t+">",i.document[0]).addClass(s||i.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===t?i.currentItem.children().each(function(){P("<td>&#160;</td>",i.document[0]).attr("colspan",P(this).attr("colspan")||1).appendTo(e)}):"img"===t&&e.attr("src",i.currentItem.attr("src")),s||e.css("visibility","hidden"),e},update:function(t,e){s&&!n.forcePlaceholderSize||(e.height()||e.height(i.currentItem.innerHeight()-parseInt(i.currentItem.css("paddingTop")||0,10)-parseInt(i.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(i.currentItem.innerWidth()-parseInt(i.currentItem.css("paddingLeft")||0,10)-parseInt(i.currentItem.css("paddingRight")||0,10)))}}),i.placeholder=P(n.placeholder.element.call(i.element,i.currentItem)),i.currentItem.after(i.placeholder),n.placeholder.update(i,i.placeholder)},_contactContainers:function(t){var e,i,s,n,o,a,r,h,l,c,u=null,d=null;for(e=this.containers.length-1;0<=e;e--)if(!P.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(u&&P.contains(this.containers[e].element[0],u.element[0]))continue;u=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",t,this._uiHash(this)),this.containers[e].containerCache.over=0);if(u)if(1===this.containers.length)this.containers[d].containerCache.over||(this.containers[d]._trigger("over",t,this._uiHash(this)),this.containers[d].containerCache.over=1);else{for(s=1e4,n=null,o=(l=u.floating||this._isFloating(this.currentItem))?"left":"top",a=l?"width":"height",c=l?"clientX":"clientY",i=this.items.length-1;0<=i;i--)P.contains(this.containers[d].element[0],this.items[i].item[0])&&this.items[i].item[0]!==this.currentItem[0]&&(r=this.items[i].item.offset()[o],h=!1,t[c]-r>this.items[i][a]/2&&(h=!0),Math.abs(t[c]-r)<s&&(s=Math.abs(t[c]-r),n=this.items[i],this.direction=h?"up":"down"));if(!n&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[d])return;n?this._rearrange(t,n,null,!0):this._rearrange(t,null,this.containers[d].element,!0),this._trigger("change",t,this._uiHash()),this.containers[d]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[d],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",t,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(t){var e=this.options,i=P.isFunction(e.helper)?P(e.helper.apply(this.element[0],[t,this.currentItem])):"clone"===e.helper?this.currentItem.clone():this.currentItem;return i.parents("body").length||P("parent"!==e.appendTo?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0]),i[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),i[0].style.width&&!e.forceHelperSize||i.width(this.currentItem.width()),i[0].style.height&&!e.forceHelperSize||i.height(this.currentItem.height()),i},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),P.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&P.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&P.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,s=this.options;"parent"===s.containment&&(s.containment=this.helper[0].parentNode),"document"!==s.containment&&"window"!==s.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,P("document"===s.containment?document:window).width()-this.helperProportions.width-this.margins.left,(P("document"===s.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(s.containment)||(t=P(s.containment)[0],e=P(s.containment).offset(),i="hidden"!==P(t).css("overflow"),this.containment=[e.left+(parseInt(P(t).css("borderLeftWidth"),10)||0)+(parseInt(P(t).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(P(t).css("borderTopWidth"),10)||0)+(parseInt(P(t).css("paddingTop"),10)||0)-this.margins.top,e.left+(i?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(P(t).css("borderLeftWidth"),10)||0)-(parseInt(P(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(i?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(P(t).css("borderTopWidth"),10)||0)-(parseInt(P(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&P.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,n=/(html|body)/i.test(s[0].tagName);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():n?0:s.scrollTop())*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():n?0:s.scrollLeft())*i}},_generatePosition:function(t){var e,i,s=this.options,n=t.pageX,o=t.pageY,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&P.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,r=/(html|body)/i.test(a[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(n=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(n=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),s.grid&&(e=this.originalPageY+Math.round((o-this.originalPageY)/s.grid[1])*s.grid[1],o=this.containment?e-this.offset.click.top>=this.containment[1]&&e-this.offset.click.top<=this.containment[3]?e:e-this.offset.click.top>=this.containment[1]?e-s.grid[1]:e+s.grid[1]:e,i=this.originalPageX+Math.round((n-this.originalPageX)/s.grid[0])*s.grid[0],n=this.containment?i-this.offset.click.left>=this.containment[0]&&i-this.offset.click.left<=this.containment[2]?i:i-this.offset.click.left>=this.containment[0]?i-s.grid[0]:i+s.grid[0]:i)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():r?0:a.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():r?0:a.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)"auto"!==this._storedCSS[i]&&"static"!==this._storedCSS[i]||(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();function n(e,i,s){return function(t){s._trigger(e,t,i._uiHash(i))}}for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;0<=i;i--)e||s.push(n("deactivate",this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(n("out",this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),i=0;i<s.length;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(i=0;i<s.length;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return!(this.fromOutside=!1)},_trigger:function(){!1===P.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(t){var e=t||this;return{helper:e.helper,placeholder:e.placeholder||P([]),position:e.position,originalPosition:e.originalPosition,offset:e.positionAbs,item:e.currentItem,sender:t?t.element:null}}});function k(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}var C;P.widget("ui.spinner",{version:"1.11.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var s={},n=this.element;return P.each(["min","max","step"],function(t,e){var i=n.attr(e);void 0!==i&&i.length&&(s[e]=i)}),s},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){this.cancelBlur?delete this.cancelBlur:(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((0<e?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(t){var e;function i(){this.element[0]===this.document[0].activeElement||(this.element.focus(),this.previous=e,this._delay(function(){this.previous=e}))}e=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),!1!==this._start(t)&&this._repeat(null,P(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(P(t.currentTarget).hasClass("ui-state-active"))return!1!==this._start(t)&&void this._repeat(null,P(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&0<t.height()&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(t){var e=this.options,i=P.ui.keyCode;switch(t.keyCode){case i.UP:return this._repeat(null,1,t),!0;case i.DOWN:return this._repeat(null,-1,t),!0;case i.PAGE_UP:return this._repeat(null,e.page,t),!0;case i.PAGE_DOWN:return this._repeat(null,-e.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t))&&(this.counter||(this.counter=1),this.spinning=!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(t){var e=this.options.incremental;return e?P.isFunction(e)?e(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return i=t-(e=null!==s.min?s.min:0),t=e+(i=Math.round(i/s.step)*s.step),t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&t<s.min?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,void this.element.val(this._format(i))}"max"!==t&&"min"!==t&&"step"!==t||"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),this.buttons.button(e?"disable":"enable"))},_setOptions:k(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i)),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:k(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:k(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:k(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:k(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){if(!arguments.length)return this._parse(this.element.val());k(this._value).call(this,t)},widget:function(){return this.uiSpinner}}),P.widget("ui.tabs",{version:"1.11.1",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(C=/#.*$/,function(t){var e,i;e=(t=t.cloneNode(!1)).href.replace(C,""),i=location.href.replace(C,"");try{e=decodeURIComponent(e)}catch(t){}try{i=decodeURIComponent(i)}catch(t){}return 1<t.hash.length&&e===i}),_create:function(){var e=this,t=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",t.collapsible),this._processTabs(),t.active=this._initialActive(),P.isArray(t.disabled)&&(t.disabled=P.unique(t.disabled.concat(P.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),!1!==this.options.active&&this.anchors.length?this.active=this._findActive(t.active):this.active=P(),this._refresh(),this.active.length&&this.load(t.active)},_initialActive:function(){var i=this.options.active,t=this.options.collapsible,s=location.hash.substring(1);return null===i&&(s&&this.tabs.each(function(t,e){if(P(e).attr("aria-controls")===s)return i=t,!1}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==i&&-1!==i||(i=!!this.tabs.length&&0)),!1!==i&&-1===(i=this.tabs.index(this.tabs.eq(i)))&&(i=!t&&0),!t&&!1===i&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):P()}},_tabKeydown:function(t){var e=P(this.document[0].activeElement).closest("li"),i=this.tabs.index(e),s=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case P.ui.keyCode.RIGHT:case P.ui.keyCode.DOWN:i++;break;case P.ui.keyCode.UP:case P.ui.keyCode.LEFT:s=!1,i--;break;case P.ui.keyCode.END:i=this.anchors.length-1;break;case P.ui.keyCode.HOME:i=0;break;case P.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i);case P.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i!==this.options.active&&i);default:return}t.preventDefault(),clearTimeout(this.activating),i=this._focusNextTab(i,s),t.ctrlKey||(e.attr("aria-selected","false"),this.tabs.eq(i).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",i)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===P.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===P.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===P.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,e){var i=this.tabs.length-1;for(;-1!==P.inArray((i<t&&(t=0),t<0&&(t=i),t),this.options.disabled);)t=e?t+1:t-1;return t},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,e){"active"!==t?"disabled"!==t?(this._super(t,e),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e)):this._setupDisabled(e):this._activate(e)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,e=this.tablist.children(":has(a[href])");t.disabled=P.map(e.filter(".ui-state-disabled"),function(t){return e.index(t)}),this._processTabs(),!1!==t.active&&this.anchors.length?this.active.length&&!P.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=P()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=P()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var h=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){P(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){P(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return P("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=P(),this.anchors.each(function(t,e){var i,s,n,o=P(e).uniqueId().attr("id"),a=P(e).closest("li"),r=a.attr("aria-controls");h._isLocal(e)?(n=(i=e.hash).substring(1),s=h.element.find(h._sanitizeSelector(i))):(i="#"+(n=a.attr("aria-controls")||P({}).uniqueId()[0].id),(s=h.element.find(i)).length||(s=h._createPanel(n)).insertAfter(h.panels[t-1]||h.tablist),s.attr("aria-live","polite")),s.length&&(h.panels=h.panels.add(s)),r&&a.data("ui-tabs-aria-controls",r),a.attr({"aria-controls":n,"aria-labelledby":o}),s.attr("aria-labelledby",o)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return P("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){P.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var e,i=0;e=this.tabs[i];i++)!0===t||-1!==P.inArray(i,t)?P(e).addClass("ui-state-disabled").attr("aria-disabled","true"):P(e).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&P.each(t.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,e=this.element.parent();"fill"===t?(i=e.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=P(this),e=t.css("position");"absolute"!==e&&"fixed"!==e&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=P(this).outerHeight(!0)}),this.panels.each(function(){P(this).height(Math.max(0,i-P(this).innerHeight()+P(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,P(this).height("").height())}).height(i))},_eventHandler:function(t){var e=this.options,i=this.active,s=P(t.currentTarget).closest("li"),n=s[0]===i[0],o=n&&e.collapsible,a=o?P():this._getPanelForTab(s),r=i.length?this._getPanelForTab(i):P(),h={oldTab:i,oldPanel:r,newTab:o?P():s,newPanel:a};t.preventDefault(),s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||n&&!e.collapsible||!1===this._trigger("beforeActivate",t,h)||(e.active=!o&&this.tabs.index(s),this.active=n?P():s,this.xhr&&this.xhr.abort(),r.length||a.length||P.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,h))},_toggle:function(t,e){var i=this,s=e.newPanel,n=e.oldPanel;function o(){i.running=!1,i._trigger("activate",t,e)}function a(){e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),s.length&&i.options.show?i._show(s,i.options.show,o):(s.show(),o())}this.running=!0,n.length&&this.options.hide?this._hide(n,this.options.hide,function(){e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),a()}):(e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n.hide(),a()),n.attr("aria-hidden","true"),e.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),s.length&&n.length?e.oldTab.attr("tabIndex",-1):s.length&&this.tabs.filter(function(){return 0===P(this).attr("tabIndex")}).attr("tabIndex",-1),s.attr("aria-hidden","false"),e.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var e,i=this._findActive(t);i[0]!==this.active[0]&&(i.length||(i=this.active),e=i.find(".ui-tabs-anchor")[0],this._eventHandler({target:e,currentTarget:e,preventDefault:P.noop}))},_findActive:function(t){return!1===t?P():this.tabs.eq(t)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){P.data(this,"ui-tabs-destroy")?P(this).remove():P(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=P(this),e=t.data("ui-tabs-aria-controls");e?t.attr("aria-controls",e).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var t=this.options.disabled;!1!==t&&(void 0===i?t=!1:(i=this._getIndex(i),t=P.isArray(t)?P.map(t,function(t){return t!==i?t:null}):P.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(t))},disable:function(t){var e=this.options.disabled;if(!0!==e){if(void 0===t)e=!0;else{if(t=this._getIndex(t),-1!==P.inArray(t,e))return;e=P.isArray(e)?P.merge([t],e).sort():[t]}this._setupDisabled(e)}},load:function(t,e){t=this._getIndex(t);var i=this,s=this.tabs.eq(t),n=s.find(".ui-tabs-anchor"),o=this._getPanelForTab(s),a={tab:s,panel:o};this._isLocal(n[0])||(this.xhr=P.ajax(this._ajaxSettings(n,e,a)),this.xhr&&"canceled"!==this.xhr.statusText&&(s.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){o.html(t),i._trigger("load",e,a)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&i.panels.stop(!1,!0),s.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),t===i.xhr&&delete i.xhr},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,e){return n._trigger("beforeLoad",i,P.extend({jqXHR:t,ajaxSettings:e},s))}}},_getPanelForTab:function(t){var e=P(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+e))}}),P.widget("ui.tooltip",{version:"1.11.1",options:{content:function(){var t=P(this).attr("title")||"";return P("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,e){var i=(t.attr("aria-describedby")||"").split(/\s+/);i.push(e),t.data("ui-tooltip-id",e).attr("aria-describedby",P.trim(i.join(" ")))},_removeDescribedBy:function(t){var e=t.data("ui-tooltip-id"),i=(t.attr("aria-describedby")||"").split(/\s+/),s=P.inArray(e,i);-1!==s&&i.splice(s,1),t.removeData("ui-tooltip-id"),(i=P.trim(i.join(" ")))?t.attr("aria-describedby",i):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=P("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,e){var i=this;if("disabled"===t)return this[e?"_disable":"_enable"](),void(this.options[t]=e);this._super(t,e),"content"===t&&P.each(this.tooltips,function(t,e){i._updateContent(e)})},_disable:function(){var s=this;P.each(this.tooltips,function(t,e){var i=P.Event("blur");i.target=i.currentTarget=e[0],s.close(i,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=P(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=P(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,e=P(t?t.target:this.element).closest(this.options.items);e.length&&!e.data("ui-tooltip-id")&&(e.attr("title")&&e.data("ui-tooltip-title",e.attr("title")),e.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&e.parents().each(function(){var t,e=P(this);e.data("ui-tooltip-open")&&((t=P.Event("blur")).target=t.currentTarget=this,i.close(t,!0)),e.attr("title")&&(e.uniqueId(),i.parents[this.id]={element:this,title:e.attr("title")},e.attr("title",""))}),this._updateContent(e,t))},_updateContent:function(e,i){var t,s=this.options.content,n=this,o=i?i.type:null;if("string"==typeof s)return this._open(i,e,s);(t=s.call(e[0],function(t){e.data("ui-tooltip-open")&&n._delay(function(){i&&(i.type=o),this._open(i,e,t)})}))&&this._open(i,e,t)},_open:function(t,i,e){var s,n,o,a,r=P.extend({},this.options.position);function h(t){r.of=t,s.is(":hidden")||s.position(r)}e&&((s=this._find(i)).length?s.find(".ui-tooltip-content").html(e):(i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),s=this._tooltip(i),this._addDescribedBy(i,s.attr("id")),s.find(".ui-tooltip-content").html(e),this.liveRegion.children().hide(),e.clone?(a=e.clone()).removeAttr("id").find("[id]").removeAttr("id"):a=e,P("<div>").html(a).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:h}),h(t)):s.position(P.extend({of:i},this.options.position)),this.hiding=!1,this.closing=!1,s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(o=this.delayedShow=setInterval(function(){s.is(":visible")&&(h(r.of),clearInterval(o))},P.fx.interval)),this._trigger("open",t,{tooltip:s}),n={keyup:function(t){if(t.keyCode===P.ui.keyCode.ESCAPE){var e=P.Event(t);e.currentTarget=i[0],this.close(e,!0)}}},i[0]!==this.element[0]&&(n.remove=function(){this._removeTooltip(s)}),t&&"mouseover"!==t.type||(n.mouseleave="close"),t&&"focusin"!==t.type||(n.focusout="close"),this._on(!0,i,n)))},close:function(t){var i=this,e=P(t?t.currentTarget:this.element),s=this._find(e);this.closing||(clearInterval(this.delayedShow),e.data("ui-tooltip-title")&&!e.attr("title")&&e.attr("title",e.data("ui-tooltip-title")),this._removeDescribedBy(e),this.hiding=!0,s.stop(!0),this._hide(s,this.options.hide,function(){i._removeTooltip(P(this)),this.hiding=!1,this.closing=!1}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&P.each(this.parents,function(t,e){P(e.element).attr("title",e.title),delete i.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.hiding||(this.closing=!1))},_tooltip:function(t){var e=P("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),i=e.uniqueId().attr("id");return P("<div>").addClass("ui-tooltip-content").appendTo(e),e.appendTo(this.document[0].body),this.tooltips[i]=t,e},_find:function(t){var e=t.data("ui-tooltip-id");return e?P("#"+e):P()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var s=this;P.each(this.tooltips,function(t,e){var i=P.Event("blur");i.target=i.currentTarget=e[0],s.close(i,!0),P("#"+t).remove(),e.data("ui-tooltip-title")&&(e.attr("title")||e.attr("title",e.data("ui-tooltip-title")),e.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});
!function(ya){ya.fn.camera=function(j,a){function Q(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))return!0}j=ya.extend({},{alignment:"center",autoAdvance:!0,mobileAutoAdvance:!0,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"images/",hover:!0,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:!0,navigationHover:!0,mobileNavHover:!0,opacityOnGrid:!1,overlayer:!0,pagination:!0,playPause:!0,pauseOnClick:!0,pieDiameter:38,piePosition:"rightTop",portrait:!1,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:!1,time:7e3,transPeriod:150,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}},j);var N=ya(this).addClass("camera_wrap");N.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var G,J=ya(".camera_fakehover",N);J.append('<div class="camera_target"></div>'),1==j.overlayer&&J.append('<div class="camera_overlayer"></div>'),J.append('<div class="camera_target_content"></div>'),"pie"==(G="pie"==j.loader&&ya.browser.msie&&ya.browser.version<9?"bar":j.loader)?J.append('<div class="camera_pie"></div>'):"bar"==G?J.append('<div class="camera_bar"></div>'):J.append('<div class="camera_bar" style="display:none"></div>'),1==j.playPause&&J.append('<div class="camera_commands"></div>'),1==j.navigation&&J.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'),1==j.thumbnails&&N.append('<div class="camera_thumbs_cont" />'),1==j.thumbnails&&1!=j.pagination&&ya(".camera_thumbs_cont",N).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'),1==j.pagination&&N.append('<div class="camera_pag"></div>'),N.append('<div class="camera_loader"></div>'),ya(".camera_caption",N).each(function(){ya(this).wrapInner("<div />")});var K="pie_"+N.index(),U=ya(".camera_src",N),V=ya(".camera_target",N),e=ya(".camera_target_content",N),t=ya(".camera_pie",N),i=ya(".camera_bar",N),r=ya(".camera_prev",N),o=ya(".camera_next",N),s=ya(".camera_commands",N),X=ya(".camera_pag",N),Y=ya(".camera_thumbs_cont",N),Z=new Array;ya("> div",U).each(function(){Z.push(ya(this).attr("data-src"))});var n=new Array;ya("> div",U).each(function(){ya(this).attr("data-link")?n.push(ya(this).attr("data-link")):n.push("")});var c=new Array;ya("> div",U).each(function(){ya(this).attr("data-target")?c.push(ya(this).attr("data-target")):c.push("")});var $=new Array;ya("> div",U).each(function(){ya(this).attr("data-portrait")?$.push(ya(this).attr("data-portrait")):$.push("")});var aa=new Array;ya("> div",U).each(function(){ya(this).attr("data-alignment")?aa.push(ya(this).attr("data-alignment")):aa.push("")});var l=new Array;ya("> div",U).each(function(){ya(this).attr("data-thumb")?l.push(ya(this).attr("data-thumb")):l.push("")});var m,ea=Z.length;for(ya(e).append('<div class="cameraContents" />'),m=0;m<ea;m++)if(ya(".cameraContents",e).append('<div class="cameraContent" />'),""!=n[m]){var d=ya("> div ",U).eq(m).attr("data-box");d=void 0!==d&&!1!==d&&""!=d?'data-box="'+ya("> div ",U).eq(m).attr("data-box")+'"':"",ya(".camera_target_content .cameraContent:eq("+m+")",N).append('<a class="camera_link" href="'+n[m]+'" '+d+' target="'+c[m]+'"></a>')}ya(".camera_caption",N).each(function(){var a=ya(this).parent().index(),e=N.find(".cameraContent").eq(a);ya(this).appendTo(e)}),V.append('<div class="cameraCont" />');var h,p,ta=ya(".cameraCont",N);for(h=0;h<ea;h++){ta.append('<div class="cameraSlide cameraSlide_'+h+'" />');var f=ya("> div:eq("+h+")",U);V.find(".cameraSlide_"+h).clone(f)}function g(){var o=ya(Y).width();ya("li",Y).removeClass("camera_visThumb"),ya("li",Y).each(function(){var a=ya(this).position(),e=ya("ul",Y).outerWidth(),t=ya("ul",Y).offset().left,i=ya("> div",Y).offset().left-t;0<i?ya(".camera_prevThumbs",da).removeClass("hideNav"):ya(".camera_prevThumbs",da).addClass("hideNav"),o<e-i?ya(".camera_nextThumbs",da).removeClass("hideNav"):ya(".camera_nextThumbs",da).addClass("hideNav");var r=a.left;a.left+ya(this).width()-i<=o&&0<=r-i&&ya(this).addClass("camera_visThumb")})}ya(window).bind("load resize pageshow",function(){va(),g()}),ta.append('<div class="cameraSlide cameraSlide_'+h+'" />'),N.show();var u,ia,ra,v,b,_,oa,sa=V.width(),na=V.height();function ca(){var a;clearTimeout(a),a=setTimeout(function(){sa=N.width();var a=400;if(jQuery(window).width()<760&&(a=0==(e=jQuery(".camera_caption.fadeIn .slider_holder").height())?jQuery(".camera_target_content").height():400+e-52),N.css({height:a}),-1!=j.height.indexOf("%")){var e,t=Math.round(sa/(100/parseFloat(j.height)));a=na=""!=j.minHeight&&t<parseFloat(j.minHeight)?parseFloat(j.minHeight):t,jQuery(window).width()<760&&(a=0==(e=jQuery(".camera_caption.fadeIn .slider_holder").height())?jQuery(".camera_target_content").height():400+e-52),N.css({height:a})}else"auto"==j.height?na=N.height():(na=parseFloat(j.height),N.css({height:a}));ya(".camerarelative",V).css({width:sa,height:na}),ya(".imgLoaded",V).each(function(){var a,e,t=ya(this),i=t.attr("width"),r=t.attr("height"),o=(t.index(),t.attr("data-alignment")),s=t.attr("data-portrait");if(void 0!==o&&!1!==o&&""!==o||(o=j.alignment),void 0!==s&&!1!==s&&""!==s||(s=j.portrait),0==s||"false"==s)if(i/r<sa/na){var n=sa/i,c=.5*Math.abs(na-r*n);switch(o){case"topLeft":case"topCenter":case"topRight":a=0;break;case"centerLeft":case"center":case"centerRight":a="-"+c+"px";break;case"bottomLeft":case"bottomCenter":case"bottomRight":a="-"+2*c+"px"}t.css({height:r*n,"margin-left":0,"margin-top":a,position:"absolute",visibility:"visible",width:sa})}else{switch(n=na/r,c=.5*Math.abs(sa-i*n),o){case"topLeft":e=0;break;case"topCenter":e="-"+c+"px";break;case"topRight":e="-"+2*c+"px";break;case"centerLeft":e=0;break;case"center":e="-"+c+"px";break;case"centerRight":e="-"+2*c+"px";break;case"bottomLeft":e=0;break;case"bottomCenter":e="-"+c+"px";break;case"bottomRight":e="-"+2*c+"px"}t.css({height:na,"margin-left":e,"margin-top":0,position:"absolute",visibility:"visible",width:i*n})}else if(i/r<sa/na){switch(n=na/r,c=.5*Math.abs(sa-i*n),o){case"topLeft":e=0;break;case"topCenter":e=c+"px";break;case"topRight":e=2*c+"px";break;case"centerLeft":e=0;break;case"center":e=c+"px";break;case"centerRight":e=2*c+"px";break;case"bottomLeft":e=0;break;case"bottomCenter":e=c+"px";break;case"bottomRight":e=2*c+"px"}t.css({height:na,"margin-left":e,"margin-top":0,position:"absolute",visibility:"visible",width:i*n})}else{switch(n=sa/i,c=.5*Math.abs(na-r*n),o){case"topLeft":case"topCenter":case"topRight":a=0;break;case"centerLeft":case"center":case"centerRight":a=c+"px";break;case"bottomLeft":case"bottomCenter":case"bottomRight":a=2*c+"px"}t.css({height:r*n,"margin-left":0,"margin-top":a,position:"absolute",visibility:"visible",width:sa})}})},200),p=!0}if(ya(window).bind("resize pageshow",function(){1==p&&ca(),ya("ul",Y).animate({"margin-top":0},0,va),U.hasClass("paused")||(U.addClass("paused"),ya(".camera_stop",da).length&&(ya(".camera_stop",da).hide(),ya(".camera_play",da).show()),"none"!=G&&ya("#"+K).hide(),clearTimeout(u),u=setTimeout(function(){U.removeClass("paused"),ya(".camera_play",da).length&&(ya(".camera_play",da).hide(),ya(".camera_stop",da).show()),"none"!=G&&ya("#"+K).fadeIn()},1500))}),0==(v=Q()&&""!=j.mobileAutoAdvance?j.mobileAutoAdvance:j.autoAdvance)&&U.addClass("paused"),b=Q()&&""!=j.mobileNavHover?j.mobileNavHover:j.navigationHover,0!=U.length){var la=ya(".cameraSlide",V);la.wrapInner('<div class="camerarelative" />');var ma=j.barDirection,da=N;function ha(){ya("iframe",J).each(function(){ya(".camera_caption",J).show();var a=ya(this),e=a.attr("data-src");a.attr("src",e);var t=j.imagePath+"blank.gif",i=new Image;if(i.src=t,-1!=j.height.indexOf("%")){var r=Math.round(sa/(100/parseFloat(j.height)));na=""!=j.minHeight&&r<parseFloat(j.minHeight)?parseFloat(j.minHeight):r}else na="auto"==j.height?N.height():parseFloat(j.height);a.after(ya(i).attr({class:"imgFake",width:sa,height:na}));var o=a.clone();a.remove(),ya(i).bind("click",function(){"absolute"==ya(this).css("position")?(ya(this).remove(),-1!=e.indexOf("vimeo")||-1!=e.indexOf("youtube")?-1!=e.indexOf("?")?autoplay="&autoplay=1":autoplay="?autoplay=1":-1!=e.indexOf("dailymotion")&&(-1!=e.indexOf("?")?autoplay="&autoPlay=1":autoplay="?autoPlay=1"),o.attr("src",e+autoplay),oa=!0):(ya(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(o),o.css({position:"absolute",top:0,left:0,zIndex:9}))})})}ya("iframe",J).each(function(){var a=ya(this),e=a.attr("src");a.attr("data-src",e);var t=a.parent().index(".camera_src > div");ya(".camera_target_content .cameraContent:eq("+t+")",N).append(a)}),ha(),1==j.hover&&(Q()||J.hover(function(){U.addClass("hovered")},function(){U.removeClass("hovered")})),1==b&&(ya(r,N).animate({opacity:0},0),ya(o,N).animate({opacity:0},0),ya(s,N).animate({opacity:0},0),Q()?(J.live("vmouseover",function(){ya(r,N).animate({opacity:1},200),ya(o,N).animate({opacity:1},200),ya(s,N).animate({opacity:1},200)}),J.live("vmouseout",function(){ya(r,N).delay(500).animate({opacity:0},200),ya(o,N).delay(500).animate({opacity:0},200),ya(s,N).delay(500).animate({opacity:0},200)})):J.hover(function(){ya(r,N).animate({opacity:1},200),ya(o,N).animate({opacity:1},200),ya(s,N).animate({opacity:1},200)},function(){ya(r,N).animate({opacity:0},200),ya(o,N).animate({opacity:0},200),ya(s,N).animate({opacity:0},200)})),ya(".camera_stop",da).live("click",function(){v=!1,U.addClass("paused"),ya(".camera_stop",da).length&&(ya(".camera_stop",da).hide(),ya(".camera_play",da).show()),"none"!=G&&ya("#"+K).hide()}),ya(".camera_play",da).live("click",function(){v=!0,U.removeClass("paused"),ya(".camera_play",da).length&&(ya(".camera_play",da).hide(),ya(".camera_stop",da).show()),"none"!=G&&ya("#"+K).show()}),1==j.pauseOnClick&&ya(".camera_target_content",J).mouseup(function(){v=!1,U.addClass("paused"),ya(".camera_stop",da).hide(),ya(".camera_play",da).show(),ya("#"+K).hide()}),ya(".cameraContent, .imgFake",J).hover(function(){_=!0},function(){_=!1}),ya(".cameraContent, .imgFake",J).bind("click",function(){1==oa&&1==_&&(v=!1,ya(".camera_caption",J).hide(),U.addClass("paused"),ya(".camera_stop",da).hide(),ya(".camera_play",da).show(),ya("#"+K).hide())})}function pa(a){for(var e,t,i=a.length;i;e=parseInt(Math.random()*i),t=a[--i],a[i]=a[e],a[e]=t);return a}if("pie"!=G){switch(i.append('<span class="camera_bar_cont" />'),ya(".camera_bar_cont",i).animate({opacity:j.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":j.loaderBgColor}).append('<span id="'+K+'" />'),ya("#"+K).animate({opacity:0},0),(y=ya("#"+K)).css({position:"absolute","background-color":j.loaderColor}),j.barPosition){case"left":i.css({right:"auto",width:j.loaderStroke});break;case"right":i.css({left:"auto",width:j.loaderStroke});break;case"top":i.css({bottom:"auto",height:j.loaderStroke});break;case"bottom":i.css({top:"auto",height:j.loaderStroke})}switch(ma){case"leftToRight":case"rightToLeft":y.css({left:0,right:0,top:j.loaderPadding,bottom:j.loaderPadding});break;case"topToBottom":case"bottomToTop":y.css({left:j.loaderPadding,right:j.loaderPadding,top:0,bottom:0})}}else{var y,w,fa,ga;switch(t.append('<canvas id="'+K+'"></canvas>'),(y=document.getElementById(K)).setAttribute("width",j.pieDiameter),y.setAttribute("height",j.pieDiameter),j.piePosition){case"leftTop":w="left:0; top:0;";break;case"rightTop":w="right:0; top:0;";break;case"leftBottom":w="left:0; bottom:0;";break;case"rightBottom":w="right:0; bottom:0;"}if(y.setAttribute("style","position:absolute; z-index:1002; "+w),y&&y.getContext){var ua=y.getContext("2d");ua.rotate(1.5*Math.PI),ua.translate(-j.pieDiameter,0)}}if("none"!=G&&0!=v||(ya("#"+K).hide(),ya(".camera_canvas_wrap",da).hide()),ya(X).length){var C;for(ya(X).append('<ul class="camera_pag_ul" />'),C=0;C<ea;C++)ya(".camera_pag_ul",N).append('<li class="pag_nav_'+C+'" style="position:relative; z-index:1002"><span><span>'+C+"</span></span></li>");ya(".camera_pag_ul li",N).hover(function(){if(ya(this).addClass("camera_hover"),ya(".camera_thumb",this).length){var a=ya(".camera_thumb",this).outerWidth(),e=ya(".camera_thumb",this).outerHeight(),t=ya(this).outerWidth();ya(".camera_thumb",this).show().css({top:"-"+e+"px",left:"-"+(a-t)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200),ya(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){ya(this).removeClass("camera_hover"),ya(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){ya(this).css({marginTop:"5px"}).hide()}),ya(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){ya(this).css({marginTop:"5px"}).hide()})})}ya(Y).length?ya(X).length?(ya.each(l,function(a,e){if(""!=ya("> div",U).eq(a).attr("data-thumb")){var t=ya("> div",U).eq(a).attr("data-thumb"),i=new Image;i.src=t,ya("li.pag_nav_"+a,X).append(ya(i).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0)),ya("li.pag_nav_"+a+" > img",X).after('<div class="thumb_arrow" />'),ya("li.pag_nav_"+a+" > .thumb_arrow",X).animate({opacity:0},0)}}),N.css({marginBottom:ya(X).outerHeight()})):(ya(Y).append("<div />"),ya(Y).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'),ya("> div",Y).append("<ul />"),ya.each(l,function(a,e){if(""!=ya("> div",U).eq(a).attr("data-thumb")){var t=ya("> div",U).eq(a).attr("data-thumb"),i=new Image;i.src=t,ya("ul",Y).append('<li class="pix_thumb pix_thumb_'+a+'" />'),ya("li.pix_thumb_"+a,Y).append(ya(i).attr("class","camera_thumb"))}})):!ya(Y).length&&ya(X).length&&N.css({marginBottom:ya(X).outerHeight()});var x=!0;function va(){if(ya(Y).length&&!ya(X).length){var a,e=ya(Y).outerWidth(),t=(ya("ul > li",Y).outerWidth(),ya("li.cameracurrent",Y).length?ya("li.cameracurrent",Y).position():""),i=ya("ul > li",Y).length*ya("ul > li",Y).outerWidth(),r=ya("ul",Y).offset().left,o=ya("> div",Y).offset().left;a=r<0?"-"+(o-r):o-r,1==x&&(ya("ul",Y).width(ya("ul > li",Y).length*ya("ul > li",Y).outerWidth()),ya(Y).length&&!ya(X).lenght&&N.css({marginBottom:ya(Y).outerHeight()}),g(),ya("ul",Y).width(ya("ul > li",Y).length*ya("ul > li",Y).outerWidth()),ya(Y).length&&!ya(X).lenght&&N.css({marginBottom:ya(Y).outerHeight()})),x=!1;var s=ya("li.cameracurrent",Y).length?t.left:"",n=ya("li.cameracurrent",Y).length?t.left+ya("li.cameracurrent",Y).outerWidth():"";s<ya("li.cameracurrent",Y).outerWidth()&&(s=0),e<n-a?s+e<i?ya("ul",Y).animate({"margin-left":"-"+s+"px"},500,g):ya("ul",Y).animate({"margin-left":"-"+(ya("ul",Y).outerWidth()-e)+"px"},500,g):s-a<0?ya("ul",Y).animate({"margin-left":"-"+s+"px"},500,g):(ya("ul",Y).css({"margin-left":"auto","margin-right":"auto"}),setTimeout(g,100))}}function ba(){fa=0;var a=ya(".camera_bar_cont",da).width(),e=ya(".camera_bar_cont",da).height();if("pie"!=G)switch(ma){case"leftToRight":ya("#"+K).css({right:a});break;case"rightToLeft":ya("#"+K).css({left:a});break;case"topToBottom":ya("#"+K).css({bottom:e});break;case"bottomToTop":ya("#"+K).css({top:e})}else ua.clearRect(0,0,j.pieDiameter,j.pieDiameter)}function _a(a){U.addClass("camerasliding"),oa=!1;var o=parseFloat(ya("div.cameraSlide.cameracurrent",V).index());if(0<a)var c=a-1;else if(o==ea-1)c=0;else c=o+1;var e=ya(".cameraSlide:eq("+c+")",V),t=ya(".cameraSlide:eq("+(c+1)+")",V).addClass("cameranext");if(o!=c+1&&t.hide(),ya(".cameraContent",J).fadeOut(600),ya(".camera_caption",J).show(),ya(".camerarelative",e).append(ya("> div ",U).eq(c).find("> div.camera_effected")),ya(".camera_target_content .cameraContent:eq("+c+")",N).append(ya("> div ",U).eq(c).find("> div")),ya(".imgLoaded",e).length){if(Z.length>c+1&&!ya(".imgLoaded",t).length){var i=Z[c+1],r=new Image;r.src=i+"?"+(new Date).getTime(),t.prepend(ya(r).attr("class","imgLoaded").css("visibility","hidden")),r.onload=function(){W=r.naturalWidth,D=r.naturalHeight,ya(r).attr("data-alignment",aa[c+1]).attr("data-portrait",$[c+1]),ya(r).attr("width",W),ya(r).attr("height",D),ca()}}j.onLoaded.call(this),ya(".camera_loader",N).is(":visible")?ya(".camera_loader",N).fadeOut(400):(ya(".camera_loader",N).css({visibility:"hidden"}),ya(".camera_loader",N).fadeOut(400,function(){ya(".camera_loader",N).css({visibility:"visible"})}));var s,l,n,m,d,h=j.rows,p=j.cols,f=1,g=0,u=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");marginLeft=0,marginTop=0,opacityOnGrid=0,1==j.opacityOnGrid?opacityOnGrid=0:opacityOnGrid=1;var v=ya(" > div",U).eq(c).attr("data-fx");if("random"==(m=Q()&&""!=j.mobileFx&&"default"!=j.mobileFx?j.mobileFx:void 0!==v&&!1!==v&&"default"!==v?v:j.fx)?m=(m=pa(u))[0]:0<(m=m).indexOf(",")&&(m=(m=pa(m=(m=m.replace(/ /g,"")).split(",")))[0]),dataEasing=ya(" > div",U).eq(c).attr("data-easing"),mobileEasing=ya(" > div",U).eq(c).attr("data-mobileEasing"),d=Q()&&""!=j.mobileEasing&&"default"!=j.mobileEasing?"undefined"!=typeof mobileEasing&&!1!==mobileEasing&&"default"!==mobileEasing?mobileEasing:j.mobileEasing:"undefined"!=typeof dataEasing&&!1!==dataEasing&&"default"!==dataEasing?dataEasing:j.easing,void 0!==(s=ya(" > div",U).eq(c).attr("data-slideOn"))&&!1!==s)b=s;else if("random"==j.slideOn){var b=new Array("next","prev");b=(b=pa(b))[0]}else b=j.slideOn;var _=ya(" > div",U).eq(c).attr("data-time");l=void 0!==_&&!1!==_&&""!==_?parseFloat(_):j.time;var y=ya(" > div",U).eq(c).attr("data-transPeriod");switch(n=void 0!==y&&!1!==y&&""!==y?parseFloat(y):j.transPeriod,ya(U).hasClass("camerastarted")||(m="simpleFade",b="next",d="",n=400,ya(U).addClass("camerastarted")),m){case"simpleFade":h=p=1;break;case"curtainTopLeft":case"curtainTopRight":case"curtainBottomLeft":case"curtainBottomRight":case"curtainSliceLeft":case"curtainSliceRight":p=0==j.slicedCols?j.cols:j.slicedCols,h=1;break;case"blindCurtainTopLeft":case"blindCurtainTopRight":case"blindCurtainBottomLeft":case"blindCurtainBottomRight":case"blindCurtainSliceTop":case"blindCurtainSliceBottom":h=0==j.slicedRows?j.rows:j.slicedRows,p=1;break;case"stampede":g="-"+n;break;case"mosaic":case"mosaicReverse":g=j.gridDifference;break;case"mosaicRandom":break;case"mosaicSpiral":case"mosaicSpiralReverse":g=j.gridDifference,f=1.7;break;case"topLeftBottomRight":case"bottomRightTopLeft":case"bottomLeftTopRight":case"topRightBottomLeft":g=j.gridDifference,f=6;break;case"scrollLeft":case"scrollRight":case"scrollTop":case"scrollBottom":case"scrollHorz":h=p=1}for(var w,C,x=0,k=h*p,T=sa-Math.floor(sa/p)*p,L=na-Math.floor(na/h)*h,R=0,F=0,S=new Array,B=new Array,M=new Array;x<k;){S.push(x),B.push(x),ta.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var O=ya(".cameraappended:eq("+x+")",V);"scrollLeft"==m||"scrollRight"==m||"scrollTop"==m||"scrollBottom"==m||"scrollHorz"==m?la.eq(c).clone().show().appendTo(O):"next"==b?la.eq(c).clone().show().appendTo(O):la.eq(o).clone().show().appendTo(O),w=x%p<T?1:0,x%p==0&&(R=0),C=Math.floor(x/p)<L?1:0,O.css({height:Math.floor(na/h+C+1),left:R,top:F,width:Math.floor(sa/p+w+1)}),ya("> .cameraSlide",O).css({height:na,"margin-left":"-"+R+"px","margin-top":"-"+F+"px",width:sa}),R=R+O.width()-1,x%p==p-1&&(F=F+O.height()-1),x++}switch(m){case"curtainTopLeft":case"curtainBottomLeft":case"curtainSliceLeft":break;case"curtainTopRight":case"curtainBottomRight":case"curtainSliceRight":S=S.reverse();break;case"blindCurtainTopLeft":break;case"blindCurtainBottomLeft":S=S.reverse();break;case"blindCurtainSliceTop":case"blindCurtainTopRight":break;case"blindCurtainBottomRight":case"blindCurtainSliceBottom":S=S.reverse();break;case"stampede":S=pa(S);break;case"mosaic":break;case"mosaicReverse":S=S.reverse();break;case"mosaicRandom":S=pa(S);break;case"mosaicSpiral":var q=h/2,I=0;for(H=0;H<q;H++){for(P=A=H;P<p-H-1;P++)M[I++]=A*p+P;for(P=p-H-1,A=H;A<h-H-1;A++)M[I++]=A*p+P;for(A=h-H-1,P=p-H-1;H<P;P--)M[I++]=A*p+P;for(A=h-(P=H)-1;H<A;A--)M[I++]=A*p+P}S=M;break;case"mosaicSpiralReverse":var H;q=h/2,I=k-1;for(H=0;H<q;H++){for(P=A=H;P<p-H-1;P++)M[I--]=A*p+P;for(P=p-H-1,A=H;A<h-H-1;A++)M[I--]=A*p+P;for(A=h-H-1,P=p-H-1;H<P;P--)M[I--]=A*p+P;for(A=h-(P=H)-1;H<A;A--)M[I--]=A*p+P}S=M;break;case"topLeftBottomRight":for(var A=0;A<h;A++)for(var P=0;P<p;P++)M.push(P+A);B=M;break;case"bottomRightTopLeft":for(A=0;A<h;A++)for(P=0;P<p;P++)M.push(P+A);B=M.reverse();break;case"bottomLeftTopRight":for(A=h;0<A;A--)for(P=0;P<p;P++)M.push(P+A);B=M;break;case"topRightBottomLeft":for(A=0;A<h;A++)for(P=p;0<P;P--)M.push(P+A);B=M}ya.each(S,function(a,e){switch(w=e%p<T?1:0,e%p==0&&(R=0),C=Math.floor(e/p)<L?1:0,m){case"simpleFade":height=na,width=sa,opacityOnGrid=0;break;case"curtainTopLeft":case"curtainTopRight":height=0,width=Math.floor(sa/p+w+1),marginTop="-"+Math.floor(na/h+C+1)+"px";break;case"curtainBottomLeft":case"curtainBottomRight":height=0,width=Math.floor(sa/p+w+1),marginTop=Math.floor(na/h+C+1)+"px";break;case"curtainSliceLeft":case"curtainSliceRight":height=0,width=Math.floor(sa/p+w+1),marginTop=e%2==0?Math.floor(na/h+C+1)+"px":"-"+Math.floor(na/h+C+1)+"px";break;case"blindCurtainTopLeft":height=Math.floor(na/h+C+1),width=0,marginLeft="-"+Math.floor(sa/p+w+1)+"px";break;case"blindCurtainTopRight":height=Math.floor(na/h+C+1),width=0,marginLeft=Math.floor(sa/p+w+1)+"px";break;case"blindCurtainBottomLeft":height=Math.floor(na/h+C+1),width=0,marginLeft="-"+Math.floor(sa/p+w+1)+"px";break;case"blindCurtainBottomRight":height=Math.floor(na/h+C+1),width=0,marginLeft=Math.floor(sa/p+w+1)+"px";break;case"blindCurtainSliceBottom":case"blindCurtainSliceTop":height=Math.floor(na/h+C+1),width=0,marginLeft=e%2==0?"-"+Math.floor(sa/p+w+1)+"px":Math.floor(sa/p+w+1)+"px";break;case"stampede":height=0,width=0,marginLeft=.2*sa*(a%p-(p-Math.floor(p/2)))+"px",marginTop=.2*na*(Math.floor(a/p)+1-(h-Math.floor(h/2)))+"px";break;case"mosaic":height=0,width=0;break;case"mosaicReverse":height=0,width=0,marginLeft=Math.floor(sa/p+w+1)+"px",marginTop=Math.floor(na/h+C+1)+"px";break;case"mosaicRandom":case"mosaicSpiral":case"mosaicSpiralReverse":height=0,width=0,marginLeft=.5*Math.floor(sa/p+w+1)+"px",marginTop=.5*Math.floor(na/h+C+1)+"px";break;case"topLeftBottomRight":height=0,width=0;break;case"bottomRightTopLeft":height=0,width=0,marginLeft=Math.floor(sa/p+w+1)+"px",marginTop=Math.floor(na/h+C+1)+"px";break;case"bottomLeftTopRight":height=0,width=0,marginLeft=0,marginTop=Math.floor(na/h+C+1)+"px";break;case"topRightBottomLeft":height=0,width=0,marginLeft=Math.floor(sa/p+w+1)+"px",marginTop=0;break;case"scrollRight":height=na,width=sa,marginLeft=-sa;break;case"scrollLeft":height=na,width=sa,marginLeft=sa;break;case"scrollTop":height=na,width=sa,marginTop=na;break;case"scrollBottom":height=na,width=sa,marginTop=-na;break;case"scrollHorz":height=na,width=sa,marginLeft=0==o&&c==ea-1?-sa:o<c||o==ea-1&&0==c?sa:-sa}var t=ya(".cameraappended:eq("+e+")",V);void 0!==ia&&(clearInterval(ia),clearTimeout(ra),ra=setTimeout(ba,n+g)),ya(X).length&&(ya(".camera_pag li",N).removeClass("cameracurrent"),ya(".camera_pag li",N).eq(c).addClass("cameracurrent")),ya(Y).length&&(ya("li",Y).removeClass("cameracurrent"),ya("li",Y).eq(c).addClass("cameracurrent"),ya("li",Y).not(".cameracurrent").find("img").animate({opacity:.5},0),ya("li.cameracurrent img",Y).animate({opacity:1},0),ya("li",Y).hover(function(){ya("img",this).stop(!0,!1).animate({opacity:1},150)},function(){ya(this).hasClass("cameracurrent")||ya("img",this).stop(!0,!1).animate({opacity:.5},150)}));var i=parseFloat(n)+parseFloat(g);function r(){if(ya(this).addClass("cameraeased"),0<=ya(".cameraeased",V).length&&ya(Y).css({visibility:"visible"}),ya(".cameraeased",V).length==k){va(),ya(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",J).each(function(){ya(this).css("visibility","hidden")}),la.eq(c).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent"),la.eq(o).css("z-index","1").removeClass("cameracurrent"),ya(".cameraContent",J).eq(c).addClass("cameracurrent"),0<=o&&ya(".cameraContent",J).eq(o).removeClass("cameracurrent"),j.onEndTransition.call(this),"hide"!=ya("> div",U).eq(c).attr("data-video")&&ya(".cameraContent.cameracurrent .imgFake",J).length&&ya(".cameraContent.cameracurrent .imgFake",J).click();var n=la.eq(c).find(".fadeIn").length,s=ya(".cameraContent",J).eq(c).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;0!=n&&ya(".cameraSlide.cameracurrent .fadeIn",J).each(function(){if(""!=ya(this).attr("data-easing"))var a=ya(this).attr("data-easing");else a=d;var e=ya(this);if(void 0===e.attr("data-outerWidth")||!1===e.attr("data-outerWidth")||""===e.attr("data-outerWidth")){var t=e.outerWidth();e.attr("data-outerWidth",t)}else t=e.attr("data-outerWidth");if(void 0===e.attr("data-outerHeight")||!1===e.attr("data-outerHeight")||""===e.attr("data-outerHeight")){var i=e.outerHeight();e.attr("data-outerHeight",i)}else i=e.attr("data-outerHeight");var r=e.position(),o=(r.left,r.top,e.attr("class")),s=e.index();e.parents(".camerarelative").outerHeight(),e.parents(".camerarelative").outerWidth();-1!=o.indexOf("fadeIn")?e.animate({opacity:0},0).css("visibility","visible").delay(l/n*(.1*(s-1))).animate({opacity:1},l/n*.15,a):e.css("visibility","visible")}),ya(".cameraContent.cameracurrent",J).show(),0!=s&&ya(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",J).each(function(){if(""!=ya(this).attr("data-easing"))var a=ya(this).attr("data-easing");else a=d;var e=ya(this),t=e.position(),i=(t.left,t.top,e.attr("class")),r=e.index(),o=e.outerHeight();-1!=i.indexOf("moveFromLeft")?(e.css({left:"-"+sa+"px",right:"auto"}),e.css("visibility","visible").delay(l/s*(.1*(r-1))).animate({left:t.left},l/s*.15,a)):-1!=i.indexOf("moveFromRight")?(e.css({left:sa+"px",right:"auto"}),e.css("visibility","visible").delay(l/s*(.1*(r-1))).animate({left:t.left},l/s*.15,a)):-1!=i.indexOf("moveFromTop")?(e.css({top:"-"+na+"px",bottom:"auto"}),e.css("visibility","visible").delay(l/s*(.1*(r-1))).animate({top:t.top},l/s*.15,a,function(){e.css({top:"auto",bottom:0})})):-1!=i.indexOf("moveFromBottom")?(e.css({top:na+"px",bottom:"auto"}),e.css("visibility","visible").delay(l/s*(.1*(r-1))).animate({top:t.top},l/s*.15,a)):-1!=i.indexOf("fadeFromLeft")?(e.animate({opacity:0},0).css({left:"-"+sa+"px",right:"auto"}),e.css("visibility","visible").delay(l/s*(.1*(r-1))).animate({left:t.left,opacity:1},l/s*.15,a)):-1!=i.indexOf("fadeFromRight")?(e.animate({opacity:0},0).css({left:sa+"px",right:"auto"}),e.css("visibility","visible").delay(l/s*(.1*(r-1))).animate({left:t.left,opacity:1},l/s*.15,a)):-1!=i.indexOf("fadeFromTop")?(e.animate({opacity:0},0).css({top:"-"+na+"px",bottom:"auto"}),e.css("visibility","visible").delay(l/s*(.1*(r-1))).animate({top:t.top,opacity:1},l/s*.15,a,function(){e.css({top:"auto",bottom:0})})):-1!=i.indexOf("fadeFromBottom")?(e.animate({opacity:0},0).css({bottom:"-"+o+"px"}),e.css("visibility","visible").delay(l/s*(.1*(r-1))).animate({bottom:"0",opacity:1},l/s*.15,a)):-1!=i.indexOf("fadeIn")?e.animate({opacity:0},0).css("visibility","visible").delay(l/s*(.1*(r-1))).animate({opacity:1},l/s*.15,a):e.css("visibility","visible")}),ya(".cameraappended",V).remove(),U.removeClass("camerasliding"),la.eq(o).hide();var a,e=ya(".camera_bar_cont",da).width(),t=ya(".camera_bar_cont",da).height();a="pie"!=G?.05:.005,ya("#"+K).animate({opacity:j.loaderOpacity},200),ia=setInterval(function(){if(U.hasClass("stopped")&&clearInterval(ia),"pie"!=G)switch(fa<=1.002&&!U.hasClass("stopped")&&!U.hasClass("paused")&&!U.hasClass("hovered")?fa+=a:fa<=1&&(U.hasClass("stopped")||U.hasClass("paused")||U.hasClass("stopped")||U.hasClass("hovered"))?fa=fa:U.hasClass("stopped")||U.hasClass("paused")||U.hasClass("hovered")||(clearInterval(ia),ha(),ya("#"+K).animate({opacity:0},200,function(){clearTimeout(ra),ra=setTimeout(ba,i),_a(),j.onStartLoading.call(this)})),ma){case"leftToRight":ya("#"+K).animate({right:e-e*fa},l*a,"linear");break;case"rightToLeft":ya("#"+K).animate({left:e-e*fa},l*a,"linear");break;case"topToBottom":case"bottomToTop":ya("#"+K).animate({bottom:t-t*fa},l*a,"linear")}else ga=fa,ua.clearRect(0,0,j.pieDiameter,j.pieDiameter),ua.globalCompositeOperation="destination-over",ua.beginPath(),ua.arc(j.pieDiameter/2,j.pieDiameter/2,j.pieDiameter/2-j.loaderStroke,0,2*Math.PI,!1),ua.lineWidth=j.loaderStroke,ua.strokeStyle=j.loaderBgColor,ua.stroke(),ua.closePath(),ua.globalCompositeOperation="source-over",ua.beginPath(),ua.arc(j.pieDiameter/2,j.pieDiameter/2,j.pieDiameter/2-j.loaderStroke,0,2*Math.PI*ga,!1),ua.lineWidth=j.loaderStroke-2*j.loaderPadding,ua.strokeStyle=j.loaderColor,ua.stroke(),ua.closePath(),fa<=1.002&&!U.hasClass("stopped")&&!U.hasClass("paused")&&!U.hasClass("hovered")?fa+=a:fa<=1&&(U.hasClass("stopped")||U.hasClass("paused")||U.hasClass("hovered"))?fa=fa:U.hasClass("stopped")||U.hasClass("paused")||U.hasClass("hovered")||(clearInterval(ia),ha(),ya("#"+K+", .camera_canvas_wrap",da).animate({opacity:0},200,function(){clearTimeout(ra),ra=setTimeout(ba,i),_a(),j.onStartLoading.call(this)}))},l*a)}}"scrollLeft"==m||"scrollRight"==m||"scrollTop"==m||"scrollBottom"==m||"scrollHorz"==m?(j.onStartTransition.call(this),i=0,t.delay((n+g)/k*B[a]*f*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(na/h+C+1),"margin-top":0,"margin-left":0,width:Math.floor(sa/p+w+1)},n-g,d,r),la.eq(o).delay((n+g)/k*B[a]*f*.5).animate({"margin-left":-1*marginLeft,"margin-top":-1*marginTop},n-g,d,function(){ya(this).css({"margin-top":0,"margin-left":0})})):(j.onStartTransition.call(this),i=parseFloat(n)+parseFloat(g),"next"==b?t.delay((n+g)/k*B[a]*f*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(na/h+C+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(sa/p+w+1)},n-g,d,r):(la.eq(c).show().css("z-index","999").addClass("cameracurrent"),la.eq(o).css("z-index","1").removeClass("cameracurrent"),ya(".cameraContent",J).eq(c).addClass("cameracurrent"),ya(".cameraContent",J).eq(o).removeClass("cameracurrent"),t.delay((n+g)/k*B[a]*f*.5).css({display:"block",height:Math.floor(na/h+C+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(sa/p+w+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},n-g,d,r)))})}else{var W,D,E=Z[c],z=new Image;z.src=E+"?"+(new Date).getTime(),e.css("visibility","hidden"),e.prepend(ya(z).attr("class","imgLoaded").css("visibility","hidden")),ya(z).get(0).complete&&"0"!=W&&"0"!=D&&void 0!==W&&!1!==W&&void 0!==D&&!1!==D||(ya(".camera_loader",N).delay(500).fadeIn(400),z.onload=function(){W=z.naturalWidth,D=z.naturalHeight,ya(z).attr("data-alignment",aa[c]).attr("data-portrait",$[c]),ya(z).attr("width",W),ya(z).attr("height",D),V.find(".cameraSlide_"+c).hide().css("visibility","visible"),ca(),_a(c+1)})}}ya(s).length&&(ya(s).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'),1==v?(ya(".camera_play",da).hide(),ya(".camera_stop",da).show()):(ya(".camera_stop",da).hide(),ya(".camera_play",da).show())),ba(),ya(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",J).each(function(){ya(this).css("visibility","hidden")}),j.onStartLoading.call(this),_a(),ya(r).length&&ya(r).click(function(){if(!U.hasClass("camerasliding")){var a=parseFloat(ya(".cameraSlide.cameracurrent",V).index());clearInterval(ia),ha(),ya("#"+K+", .camera_canvas_wrap",N).animate({opacity:0},0),ba(),_a(0!=a?a:ea),j.onStartLoading.call(this)}}),ya(o).length&&ya(o).click(function(){if(!U.hasClass("camerasliding")){var a=parseFloat(ya(".cameraSlide.cameracurrent",V).index());clearInterval(ia),ha(),ya("#"+K+", .camera_canvas_wrap",da).animate({opacity:0},0),ba(),_a(a==ea-1?1:a+2),j.onStartLoading.call(this)}}),Q()&&(J.bind("swipeleft",function(a){if(!U.hasClass("camerasliding")){var e=parseFloat(ya(".cameraSlide.cameracurrent",V).index());clearInterval(ia),ha(),ya("#"+K+", .camera_canvas_wrap",da).animate({opacity:0},0),ba(),_a(e==ea-1?1:e+2),j.onStartLoading.call(this)}}),J.bind("swiperight",function(a){if(!U.hasClass("camerasliding")){var e=parseFloat(ya(".cameraSlide.cameracurrent",V).index());clearInterval(ia),ha(),ya("#"+K+", .camera_canvas_wrap",da).animate({opacity:0},0),ba(),_a(0!=e?e:ea),j.onStartLoading.call(this)}})),ya(X).length&&ya(".camera_pag li",N).click(function(){if(!U.hasClass("camerasliding")){var a=parseFloat(ya(this).index());a!=parseFloat(ya(".cameraSlide.cameracurrent",V).index())&&(clearInterval(ia),ha(),ya("#"+K+", .camera_canvas_wrap",da).animate({opacity:0},0),ba(),_a(a+1),j.onStartLoading.call(this))}}),ya(Y).length&&(ya(".pix_thumb img",Y).click(function(){if(!U.hasClass("camerasliding")){var a=parseFloat(ya(this).parents("li").index());a!=parseFloat(ya(".cameracurrent",V).index())&&(clearInterval(ia),ha(),ya("#"+K+", .camera_canvas_wrap",da).animate({opacity:0},0),ya(".pix_thumb",Y).removeClass("cameracurrent"),ya(this).parents("li").addClass("cameracurrent"),ba(),_a(a+1),va(),j.onStartLoading.call(this))}}),ya(".camera_thumbs_cont .camera_prevThumbs",da).hover(function(){ya(this).stop(!0,!1).animate({opacity:1},250)},function(){ya(this).stop(!0,!1).animate({opacity:.7},250)}),ya(".camera_prevThumbs",da).click(function(){var e=0,a=(ya(Y).outerWidth(),ya("ul",Y).offset().left),t=ya("> div",Y).offset().left-a;ya(".camera_visThumb",Y).each(function(){var a=ya(this).outerWidth();e+=a}),0<t-e?ya("ul",Y).animate({"margin-left":"-"+(t-e)+"px"},500,g):ya("ul",Y).animate({"margin-left":0},500,g)}),ya(".camera_thumbs_cont .camera_nextThumbs",da).hover(function(){ya(this).stop(!0,!1).animate({opacity:1},250)},function(){ya(this).stop(!0,!1).animate({opacity:.7},250)}),ya(".camera_nextThumbs",da).click(function(){var e=0,a=ya(Y).outerWidth(),t=ya("ul",Y).outerWidth(),i=ya("ul",Y).offset().left,r=ya("> div",Y).offset().left-i;ya(".camera_visThumb",Y).each(function(){var a=ya(this).outerWidth();e+=a}),r+e+e<t?ya("ul",Y).animate({"margin-left":"-"+(r+e)+"px"},500,g):ya("ul",Y).animate({"margin-left":"-"+(t-a)+"px"},500,g)}))}}(jQuery),function(t){t.fn.cameraStop=function(){var a=t(this),e=t(".camera_src",a);a.index();if(e.addClass("stopped"),t(".camera_showcommands").length)t(".camera_thumbs_wrap",a);else;}}(jQuery),function(e){e.fn.cameraPause=function(){var a=e(this);e(".camera_src",a).addClass("paused")}}(jQuery),function(t){t.fn.cameraResume=function(){var a=t(this),e=t(".camera_src",a);"undefined"!=typeof autoAdv&&!0===autoAdv||e.removeClass("paused")}}(jQuery);
var mainNav=function(){var s={obj_nav:$(arguments[0])||$("nav"),settings:{show_delay:0,hide_delay:0,_ie6:/MSIE 6.+Win/.test(navigator.userAgent),_ie7:/MSIE 7.+Win/.test(navigator.userAgent)},init:function(t,n){t.lists=t.childElements(),t.lists.each(function(e,i){s.handlNavElement(e),(s.settings._ie6||s.settings._ie7)&&n&&s.ieFixZIndex(e,i,t.lists.size())}),s.settings._ie6&&!n&&document.execCommand("BackgroundImageCache",!1,!0)},handlNavElement:function(e){void 0!==e&&(e.onmouseover=function(){s.fireNavEvent(this,!0)},e.onmouseout=function(){s.fireNavEvent(this,!1)},e.down("ul")&&s.init(e.down("ul"),!0))},ieFixZIndex:function(e,i,t){-1==e.tagName.toString().toLowerCase().indexOf("iframe")?e.style.zIndex=t-i:(e.onmouseover="null",e.onmouseout="null")},fireNavEvent:function(e,i){e.down("a")&&(i?(e.addClassName("over"),e.down("a").addClassName("over"),e.childElements()[1]&&s.show(e.childElements()[1])):(e.removeClassName("over"),e.down("a").removeClassName("over"),e.childElements()[1]&&s.hide(e.childElements()[1])))},show:function(i){i.hide_time_id&&clearTimeout(i.hide_time_id),i.show_time_id=setTimeout(function(){if(!i.hasClassName("shown-sub")){i.addClassName("shown-sub");var e=0;jQuery(i).find(".level0 > .catagory_children > .level1").each(function(){jQuery(this).height()>e&&(e=jQuery(this).height())}).height(e)}},s.settings.show_delay)},hide:function(e){e.show_time_id&&clearTimeout(e.show_time_id),e.hide_time_id=setTimeout(function(){e.hasClassName("shown-sub")&&e.removeClassName("shown-sub")},s.settings.hide_delay)}};arguments[1]&&(s.settings=Object.extend(s.settings,arguments[1])),s.obj_nav&&s.init(s.obj_nav,!1)};document.observe("dom:loaded",function(){mainNav("nav",{show_delay:"150",hide_delay:"500"});var e,i=/iPhone|iPad|iPod/i.test(navigator.userAgent);(e=jQuery)(function(){e(".grid-full > li.parent").hover(function(){e(this).find(">.level-top").stop(!0,!0).delay(0).animate({height:"show",opacity:1},{duration:200})},function(){e(this).find(">.level-top").stop(!0,!0).animate({height:"hide",opacity:0},{duration:200}),i&&e(this).find(">.level-top").stop().css({display:"none"})})})}),jQuery(document).ready(function(){990<jQuery(window).width()&&jQuery(".imgcateg").each(function(){var e=jQuery(this).data("src");jQuery(this).attr("src",e)})});
document.observe("dom:loaded", function () {
    Event.on(
        document.body,
        'click',
        '#amprivacy-checkbox a, #amprivacy-popup .cross',
        togglePrivacyPopup
    );

    var policyButton = $$('[data-role="accept-policy"]');

    if (0 < policyButton.length) {
        policyButton[0].observe('click', acceptPolicy);
    }

    function togglePrivacyPopup(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
            $('amprivacy-popup').toggle();
        }
    }

    function acceptPolicy(e) {
        var checkbox = $$('#amprivacy-checkbox input[type="checkbox"]');
        checkbox.forEach(function (box) {
            box.checked = true;
            box.dispatchEvent(new Event('change'));
        });

        togglePrivacyPopup(e);
    }
});

document.observe("dom:loaded", function () {
    var cookieBlock = document.getElementById('amgdpr-cookie-block');

    if (!Mage.Cookies.get('amgdpr_allow_cookies') && cookieBlock) {
        cookieBlock.style.display = "block";
    }
});
jQuery.fn.prepare_slider=function(){var i=0,t=0,e=0,r=0,l=jQuery("#slider_list > li"),s=l.outerWidth(!0);l.each(function(e){i+=jQuery(this).outerWidth(!0),t++}),e=t-4,total_clicks=t-4,jQuery("#slider_list").css("position","relative"),jQuery("#slider_list").css("left","0px"),jQuery("#slider_list").css("width",i+"px"),jQuery("#slider_list li:last").addClass("last"),jQuery("#slider_list li:first").addClass("first");var u=!1,n=function(){u=!1};jQuery("#left_but").click(function(){cur_offset=jQuery("#slider_list").position().left,u||(0<r?(u=!0,jQuery("#slider_list").animate({left:cur_offset+s+"px"},700,"linear",n),e++,r--):(u=!0,jQuery("#slider_list").animate({left:-s*total_clicks+"px"},700,"linear",n),e=0,r=total_clicks))}),jQuery("#right_but").click(function(){u||(cur_offset=jQuery("#slider_list").position().left,0<e?(u=!0,jQuery("#slider_list").animate({left:cur_offset-s+"px"},700,"linear",n),e--,r++):(u=!0,jQuery("#slider_list").animate({left:"0px"},700,"linear",n),r=0,e=total_clicks))})},jQuery.fn.over=function(){jQuery(this).hover(function(){jQuery(this).addClass("over")},function(){jQuery(this).removeClass("over")})},jQuery.fn.intro=function(){var i=jQuery(".slider .box-right"),e=jQuery(".slider .box-right, .slider .box-left"),t=1,r=jQuery("#slider_list > li").size(),l=!1,s=!0;setTimeout(function(){!function e(){0==l&&1==s?t<=r&&(i.trigger("click"),t++,setTimeout(function(){e()},7e3)):(setTimeout(function(){e()},7e3),l=!1)}()},7e3),e.each(function(){jQuery(this).bind("mouseup",function(){s=l=!0})}),jQuery(window).blur(function(){s=!1}).focus(function(){s=!0})},document.observe("dom:loaded",function(){$$(".box-top").each(function(e){e.select("#slider_list").each(function(e){var i=e.select("li"),t=0;i.each(function(e){e.getHeight()>t&&(t=e.getHeight())}),e.select("li .product-name").each(function(e){var i=e.up("li").getHeight()-e.getHeight();e.setStyle({height:t-i+"px"})})})})}),jQuery(window).bind("load",function(){jQuery().prepare_slider(),jQuery().intro(),jQuery("#slider_list > li").over()});
!function(s){s.fn.productListGalleryThumbs=function(){return this.each(function(){s(this).find(".product-thumbs");s(this).find(".product-thumb a").click(function(t){t.preventDefault();var i=s(this).find("img").attr("src");s(this).closest(".product-image-container").find(".product-image img").stop().fadeOut(200,function(){s(this).attr("src",i),s(this).fadeIn(200)}),s(this).addClass("active"),s(this).parent().siblings().find("a").removeClass("active")})})}}(jQuery),jQuery(document).ready(function(){jQuery(".products-grid").productListGalleryThumbs(),jQuery(".products-list").productListGalleryThumbs()});
