(()=>{var e={9:(e,r,a)=>{var i=a(115);e.exports=function(e){var r,n="";n=n+'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>United-fleet</title></head><body id="body" lang="ru">'+(null==(r=a(367).call(this,e))?"":r)+'<main id="main"> <div id="background"></div>';for(let e=0;e<6;e++)n+='<section class="heading"><div class="container"><div class="table"></div><div class="angle-decore angle-parent angle-decore-LU"><div class="angle-decore sub-angle sub-angle-decore-LU"></div></div><div class="angle-decore angle-parent angle-decore-RU"><div class="angle-decore sub-angle sub-angle-decore-RU"></div></div><div class="angle-decore angle-parent angle-decore-LD"><div class="angle-decore sub-angle sub-angle-decore-LD"></div></div><div class="angle-decore angle-parent angle-decore-RD"><div class="angle-decore sub-angle sub-angle-decore-RD"></div></div><div class="content-left"></div><div class="content-right"></div></div></section>';n+='<nav id="main-menu"><div class="main-menu"><h2>Главное меню </h2><ul class="menu-list">';var t=["item-1","item-2","item-3","item-4","item-5","item-6"];(function(){var e=t;if("number"==typeof e.length)for(var a=0,l=e.length;a<l;a++){var s=e[a];n=n+'<li class="menu-item">'+i.escape(null==(r=s)?"":r)+"</li>"}else for(var a in l=0,e)l++,s=e[a],n=n+'<li class="menu-item">'+i.escape(null==(r=s)?"":r)+"</li>"}).call(this),n+='</ul></div><div class="page-navigate"><h2>Навигация </h2><ul class="menu-list">',t=["item-1","item-2","item-3","item-4","item-5","item-6"],function(){var e=t;if("number"==typeof e.length)for(var a=0,l=e.length;a<l;a++){var s=e[a];n=n+'<li class="menu-item">'+i.escape(null==(r=s)?"":r)+"</li>"}else for(var a in l=0,e)l++,s=e[a],n=n+'<li class="menu-item">'+i.escape(null==(r=s)?"":r)+"</li>"}.call(this),n+='</ul></div></nav><div class="arrow arrow-U smoll-arrow"><div class="arrow arrow-U sub-arrow"></div></div><div class="arrow arrow-D smoll-arrow"><div class="arrow arrow-D sub-arrow"></div></div><div class="arrow arrow-L smoll-arrow"><div class="arrow arrow-L sub-arrow"></div></div><div class="arrow arrow-R smoll-arrow"><div class="arrow arrow-R sub-arrow"></div></div><div id="b_menu"><div id="b_menu-elems"></div>';for(let e=0;e<6;e++)n+='<div class="b_menu-elem"></div>';return n+='</div><div class="menu-trigger"><div class="arrow arrow-U smoll-arrow pageNav-arrow"><div class="arrow arrow-U sub-arrow pageNav-arrow"></div></div><button class="menu-btn" type="button">',t=["Ю","Н","Е","М"],function(){var e=t;if("number"==typeof e.length)for(var a=0,l=e.length;a<l;a++){var s=e[a];n=n+'<div class="wrap-btn-simbol">'+i.escape(null==(r=s)?"":r)+"</div>"}else for(var a in l=0,e)l++,s=e[a],n=n+'<div class="wrap-btn-simbol">'+i.escape(null==(r=s)?"":r)+"</div>"}.call(this),n+='</button><div class="arrow arrow-В smoll-arrow pageNav-arrow"><div class="arrow arrow-В sub-arrow pageNav-arrow"></div></div></div></main><footer> </footer></body></html>'}},367:(e,r,a)=>{a(115),e.exports=function(e){return""+"<header>HEADER!!!</header>"}},115:(e,r,a)=>{"use strict";var i=Object.prototype.hasOwnProperty;function n(e,r){return Array.isArray(e)?function(e,r){for(var a,i="",t="",l=Array.isArray(r),s=0;s<e.length;s++)(a=n(e[s]))&&(l&&r[s]&&(a=o(a)),i=i+t+a,t=" ");return i}(e,r):e&&"object"==typeof e?function(e){var r="",a="";for(var n in e)n&&e[n]&&i.call(e,n)&&(r=r+a+n,a=" ");return r}(e):e||""}function t(e){if(!e)return"";if("object"==typeof e){var r="";for(var a in e)i.call(e,a)&&(r=r+a+":"+e[a]+";");return r}return e+""}function l(e,r,a,i){if(!1===r||null==r||!r&&("class"===e||"style"===e))return"";if(!0===r)return" "+(i?e:e+'="'+e+'"');var n=typeof r;return"object"!==n&&"function"!==n||"function"!=typeof r.toJSON||(r=r.toJSON()),"string"==typeof r||(r=JSON.stringify(r),a||-1===r.indexOf('"'))?(a&&(r=o(r))," "+e+'="'+r+'"'):" "+e+"='"+r.replace(/'/g,"&#39;")+"'"}r.merge=function e(r,a){if(1===arguments.length){for(var i=r[0],n=1;n<r.length;n++)i=e(i,r[n]);return i}for(var l in a)if("class"===l){var s=r[l]||[];r[l]=(Array.isArray(s)?s:[s]).concat(a[l]||[])}else if("style"===l){s=(s=t(r[l]))&&";"!==s[s.length-1]?s+";":s;var o=t(a[l]);o=o&&";"!==o[o.length-1]?o+";":o,r[l]=s+o}else r[l]=a[l];return r},r.classes=n,r.style=t,r.attr=l,r.attrs=function(e,r){var a="";for(var s in e)if(i.call(e,s)){var o=e[s];if("class"===s){a=l(s,o=n(o),!1,r)+a;continue}"style"===s&&(o=t(o)),a+=l(s,o,!1,r)}return a};var s=/["&<>]/;function o(e){var r=""+e,a=s.exec(r);if(!a)return e;var i,n,t,l="";for(i=a.index,n=0;i<r.length;i++){switch(r.charCodeAt(i)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}n!==i&&(l+=r.substring(n,i)),n=i+1,l+=t}return n!==i?l+r.substring(n,i):l}r.escape=o,r.rethrow=function e(r,i,n,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&i||t))throw r.message+=" on line "+n,r;try{t=t||a(469).readFileSync(i,"utf8")}catch(a){e(r,null,n)}var l=3,s=t.split("\n"),o=Math.max(n-l,0),c=Math.min(s.length,n+l);throw l=s.slice(o,c).map((function(e,r){var a=r+o+1;return(a==n?"  > ":"    ")+a+"| "+e})).join("\n"),r.path=i,r.message=(i||"Pug")+":"+n+"\n"+l+"\n\n"+r.message,r}},469:()=>{}},r={};function a(i){var n=r[i];if(void 0!==n)return n.exports;var t=r[i]={exports:{}};return e[i](t,t.exports,a),t.exports}a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var i in r)a.o(r,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";a(9),console.log("babel")})()})();