/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var i=e.document,t=function(){return e.URL||e.webkitURL||e},n=i.createElementNS("http://www.w3.org/1999/xhtml","a"),l="download"in n,s=/constructor/i.test(e.HTMLElement)||e.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent),o=function(i){(e.setImmediate||e.setTimeout)((function(){throw i}),0)},I=function(e){setTimeout((function(){"string"==typeof e?t().revokeObjectURL(e):e.remove()}),4e4)},r=function(e,i,t){for(var n=(i=[].concat(i)).length;n--;){var l=e["on"+i[n]];if("function"==typeof l)try{l.call(e,t||e)}catch(e){o(e)}}},_=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},C=function(i,o,C){C||(i=_(i));var c,g=this,h="application/octet-stream"===i.type,u=function(){r(g,"writestart progress write writeend".split(" "))};if(g.readyState=g.INIT,l)return c=t().createObjectURL(i),void setTimeout((function(){n.href=c,n.download=o,function(e){var i=new MouseEvent("click");e.dispatchEvent(i)}(n),u(),I(c),g.readyState=g.DONE}));!function(){if((a||h&&s)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var i=a?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(i,"_blank")||(e.location.href=i),i=void 0,g.readyState=g.DONE,u()},n.readAsDataURL(i),void(g.readyState=g.INIT)}(c||(c=t().createObjectURL(i)),h)?e.location.href=c:e.open(c,"_blank")||(e.location.href=c);g.readyState=g.DONE,u(),I(c)}()},c=C.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,i,t){return i=i||e.name||"download",t||(e=_(e)),navigator.msSaveOrOpenBlob(e,i)}:(c.abort=function(){},c.readyState=c.INIT=0,c.WRITING=1,c.DONE=2,c.error=c.onwritestart=c.onprogress=c.onwrite=c.onabort=c.onerror=c.onwriteend=null,function(e,i,t){return new C(e,i||e.name||"download",t)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define("FileSaver.js",(function(){return saveAs})),"function"==typeof define&&define.__amd&&(define.amd=define.__amd,delete define.__amd);