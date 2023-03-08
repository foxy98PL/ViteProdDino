import{_ as re}from"./index.8bc21784.js";import{b as ae}from"./index.ca038754.js";const ie=Symbol(),Q=Object.getPrototypeOf,q=new WeakMap,le=e=>e&&(q.has(e)?q.get(e):Q(e)===Object.prototype||Q(e)===Array.prototype),ce=e=>le(e)&&e[ie]||null,X=(e,t=!0)=>{q.set(e,t)},K=e=>typeof e=="object"&&e!==null,W=new WeakMap,T=new WeakSet,de=(e=Object.is,t=(n,y)=>new Proxy(n,y),o=n=>K(n)&&!T.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),a=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},c=new WeakMap,u=(n,y,v=a)=>{const m=c.get(n);if((m==null?void 0:m[0])===y)return m[1];const p=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return X(p,!0),c.set(n,[y,p]),Reflect.ownKeys(n).forEach(E=>{const b=Reflect.get(n,E);T.has(b)?(X(b,!1),p[E]=b):b instanceof Promise?Object.defineProperty(p,E,{get(){return v(b)}}):W.has(b)?p[E]=fe(b,v):p[E]=b}),Object.freeze(p)},g=new WeakMap,w=[1,1],J=n=>{if(!K(n))throw new Error("object required");const y=g.get(n);if(y)return y;let v=w[0];const m=new Set,p=(i,r=++w[0])=>{v!==r&&(v=r,m.forEach(s=>s(i,r)))};let E=w[1];const b=(i=++w[1])=>(E!==i&&!m.size&&(E=i,C.forEach(([r])=>{const s=r[1](i);s>v&&(v=s)})),v),x=i=>(r,s)=>{const f=[...r];f[1]=[i,...f[1]],p(f,s)},C=new Map,ne=(i,r)=>{if(({VITE_API:"https://dinoapi-production.up.railway.app",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&C.has(i))throw new Error("prop listener already exists");if(m.size){const s=r[3](x(i));C.set(i,[r,s])}else C.set(i,[r])},Z=i=>{var r;const s=C.get(i);s&&(C.delete(i),(r=s[1])==null||r.call(s))},oe=i=>(m.add(i),m.size===1&&C.forEach(([s,f],P)=>{if(({VITE_API:"https://dinoapi-production.up.railway.app",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&f)throw new Error("remove already exists");const z=s[3](x(P));C.set(P,[s,z])}),()=>{m.delete(i),m.size===0&&C.forEach(([s,f],P)=>{f&&(f(),C.set(P,[s]))})}),$=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),N=t($,{deleteProperty(i,r){const s=Reflect.get(i,r);Z(r);const f=Reflect.deleteProperty(i,r);return f&&p(["delete",[r],s]),f},set(i,r,s,f){var P;const z=Reflect.has(i,r),G=Reflect.get(i,r,f);if(z&&e(G,s))return!0;Z(r),K(s)&&(s=ce(s)||s);let R=s;if(!((P=Object.getOwnPropertyDescriptor(i,r))!=null&&P.set))if(s instanceof Promise)s.then(O=>{s.status="fulfilled",s.value=O,p(["resolve",[r],O])}).catch(O=>{s.status="rejected",s.reason=O,p(["reject",[r],O])});else{!W.has(s)&&o(s)&&(R=L(s));const O=!T.has(R)&&W.get(R);O&&ne(r,O)}return Reflect.set(i,r,R,f),p(["set",[r],s,G]),!0}});g.set(n,N);const se=[$,b,u,oe];return W.set(N,se),Reflect.ownKeys(n).forEach(i=>{const r=Object.getOwnPropertyDescriptor(n,i);r.get||r.set?Object.defineProperty($,i,r):N[i]=n[i]}),N})=>[J,W,T,e,t,o,a,c,u,g,w],[ue]=de();function L(e={}){return ue(e)}function M(e,t,o){const a=W.get(e);({VITE_API:"https://dinoapi-production.up.railway.app",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!a&&console.warn("Please use proxy object");let c;const u=[],g=a[3];let w=!1;const n=g(y=>{if(u.push(y),o){t(u.splice(0));return}c||(c=Promise.resolve().then(()=>{c=void 0,w&&t(u.splice(0))}))});return w=!0,()=>{w=!1,n()}}function fe(e,t){const o=W.get(e);({VITE_API:"https://dinoapi-production.up.railway.app",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!o&&console.warn("Please use proxy object");const[a,c,u]=o;return u(a,c(),t)}const l=L({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1,isStandalone:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,walletConnectVersion:1}),d={state:l,subscribe(e){return M(l,()=>e(l))},setChains(e){l.chains=e},setStandaloneChains(e){l.standaloneChains=e},setStandaloneUri(e){l.standaloneUri=e},getSelectedChain(){const e=F.client().getNetwork().chain;return e&&(l.selectedChain=e),l.selectedChain},setSelectedChain(e){l.selectedChain=e},setIsStandalone(e){l.isStandalone=e},setIsCustomDesktop(e){l.isCustomDesktop=e},setIsCustomMobile(e){l.isCustomMobile=e},getAccount(){const e=F.client().getAccount();l.address=e.address,l.isConnected=e.isConnected},setAddress(e){l.address=e},setIsConnected(e){l.isConnected=e},setProfileName(e){l.profileName=e},setProfileAvatar(e){l.profileAvatar=e},setProfileLoading(e){l.profileLoading=e},setBalanceLoading(e){l.balanceLoading=e},setBalance(e){l.balance=e},setIsDataLoaded(e){l.isDataLoaded=e},setIsUiLoaded(e){l.isUiLoaded=e},setWalletConnectVersion(e){l.walletConnectVersion=e},resetEnsProfile(){l.profileName=void 0,l.profileAvatar=void 0},resetBalance(){l.balance=void 0},resetAccount(){l.address=void 0,l.isConnected=!1,d.resetEnsProfile(),d.resetBalance()}},D=L({initialized:!1,ethereumClient:void 0}),F={setEthereumClient(e){!D.initialized&&e&&(D.ethereumClient=e,d.setChains(e.chains),D.initialized=!0)},client(){if(D.ethereumClient)return D.ethereumClient;throw new Error("ClientCtrl has no client set")}},A={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",isMobile(){return typeof window<"u"?Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return A.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isEmptyObject(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.getOwnPropertyNames(e).length===0&&Object.getOwnPropertySymbols(e).length===0},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,o){if(A.isHttpUrl(e))return this.formatUniversalUrl(e,t,o);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),this.setWalletConnectDeepLink(a,o);const c=encodeURIComponent(t);return`${a}wc?uri=${c}`},formatUniversalUrl(e,t,o){if(!A.isHttpUrl(e))return this.formatNativeUrl(e,t,o);let a=e;e.endsWith("/")&&(a=e.slice(0,-1)),this.setWalletConnectDeepLink(a,o);const c=encodeURIComponent(t);return`${a}/wc?uri=${c}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t="_self"){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(A.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(A.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(A.WALLETCONNECT_DEEPLINK_CHOICE)},isNull(e){return e===null}};function pe(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const U=L({projectId:"",themeMode:pe()?"dark":"light",themeColor:"default",themeBackground:A.isMobile()?"themeColor":"gradient",themeZIndex:89,mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableNetworkView:!1,enableAccountView:!0,defaultChain:void 0,explorerAllowList:void 0,explorerDenyList:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),V={state:U,subscribe(e){return M(U,()=>e(U))},setConfig(e){var t,o,a,c;if(d.setStandaloneChains(e.standaloneChains),d.setIsStandalone(Boolean((t=e.standaloneChains)==null?void 0:t.length)||Boolean(e.enableStandaloneMode)),d.setIsCustomMobile(Boolean((o=e.mobileWallets)==null?void 0:o.length)),d.setIsCustomDesktop(Boolean((a=e.desktopWallets)==null?void 0:a.length)),d.setWalletConnectVersion((c=e.walletConnectVersion)!=null?c:1),e.defaultChain)d.setSelectedChain(e.defaultChain);else if(!d.state.isStandalone){const u=F.client().getDefaultChain();d.setSelectedChain(u)}Object.assign(U,e)},setThemeConfig(e){Object.assign(U,e)}},Y="https://explorer-api.walletconnect.com";function he(e){const t=Object.fromEntries(Object.entries(e).filter(([o,a])=>typeof a<"u"&&a!==null&&a!=="").map(([o,a])=>[o,a.toString()]));return new URLSearchParams(t).toString()}const k={async fetchWallets(e,t){const o=he(t),a=`${Y}/v3/wallets?projectId=${e}&${o}`;return(await fetch(a)).json()},formatImageUrl(e,t){return`${Y}/v3/logo/lg/${t}?projectId=${e}`}},I=L({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},previewWallets:[],recomendedWallets:[]});function B(){const{projectId:e}=V.state;if(!e)throw new Error("projectId is required to work with explorer api");return e}const Oe={state:I,async getPreviewWallets(e){const{listings:t}=await k.fetchWallets(B(),e);return I.previewWallets=Object.values(t),I.previewWallets},async getRecomendedWallets(){const{listings:e}=await k.fetchWallets(B(),{page:1,entries:6});I.recomendedWallets=Object.values(e)},async getPaginatedWallets(e){const{page:t,search:o}=e,{listings:a,total:c}=await k.fetchWallets(B(),e),u=Object.values(a),g=o?"search":"wallets";return I[g]={listings:[...I[g].listings,...u],total:c,page:t!=null?t:1},{listings:u,total:c}},getImageUrl(e){return k.formatImageUrl(B(),e)},resetSearch(){I.search={listings:[],total:0,page:1}}},h=L({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),_={state:h,subscribe(e){return M(h,()=>e(h))},push(e,t){e!==h.view&&(h.view=e,t&&(h.data=t),h.history.push(e))},replace(e){h.view=e,h.history=[e]},goBack(){if(h.history.length>1){h.history.pop();const[e]=h.history.slice(-1);h.view=e}}},j=L({open:!1}),H={state:j,subscribe(e){return M(j,()=>e(j))},async open(e){return new Promise(t=>{const{isConnected:o,isStandalone:a,isUiLoaded:c,isDataLoaded:u}=d.state,{enableNetworkView:g}=V.state;if(a?(d.setStandaloneUri(e==null?void 0:e.uri),d.setStandaloneChains(e==null?void 0:e.standaloneChains),_.replace("ConnectWallet")):e!=null&&e.route?_.replace(e.route):o?_.replace("Account"):g?_.replace("SelectNetwork"):_.replace("ConnectWallet"),c&&u)j.open=!0,t();else{const w=setInterval(()=>{d.state.isUiLoaded&&d.state.isDataLoaded&&(clearInterval(w),j.open=!0,t())},200)}})},close(){j.open=!1}},S=L({open:!1,message:"",variant:"success"}),Le={state:S,subscribe(e){return M(S,()=>e(S))},openToast(e,t){S.open=!0,S.message=e,S.variant=t},closeToast(){S.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=ae.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));var we=Object.defineProperty,ee=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,te=(e,t,o)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,be=(e,t)=>{for(var o in t||(t={}))me.call(t,o)&&te(e,o,t[o]);if(ee)for(var o of ee(t))ge.call(t,o)&&te(e,o,t[o]);return e};class Ce{constructor(t){this.openModal=H.open,this.closeModal=H.close,this.subscribeModal=H.subscribe,this.setTheme=V.setThemeConfig,V.setConfig(be({enableStandaloneMode:!0},t)),this.initUi()}async initUi(){if(typeof window<"u"){await re(()=>import("./index.7dd24fdc.js"),["assets/index.7dd24fdc.js","assets/index.8bc21784.js","assets/index.e3df60d9.css","assets/index.ca038754.js","assets/index.774c062a.js"]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),d.setIsUiLoaded(!0)}}}var Pe=Object.freeze(Object.defineProperty({__proto__:null,Web3Modal:Ce},Symbol.toStringTag,{value:"Module"}));export{Oe as A,F as L,Le as P,V as W,d as a,A as d,_ as g,Pe as i,H as k};
