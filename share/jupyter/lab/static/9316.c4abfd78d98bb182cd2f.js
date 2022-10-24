(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9316],{65993:(r,e,n)=>{"use strict";n.d(e,{Z:()=>s});var o=n(94015);var t=n.n(o);var a=n(23645);var c=n.n(a);var i=c()(t());i.push([r.id,'/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-dark.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-xq-dark div.CodeMirror-selected { background: #27007A; }\n.cm-s-xq-dark .CodeMirror-line::selection, .cm-s-xq-dark .CodeMirror-line > span::selection, .cm-s-xq-dark .CodeMirror-line > span > span::selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-line::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-xq-dark .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-xq-dark .CodeMirror-guttermarker-subtle { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-xq-dark span.cm-keyword { color: #FFBD40; }\n.cm-s-xq-dark span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-dark span.cm-number { color: #164; }\n.cm-s-xq-dark span.cm-def { color: #FFF; text-decoration:underline; }\n.cm-s-xq-dark span.cm-variable { color: #FFF; }\n.cm-s-xq-dark span.cm-variable-2 { color: #EEE; }\n.cm-s-xq-dark span.cm-variable-3, .cm-s-xq-dark span.cm-type { color: #DDD; }\n.cm-s-xq-dark span.cm-property {}\n.cm-s-xq-dark span.cm-operator {}\n.cm-s-xq-dark span.cm-comment { color: gray; }\n.cm-s-xq-dark span.cm-string { color: #9FEE00; }\n.cm-s-xq-dark span.cm-meta { color: yellow; }\n.cm-s-xq-dark span.cm-qualifier { color: #FFF700; }\n.cm-s-xq-dark span.cm-builtin { color: #30a; }\n.cm-s-xq-dark span.cm-bracket { color: #cc7; }\n.cm-s-xq-dark span.cm-tag { color: #FFBD40; }\n.cm-s-xq-dark span.cm-attribute { color: #FFF700; }\n.cm-s-xq-dark span.cm-error { color: #f00; }\n\n.cm-s-xq-dark .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-xq-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n',"",{version:3,sources:["webpack://./node_modules/codemirror/theme/xq-dark.css"],names:[],mappings:"AAAA;;;;;;;;;;;;;;;;;;;;;CAqBC;AACD,2BAA2B,mBAAmB,EAAE,cAAc,EAAE;AAChE,wCAAwC,mBAAmB,EAAE;AAC7D,uJAAuJ,kCAAkC,EAAE;AAC3L,sKAAsK,kCAAkC,EAAE;AAC1M,oCAAoC,mBAAmB,EAAE,4BAA4B,EAAE;AACvF,yCAAyC,cAAc,EAAE;AACzD,gDAAgD,cAAc,EAAE;AAChE,uCAAuC,cAAc,EAAE;AACvD,mCAAmC,4BAA4B,EAAE;;AAEjE,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,cAAc,EAAE;AAC7C,+BAA+B,WAAW,EAAE;AAC5C,4BAA4B,WAAW,EAAE,yBAAyB,EAAE;AACpE,iCAAiC,WAAW,EAAE;AAC9C,mCAAmC,WAAW,EAAE;AAChD,+DAA+D,WAAW,EAAE;AAC5E,gCAAgC;AAChC,gCAAgC;AAChC,gCAAgC,WAAW,EAAE;AAC7C,+BAA+B,cAAc,EAAE;AAC/C,6BAA6B,aAAa,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,gCAAgC,WAAW,EAAE;AAC7C,gCAAgC,WAAW,EAAE;AAC7C,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,8BAA8B,WAAW,EAAE;;AAE3C,kDAAkD,mBAAmB,EAAE;AACvE,4CAA4C,sBAAsB,EAAE,sBAAsB,EAAE",sourcesContent:['/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-dark.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-xq-dark div.CodeMirror-selected { background: #27007A; }\n.cm-s-xq-dark .CodeMirror-line::selection, .cm-s-xq-dark .CodeMirror-line > span::selection, .cm-s-xq-dark .CodeMirror-line > span > span::selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-line::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span::-moz-selection, .cm-s-xq-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(39, 0, 122, 0.99); }\n.cm-s-xq-dark .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-xq-dark .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-xq-dark .CodeMirror-guttermarker-subtle { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-xq-dark .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-xq-dark span.cm-keyword { color: #FFBD40; }\n.cm-s-xq-dark span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-dark span.cm-number { color: #164; }\n.cm-s-xq-dark span.cm-def { color: #FFF; text-decoration:underline; }\n.cm-s-xq-dark span.cm-variable { color: #FFF; }\n.cm-s-xq-dark span.cm-variable-2 { color: #EEE; }\n.cm-s-xq-dark span.cm-variable-3, .cm-s-xq-dark span.cm-type { color: #DDD; }\n.cm-s-xq-dark span.cm-property {}\n.cm-s-xq-dark span.cm-operator {}\n.cm-s-xq-dark span.cm-comment { color: gray; }\n.cm-s-xq-dark span.cm-string { color: #9FEE00; }\n.cm-s-xq-dark span.cm-meta { color: yellow; }\n.cm-s-xq-dark span.cm-qualifier { color: #FFF700; }\n.cm-s-xq-dark span.cm-builtin { color: #30a; }\n.cm-s-xq-dark span.cm-bracket { color: #cc7; }\n.cm-s-xq-dark span.cm-tag { color: #FFBD40; }\n.cm-s-xq-dark span.cm-attribute { color: #FFF700; }\n.cm-s-xq-dark span.cm-error { color: #f00; }\n\n.cm-s-xq-dark .CodeMirror-activeline-background { background: #27282E; }\n.cm-s-xq-dark .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n'],sourceRoot:""}]);const s=i},23645:r=>{"use strict";r.exports=function(r){var e=[];e.toString=function e(){return this.map((function(e){var n=r(e);if(e[2]){return"@media ".concat(e[2]," {").concat(n,"}")}return n})).join("")};e.i=function(r,n,o){if(typeof r==="string"){r=[[null,r,""]]}var t={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){t[c]=true}}}for(var i=0;i<r.length;i++){var s=[].concat(r[i]);if(o&&t[s[0]]){continue}if(n){if(!s[2]){s[2]=n}else{s[2]="".concat(n," and ").concat(s[2])}}e.push(s)}};return e}},94015:r=>{"use strict";function e(r,e){return c(r)||a(r,e)||o(r,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(r,e){if(!r)return;if(typeof r==="string")return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor)n=r.constructor.name;if(n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,e)}function t(r,e){if(e==null||e>r.length)e=r.length;for(var n=0,o=new Array(e);n<e;n++){o[n]=r[n]}return o}function a(r,e){var n=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(n==null)return;var o=[];var t=true;var a=false;var c,i;try{for(n=n.call(r);!(t=(c=n.next()).done);t=true){o.push(c.value);if(e&&o.length===e)break}}catch(s){a=true;i=s}finally{try{if(!t&&n["return"]!=null)n["return"]()}finally{if(a)throw i}}return o}function c(r){if(Array.isArray(r))return r}r.exports=function r(n){var o=e(n,4),t=o[1],a=o[3];if(typeof btoa==="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a))));var i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c);var s="/*# ".concat(i," */");var A=a.sources.map((function(r){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(r," */")}));return[t].concat(A).concat([s]).join("\n")}return[t].join("\n")}},9316:(r,e,n)=>{"use strict";n.r(e);n.d(e,{default:()=>s});var o=n(93379);var t=n.n(o);var a=n(65993);var c={};c.insert="head";c.singleton=false;var i=t()(a.Z,c);const s=a.Z.locals||{}},93379:(r,e,n)=>{"use strict";var o=function r(){var e;return function r(){if(typeof e==="undefined"){e=Boolean(window&&document&&document.all&&!window.atob)}return e}}();var t=function r(){var e={};return function r(n){if(typeof e[n]==="undefined"){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement){try{o=o.contentDocument.head}catch(t){o=null}}e[n]=o}return e[n]}}();var a=[];function c(r){var e=-1;for(var n=0;n<a.length;n++){if(a[n].identifier===r){e=n;break}}return e}function i(r,e){var n={};var o=[];for(var t=0;t<r.length;t++){var i=r[t];var s=e.base?i[0]+e.base:i[0];var A=n[s]||0;var d="".concat(s," ").concat(A);n[s]=A+1;var l=c(d);var m={css:i[1],media:i[2],sourceMap:i[3]};if(l!==-1){a[l].references++;a[l].updater(m)}else{a.push({identifier:d,updater:p(m,e),references:1})}o.push(d)}return o}function s(r){var e=document.createElement("style");var o=r.attributes||{};if(typeof o.nonce==="undefined"){var a=true?n.nc:0;if(a){o.nonce=a}}Object.keys(o).forEach((function(r){e.setAttribute(r,o[r])}));if(typeof r.insert==="function"){r.insert(e)}else{var c=t(r.insert||"head");if(!c){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}c.appendChild(e)}return e}function A(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var d=function r(){var e=[];return function r(n,o){e[n]=o;return e.filter(Boolean).join("\n")}}();function l(r,e,n,o){var t=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(r.styleSheet){r.styleSheet.cssText=d(e,t)}else{var a=document.createTextNode(t);var c=r.childNodes;if(c[e]){r.removeChild(c[e])}if(c.length){r.insertBefore(a,c[e])}else{r.appendChild(a)}}}function m(r,e,n){var o=n.css;var t=n.media;var a=n.sourceMap;if(t){r.setAttribute("media",t)}else{r.removeAttribute("media")}if(a&&typeof btoa!=="undefined"){o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")}if(r.styleSheet){r.styleSheet.cssText=o}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(o))}}var u=null;var f=0;function p(r,e){var n;var o;var t;if(e.singleton){var a=f++;n=u||(u=s(e));o=l.bind(null,n,a,false);t=l.bind(null,n,a,true)}else{n=s(e);o=m.bind(null,n,e);t=function r(){A(n)}}o(r);return function e(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap){return}o(r=n)}else{t()}}}r.exports=function(r,e){e=e||{};if(!e.singleton&&typeof e.singleton!=="boolean"){e.singleton=o()}r=r||[];var n=i(r,e);return function r(o){o=o||[];if(Object.prototype.toString.call(o)!=="[object Array]"){return}for(var t=0;t<n.length;t++){var s=n[t];var A=c(s);a[A].references--}var d=i(o,e);for(var l=0;l<n.length;l++){var m=n[l];var u=c(m);if(a[u].references===0){a[u].updater();a.splice(u,1)}}n=d}}}}]);
//# sourceMappingURL=9316.c4abfd78d98bb182cd2f.js.map?v=c4abfd78d98bb182cd2f