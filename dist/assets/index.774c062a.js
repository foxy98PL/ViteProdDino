var C={};C.byteLength=u;C.toByteArray=I;C.fromByteArray=H;var s=[],d=[],B=typeof Uint8Array!="undefined"?Uint8Array:Array,M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var A=0,N=M.length;A<N;++A)s[A]=M[A],d[M.charCodeAt(A)]=A;d["-".charCodeAt(0)]=62;d["_".charCodeAt(0)]=63;function l(a){var r=a.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=a.indexOf("=");o===-1&&(o=r);var h=o===r?0:4-o%4;return[o,h]}function u(a){var r=l(a),o=r[0],h=r[1];return(o+h)*3/4-h}function k(a,r,o){return(r+o)*3/4-o}function I(a){var r,o=l(a),h=o[0],n=o[1],e=new B(k(a,h,n)),t=0,i=n>0?h-4:h,v;for(v=0;v<i;v+=4)r=d[a.charCodeAt(v)]<<18|d[a.charCodeAt(v+1)]<<12|d[a.charCodeAt(v+2)]<<6|d[a.charCodeAt(v+3)],e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255;return n===2&&(r=d[a.charCodeAt(v)]<<2|d[a.charCodeAt(v+1)]>>4,e[t++]=r&255),n===1&&(r=d[a.charCodeAt(v)]<<10|d[a.charCodeAt(v+1)]<<4|d[a.charCodeAt(v+2)]>>2,e[t++]=r>>8&255,e[t++]=r&255),e}function L(a){return s[a>>18&63]+s[a>>12&63]+s[a>>6&63]+s[a&63]}function j(a,r,o){for(var h,n=[],e=r;e<o;e+=3)h=(a[e]<<16&16711680)+(a[e+1]<<8&65280)+(a[e+2]&255),n.push(L(h));return n.join("")}function H(a){for(var r,o=a.length,h=o%3,n=[],e=16383,t=0,i=o-h;t<i;t+=e)n.push(j(a,t,t+e>i?i:t+e));return h===1?(r=a[o-1],n.push(s[r>>2]+s[r<<4&63]+"==")):h===2&&(r=(a[o-2]<<8)+a[o-1],n.push(s[r>>10]+s[r>>4&63]+s[r<<2&63]+"=")),n.join("")}var w={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */w.read=function(a,r,o,h,n){var e,t,i=n*8-h-1,v=(1<<i)-1,F=v>>1,f=-7,c=o?n-1:0,x=o?-1:1,p=a[r+c];for(c+=x,e=p&(1<<-f)-1,p>>=-f,f+=i;f>0;e=e*256+a[r+c],c+=x,f-=8);for(t=e&(1<<-f)-1,e>>=-f,f+=h;f>0;t=t*256+a[r+c],c+=x,f-=8);if(e===0)e=1-F;else{if(e===v)return t?NaN:(p?-1:1)*(1/0);t=t+Math.pow(2,h),e=e-F}return(p?-1:1)*t*Math.pow(2,e-h)};w.write=function(a,r,o,h,n,e){var t,i,v,F=e*8-n-1,f=(1<<F)-1,c=f>>1,x=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=h?0:e-1,y=h?1:-1,g=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(i=isNaN(r)?1:0,t=f):(t=Math.floor(Math.log(r)/Math.LN2),r*(v=Math.pow(2,-t))<1&&(t--,v*=2),t+c>=1?r+=x/v:r+=x*Math.pow(2,1-c),r*v>=2&&(t++,v/=2),t+c>=f?(i=0,t=f):t+c>=1?(i=(r*v-1)*Math.pow(2,n),t=t+c):(i=r*Math.pow(2,c-1)*Math.pow(2,n),t=0));n>=8;a[o+p]=i&255,p+=y,i/=256,n-=8);for(t=t<<n|i,F+=n;F>0;a[o+p]=t&255,p+=y,t/=256,F-=8);a[o+p-y]|=g*128};export{C as b,w as i};